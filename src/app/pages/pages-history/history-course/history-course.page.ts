import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { RequestParams } from 'src/app/library/models/requestParams.model';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { AreaPaymentSetting } from 'src/app/models/struttura/areapaymentsetting.model';
import { Corso } from 'src/app/models/corso/corso.model';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { Utente } from 'src/app/models/utente/utente.model';
import { Location } from 'src/app/models/struttura/location.model';
import { UtenteIscrizione } from 'src/app/models/utente/utenteiscrizione.model';
import { ModalitaIscrizione, StatoIscrizione, StatoPagamento, TipoCorso, ValueList } from 'src/app/models/zsupport/valuelist.model';
import { StartService } from 'src/app/services/start.service';
import { PeriodicCourseDetailCalendarPage } from '../../pages-location/course/periodic/periodic-course-detail-calendar/periodic-course-detail-calendar.page';
import { AllegatilistPage } from '../allegatilist/allegatilist.page';
import { IscrizioneIncasso } from 'src/app/models/corso/iscrizione-incasso.model';
import { PianificazioneCorso } from 'src/app/models/corso/pianificazionecorso.model';


@Component({
  selector: 'app-history-course',
  templateUrl: './history-course.page.html',
  styleUrls: ['./history-course.page.scss'],
})
export class HistoryCoursePage implements OnInit {

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

  corsoDoc: Corso = new Corso();
  locationDoc: Location = new Location();
  //Valorizzata in caso di Iscrizioni Giornaliere
  dataPianificataDoc: PianificazioneCorso;
  isLezioneSingola: boolean = false; //Iscrizione a lezione singola

  selectedLocation: Location = new Location(); //il documento location NON OBSERVABLE 

  arPayments: AreaPaymentSetting[] = [];
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
              private docstructrureService: DocstructureService
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
            resolve();
          })
          .catch(error => {
            reject(error);
          });       
    })
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
          console.log(iscrizioneDoc)

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
  //#endregion

  //#region METODI INTERFACCIA
  /**
   * chiama il servizio passandogli l'id dell'oggetto corso, e restituisce la stringa dell'icona
   * @param corso l'oggetto corso per cui si richiede l'icona
   */
  getIcon(corso:Corso): string
  {
    let myIdSport = '';
    if (corso) {
      myIdSport = corso.IDSPORT;
    }
    return this.startService.getSportIcon(myIdSport);
  }

  getClassLabelProgramma(): string {
    let myClass = '';
    if (this.expandProgramma) {
      myClass = 'ion-text-wrap';
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

  //TODO: pagamento non abilitato
  onClickPaga():void
  {

  }

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
