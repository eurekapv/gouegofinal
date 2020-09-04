import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { NavParams, ModalController } from '@ionic/angular';
import { PaymentConfiguration, PaymentResult, ConfigPaypal, EnvironmentPaypal, PaymentChannel } from 'src/app/models/payment.model';
import { get } from 'scriptjs';

// interface Window {
//   window?: any;
// }
// declare var window: Window;

@Component({
  selector: 'app-paypal',
  templateUrl: 'paypal.page.html',
  styleUrls: ['paypal.page.scss'],
})
export class PaypalPage implements OnInit{
  paymentAmount: string = '0.00';
  currency: string = 'EUR';
  currencyIcon: string = '€';
  amount: number;
  description : string;
  paymentConfig: PaymentConfiguration;
  configPaypal: ConfigPaypal;
  paypalAvailable = false; //Script Paypal caricati

  constructor(private payPal: PayPal, 
              private navParams: NavParams,
              private modalCtrl: ModalController) {
    

    //Recupero dei parametri 
    this.amount = parseFloat(this.navParams.get('amount'));
    this.currencyIcon = this.navParams.get('currency');
    this.description = this.navParams.get('description');
    this.paymentConfig = this.navParams.get('paymentConfig');

    this.paymentAmount = this.amount.toLocaleString('en-us', {minimumFractionDigits: 2});
   
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //Caricamento script Paypal
    let url = 'https://paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&currency=EUR';
    
    let clientId = 'sb'; //Versione Sandbox
    if (this.paymentConfig) {
      if (this.paymentConfig.configPayPal) {

        //Configurazione Paypal
        this.configPaypal = this.paymentConfig.configPayPal;
        if (this.configPaypal.enviroment == EnvironmentPaypal.production) {
          clientId = this.configPaypal.clientIDProduction;
        }

        url = `https://paypal.com/sdk/js?client-id=${clientId}&currency=EUR`;

        // get(url, () => {
        //   this.paypalAvailable = true;
        //   //Inizializzo paypal
        //   this.initPaypal();
        // });

        this.paypalAvailable = true;
      }
    }
  }

  initPaypal(): void {
    let _this = this;
    setTimeout(() => {
      // Render the PayPal button into #paypal-button-container
      <any>window['paypal'].Buttons({

        // Set up the transaction
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: _this.paymentAmount
              }
            }] 
          });
        },

        // Finalize the transaction
        onApprove: function (data, actions) {
          return actions.order.capture()
            .then(function (details) {
              console.log(details);
              //Pagamento corretto
              _this.onPaymentSuccess(details);

              // Show a success message to the buyer
              //alert('Transaction completed by ' + details.payer.name.given_name + '!');
            })
            .catch(err => {
              console.log(err);
              _this.onPaymentError(err);
            })
        }
      }).render('#paypal-button-container');
    }, 500);
  }

   /**
   * Chiude la modale annullando il pagamento
   */
  closeModal():void {
    let resultPayment = new PaymentResult(PaymentChannel.paypal);
    resultPayment.paymentExecuted = true;
    resultPayment.result = false;
    resultPayment.message = 'Pagamento annullato';

    this.modalCtrl.dismiss(resultPayment);
  }


  /**
   * Pagamento corretto
   * @param details Dettagli avvenuto pagamento
   */
  onPaymentSuccess(details:any):void {
    let resultPayment = new PaymentResult(PaymentChannel.paypal);
    resultPayment.paymentExecuted = true;
    resultPayment.result = true;
    resultPayment.message = 'Pagamento effettuato';

    this.modalCtrl.dismiss(resultPayment);
  }

  /**
   * Errore pagamento
   * @param error Errore Pagamento
   */
  onPaymentError(error:any):void {
    let resultPayment = new PaymentResult(PaymentChannel.paypal);
    resultPayment.paymentExecuted = true;
    resultPayment.result = false;
    resultPayment.message = 'Pagamento fallito';

    this.modalCtrl.dismiss(resultPayment);
  }


}

