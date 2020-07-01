import { Component, OnInit, OnDestroy } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, ToastController, NavParams, ModalController, Platform } from '@ionic/angular';

import { Subscription } from 'rxjs';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { Location } from 'src/app/models/location.model';
import { Utente } from 'src/app/models/utente.model';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';
import { Campo } from 'src/app/models/campo.model';
import { Gruppo } from 'src/app/models/gruppo.model';
import { PaymentConfiguration, PaymentChannel, PaymentResult } from 'src/app/models/payment.model';
import { SettoreAttivita } from 'src/app/models/valuelist.model';
import { PaypalPage } from 'src/app/pages/paypal/paypal.page';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-bookingsummary',
  templateUrl: './bookingsummary.page.html',
  styleUrls: ['./bookingsummary.page.scss'],
})
export class BookingsummaryPage implements OnInit, OnDestroy {

  //Prenotazione Master
  activePrenotazione: Prenotazione;
  subActivePrenotazione: Subscription;

  //Elemento 1 di Pianificazione contenuta in activePrenotazione
  //FIXME Alcune informazioni (tra cui lo sport) non vengono recuperate
  docPianificazione: PrenotazionePianificazione;

 //Location selezionata
  selectedLocation: Location;
  
  //Campo in versione normale
  selectedCampo: Campo;
  
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

  //Gestione pagamento
  arPaymentConfig: PaymentConfiguration[]; //Elenco dei metodi di pagamento accettati
  selectedPayment: PaymentConfiguration;
  paymentResult: PaymentResult;
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


      this.subStartConfig = this.startService.startConfig.subscribe(elStartConfig => {
          if (elStartConfig.gruppo) {
            //Con il gruppo posso chiedere i metodi di pagamento accettati
            this.docGruppo = elStartConfig.gruppo;

            this.initPayment();

          }
      });
    

  }



  ngOnInit() {
    this.disclaimer=false;
    
    let result = true;
     console.log('bp');
    // console.log(this.docPianificazione._DESCRSPORT);
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
                if (this.idPrenotazione != this.activePrenotazione.ID) {
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

    close();
    if (this.idLocation.length !== 0) {
      this.navCtrl.navigateForward(['/','location',this.idLocation,'booking']);
    }
    else {
      this.navCtrl.navigateForward(['/']);
    }
  }

  /**
   * Chiude la modale 
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
        spinner: 'bubbles'
      })
      .then(elLoading => {
        //Mostro il loading
        elLoading.present();

        //Contatto il server 
        this.startService
                     .requestImportoPrenotazione()
                     .subscribe(resultData => {

                          console.log('Ricalcolo Prenotazione');
                          console.log(resultData);
                          //Chiudo il loading
                          elLoading.dismiss();

                          //Converto il documento ricevuto
                          let newPrenotazione = Prenotazione.getPrenotazioneFromJson(resultData);
                          console.log('AfterCalcolaTotale prenotazione');
                          console.log(newPrenotazione);


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
    let save = false;
    save = this.onSavePrenotazione();

    if (save) {
      //Vado al pagamento
       this.onExecPayment();
    }


  }
  
  /**
   * Prenotazione salvata nel sistema posso andare via
   */
  onAfterSavePrenotazione()
  {
    
    //1) Chiudere la modale
    this.closeModal();
    //2) Andare alla History sulla scheda
    this.navCtrl.navigateRoot(['historylist/booking',this.docPianificazione.ID])
  }


  /**
   * Invio al server la Prenotazione da salvare
   */
  onSavePrenotazione():boolean {
    return true;
  }

  //#region METODI GESTIONE PAGAMENTO

  /**
   * Prepara le informazioni per gestire i pagamenti
   */
  initPayment() {
    //Chiedo un Array con le configurazioni. Questo array viene passato 
    //al componente payment-item
    if (this.docGruppo) {
      if (this.docGruppo._PAYMENT_MODE) {
        this.arPaymentConfig = this.docGruppo._PAYMENT_MODE.getPaymentFor(SettoreAttivita.settorePrenotazione);

        if (this.arPaymentConfig) {
          //Con un solo metodo di pagamento lo imposto gia
          if (this.arPaymentConfig.length == 1) {
            this.selectedPayment = this.arPaymentConfig[0];
          }
        }
      }
    }
  }

  /**
   * Ricezione pagamento da utilizzare
   * @param value Valore Pagamento
   */
  onPaymentSelected(value) {
    this.selectedPayment = value;
  }


  /**
   * Richiesta di esecuzione del pagamento di qualsiasi tipologia
   * 1) Se onSite conclude subito dicendo che va bene
   * 2) Per altre tipologie esiste la versione Mobile e la versione Web
   * Versione Mobile utilizza il servizio e l'Observable
   * Versione Web viene aperta una modale per pagare
   */
  onExecPayment() {
    let descrizioneAcquisto = 'Saldo prenotazione Noleggio Struttura';
    let resPay: PaymentResult;

    if (this.selectedPayment) {

      //Paga sul posto proseguo subito
      if (this.selectedPayment.channel == PaymentChannel.onSite) {
        resPay = new PaymentResult();
        resPay.executed= true;
        resPay.result = true;
        resPay.message = 'Pagamento in struttura';

        //Passo subito al Success
        this.onPaymentSuccess(resPay);

      }
      else {
        //Altre forme di pagamento
        //Capacitor o Cordova 
        //Pagamento gestito nel Servizio Payment
      if (this.platform.is('hybrid')) {
        //Mi metto in attesa dell'Observable di ricezione del pagamento
        this.onWaitingPaymentResult();

        //Richiedo il pagamento
        this.startService.execPayment(this.selectedPayment, 
                                      this.activePrenotazione.TOTALE, 
                                      'EUR',
                                      descrizioneAcquisto);

        //Ora attendo la risposta con l'Observable
      }
      else {
        //Ambiente Web
        switch (this.selectedPayment.channel) {
          case PaymentChannel.paypal:
              //Apro la modale del pagamento Paypal
              this.modalCtrl.create({
                component: PaypalPage,
                componentProps: {
                  paymentConfig: this.selectedPayment,
                  amount: this.activePrenotazione.TOTALE,
                  currency: 'EUR',
                  description: descrizioneAcquisto
                }
              })
              .then(modal => modal.present());

            break;
        
          default:
            break;
        }
      }
      }

    }
    else {
      this.showMessage('Selezionare un pagamento');
    }


  }


  /**
   * Attendo risposta del pagamento in versione Mobile
   * Arrivato in modalità Observable
   */
  onWaitingPaymentResult() {
    this.subPaymentResult = this.startService.paymentResult.subscribe(resPayment => {
      //Pagamento è stato eseguito
      if (resPayment.executed == true) {
        if (resPayment.result) {
          this.onPaymentSuccess(resPayment);
        }
        else {
          this.onPaymentFailed(resPayment);
        }

        //Pagamento Eseguito tolgo la sottoscrizione
        if (this.subPaymentResult) {
          this.subPaymentResult.unsubscribe();
        }
      }
    });
  }

  /**
   * Pagamento andato a buon fine
   * @param resultPayment Risultato del pagamento
   */
  onPaymentSuccess(resultPayment?: PaymentResult) {
    //Pagamento avvenuto correttamente
    
    //Eseguo operazioni successive al salvataggio
    this.onAfterSavePrenotazione()
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

    //Avviso il server di eliminare la prenotazione
    //DA IMPLEMENTARE
    
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

  
}


