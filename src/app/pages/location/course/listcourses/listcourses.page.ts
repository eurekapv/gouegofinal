import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Corso } from '../../../../models/corso.model';
import { StartService } from '../../../../services/start.service';
import { Utente } from 'src/app/models/utente.model';
import { SegmentCorsi } from 'src/app/models/valuelist.model';
import { FilterCorsi } from 'src/app/models/filtercorsi.model';
import { ModalController, NavController, LoadingController, ToastController } from '@ionic/angular';
import { FilterPage } from './filter/filter.page';
import { CalendarPage } from '../detailcourse/calendar/calendar.page';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { RequestParams, RequestForeign } from 'src/app/library/models/requestParams.model';
import { filter } from 'rxjs/operators';
import { Area } from 'src/app/models/area.model';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { element } from 'protractor';


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

  pageState : typeof PageState = PageState;
  idLocation = '';

  listCorsi: Corso[] = [];
  listCorsiMioLivello: Corso[] = [];

  docUser: Utente; //Informazioni utente loggato
  listenDocUser: Subscription;

  filtroCorsi: Corso = new Corso(true);

  preferList: SegmentCorsi; 

  userLogged= false

  statoPagina = PageState.TUTTI;

  

  
  

  constructor(private router: ActivatedRoute, 
              private startService: StartService,
              private mdlController: ModalController,
              private navController: NavController,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private docStructureService: DocstructureService
              ) { 
    

    //Richiedo lo User
    this.listenDocUser = this.startService.utente.subscribe(element => {
      this.docUser = element;
    });

    //Mostro tutti i corsi
    this.preferList = SegmentCorsi.tutti;

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
          
          //Effettuo la richiesta dei corsi
          this.requestCorsi();

      }

    })
  }

  /**
   * Richiesta dei corsi
   */
  requestCorsi() {
    //quando faccio una richiesta di corsi, l'id location è sempre presente
    this.filtroCorsi.IDLOCATION=this.idLocation;
    console.log('filtro');
    console.log(this.filtroCorsi);

    this.loadingCtrl.create({
      spinner: 'circular',
      message: 'Caricamento',
      backdropDismiss: true
    }).then(loading=>{

      loading.present();        
      
      //faccio la richiesta
      let params = new RequestParams
      this.docStructureService.requestNew(this.filtroCorsi).then(data => {

        loading.dismiss();

        //recupero la lista dei corsi
        this.listCorsi = data;
        
        //li decodifico
        this.listCorsi.forEach(elCorso => {
          this.docStructureService.decodeAll(elCorso,true);
        });
        
        console.log('Lista corsi');
        console.log(this.listCorsi);
        //filtro subito recuperando solo i corsi per me
        this.listCorsiMioLivello=this.listCorsi.filter(elCorso => {
          let ok = true

          if (elCorso.IDLIVELLOENTRATA&&elCorso.IDLIVELLOENTRATA!=''){

              //devo trovare il livello per lo sport
            let livello = this.docUser.UTENTILIVELLI.find(elLivello => {
              return elLivello.IDSPORT==elCorso.IDSPORT;
            })

            //ora faccio i controlli
            if (livello.IDLIVELLO!=elCorso.IDLIVELLOENTRATA){
              //il livello non va bene
              ok=false;
            }
          }
          
          // if (elCorso.TARGETSESSO!=this.docUser.SESSO){
          //   //il sesso non va bene
          //   ok = false;
          // }
          // if (){
          //   //l'età non va bene
          //   ok = false;
          // }
          return true;
        })

        console.log ('tutti');
        console.log (this.listCorsi);
        console.log ('mioLivello');
        console.log (this.listCorsiMioLivello)

      })
      .catch(error => {
        this.showMessage('Errore di connessione');
        console.log(error);
      })
    })
          
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
          'myFilter': {...this.filtroCorsi}
        }
      })
      .then(formModal => {
        formModal.present();

        formModal.onWillDismiss().then((objReceived:any)=> {
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


}



 

