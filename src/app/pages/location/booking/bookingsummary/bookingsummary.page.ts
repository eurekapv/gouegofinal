import { Component, OnInit, OnDestroy } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { NavController, LoadingController, ToastController, NavParams, ModalController, Platform } from '@ionic/angular';

import { Subscription } from 'rxjs';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { Location } from 'src/app/models/location.model';
import { Utente } from 'src/app/models/utente.model';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';
import { Campo } from 'src/app/models/campo.model';
import { Gruppo } from 'src/app/models/gruppo.model';
import { PaymentResult } from 'src/app/models/payment-result.model';
import { SettorePagamentiAttivita } from 'src/app/models/valuelist.model';

import { AlertController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { Area } from 'src/app/models/area.model';
import { AreaPaymentSetting } from 'src/app/models/areapaymentsetting.model';
import { OnlinePaymentCheckoutData } from 'src/app/models/online-payment-checkout-data.model';
import { PaymentPage } from 'src/app/pages/paypal/payment.page';
const { Browser } = Plugins;

@Component({
  selector: 'app-bookingsummary',
  templateUrl: './bookingsummary.page.html',
  styleUrls: ['./bookingsummary.page.scss'],
})
export class BookingsummaryPage implements OnInit, OnDestroy {

  //Prenotazione Master
  activePrenotazione: Prenotazione;
  subActivePrenotazione: Subscription;

  docPianificazione: PrenotazionePianificazione;

 //Location selezionata
  selectedLocation: Location;
  
  //Campo in versione normale
  selectedCampo: Campo;

  //Area selezionata
  docArea: Area;
  listenArea: Subscription;
  
  userLogged: boolean;      //TRUE-FALSE: Utente Loggato
  subUserLogged: Subscription;  
  
  docUtente: Utente;
  subDocUtente: Subscription; 

  docGruppo: Gruppo;
  subStartConfig: Subscription; 

  idPrenotazione = '';
  idLocation = '';
  

  //Viene effettuato il controllo tra Id Prenotazione e Id del bookId
  checkBookId = true; 

  //accettazione delle condizioni di vendita
  disclaimer: boolean =false;



  //Configurazioni di pagamento
  myListPayment: AreaPaymentSetting[];
  mySelectedPayment: AreaPaymentSetting;
  


  subPaymentResult: Subscription;

  
  
  constructor(private startService:StartService,
              private navCtrl: NavController,
              private loadingController: LoadingController,
              private toastCtrl: ToastController,
              private navParams: NavParams, 
              private modalCtrl: ModalController,
              private platform: Platform,
              private alertCtrl: AlertController
              ) {

    
      //Recupero dell'area selezionata
      this.docArea = this.startService.areaSelectedValue;
      
      //Impostazione tipologie pagamento
      this.setListPayment();

  }



  ngOnInit() {
    this.disclaimer=false;
    
    let result = true;
     
    //#region MODALE
    /* VERSIONE MODALE*/
      this.idLocation = this.navParams.get('locationId');

      if (this.idLocation.length !== 0) {
        // Chiedo Location
        this.selectedLocation = this.startService.findLocationByID(this.idLocation);        
          
        if (!this.selectedLocation) {
          result = false;
        }
      }
      else {
        result = false;
      }

      if (result) {
        this.idPrenotazione = this.navParams.get('bookId');

        //IDPrenotazione presente
        if (this.idPrenotazione) {
  
          //Recupero la prenotazione 
          this.recuperaPrenotazione();
        }
        else {
          result = false;
        }
      }

      if (result) {
        //Controllo dell'utente loggato
        this.subUserLogged = this.startService.utenteLogged.subscribe(element => {
                this.userLogged = element;
        });
  
        //Richiedo lo User
        this.subDocUtente = this.startService.utente.subscribe(element => {
          this.docUtente = element;
        });
  
        //Recupero il campo selezionato
        this.selectedCampo = this.startService.getSelectedCampoPrenotazione();
      }



      //Si sono verificati errori
      if (!result) {
        this.onBookIdWrong();
      }

    //#endregion

    
  }

  ngOnDestroy() {
    if (this.subUserLogged) {
      this.subUserLogged.unsubscribe();
    }

    if (this.subActivePrenotazione) {
      this.subActivePrenotazione.unsubscribe();
    }

    if (this.subDocUtente) {
      this.subDocUtente.unsubscribe();
    }

    if (this.subPaymentResult) {
      this.subPaymentResult.unsubscribe();
    }

  }

  //Mi sottoscrivo alla ricezione della Prenotazione
  recuperaPrenotazione() {

    this.subActivePrenotazione = this.startService.activePrenotazione
        .subscribe(elPrenotazione => {
              
              //Recupero la prenotazione
              this.activePrenotazione = elPrenotazione;
              //Recupero la Pianificazione dentro alla Prenotazione
              this.docPianificazione = this.activePrenotazione.getPianificazione();

              //Probabilmente è la prima richiesta e devo controllare l'entrata
              //tramite la congruenza del BookId e IDPrenotazione
              if (this.checkBookId) {

                //Spegno il controllo
                this.checkBookId = false;
                //Id Book è diverso da quello in arrivo dalla prenotazione
                if ((this.idPrenotazione != this.activePrenotazione.ID) || this.activePrenotazione == null || this.docPianificazione == null) {
                  this.onBookIdWrong();
                }
              }
              

    });
  }

  /**
   * Book ID Errato devo uscire
   */
  onBookIdWrong() {

    this.showMessage('Errore dati prenotazione');
    this.closeModal();

  }

  /**
   * Chiude questa videata modale 
   */
  closeModal() {
    this.modalCtrl.dismiss();
  }

  //E' cambiato il numero dei giocatori
  onChangedNumPlayer(nPlayer: number)
  {
    //Memorizzo il numero Partecipanti
    this.docPianificazione.NUMPARTECIPANTI=nPlayer;

    this.calcolaTotale();
  }

  //Effettua le operazioni per il calcolo del totale
  calcolaTotale() {
    this.loadingController
      .create({
        message: 'Ricalcolo importo...',
        spinner: 'circular'
      })
      .then(elLoading => {
        //Mostro il loading
        elLoading.present();

        //Contatto il server 
        this.startService
                     .requestImportoPrenotazione()
                     .subscribe(resultData => {

                          //Chiudo il loading
                          elLoading.dismiss();

                          //Converto il documento ricevuto
                          let newPrenotazione = Prenotazione.getPrenotazioneFromJson(resultData);

                          //Invio al servizio il documento
                          this.startService
                            .setActivePrenotazione(newPrenotazione);

                            //Se non è valida visualizzo un messsaggio
                          if (!newPrenotazione.ISVALID) {
                            this.showMessage(newPrenotazione.MSGINVALID);
                          }

                        },
                        error => {
                          //Chiudo il loading
                          elLoading.dismiss();
                          this.showMessage(error);
                        });

        
      });
  }





  //Ritorna un indirizzo Location da mostrare
  getAddressLocation() {
    let value = '';
    if (this.selectedLocation) {
      if (this.selectedLocation.INDIRIZZO && this.selectedLocation.INDIRIZZO.length !== 0)  {
        value = this.selectedLocation.INDIRIZZO;
      }
      else if (this.selectedLocation.COMUNE && this.selectedLocation.COMUNE.length !== 0) {
        value = this.selectedLocation.COMUNE;
      }
    }
    

    return value;
  }
  

  /**
   * Pressione del pulsante in interfaccia di conferma 
   */
  onConfirm()
  {
    //Vado al pagamento
     this.onExecPayment();
  }
  
  /**
   * Prenotazione salvata nel sistema posso andare via
   */
  onAfterSavePrenotazione()
  {
    this.showMessage('Prenotazione confermata');
    //1) Chiudere la modale
    this.closeModal();
    //2) Andare alla History sulla scheda
    this.navCtrl.navigateRoot(['historylist/booking', this.activePrenotazione.ID + '-' + this.docPianificazione.ID]);

  }


  //#region METODI GESTIONE PAGAMENTO

  /**
   * Recupera i metodi di pagamento sulla base dell'Area e popola 
   * l'array myListPayment e l'elemento mySelectedPayament
   */  
  setListPayment() {

    //Svuota l'array
    this.myListPayment = [];


    //Ho il documento dell'Area
    if (this.docArea) {
      
      this.myListPayment = this.docArea.getPaymentFor(SettorePagamentiAttivita.settorePagamentoPrenotazione)

      if (this.myListPayment && this.myListPayment.length != 0) {
        this.mySelectedPayment = this.myListPayment[0];
      }
      else {
        this.mySelectedPayment = null;
      }

    }

  }

  /**
   * Ricezione pagamento da utilizzare
   * @param value Valore Pagamento
   */
  onPaymentSelected(value) {
    this.mySelectedPayment = value;
  }


  /**
   * Richiesta di esecuzione del pagamento di qualsiasi tipologia
   * 1) Se onSite conclude subito dicendo che va bene
   * 2) Per altre tipologie esiste la versione Mobile e la versione Web
   * Versione Mobile utilizza il servizio e l'Observable
   * Versione Web viene aperta una modale per pagare
   */
  onExecPayment() {

    //L'utente ha selezionato  
    if (this.mySelectedPayment) {

      //Pagamento non dentro all'App
      if (this.mySelectedPayment.paymentInApp == false) {

        //Creo il risultato del pagamento
        let paymentResult = new PaymentResult();
        paymentResult.paymentRequestInApp = false;
        
        this.activePrenotazione.RESIDUO = this.activePrenotazione.TOTALE;
        this.activePrenotazione.INCASSATO = 0;

        //Passo subito al Success
        this.onPaymentSuccess(paymentResult);

      }
      else {
        //Qui invece bisogna gestire il pagamento

        //Mi serve:
        //1) array con le modalità di pagamento SOLO in-app disponibili
        let myListPaymentInApp = this.myListPayment.filter(elPaymentSetting => {
          return elPaymentSetting.paymentInApp
        });

        //2) oggetto con i dettagli del checkout
        let myCheckOutObj = new OnlinePaymentCheckoutData()
        myCheckOutObj.amount = this.activePrenotazione.RESIDUO;
        myCheckOutObj.description = 'Prenotazione campo';
        myCheckOutObj.currency = 'EUR';

        //ora posso mostrare la modale
        this.modalCtrl.create({
          component: PaymentPage,
          componentProps: {
            paymentData: myCheckOutObj,
            listAreaPaymentSettings: myListPaymentInApp
          }
        })
        .then(elModal => {
          elModal.present();

          return elModal.onDidDismiss()
        })
        .then((returnData) => {

          //recupero il risultato del pagamento
          let myPaymentResult: PaymentResult = returnData['data'];

          //controllo se il pagamento è andato a buon fine, e mi muovo di conseguenzq
          if (myPaymentResult.paymentExecuted && myPaymentResult.result){
            this.onPaymentSuccess(myPaymentResult); 
          }
          else{
            this.onPaymentFailed(myPaymentResult);
          }
        })


      }

    }
    else {
      //Pagamento non selezionato
      this.showMessage('E\' necessario selezionare un pagamento');
    }


  }



  private payDesktop() {
    // let descrizioneAcquisto = 'Saldo prenotazione Noleggio Struttura';
    // switch (this.selectedPayment.channel) {
    //   case PaymentChannel.paypal:
    //     //Apro la modale del pagamento Paypal
    //     this.modalCtrl.create({
    //       component: PaypalPage,
    //       componentProps: {
    //         paymentConfig: this.selectedPayment,
    //         amount: this.activePrenotazione.TOTALE,
    //         currency: 'EUR',
    //         description: descrizioneAcquisto
    //       }
    //     })
    //       .then(modal => {

    //         //mostro la modale di pagamento
    //         modal.present();

    //         //quando la modale si chiude 
    //         modal.onDidDismiss()
    //         .then((data) => {

    //           let response : PaymentResult;
    //           response = data['data'];
              

    //           if (response.paymentExecuted&&response.result){
    //             //E' andato tutto bene
    //             this.activePrenotazione.INCASSATO = this.activePrenotazione.TOTALE;
    //             this.activePrenotazione.RESIDUO = 0;
    //             this.activePrenotazione.IDTRANSACTION = response.idPagamento;
    //             this.onPaymentSuccess(response);
    //           }
    //           else{
    //             //il pagamento non è riuscito
    //             this.onPaymentFailed(response);
    //           }
    //         })
    //       });

    //     break;

    //   default:
    //     break;
    // }
  }

  private payMobile() {
    // let descrizioneAcquisto = 'Saldo prenotazione Noleggio Struttura';

    // //Qui devo eseguire il pagamento
    // this.loadingController.create({
    //   message: 'Pagamento in corso...',
    //   spinner: 'circular',
    //   backdropDismiss: true
    // }).
    //   then(elLoading => {

    //     //Presento il loading
    //     elLoading.present();

    //     //Faccio la richiesta al servizio di pagamento
    //     this.startService.execPayment(this.selectedPayment, this.activePrenotazione.TOTALE, 'EUR', descrizioneAcquisto)
    //       .then(risposta => {

    //         //quando arriva la risposta
    //         elLoading.dismiss();

    //         //Pagamento eseguito correttamente
    //         if (risposta && risposta.paymentExecuted && risposta.result) {
    //           // è andato tutto bene
    //           this.activePrenotazione.INCASSATO = this.activePrenotazione.TOTALE;
    //           this.activePrenotazione.RESIDUO = 0;
    //           this.activePrenotazione.IDTRANSACTION = risposta.idPagamento;
    //           this.showMessage(risposta.message);
    //           this.onPaymentSuccess(risposta);
    //         }
    //         else {

    //           //Il pagamento non è andato a buon fine
    //           this.showMessage(risposta.message);

    //           //Esecuzione fallita
    //           this.onPaymentFailed(risposta);
    //         }


    //       })
    //       .catch((risposta: PaymentResult) => {
    //         //qualcosa è andato storto
    //         elLoading.dismiss();

    //         //Esecuzione fallita
    //         this.onPaymentFailed(risposta);

    //       });
    //   });
  }

  /**
   * Pagamento andato a buon fine
   * @param resultPayment Risultato del pagamento
   */
  onPaymentSuccess(resultPayment?: PaymentResult) {
    //Pagamento avvenuto correttamente
    //Posso salvare la prenotazione e poi scappare
        //Visualizzo il loading controller
        this.loadingController.create({
          message: 'Salvataggio Prenotazione',
          spinner: 'circular'
        })
        .then(elLoading => {
          //Creo il loading
          elLoading.present();

          //Effettuo il salvataggio
          this.startService
              .requestSavePrenotazione()
              .then(docPrenotazione => {
                //Salvataggio avvenuto correttamente
                //Chiudo il loading
                elLoading.dismiss();

                //Ecco il documento ricevuto
                this.activePrenotazione = docPrenotazione;



                  //Se non è valida visualizzo un messsaggio
                if (!docPrenotazione.ISVALID) {

                  this.showMessage(docPrenotazione.MSGINVALID);

                }
                else {
                  //Imposto anche la pianificazione
                  this.docPianificazione = this.activePrenotazione.PRENOTAZIONEPIANIFICAZIONE[0];

                }

                
                //Eseguo operazioni successive al salvataggio
                this.onAfterSavePrenotazione();


              }, errPrenotazione => {
                elLoading.dismiss();
                this.showMessage(errPrenotazione.MSGVALID);
              });
        });
    
    

  }

  /**
   * Si sono verificati errori nel pagamento
   * @param resultPayment Risultato Pagamento Fallito
   */
  onPaymentFailed(resultPayment?: PaymentResult) {
    let message = 'Si sono verificati errori nel pagamento';
    let title = 'Pagamento Fallito';

    if (resultPayment) {
      if (resultPayment.message) {
        message = resultPayment.message;
      }
    }

    //Visualizzo il messaggio
    this.showAlert(message, title);
    
  }

  //#endregion

     /**
   * Visualizza un messaggio come Toast
   * @param message Messaggio da mostrare
   */
  showMessage(message: string) {

    //Creo un messaggio
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
    .then(tstMsg => {
      tstMsg.present();
    });

  }


  /**
   * Visualizza un alert con un pulsante Ok se !buttons, oppure con i bottoni dell'array
   * @param messaggio Messaggio
   * @param titolo Titolo
   */
  showAlert(messaggio:string, titolo?:string, bottoni?:string[]) {

    if (!bottoni || bottoni.length == 0) {
      bottoni = [];
      bottoni.push('Ok');
    }

    //Mostro l'alert richiesto
    this.alertCtrl.create({      
      header: (titolo?titolo:'Attenzione'),      
      message: messaggio,
      buttons: bottoni
    })
    .then(elAlert => {
      elAlert.present();
    })
  }
  

  openLink(url:string)
  {
    Browser.open({url:url})
  }


  
}


