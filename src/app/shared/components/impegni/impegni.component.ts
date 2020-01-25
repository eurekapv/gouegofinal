import { Component, OnInit, Input } from '@angular/core';
import { Attivita, SettoreAttivita } from 'src/app/models/attivita.model';

@Component({
  selector: 'app-impegni',
  templateUrl: './impegni.component.html',
  styleUrls: ['./impegni.component.scss'],
})
export class ImpegniComponent implements OnInit {

  @Input() impegno:Attivita=new Attivita;
  iconName: string;
  locationName: string;//da valorizzare

  constructor() { }

  ngOnInit() {
    if (this.impegno.SETTORE===SettoreAttivita.settoreCorso)
    {
      this.iconName='school';
    }
    else if(this.impegno.SETTORE===SettoreAttivita.settorePrenotazione)
    {
      this.iconName='calendar';
    }
    else if(this.impegno.SETTORE===SettoreAttivita.settoreTorneo)
    {
      this.iconName='medal';
    }
  }
}
