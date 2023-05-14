import { Component, OnInit } from '@angular/core';
import { Area } from 'src/app/models/area.model';
import { ButtonCard } from 'src/app/models/buttoncard.model';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  selectedArea: Area = new Area();
  agendaCards: ButtonCard[] = [];


  constructor(
    private startService : StartService
  ) { }

  ngOnInit() {
    this.selectedArea = this.startService.areaSelectedValue;
    this.createCards();
  }


  createCards(){
    this.startService.requestOccupazioni(this.selectedArea.ID)
    .then(listOccupazioni => {
      this.agendaCards = ButtonCard.getButtonAgendaFromOccupazioni(listOccupazioni)
    })
  }

}
