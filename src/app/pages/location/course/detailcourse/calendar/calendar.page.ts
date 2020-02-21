import { Component, OnInit, Input } from '@angular/core';
import { Corso } from 'src/app/models/corso.model';
import { StartService } from 'src/app/services/start.service';
import { ModalController } from '@ionic/angular';
import { CorsoScheduler } from 'src/app/models/corsoscheduler.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  @Input() myCorso: Corso;
  calendarCorso: CorsoScheduler[];
  listenCalendarCorso: Subscription;
  ricevuti = false; //Indica se gli orari sono stati ricevuti

  constructor(private startService: StartService,
              private mdlController: ModalController) { }

  ngOnInit() {
    //Sottoscrivo alla ricezione
    this.listenCalendarCorso = this.startService.calendarioCorso.subscribe(listCalendar => {
      this.calendarCorso = listCalendar;

      this.ricevuti = true;
      
      
    })

    //Richiedo il corso
    this.startService.requestCalendarioCorso(this.myCorso.ID);
  }

  //Chiudo il calendario
  closeCalendar() {
    this.mdlController.dismiss();
  }

  colorItem(itemCalendarCorso: CorsoScheduler) {
    let color = 'success';
    if (itemCalendarCorso.eventoPassato()) {
      color='danger';
    }
    return color;
  }
}
