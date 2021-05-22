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
import { PaymentProcess } from 'src/app/models/payment-process.model';
import { PaymentMode, SettorePagamentiAttivita } from 'src/app/models/valuelist.model';

import { AlertController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { Area } from 'src/app/models/area.model';
import { AreaPaymentSetting } from 'src/app/models/areapaymentsetting.model';
import { PaymentPage } from 'src/app/pages/payment/payment.page';
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
  myPaymentMode: PaymentMode;


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
   * Cambiato il modo di pagamento
   * @param valPaymentMode Modo di pagamento
   */
  onPaymentModeSelected(valPaymentMode: PaymentMode) {
    this.myPaymentMode = valPaymentMode;
  }


  /**
   * Richiesta di esecuzione del pagamento di qualsiasi tipologia
   * 1) Se onSite conclude subito dicendo che va bene
   * 2) Per altre tipologie viene aperta la pagina del pagamento
   *
   */
  onExecPayment() {

    let arModes:PaymentMode[]=[PaymentMode.pagaAdesso, PaymentMode.pagaBonifico, PaymentMode.pagaStruttura];

    //Presente un totale da pagare
    if (this.activePrenotazione.TOTALE != 0) {

      //L'utente ha selezionato come pagare
      if (arModes.includes(this.myPaymentMode)) {
  
        //Pagamento non dentro all'App
        if (this.myPaymentMode == PaymentMode.pagaBonifico || this.myPaymentMode == PaymentMode.pagaStruttura) {
  
          //Creo il risultato del pagamento, passando la modalità
          let docPaymentResult = new PaymentProcess(this.myPaymentMode);
          // Essendo una modalita che non prevede interazioni app
          // viene impostato automaticamento il channelPayment 
          // e il processResult = TRUE
          
          //Passo subito al Success
          this.onPaymentSuccess(docPaymentResult);
  
        }
        else {
          
          //Qui invece bisogna gestire il pagamento
  
          //Preparo un oggetto per processare il pagamento
          let myCheckoutPayment = new PaymentProcess(this.myPaymentMode);
          
          myCheckoutPayment.amount = this.activePrenotazione.RESIDUO;
          myCheckoutPayment.description = 'Pagamento Prenotazione';
          myCheckoutPayment.currency = 'EUR';
  
          //il channelPayment viene impostato nel componente
          //esterno che si preoccupa del pagamento
          //Passo alla modale in paymentData = myCheckoutPayment
          this.modalCtrl.create({
            component: PaymentPage,
            componentProps: {
              paymentData: myCheckoutPayment,
              listAreaPaymentSettings: this.myListPayment
            }
          })
          .then(elModal => {
            elModal.present();
  
            return elModal.onDidDismiss()
          })
          .then((returnData) => {
  
            //recupero il risultato del pagamento
            let myPaymentResult: PaymentProcess = returnData['data'];

            if (myPaymentResult) {

              //Il Risultato del processo di pagamento è TRUE, posso proseguire
              if (myPaymentResult.processResult) {
                
                //Pagamento avvenuto correttamente
                this.onPaymentSuccess(myPaymentResult); 
  
              }
              else {
  
                //Pagamento Fallito
                this.onPaymentFailed(myPaymentResult);
  
              }
            }
            else {
              
              //Stranamente non mi ha tornato nulla, quindi il pagamento è fallito
              myPaymentResult = new PaymentProcess(this.myPaymentMode);
              myPaymentResult.processResult = false;
              myPaymentResult.messageResult = 'Pagamento fallito';

              //Pagamento Fallito
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
    else {
      this.showMessage('Contattare la struttura. Prenotazioni gratuite concluse');
    }



  }




  /**
   * Pagamento andato a buon fine
   * @param resultPayment Risultato del pagamento
   */
  onPaymentSuccess(resultPayment?: PaymentProcess) {

    //Pagamento corretto
    if (resultPayment && resultPayment.processResult)  {

      //Nessuna transazione sembra avvenuta
      if (resultPayment.idElectronicTransaction.length == 0) {

        this.activePrenotazione.IDTRANSACTION = '';
        this.activePrenotazione.CHANNELPAYMENT = resultPayment.channelPayment;

        //Imposto nella prenotazione che il residuo è il totale
        this.activePrenotazione.RESIDUO = this.activePrenotazione.TOTALE;
        //e che non ho incassato nulla
        this.activePrenotazione.INCASSATO = 0;


      }
      else {

        this.activePrenotazione.RESIDUO = 0;
        this.activePrenotazione.INCASSATO = this.activePrenotazione.TOTALE;
        this.activePrenotazione.IDTRANSACTION = resultPayment.idElectronicTransaction;
        this.activePrenotazione.CHANNELPAYMENT = resultPayment.channelPayment;

      }


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


    
    

  }

  /**
   * Si sono verificati errori nel pagamento
   * @param resultPayment Risultato Pagamento Fallito
   */
  onPaymentFailed(resultPayment?: PaymentProcess) {
    let message = 'Si sono verificati errori nel pagamento';
    let title = 'Pagamento Fallito';

    if (resultPayment) {
      if (resultPayment.messageResult) {
        message = resultPayment.messageResult;
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


