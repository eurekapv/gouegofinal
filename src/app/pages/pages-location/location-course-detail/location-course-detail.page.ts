import { Component, OnInit, OnDestroy } from '@angular/core';
import { Corso } from 'src/app/models/corso.model';
import { Subscription } from 'rxjs';
import { StartService } from 'src/app/services/start.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController, LoadingController, ToastController } from '@ionic/angular';
import { Location } from 'src/app/models/location.model';
import { CourseDetailCalendarPage } from './course-detail-calendar/course-detail-calendar.page';
import { Area } from 'src/app/models/area.model';
import { UserLoginPage } from 'src/app/pages/pages-profile/authorization-account/user-login/user-login.page';
import { UserVerifyPage } from 'src/app/pages/pages-profile/authorization-account/user-verify/user-verify.page';
import { ParamsVerifica, Utente } from 'src/app/models/utente.model';

import { TempoCorso, TipoCorso } from 'src/app/models/valuelist.model';
import { AllegatilistPage } from 'src/app/pages/pages-history/allegatilist/allegatilist.page';
import { LogApp } from 'src/app/models/log.model';
import { LocationCourseSubscribePage } from '../location-course-subscribe/location-course-subscribe.page';

@Component({
  selector: 'app-location-course-detail',
  templateUrl: './location-course-detail.page.html',
  styleUrls: ['./location-course-detail.page.scss'],
})

export class LocationCourseDetailPage implements OnInit, OnDestroy {

  myCorso: Corso = new Corso();
  subMyCorso: Subscription;
  myLocation: Location = new Location(); 
  iconColor = 'primary';
  groupColor = 'tertiary';
  userLogged = false;
  subUserLogged: Subscription;

  docUser: Utente;
  subUser: Subscription;
  

  //Gestione Abilitazione Iscrizioni
  listenSelectedArea:Subscription;
  selectedArea: Area;
  areaEnableIscrizioni:boolean = false;  //Nell'area è possibile iscriversi ai corsi
  tempoCorso: typeof TempoCorso = TempoCorso;
  tipoCorso: typeof TipoCorso = TipoCorso;
  _labelNumeroGiorni = ''; //Etichetta con il numero dei giorni corso per settimana


  constructor(
    private startService: StartService,
    private actRouter: ActivatedRoute,
    private navController: NavController,
    private mdlController: ModalController,
    private loadingController : LoadingController,
    private toastController : ToastController
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
                                              .subscribe(elArea => {

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
                                            }, error => {
                                              this.areaEnableIscrizioni = false;
                                              LogApp.consoleLog(error, 'error');
                                              LogApp.consoleLog('Iscrizioni Disabilitate per errore','error');
                                            });
}

/**
 * Controllo cambio Utente
 */
onListenSelectedUser() {
    //Controllo se l'utente è loggato
    this.subUserLogged = this.startService.utenteLogged.subscribe(element => {
      this.userLogged = element;
    });  


    //Recupero il documento utente
    this.subUser = this.startService.utente.subscribe(elUser => {
      this.docUser = elUser;
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
        return this.startService.newRequestCorsoById(idCorso)
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

      })
      .catch(error => {
        //Si è verificato un errore
        //Spengo il loading
        myElLoading.dismiss();

        this.showMessage('Errore nel caricamento delle informazioni del corso');
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
  onClickIscrizione() {

    if (this.areaEnableIscrizioni && this.myCorso.flagIscrizioniAperte()) {
      
      //Non solo loggato, devo loggarmi
      if (!this.userLogged) {
  
        //Prima di aprire la pagina di login
        //impostare nel servizio Start forceIdArea = 
        this.startService.setIdAreaForcedForLogin();
        
        //Ora preparo e creo la pagina di Login
        this.mdlController.create({
          component:UserLoginPage
        })
          .then(modal=>{
            modal.present();
          });
  
      }
      else {
  
        let paramsVerifica : ParamsVerifica;
        if (this.docUser) {
          
          //Recupero i parametri di verifica
          paramsVerifica = this.docUser.getParamsVerifica(this.startService.actualStartConfig.gruppo)
    
          if (paramsVerifica){
            //se ci sono parametri, significa che devo chiamare la pagina di verifica
            this.mdlController.create({
              component: UserVerifyPage,
              componentProps:{
                params: paramsVerifica
              } 
            })
            .then(elModal => {
              elModal.present();
            })
          }
          else{
    
            //Posso procedere con la pagina di prenotazione
            this.mdlController.create({
              component: LocationCourseSubscribePage,
              componentProps: {
                params: this.myCorso
              }
            })
            .then(elModal => {
              elModal.present();
            })
    
          }
  
        }
  
        
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

      LogApp.consoleLog(`Sull'area le iscrizioni sono ${this.areaEnableIscrizioni ? 'abilitate':'disabilitate'}, e per le date di iscrizione corso l'iscrizione è ${this.myCorso.flagIscrizioniAperte() ? 'aperta':'chiusa'}`);

      if (this.areaEnableIscrizioni && this.myCorso.flagIscrizioniAperte()) {

        showButton = true;
      }
    }

    

    return showButton;
  }

  /**
   * Mostra un messaggio a video
   * @param messaggio Messaggio
   */
  showMessage(messaggio:string){
    this.toastController.create({
      message: messaggio,
      duration: 3000
    })
  }
}
