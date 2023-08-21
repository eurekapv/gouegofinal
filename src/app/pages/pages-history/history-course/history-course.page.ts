import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { RequestParams } from 'src/app/library/models/requestParams.model';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { AreaPaymentSetting } from 'src/app/models/areapaymentsetting.model';
import { Corso } from 'src/app/models/corso.model';
import { LogApp } from 'src/app/models/log.model';
import { Utente } from 'src/app/models/utente.model';
import { Location } from 'src/app/models/location.model';
import { UtenteIscrizione } from 'src/app/models/utenteiscrizione.model';
import { StatoIscrizione, StatoPagamento } from 'src/app/models/valuelist.model';
import { StartService } from 'src/app/services/start.service';
import { CourseDetailCalendarPage } from '../../pages-location/location-course-detail/course-detail-calendar/course-detail-calendar.page';
import { AllegatilistPage } from '../allegatilist/allegatilist.page';

@Component({
  selector: 'app-history-course',
  templateUrl: './history-course.page.html',
  styleUrls: ['./history-course.page.scss'],
})
export class HistoryCoursePage implements OnInit {

  StatoPagamento : typeof StatoPagamento=StatoPagamento;
  docUtente: Utente;
  subDocUtente: Subscription;

  myIscrizione: UtenteIscrizione = new  UtenteIscrizione(); //il documento iscrizione NON OBSERVABLE

  myCorso:Corso= new Corso();

  myLocation: Location = new Location();

  selectedLocation: Location = new Location(); //il documento location NON OBSERVABLE 

  arPayments: AreaPaymentSetting[] = [];

  isDesktop: boolean;

  //La Label contenente il programma po' essere ristretta o allargata
  expandProgramma: boolean = false;
  
  constructor(
              private activatedRoute: ActivatedRoute,
              private startService: StartService,
              private loadingController: LoadingController,
              private toastController: ToastController,
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

    if (this.myIscrizione) {
      flagResult = (this.myIscrizione.STATOISCRIZIONE == StatoIscrizione.confermata);
    }

    return flagResult;
  }

  ngOnInit() {

    this.isDesktop = this.startService.isDesktop;

    //creo lo spinner e lo presento
    this.loadingController.create({
        message: 'Caricamento',
        spinner: 'circular',
        backdropDismiss: true
        })
        .then(elLoading => {
            //Mostro il loading
            elLoading.present();
            
            //recupero l'id dell'iscrizione
            this.activatedRoute.paramMap.subscribe(paramsRouting => {
                    if(paramsRouting.has('historyId')) {
                      //se ho l'id dell'iscrizione, faccio la richiesta al server
                      let idIscrizione = paramsRouting.get('historyId');
                      
                      if (idIscrizione.length != 0) {
                          //Chiedo il documento della Iscrizione
                          this.requestIscrizione(idIscrizione)
                              .then(elItemIscrizione => {
                                this.myIscrizione = elItemIscrizione;
                                return this.requestCorso(this.myIscrizione);
                              })
                              .then(elItemCorso => {
                                this.myCorso = elItemCorso;
                                //Richiedo info sulla location
                                return this.requestLocation(this.myIscrizione);
                              })
                              .then(() => {
                                //Chiudo il loading
                                elLoading.dismiss();
                              })
                              .catch(error => {
                                //Chiudo il loading
                                elLoading.dismiss();
                                //Si sono verificati errori
                                this.showMessage(error);
                                this.onGoToBack();
                              });                              
                      }
                      else {

                        //Chiudo il loading
                        elLoading.dismiss();

                        //Non ho trovato ID
                        this.showMessage('Identificativo Iscrizione non corretto');
                        //Torno alla pagina di Lista
                        this.onGoToBack();
                      }
                    }
                    else {
                      //Non trovo idIscrizione

                      //Chiudo il loading
                      elLoading.dismiss();

                      //Non ho trovato ID
                      this.showMessage('Identificativo Iscrizione non corretto');
                      //Torno alla pagina di Lista
                      this.onGoToBack();
                    }
            })
    })
  }

  //#region RICHIESTE
  /**
   * Richiede al server una Iscrizione per ID
   * @param myIdIscrizione idIscrizione richiesta
   * @returns Promise<UtenteIscrizione>
   */
  requestIscrizione(myIdIscrizione:string): Promise<UtenteIscrizione> {

    return new Promise<UtenteIscrizione>((resolve, reject) => {

      if (myIdIscrizione && myIdIscrizione.length != 0) {

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
      params.decode.active = true;
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
      
      if (docIscrizione) {

        this.docstructrureService.getRelDoc(docIscrizione, ['IDLOCATION'],1)
          .then(docLocation => {
            this.myLocation = docLocation;
            resolve(this.myLocation);
          })
          .catch(error => {
            LogApp.consoleLog(error,'error');
            reject(error);
          });

      }
      else {
        reject('Iscrizione non definita');
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
          component: CourseDetailCalendarPage,
          componentProps: {
            'myCorso': this.myCorso
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
        'myCorso' : this.myCorso
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
