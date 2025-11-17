import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController, Platform } from '@ionic/angular';
import { Stripe, PaymentSheetEventsEnum, ApplePayEventsEnum, GooglePayEventsEnum } from '@capacitor-community/stripe';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';


export interface StripePaymentIntent {
  id: string;
  clientSecret: string;
  amount: number;
  currency: string;
  status: string;
  testMode: boolean;
}

export interface PaymentResult {
  success: boolean;
  paymentIntentId?: string;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class StripePaymentService {
  
  private readonly STRIPE_BACKEND_URL = environment.externalUrl.stripemanager;
  private isInitialized = false;
  private applePayPreloaded = false;
  
  private stripeJs: any = null;
  private elements: any = null;
  private currentPaymentIntentId: string | null = null;

  constructor(
    private http: HttpClient,
    private platform: Platform,
    private loadingController: LoadingController
  ) {}

  /**
   * Inizializza Stripe con la publishable key
   * Da richiamare in app.component.ts
   */
  async initialize(): Promise<void> {
    if (this.isInitialized) {
      console.log('⚠️ Stripe already initialized');
      return;
    }

    try {
      await Stripe.initialize({
        publishableKey: environment.additionalConfig.stripePublishableKey,
      });
      
      this.isInitialized = true;
      console.log('✅ Stripe initialized');

      // AGGIUNGI: Preload Apple Pay su iOS
      if (this.platform.is('ios')) {
        await this.preloadApplePay();
      }
    } catch (error) {
      console.error('❌ Error initializing Stripe:', error);
      throw error;
    }
  }

  /**
   * Preload Apple Pay per evitare il bug di concurrency alla prima chiamata
   */
  private async preloadApplePay(): Promise<void> {
    if (this.applePayPreloaded) {
      return;
    }

    try {
      console.log('🍎 Preloading Apple Pay...');
      
      // Aspetta un attimo per dare tempo al sistema
      await new Promise(resolve => setTimeout(resolve, 500));

      // Crea un fake Apple Pay sheet per "scaldare" il sistema
      // Questo fallirà, ma prepara Apple Pay per le chiamate successive
      await Stripe.createApplePay({
        paymentIntentClientSecret: 'pi_fake_secret_for_preload_only',
        paymentSummaryItems: [{
          label: 'Preload',
          amount: 0.01
        }],
        merchantIdentifier: environment.additionalConfig?.merchantAppleIdentifier || 'merchant.com.gouego.app',
        countryCode: 'IT',
        currency: 'EUR'
      });

      this.applePayPreloaded = true;
      console.log('✅ Apple Pay preloaded successfully');

    } catch (error) {
      // Errore atteso perché usiamo un fake payment intent
      console.log('✅ Apple Pay preload completed (error expected)');
      this.applePayPreloaded = true;
    }
  }

  //#region RICHIESTA INTENT PAYMENT AL SERVER 
  /**
   * Richiede un Payment Intent al backend Node.js
   */
  async createPaymentIntent(
    amount: number, 
    currency: string = 'eur',
    idAccountConnected: string = ''
  ): Promise<StripePaymentIntent> {
    try {
      const response = await firstValueFrom(
        this.http.post<StripePaymentIntent>(
          `${this.STRIPE_BACKEND_URL}/create-intent-payment`,
          {
            amount: amount,
            currency: currency,
            idAccountConnected: idAccountConnected
          }
        )
      );
      
      console.log('✅ Payment Intent created:', response);
      return response;
    } catch (error) {
      console.error('❌ Error creating payment intent:', error);
      throw error;
    }
  }

  //#endregion

  //#region MODALITA BROWSER


/**
 * Carica dinamicamente Stripe.js (solo per browser)
 */
private async loadStripeJs(): Promise<any> {
  if (this.stripeJs) {
    return this.stripeJs;
  }

  return new Promise((resolve, reject) => {
    if ((window as any).Stripe) {
      this.stripeJs = (window as any).Stripe(environment.additionalConfig.stripePublishableKey);
      resolve(this.stripeJs);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/';
    script.onload = () => {
      this.stripeJs = (window as any).Stripe(environment.additionalConfig.stripePublishableKey);
      resolve(this.stripeJs);
    };
    script.onerror = () => reject(new Error('Failed to load Stripe.js'));
    document.head.appendChild(script);
  });
}
/**
 * Paga con Carta su Browser (Stripe.js) - SOLO creazione PaymentIntent
 */
async payWithCardBrowser(
  amount: number,
  currency: string = 'EUR',
  idAccountConnected: string = '',
  merchantName: string = environment.additionalConfig.merchantName
): Promise<PaymentResult> {
  try {
    console.log('💳 Avvio pagamento su browser...');

    // Carica Stripe.js
    const stripe = await this.loadStripeJs();

    // Crea Payment Intent
    const paymentIntent = await this.createPaymentIntent(
      amount,
      currency.toLowerCase(),
      idAccountConnected
    );

    console.log('✅ PaymentIntent creato:', paymentIntent.id);
    // ✅ MEMORIZZA L'ID PER USARLO DOPO
    this.currentPaymentIntentId = paymentIntent.id;

    // Prepara gli Elements ma NON montarli ancora
    const appearance = {
      theme: 'stripe' as const,
      variables: {
        colorPrimary: '#0066cc',
      },
    };

    this.elements = stripe.elements({
      clientSecret: paymentIntent.clientSecret,
      appearance
    });

    // Restituisci success - il montaggio avverrà dopo nella pagina
    return {
      success: true,
      paymentIntentId: paymentIntent.id
    };

  } catch (error: any) {
    console.error('❌ Browser payment error:', error);
    return {
      success: false,
      error: error.message || 'Errore durante il pagamento su browser'
    };
  }
}

/**
 * Monta il Payment Element nel DOM (chiamato DOPO che il container è visibile)
 */
async mountPaymentElement(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!this.elements) {
      reject(new Error('Elements non inizializzato'));
      return;
    }

    const paymentElement = this.elements.create('payment');
    
    // Verifica che il container esista
    const container = document.getElementById('payment-element');
    if (!container) {
      reject(new Error('Container #payment-element non trovato'));
      return;
    }
    
    paymentElement.mount('#payment-element');
    console.log('✅ Payment Element montato');
    resolve();
  });
}

/**
 * Conferma il pagamento su browser
 */
async confirmBrowserPayment(): Promise<PaymentResult> {
  try {
    if (!this.elements || !this.stripeJs) {
      throw new Error('Elements non inizializzato');
    }

    const { error } = await this.stripeJs.confirmPayment({
      elements: this.elements,
      confirmParams: {
        return_url: window.location.href,
      },
      redirect: 'if_required'
    });

    if (error) {
      throw new Error(error.message);
    }

    console.log('✅ Pagamento confermato su browser');
    // ✅ RESTITUISCI IL PAYMENT INTENT ID
    const paymentIntentId = this.currentPaymentIntentId;
    
    // Reset dopo aver usato
    this.currentPaymentIntentId = null;

    return {
      success: true,
      paymentIntentId: paymentIntentId 
    };

  } catch (error: any) {
    console.error('❌ Errore conferma pagamento:', error);
    return {
      success: false,
      error: error.message || 'Errore durante la conferma del pagamento'
    };
  }
}
  //#endregion
  
  //#region MODALITA MOBILE
  /**
   * Verifica se Apple Pay è disponibile (solo iOS)
   */
  isApplePayAvailable(): boolean {
    // Su iOS, assumiamo che Apple Pay sia disponibile
    // Il plugin gestirà l'errore se l'utente non ha carte configurate    
    return this.platform.is('ios') && this.platform.is('capacitor');
  }

  /**
   * Verifica se Google Pay è disponibile (solo Android)
   */
  isGooglePayAvailable(): boolean {
    // Su Android, assumiamo che Google Pay sia disponibile
    // Il plugin gestirà l'errore se l'utente non ha carte configurate
    return this.platform.is('android') && this.platform.is('capacitor');
  }

   /**
   * Paga con Apple Pay - CON RETRY AUTOMATICO
   */
  async payWithApplePay(
    amount: number,
    currency: string = 'EUR',
    idAccountConnected: string = '',
    merchantName: string = environment.additionalConfig.merchantName,
    retryCount: number = 0 // ← AGGIUNGI parametro interno
  ): Promise<PaymentResult> {
    
    if (!this.platform.is('ios')) {
      return {
        success: false,
        error: 'Apple Pay è disponibile solo su dispositivi iOS'
      };
    }

      // Mostra loading
    const loading = await this.loadingController.create({
      message: 'Preparazione Apple Pay...',
      duration: 1000 // Si chiude dopo 1 secondo
    });
    await loading.present();
    
    // Aspetta che si chiuda (dà tempo al sistema)
    await loading.onDidDismiss();

    try {
      console.log(`🍎 [Attempt ${retryCount + 1}] Starting Apple Pay...`);

      // Aspetta un attimo prima della chiamata (aiuta con il concurrency)
      if (retryCount === 0) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      // Crea Payment Intent
      const paymentIntent = await this.createPaymentIntent(
        amount, 
        currency.toLowerCase(),
        idAccountConnected
      );
      console.log('✅ Payment Intent created:', paymentIntent.id);

      // Crea Apple Pay sheet
      console.log('🍎 Creating Apple Pay sheet...');
      await Stripe.createApplePay({
        paymentIntentClientSecret: paymentIntent.clientSecret,
        paymentSummaryItems: [
          {
            label: merchantName,
            amount: amount / 100
          }
        ],
        merchantIdentifier: environment.additionalConfig?.merchantAppleIdentifier || 'merchant.com.gouego.app',
        countryCode: 'IT',
        currency: currency
      });
      console.log('✅ Apple Pay sheet created');

      // Presenta Apple Pay
      console.log('🍎 Presenting Apple Pay...');
      const result = await Stripe.presentApplePay();
      console.log('📱 Apple Pay result:', result);
      
      if (result.paymentResult === ApplePayEventsEnum.Completed) {
        console.log('✅ Payment completed!');
        return {
          success: true,
          paymentIntentId: paymentIntent.id
        };
      } else if (result.paymentResult === 'applePayCanceled') {
        return {
          success: false,
          error: 'Pagamento annullato dall\'utente'
        };
      } else {
        return {
          success: false,
          error: 'Pagamento non completato'
        };
      }

    } catch (error: any) {
      console.error(`❌ Apple Pay error (attempt ${retryCount + 1}):`, error);
      
      // RETRY AUTOMATICO se è il primo tentativo e sembra un errore di concurrency
      if (retryCount === 0) {
        console.log('🔄 Retrying Apple Pay (concurrency workaround)...');
        await new Promise(resolve => setTimeout(resolve, 1000));
        return this.payWithApplePay(amount, currency, idAccountConnected, merchantName, 1);
      }
      
      // Gestisci errori specifici
      let errorMessage = 'Errore durante il pagamento con Apple Pay';
      
      if (error.message) {
        const msg = error.message.toLowerCase();
        if (msg.includes('not available') || msg.includes('not supported')) {
          errorMessage = 'Apple Pay non è disponibile su questo dispositivo';
        } else if (msg.includes('no cards') || msg.includes('no payment')) {
          errorMessage = 'Nessuna carta configurata in Apple Pay. Apri Wallet per aggiungerne una.';
        } else if (msg.includes('cancel')) {
          errorMessage = 'Pagamento annullato';
        } else if (msg.includes('merchant')) {
          errorMessage = 'Configurazione Apple Pay non valida. Contatta il supporto.';
        }
      }
      
      return {
        success: false,
        error: errorMessage
      };
    }
  }
  /**
   * Paga con Apple Pay
   */
  async payWithApplePayOLD(
    amount: number,
    currency: string = 'EUR',
    idAccountConnected: string = '',
    merchantName: string = environment.additionalConfig.merchantName
  ): Promise<PaymentResult> {
    try {
      // Verifica disponibilità
      const isAvailable = this.isApplePayAvailable();
      if (!isAvailable) {
        throw new Error('Apple Pay non disponibile');
      }

      // Crea Payment Intent
      const paymentIntent = await this.createPaymentIntent(
        amount, 
        currency.toLowerCase(),
        idAccountConnected
      );

      // Crea il payment sheet per Apple Pay
      await Stripe.createApplePay({
        paymentIntentClientSecret: paymentIntent.clientSecret,
        paymentSummaryItems: [
          {
            label: merchantName,
            amount: (amount / 100) // Converti centesimi in euro
          }
        ],
        merchantIdentifier: environment.additionalConfig.merchantAppleIdentifier, 
        countryCode: 'IT',
        currency: currency
      });

      // Presenta Apple Pay
      const result = await Stripe.presentApplePay();
      
      if (result.paymentResult === ApplePayEventsEnum.Completed) {
        console.log('✅ Apple Pay payment completed');
        return {
          success: true,
          paymentIntentId: paymentIntent.id
        };
      } else {
        throw new Error('Apple Pay payment failed or cancelled');
      }

    } catch (error: any) {
      console.error('❌ Apple Pay error:', error);
      return {
        success: false,
        error: error.message || 'Errore durante il pagamento con Apple Pay'
      };
    }
  }

  /**
   * Paga con Google Pay
   */
  async payWithGooglePay(
    amount: number,
    currency: string = 'EUR',
    idAccountConnected: string = '',
    merchantName: string = environment.additionalConfig.merchantName
  ): Promise<PaymentResult> {
    try {
      // Verifica disponibilità
      const isAvailable = this.isGooglePayAvailable();
      if (!isAvailable) {
        throw new Error('Google Pay non disponibile');
      }

      // Crea Payment Intent
      const paymentIntent = await this.createPaymentIntent(
        amount,
        currency.toLowerCase(),
        idAccountConnected
      );

      // Crea il payment request per Google Pay
      await Stripe.createGooglePay({
        paymentIntentClientSecret: paymentIntent.clientSecret,
        paymentSummaryItems: [
          {
            label: merchantName,
            amount: (amount / 100)
          }
        ],
        merchantIdentifier: merchantName,
        countryCode: 'IT',
        currency: currency
      });

      // Presenta Google Pay
      const result = await Stripe.presentGooglePay();
      
      if (result.paymentResult === GooglePayEventsEnum.Completed) {
        console.log('✅ Google Pay payment completed');
        return {
          success: true,
          paymentIntentId: paymentIntent.id
        };
      } else {
        throw new Error('Google Pay payment failed or cancelled');
      }

    } catch (error: any) {
      console.error('❌ Google Pay error:', error);
      return {
        success: false,
        error: error.message || 'Errore durante il pagamento con Google Pay'
      };
    }
  }

  /**
   * Paga con Carta Tradizionale (Payment Sheet)
   */
  async payWithCard(
    amount: number,
    currency: string = 'EUR',
    idAccountConnected: string = '',
    merchantName: string = environment.additionalConfig.merchantName
  ): Promise<PaymentResult> {

    console.log('Start Pay With Card');

    try {
      // Crea Payment Intent
      const paymentIntent = await this.createPaymentIntent(
        amount,
        currency.toLowerCase(),
        idAccountConnected
      );

      // Crea Payment Sheet
      await Stripe.createPaymentSheet({
        paymentIntentClientSecret: paymentIntent.clientSecret,
        merchantDisplayName: merchantName,
        style: 'alwaysDark', // o 'alwaysLight' o 'automatic'
      });

      // Presenta Payment Sheet
      const result = await Stripe.presentPaymentSheet();
      
      if (result.paymentResult === PaymentSheetEventsEnum.Completed) {
        console.log('✅ Card payment completed');
        return {
          success: true,
          paymentIntentId: paymentIntent.id
        };
      } else {
        throw new Error('Card payment failed or cancelled');
      }

    } catch (error: any) {
      console.error('❌ Card payment error:', error);
      return {
        success: false,
        error: error.message || 'Errore durante il pagamento con carta'
      };
    }
  }

  //#endregion

  /**
  * Metodo universale: sceglie automaticamente il metodo migliore
  */
async presentPaymentOptions(
  amount: number,
  currency: string = 'EUR',
  idAccountConnected: string = '',
  merchantName: string = environment.additionalConfig.merchantName
): Promise<PaymentResult> {
  
  // 🌐 BROWSER: usa Stripe.js
  if (!this.platform.is('capacitor')) {
    console.log('💻 Browser detected - using Stripe.js');
    return this.payWithCardBrowser(amount, currency, idAccountConnected, merchantName);
  }

  // 📱 MOBILE: usa Stripe Native
  
  // Su iOS, prova prima Apple Pay
  if (this.isApplePayAvailable()) {
    console.log('🍎 Apple Pay');
    return this.payWithApplePay(amount, currency, idAccountConnected, merchantName);
  }

  // Su Android, prova prima Google Pay
  if (this.isGooglePayAvailable()) {
    console.log('📱 Google Pay');
    return this.payWithGooglePay(amount, currency, idAccountConnected, merchantName);
  }

  // Fallback: carta tradizionale
  return this.payWithCard(amount, currency, idAccountConnected, merchantName);
}

}
