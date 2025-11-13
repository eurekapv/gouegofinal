import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController, NavParams, Platform, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { Area } from 'src/app/models/struttura/area.model';
import { AreaPaymentSetting } from 'src/app/models/struttura/areapaymentsetting.model';
import { Corso } from 'src/app/models/corso/corso.model';
import { Location } from 'src/app/models/struttura/location.model';
import { PaymentProcess } from 'src/app/models/zsupport/payment-process.model';
import { ModeIncassoConfig, PageType, PaymentChannel, PaymentMode, SettorePagamentiAttivita, TipoCorso, TipoRigoIncasso, TipoScadenza, ZOrderIncasso } from 'src/app/models/zsupport/valuelist.model';
import { PaymentPage } from 'src/app/pages/payment/payment.page';
import { StartService } from 'src/app/services/start.service';
import { AreaLink } from 'src/app/models/struttura/arealink.model';
import { Settimana } from 'src/app/models/zsupport/settimana.model';
import { Utente } from 'src/app/models/utente/utente.model';
import { PostResponse } from 'src/app/library/models/post-response.model';
import { IscrizioneCorso } from 'src/app/models/corso/iscrizione-corso.model';
import { TipoPagamento } from 'src/app/models/archivi/tipopagamento.model';
import { IscrizioneTesseramento } from 'src/app/models/corso/iscrizione-tesseramento';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { TotaleScadenze } from 'src/app/shared/interfaces/interfaces';


@Component({
  selector: 'app-periodic-course-subscribe',
  templateUrl: './periodic-course-subscribe.page.html',
  styleUrls: ['./periodic-course-subscribe.page.scss'],
})
export class PeriodicCourseSubscribePage implements OnInit, OnDestroy {

  corsoDoc: Corso = new Corso();  //Corso di riferimento
  idCorso: string; //Id Corso presente nei parametri
  listenerCorsoDoc: Subscription;
  loadingComplete = false; //Caricamento finale completato

  iscrizioneDoc: IscrizioneCorso; //Iscrizione
  locationDoc: Location = new Location();

  userDoc: Utente;
  listenerUserDoc: Subscription;

  isDesktop: boolean;
  iconColor = 'primary';

  userLogged = false;
  listenerUserLogged: Subscription;

  //Gestione Abilitazione Iscrizioni
  listenSelectedArea:Subscription;
  selectedArea: Area;
  enableIscrizioni:boolean = false;

  //accettazione delle condizioni di vendita
  disclaimer: boolean = true;

  //Configurazioni di pagamento
  myListModePayment: AreaPaymentSetting[];
  
  myModePayment: PaymentMode;

  subPaymentResult: Subscription;
  onlyDaysCorso: Settimana[] = []; //Contiene i soli giorni di corso

  listTipiPagamento: TipoPagamento[]; //Lista Tipi Pagamenti
  selectedTipoPagamento: TipoPagamento; //Tipo Pagamento Selezionato
  idSelectedTipoPagamento: string; //Id Pagamento
  labelInfoSelectedTipoPagamento: string; //Etichetta della chip mostrata a video

  //Controllo Posti Disponibili
  flagPostiDisponibili = false;
  txtPostiDisponibili = '';
  modalitaSaldo: 'unico' | 'rateale' = 'unico';
  flagCondizioni = true;


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

  constructor(private startService: StartService,
              private navParams: NavParams,
              private loadingController: LoadingController,
              private modalCtrl: ModalController,
              private docStructureService : DocstructureService,
              private navCtrl: NavController,
              private platform: Platform
            ) {

              //Ascolto cambiamenti dell'Area per l'abilitazione delle iscrizioni
              this.onListenSelectedArea();

              //Ascolto cambiamento dell'utente
              this.onListenSelectedUser();

  }


/**
 * Porzione di inizializzazione
 */
ngOnInit() {

  //this.isDesktop = this.startService.isDesktop;
  //Sembra che l'istruzione sopra non funzioni correttamente
  this.isDesktop = false;

  //Recupero IDCorso di riferimento
  this.idCorso = this.navParams.get('idCorso');

  if (this.idCorso && this.idCorso.length != 0) {

    this.loadingController.create({
      message: 'Caricamento Corso'
    })
    .then(elLoading => {
      this.loadingComplete = false;

      elLoading.present();

      //Faccio una chiamata per recuperare il Corso
      this.startService.requestCorsoById(this.idCorso,1,true)
                       .then(elCorso => this.docStructureService.loadCollection(elCorso, 'PIANIFICAZIONECORSO'))
                       .then(elCorso => {

                            this.corsoDoc = <Corso>elCorso;
                            //Recupero le giornate di corso
                            this.onlyDaysCorso = this.corsoDoc.getArrayGiorniCorso();

                            //Richiedo le modalità di pagamento (e le collection sottostanti)
                            return this.startService.requestListTipiPagamenti(2);
                       })
                       .then(listPayment => {

                            //Mi servono le modalità dei Pagamenti
                            this.listTipiPagamento = listPayment;

                            //Seleziono il pagamento default per i corsi
                            return this.onSelectDefaultTypePayment();

                          })
                          .then(() => {

                            //Procedo con la preparazione dell'environment
                            return this.prepareEnvironment();

                       })
                       .then(() => {
                            this.loadingComplete = true;
                            //Tutto concluso bene
                            elLoading.dismiss();
                       })
                       .catch(error => {

                          elLoading.dismiss();

                          let myMessage = '';
                          let myTitle = '';
                          LogApp.consoleLog(error, "error");
                          //Chiudo la Modale con un messaggio
                          myTitle = 'Recupero Fallito';
                          myMessage = '<p>Non sono riuscito a recuperare le informazioni complete per effettuare l\'iscrizione</p>';
                          if (typeof error == 'string') {
                            myMessage += `<p>${error}</p>`;
                          }

                          this.closeModal(myMessage, myTitle);

                       })


    })

  }
  else {
    //Non ho il corso
    let myMessage = '';
    let myTitle = '';
    LogApp.consoleLog('IdCorso undefined', "error");
    //Chiudo la Modale con un messaggio
    myTitle = 'Recupero Fallito';
    myMessage = 'Non sono riuscito a recuperare il corso (non definito)';
    this.closeModal(myMessage, myTitle);
  }

}

ngOnDestroy() {
  if (this.listenerCorsoDoc) {
    this.listenerCorsoDoc.unsubscribe();
  }

  if (this.listenerUserLogged) {
    this.listenerUserLogged.unsubscribe();
  }

  if (this.listenSelectedArea) {
    this.listenSelectedArea.unsubscribe();
  }
}

//#recupero AREA, USER, LOCATION, TIPI PAGAMENTI

/**
 * In ascolto dell'area selezionata, per capire se solo abilitate le iscrizioni
 */
 onListenSelectedArea() {

  this.listenSelectedArea = this.startService.areaSelected$
                           .subscribe({
                              next: (elArea) => {
                                //Imposto l'area di riferimento
                                this.selectedArea = elArea;

                                //Impostazione tipologie pagamento
                                this.setListPayment();

                                //Controllo se nell'area sono abilitate le iscrizioni
                                if (this.selectedArea.APPISCRIZIONI == true) {
                                  this.enableIscrizioni = true;

                                }
                                else {
                                  this.enableIscrizioni = false;
                                }
                              },
                              error: (error) => {
                                LogApp.consoleLog(error,'error');
                                this.enableIscrizioni = false;
                              }
                            });

  }

/**
 * Ascolto il cambiamento dell'utente
 */
onListenSelectedUser() {
  //Controllo se l'utente è loggato
  this.listenerUserLogged = this.startService.flagUtenteIsLoggato$
                            .subscribe({
                              next: (element) => {
                                    this.userLogged = element;
                              },
                              error: (error) => {
                                LogApp.consoleLog(error,'error');
                              }
                            });

  //Sottoscrivo al documento Utente
  this.listenerUserDoc = this.startService.activeUtenteDoc$
                        .subscribe({
                          next: (elUser) => {
                              this.userDoc = elUser;

                              //Se ho tutti i dati preparo l'iscrizione
                              if (this.loadingComplete) {
                                //Riconfiguro il documento di Iscrizione
                                this.prepareDocIscrizione(this.corsoDoc, this.userDoc);
                              }
                          }, 
                          error: (error) => {
                                LogApp.consoleLog(error,'error');
                              }
                          });
}

/**
 * Richiedo la location
 * @param idLocation idLocation
 */
requestLocationById(idLocation: string): Promise<void>{

  return new Promise<void>((resolve, reject) => {

    //preparo il filtro
    let filterLocation: Location = new Location(true);
    //Imposto la location
    filterLocation.ID = idLocation;

    //faccio la richiesta
    this.docStructureService.requestNew(filterLocation)
        .then(listLocations => {

          if (listLocations && listLocations.length !=0){

            //Imposto la location
            this.locationDoc = listLocations[0];
            resolve();

          }
          else{
            reject('Location not found');
          }
        }).catch(error => {

            reject('Connection error' + error);

        })

    })
}
//#endregion

//#region PREPARAZIONE DOCUMENTI

/**
 * Effettua la preparazione dei documenti e dell'ambiente operativo
 */
prepareEnvironment():Promise<void> {

  return new Promise<void>((resolve, reject) => {

    let arPromise = [];

    //Step A - Richiedo i posti diponibili
    arPromise.push(this.requestPostiDisponibili(this.corsoDoc.ID));

    //Step B - Richiesta Location
    arPromise.push(this.requestLocationById(this.corsoDoc.IDLOCATION));

    //Step C - Preparazione del documento Iscrizione
    arPromise.push(this.prepareDocIscrizione(this.corsoDoc, this.userDoc));


    Promise.all(arPromise)
            .then(() => {
              resolve();
            })
            .catch(errors => {
              reject(errors);
          })
  })
}

/**
 * Contatta il server per sapere se ci sono posti per l'iscrizione
 * Valorizza due proprieta
 * posti Disponibili: Boolean
 * txtPostiDisponibili: Messaggio da visualizzare
 *
 * @param idCorso idCorso richiesto
 */
requestPostiDisponibili(idCorso: string):Promise<void> {

  return new Promise<void>((resolve, reject) => {

    //Chiamo il server e chiedo
    this.startService.getPostiDisponibiliCorso(idCorso)
        .then((elResponse:PostResponse) => {
          if (elResponse.result) {
            this.flagPostiDisponibili = true;
          }
          else {
            this.flagPostiDisponibili = false;
          }

          this.txtPostiDisponibili = elResponse.message;
          resolve();
        })
        .catch(error => {
          reject();
        })
  })
}


//Preparazione del documento di Iscrizione
/**
 *
 * @param myCorso Corso di riferimento
 * @param myUtente Utente
 * @param idTipoPagamento Tipo di Pagamento eventuale
 * @returns
 */
prepareDocIscrizione(myCorso: Corso,
                     myUtente: Utente,
                     ):Promise<void> {

  return new Promise<void>((resolve, reject) => {

    let requestRecalc = false;

    //Documento non presente, faccio la richiesta
    if (!this.iscrizioneDoc) {
      this.iscrizioneDoc = new IscrizioneCorso();
      this.iscrizioneDoc.DATAISCRIZIONE = new Date();
    }


    if (this.iscrizioneDoc.IDTIPOPAGAMENTO != this.selectedTipoPagamento.ID) {

      //Imposto il tipo di pagamento
      this.iscrizioneDoc.IDTIPOPAGAMENTO = this.selectedTipoPagamento.ID;

      requestRecalc = true;
    }

    //E' presente il Documento del Corso
    if (myCorso && myCorso.ID != this.iscrizioneDoc.IDCORSO) {
      this.iscrizioneDoc.IDCORSO = myCorso.ID;
      requestRecalc = true;
    }


    //E' presente il Documento del Utente
    if (myUtente && myUtente.ID != this.iscrizioneDoc.IDUTENTE) {
      this.iscrizioneDoc.IDUTENTE = myUtente.ID;
      requestRecalc = true;
    }


    //Devo procedere con la richiesta del totale
    if (requestRecalc) {
      //Preparo la chiamata al Server
      this.startService.onRequestIscrizioneDocFor(this.iscrizioneDoc)
                       .then(elIscrizione => {
                          this.iscrizioneDoc = elIscrizione;

                          resolve();
                       })
                       .catch(error => {
                        LogApp.consoleLog(error);
                        reject(error);
                       })
    }
    else {
      //Se non devo chiamare va bene cosi
      resolve();
    }

  })
}

//#endregion


//#region TIPO PAGAMENTO

/**
 * Imposta i campi aggiuntivi relativi al tipo Pagamento
 * @param paymentType
 */
setAdditionalInfoTipoPagamento(paymentType: TipoPagamento): void {

  if (paymentType) {
    //Id Pagamento
    this.idSelectedTipoPagamento = paymentType.ID;
    this.labelInfoSelectedTipoPagamento = paymentType.getLabelForScadenza();
  }
}

/**
 * Modifica della scelta del tipo pagamento
 * @param item
 */
onChangeTipoPagamento(itemId: string): void {

  //Cambio il Tipo Pagamento
  this.selectedTipoPagamento = this.listTipiPagamento.find(elTipiPagamenti => {
      return elTipiPagamenti.ID == itemId;
  });

  //Reimposto alcune voci addizionali
  this.setAdditionalInfoTipoPagamento(this.selectedTipoPagamento);

  //Chiedo un ricalcolo delle scadenze
  this.startService.showLoadingMessage('Ricalcolo scadenze')
                   .then(elLoading => {
                      elLoading.present();

                      //preparo il documento di Iscrizione
                      this.prepareDocIscrizione(this.corsoDoc, this.userDoc)
                          .then(() => {
                            elLoading.dismiss();
                          })
                          .catch(error => {
                            //Chiudo il loading
                            elLoading.dismiss()
                                    .then(isClose => {
                                      if (isClose) {
                                        this.startService.presentAlertMessage(error);
                                      }
                                    })
                          })
                   })

}


/**
 * Recupera dalla lista dei tipi pagamenti il pagamento predefinito
 * @returns
 */
onSelectDefaultTypePayment(): Promise<void> {

  return new Promise<void>((resolve, reject) => {
    if (this.listTipiPagamento && this.listTipiPagamento.length != 0) {
      if (this.listTipiPagamento.length == 1) {
        this.selectedTipoPagamento = this.listTipiPagamento[0];
      }
      else {
        //Cerco quello impostato per i corsi
        this.selectedTipoPagamento = this.listTipiPagamento.find(elPayment => {
          return elPayment.PREDEFINITACORSI == true
        });

        if (!this.selectedTipoPagamento) {
          //Prendo il primo che trovo
          this.selectedTipoPagamento = this.listTipiPagamento[0];
        }
      }

      //Imposto informazioni aggiuntive (Quale ID e campo Label)
      this.setAdditionalInfoTipoPagamento(this.selectedTipoPagamento);

      resolve();
    }
    else {
      reject('Nessuna modalità di pagamento impostata');
    }
  })
}


//#endregion

//#region METHOD INTERFACE

/**
 * Chiama il servizio passandogli l'id dell'oggetto corso,
 * e restituisce la stringa dell'icona
 * @param myCorso l'oggetto corso per cui si richiede l'icona
 */
  getIcon(myCorso:Corso)
  {
    return this.startService.getSportIcon(myCorso.IDSPORT);
  }

  /**
 * Recupera il link per le condizioni di vendita Corso e apre il browser
 */
  onClickCondizioniVendita(): void {
    let link: AreaLink;


    if (this.selectedArea) {

      link = this.selectedArea.findAreaLinkByPageType(PageType.condizioniVenditaIscrizioni);

      if (link && link.REFERURL) {

        //Apro il link
        this.startService.openLink(link.REFERURL);

      }
    }


  }

  /**
   * Click sul bottone di Header
   */
  onClickButtonHeader() {

    if (!this.flagPostiDisponibili) {
      //Se non ci sono posti, uso il pulsante per chiudere
      this.closeModal();
    }

  }

  /**
   * Chiusura della Modale, ed eventuale messaggio mostrato
   * @param message Messaggio
   * @param title Titolo
   */
  closeModal(message?:string,
             title?:string,
             pathGoTo?: string[]) {

    this.modalCtrl.dismiss()
                  .then(isClosed => {
                    if (isClosed) {

                      if (pathGoTo && pathGoTo.length != 0) {
                        this.navCtrl.navigateRoot(pathGoTo);
                      }

                      if (message && message.length != 0) {
                        this.startService.presentAlertMessage(message, title);
                      }

                    }
                  })
  }


  /**
   * Mostra un alert per contattare la struttura
   */
  onClickContattaStruttura() {
    let myButton = [];
    let myMessage = '';

    myMessage = 'Per l\'iscrizione è necessario contattare la struttura telefonicamente';
    myButton = [
      {
        text: 'OK',
        role: 'cancel'
      }
    ];

    //Se ho il telefono, glielo scrivo
     if (this.locationDoc.TELEFONO &&
         this.locationDoc.TELEFONO.length != 0) {

      myMessage = myMessage + ' al ' + `<strong>${this.locationDoc.TELEFONO}</strong>`;

      if (!this.startService.isDesktop) {

        myButton = [
          {
            text: 'OK',
            role: 'cancel'
          },
          {
            text: 'Chiama',
            handler: () => {
              const number = this.locationDoc.TELEFONO;
              const link: HTMLAnchorElement = document.createElement('a');
              link.setAttribute('href', `tel:${number}`);
              link.click();

            }
          }
        ];

      }

    }

    //Mostro il messaggio
    this.startService.presentAlertMessage(myMessage, 'Contatti', myButton);

  }


  /**
   * Modifica del flag delle Condizioni
   */
  onClickChangeFlagCondizioni() {
    this.flagCondizioni = !this.flagCondizioni;
  }
  //#endregion

  //#region AREA TESSERAMENTI
  get showGroupTesseramenti():boolean {

    let flagShow = false;
    if (this.iscrizioneDoc &&
        this.iscrizioneDoc.ISCRIZIONETESSERAMENTO &&
        this.iscrizioneDoc.ISCRIZIONETESSERAMENTO.length != 0) {
          flagShow = true;
        }
    return flagShow;
  }

  /**
   * Ritorna una collection di PrenotaTesseramento abbinata
   */
  get collTesseramenti(): IscrizioneTesseramento[] {
    let myColl: IscrizioneTesseramento[];

    if (this.iscrizioneDoc && this.iscrizioneDoc.ISCRIZIONETESSERAMENTO) {
      myColl = this.iscrizioneDoc.ISCRIZIONETESSERAMENTO;
    }


    return myColl;
  }


  //#endregion


  //#region METODI GESTIONE MODALITA PAGAMENTO

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
   * Pressione del pulsante in interfaccia di conferma
   */
   onClickConfirmIscrizione()
   {
      //Imposto la tipologia di pagamento
      this.iscrizioneDoc.IDTIPOPAGAMENTO = this.idSelectedTipoPagamento;

      //Ha accettato le condizioni
      if (this.flagCondizioni) {

        //Vado al pagamento
         this.onExecPayment();
      }
      else {
        let myMessage = '';
        myMessage = '<p>Per continuare &egrave necessario <strong>accettare</strong> le condizioni di vendita</p>'
        this.startService.presentAlertMessage(myMessage);
      }

   }

  /**
   * Richiesta di esecuzione del pagamento di qualsiasi tipologia
   * 1) Se onSite conclude subito dicendo che va bene
   * 2) Per altre tipologie viene aperta la pagina del pagamento
   *
   */
   onExecPayment() {

    let paymentAmount: TotaleScadenze;
    let docPaymentResult: PaymentProcess;
    

    if (this.iscrizioneDoc) {

      //Chiediamo quanto devo pagare adesso
      paymentAmount = this.iscrizioneDoc.sumScadenzeFor(new Date());

      if (paymentAmount.totale == 0) {
        // Potrei essere in una prova gratuita, oppure aver scelto 
        // un pagamento che non
        // prevede un immediato esborso

        //Creo il risultato del pagamento, passando la modalità
        docPaymentResult = new PaymentProcess(PaymentMode.pagaStruttura);
        // Essendo una modalita che non prevede interazioni app
        // viene impostato automaticamento il channelPayment
        // e il processResult = TRUE

        //Passo subito al Success
        this.onPaymentSuccess(docPaymentResult);

      }
      else if (this._selectedPaymentMode == ModeIncassoConfig.incassoContanti) {
        //Modalità di pagamento in struttura
        //Creo il risultato del pagamento, passando la modalità
        docPaymentResult = new PaymentProcess(PaymentMode.pagaStruttura);
        // Essendo una modalita che non prevede interazioni app
        // viene impostato automaticamento il channelPayment
        // e il processResult = TRUE

        //Passo subito al Success
        this.onPaymentSuccess(docPaymentResult);

      }
      else if (this._selectedPaymentMode == ModeIncassoConfig.incassoBonifico) {
        //Modalità di pagamento in struttura
        //Creo il risultato del pagamento, passando la modalità
        docPaymentResult = new PaymentProcess(PaymentMode.pagaBonifico);
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
                });
          }
      }
      
    }
    else {
      LogApp.consoleLog('Tentativo di pagamento senza iscrizione');
    }

  }

  
  //#region STRIPE PAYMENT


  /**
   * Si chiede il pagamento tramite Stripe
   */
  payWithStripe(): Promise<PaymentProcess> {
    return new Promise<PaymentProcess>((resolve, reject) => {

      let paymentAmount: TotaleScadenze;
      let paymentDescription: string = '';

      //Chiediamo quanto devo pagare adesso
      paymentAmount = this.iscrizioneDoc.sumScadenzeFor(new Date());

      //Compilo la descrizione del pagamento
      paymentDescription = 'Pagamento Iscrizione Corso ' + this.corsoDoc.DENOMINAZIONE;

      if (this.selectedTipoPagamento.isRateale()) {
        if (paymentAmount.numeroRate == 1) {
          paymentDescription += ` (Rata 1 di ${this.iscrizioneDoc.ISCRIZIONEINCASSO.length})`
        }
        else {
          paymentDescription += ` (${paymentAmount.numeroRate} Rate di ${this.iscrizioneDoc.ISCRIZIONEINCASSO.length})`
        }
      }


      //Valore in centesimi
      const amount = paymentAmount.totale * 100;
      const centroAccountId = this._selectedPaymentConfig.STIDACCOUNT;


      this.startService.presentPaymentOptions(
                        amount,
                        'EUR',
                        centroAccountId)
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
            paymentResultDoc.description = paymentDescription;
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
      let paymentAmount: TotaleScadenze;
      let paymentDescription: string = '';

      //Chiediamo quanto devo pagare adesso
      paymentAmount = this.iscrizioneDoc.sumScadenzeFor(new Date());

      //Compilo la descrizione del pagamento
      paymentDescription = 'Pagamento Iscrizione Corso ' + this.corsoDoc.DENOMINAZIONE;

      if (this.selectedTipoPagamento.isRateale()) {
        if (paymentAmount.numeroRate == 1) {
          paymentDescription += ` (Rata 1 di ${this.iscrizioneDoc.ISCRIZIONEINCASSO.length})`
        }
        else {
          paymentDescription += ` (${paymentAmount.numeroRate} Rate di ${this.iscrizioneDoc.ISCRIZIONEINCASSO.length})`
        }
      }

      this.showStripeForm = false;

      if (result.success) {
        
        let paymentResultDoc = new PaymentProcess(PaymentMode.pagaAdesso);
        
        paymentResultDoc.modePayment = PaymentMode.pagaAdesso;
        paymentResultDoc.channelPayment = PaymentChannel.stripe;
        paymentResultDoc.amount = paymentAmount.totale;
        paymentResultDoc.currency = 'EUR';
        paymentResultDoc.description = paymentDescription;
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
   * Richiesta di esecuzione del pagamento di qualsiasi tipologia
   * 1) Se onSite conclude subito dicendo che va bene
   * 2) Per altre tipologie viene aperta la pagina del pagamento
   * @deprecated
   */
   onExecPayment2() {

    // let arModes:PaymentMode[]=[PaymentMode.pagaAdesso,
    //                            PaymentMode.pagaBonifico,
    //                            PaymentMode.pagaStruttura];

    let paymentAmount: TotaleScadenze;
    let docPaymentResult: PaymentProcess;
    let myCheckoutPayment: PaymentProcess;
    let descrPagamento = '';



    if (this.iscrizioneDoc) {
      //Chiediamo quanto devo pagare adesso
      paymentAmount = this.iscrizioneDoc.sumScadenzeFor(new Date());

      if (paymentAmount.totale == 0) {
        //Potrei essere in una prova gratuita, oppure aver scelto un pagamento che non
        //prevede un immediato esborso

        //Creo il risultato del pagamento, passando la modalità
        docPaymentResult = new PaymentProcess(PaymentMode.pagaStruttura);
        // Essendo una modalita che non prevede interazioni app
        // viene impostato automaticamento il channelPayment
        // e il processResult = TRUE

        //Passo subito al Success
        this.onPaymentSuccess(docPaymentResult);

      }
      else if (this.myModePayment != PaymentMode.pagaAdesso) {

        //Modalità Paga Bonifico o in Struttura
        //Creo il risultato del pagamento, passando la modalità
        docPaymentResult = new PaymentProcess(this.myModePayment);
        // Essendo una modalita che non prevede interazioni app
        // viene impostato automaticamento il channelPayment
        // e il processResult = TRUE

        //Passo subito al Success
        this.onPaymentSuccess(docPaymentResult);

      }
      else {
        //Devo effettuare il pagamento
        //Preparo un oggetto per processare il pagamento
        myCheckoutPayment = new PaymentProcess(this.myModePayment);

        myCheckoutPayment.amount = paymentAmount.totale;

        descrPagamento = 'Pagamento Iscrizione Corso ' + this.corsoDoc.DENOMINAZIONE;

        if (this.selectedTipoPagamento.isRateale()) {
          if (paymentAmount.numeroRate == 1) {
            descrPagamento += ` (Rata 1 di ${this.iscrizioneDoc.ISCRIZIONEINCASSO.length})`
          }
          else {
            descrPagamento += ` (${paymentAmount.numeroRate} Rate di ${this.iscrizioneDoc.ISCRIZIONEINCASSO.length})`
          }
        }
        myCheckoutPayment.description = descrPagamento;
        myCheckoutPayment.currency = 'EUR';

        //il channelPayment viene impostato nel componente
          //esterno che si preoccupa del pagamento
          //Passo alla modale in paymentData = myCheckoutPayment
        this.modalCtrl.create({
          component: PaymentPage,
          cssClass: 'modal-xl-class',
          componentProps: {
            paymentData: myCheckoutPayment,
            listAreaPaymentSettings: this.myListModePayment,
            areaDoc: this.selectedArea
          }
        })
        .then(elModal => {
          elModal.present();

          return elModal.onDidDismiss();
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
            myPaymentResult = new PaymentProcess(this.myModePayment);
            myPaymentResult.processResult = false;
            myPaymentResult.messageResult = 'Pagamento fallito';

            //Pagamento Fallito
            this.onPaymentFailed(myPaymentResult);

          }
        })


      }
    }

  }

  /**
   * Pagamento andato a buon fine
   * @param resultPayment Risultato del pagamento
   */
  onPaymentSuccess(resultPayment: PaymentProcess) {


    if (resultPayment) {
      //Ha pagato il dovuto
      if (resultPayment.modePayment == PaymentMode.pagaAdesso) {
        //Marchio le scadenze come incassate
        this.iscrizioneDoc.setScadenzePayedFor(new Date(), resultPayment);
      }

      //Qui procedo con il salvataggio di tutto
      this.startService.showLoadingMessage('Richiesta Iscrizione','bubbles',false)
                        .then(elLoading => {

                          //Creo il loading
                          elLoading.present();

                          //Procedo con il salvataggio Iscrizione
                          this.startService.requestSaveIscrizioneCorso(this.iscrizioneDoc)
                                          .then((response: PostResponse) => {

                                            elLoading.dismiss();

                                            //Iscrizione salvata correttamente
                                            if (response.result && response.code && response.code.length != 0) {
                                              //Mi dirigo alla scheda dell'Iscrizione Corso e concludo la modale
                                              this.onAfterSaveIscrizione(response.code);
                                            }
                                            else {
                                              //Si sono verificati problemi
                                              this.startService.presentAlertMessage(response.message,'Iscrizione Fallita');
                                            }
                                          })
                                          .catch(error => {

                                            elLoading.dismiss();

                                            //Si sono verificati problemi
                                            this.startService.presentAlertMessage(error.message,'Iscrizione Fallita');
                                          })

                        });

    }

    //#region DELETE ALL
    /*
    //Preparo i dati da includere come rata di incasso
    myDocRata = new IscrizioneIncasso();

    //Step del pagamento Effettuato (Potrebbe avere effettivamente pagato,
    //oppure non pagato e rimandato in struttura)
    if (resultPayment && resultPayment.processResult)  {

      //Se non è avvenuta nessuna transazione Elettronica
      //vuol dire che ha scelto di pagare successivamente
      if (resultPayment.idElectronicResult.length == 0) {

        //Se il corso è a pagamento, dovrà effettivamente pagare
        if (this.corsoDoc.isAPagamento()) {

          //E' a pagamento, in qualche modo dovrà pagare
          //Creo una scadenza
          myDocRata.IDTRANSACTION = '';
          myDocRata.IDORDER = '';
          myDocRata.MODALITA = resultPayment.channelPayment;
          myDocRata.TIPORIGO = TipoRigoIncasso.scadenza;
          myDocRata.ZORDER = ZOrderIncasso.daIncassare;
          //Data operazione non viene valorizzata ma solo DataScadenza
          myDocRata.DATASCADENZA = this.corsoDoc.DATAINIZIO;
          myDocRata.IMPORTO = this.iscrizioneDoc.TOTALE;

        }
        else {

          //E' un corso gratuito, non c'e' nulla da pagare
          myDocRata.IDTRANSACTION = '';
          myDocRata.IDORDER = '';
          myDocRata.MODALITA = PaymentChannel.onSite;
          myDocRata.TIPORIGO = TipoRigoIncasso.incassato;
          myDocRata.ZORDER = ZOrderIncasso.incassato;
          myDocRata.DATAOPERAZIONE = this.iscrizioneDoc.DATAISCRIZIONE;
          //Non c'e' nessuna scadenza
          myDocRata.IMPORTO = 0;
        }
      }
      else {

        //Transazione avvenuta
        myDocRata.IDTRANSACTION = '';
        myDocRata.IDORDER = resultPayment.idElectronicResult;
        myDocRata.MODALITA = resultPayment.channelPayment;
        myDocRata.TIPORIGO = TipoRigoIncasso.incassato;
        myDocRata.ZORDER = ZOrderIncasso.incassato
        myDocRata.DATAOPERAZIONE = this.iscrizioneDoc.DATAISCRIZIONE;
        //Non c'e' nessuna scadenza
        myDocRata.IMPORTO = this.iscrizioneDoc.TOTALE;

      }

      //Aggiungo le informaioni del pagamento
      this.iscrizioneDoc.ISCRIZIONEINCASSO.push(myDocRata);

      this.startService.showLoadingMessage('Richiesta Iscrizione','bubbles',false)
                        .then(elLoading => {

                          //Creo il loading
                          elLoading.present();

                          //Procedo con il salvataggio Iscrizione
                          this.startService.requestSaveIscrizioneCorso(this.iscrizioneDoc)
                                          .then((response: PostResponse) => {

                                            elLoading.dismiss();

                                            //Iscrizione salvata correttamente
                                            if (response.result && response.code && response.code.length != 0) {
                                              //Mi dirigo alla scheda dell'Iscrizione Corso e concludo la modale
                                              this.onAfterSaveIscrizione(response.code);
                                            }
                                            else {
                                              //Si sono verificati problemi
                                              this.startService.presentAlertMessage(response.message,'Iscrizione Fallita');
                                            }
                                          })
                                          .catch(error => {

                                            elLoading.dismiss();

                                            //Si sono verificati problemi
                                            this.startService.presentAlertMessage(error.message,'Iscrizione Fallita');
                                          })

                        });


    }
    */
    //#endregion




  }


  /**
   * Iscrizione salvata nel sistema posso andare via
   */
   onAfterSaveIscrizione(idIscrizione: string)
   {
      let myMessage = '';
      let myTitle = '';
      let strResiduo = '';

      let goToPath: string[];

      myTitle = 'Iscrizione completata';
      myMessage = `<p>L\'iscrizione ${this.corsoDoc.TIPO == TipoCorso.corso ? 'al corso':'alla prova'}</p>`;
      myMessage += `<p><strong>${this.corsoDoc.DENOMINAZIONE}</strong></p>`
      myMessage += `<p>&Egrave; stata completata con successo`;

      if (this.corsoDoc.isAPagamento() && this.iscrizioneDoc.RESIDUO != 0) {

        strResiduo = (this.iscrizioneDoc.RESIDUO).toLocaleString('it-IT', {minimumFractionDigits: 2})
        myMessage += `<p><strong>${strResiduo} €</strong></p>`;
        myMessage += `<p>`;
        myMessage += `rimangono da versare alla struttura`;
        if (this.selectedTipoPagamento.isRateale()) {
          myMessage += ` in modalit&agrave; ${this.selectedTipoPagamento.getLabelForScadenza()}`;
        }
        else {
          myMessage += ' in rata unica';
        }
        myMessage += '</p>';
      }

      goToPath = this.startService.getUrlPageHistoryPersonal('course', idIscrizione);

     //Chiudo la modale
     this.closeModal(myMessage, myTitle, goToPath);

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

    this.startService.presentAlertMessage(message, title);

  }
   //#endregion





}
