import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AreaPaymentSetting } from 'src/app/models/areapaymentsetting.model';
import { OnlinePaymentCheckoutData } from 'src/app/models/online-payment-checkout-data.model';
import { PaymentResult } from 'src/app/models/payment-result.model';
import { PaymentChannel, PaymentEnvironment } from 'src/app/models/valuelist.model';

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
  
  //Documento con il risultato delle operazioni di pagamento
  //Viene tornato dall chiusura della modale
  docResult: PaymentResult = new PaymentResult();
  
  payPalScriptUrl = 'https://www.paypalobjects.com/api/checkout.js';

  //Proprietà per la visualizzazione delle porzioni di pagamento
  showPaypal = false;
  showStripe = false;
  showApplePay = false;
  showGPay = false;

  //Nessuna modalità di pagamento è stata trovata
  noPayment = false;


  constructor(private modalController: ModalController) {
    
  }


  ngOnInit(): void {
    console.log(this.paymentData);
    console.log(this.listAreaPaymentSettings);

      this.initPaymentMethods();

  }

  /**
   * Inizializzo i metodi di pagamento che riesco a gestire
   */
  initPaymentMethods(){

    //devo scorrere tutti i pagamenti possibili e gestirli

    if (this.listAreaPaymentSettings && this.listAreaPaymentSettings.length != 0) {

      for (let index = 0; index < this.listAreaPaymentSettings.length; index++) {

        const elSettingPayment = this.listAreaPaymentSettings[index];

        if (elSettingPayment.paymentInApp) {

          switch (elSettingPayment.TIPOPAYMENT){
            case PaymentChannel.paypal:
              //Flag noPayment spento
              this.noPayment = false;

              //Pagamento Paypal
              this.showPaypal = true;

              //Lo script Paypal è già presente nell'header
              if (this.scriptOnHead(this.payPalScriptUrl)) {
                //Renderizzo il bottone
                this.renderPayPalBtn(elSettingPayment);
              }
              else {
                //Lo Script devo prima caricarlo e poi renderizzarli
                //gestione paypal
                this.loadPayPalScript()
                .then(()=> {
                  this.renderPayPalBtn(elSettingPayment);
                });

              }
  
            break;
  
            case PaymentChannel.stripe:
              //Flag noPayment spento
              this.noPayment = false;

              //Pagamento Stripe
              this.showStripe = true;

            break;
  
            case PaymentChannel.applePay:

              //Flag noPayment spento
              this.noPayment = false;

              //Pagamento Apple Pay
              this.showApplePay = true;

            break;
            default:
              break;
  
          }
        }
      }

    }
    else {

      //Non ci sono pagamenti elettronici attivabili
      this.noPayment = true;

    }

  }


  //Evento per la chiusura della modale
  onCloseModal(docResultPayment: PaymentResult) {
    //Non ho il pagamento, chiudo con un fallimento
    if (!docResultPayment) {
      docResultPayment = new PaymentResult();
      //Segno che il pagamento non è avvenuto
      docResultPayment.paymentExecuted = false;
      docResultPayment.message = 'Pagamento annulato';
    }

    this.modalController.dismiss(docResultPayment);

  }

  /**
   * Richiesta di annullare il pagamento
   */
  onCancelPayment() {
    let resultPayment = new PaymentResult();
    
    resultPayment.paymentExecuted = false;
    resultPayment.message = 'Pagamento annullato';
    //Chiudo la modale inviando il documento
    this.onCloseModal(resultPayment);
  }

  onSuccessPayment(type:PaymentChannel, idTransaction:string) {

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


  // Cambiare con la modalita nuova
  // https://developer.paypal.com/docs/checkout/integrate/
  renderPayPalBtn(payPalSettings: AreaPaymentSetting){

    let _this = this;

    paypal.Button.render({
      // Configure environment
      //TODO environment va decodificato con "production" o "sandbox"
      env: (payPalSettings.PPENVIRONMENT == PaymentEnvironment.production? 'production':'sandbox'),
      client: {
        sandbox: payPalSettings.PPCLIENTIDSANDBOX,
        production: payPalSettings.PPCLIENTIDPRODUCTION
      },
      // Customize button (optional)
      locale: 'it_IT',
      style: {
        size: 'responsive',
        color: 'gold',
        shape: 'pill',
        label: 'pay',
        fundingicons: true
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
            },
            description: _this.paymentData.description
          }],
          note_to_payer: 'Contatta la struttura per ogni problematica sul pagamento.'
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

  
    }, '#customBtnPaypal');
  }


  /**
   * Verifica se un file è già presente nell'header come script caricato
   * 
   * @param source File da controllare
   */
  scriptOnHead(source: string) {
    let scripts = document.getElementsByTagName("script");
    let onHead = false;

    for (let i = 0; i < scripts.length; i++) {

      if (scripts[i].getAttribute('src') == source) {
        onHead = true;
        break;
      }

    }
    return onHead;
  }



}

