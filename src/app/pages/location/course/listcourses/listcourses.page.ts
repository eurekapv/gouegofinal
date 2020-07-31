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

@Component({
  selector: 'app-listcourses',
  templateUrl: './listcourses.page.html',
  styleUrls: ['./listcourses.page.scss'],
})
export class ListcoursesPage implements OnInit {

  idLocation = '';
  listCorsi: Corso[] = [];
  corsiListen: Subscription;
  userLogged = false; //Utente loggato ricavato dal servizio
  listenUserLogged: Subscription; 
  docUser: Utente; //Informazioni utente loggato
  listenDocUser: Subscription;

  filtriCorsi: FilterCorsi;

  preferList: SegmentCorsi; 

  

  //Spinner di ricezione corsi
  ricevuti = false;
  

  constructor(private router: ActivatedRoute, 
              private startService: StartService,
              private mdlController: ModalController,
              private navController: NavController,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private docStrService: DocstructureService
              ) { 
    
    //Richiedo l'utente e se è loggato
    this.listenUserLogged = this.startService.utenteLogged.subscribe(value => {
      this.userLogged = value;
      
    });

    //Richiedo lo User
    this.listenDocUser = this.startService.utente.subscribe(element => {
      this.docUser = element;
    });

    //Mostro tutti i corsi
    this.preferList = SegmentCorsi.tutti;

  }

  ngOnInit() {

    this.ricevuti = false;
    
    
    // Leggo idLocation 
    this.router.paramMap.subscribe( param => {
      
      if (param.has('locationId')) 
      {
          //Recupero del Location ID
          this.idLocation = param.get('locationId');
          
          //Inizializzazione dei Filtri
          this.filtriCorsi = this.startService
                                    .newFilterCorsi(this.idLocation);
          
          //Effettuo la richiesta dei corsi
          this.requestCorsi();

          //Mi sottoscrivo alla ricezione
          this.corsiListen = this.startService.listCorsi.subscribe (element => {
            //Corsi sono stati ricevuti
            this.listCorsi = element;
          })
      }

    })
  }

  /**
   * Richiesta dei corsi
   */
  requestCorsi() {
    this.loadingCtrl.create({
      spinner: 'circular',
      message: 'Caricamento',
      backdropDismiss: true
    }).then(loading=>{
      loading.present();
      this.ricevuti=false;
      switch (this.preferList) {
        case SegmentCorsi.tutti:
          //Richiedo i corsi
          this.startService.requestCorsi().then(()=>{
            this.ricevuti=true;
            loading.dismiss();
          }, ()=>{
            loading.dismiss();
            this.showMessage('Errore di connessione');
          });
          break;
      case SegmentCorsi.mioLivello:
        //Richiedo i corsi con il documento utente per effettuare i filtri
        this.startService.requestCorsi(this.docUser).then(()=>{
          loading.dismiss();
          this.ricevuti=true;
        }, ()=>{
          loading.dismiss();
          this.showMessage('Errore di connessione');
        });
        break;
      }
          
          
    })
          
  }
        
  /**
   * Modifica del Segment per la scelta dei corsi
   */
  onChangeSegmentCorsi(event: any) {
    this.ricevuti=false
    if (event.target.value == 'corsiall')  {
      this.preferList = SegmentCorsi.tutti
      this.requestCorsi();
    }
    else if (event.target.value == 'corsiforme') {
      this.preferList = SegmentCorsi.mioLivello
      this.requestCorsi();
    }
    
  }

  goToFilter() {
    this.mdlController
      .create({
        component: FilterPage,
        componentProps: {
          'myFilter': {...this.filtriCorsi}
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
  onModalNewFilter(filter: FilterCorsi) {
    this.filtriCorsi = filter;
    this.startService.filterCorsi = filter;
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

  /**
   * Test di decodifica semplice con il describe row
   * @param corso 
   */
  testingDecodeSimple(corso: Corso) {

    let useCache = true;
    
    this.docStrService.decode(corso,'IDSPORT', useCache);

  }

  /**
   * Test di decodifica hard con il describe row
   * @param corso 
   */
  testingDecodeHard(corso: Corso) {

    let useCache = true;
    let describeWith = ['PARTECIPANTI', 'ICONA'];
    
    this.docStrService.decode(corso,'IDSPORT', useCache, describeWith)
        .then(() => {
            console.log('Sti gran cazzi !!!!')
        })
        .catch(err => {
            console.error(err);
        });

  }

    /**
   * Test di decodifica hard con il describe row
   * @param corso 
   */
  testingDecodeAll(corso: Corso) {
    let params = new RequestParams();
    let filterCorso = new Corso(true);
    let objForeign: RequestForeign;
    
    console.log(corso);
    let area: Area;
    this.docStrService.getRelDoc(corso, ['IDCAMPO','IDLOCATION','IDAREAOPERATIVA'])
                     .then(docRel => {
                       console.log(docRel);
                     })
                     .catch(err=> {
                       console.log(err);
                     })

    //filterCorso.ID = corso.ID;
    //filterCorso.IDLOCATION = '9742AD87-FE66-44AF-9F2C-59967C4D051F';

    // params.child_level = 1;
    // params.decode.active = true;
    // objForeign = params.decode.addForeignField('IDSPORT');
    // objForeign.addDescribeField('ICONA');
    // objForeign.addDescribeField('DENOMINAZIONE');

    // objForeign = params.decode.addForeignField('IDLIVELLOENTRATA');
    // objForeign.addDescribeField('DENOMINAZIONE');
    

    // this.docStrService.requestNew(filterCorso,params)
    //                   .then(collection => {
    //                     console.log(collection);
    //                   })
    //                   .catch(err => {
    //                     console.log('Errore');
    //                   })
    


  }

}
