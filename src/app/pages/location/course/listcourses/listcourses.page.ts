import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Corso } from '../../../../models/corso.model';
import { StartService } from '../../../../services/start.service';
import { ParamsVerifica, Utente } from 'src/app/models/utente.model';
import { SegmentCorsi } from 'src/app/models/valuelist.model';

import { ModalController, NavController, LoadingController, ToastController, Gesture, GestureController } from '@ionic/angular';
import { FilterPage } from './filter/filter.page';
import { CalendarPage } from '../detailcourse/calendar/calendar.page';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { RequestParams } from 'src/app/library/models/requestParams.model';
import { OperatorCondition } from 'src/app/library/models/iddocument.model';
import { Area } from 'src/app/models/area.model';
import { NewLoginPage } from 'src/app/pages/auth/new-login/new-login.page';
import { VerifyPage } from 'src/app/pages/auth/verify/verify.page';
import { BookcoursePage } from '../bookcourse/bookcourse.page';
import { LogApp } from 'src/app/models/log.model';


enum PageState{
  TUTTI = 10,
  MIEI = 20
}


@Component({
  selector: 'app-listcourses',
  templateUrl: './listcourses.page.html',
  styleUrls: ['./listcourses.page.scss'],
})
export class ListcoursesPage implements OnInit, OnDestroy {


  PageState : typeof PageState = PageState;
  idLocation = '';

  listCorsi: Corso[] = [];
  listCorsiMioLivello: Corso[] = [];

  docUser: Utente; //Informazioni utente loggato
  listenDocUser: Subscription;

  filtroCorsi: Corso = new Corso(true);

  preferList: SegmentCorsi; 

  userLogged= false;
  listenUserLogged: Subscription;

  statoPagina = PageState.TUTTI;

  showTabs = true;

  //Gestione Abilitazione Iscrizioni
  listenSelectedArea:Subscription;
  selectedArea: Area;
  enableIscrizioni:boolean = false;
  

  constructor(private router: ActivatedRoute, 
              private startService: StartService,
              private mdlController: ModalController,
              private navController: NavController,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private docStructureService: DocstructureService,
              private gestureCtrl: GestureController
              ) { 
    

    //Mostro tutti i corsi
    this.preferList = SegmentCorsi.tutti;

    //Ascolto le modifiche Utente
    this.onListenUser();
    
    //inserisco nel filtro la condizione di "corsi non ancora finiti"
    this.filtroCorsi.DATAFINE = new Date();
    this.filtroCorsi.addFilterCondition(OperatorCondition.maggiore,'DATAFINE');

    //Ascolto le modifiche dell'area selezionata
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

  /**
   * In ascolto al cambiamento utente
   */
  onListenUser() {

    //Richiedo lo User
    this.listenDocUser = this.startService.utente.subscribe(element => {
      this.docUser = element;
    });

    this.listenUserLogged = this.startService.utenteLogged.subscribe(flagLogged => {
      this.userLogged = flagLogged;

      /** Utente Loggato mi sposto su Mio Livello */
      if (this.userLogged == true) {
        this.statoPagina = PageState.MIEI;
      }
    })

  }

  ngOnInit() {

    
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

  ngOnDestroy() {
    
    if (this.listenSelectedArea) {
      this.listenSelectedArea.unsubscribe();
    }  
    
    if (this.listenUserLogged) {
      this.listenUserLogged.unsubscribe();
    }
  }


  /**
   * Richiesta dei corsi
   */
  requestCorsi() {
    //quando faccio una richiesta di corsi, l'id location è sempre presente
    
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
              
              //Chiudo il loading
              loading.dismiss();

              //recupero la lista dei corsi
              this.listCorsi = data;

              //Preparo i dati per il mio livello (se utente loggato)
              this.prepareForMioLivello();

      })
      .catch(error => {
        
        //Chiudo il loading
        loading.dismiss();

        this.showMessage('Errore di connessione');
        
        LogApp.consoleLog(error,'error');
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


  /**
   * Visualizza un messaggio
   * @param message Messaggio
   */
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


  /**
   * Passa alla pagina Dettaglio del corso
   * @param myCorso Corso Richiesto
   */
  onClickCardDetail(myCorso: Corso) {

    this.navController.navigateForward(['/','detailcourse',myCorso.ID]);
    
  }

  /**
  * Evento Click sul pulsante di Iscrizione
  */
  onClickIscrizione(selectedCorso: Corso) {

    if(selectedCorso) {

      //Posso proseguire verso l'iscrizione
      if (this.enableIscrizioni && selectedCorso.flagIscrizioniAperte()) {

        //Verifico di essere loggato, ed eventualmente di avere tutte le informazioni
        //di verifica richieste

        //Non solo loggato, devo loggarmi
        if (!this.userLogged) {
    
          //Prima di aprire la pagina di login
          //impostare nel servizio Start forceIdArea = 
          this.startService.setIdAreaForcedForLogin();
          
          //Ora preparo e creo la pagina di Login
          this.mdlController.create({
            component:NewLoginPage
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
                component: VerifyPage,
                componentProps:{
                  params: paramsVerifica
                } 
              })
              .then(elModal => {
                elModal.present();
              })
            }
            else {
      
              //Posso procedere con la pagina di prenotazione
              this.mdlController.create({
                component: BookcoursePage,
                componentProps: {
                  params: selectedCorso
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



 

