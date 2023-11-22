import { Component, OnInit, OnDestroy } from '@angular/core';
import { Corso } from 'src/app/models/corso/corso.model';
import { Subscription } from 'rxjs';
import { StartService } from 'src/app/services/start.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController, LoadingController } from '@ionic/angular';
import { Location } from 'src/app/models/struttura/location.model';
import { CourseDetailCalendarPage } from './course-detail-calendar/course-detail-calendar.page';
import { Area } from 'src/app/models/struttura/area.model';
import {Utente } from 'src/app/models/utente/utente.model';

import { Tempistica, TipoCorso } from 'src/app/models/zsupport/valuelist.model';
import { AllegatilistPage } from 'src/app/pages/pages-history/allegatilist/allegatilist.page';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { LocationCourseSubscribePage } from '../location-course-subscribe/location-course-subscribe.page';
import { IscrizioneCorso } from 'src/app/models/corso/iscrizione-corso.model';

@Component({
  selector: 'app-location-course-detail',
  templateUrl: './location-course-detail.page.html',
  styleUrls: ['./location-course-detail.page.scss'],
})

export class LocationCourseDetailPage implements OnInit, OnDestroy {

  myCorso: Corso = new Corso(true);
  subMyCorso: Subscription;
  myLocation: Location = new Location(); 
  iconColor = 'primary';
  groupColor = 'tertiary';
  userLogged = false;
  subUserLogged: Subscription;
  activeIscrizione: IscrizioneCorso; //Se presente indica che l'utente è già Iscritto

  docUser: Utente;
  subUser: Subscription;
  

  //Gestione Abilitazione Iscrizioni
  listenSelectedArea:Subscription;
  selectedArea: Area;
  areaEnableIscrizioni:boolean = false;  //Nell'area è possibile iscriversi ai corsi
  tempoCorso: typeof Tempistica = Tempistica;
  tipoCorso: typeof TipoCorso = TipoCorso;
  _labelNumeroGiorni = ''; //Etichetta con il numero dei giorni corso per settimana


  constructor(
    private startService: StartService,
    private actRouter: ActivatedRoute,
    private navController: NavController,
    private mdlController: ModalController,
    private loadingController : LoadingController,
  ) {
    
    //Ascolto cambiamenti dell'Area per l'abilitazione delle iscrizioni
    this.onListenSelectedArea();

    //Ascolto cambiamento Utente
    this.onListenSelectedUser();

  }


  
/**
 * In ascolto dell'area selezionata, per capire se solo abilitate le iscrizioni
 */
  onListenSelectedArea() {

   this.listenSelectedArea = this.startService.areaSelected
                                              .subscribe({
                                                    next: (elArea) => {
    
                                                    this.selectedArea = elArea;
                                                    LogApp.consoleLog('Area selezionata ' + elArea.DENOMINAZIONE,"log");
    
                                                    //Controllo se nell'area sono abilitate le iscrizioni
                                                    if (this.selectedArea.APPISCRIZIONI == true) {
                                                      this.areaEnableIscrizioni = true;
                                                      LogApp.consoleLog('Iscrizioni Abilitate', "log");
                                                    }
                                                    else {
                                                      this.areaEnableIscrizioni = false;
                                                      LogApp.consoleLog('Iscrizioni Disabilitate','log');
                                                    }
                                                    },
                                                    error: (error) => {
                                                      this.areaEnableIscrizioni = false;
                                                      LogApp.consoleLog(error, 'error');
                                                      LogApp.consoleLog('Iscrizioni Disabilitate per errore','error');
                                                    }
                                                  });
}

/**
 * Controllo cambio Utente
 */
onListenSelectedUser() {
    //Controllo se l'utente è loggato
    this.subUserLogged = this.startService.flagUtenteIsLoggato$.subscribe(element => {
      this.userLogged = element;
    });  


    //Recupero il documento utente
    this.subUser = this.startService.activeUtenteDoc$.subscribe(elUser => {
      this.docUser = elUser;
      //Recupero una eventuale Iscrizione Corso
      this.retrieveIscrizioneCorso();
    })
}
              
ngOnInit() {


  let idCorso = '';
  let myElLoading: HTMLIonLoadingElement;


  this.actRouter.paramMap.subscribe(param => {
    //Ricerco il parametro courseId
    if (param.has('courseId')) {
      
      //ID Corso
      idCorso = param.get('courseId');

      
      //Creazione del Loadin di Caricamento
      this.loadingController.create({
        spinner: "circular",
        message: 'Caricamento',
        backdropDismiss: true
      })
      .then(elLoading => {
        //Mostro il loading
        myElLoading = elLoading;
        elLoading.present();
        
        //Effettuo la richiesta del corso
        return this.startService.requestCorsoById(idCorso)
      })
      .then((itemCorso: Corso) => {
        //se ho trovato un corso, lo memorizzo
        this.myCorso = itemCorso;
        //Imposto l'etichetta per il numero di giornate
        this._labelNumeroGiorni = this.myCorso.getLabelNumeroGiornateSettimanali();

        //ora richiedo la location
        return this.requestLocationById(this.myCorso.IDLOCATION);
      })
      .then((itemLocation: Location)=> {
        //Spengo il loading
        myElLoading.dismiss();
        //Ho tutti i dati necessari
        this.myLocation = itemLocation;

        //Recupero una eventuale Iscrizione Corso
        this.retrieveIscrizioneCorso();

      })
      .catch(error => {
        //Si è verificato un errore
        //Spengo il loading
        myElLoading.dismiss();

        this.startService.presentAlertMessage('Errore nel caricamento delle informazioni del corso');
        LogApp.consoleLog(error,'error');
      })

    }
    else {
      //Non c'e' il parametro
      this.onGoToBack();
    }
  })           
}

ngOnDestroy() {
  if (this.subMyCorso) {
    this.subMyCorso.unsubscribe();
  }

  if (this.subUserLogged) {
    this.subUserLogged.unsubscribe();
  }

  if (this.listenSelectedArea) {
    this.listenSelectedArea.unsubscribe();
  }
}


  //#region PULSANTE BACK
  /**
   * Ritorna un Array con il percorso di ritorno
   */
  get backPathArray():string[] {
    let retPath = ['/','appstart-home','tab-home'];

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
        this.navController.navigateBack(this.backPathArray);
  }
  
  //#endregion  

  /**
   * Effettuo la richiesta delle informazioni di una location
   * @param idLocation 
   */
  requestLocationById(idLocation: string): Promise<Location>{

    return new Promise<Location>((resolve, reject) => {
      if (idLocation && idLocation.length != 0) {

        //Effettuo la chiamata
        this.startService.requestLocationByID(idLocation)
                         .then(elLocation => {
                            resolve(elLocation);
                         })
                         .catch(error => {
                          reject(error);
                         })
      }
      else {
        reject('Location non impostata');
      }
    })

  }


  /**
   * Tenta il caricamento di una iscrizione corso se presente
   */
  retrieveIscrizioneCorso(): void {
    //Recupero anche una eventuale Iscrizione a questo corso
    let filterDoc:IscrizioneCorso;
    
    //Se ho il corso e l'utente provo a chiedere
    if (this.myCorso && this.docUser) {

      filterDoc = new IscrizioneCorso(true);

      filterDoc.IDCORSO = this.myCorso.ID;
      filterDoc.IDUTENTE = this.docUser.ID;

      this.startService.requestIscrizioneCorsoByFilter(filterDoc)
                       .then(listReceived => {
                        if (listReceived && listReceived.length != 0) {
                          this.activeIscrizione = listReceived[0];
                        }
                        else {
                          this.activeIscrizione = null;
                        }
                       })
                       .catch(error => {
                        this.activeIscrizione = null;
                        LogApp.consoleLog(error,'error');
                       })

    }
  }

  /* ****** CALENDAR ******** */
  onClickCardCalendar() {
    /* Apro in modale il calendario */
    this.mdlController
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
   * Click sul pulsante Allegati
   */
  onClickAllegati(){
    this.mdlController.create({
      component: AllegatilistPage,
      componentProps:{
        'myCorso' : this.myCorso
      }
    })
    .then(elModal => {
      elModal.present()
    })
  }


  /**
  * Evento Click sul pulsante di Iscrizione
  */
  onClickIscrivitiAdesso() {
    let myIdCorso = '';

    if (this.areaEnableIscrizioni && this.myCorso.flagIscrizioniAperte()) {
      
      //Non solo loggato, devo loggarmi
      if (!this.userLogged) {
  
        //Prima di aprire la pagina di login
        //impostare nel servizio Start forceIdArea = 
        this.startService.setIdAreaForcedForLogin();

        this.startService.openFormLogin();
  
      }
      else {
        //Questo è il corso di interesse
        myIdCorso = this.myCorso.ID;

        if (myIdCorso && myIdCorso.length != 0) {

          //Controllo se avessi bisogno altri dati utente non impostati
          this.startService.onVerificationUserData()
                           .then(needVerification => {
                            if (needVerification == false) {
                                  //Posso procedere con la pagina di prenotazione
                                  this.mdlController.create({
                                    component: LocationCourseSubscribePage,
                                    cssClass: 'modal-xl-class',
                                    componentProps: {
                                      idCorso: myIdCorso
                                    }
                                  })
                                  .then(elModal => {
                                    elModal.present();
                                  })
                            }
                           })

        }
        else {
          this.startService.presentAlertMessage('Si è verificato un problema, torna alla lista e riprova');
        }

                                               
        
      }
      
    }

  }

  /**
   * Vuole vedere l'iscrizione presente
   */
  onClickVisualizzaIscrizione() {
    let arPath = [];

    //Devo chiedere il percorso a History
    if (this.activeIscrizione) {
        arPath = this.startService.getUrlPageHistoryPersonal("course",this.activeIscrizione.ID);

        if (arPath && arPath.length) {
          this.navController.navigateForward(arPath);
        }
    }
  }

  /**
   * Chiama il servizio passandogli l'id dell'oggetto corso, 
   * e restituisce la stringa dell'icona
   * @param corso l'oggetto corso per cui si richiede l'icona
   */
  getIcon(corso:Corso)
  {
    return this.startService.getSportIcon(corso.IDSPORT);
  }

  /**
   * Indica se mostrare o no il Bollino Prova
   * @returns TRUE/FALSE
   */
   showFabProva():boolean {
    let show:boolean = false; 
    if (this.myCorso && this.myCorso.TIPO == TipoCorso.prova) {
      show = true;
    }

    return show;

  }  


 /**
 * Torna l'eventuale classe speciale da applicare
 */
  getClassHeader(): string {
    let myClass = 'title';
    if (this.myCorso) {

      if (this.areaEnableIscrizioni && this.myCorso.flagIscrizioniAperte()) {
        myClass = 'special';
      }
    }
    
    return myClass;
  }

  /**
   * Colore dipendente dall'iscrizione
   * @returns Colore da applicare all'item che forma la testata
   */
  getColorHeader(): string {
    let myClass = 'light';
    if (this.myCorso) {

      if (this.areaEnableIscrizioni && this.myCorso.flagIscrizioniAperte()) {
        myClass = 'success';
      }
    }
    
    return myClass;
  }  

  /**
   * Indica se mostrare il pulsante delle Iscrizioni
   */
  showIscrizioniButton():boolean {

    let showButton = false;

    if (this.myCorso) {

      //Iscrizioni Abilitate sull'Area, Aperte per il corso e non ancora Iscritto
      if (this.areaEnableIscrizioni && 
          this.myCorso.flagIscrizioniAperte() && 
          !this.activeIscrizione) {

        showButton = true;
      }
    }

    

    return showButton;
  }

}
