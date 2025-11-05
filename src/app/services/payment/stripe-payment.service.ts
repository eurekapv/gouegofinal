import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
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

  constructor(
    private http: HttpClient,
    private platform: Platform
  ) {}

  /**
   * Inizializza Stripe con la publishable key
   * Da richiamare in app.component.ts
   */
  async initialize(): Promise<void> {
    if (this.isInitialized) {
      return;
    }

    try {
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

  /**
   * Verifica se Apple Pay è disponibile (solo iOS)
   */
  async isApplePayAvailable(): Promise<boolean> {
    // Su iOS, assumiamo che Apple Pay sia disponibile
    // Il plugin gestirà l'errore se l'utente non ha carte configurate
    return this.platform.is('ios');
  }

  /**
   * Verifica se Google Pay è disponibile (solo Android)
   */
  async isGooglePayAvailable(): Promise<boolean> {
    // Su Android, assumiamo che Google Pay sia disponibile
    // Il plugin gestirà l'errore se l'utente non ha carte configurate
    return this.platform.is('android');
  }

  /**
   * Paga con Apple Pay
   */
  async payWithApplePay(
    amount: number,
    currency: string = 'EUR',
    idAccountConnected: string = '',
    merchantName: string = environment.additionalConfig.merchantName
  ): Promise<PaymentResult> {
    try {
      // Verifica disponibilità
      const isAvailable = await this.isApplePayAvailable();
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
      const isAvailable = await this.isGooglePayAvailable();
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

  /**
   * Metodo universale: sceglie automaticamente il metodo migliore
   */
  async presentPaymentOptions(
    amount: number,
    currency: string = 'EUR',
    idAccountConnected: string = '',
    merchantName: string = environment.additionalConfig.merchantName
  ): Promise<PaymentResult> {
    
    // Su iOS, prova prima Apple Pay
    if (this.platform.is('ios')) {
      const applePayAvailable = await this.isApplePayAvailable();
      if (applePayAvailable) {
        return this.payWithApplePay(amount, currency, idAccountConnected, merchantName);
      }
    }

    // Su Android, prova prima Google Pay
    if (this.platform.is('android')) {
      const googlePayAvailable = await this.isGooglePayAvailable();
      if (googlePayAvailable) {
        return this.payWithGooglePay(amount, currency, idAccountConnected, merchantName);
      }
    }

    // Fallback: carta tradizionale
    return this.payWithCard(amount, currency, idAccountConnected, merchantName);
  }
}
