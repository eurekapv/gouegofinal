import { Component, OnInit, Input } from '@angular/core';
import { Corso } from 'src/app/models/corso/corso.model';
import { ModalController, LoadingController } from '@ionic/angular';
import { PianificazioneCorso } from 'src/app/models/corso/pianificazionecorso.model';
import { Subscription } from 'rxjs';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-course-detail-calendar',
  templateUrl: './periodic-course-detail-calendar.page.html',
  styleUrls: ['./periodic-course-detail-calendar.page.scss'],
})
export class PeriodicCourseDetailCalendarPage implements OnInit {

  @Input() myCorso: Corso;
  calendarCorso: PianificazioneCorso[]=[];
  listenCalendarCorso: Subscription;
  ricevuti = false; //Indica se gli orari sono stati ricevuti

  constructor(
              private mdlController: ModalController,
              private loadingController : LoadingController,
              private startService: StartService) { }

  ngOnInit() {

    


    // //creo il filtro per la richiesta
    // let filter = new PianificazioneCorso(true);
    // filter.IDCORSO=this.myCorso.ID;

    // //creo i parametri per la richiesta
    // let params = new RequestParams();
    // params.decode = new RequestDecode();
    // params.decode.active = true;

    //creo il loading 
    this.loadingController.create({
      message: 'Caricamento...',
      spinner: "circular",
      backdropDismiss: true
    })
    .then(elLoading => {
      elLoading.present();


      this.startService.requestCalendarioCorso(this.myCorso.ID,true)
      .then(listCalendar => {
        //dismetto il loading e salvo il calendario
        elLoading.dismiss();

        this.calendarCorso = listCalendar;
        console.log(listCalendar)
        
      })
      .catch(error => {
        //dismetto il loading e mostro l'errore
        elLoading.dismiss();

        this.startService.presentToastMessage('Errore di connessione');
        
        LogApp.consoleLog(error,'error');
        
      })
    })
    
  }


  //Chiudo il calendario
  closeCalendar() {
    this.mdlController.dismiss();
  }

  colorItem(itemCalendarCorso: PianificazioneCorso) {
    let color = 'success';
    if (itemCalendarCorso.eventoPassato()) {
      color='danger';
    }
    return color;
  }


}
