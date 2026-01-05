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
  private applePayReady = false; // Flag per sapere se è la prima chiamata ad Apple Pay
  private googlePayReady = false; // Flag per sapere se è la prima chiamata a Google Pay

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
      // 🔥 FIX: Delay su Android per evitare problemi di inizializzazione
      if (this.platform.is('android') && this.platform.is('capacitor')) {
        console.log('⏳ Android detected - adding initialization delay...');
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      await Stripe.initialize({
        publishableKey: environment.additionalConfig.stripePublishableKey,
      });

      this.isInitialized = true;
      console.log('✅ Stripe initialized');
    } catch (error) {
      console.error('❌ Error initializing Stripe:', error);
      throw error;
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
    // Verifica base: deve essere Android + Capacitor
    if (!this.platform.is('android') || !this.platform.is('capacitor')) {
      return false;
    }

    // Verifica che Stripe sia inizializzato
    if (!this.isInitialized) {
      console.warn('⚠️ Stripe not initialized - Google Pay may not work');
      return false;
    }

    return true;
  }

   /**
   * Paga con Apple Pay - VERSIONE CORRETTA CON DELAY INIZIALE
   */
  async payWithApplePay(
    amount: number,
    currency: string = 'EUR',
    idAccountConnected: string = '',
    merchantName: string = environment.additionalConfig.merchantName
  ): Promise<PaymentResult> {

    if (!this.platform.is('ios')) {
      return {
        success: false,
        error: 'Apple Pay è disponibile solo su dispositivi iOS'
      };
    }

    try {
      console.log('🍎 Starting Apple Pay...');

      // 🔥 FIX: Delay SOLO alla prima chiamata per evitare Swift concurrency issue
      if (!this.applePayReady) {
        console.log('⏳ First Apple Pay call - adding delay for Swift concurrency...');
        await new Promise(resolve => setTimeout(resolve, 500));
        this.applePayReady = true;
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

      const merchantId = environment.additionalConfig?.merchantAppleIdentifier || 'merchant.com.gouego.app';
      console.log('🔑 Merchant Identifier:', merchantId);

      await Stripe.createApplePay({
        paymentIntentClientSecret: paymentIntent.clientSecret,
        paymentSummaryItems: [
          {
            label: merchantName,
            amount: amount / 100
          }
        ],
        merchantIdentifier: merchantId,
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
      console.error('❌ Apple Pay error:', error);

      // Reset del flag in caso di errore, per riprovare con delay
      this.applePayReady = false;

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
   * Paga con Google Pay
   */
  async payWithGooglePay(
    amount: number,
    currency: string = 'EUR',
    idAccountConnected: string = '',
    merchantName: string = environment.additionalConfig.merchantName
  ): Promise<PaymentResult> {

    console.log('=== GOOGLE PAY DEBUG START ===');
    console.log('📱 [1/10] Entering payWithGooglePay method');
    console.log('📱 Parameters:', { amount, currency, idAccountConnected, merchantName });

    // Verifica piattaforma
    console.log('📱 [2/10] Checking platform...');
    console.log('📱 Platform info:', {
      isAndroid: this.platform.is('android'),
      isCapacitor: this.platform.is('capacitor'),
      isIOS: this.platform.is('ios'),
      platforms: this.platform.platforms()
    });

    if (!this.platform.is('android')) {
      console.error('❌ [2/10] NOT Android platform - STOPPING');
      return {
        success: false,
        error: 'Google Pay è disponibile solo su dispositivi Android'
      };
    }
    console.log('✅ [2/10] Platform check passed - is Android');

    try {
      console.log('📱 [3/10] Starting Google Pay flow...');

      // 🔥 FIX: Delay SOLO alla prima chiamata per evitare problemi di concorrenza su Android
      console.log('📱 [4/10] Checking googlePayReady flag:', this.googlePayReady);
      if (!this.googlePayReady) {
        console.log('⏳ [4/10] First Google Pay call - adding delay for Android initialization...');
        await new Promise(resolve => setTimeout(resolve, 500));
        this.googlePayReady = true;
        console.log('✅ [4/10] Delay completed, flag set to true');
      } else {
        console.log('✅ [4/10] Already ready, skipping delay');
      }

      // Verifica disponibilità base (piattaforma e inizializzazione)
      console.log('📱 [5/10] Checking Google Pay availability...');
      console.log('📱 isInitialized:', this.isInitialized);
      const isPlatformAvailable = this.isGooglePayAvailable();
      console.log('📱 isPlatformAvailable result:', isPlatformAvailable);

      if (!isPlatformAvailable) {
        console.error('❌ [5/10] Platform not available - STOPPING');
        throw new Error('Google Pay non disponibile su questa piattaforma');
      }
      console.log('✅ [5/10] Availability check passed');

      // Verifica effettiva: tenta di verificare se Google Pay è configurato
      console.log('📱 [6/10] Verifying Google Pay configuration on device...');

      // Crea Payment Intent
      console.log('📱 [7/10] Creating Payment Intent...');
      console.log('📱 Calling backend:', this.STRIPE_BACKEND_URL);

      const paymentIntent = await this.createPaymentIntent(
        amount,
        currency.toLowerCase(),
        idAccountConnected
      );

      console.log('✅ [7/10] Payment Intent created successfully');
      console.log('📱 Payment Intent details:', {
        id: paymentIntent.id,
        amount: paymentIntent.amount,
        currency: paymentIntent.currency,
        status: paymentIntent.status
      });

      // Crea il payment request per Google Pay
      console.log('📱 [8/10] Creating Google Pay sheet...');

      // NOTA: merchantIdentifier per Google Pay deve corrispondere al merchantName
      // configurato nel Google Pay Business Console (non il package name Android)
      const googlePayConfig = {
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
      };

      console.log('📱 [8/10] Google Pay config prepared:', JSON.stringify(googlePayConfig, null, 2));
      console.log('📱 [8/10] Calling Stripe.createGooglePay()...');

      // 🔥 FIX: createGooglePay e presentGooglePay devono essere chiamati INSIEME
      // senza interruzioni, altrimenti il launcher interno viene garbage collected
      await Stripe.createGooglePay(googlePayConfig);
      console.log('✅ [8/10] Stripe.createGooglePay() completed successfully');

      // Presenta Google Pay IMMEDIATAMENTE dopo la creazione
      console.log('📱 [9/10] Presenting Google Pay IMMEDIATELY...');
      const result = await Stripe.presentGooglePay();
      console.log('✅ [9/10] Stripe.presentGooglePay() returned');
      console.log('📱 [9/10] Google Pay result:', JSON.stringify(result, null, 2));

      console.log('📱 [10/10] Processing payment result...');
      console.log('📱 Checking result.paymentResult:', result.paymentResult);
      console.log('📱 GooglePayEventsEnum.Completed:', GooglePayEventsEnum.Completed);

      if (result.paymentResult === GooglePayEventsEnum.Completed) {
        console.log('✅ [10/10] Payment completed successfully!');
        console.log('=== GOOGLE PAY DEBUG END - SUCCESS ===');
        return {
          success: true,
          paymentIntentId: paymentIntent.id
        };
      } else if (result.paymentResult === GooglePayEventsEnum.Canceled) {
        console.log('⚠️ [10/10] Payment canceled by user');
        console.log('=== GOOGLE PAY DEBUG END - CANCELED ===');
        return {
          success: false,
          error: 'Pagamento annullato dall\'utente'
        };
      } else if (result.paymentResult === GooglePayEventsEnum.Failed) {
        console.log('❌ [10/10] Payment failed');
        console.log('=== GOOGLE PAY DEBUG END - FAILED ===');
        return {
          success: false,
          error: 'Pagamento fallito'
        };
      } else {
        console.log('⚠️ [10/10] Payment not completed - unknown result:', result.paymentResult);
        console.log('=== GOOGLE PAY DEBUG END - UNKNOWN ===');
        return {
          success: false,
          error: 'Pagamento non completato'
        };
      }

    } catch (error: any) {
      console.error('=== GOOGLE PAY DEBUG - ERROR CAUGHT ===');
      console.error('❌ Google Pay error occurred');
      console.error('❌ Error type:', typeof error);
      console.error('❌ Error object:', error);
      console.error('❌ Error message:', error.message);
      console.error('❌ Error name:', error.name);
      console.error('❌ Error stack:', error.stack);

      // Reset del flag in caso di errore, per riprovare con delay
      this.googlePayReady = false;
      console.log('🔄 googlePayReady flag reset to false');

      // Gestisci errori specifici
      let errorMessage = 'Errore durante il pagamento con Google Pay';

      if (error.message) {
        const msg = error.message.toLowerCase();
        console.log('📝 Analyzing error message:', msg);

        // Errori di disponibilità
        if (msg.includes('not available') || msg.includes('not supported') || msg.includes('unavailable')) {
          errorMessage = 'Google Pay non è disponibile su questo dispositivo. Verifica di avere Google Play Services aggiornato.';
        }
        // Errori di configurazione carte
        else if (msg.includes('no cards') || msg.includes('no payment') || msg.includes('no card')) {
          errorMessage = 'Nessuna carta configurata in Google Pay. Apri Google Pay per aggiungerne una.';
        }
        // Errori di cancellazione
        else if (msg.includes('cancel') || msg.includes('user cancel')) {
          errorMessage = 'Pagamento annullato';
        }
        // Errori di configurazione merchant
        else if (msg.includes('merchant') || msg.includes('configuration') || msg.includes('invalid')) {
          errorMessage = 'Configurazione Google Pay non valida. Contatta il supporto.';
        }
        // Errori di rete
        else if (msg.includes('network') || msg.includes('connection') || msg.includes('timeout')) {
          errorMessage = 'Errore di connessione. Verifica la tua connessione internet.';
        }
        // Errori di inizializzazione
        else if (msg.includes('not initialized') || msg.includes('initialization')) {
          errorMessage = 'Stripe non è stato inizializzato correttamente. Riavvia l\'app.';
        }
        // Errori Google Play Services
        else if (msg.includes('play services') || msg.includes('google play')) {
          errorMessage = 'Google Play Services non disponibile o non aggiornato. Aggiorna Google Play Services.';
        }
        // Per errori non riconosciuti, mostra il messaggio originale
        else {
          errorMessage = `Errore Google Pay: ${error.message}`;
          console.log('⚠️ Unknown error pattern, using original message');
        }

        console.log('📝 Final error message:', errorMessage);
      } else {
        console.log('⚠️ No error.message available');
      }

      console.error('=== GOOGLE PAY DEBUG END - ERROR ===');

      return {
        success: false,
        error: errorMessage
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

  //Sistemo eventuali errori di arrotondamento
  amount = Math.round(amount);
  console.log('=== PRESENT PAYMENT OPTIONS DEBUG START ===');
  console.log('💳 presentPaymentOptions called with:', { amount, currency, idAccountConnected, merchantName });
  console.log('💳 Platform info:', {
    isCapacitor: this.platform.is('capacitor'),
    isAndroid: this.platform.is('android'),
    isIOS: this.platform.is('ios'),
    platforms: this.platform.platforms()
  });

  // 🌐 BROWSER: usa Stripe.js
  if (!this.platform.is('capacitor')) {
    console.log('💻 Browser detected - using Stripe.js');
    return this.payWithCardBrowser(amount, currency, idAccountConnected, merchantName);
  }

  console.log('📱 Mobile detected - checking payment methods...');

  // 📱 MOBILE: usa Stripe Native

  // Su iOS, prova prima Apple Pay
  const applePayAvailable = this.isApplePayAvailable();
  console.log('🍎 Apple Pay available?', applePayAvailable);
  if (applePayAvailable) {
    console.log('🍎 Using Apple Pay');
    return this.payWithApplePay(amount, currency, idAccountConnected, merchantName);
  }

  // Su Android, usa Payment Sheet (include Google Pay automaticamente)
  // NOTA: Disabilitato Google Pay nativo per bug nel plugin v7.2.2
  // (NullPointerException in GooglePayExecutor.kt:66)
  console.log('📱 Android detected - using Payment Sheet (includes Google Pay option)');
  return this.payWithCard(amount, currency, idAccountConnected, merchantName);
}

}
