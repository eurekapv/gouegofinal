import { Component, OnInit, OnDestroy } from '@angular/core';
import { Corso } from 'src/app/models/corso.model';
import { Subscription } from 'rxjs';
import { StartService } from 'src/app/services/start.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { Location } from 'src/app/models/location.model';
import { CalendarPage } from './calendar/calendar.page';

//FIXME Alcuni dati (e la pianificazione) non arrivano
@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit, OnDestroy {

  myCorso: Corso = new Corso();
  subMyCorso: Subscription;
  selectedLocation: Location = new Location(); 
  iconColor = 'primary';
  userLogged = false;
  subUserLogged: Subscription;

  constructor(private startService: StartService,
              private actRouter: ActivatedRoute,
              private navCtrl: NavController,
              private mdlController: ModalController) {

  let idCorso = '';
  this.actRouter.paramMap.subscribe(param => {
    if (param.has('courseId')) {
      
      //ID Corso
      idCorso = param.get('courseId');

      //Quando arriva memorizzo il corso
      this.subMyCorso = this.startService.selectedCorso.subscribe(elCorso => {
        //Applico il Corso
        this.myCorso = elCorso;

        //CHiedo al servizio la Location di Riferimento
        this.requestLocation(this.myCorso.IDLOCATION);

      });

      //Ora Chiedo al Servizio il corso e il recupero del programma
      this.startService.requestCorsoProgramma(idCorso);

      //Controllo se l'utente è loggato
      this.subUserLogged = this.startService.utenteLogged.subscribe(element => {
        this.userLogged = element;
      });     
    }
    else {
      this.navCtrl.navigateForward(['/']);
    }
  })              

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subMyCorso) {
      this.subMyCorso.unsubscribe();
    }

    if (this.subUserLogged) {
      this.subUserLogged.unsubscribe();
    }
  }


  /**
   * Richiede al servizio la Location per ID
   * @param idLocation IDLocation da chiedere al servizio
   */
  requestLocation(idLocation) {
    this.selectedLocation = this.startService.findLocationByID(idLocation);
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
}
