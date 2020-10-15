import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Corso } from '../../../../models/corso.model';
import { StartService } from '../../../../services/start.service';
import { Utente } from 'src/app/models/utente.model';
import { SegmentCorsi } from 'src/app/models/valuelist.model';

import { ModalController, NavController, LoadingController, ToastController, Gesture, GestureController } from '@ionic/angular';
import { FilterPage } from './filter/filter.page';
import { CalendarPage } from '../detailcourse/calendar/calendar.page';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { RequestParams } from 'src/app/library/models/requestParams.model';
import { OperatorCondition } from 'src/app/library/models/iddocument.model';


enum PageState{
  TUTTI = 10,
  MIEI = 20
}


@Component({
  selector: 'app-listcourses',
  templateUrl: './listcourses.page.html',
  styleUrls: ['./listcourses.page.scss'],
})
export class ListcoursesPage implements OnInit {


  PageState : typeof PageState = PageState;
  idLocation = '';

  listCorsi: Corso[] = [];
  listCorsiMioLivello: Corso[] = [];

  docUser: Utente; //Informazioni utente loggato
  listenDocUser: Subscription;

  filtroCorsi: Corso = new Corso(true);

  preferList: SegmentCorsi; 

  userLogged= false

  statoPagina = PageState.TUTTI;

  showTabs = true;

  

  
  

  constructor(private router: ActivatedRoute, 
              private startService: StartService,
              private mdlController: ModalController,
              private navController: NavController,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private docStructureService: DocstructureService,
              private gestureCtrl: GestureController
              ) { 
    

    //Richiedo lo User
    this.listenDocUser = this.startService.utente.subscribe(element => {
      this.docUser = element;
    });

    //Mostro tutti i corsi
    this.preferList = SegmentCorsi.tutti;

    
    //inserisco nel filtro la condizione di "corsi non ancora finiti"
    this.filtroCorsi.DATAFINE = new Date();
    this.filtroCorsi.addFilterCondition(OperatorCondition.maggiore,'DATAFINE');

  }

  ngOnInit() {

    //valorizzare userLogged
    this.userLogged = this.startService.actualUtenteLogged;
    
    // Leggo idLocation 
    this.router.paramMap.subscribe( param => {
      
      if (param.has('locationId')) 
      {
          //Recupero del Location ID
          this.idLocation = param.get('locationId');

          //inserisco nel filtro l'id della location
          this.filtroCorsi.IDLOCATION=this.idLocation;
          
          //Effettuo la richiesta dei corsi
          this.requestCorsi();

      }

    })
  }

  // ionViewDidEnter(){
  //   const gesture: Gesture = this.gestureCtrl.create({
  //     el: document.getElementById('content'),
  //     threshold: 15,
  //     gestureName: 'my-gesture',
  //     direction: 'x',
  //     maxAngle: 90,
  //     onMove: ev => this.onSwipe(ev),
  //   }, true);

  //   gesture.enable(true);
  // }

  // onSwipe(detail){

  //   console.log(detail);

  //   //scroll verso sinistra
  //   if (detail.deltaY > -50 && detail.deltaY < 50){

  //     if (this.statoPagina == PageState.TUTTI && (detail.velocityX < 0) ){
  //       this.statoPagina = PageState.MIEI;
  //     }
  
  //     //scroll verso destra
  //     else if (this.statoPagina == PageState.MIEI && (detail.velocityX > 0)){
  //       this.statoPagina = PageState.TUTTI;
  //     }
  //   }
  // }

  /**
   * Richiesta dei corsi
   */
  requestCorsi() {
    //quando faccio una richiesta di corsi, l'id location è sempre presente
    

    console.log('filtro');
    console.log(this.filtroCorsi);

    this.loadingCtrl.create({
      spinner: 'circular',
      message: 'Caricamento',
      backdropDismiss: true
    }).then(loading=>{

      loading.present();        
      
      //Richiesta di decodifica
      let params = new RequestParams();
      params.decode.active = true;
      
      //Eseguo la richiesta al server
      this.docStructureService.requestNew(this.filtroCorsi , params)
          .then(data => {
              console.log('bp2');
              //Chiudo il loading
              loading.dismiss();

              //recupero la lista dei corsi
              this.listCorsi = data;

              //Preparo i dati per il mio livello (se utente loggato)
              this.prepareForMioLivello();

      })
      .catch(error => {
        this.showMessage('Errore di connessione');
        console.log(error);
      })
    })
          
  }

  /**
   * Preparo i dati per il mio livello
   */
  prepareForMioLivello() {

    this.listCorsiMioLivello = [];

    if (this.docUser) {
        //filtro subito recuperando solo i corsi per me
        
        this.listCorsiMioLivello = this.listCorsi.filter(elCorso => {
          //Corso per l'utente
          let isForUser = true

          if (elCorso.IDLIVELLOENTRATA && elCorso.IDLIVELLOENTRATA!='') {
              //Controlliamo se l'utente può partecipare allo sport con il livello passato
              isForUser = this.docUser.isForLevelSport(elCorso.IDLIVELLOENTRATA, elCorso.IDSPORT);
          }

          //Controllo TARGETSESSO
          if (isForUser && elCorso.TARGETSESSO) {
              isForUser = this.docUser.isForTargetSesso(elCorso.TARGETSESSO);
          }

          //Controllo CategoriaEta
          if (isForUser && elCorso.IDCATEGORIEETA && elCorso.IDCATEGORIEETA.length != 0) {
            if (this.docUser.NATOIL) {
              let eta = this.docUser.eta;
              isForUser = this.startService.isValidCategorieEta(elCorso.IDCATEGORIEETA, eta);
            }
          }
          
          
          return isForUser;
        });

        console.log ('tutti');
        console.log (this.listCorsi);
        console.log ('mioLivello');
        console.log (this.listCorsiMioLivello)
    }

  }



        
  /**
   * Modifica del Segment per la scelta dei corsi
   */
  onChangeSegmentCorsi(event: any) {
    if (this.userLogged)  {
      this.statoPagina = event.target.value;
    }
    
  }

  goToFilter() {
    this.mdlController
      .create({
        component: FilterPage,
        componentProps: {
          'myFilter': this.filtroCorsi
        }
      })
      .then(formModal => {
        formModal.present();

        formModal.onWillDismiss().then((objReceived)=> {
          console.log('bp');
          console.log(objReceived);
          if (objReceived.data.dismissFilter) {
            //Mi è arrivato un filtro da applicare
            this.onModalNewFilter(objReceived.data.dismissFilter);
          }
        });
      });
  }

  /**
   * Arrivo di nuovi filtri dalla modale
   * @param filter Filtri impostati nella modale
   */
  onModalNewFilter(filter: Corso) {
    this.filtroCorsi = filter;
    this.requestCorsi();
  }



  /* ****** CALENDAR ******** */
  onClickCardCalendar(corso: Corso) {
    /* Apro in modale il calendario */
    this.mdlController
    .create({
      component: CalendarPage,
      componentProps: {
        'myCorso': corso
      }
    })
    .then(formModal => {
      formModal.present();
    });

  }
  showMessage(message: string) {

    //Creo un messaggio
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
    .then(tstMsg => {
      tstMsg.present();
    });

  }

  doRefresh(event){
    this.requestCorsi();
    event.target.complete();
  }


  //Modificato
  onClickCardDetail(corso: Corso) {
    this.navController.navigateForward(['/','detailcourse',corso.ID]);

    //this.testingDecodeAll(corso);
  }


  onScroll(event:any){
    if(event.detail.currentY < 5){
      this.showTabs = true;
    }
    else{
      if (event['detail']['deltaY'] > 20){
        this.showTabs = false;
      }
      else if (event['detail']['deltaY'] < -20){
        this.showTabs = true;
      }
    }  
  }


}



 

