import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { AreaPaymentSetting } from 'src/app/models/areapaymentsetting.model';
import { PaymentResult } from 'src/app/models/payment-result.model';
import { PaymentChannel } from 'src/app/models/valuelist.model';

import { StartService } from 'src/app/services/start.service';


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
  paymentConfig: AreaPaymentSetting;
  
  paypalAvailable = false; //Script Paypal caricati

  //clientId Sandbox: AaRz5fCbWZDIV1Cc6aAWCiOgZtcvP3ai39078mHUiTk30Clg31gsnS1PxQ4YQOLaQulptnYWTz9ul67T

  constructor(
              private navParams: NavParams,
              private modalCtrl: ModalController,
              private startService : StartService) {
    

    //Recupero dei parametri 
    this.amount = parseFloat(this.navParams.get('amount'));
    this.currencyIcon = this.navParams.get('currency');
    this.description = this.navParams.get('description');
    this.paymentConfig = this.navParams.get('paymentConfig');


    this.paymentAmount = this.amount.toLocaleString('en-us', {minimumFractionDigits: 2});
   
  }


  ngOnInit(): void {
      
  }




   /**
   * Chiude la modale annullando il pagamento
   */
  closeModal():void {

    let resultPayment = new PaymentResult();
    
    resultPayment.tipoPagamento = PaymentChannel.paypal;
    resultPayment.paymentExecuted = false;
    resultPayment.paymentRequestInApp = true;
    resultPayment.result = false;
    resultPayment.message = 'Pagamento annullato';

    this.modalCtrl.dismiss(resultPayment);
  }


  /**
   * Pagamento corretto
   * @param details Dettagli avvenuto pagamento
   */
  onPaymentSuccess(details:any):void {
    // let resultPayment = new PaymentResult(PaymentChannel.paypal, this.startService.isDesktop);
    // resultPayment.decodeResponseJson(details);
    // this.modalCtrl.dismiss(resultPayment);
  }

  /**
   * Errore pagamento
   * @param error Errore Pagamento
   */
  onPaymentError(error:any):void {
    // console.log(error);
    // let resultPayment = new PaymentResult(PaymentChannel.paypal, this.startService.isDesktop);
    // resultPayment.paymentExecuted = true;
    // resultPayment.result = false;
    // resultPayment.message = 'Pagamento fallito';

    // this.modalCtrl.dismiss(resultPayment);
  }


}

