import { Component, OnInit, Input } from '@angular/core';
import { Corso } from 'src/app/models/corso.model';
import { StartService } from 'src/app/services/start.service';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import { PianificazioneCorso } from 'src/app/models/pianificazionecorso.model';
import { Subscription } from 'rxjs';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { RequestParams, RequestDecode } from 'src/app/library/models/requestParams.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  @Input() myCorso: Corso;
  calendarCorso: PianificazioneCorso[]=[];
  listenCalendarCorso: Subscription;
  ricevuti = false; //Indica se gli orari sono stati ricevuti

  constructor(private startService: StartService,
              private mdlController: ModalController,
              private docStructureService: DocstructureService,
              private loadingController : LoadingController,
              private toastController : ToastController) { }

  ngOnInit() {
    //Sottoscrivo alla ricezione
    // this.listenCalendarCorso = this.startService.calendarioCorso.subscribe(listCalendar => {
    //   this.calendarCorso = listCalendar;

    //   this.ricevuti = true;
      
      
    //})

    //Richiedo il corso
    //this.startService.requestCalendarioCorso(this.myCorso.ID);


    //creo il filtro per la richiesta
    let filter = new PianificazioneCorso(true);
    filter.IDCORSO=this.myCorso.ID;

    //creo i parametri per la richiesta
    let params = new RequestParams();
    params.decode = new RequestDecode();
    params.decode.active = true;

    //creo il loading 
    this.loadingController.create({
      message: 'Caricamento...',
      spinner: "circular",
      backdropDismiss: true
    })
    .then(elLoading => {
      elLoading.present();

      //richiedo il calendario
      this.docStructureService.requestNew(filter,params)
      .then(listCalendar => {
        //dismetto il loading e salvo il calendario
        elLoading.dismiss();
        this.calendarCorso = listCalendar;
        
      })
      .catch(error => {
        //dismetto il loading e mostro l'errore
        elLoading.dismiss();
        this.showMessage('Errore di connessione');
        console.log(error);
        
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

  showMessage (messaggio : string){
    this.toastController.create({
      message: messaggio,
      duration: 3000

    }).then (elModal => {
      elModal.present();
    })
  }
}
