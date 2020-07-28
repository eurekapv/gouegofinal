import { Component, OnInit, OnDestroy } from '@angular/core';
import { Corso } from 'src/app/models/corso.model';
import { Subscription } from 'rxjs';
import { StartService } from 'src/app/services/start.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { Location } from 'src/app/models/location.model';
import { CalendarPage } from './calendar/calendar.page';

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

  constructor(private startService: StartService,
              private actRouter: ActivatedRoute,
              private navCtrl: NavController,
              private mdlController: ModalController) {

                
              }
              
              ngOnInit() {
                let idCorso = '';
                this.actRouter.paramMap.subscribe(param => {
                  if (param.has('courseId')) {
                    
                    //ID Corso
                    idCorso = param.get('courseId');
              
                      //richiedo il corso al server
                      this.startService.requestCorsoById(idCorso).then(elCorso=>{
                        this.myCorso = elCorso;
                        this.startService.requestLocationByID(this.myCorso.IDLOCATION).then(objLocation=>{
                          this.myLocation=objLocation;
                          console.log('bp');
                          console.log(this.myCorso);
                        })
                      })
      
              
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

  ngOnDestroy() {
    if (this.subMyCorso) {
      this.subMyCorso.unsubscribe();
    }

    if (this.subUserLogged) {
      this.subUserLogged.unsubscribe();
    }
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
