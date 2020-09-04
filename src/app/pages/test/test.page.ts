import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor(private payPal: PayPal) { }
  paymentAmount: string = '5.00';
  currency: string = 'EUR';
  currencyIcon: string = '€';

  ngOnInit(){

  }

  payWithPaypal() {
    this.payPal.init({
      PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
      PayPalEnvironmentSandbox: 'AaRz5fCbWZDIV1Cc6aAWCiOgZtcvP3ai39078mHUiTk30Clg31gsnS1PxQ4YQOLaQulptnYWTz9ul67T'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment(this.paymentAmount, this.currency, 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then((res) => {
          console.log(res);
          // Successfully paid
        }, () => {
          console.log('Error or render dialog closed without being successful')
        });
      }, () => {
        console.log('Error in configuration')
      });
    }, () => {
      console.log('Error in initialization, maybe PayPal is not supported or something else')
    });
  }

}
