import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AreaPaymentSetting } from 'src/app/models/areapaymentsetting.model';
import { OnlinePaymentCheckoutData } from 'src/app/models/online-payment-checkout-data.model';
import { PaymentResult } from 'src/app/models/payment-result.model';
import { PaymentChannel } from 'src/app/models/valuelist.model';

//questo mi rende disponibile l'oggetto paypal che è presente nello script caricato dinamicamente
declare let paypal: any

//

@Component({
  selector: 'app-payment',
  templateUrl: 'payment.page.html',
  styleUrls: ['payment.page.scss'],
})
export class PaymentPage implements OnInit{

  @Input() paymentData: OnlinePaymentCheckoutData

  @Input() listAreaPaymentSettings: AreaPaymentSetting[]

  filterdAreaPaymentSettings: AreaPaymentSetting[];
  
  payPalScriptUrl = 'https://www.paypalobjects.com/api/checkout.js'
  constructor(private modalController: ModalController) {
    
   
  }


  ngOnInit(): void {
    console.log(this.paymentData);
    console.log(this.listAreaPaymentSettings);

      this.setFilteredAreaPaymentSettings();
      this.initPaymentMethods();
  }

  setFilteredAreaPaymentSettings(){
    this.filterdAreaPaymentSettings = this.listAreaPaymentSettings.filter(elPaymentSetting => {
      return elPaymentSetting.paymentInApp;
    })
  }

  initPaymentMethods(){



    //devo scorrere tutti i pagamenti possibili e gestirli

    if(this.filterdAreaPaymentSettings != undefined && this.filterdAreaPaymentSettings.length > 0){
      this.filterdAreaPaymentSettings.forEach(elSettingPayment => {
        switch (elSettingPayment.TIPOPAYMENT){
          case PaymentChannel.paypal:

            //gestione paypal
            this.loadPayPalScript()
            .then(()=> {
              this.renderPayPalBtn(elSettingPayment);
            })

          break;

          case PaymentChannel.stripe:
            //
          break;

          case PaymentChannel.applePay:
            //
          break;
        }
      })
    }

    else{
      //non c'è nessun pagamento possibile, chiudo
      this.closeModal();
    }
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

    this.modalController.dismiss(resultPayment);
  }


  
  //carico dinamicamente lo script nella pagina
  loadPayPalScript(){
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = this.payPalScriptUrl;
      document.getElementsByTagName('head')[0].appendChild(script);
      
      script.onload = () => {
        console.log('PayPal script correctly loaded');
        resolve();
      }

      script.onerror =(err) => {
        console.log(err);
        reject();
      }
    })
  }



  renderPayPalBtn(payPalSettings: AreaPaymentSetting){

    let _this = this;

    paypal.Button.render({
      // Configure environment
      //TODO environment va decodificato con "production" o "sandbox"
      env: payPalSettings.PPENVIRONMENT,
      client: {
        sandbox: payPalSettings.PPCLIENTIDSANDBOX,
        production: payPalSettings.PPCLIENTIDPRODUCTION
      },
      // Customize button (optional)
      locale: 'it',
      style: {
        size: 'small',
        color: 'gold',
        shape: 'pill',
      },

      // Enable Pay Now checkout flow (optional)
      commit: true,

      // Set up a payment
      payment: function(data, actions) {
        return actions.payment.create({
          transactions: [{
            amount: {
              total: _this.paymentData.amount + '',
              currency: _this.paymentData.currency
            }
          }]
        });
      },
      // Execute the payment
      onAuthorize: function(data, actions) {
        return actions.payment.execute()
        .then(function() {
          //######## Handler pagamento effettuato con successo ###########

          console.log('Pagamento confermato!');

          console.log('Data: ');
          console.log(data);
          console.log('Actions: ');
          console.log(actions);
        })
      
        
      }

  
    }, '#customBtnPay');
  }





}

