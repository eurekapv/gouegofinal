import { Injectable } from '@angular/core';
import { PaymentConfiguration, PaymentResult, PaymentChannel, EnvironmentElectronicPayment} from '../models/payment.model';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';



@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  paymentConfig: PaymentConfiguration = new PaymentConfiguration();
  paymentAmount: string = '0.00';
  currency: string = 'EUR';
  description = 'Acquisto';
 
  constructor(private payPal: PayPal) { }


  /**
   * Esegue il pagamento richiesto
   */
  execPayment(paymentMode: PaymentConfiguration, 
              importo: number,
              valuta?: string,
              descrizione?: string) {

  this.description = (descrizione ? descrizione:'Acquisto');
  this.currency = (valuta ? valuta:'EUR');
  this.paymentAmount = importo.toLocaleString('en-us', {minimumFractionDigits: 2});
  this.paymentConfig = paymentMode;

  
  switch (this.paymentConfig.channel) {
    case PaymentChannel.paypal:
     return  (this.payWithPaypal());
    break;
  }


  }

  /**
   * Pagamento tramite paypal
   */
  payWithPaypal() {
    return new Promise <PaymentResult> ((resolve, reject) => {
      console.info('Entro in paywithpaypal con:');
      console.info(this.paymentConfig.configPayPal.clientIDProduction);
      console.info(this.paymentConfig.configPayPal.clientIDSandbox);

      this.payPal.init({
        PayPalEnvironmentProduction: this.paymentConfig.configPayPal.clientIDProduction,
        PayPalEnvironmentSandbox: this.paymentConfig.configPayPal.clientIDSandbox
      }).then(() => {

        console.info('Ho inizializzato');
        //recupero l'environment (test o prod)
        let environment : string;
        if (this.paymentConfig.configPayPal.enviroment == EnvironmentElectronicPayment.production){
          environment = 'PayPalEnvironmentProduction';
        }
        else if (this.paymentConfig.configPayPal.enviroment == EnvironmentElectronicPayment.sandbox){
          environment = 'PayPalEnvironmentSandbox';
        } 


        // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
        this.payPal.prepareToRender(environment, new PayPalConfiguration({
          // Only needed if you get an "Internal Service Error" after PayPal login!
          //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
        })).then(() => {
          let payment = new PayPalPayment(this.paymentAmount, this.currency, this.description, 'sale');
          this.payPal.renderSinglePaymentUI(payment).then((res) => {
            

            // ora che il pagamento è andato a buon fine, creo la risposta
            let risposta = new PaymentResult(PaymentChannel.paypal);
            risposta.decodeResponseJson(res);

            //se il pagamento è andato a buon fine risolvo, altrimenti rigetto 
            if (risposta.result&&risposta.paymentExecuted){
              resolve (risposta);
            }
            else{
              //il pagamento non è andato a buon fine
              reject (risposta)
            }

          }, () => {
            //errore, creo una risposta fittizia con il messaggio di errore da ritornare
            console.log('Error or render dialog closed without being successful')
            let risposta = new PaymentResult(PaymentChannel.paypal);
            risposta.message = 'Error or render dialog closed without being successful';
            reject (risposta);
            
          });
        }, () => {
          //errore, creo una risposta fittizia con il messaggio di errore da ritornare
          console.log('Error in configuration')
          let risposta = new PaymentResult(PaymentChannel.paypal);
          risposta.message = 'Error in configuration';
          reject (risposta);
        });
      }, () => {
          //errore, creo una risposta fittizia con il messaggio di errore da ritornare
          console.log('Error in initialization, maybe PayPal is not supported or something else')
          let risposta = new PaymentResult(PaymentChannel.paypal);
          risposta.message = 'Error in initialization, maybe PayPal is not supported or something else';
          reject (risposta);
      });
    });
  }  
}


