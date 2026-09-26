import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertButton, ModalController, NavController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { RequestParams } from 'src/app/library/models/requestParams.model';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { AreaPaymentSetting } from 'src/app/models/struttura/areapaymentsetting.model';
import { Corso } from 'src/app/models/corso/corso.model';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { Utente } from 'src/app/models/utente/utente.model';
import { Location } from 'src/app/models/struttura/location.model';
import { UtenteIscrizione } from 'src/app/models/utente/utenteiscrizione.model';
import { CancellazioniIscrizioniGiornaliere, ModalitaIscrizione, ModeIncassoConfig, PaymentChannel, SettorePagamentiAttivita, StatoIscrizione, StatoPagamento, TipoCorso, ValueList } from 'src/app/models/zsupport/valuelist.model';
import { StartService } from 'src/app/services/start.service';
import { PaymentResult, StripePaymentIntentMetadata } from 'src/app/services/payment/stripe-payment.service';
import { PeriodicCourseDetailCalendarPage } from '../../pages-location/course/periodic/periodic-course-detail-calendar/periodic-course-detail-calendar.page';
import { AllegatilistPage } from '../allegatilist/allegatilist.page';
import { IscrizioneIncasso } from 'src/app/models/corso/iscrizione-incasso.model';
import { PianificazioneCorso } from 'src/app/models/corso/pianificazionecorso.model';
import { Area } from 'src/app/models/struttura/area.model';
import { MyDateTime, TypePeriod } from 'src/app/library/models/mydatetime.model';


@Component({
  selector: 'app-history-course',
  templateUrl: './history-course.page.html',
  styleUrls: ['./history-course.page.scss'],
})
export class HistoryCoursePage implements OnInit, OnDestroy {

  //Dati richiesti e caricati
  loadedData: boolean = false;
  errorLoadingData: boolean = false;
  messageErrorPage: string = "";
  
  StatoPagamento : typeof StatoPagamento=StatoPagamento;
  docUtente: Utente;
  subDocUtente: Subscription;

  idIscrizione: string; 
  utenteIscrizioneDoc: UtenteIscrizione = new  UtenteIscrizione(); //il documento iscrizione NON OBSERVABLE
  listSituazionePagamenti: IscrizioneIncasso[] = []; //Situazione dei pagamenti

  selectedArea: Area;
  corsoDoc: Corso = new Corso();
  locationDoc: Location = new Location();
  //Valorizzata in caso di Iscrizioni Giornaliere
  dataPianificataDoc: PianificazioneCorso;
  isLezioneSingola: boolean = false; //Iscrizione a lezione singola
  canDelete:boolean = false; //Possibilità di cancellare

  selectedLocation: Location = new Location(); //il documento location NON OBSERVABLE 

  /**Configurazione per pagamenti con Stripe */
  _configIncassoMobile: AreaPaymentSetting;
  _selectedPaymentMode: ModeIncassoConfig;
  _selectedPaymentConfig: AreaPaymentSetting;

  //Pagamento di una scadenza con Stripe
  paymentInProgress: boolean = false; //Pagamento avviato, blocca i doppi click
  showStripeForm: boolean = false; //Solo browser: form con i dati della carta
  confirmingStripe: boolean = false; //Solo browser: conferma in corso
  private currentPaymentResolve: (value: PaymentResult | null) => void;
  private currentPaymentReject: (reason?: any) => void;

  //Dopo il pagamento si attende che il webhook registri la scadenza come pagata
  private readonly PAYMENT_CHECK_INTERVAL_MS = 3000; //Ogni quanto controllo
  private readonly PAYMENT_CHECK_MAX_ATTEMPTS = 5; //Quanti controlli al massimo
  private paymentCheckTimer: any;
  private destroyed: boolean = false;

  isDesktop: boolean;

  //Enum Html
  modalitaIscrizione: typeof ModalitaIscrizione = ModalitaIscrizione;

  titleForm = '';

  //La Label contenente il programma po' essere ristretta o allargata
  expandProgramma: boolean = false;
  
  constructor(
              private activatedRoute: ActivatedRoute,
              private startService: StartService,
              private navCtr: NavController,
              private modalController: ModalController,
              private docstructrureService: DocstructureService,
              private platform: Platform
  ) { }


  /**
   * Indica se la Iscrizione è confermata
   * @returns 
   */
  iscrizioneConfermata(): boolean {
    let flagResult = false;

    if (this.utenteIscrizioneDoc) {
      flagResult = (this.utenteIscrizioneDoc.STATOISCRIZIONE == StatoIscrizione.confermata);
    }

    return flagResult;
  }

  ngOnInit() {

    this.isDesktop = this.startService.isDesktop;

    this.startService.showLoadingMessage('Caricamento dati')
                     .then(elLoading => {
                          //Mostro il loading
                          elLoading.present(); 
                          //Recupero dal URL 
                          this.activatedRoute.paramMap
                              .subscribe({
                                next: (paramsRouting)=> {

                                  if(paramsRouting.has('historyId')) {
                                    //se ho l'id dell'iscrizione, faccio la richiesta al server
                                    let idIscrizione = paramsRouting.get('historyId');

                                    if (idIscrizione && idIscrizione.length != 0) {
                                      //Memorizzo ID Iwcrizione
                                      this.idIscrizione = idIscrizione;
                                      //Ora richiedo l'iscrizione
                                      this.onRequestAllData()
                                          .then(()=> {
                                            elLoading.dismiss();
                                            this.loadedData = true;
                                            this.errorLoadingData = false;
                                          })
                                          .catch(error => {
                                            elLoading.dismiss();
                                            this.loadedData = true;
                                            this.errorLoadingData = true;
                                            this.messageErrorPage = this.startService.convertErrorDisplay(error);
                                          })
                                    }
                                    else {
                                      elLoading.dismiss();
                                      this.loadedData = true;
                                      this.errorLoadingData = true;
                                      this.messageErrorPage = 'Iscrizione non rilevata';                                      
                                    }
                                  }
                                  else {
                                    elLoading.dismiss();
                                    this.loadedData = true;
                                    this.errorLoadingData = true;
                                    this.messageErrorPage = 'Iscrizione non rilevata';
                                  }                                              
                                },
                                error: (err) => {
                                  elLoading.dismiss();
                                  this.loadedData = true;
                                  this.errorLoadingData = true;
                                  this.messageErrorPage = this.startService.convertErrorDisplay(err);
                                  'Iscrizione non rilevata';
                                }
                              })
                            });
    }
 

  ngOnDestroy() {
    this.destroyed = true;

    if (this.paymentCheckTimer) {
      clearTimeout(this.paymentCheckTimer);
    }
  }

  //#region RICHIESTE

  /**
   * Richiesta di tutti i dati
   * @returns 
   */
  onRequestAllData(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.loadedData = false;

      this.requestIscrizione(this.idIscrizione)
          .then(elItemIscrizione => {
            this.utenteIscrizioneDoc = elItemIscrizione;
            return this.requestCorso(this.utenteIscrizioneDoc);
          })
          .then(elItemCorso => {
            //Imposto il corso
            this.corsoDoc = elItemCorso;
            //Faccio la richiesta della data pianificata
            return this.requestDataPianificata(this.utenteIscrizioneDoc);
          })
          .then(elDataPianificata => {
            this.dataPianificataDoc = elDataPianificata;
            //Richiedo info sulla location
            return this.requestLocation(this.utenteIscrizioneDoc);
          })
          .then(elLocation => {
            this.locationDoc = elLocation;
            //Richiedo anche la situazione degli Incassi dell'Iscrizione
            return this.requestIncassiIscrizione(this.idIscrizione);
          })
          .then(dataPagamenti => {
            //Imposto i dati del pagamento
            this.listSituazionePagamenti = dataPagamenti;

            //Posso impostare il titolo
            switch (this.corsoDoc.MODALITAISCRIZIONE) {
              case ModalitaIscrizione.ModalitaAGiornata:
                this.titleForm = 'Lezione';
                break;
              case ModalitaIscrizione.ModalitaAPeriodo:
                this.titleForm = ValueList.decode(TipoCorso, this.corsoDoc.TIPO);
                break;
            
              default:
                this.titleForm = '';
                break;
            }            
            //Recupero l'area di riferimento (con le collection figlie, servono le modalità di pagamento)
            return this.startService.requestAreaById(this.locationDoc.IDAREAOPERATIVA, 2);
          })
          .then(elAreaDoc => {
            this.selectedArea = elAreaDoc;
            console.log(this.selectedArea);
            //Reimposto il canDelete
            this.setCanDelete();
            //Recupero le modalita di pagamento
            this.setListPayment();

            resolve();
          })
          .catch(error => {
            reject(error);
          });       
    })
  }

  /**
   * Recupera i metodi di pagamento sulla base dell'Area e popola 
   * le variabili con la configurazione
   */  
  setListPayment() {

    let listConfigIncassi: AreaPaymentSetting[];

    LogApp.consoleLog('Imposto Lista Metodi Pagamento');
    this._configIncassoMobile = null;
    this._selectedPaymentConfig = null;
    this._selectedPaymentMode = null;

    //Ho il documento dell'area
    if (this.selectedArea) {
      //Recupero le modalità
      listConfigIncassi = this.selectedArea.getPaymentFor(SettorePagamentiAttivita.settorePagamentoCorso);

      //Recupero la modalità per il pagamento in mobile (se presente)
      this._configIncassoMobile = AreaPaymentSetting.findConfigIncassoFor(listConfigIncassi, 
                                                                          ModeIncassoConfig.incassoCreditCard, 
                                                                          SettorePagamentiAttivita.settorePagamentoCorso);
      if (this._configIncassoMobile) {
        this._selectedPaymentConfig = this._configIncassoMobile;
        this._selectedPaymentMode = ModeIncassoConfig.incassoCreditCard;
      }

    }
  }

  /**
   * Effettua il refresh dei dati
   * @param ev 
   */
  onRefreshData(ev: any): void {
    this.loadedData = false;
    this.errorLoadingData = false;
    this.messageErrorPage = '';

    if (this.idIscrizione && this.idIscrizione.length != 0) {
        if (ev) {
          //Ora richiedo l'iscrizione
          this.onRequestAllData()
              .then(()=> {
                this.stopRefresher(ev);
                this.loadedData = true;
                this.errorLoadingData = false;
              })
              .catch(error => {
                this.stopRefresher(ev);
                this.loadedData = true;
                this.errorLoadingData = true;
                this.messageErrorPage = this.startService.convertErrorDisplay(error);
              })
        }
        else {

          this.startService.showLoadingMessage('Caricamento dati')
                           .then(elLoading => {
                              elLoading.present();
                              //Ora richiedo l'iscrizione
                              this.onRequestAllData()
                                  .then(()=> {
                                    elLoading.dismiss();
                                    this.loadedData = true;
                                    this.errorLoadingData = false;
                                  })
                                  .catch(error => {
                                    elLoading.dismiss();
                                    this.loadedData = true;
                                    this.errorLoadingData = true;
                                    this.messageErrorPage = this.startService.convertErrorDisplay(error);
                                  })
                           })
        }
    }
  }

  /**
   * Interrompo il refresher
   * @param ev 
   */
  stopRefresher(ev: any) {
    if (ev) {
      if (ev.target) {
        ev.target.complete();
      }
    }
  }

  /**
   * Richiede al server una Iscrizione per ID
   * @param myIdIscrizione idIscrizione richiesta
   * @returns Promise<UtenteIscrizione>
   */
  requestIscrizione(myIdIscrizione:string): Promise<UtenteIscrizione> {

    return new Promise<UtenteIscrizione>((resolve, reject) => {

      if (myIdIscrizione && myIdIscrizione.length != 0) {

        //E' un Documento UtenteIscrizione che richiedo
        this.startService.requestIscrizioneById(myIdIscrizione)
          .then(elItemIscrizione => {

            if (elItemIscrizione) {
              resolve(elItemIscrizione);
            }
            else {
              reject('Iscrizione non trovata')
            }
          })
          .catch(error => {
            LogApp.consoleLog(error);
            reject(error);
          });
      }
      else {
        LogApp.consoleLog('Identificativo Iscrizione non definito');
        reject('Identificativo Iscrizione non definito');
      }

    });

  }

  /**
   * Richiede un documento correlato del Corso e la collection CORSOPROGRAMMA
   * @param docIscrizione documento della Iscrizione Corso
   */
  requestCorso(docIscrizione: UtenteIscrizione): Promise<Corso> {
    return new Promise<Corso>((resolve, reject) => {
      //Corso rilevato
      let myDocCorso: Corso;

      //Richiesta di decodifica
      let params = new RequestParams();
      params.decode.active = false;
      params.decode.useCache = false;

      let filterCorso = new Corso(true);
      filterCorso.ID = docIscrizione.IDCORSO;


      //Effettuo la richiesta del corso
      this.docstructrureService.requestNew(filterCorso, params)
        .then(listItems => this.docstructrureService.findFirstDoc<Corso>(listItems))
        .then(elItem => {
          myDocCorso = elItem;
          //Scarico la collection CORSO PROGRAMMA
          return this.docstructrureService.loadCollection(myDocCorso, 'CORSOPROGRAMMA');
        })
        .then(() => {
          resolve(myDocCorso);
        })
        .catch(error => {
          reject(error);
          LogApp.consoleLog(error,'error');
        });      

    });

  }  
  /**
   * Richiede un documento correlato della Location ed imposto this.myLocation
   * @param docIscrizione documento della Iscrizione Corso
   */
  requestLocation(docIscrizione: UtenteIscrizione): Promise<Location> {
    return new Promise<Location>((resolve, reject) => {
      
      if (docIscrizione && docIscrizione.IDLOCATION && docIscrizione.IDLOCATION.length != 0) {
        //Richiedo la location
        this.startService.requestLocationByID(docIscrizione.IDLOCATION)
                         .then(elLocation => {
                            resolve(elLocation);
                         })
                         .catch(error => {
                            reject(error);
                         });
      }
      else {
        reject('Location non rilevata');
      }
    })
  }


  /**
   * Richiede una Lista di IscrizioneIncassi per avere la situazione dei pagamenti
   * @param myIdIscrizione 
   * @returns 
   */
  requestIncassiIscrizione(myIdIscrizione:string): Promise<IscrizioneIncasso[]> {
    return new Promise<IscrizioneIncasso[]>((resolve, reject) => {

      let filter: IscrizioneIncasso;

      
      if (myIdIscrizione && myIdIscrizione.length != 0) {
        
        filter = new IscrizioneIncasso(true);
        filter.IDISCRIZIONECORSO = myIdIscrizione;

        this.docstructrureService.requestNew(filter)
                                 .then(dataReceived => {

                                    resolve(<IscrizioneIncasso[]>dataReceived);

                                 })
                                 .catch(error => {
                                  reject(error);
                                 })
      }
      else {
        reject('Nessuna Iscrizione presente');
      }
      
    })
  }

  /**
   * Richiede la singola data pianificata
   * @param iscrizioneDoc Documento Iscrizione
   * @returns 
   */
  requestDataPianificata(iscrizioneDoc: UtenteIscrizione): Promise<PianificazioneCorso> {
    return new Promise<PianificazioneCorso>((resolve, reject) => {

        if (iscrizioneDoc) {


          if (iscrizioneDoc.MODALITAISCRIZIONE == ModalitaIscrizione.ModalitaAGiornata) {
            //Imposto che è una lezione singola
            this.isLezioneSingola = true;
            
            //Controllo la presenza del ID
            if (iscrizioneDoc.IDPIANIFICAZIONECORSO && iscrizioneDoc.IDPIANIFICAZIONECORSO.length != 0) {
                this.startService.requestPianificazioneCorso(iscrizioneDoc.IDPIANIFICAZIONECORSO)
                                 .then(elData => {
                                    resolve(elData);
                                 })
                                 .catch(error => {
                                  reject(error);
                                 })
            }
            else {
              //Sono in errore
              reject('Lezione non trovata');
            }
          }
          else {
            //Non devo scaricare la data pianificata
            resolve(null);
          }
        }
        else {
          reject('Icrizione non presente');
        }
    })
  }

  /**
   * Imposta la proprietà che consente la cancellazione
   */
  setCanDelete() {
    let flagDelete: boolean = false;

    if (this.isLezioneSingola) {
      
      LogApp.consoleLog('Data Singola');

      if (this.dataPianificataDoc) {
        LogApp.consoleLog(this.dataPianificataDoc);

        //Controlliamo che la lezione sia nel futuro
        if (MyDateTime.isAfter(this.dataPianificataDoc.DATAORAINIZIO, new Date())) {
          LogApp.consoleLog('Lezione nel futuro');

          if (this.selectedArea) {
            LogApp.consoleLog(this.selectedArea);

            switch (this.selectedArea.APPDELETEISCRIZIONIFLAG) {
              case  CancellazioniIscrizioniGiornaliere.sempre:
                  LogApp.consoleLog('Sempre abilitate')
                  flagDelete = true;
                break;

              case CancellazioniIscrizioniGiornaliere.limitata:
                  let numHours = 0;

                  if (this.selectedArea.APPDELETEISCRIZIONIORE != null && this.selectedArea.APPDELETEISCRIZIONIORE != undefined) {
                    numHours = this.selectedArea.APPDELETEISCRIZIONIORE;
                  }

                  LogApp.consoleLog(`Limitate entro ${numHours} ore`)
                  //Se aggiungo ad adesso le ore
                  let newDate = MyDateTime.calcola(new Date(), numHours, TypePeriod.hours);
                  LogApp.consoleLog(newDate);
                  //La data è ancora prima dell'inizio ?
                  if (MyDateTime.isBefore(newDate, this.dataPianificataDoc.DATAORAINIZIO)) {
                    flagDelete = true;
                  }
                break;
            
              default:
                break;
            }            
          }

        }

      }
    }

    this.canDelete = flagDelete;
  }
  //#endregion

  //#region METODI INTERFACCIA
  
  /**
   * Ritorna Icona dello Sport abbinata
   * @param idSport 
   * @returns 
   */
  getIconSport(idSport: string): string
  {
        return this.startService.getSportIcon(idSport);
  }

  /**
   * 
   * @returns Classe da applicare al programma
   */
  getClassLabelProgramma(): string {
    let myClass = '';
    if (this.expandProgramma) {
      myClass = 'expanded';  // Prima era 'ion-text-wrap'
    }
    return myClass;
  }
  //#endregion

  //#region METODI CLICK
  /**
 * Apertura del Calendario Corso in Modale
 */
  onClickCalendar() {
    /* Apro in modale il calendario */
    this.modalController
        .create({
          component: PeriodicCourseDetailCalendarPage,
          componentProps: {
            'myCorso': this.corsoDoc
          }
        })
        .then(formModal => {
          formModal.present();
        });

  }

  /**
   * Click per gli allegati
   */
  onClickAllegati(): void {
    this.modalController.create({
      component: AllegatilistPage,
      componentProps:{
        'myCorso' : this.corsoDoc
      }
    })
    .then(elModal => {
      elModal.present();
    })
  }  

  /**
   * Click sull'item contenente il Programma di corso
   */
  onClickExpandCorsoProgramma() {
    this.expandProgramma = !this.expandProgramma;
  }  

  /**
   * L'utente vuole cancellare l'iscrizione effettuata
   */
  onClickTrash() {
    let buttons: AlertButton[] = [{
      text: 'Prosegui',
      handler: ()=> {
        this.onExecDeletionIscrizione();
      }
    }, {
      text: 'Annulla',
      role: 'cancel'
    }];

    let myMessage = '';

    if (this.canDelete) {

      myMessage = `<p>` + `Stai eliminando l'iscrizione` + '</p>';
      myMessage += `<p>` + `effettuata per la lezione di ` + '</p>';
      myMessage += `<p>` + `<strong>${MyDateTime.formatDate(this.dataPianificataDoc.DATA, 'EEEE dd/MM/yyyy')} </strong>` + '</p>';
      myMessage += `<p>` + `alle ore ${MyDateTime.formatTime(this.dataPianificataDoc.DATAORAINIZIO)}` + '</p>';
      myMessage += `<p>` + '</p>';

    }

    //Chiedo cosa vuole fare
    this.startService.presentAlertMessage(myMessage, 'Cancella Iscrizione', buttons);
                     
  }

  /**
   * Contatto il server per la cancellazione di una iscrizione
   */
  onExecDeletionIscrizione() {
    let myMessage = '';

    myMessage = '<p>' + '<strong>Attendere</strong>' + '</p>';
    myMessage = '<p>' + 'Operazione in corso' + '</p>';

    this.startService.showLoadingMessage(myMessage)
                     .then(elLoading => {
                        elLoading.present();

                        //Contattiamo il server per la cancellazione
                        this.startService.onRequestDeleteIscrizioneGiornataFor(this.idIscrizione, this.corsoDoc.ID)
                                         .then(responseDoc => {
                                            elLoading.dismiss();
                                            if (responseDoc.result) {
                                              //Cancellazione effettuata
                                              //Posso tornare indietro
                                              this.onGoToBack();
                                            }
                                            else {
                                              this.startService.presentAlertMessage(responseDoc.message);
                                            }
                                         })
                                         //Non va in catch

                     })
  }


 /**
 * NUOVO METODO: Condividi iscrizione
 */
  async onClickShare() {
    // ... codice per condividere
  }

  //#region PAGAMENTO SCADENZE CON STRIPE

  /**
   * TRUE se l'utente può pagare online le scadenze.
   * L'account Stripe usato dal servizio è quello dell'Area attualmente selezionata nell'app,
   * quindi si abilita solo se l'iscrizione appartiene proprio a quell'Area
   */
  get canPayOnline(): boolean {
    return !this.isLezioneSingola &&
           !!this._selectedPaymentConfig &&
           this._selectedPaymentMode == ModeIncassoConfig.incassoCreditCard &&
           this._selectedPaymentConfig.TIPOPAYMENT == PaymentChannel.stripe &&
           !!this.selectedArea &&
           this.selectedArea.ID == this.startService.areaSelected?.ID;
  }

  /**
   * L'utente vuole pagare una scadenza
   * @param scadenza Scadenza da pagare
   */
  onClickPaga(scadenza: IscrizioneIncasso): void {

    if (this.paymentInProgress || !this.canPayOnline || !scadenza || !scadenza.requestPayment()) {
      return;
    }

    const utente = this.startService.activeUtenteDoc;

    //Valore in centesimi
    const amount = Math.round(scadenza.IMPORTO * 100);

    let description = 'Pagamento Iscrizione Corso ' + this.corsoDoc.DENOMINAZIONE;
    if (scadenza.DATASCADENZA) {
      description += ` (Scadenza ${MyDateTime.formatDate(scadenza.DATASCADENZA, 'dd/MM/yyyy')})`;
    }

    //guidPrimaryKey = Iscrizione, guidSecondary = Scadenza pagata
    const metadata: StripePaymentIntentMetadata = {
      email: utente?.EMAIL,
      customerName: utente?.NOMINATIVO,
      device: this.platform.platforms().join(','),
      productsType: 'corso',
      guidPrimaryKey: this.idIscrizione,
      guidSecondaryKey: scadenza.ID,
      customerGuid: utente?.ID,
      corsoGuid: this.utenteIscrizioneDoc.IDCORSO,
      campoGuid: ''
    };

    this.paymentInProgress = true;

    this.payWithStripe(amount, description, metadata)
        .then(paymentResult => {
          //Se null l'utente ha annullato
          if (paymentResult) {
            return this.onPaymentCompleted(scadenza.ID);
          }
        })
        .catch(error => {
          this.onPaymentFailed(error);
        })
        .finally(() => {
          this.paymentInProgress = false;
        });
  }

  /**
   * Avvia il pagamento tramite Stripe.
   * Su iOS non viene usato Apple Pay, ma la Payment Sheet,
   * cosi' l'utente sceglie tra carta e gli altri metodi abilitati.
   * Su browser viene mostrato il form con i dati della carta.
   * @returns Il risultato del pagamento, null se l'utente ha annullato
   */
  private payWithStripe(amount: number, description: string, metadata: StripePaymentIntentMetadata): Promise<PaymentResult | null> {
    return new Promise<PaymentResult | null>((resolve, reject) => {

      this.startService.presentPaymentOptions(amount, 'EUR', description, metadata, { useApplePay: false })
          .then(result => {

            if (!result.success) {
              reject(result.error);
              return;
            }

            if (!this.platform.is('capacitor')) {
              //Browser: è stato creato il PaymentIntent, mostro il form
              this.currentPaymentResolve = resolve;
              this.currentPaymentReject = reject;
              this.showStripeForm = true;

              //Aspetto che Angular renderizzi il DOM, poi monto Stripe
              setTimeout(() => {
                this.mountStripeElement();
              }, 100);
              return;
            }

            //Mobile: pagamento gia' completato
            resolve(result);
          })
          .catch(error => {
            reject(error);
          });
    });
  }

  /**
   * Monta l'elemento Stripe nel DOM (solo browser)
   */
  async mountStripeElement() {
    try {
      await this.startService.mountPaymentElement();
    } catch (error) {
      LogApp.consoleLog(error, 'error');
      this.showStripeForm = false;
      if (this.currentPaymentReject) {
        this.currentPaymentReject('Errore caricamento form pagamento');
      }
    }
  }

  /**
   * Conferma il pagamento (solo browser)
   */
  async confirmStripePayment() {
    if (this.confirmingStripe) {
      return;
    }
    this.confirmingStripe = true;

    try {
      const result = await this.startService.confirmBrowserPayment();
      this.showStripeForm = false;

      if (result.success) {
        if (this.currentPaymentResolve) {
          this.currentPaymentResolve(result);
        }
      }
      else if (this.currentPaymentReject) {
        this.currentPaymentReject(result.error);
      }
    } catch (error: any) {
      this.showStripeForm = false;
      if (this.currentPaymentReject) {
        this.currentPaymentReject(error.message || error);
      }
    } finally {
      this.confirmingStripe = false;
    }
  }

  /**
   * Annulla il pagamento (solo browser)
   */
  cancelStripePayment() {
    this.showStripeForm = false;
    if (this.currentPaymentResolve) {
      //Annullato dall'utente, non è un errore
      this.currentPaymentResolve(null);
    }
  }

  /**
   * Attende che la scadenza risulti pagata, controllando il server ogni 3 secondi.
   * Il pagamento viene registrato dal webhook di Stripe e potrebbe metterci qualche istante.
   * Termina appena la scadenza è pagata, dopo il numero massimo di controlli o
   * se la pagina viene chiusa
   * @param idScadenza Scadenza appena pagata
   */
  private waitScadenzaPagata(idScadenza: string): Promise<void> {
    return new Promise<void>(resolve => {
      let attempt = 0;

      const scheduleNext = () => {
        if (this.destroyed || attempt >= this.PAYMENT_CHECK_MAX_ATTEMPTS) {
          resolve();
        }
        else {
          this.paymentCheckTimer = setTimeout(check, this.PAYMENT_CHECK_INTERVAL_MS);
        }
      };

      const check = () => {
        attempt++;

        this.requestIncassiIscrizione(this.idIscrizione)
            .then(listIncassi => {
              const scadenza = listIncassi.find(elItem => elItem.ID == idScadenza);

              if (scadenza && !scadenza.requestPayment()) {
                //Il server ha registrato il pagamento
                resolve();
              }
              else {
                scheduleNext();
              }
            })
            .catch(error => {
              //Un errore momentaneo non ferma i controlli
              LogApp.consoleLog(error, 'error');
              scheduleNext();
            });
      };

      //Il primo controllo dopo l'intervallo
      scheduleNext();
    });
  }

  /**
   * Pagamento riuscito: attendo la registrazione sul server, ricarico i dati e avviso l'utente.
   * @param idScadenza Scadenza appena pagata
   */
  private onPaymentCompleted(idScadenza: string): Promise<void> {
    return this.startService.showLoadingMessage('Conferma del pagamento in corso')
              .then(elLoading => {
                elLoading.present();

                return this.waitScadenzaPagata(idScadenza)
                           .then(() => this.onRequestAllData())
                           .then(() => {
                              this.loadedData = true;
                              this.errorLoadingData = false;
                           })
                           .catch(error => {
                              this.loadedData = true;
                              this.errorLoadingData = true;
                              this.messageErrorPage = this.startService.convertErrorDisplay(error);
                           })
                           .finally(() => {
                              elLoading.dismiss();
                           });
              })
              .then(() => {

                if (!this.errorLoadingData) {
                  const scadenzaAggiornata = this.listSituazionePagamenti.find(elItem => elItem.ID == idScadenza);

                  if (scadenzaAggiornata && scadenzaAggiornata.requestPayment()) {
                    //Il server non ha ancora registrato il pagamento
                    this.startService.presentAlertMessage('<p>Pagamento ricevuto.</p><p>La scadenza verrà aggiornata a breve, refresh della pagina per aggiornare.</p>',
                                                          'Pagamento in elaborazione');
                  }
                  else {
                    this.startService.presentAlertMessage('Il pagamento è stato completato con successo', 'Pagamento completato');
                  }
                }
              });
  }

  /**
   * Pagamento non riuscito
   * @param error Errore ricevuto
   */
  private onPaymentFailed(error: any) {
    let message = 'Pagamento non completato';

    if (error instanceof Error) {
      message = error.message;
    }
    else if (typeof error == 'string') {
      message = error;
    }
    else if (error) {
      message = error.toString();
    }

    this.startService.presentAlertMessage(message, 'Pagamento fallito');
  }

  //#endregion

  //funzione che recupera i metodi di pagamento e li inserisce in un array
  setPaymentFromArea() {
    //TODO: Per impostare l'array dei pagamenti bisogna scaricare 
    //dal server l'Area perchè potrebbe essere diversa dall'attuale
  }  
  //#endregion

  //#region PULSANTE BACK
  /**
   * Ritorna un Array con il percorso di ritorno
   */
  get backPathArray():string[] {
    let retPath = this.startService.getUrlPageHistoryPersonal('list');

    return retPath;
  }
    
  //Ritorna il Path Array Back in formato stringa concatenata
  get backButtonHref(): string {
      let myHref = '';
      myHref = this.backPathArray.join('/').substring(1);
  
      return myHref;
  }
    
  /**
   * Torno alla pagina del home
   */
  onGoToBack() {
        this.navCtr.navigateBack(this.backPathArray);
  }
  
  //#endregion  


/**
 * Visualizza un messaggio
 * @param message Messaggio da mostrare
 */
  showMessage(message: string, type:'alert' | 'toast' = 'alert') {

    if (type == 'alert') {
      this.startService.presentAlertMessage(message);
    }
    else if (type == 'toast') {
      this.startService.presentToastMessage(message);
    }
  }
}
