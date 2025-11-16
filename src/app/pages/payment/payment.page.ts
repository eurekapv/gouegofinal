import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'application_model/beachforfun/environment.prod';
import { AreaPaymentSetting } from 'src/app/models/struttura/areapaymentsetting.model';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { PaymentProcess } from 'src/app/models/zsupport/payment-process.model';
import { PaymentChannel, PaymentEnvironment, PaypalStatus } from 'src/app/models/zsupport/valuelist.model';
import { Area } from 'src/app/models/struttura/area.model';
import { StartService } from 'src/app/services/start.service';
//questo mi rende disponibile l'oggetto paypal che è presente nello script caricato dinamicamente
declare let paypal: any

/*
Generatore Card Test
https://developer.paypal.com/tools/sandbox/card-testing/
*/

@Component({
  selector: 'app-payment',
  templateUrl: 'payment.page.html',
  styleUrls: ['payment.page.scss'],
})
export class PaymentPage implements OnInit{

  @Input() paymentData: PaymentProcess;
  @Input() listAreaPaymentSettings: AreaPaymentSetting[];
  @Input() areaDoc: Area;

  
  urlPayPalScriptCheckOut = 'https://www.paypalobjects.com/api/checkout.js';
  urlPayPalScriptSmart = 'https://www.paypal.com/sdk/js?client-id=';
  urlPaypal = '';
  paypalVersion = 'checkout'; //checkout o smart


  //Proprietà per la visualizzazione delle porzioni di pagamento
  showPaypal = false;
  showStripe = false;
  showApplePay = false;
  showGPay = false;

  //Nessuna modalità di pagamento è stata trovata
  noPayment = false;
  //Quale pagamento è stato trovato
  actualPaymentType: PaymentChannel;
  //Configurazione del pagamento
  actualPaymentSetting: AreaPaymentSetting; 

  showProgressBar = true;
  debugMode = false;
  listErrorMessage: string[] = [];

  //Stati per la gestione Stripe
  stProcessSheet: 'willReady' | 'Ready' = 'willReady';
  stProcessFlow: 'willReady' | 'Ready' | 'canConfirm' = 'willReady';
  stProcessApplePay: 'willReady' | 'Ready' = 'willReady';
  stProcessGooglePay: 'willReady' | 'Ready' = 'willReady';
  stIsApplePayAvailable = false;
  stIsGooglePayAvailable = false;

  /**
   * Indica se necessario mostrare errori
   */
  get showErrorAccordion(): boolean {
    let flagValue: boolean = false;
    if (this.listErrorMessage.length != 0) {
      flagValue = true;
    }

    return flagValue;
  }

  constructor(
    private modalController: ModalController,
    private startService: StartService
    ) {
      
    //Uso la nuova modalità SmartButton di Paypal
    this.paypalVersion = 'smart';

    //Se sono in versione Debug attivo il debug per paypal
    this.debugMode = environment.options.debugMode == 'off' ? false : true;
  }


  ngOnInit(): void {

      this.initPaymentMethods();

  }

  /**
   * Inizializzo i metodi di pagamento che riesco a gestire
   */
  initPaymentMethods(){

    //devo scorrere tutti i pagamenti possibili e gestirli
    this.noPayment = true;
    this.actualPaymentType = null;

    //Controlliamo la lista se ci sono pagamenti In App
    if (this.listAreaPaymentSettings && this.listAreaPaymentSettings.length != 0) {

      for (let index = 0; index < this.listAreaPaymentSettings.length; index++) {
        
        //Preleviamo impostazione di pagamento
        const elSettingPayment = this.listAreaPaymentSettings[index];
        console.log(elSettingPayment);

        //E' un tipo di pagamento in APP
        if (elSettingPayment.paymentInApp) {

          LogApp.consoleLog('Pagamento In App con ' + elSettingPayment.TIPOPAYMENT);

          //Quale Modalita ?
          switch (elSettingPayment.TIPOPAYMENT) {

            case PaymentChannel.paypal:
              //Flag noPayment spento
              this.noPayment = false;
              //Questo e' quello attivo
              this.actualPaymentType = elSettingPayment.TIPOPAYMENT;
              this.actualPaymentSetting = elSettingPayment;

              //Pagamento Paypal
              this.showPaypal = true;
              this.showApplePay = false;
              this.showGPay = false;
              this.showStripe = false;
              

              //Determino URL SCRIPT da caricare
              if (this.paypalVersion == 'checkout') {
                this.urlPaypal = this.urlPayPalScriptCheckOut;
              }
              else if (this.paypalVersion == 'smart') {

                //Nella modalità SMART alla fine dell'URL c'e' il ClientID da  utilizzare
                switch (elSettingPayment.PPENVIRONMENT) {
                  case PaymentEnvironment.production:
                    this.urlPaypal = this.urlPayPalScriptSmart + elSettingPayment.PPCLIENTIDPRODUCTION;
                    break;
                    case PaymentEnvironment.test:
                      this.urlPaypal = this.urlPayPalScriptSmart + elSettingPayment.PPCLIENTIDSANDBOX;
                      break;                
                  default:
                    break;
                }

                this.urlPaypal += '&currency=EUR';
                this.urlPaypal += '&locale=it_IT';
                this.urlPaypal += '&enable-funding=paylater';

                if (this.debugMode) {
                  this.urlPaypal += '&debug=true';
                }
              }

              //Lo script Paypal è già presente nell'header
              if (this.scriptOnHead(this.urlPaypal)) {
                  //Renderizzo i Button
                  setTimeout(()=>{
                    //Renderizzo il bottone
                    this.renderPayPalBtn(elSettingPayment);
                  },500);
              }
              else {
                //Lo Script devo prima caricarlo e poi renderizzarli
                //gestione paypal
                this.loadDinamicScript(this.urlPaypal)
                .then(()=> {

                  setTimeout(()=>{
                    //Renderizzo il bottone
                    this.renderPayPalBtn(elSettingPayment);
                  },500);
                  
                })
                .catch(() => {
                  //Non sono riuscito a caricare lo script di pagamento, probabilmente le credenziali di paypal sono state impostate male lato server
                  this.listErrorMessage.push("Errore nelle impostazioni di PayPal; contatta la struttura")
                  this.onCancelPayment()
                })

              }
  
            break;
  
            default:
              break;
  
          }

          //Ho trovato un pagamento da applicare
          if (this.actualPaymentType) {
            //Esco dal ciclo
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


  /**
   * Metodo da richiamare quando si vuole annullare il pagamento
   * e chiudere la modale
   */
  onCancelPayment() {
    //Segno il fallimento del processo di pagamento
    this.paymentData.processResult = false;
    this.paymentData.messageResult = 'Pagamento annullato';
    //Chiudo la modale inviando il documento
    this.modalController.dismiss(this.paymentData);
  }

  
  /**
   * Metodo da richiamare quando si vuole concludere il pagamento 
   * positivamente
   * @param channel Canale utilizzato (Paypal, Stripe etc)
   * @param idTransaction Transazione
   */
  onSuccessPayment(channel:PaymentChannel, idTransaction:string) {
    //Imposto il canale del pagamento utilizzato    
    this.paymentData.channelPayment = channel;
    //Segno il valore idTransaction
    this.paymentData.idElectronicResult = idTransaction;
    //Pagamento completato
    this.paymentData.processResult = true;
    this.paymentData.messageResult = 'Transazione completata con successo';

    //Chiudo la modale inviando il documento
    this.modalController.dismiss(this.paymentData);
    
  }

  /**
   * Metodo da richiamare dentro agli eventi Paypal
   * per segnalare il buon fine del pagamento
   * 
   */
  OnSuccessPaypal(details) {
    //Pagamento avvenuto con successo su Paypal
    let idTransaction: string;
    let namePayer: string;
    let status: PaypalStatus; 

    if (details) {
      switch (this.paypalVersion) {
        case 'smart':
          //La Transaction puo' essere intercettata tramite
          //https://developer.paypal.com/docs/checkout/reference/server-integration/capture-transaction/
            namePayer = details.payer.name.given_name;
            idTransaction = details.id;
            status = details.status;
            LogApp.consoleLog(details);
          break;

        case 'checkout':
          namePayer = details.payer.name.given_name;
          idTransaction = details.id;
          status = details.status;
        break;
      
        default:
          break;
      }

      //Per ora invio solo idTransaction non so se mi serve anche altro
      this.onSuccessPayment(PaymentChannel.paypal, idTransaction);
    }

  }


  
  //carico dinamicamente lo script nella pagina
  loadDinamicScript(urlScript: string){
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = urlScript;
      document.getElementsByTagName('head')[0].appendChild(script);
      
      script.onload = () => {
        LogApp.consoleLog('Script correctly loaded','warn');
        resolve();
      }

      script.onerror =(err) => {
        LogApp.consoleLog(err,'error');
        reject();
      }
    })
  }


  // Cambiare con la modalita nuova
  // https://developer.paypal.com/docs/checkout/integrate/
  renderPayPalBtn(payPalSettings: AreaPaymentSetting){

    let _this = this;
    if (this.paypalVersion == 'checkout') {
      this.showProgressBar = false;
      
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
            .then(function(details) {
              //######## Handler pagamento effettuato con successo ###########
  
              
              //Chiamo la funzione Paypal di Conferma
              _this.OnSuccessPaypal(details);

              
            })
        
          
        }
  
    
      }, '#customBtnPaypal');
    }
    else if (this.paypalVersion == 'smart') {
      
      this.showProgressBar = false;

      paypal.Buttons({
          createOrder: function (data,action) {
            //Funzione con i dati della transazione
            return action.order.create({
              purchase_units: [{
                amount: {
                  value: _this.paymentData.amount + '',
                  description: _this.paymentData.description
                }
              }]
            });
          },
          onApprove: function(data, actions) {
            return actions.order.capture()
                   .then(function (details) {
                      //Transazione avvenuta con successo
                      //Chiamo la funzione Paypal di Conferma
                      _this.OnSuccessPaypal(details);
                   });
          }
      }).render('#customBtnPaypal')
    }
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

/* ESEMPIO JSON RISPOSTA DA PAYPAL */
/*
id -> Id Ordine
purchase_units[0].payments.captures[0].id -> idTransaction

{
  "id": "5O190127TN364715T",
  "status": "COMPLETED",
  "payer": {
    "name": {
      "given_name": "John",
      "surname": "Doe"
    },
    "email_address": "customer@example.com",
    "payer_id": "QYR5Z8XDVJNXQ"
  },
  "purchase_units": [
    {
      "reference_id": "d9f80740-38f0-11e8-b467-0ed5f89f718b",
      "shipping": {
        "address": {
          "address_line_1": "2211 N First Street",
          "address_line_2": "Building 17",
          "admin_area_2": "San Jose",
          "admin_area_1": "CA",
          "postal_code": "95131",
          "country_code": "US"
        }
      },
      "payments": {
        "captures": [
          {
            "id": "3C679366HH908993F",
            "status": "COMPLETED",
            "amount": {
              "currency_code": "USD",
              "value": "100.00"
            },
            "seller_protection": {
              "status": "ELIGIBLE",
              "dispute_categories": [
                "ITEM_NOT_RECEIVED",
                "UNAUTHORIZED_TRANSACTION"
              ]
            },
            "final_capture": true,
            "disbursement_mode": "INSTANT",
            "seller_receivable_breakdown": {
              "gross_amount": {
                "currency_code": "USD",
                "value": "100.00"
              },
              "paypal_fee": {
                "currency_code": "USD",
                "value": "3.00"
              },
              "net_amount": {
                "currency_code": "USD",
                "value": "97.00"
              }
            },
            "create_time": "2018-04-01T21:20:49Z",
            "update_time": "2018-04-01T21:20:49Z",
            "links": [
              {
                "href": "https://api-m.paypal.com/v2/payments/captures/3C679366HH908993F",
                "rel": "self",
                "method": "GET"
              },
              {
                "href": "https://api-m.paypal.com/v2/payments/captures/3C679366HH908993F/refund",
                "rel": "refund",
                "method": "POST"
              }
            ]
          }
        ]
      }
    }
  ],
  "links": [
    {
      "href": "https://api-m.paypal.com/v2/checkout/orders/5O190127TN364715T",
      "rel": "self",
      "method": "GET"
    }
  ]
}
*/
/* ******************************** */

