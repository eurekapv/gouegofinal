import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Utente } from 'src/app/models/utente.model';
import { SegmentCorsi, TypeUrlPageLocation } from 'src/app/models/valuelist.model';
import { ModalController, NavController, LoadingController, ToastController, GestureController } from '@ionic/angular';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { RequestParams } from 'src/app/library/models/requestParams.model';
import { OperatorCondition } from 'src/app/library/models/iddocument.model';
import { Area } from 'src/app/models/area.model';


import { LogApp } from 'src/app/models/log.model';
import { Corso } from 'src/app/models/corso.model';
import { StartService } from 'src/app/services/start.service';



import { CourseListFilterPage } from './course-list-filter/course-list-filter.page';
import { LocationCourseSubscribePage } from '../location-course-subscribe/location-course-subscribe.page';


enum PageState{
  TUTTI = 10,
  MIEI = 20
}


@Component({
  selector: 'app-location-course-list',
  templateUrl: './location-course-list.page.html',
  styleUrls: ['./location-course-list.page.scss'],
})
export class LocationCourseListPage implements OnInit, OnDestroy {


  PageState : typeof PageState = PageState;
  idLocation = '';

  listCorsi: Corso[] = [];
  listCorsiMioLivello: Corso[] = [];
  loadingCorsiComplete: boolean = false;
  loadingCorsiError: boolean = false;


  docUser: Utente; //Informazioni utente loggato
  listenDocUser: Subscription;

  filtroCorsi: Corso = new Corso(true);

  preferList: SegmentCorsi; 

  userLogged= false;
  listenUserLogged: Subscription;

  statoPagina = PageState.TUTTI;

  showTabs = true;
  cardNewTemplateMode = true; //Disegno le Card corsi nella nuova modalità

  listVersion = 2; //Versione delle Liste (2 = Card / 3 = Item)

  //Gestione Abilitazione Iscrizioni
  listenSelectedArea:Subscription;
  selectedArea: Area;
  enableIscrizioni:boolean = false;
  

  constructor(private router: ActivatedRoute, 
              private startService: StartService,
              private mdlController: ModalController,
              private navController: NavController,
              private loadingCtrl: LoadingController,
              private docStructureService: DocstructureService,
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
    this.listenSelectedArea = this.startService.areaSelected.subscribe({
      next: (elArea)=> {
        this.selectedArea = elArea;

        //Controllo se nell'area sono abilitate le iscrizioni
        if (this.selectedArea.APPISCRIZIONI == true) {
          this.enableIscrizioni = true;
        }
        else {
          this.enableIscrizioni = false;
        }
      },
      error: (error)=> {
        this.enableIscrizioni = false;
      }
    });
  }

  /**
   * In ascolto al cambiamento utente
   */
  onListenUser() {

    //Richiedo lo User
    this.listenDocUser = this.startService.activeUtenteDoc$.subscribe(element => {
      this.docUser = element;
    });

    this.listenUserLogged = this.startService.flagUtenteIsLoggato$.subscribe(flagLogged => {
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

    this.loadingCorsiComplete = false;
    this.loadingCorsiError = false;
    
    this.loadingCtrl.create({
      spinner: 'circular',
      message: 'Caricamento',
      backdropDismiss: true
    }).then(elLoading=>{

      elLoading.present();        
      
      //Richiesta di decodifica
      let params = new RequestParams();
      params.decode.active = true;
      
      //Eseguo la richiesta al server
      this.docStructureService.requestNew(this.filtroCorsi , params)
          .then(data => {
              
              //Chiudo il loading
              elLoading.dismiss();

              //recupero la lista dei corsi
              this.listCorsi = data;

              //Preparo i dati per il mio livello (se utente loggato)
              this.prepareForMioLivello();

              this.loadingCorsiComplete = true;

      })
      .catch(error => {
        
        //Chiudo il loading
        elLoading.dismiss();

        this.showMessage('Errore caricamento corsi','','toast');
        
        LogApp.consoleLog(error,'error');

        this.loadingCorsiError = true;
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

  /**
   * Cambia la versione della lista da 2 a 3 e viceversa
   */
  onChangeVersionList(): void {
    if (this.listVersion == 2) {
      this.listVersion = 3;
    }
    else {
      this.listVersion = 2;
    }
  }  

  /**
   * Mostra la pagina dei Filtri
   */
  goToFilter() {
    this.mdlController
      .create({
        component: CourseListFilterPage,
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


  /**
   * Visualizza un messaggio
   * @param message Messaggio
   */
  showMessage(message: string, title?:string, type: 'alert' | 'toast' = 'alert') {

    if (type == 'alert') {
      this.startService.presentAlertMessage(message, title);
    }
    else if (type == 'toast') {
      this.startService.presentToastMessage(message, title);
    }
  }


  /**
   * Esecuzione del refresh della Lista
   * @param event 
   */
  doRefresh(event): void {
    this.requestCorsi();

    if (event) {
      event.target.complete();
    }
  }


  /**
   * Passa alla pagina Dettaglio del corso
   * @param myCorso Corso Richiesto
   */
  onClickCardDetail(myCorso: Corso) {
    let arPath = [];

    if (myCorso) {
      arPath = this.startService.getUrlPageLocation(TypeUrlPageLocation.CourseDetail, myCorso.ID);
      this.navController.navigateForward(arPath);
    }
    
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
          
          this.startService.openFormLogin();
    
        }
        else {

        //Controllo se avessi bisogno altri dati utente non impostati
        this.startService.onVerificationUserData()
                          .then(needVerification => {
                          if (needVerification == false) {
                                //Posso procedere con la pagina di prenotazione
                                this.mdlController.create({
                                  component: LocationCourseSubscribePage,
                                  cssClass: 'modal-xl-class',
                                  componentProps: {
                                    idCorso: selectedCorso.ID
                                  }
                                })
                                .then(elModal => {
                                  elModal.present();
                                })
                          }
                          }) 
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



 

