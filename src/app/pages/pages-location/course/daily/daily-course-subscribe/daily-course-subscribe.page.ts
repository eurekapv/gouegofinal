import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AlertButton, ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { MyDateTime } from 'src/app/library/models/mydatetime.model';
import { CorsoGiornaliero } from 'src/app/models/corso/corso-giornaliero.model';
import { IscrizioneCorso } from 'src/app/models/corso/iscrizione-corso.model';
import { Area } from 'src/app/models/struttura/area.model';
import { UtenteTotaleMinuti } from 'src/app/models/utente/utente-totale-minuti.model';
import { Utente } from 'src/app/models/utente/utente.model';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { ModalitaIscrizione, StatoIscrizione, TargetSesso } from 'src/app/models/zsupport/valuelist.model';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-daily-course-subscribe',
  templateUrl: './daily-course-subscribe.page.html',
  styleUrls: ['./daily-course-subscribe.page.scss'],
})
export class DailyCourseSubscribePage implements OnInit, OnDestroy {

  @Input() set corsoDoc(value: CorsoGiornaliero) {
      this.setCorsoDoc(value);
  }

  _areaDoc: Area;
  subArea: Subscription;
  
  idCorso: string;
  _corsoDoc: CorsoGiornaliero = new CorsoGiornaliero();
  _containLivello=false;
  iscrizioneDoc: IscrizioneCorso;
  existIscrizione: boolean = false; //Specifica che l'utente è già iscritto

  //Dati richiesti e caricati
  loadedData: boolean = false;
  errorLoadingData: boolean = false;
  messageErrorPage: string = "";
  iconHeader: string = 'calendar';
  iconColorHeader: string = 'success';
  iconColorItem: string = 'success';
  labelSesso: string = 'entrambi i sessi';
  labelLivello: string = 'qualsiasi livello';

  numMaxPartecipanti: number = 10;
  numIscritti: number = 0;
  numPostiResidui: number = 10;

  //Identificativo Utente Loggato
  flagUserLogged: boolean = false;
  subFlagUserLogged: Subscription;
  flagIscrizioneAttiva: boolean = false;
  flagFuture:  boolean = false;

  //Utente Loggato
  utenteDoc: Utente;
  subUtenteDoc: Subscription;
 
  //Valori Pacchetti Utente
  utenteTotaleMinutiDoc: UtenteTotaleMinuti = new UtenteTotaleMinuti();
  minutiValue: number = 0;

  //Usare enum in Html
  targetSesso: typeof TargetSesso = TargetSesso;


  constructor(private startService: StartService,
              private modalController: ModalController,
              private navController: NavController
              ) { }

  ngOnInit() {
      this.onListenArea();
      this.onListenUtente();
  }

  ngOnDestroy(): void {
    if (this.subUtenteDoc) {
      this.subUtenteDoc.unsubscribe();
    }

    if (this.subFlagUserLogged) {
      this.subFlagUserLogged.unsubscribe();
    }

    if (this.subArea) {
      this.subArea.unsubscribe();
    }    
  }

/**
 * Imposta il documento del corso
 * @param value 
 */
  setCorsoDoc(value: CorsoGiornaliero) {
    if (value) {
      this._corsoDoc = value;
      this.loadedData = true;

      this.idCorso = this._corsoDoc.ID;
      this.prepareAdditionalInfoCorso();      
    }
  }

  /**
   * Prepara i dati addizionali del corso
   */
  prepareAdditionalInfoCorso() {

    if (this._corsoDoc) {
      this.numMaxPartecipanti = (this._corsoDoc.MAXPARTECIPANTI ? this._corsoDoc.MAXPARTECIPANTI : 0);
      this.numIscritti = (this._corsoDoc.NUMISCRITTI ? this._corsoDoc.NUMISCRITTI : 0);
      this.numPostiResidui = this.numMaxPartecipanti - this.numIscritti;

      if (this.numPostiResidui < 0) {
        this.numPostiResidui = 0;
      }
      
      this._containLivello = (this._corsoDoc.IDLIVELLOENTRATA && 
                              this._corsoDoc.IDLIVELLOENTRATA.length != 0);

      switch (this._corsoDoc.TARGETSESSO) {
        case TargetSesso.maschileFemminile:
            this.labelSesso = 'entrambi i sessi'
          break;
        case TargetSesso.maschile:
            this.labelSesso = 'sesso maschile';
          break;
        case TargetSesso.maschile:
            this.labelSesso = 'sesso femminile';
          break;          
      
        default:
          break;
      }

      if (this._corsoDoc.IDLIVELLOENTRATA && this._corsoDoc.IDLIVELLOENTRATA.length != 0) {
        this.labelLivello = `livello ${this._corsoDoc.DENOMINAZIONELIVELLO}`;
      }

      //Controlla se è nel futuro
      this.flagFuture = MyDateTime.isAfter(this._corsoDoc.DATA, new Date());
      console.log(this.flagFuture ? 'Corso nel futuro' : 'Corso nel passato');
      console.log(this._corsoDoc);

      if (this._areaDoc) {

        //Intanto cerchiamo di capire con l'area se posso iscrivermi
        this.flagIscrizioneAttiva = this._areaDoc.canDailyIscrizione(this._corsoDoc.DATA);

        if (this.flagIscrizioneAttiva) {
          //Vediamo se sono aperte le iscrizioni
          this.flagIscrizioneAttiva = this._corsoDoc.getFlagOpenIscrizioni();
        }

        //Vediamo se ci sono posti
        if (this.flagIscrizioneAttiva) {
          this.flagIscrizioneAttiva = this._corsoDoc.getHasPostiLiberi();
        }
        
      }

      //Faccio una chiamata per vedere se l'utente è iscritto
      this.onSetExistIscrizione();
    }
  }

  /**
   * Controlla se è presente l'iscrizione
   */
  onSetExistIscrizione(): void {

    if (this.utenteDoc && this._corsoDoc) {
      this.iscrizioneDoc = new IscrizioneCorso(true);
      this.iscrizioneDoc.IDUTENTE = this.utenteDoc.ID;
      this.iscrizioneDoc.IDPIANIFICAZIONECORSO = this._corsoDoc.ID;

      this.startService.requestIscrizioneCorsoByFilter(this.iscrizioneDoc)
                       .then(resultCollection => {
                          this.existIscrizione = (resultCollection.length != 0);
                       })
                       .catch(error => {
                        this.existIscrizione = false;
                       })
    }
    else {
      this.existIscrizione = false;
    }
  }

  /**
   * Effettuo un recupero dei dati
   * @param event 
   */
  onRefreshData(event?:any) {

    if (event) {
      event.target.complete();
    }
    //Recupero i dati
    this.loadAllData();
  }  

  /**
   * Caricamento dei dati Corso
   * @returns 
   */
  loadAllData(objLoading?: HTMLIonLoadingElement): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.idCorso && this.idCorso.length != 0) {
        if (objLoading) {
          //Faccio chiamata senza loader
          this.queryData()
              .then(()=> {
                  //Dati recuperati
                  resolve();
              })
              .catch(error => {            
                  //Errore ricezione
                  reject(error);
              })              

        }
        else {
          //Preparo il Loading
          //Loading già presente, non lo ricreo
          this.startService.showLoadingMessage('Recupero corso')
                           .then(elLoading => {
                              objLoading = elLoading;
                              elLoading.present();
                              //Effettuo la vera chiamata
                              return this.queryData();
                            })
                            .then(()=> {

                              objLoading.dismiss();
                              //Dati recuperati
                              resolve();
                            })
                            .catch(error => {

                              objLoading.dismiss();
                              reject(error);
                            })          
        }
      }
      else {
        reject('Corso non definito');
      }      
    })
  }

  /**
   * Eseguo la query di recupero dati corso
   * @returns 
   */
  queryData(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        this.loadedData = false;
        this.errorLoadingData = false;
        this.messageErrorPage = "";

        this.startService.requestCorsoGiornalieroById(this.idCorso)
                         .then(itemDoc => {
                            //Imposto il corso rtrovato
                            this._corsoDoc = itemDoc;
                            this.loadedData = true;
                            resolve();
                         })
                         .catch(error => {

                            this.loadedData = true;
                            this.errorLoadingData = true;
                            this.messageErrorPage = this.startService.convertErrorDisplay(error);
                            reject(error);
                         })
    })
  }


  

 //#region PULSANTE BACK
 /**
  * Chiusura della modale
  */
  closeModal(whereToGo?: string[]): void {
    this.modalController.dismiss()
                        .then(result => {
                          if (result) {
                            if (whereToGo && whereToGo.length != 0) {
                                this.navController.navigateRoot(whereToGo);
                            }
                          } 
                        })
  }

  /**
   * Devo portare l'utente alla modale di Login
   */
  onGotoLogin() {
    this.modalController.dismiss()
        .then(result => {
              if (result) {
                  this.startService.openFormLogin();
              } 
    })
  }

  /**
   * Chiude la videata e va allo shop
   */
  onGotoShop() {
    let urlPage = this.startService.getUrlPageBasic('shop');
    this.closeModal(urlPage);
  }
  
  //#endregion 
  
  //#region GESTIONE DOCUMENTI CORRELATI
  
  /**
   * Metto in ascolto delle modifiche dell'utente
   */
  onListenUtente(): void {

    //Sottoscrivo all'ascolto dell'Account
    this.subUtenteDoc = this.startService.activeUtenteDoc$
                        .subscribe({
                          next: (element) => {
                              //Recupero utente
                              this.utenteDoc = element;
                              
                              //Chiedo il totale dei minuti acquistati
                              this.requestUtenteTotaleMinuti();

                              //Controllo se esiste una iscrizione
                              this.onSetExistIscrizione();
                          },
                          error: (err) => {
                            this.utenteDoc = null;
                            //Chiedo il totale dei minuti acquistati
                            this.requestUtenteTotaleMinuti();
                          }
                        });    

    //Sottoscrivo all'ascolto di un utente loggato
    this.subFlagUserLogged = this.startService.flagUtenteIsLoggato$
          .subscribe({
            next: (element) => {
              //Recupero l'utente
              this.flagUserLogged = element;    
            },
            error: (err)=> {
              this.flagUserLogged = false;
            }
          });

  }

  /**
   * In attesa dell'area di riferimento
   */
  onListenArea(): void {
    this.subArea = this.startService.areaSelected$.subscribe({
      next: (dataReceived) => {
        this._areaDoc = dataReceived;
        this.prepareAdditionalInfoCorso();
      },
      error: (err)=> {
        LogApp.consoleLog(err, "error");
      }
    })

  }


  /**
   * Richiedo il totale minuti acquistati residui
   */
  requestUtenteTotaleMinuti() {

    if (this.utenteDoc && this._areaDoc) {
      this.startService.requestUtenteTotaleMinuti(this.utenteDoc.ID, this._areaDoc.ID)
                       .then(elDoc => {
                          if (elDoc) {
                            this.utenteTotaleMinutiDoc = elDoc;
                            this.minutiValue = this.utenteTotaleMinutiDoc.TOTALEMINUTI;
                          }
                          else {
                            this.clearUtenteTotaleMinutiDoc();
                          }
                       })
                       .catch(error => {
                        LogApp.consoleLog(error);
                        this.clearUtenteTotaleMinutiDoc();
                       })
    }
    else {
      this.clearUtenteTotaleMinutiDoc();
    }
  }  

  /**
   * Svuota creando un nuovo documento
   */
  clearUtenteTotaleMinutiDoc() {
    this.utenteTotaleMinutiDoc = new UtenteTotaleMinuti();
    this.minutiValue = 0;
  }  
  //#endregion

  //#region ISCRIVITI
  
  /**
   * Risposta al Click del Button Iscriviti
   */
  onClickIscriviti() {
    let myMessage = '';
    let listButtons: AlertButton[];

    //Serve il doc di corso, l'utente
    if (this._corsoDoc && this.utenteDoc && this.flagIscrizioneAttiva) {
      myMessage = `<p>Stai effettuando l'iscrizione alla lezione di</p>`;
      myMessage += `<p class="ion-text-bold">${this._corsoDoc.DENOMINAZIONE}</p>`;
      myMessage += `<p>programmata per</p>`
      myMessage += `<p class="ion-text-bold">${MyDateTime.formatDate(this._corsoDoc.DATAORAINIZIO, 'EEEE dd/MM/yyyy')}</p>`;
      myMessage += `<p>alle ore ${MyDateTime.formatDate(this._corsoDoc.DATAORAINIZIO, 'H:mm')}</p>`;
      myMessage += `<p>Vuoi Iscriverti ?</p>`;
      listButtons = [{
        text: 'Si, procedi',
        handler: ()=> {
          this.execIscrizione();
        }
        }, {
          text: 'No, aspetta',
          role: 'cancel'
        }];

      this.startService.presentAlertMessage(myMessage, 'Iscriviti', listButtons);
    }
  }

  /**
   * Esecuzione finale della Iscrizione
   */
  execIscrizione() {
    this.iscrizioneDoc = new IscrizioneCorso();
    
    this.iscrizioneDoc.IDAREAOPERATIVA = this._areaDoc.ID;
    this.iscrizioneDoc.IDLOCATION = this._corsoDoc.IDLOCATION;
    
    this.iscrizioneDoc.IDCORSO = this._corsoDoc.IDCORSO;
    this.iscrizioneDoc.IDPIANIFICAZIONECORSO = this._corsoDoc.ID;
    this.iscrizioneDoc.MODALITAISCRIZIONE = ModalitaIscrizione.ModalitaAGiornata;
    this.iscrizioneDoc.IDUTENTE = this.utenteDoc.ID;
    this.iscrizioneDoc.DATAISCRIZIONE = new Date();
    this.iscrizioneDoc.ANNOISCRIZIONE = (new Date()).getFullYear();
    this.iscrizioneDoc.NOMINATIVO = this.utenteDoc.NOMINATIVO;
    this.iscrizioneDoc.EMAIL = this.utenteDoc.EMAIL;
    this.iscrizioneDoc.MOBILENUMBER = this.utenteDoc.MOBILENUMBER;
    this.iscrizioneDoc.IDSPORT = this._corsoDoc.IDSPORT;

    this.iscrizioneDoc.STATOISCRIZIONE = StatoIscrizione.confermata;

    this.startService.showLoadingMessage('Contatto il server')
                     .then(elLoading => {
                        elLoading.present();

                        //Tento di eseguire l'iscrizione al corso
                        this.startService.requestSaveIscrizioneCorso(this.iscrizioneDoc)
                                         .then(dataResponse => {
                                            elLoading.dismiss();
                                            if (dataResponse && dataResponse.result) {
                                              //In Code è presente ID della iscrizione effettuata
                                              //Recupero il path dove devo andare
                                              this.onAfterSuccessExecIscrizione(dataResponse.code);
                                            }
                                            else {
                                              //Fallita iscrizione
                                              this.startService.presentAlertMessage(dataResponse.message);
                                            }
                                         })
                                         .catch(error => {
                                            //Sono rilevati errori
                                            elLoading.dismiss();
                                            this.startService.presentAlertMessage(error);
                                         })
                     })


  }

  /**
   * Al termine del salvataggio a buon fine della iscrizione
   * @param idIscrizione 
   */
  onAfterSuccessExecIscrizione(idIscrizione: string) {
    let myPath: string[] = [];
    if (idIscrizione && idIscrizione.length != 0) {
      myPath = this.startService.getUrlPageHistoryPersonal('course', idIscrizione);
      //Chiudo la modale e mi sposto
      this.closeModal(myPath);
    }
  }
  //#endregion

  onClickDebug() {
    console.log(this.flagIscrizioneAttiva)
    console.log(this.flagUserLogged)
    console.log(this.minutiValue)


  }
}
