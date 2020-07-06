import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Corso } from '../../../../models/corso.model';
import { StartService } from '../../../../services/start.service';
import { Utente } from 'src/app/models/utente.model';
import { SegmentCorsi } from 'src/app/models/valuelist.model';
import { FilterCorsi } from 'src/app/models/filtercorsi.model';
import { ModalController, NavController } from '@ionic/angular';
import { FilterPage } from './filter/filter.page';
import { CalendarPage } from '../detailcourse/calendar/calendar.page';
import { LogApp } from 'src/app/models/log.model';


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
              private navController: NavController
              ) { 
    
    //In attesa dei corsi
    this.ricevuti = false;

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
          this.ricevuti = true;
          this.listCorsi = element;
        });


      }

    })
  }

  /**
   * Richiesta dei corsi
   */
  requestCorsi() {
    switch (this.preferList) {
      case SegmentCorsi.tutti:
          //Richiedo i corsi
          this.ricevuti = false;
          this.startService.requestCorsi(null);
          break;
      case SegmentCorsi.mioLivello:
          //Richiedo i corsi con il documento utente per effettuare i filtri
          this.ricevuti = false;
          this.startService.requestCorsi(this.docUser);
          break;

      default:
        break;
    }


    
  }

  /**
   * Modifica del Segment per la scelta dei corsi
   */
  onChangeSegmentCorsi(event: any) {

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

  onClickCardDetail(corso: Corso) {
    this.navController.navigateForward(['/','detailcourse',corso.ID]);
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




}
