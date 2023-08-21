import { Component, OnInit, OnDestroy } from '@angular/core';
import { Corso } from 'src/app/models/corso.model';
import { Subscription } from 'rxjs';
import { StartService } from 'src/app/services/start.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController, LoadingController, ToastController } from '@ionic/angular';
import { Location } from 'src/app/models/location.model';
import { CourseDetailCalendarPage } from './course-detail-calendar/course-detail-calendar.page';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { Area } from 'src/app/models/area.model';
import { UserLoginPage } from 'src/app/pages/pages-profile/authorization-account/user-login/user-login.page';
import { UserVerifyPage } from 'src/app/pages/pages-profile/authorization-account/user-verify/user-verify.page';
import { ParamsVerifica, Utente } from 'src/app/models/utente.model';
import { BookcoursePage } from '../../location/course/bookcourse/bookcourse.page';
import { TempoCorso, TipoCorso } from 'src/app/models/valuelist.model';
import { AllegatilistPage } from 'src/app/pages/pages-history/allegatilist/allegatilist.page';
import { LogApp } from 'src/app/models/log.model';

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
  userLogged = false;
  subUserLogged: Subscription;
  isDesktop: boolean;
  docUser: Utente;
  subUser: Subscription;
  

  //Gestione Abilitazione Iscrizioni
  listenSelectedArea:Subscription;
  selectedArea: Area;
  enableIscrizioni:boolean = false;  
  tempoCorso: typeof TempoCorso = TempoCorso;


  constructor(
    private startService: StartService,
    private actRouter: ActivatedRoute,
    private navCtrl: NavController,
    private mdlController: ModalController,
    private docStructureService : DocstructureService,
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

      //Controllo se nell'area sono abilitate le iscrizioni
      if (this.selectedArea.APPISCRIZIONI == true) {
        this.enableIscrizioni = true;
      }
      else {
        this.enableIscrizioni = false;
      }
  }, error => {
    this.enableIscrizioni = false;
  })
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
    //SEMBRA NON FUNZIONARE CORRETTAMENTE
    this.isDesktop = this.startService.isDesktop;
    //IMPOSTO DESKTOP FALSE
    this.isDesktop = false;

    let idCorso = '';
    this.actRouter.paramMap.subscribe(param => {
      if (param.has('courseId')) {
        
        //ID Corso
        idCorso = param.get('courseId')

        //creo il loading

        this.loadingController.create({
          spinner: "circular",
          message: 'Caricamento',
          backdropDismiss: true
        })
        .then(elLoading => {
          elLoading.present();
          
          //faccio la richiesta
          this.startService.newRequestCorsoById(idCorso)
          .then((corso:Corso) => {

            if (corso) {

              //se ho trovato un corso, lo prendo
              this.myCorso = corso;

              

              //ora richiedo la location
              this.requestLocationById(this.myCorso.IDLOCATION);
            }
            else{
              elLoading.dismiss();
              this.showMessage('Non ho trovato nessun corso');
            }
          })
          .catch(error => {
            elLoading.dismiss();
            this.showMessage('Errore di connessione');
            
            LogApp.consoleLog(error,'error');
          })
        })      
  
   
      }
      else {
        this.navCtrl.navigateRoot(['/']);
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

  requestLocationById(idLocation: string){

    //preparo il filtro
    let filterLocation = new Location(true);
    filterLocation.ID = idLocation;
    
    //faccio la richiesta
    this.docStructureService.requestNew(filterLocation).then(elLocation => {
      this.loadingController.dismiss();
      if (elLocation && elLocation.length != 0){

        //se ho trovato una location me la salvo
        this.myLocation = elLocation[0];
      }
      else{
        this.showMessage('Non ho trovato la location');
      }
    }).catch(error => {
      this.loadingController.dismiss();
      this.showMessage('Errore di connessione');
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

    if (this.enableIscrizioni && this.myCorso.flagIscrizioniAperte()) {
      
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
              component: BookcoursePage,
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

      if (this.enableIscrizioni && this.myCorso.flagIscrizioniAperte()) {
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

      if (this.enableIscrizioni && this.myCorso.flagIscrizioniAperte()) {
        myClass = 'success';
      }
    }
    
    return myClass;
  }  

  /**
   * Indica se mostrare il pulsante delle Iscrizioni
   */
  showIscrizioniButton():boolean {
    let show = false;
    if (this.myCorso) {
      if (this.enableIscrizioni && this.myCorso.flagIscrizioniAperte()) {
        show = true;
      }
    }

    return show;
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
