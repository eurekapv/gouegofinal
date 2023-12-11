import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { MyDateTime } from 'src/app/library/models/mydatetime.model';
import { CorsoGiornaliero } from 'src/app/models/corso/corso-giornaliero.model';
import { Area } from 'src/app/models/struttura/area.model';
import { UtenteTotaleMinuti } from 'src/app/models/utente/utente-totale-minuti.model';
import { Utente } from 'src/app/models/utente/utente.model';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { TargetSesso } from 'src/app/models/zsupport/valuelist.model';
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

      this.numMaxPartecipanti = this._corsoDoc.MAXPARTECIPANTI;
      this.numIscritti = this._corsoDoc.NUMISCRITTI;
      if (this.numMaxPartecipanti >= this.numIscritti) {
        this.numPostiResidui = this.numMaxPartecipanti - this.numIscritti;
      }
      else {
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
      this.flagFuture = MyDateTime.isAfter(new Date(), this._corsoDoc.DATAORAINIZIO);

      if (this._areaDoc) {

        //Intanto cerchiamo di capire con l'area se posso iscrivermi
        this.flagIscrizioneAttiva = this._areaDoc.canDailyIscrizione(this._corsoDoc.DATA);

        if (this.flagIscrizioneAttiva) {
          //Vediamo se sono aperte le iscrizioni
          this.flagIscrizioneAttiva = this._corsoDoc.getFlagOpenIscrizioni();
        }
        
      }
      console.log('decido')
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
  closeModal(): void {
    this.modalController.dismiss();
  }
  
  //#endregion 
  
  //#region GESTIONE UTENTE
  
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
  //#endregio

}
