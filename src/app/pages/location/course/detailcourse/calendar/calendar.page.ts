import { Component, OnInit, Input } from '@angular/core';
import { Corso } from 'src/app/models/corso.model';
import { StartService } from 'src/app/services/start.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  @Input() myCorso: Corso;

  constructor(private startService: StartService,
              private mdlController: ModalController) { }

  ngOnInit() {
  }

  //Chiudo il calendario
  closeCalendar() {
    this.mdlController.dismiss();
  }
}
