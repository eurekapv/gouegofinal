import { Component, OnInit, OnDestroy } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { NavController, LoadingController, NavParams, ModalController, Platform } from '@ionic/angular';

import { Subscription } from 'rxjs';
import { Prenotazione } from 'src/app/models/prenotazioni/prenotazione.model';
import { Location } from 'src/app/models/struttura/location.model';
import { Utente } from 'src/app/models/utente/utente.model';
import { PrenotazionePianificazione } from 'src/app/models/prenotazioni/prenotazionepianificazione.model';
import { Campo } from 'src/app/models/struttura/campo.model';
import { Gruppo } from 'src/app/models/struttura/gruppo.model';
import { PaymentProcess } from 'src/app/models/zsupport/payment-process.model';
import { ModeIncassoConfig, PageType, PaymentChannel, PaymentMode, SettorePagamentiAttivita } from 'src/app/models/zsupport/valuelist.model';

import { Browser } from '@capacitor/browser';
import { Area } from 'src/app/models/struttura/area.model';
import { AreaPaymentSetting } from 'src/app/models/struttura/areapaymentsetting.model';

import { AreaLink } from 'src/app/models/struttura/arealink.model';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { PrenotaTesseramento } from 'src/app/models/prenotazioni/prenota_tesseramento.model';


@Component({
  selector: 'app-location-booking-finalize',
  templateUrl: './location-booking-finalize.page.html',
  styleUrls: ['./location-booking-finalize.page.scss'],
})
export class LocationBookingFinalizePage implements OnInit, OnDestroy {

  //Prenotazione Master
  activePrenotazione: Prenotazione;
  subActivePrenotazione: Subscription;

  docPianificazione: PrenotazionePianificazione;

 //Location selezionata
  selectedLocation: Location;
  
  //Campo in versione normale
  selectedCampo: Campo;

  //Area selezionata
  selectedArea: Area;
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
  disclaimer: boolean =true;

  //Abilita la possibilità di prenotazione senza costo
  enableZeroPayment: boolean = true;
  
  /* NUOVE PROPRIETA */
  // Creo le variabili per ognuna modalita di incasso (Contanti/Bonifico/Mobile)
  //Queste variabili vengono popolate una volta che ho l'elenco delle modalità di pagamento
  _configIncassoContanti: AreaPaymentSetting;
  _configIncassoBonifico: AreaPaymentSetting;
  _configIncassoMobile: AreaPaymentSetting;

  _selectedPaymentMode: ModeIncassoConfig;
  _selectedPaymentConfig: AreaPaymentSetting;

  showStripeForm = false;

  // Variabili per gestire la promise
  private currentPaymentResolve: any;
  private currentPaymentReject: any;

  /* FINE NUOVE PROPRIETA */

    
  
  constructor(private startService:StartService,
              private navController: NavController,
              private loadingController: LoadingController,
              private navParams: NavParams, 
              private modalController: ModalController,
              private platform: Platform
              ) {

    
      //Recupero dell'area selezionata
      this.selectedArea = this.startService.areaSelected;
      
      //Impostazione tipologie pagamento
      this.setListPayment();

  }



  ngOnInit() {

    this.disclaimer = true;
    
    let result = true;
    let errMessage = '';
     
    //#region MODALE
    /* VERSIONE MODALE*/
      this.idLocation = this.navParams.get('locationId');

      if (this.idLocation.length !== 0) {
        // Chiedo Location
        this.selectedLocation = this.startService.findLocationByID(this.idLocation);        
          
        if (!this.selectedLocation) {
          result = false;
          errMessage = 'Location null';
        }
      }
      else {
        result = false;
        errMessage = 'idLocation Empty';
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
        this.subUserLogged = this.startService.flagUtenteIsLoggato$.subscribe(element => {
                this.userLogged = element;
        });
  
        //Richiedo lo User
        this.subDocUtente = this.startService.activeUtenteDoc$.subscribe(element => {
          this.docUtente = element;
        });
  
        //Recupero il campo selezionato
        this.selectedCampo = this.startService.getSelectedCampoPrenotazione();
      }



      //Si sono verificati errori
      if (!result) {
        errMessage = 'ngOnInit Failed ' + errMessage;
        LogApp.consoleLog(errMessage,'error');
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

  }

  /**
   * Ritorna se è consigliabile visualizzare le note
   */
  get showGroupTesseramenti():boolean {
    let flagShow = false;

    if (this.collTesseramenti && this.collTesseramenti.length != 0) {
      flagShow = true;
    }

    return flagShow;
  }

  /**
   * Ritorna una collection di PrenotaTesseramento abbinata
   */
  get collTesseramenti(): PrenotaTesseramento[] {
    let myColl: PrenotaTesseramento[];

    if (this.activePrenotazione && this.activePrenotazione.PRENOTATESSERAMENTO) {
      myColl = this.activePrenotazione.PRENOTATESSERAMENTO;
    }


    return myColl;
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
                if (this.activePrenotazione == null) {
                  LogApp.consoleLog('activePrenotazione null');
                  this.onBookIdWrong();
                }
                else if (this.idPrenotazione != this.activePrenotazione.ID) {

                  LogApp.consoleLog('idPrenotazione <> activePrenotazione.ID','error');
                  LogApp.consoleLog(`idPrenotazione: ${this.idPrenotazione} - activePrenotazione ${this.activePrenotazione.ID}`,'error');
                  this.onBookIdWrong();

                } else if (this.docPianificazione == null) {

                  LogApp.consoleLog('docPianificazione null','error');
                  this.onBookIdWrong();
                  
                }
              }
              
    });
  }

  /**
   * Book ID Errato devo uscire
   */
  onBookIdWrong() {

    this.startService.showToastMessage('Errore dati prenotazione');
    this.closeModal();

  }

  /**
   * Chiude questa videata modale 
   */
  closeModal() {
    this.modalController.dismiss();
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
                     .subscribe({
                      next: (resultData) => {
                          //Chiudo il loading
                          elLoading.dismiss();

                          //Converto il documento ricevuto
                          let newPrenotazione = Prenotazione.getPrenotazioneFromJson(resultData);

                          //Invio al servizio il documento
                          this.startService
                            .setActivePrenotazione(newPrenotazione);

                            //Se non è valida visualizzo un messsaggio
                          if (!newPrenotazione.ISVALID) {
                            this.startService.presentAlertMessage(newPrenotazione.MSGINVALID);
                          }
                      },
                      error: (err) => {
                          //Chiudo il loading
                          elLoading.dismiss();
                          this.startService.presentAlertMessage(err);
                      }
                     })


        
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
    this.startService.showToastMessage('Prenotazione confermata');

    //1) Chiudere la modale
    this.modalController.dismiss()
                  .then(isClosed => {
                    if (isClosed) {

                      //2) Andare alla History sulla scheda
                      let identifier = this.docPianificazione.getIdentifier();
                      let arPath = this.startService.getUrlPageHistoryPersonal('book',identifier);
                      //Adesso mi sposto
                      this.navController.navigateBack(arPath);

                    }
                  })
    
  }


  //#region METODI GESTIONE PAGAMENTO

  /**
   * Recupera i metodi di pagamento sulla base dell'Area e popola 
   * le variabili con la configurazione
   */  
  setListPayment() {

    let listConfigIncassi: AreaPaymentSetting[];

    LogApp.consoleLog('Imposto Lista Metodi Pagamento');


    //Azzero le configurazioni
    this._configIncassoContanti = null;
    this._configIncassoBonifico = null;
    this._configIncassoMobile = null;
    //Questo è il modo di pagamento scelto
    this._selectedPaymentMode = null;
    this._selectedPaymentConfig = null;


    //Ho il documento dell'Area
    if (this.selectedArea) {
      //Recupero le modalità
      listConfigIncassi = this.selectedArea.getPaymentFor(SettorePagamentiAttivita.settorePagamentoPrenotazione)

      //Recupero la modalità per il pagamento in contanti (se presente)
      this._configIncassoContanti = AreaPaymentSetting.findConfigIncassoFor(listConfigIncassi, 
                                                                          ModeIncassoConfig.incassoContanti, 
                                                                          SettorePagamentiAttivita.settorePagamentoPrenotazione)

      //Recupero la modalità per il pagamento in bonifico (se presente)
      this._configIncassoBonifico = AreaPaymentSetting.findConfigIncassoFor(listConfigIncassi, 
                                                                          ModeIncassoConfig.incassoBonifico, 
                                                                          SettorePagamentiAttivita.settorePagamentoPrenotazione)

      //Recupero la modalità per il pagamento in mobile (se presente)
      this._configIncassoMobile = AreaPaymentSetting.findConfigIncassoFor(listConfigIncassi, 
                                                                          ModeIncassoConfig.incassoCreditCard, 
                                                                          SettorePagamentiAttivita.settorePagamentoPrenotazione)

      LogApp.consoleLog('Contanti');
      LogApp.consoleLog(this._configIncassoContanti);
      LogApp.consoleLog('Bonifico');
      LogApp.consoleLog(this._configIncassoBonifico);
      LogApp.consoleLog('Mobile');
      LogApp.consoleLog(this._configIncassoMobile);

    }

  }


  /**
   * Selezionato un valore per il metodo di pagamento
   * @param value 
   */
  onSelectPaymentConfig(value: ModeIncassoConfig) {

    this._selectedPaymentMode = value;

    switch (this._selectedPaymentMode) {
      case ModeIncassoConfig.incassoContanti:
          this._selectedPaymentConfig = this._configIncassoContanti;
        break;
      case ModeIncassoConfig.incassoBonifico:
          this._selectedPaymentConfig = this._configIncassoBonifico;
        break;
      case ModeIncassoConfig.incassoCreditCard:
          this._selectedPaymentConfig = this._configIncassoMobile;
        break;        
    
      default:
        break;
    }
  }

  
  /**
   * Richiesta di esecuzione del pagamento di qualsiasi tipologia
   * 1) Se onSite conclude subito dicendo che va bene
   * 2) Per altre tipologie viene aperta la pagina del pagamento
   *
   */
  onExecPayment() {

    //Presente un totale da pagare
    if (this.activePrenotazione.TOTALE != 0) {

      //Metodo di pagamento che non prevede altri passaggi 
      if (this._selectedPaymentMode == ModeIncassoConfig.incassoContanti) {

          //Creo il risultato del pagamento, passando la modalità
          let docPaymentResult = new PaymentProcess(PaymentMode.pagaStruttura);
          // Essendo una modalita che non prevede interazioni app
          // viene impostato automaticamento il channelPayment 
          // e il processResult = TRUE
          
          //Passo subito al Success
          this.onPaymentSuccess(docPaymentResult);        
      }
      else if (this._selectedPaymentMode == ModeIncassoConfig.incassoBonifico) {

          //Creo il risultato del pagamento, passando la modalità
          let docPaymentResult = new PaymentProcess(PaymentMode.pagaBonifico);
          // Essendo una modalita che non prevede interazioni app
          // viene impostato automaticamento il channelPayment 
          // e il processResult = TRUE
          
          //Passo subito al Success
          this.onPaymentSuccess(docPaymentResult);        
      }
      else if (this._selectedPaymentMode == ModeIncassoConfig.incassoCreditCard) {

        //*********** Pagamento tramite Stripe *********************
        if (this._selectedPaymentConfig.TIPOPAYMENT == PaymentChannel.stripe) {
            //Chiamo il metodo per il pagamento
            this.payWithStripe()
                .then(paymentResultDoc => {
                  //Pagamento avvenuto correttamente
                  //Passo subito al Success
                  this.onPaymentSuccess(paymentResultDoc);
                })
                .catch(error => {
                  if (error instanceof Error) {
                    //Errore pagamento
                    this.startService.presentAlertMessage(error.message, 'Pagamento fallito');
                  }
                  else if (typeof error == 'string') {
                    this.startService.presentAlertMessage(error, 'Pagamento fallito');
                  }
                  else {
                    this.startService.presentAlertMessage(error.toString(), 'Pagamento fallito');
                  }
                })
        }
      }
      
    }
    else if (this.enableZeroPayment) {

          //Creo il risultato del pagamento, passando la modalità
          let docPaymentResult = new PaymentProcess(PaymentMode.pagaStruttura);
          // Essendo una modalita che non prevede interazioni app
          // viene impostato automaticamento il channelPayment 
          // e il processResult = TRUE
          
          //Passo subito al Success
          this.onPaymentSuccess(docPaymentResult);       

    } else {
      this.startService.presentAlertMessage('Contattare la struttura. Prenotazioni gratuite concluse');
    }



  }

  //#region STRIPE PAYMENT

// Modifica il metodo payWithStripe
/**
 * Si chiede il pagamento tramite Stripe
 */
payWithStripe(): Promise<PaymentProcess> {
  return new Promise<PaymentProcess>((resolve, reject) => {
    
    const amount = this.activePrenotazione.TOTALE * 100;
    

    this.startService.presentPaymentOptions(amount, 'EUR')
      .then(result => {

        if (result.success) {

          // Su browser, mostra il form e monta Stripe Elements
          if (!this.platform.is('capacitor')) {
            console.log('🌐 Browser: mostro form pagamento');
            this.showStripeForm = true;
            this.currentPaymentResolve = resolve;
            this.currentPaymentReject = reject;
            
            // Aspetta che Angular renderizzi il DOM, poi monta Stripe
            setTimeout(() => {
              this.mountStripeElement();
            }, 100);
            return;
          }

          // Su mobile, procedi direttamente
          let paymentResultDoc = new PaymentProcess(PaymentMode.pagaAdesso);
          paymentResultDoc.modePayment = PaymentMode.pagaAdesso;
          paymentResultDoc.channelPayment = PaymentChannel.stripe;
          paymentResultDoc.amount = amount / 100;
          paymentResultDoc.currency = 'EUR';
          paymentResultDoc.description = 'Pagamento Prenotazione';
          paymentResultDoc.idElectronicResult = result.paymentIntentId;
          paymentResultDoc.processResult = true;

          console.log('✅ Pagamento completato!', result.paymentIntentId);
          resolve(paymentResultDoc);

        }
        else {
          console.error('❌ Errore:', result.error);
          reject(result.error);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}

/**
 * Monta l'elemento Stripe nel DOM
 */
async mountStripeElement() {
  try {
    await this.startService.mountPaymentElement();
    console.log('✅ Stripe Element montato nel DOM');
  } catch (error) {
    console.error('❌ Errore montaggio Stripe Element:', error);
    this.showStripeForm = false;
    if (this.currentPaymentReject) {
      this.currentPaymentReject('Errore caricamento form pagamento');
    }
  }
}

/**
 * Conferma il pagamento su browser
 */
async confirmStripePayment() {
  try {
    const result = await this.startService.confirmBrowserPayment();
    
    this.showStripeForm = false;

    if (result.success) {
      const amount = this.activePrenotazione.TOTALE * 100;
      let paymentResultDoc = new PaymentProcess(PaymentMode.pagaAdesso);
      
      paymentResultDoc.modePayment = PaymentMode.pagaAdesso;
      paymentResultDoc.channelPayment = PaymentChannel.stripe;
      paymentResultDoc.amount = amount / 100;
      paymentResultDoc.currency = 'EUR';
      paymentResultDoc.description = 'Pagamento Prenotazione';
      paymentResultDoc.idElectronicResult = result.paymentIntentId || '';
      paymentResultDoc.processResult = true;

      if (this.currentPaymentResolve) {
        this.currentPaymentResolve(paymentResultDoc);
      }
    } else {
      if (this.currentPaymentReject) {
        this.currentPaymentReject(result.error);
      }
    }
  } catch (error: any) {
    this.showStripeForm = false;
    if (this.currentPaymentReject) {
      this.currentPaymentReject(error.message || error);
    }
  }
}

/**
 * Annulla il pagamento su browser
 */
cancelStripePayment() {
  this.showStripeForm = false;
  if (this.currentPaymentReject) {
    this.currentPaymentReject('Pagamento annullato dall\'utente');
  }
}
  //#endregion


  /**
   * Pagamento andato a buon fine
   * @param resultPayment Risultato del pagamento
   */
  onPaymentSuccess(resultPayment?: PaymentProcess) {
    
    //Pagamento corretto
    if (resultPayment && resultPayment.processResult)  {

      //Nessuna transazione sembra avvenuta
      if (resultPayment.idElectronicResult.length == 0) {

        this.activePrenotazione.IDTRANSACTION = '';
        this.activePrenotazione.IDORDER = '';

        this.activePrenotazione.CHANNELPAYMENT = resultPayment.channelPayment;

        //Imposto nella prenotazione che il residuo è il totale
        this.activePrenotazione.RESIDUO = this.activePrenotazione.TOTALE;
        //e che non ho incassato nulla
        this.activePrenotazione.INCASSATO = 0;


      }
      else {

        this.activePrenotazione.RESIDUO = 0;
        this.activePrenotazione.INCASSATO = this.activePrenotazione.TOTALE;
        
        //Non riesco ad ottenere idTransaction e quindi non lo mando
        this.activePrenotazione.IDTRANSACTION = '';
        
        //Dovrebbe essere idOrder
        this.activePrenotazione.IDORDER = resultPayment.idElectronicResult;
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
  
                    this.startService.presentAlertMessage(docPrenotazione.MSGINVALID);
  
                  }
                  else {
                    //Imposto anche la pianificazione
                    this.docPianificazione = this.activePrenotazione.PRENOTAZIONEPIANIFICAZIONE[0];
                  }
  
                  
                  //Eseguo operazioni successive al salvataggio
                  this.onAfterSavePrenotazione();
  
  
                })
                .catch(errMessage => {
                      //Chiudo il loader
                      elLoading.dismiss();
                      this.startService.presentAlertMessage(errMessage);
                  });  
                
          });


    }


    
    

  }


  //#endregion

 

  openLink(url:string)
  {
    Browser.open({url:url})
  }


  /**
 * Recupera il link per le condizioni di vendita Prenotazioni e apre il browser
 */
  onClickCondizioniVendita(): void {
    let link: AreaLink;


    if (this.selectedArea) {

      link = this.selectedArea.findAreaLinkByPageType(PageType.condizioniVenditaPrenotazioni);
  
      if (link && link.REFERURL) {

        //Apro il link
        this.openLink(link.REFERURL);

      }
    }

    
  }

  
}


