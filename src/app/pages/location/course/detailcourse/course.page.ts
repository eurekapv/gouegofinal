import { Component, OnInit, OnDestroy } from '@angular/core';
import { Corso } from 'src/app/models/corso.model';
import { Subscription } from 'rxjs';
import { StartService } from 'src/app/services/start.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController, LoadingController, ToastController } from '@ionic/angular';
import { Location } from 'src/app/models/location.model';
import { CalendarPage } from './calendar/calendar.page';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { RequestParams, RequestDecode } from 'src/app/library/models/requestParams.model';
import { Area } from 'src/app/models/area.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})

export class CoursePage implements OnInit, OnDestroy {

  myCorso: Corso = new Corso();
  subMyCorso: Subscription;
  myLocation: Location = new Location(); 
  iconColor = 'primary';
  userLogged = false;
  subUserLogged: Subscription;
  isDesktop: boolean;

  //Gestione Abilitazione Iscrizioni
  listenSelectedArea:Subscription;
  selectedArea: Area;
  enableIscrizioni:boolean = false;  


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
              
  ngOnInit() {
    this.isDesktop = this.startService.isDesktop;
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
            console.log(error);
          })
        })      
  
        //Controllo se l'utente è loggato
        this.subUserLogged = this.startService.utenteLogged.subscribe(element => {
          this.userLogged = element;
        });     
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
      if (elLocation && elLocation!=[]){

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
      component: CalendarPage,
      componentProps: {
        'myCorso': this.myCorso
      }
    })
    .then(formModal => {
      formModal.present();
    });

  }


  /**
   * Vorrebbe Iscriversi
   */
  //TODO: Implementare l'iscrizione
  onClickIscrizione() {

  }

  /**
   * chiama il servizio passandogli l'id dell'oggetto corso, e restituisce la stringa dell'icona
   * @param corso l'oggetto corso per cui si richiede l'icona
   */
  getIcon(corso:Corso)
  {
    return this.startService.getSportIcon(corso.IDSPORT);
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

  showMessage(messaggio:string){
    this.toastController.create({
      message: messaggio,
      duration: 3000
    })
  }
}
