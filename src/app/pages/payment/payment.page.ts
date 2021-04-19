import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AreaPaymentSetting } from 'src/app/models/areapaymentsetting.model';
import { PaymentProcess } from 'src/app/models/payment-process.model';
import { PaymentChannel, PaymentEnvironment, PaypalStatus } from 'src/app/models/valuelist.model';

//questo mi rende disponibile l'oggetto paypal che è presente nello script caricato dinamicamente
declare let paypal: any


@Component({
  selector: 'app-payment',
  templateUrl: 'payment.page.html',
  styleUrls: ['payment.page.scss'],
})
export class PaymentPage implements OnInit{

  @Input() paymentData: PaymentProcess;
  @Input() listAreaPaymentSettings: AreaPaymentSetting[];

  
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
  showProgressBar = true;


  constructor(private modalController: ModalController) {
    //Uso la nuova modalità SmartButton di Paypal
    this.paypalVersion = 'smart';
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
                  
              }

              //Lo script Paypal è già presente nell'header
              if (this.scriptOnHead(this.urlPaypal)) {
                  //Renderizzo il bottone
                  this.renderPayPalBtn(elSettingPayment);
              }
              else {
                //Lo Script devo prima caricarlo e poi renderizzarli
                //gestione paypal
                this.loadDinamicScript(this.urlPaypal)
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
    this.paymentData.idElectronicTransaction = idTransaction;
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
            namePayer = details.payer.name.given_name;
            idTransaction = details.id;
            status = details.status;
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
        console.log('Script correctly loaded');
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
  
              console.log('Pagamento confermato!');
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

