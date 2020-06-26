import { Component } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { NavParams, ModalController } from '@ionic/angular';
import { PaymentConfiguration, PaymentResult } from 'src/app/models/payment.model';
// interface Window {
//   window?: any;
// }
// declare var window: Window;

@Component({
  selector: 'app-paypal',
  templateUrl: 'paypal.page.html',
  styleUrls: ['paypal.page.scss'],
})
export class PaypalPage {
  paymentAmount: string = '0.00';
  currency: string = 'EUR';
  currencyIcon: string = '€';
  amount: number;
  description : string;
  paymentConfig: PaymentConfiguration;


  constructor(private payPal: PayPal, 
              private navParams: NavParams,
              private modalCtrl: ModalController) {
    let _this = this;

    //Recupero dei parametri 
    this.amount = parseFloat(this.navParams.get('amount'));
    this.currencyIcon = this.navParams.get('currency');
    this.description = this.navParams.get('description');
    this.paymentConfig = this.navParams.get('paymentConfig');

    this.paymentAmount = this.amount.toLocaleString('en-us', {minimumFractionDigits: 2});


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
  closeModal() {
    let resultPayment = new PaymentResult();
    resultPayment.executed = true;
    resultPayment.result = false;
    resultPayment.responseJson = '';
    resultPayment.message = 'Pagamento annullato';

    this.modalCtrl.dismiss(resultPayment);
  }


  /**
   * Pagamento corretto
   * @param details Dettagli avvenuto pagamento
   */
  onPaymentSuccess(details:any) {
    let resultPayment = new PaymentResult();
    resultPayment.executed = true;
    resultPayment.result = true;
    resultPayment.responseJson = details;
    resultPayment.message = 'Pagamento effettuato';

    this.modalCtrl.dismiss(resultPayment);
  }

  /**
   * Errore pagamento
   * @param error Errore Pagamento
   */
  onPaymentError(error:any) {
    let resultPayment = new PaymentResult();
    resultPayment.executed = true;
    resultPayment.result = false;
    resultPayment.responseJson = error;
    resultPayment.message = 'Pagamento fallito';

    this.modalCtrl.dismiss(resultPayment);
  }


}

