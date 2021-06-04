import { Component, OnInit, Input } from '@angular/core';
import { Impegno } from 'src/app/models/impegno.model';
import { SettoreAttivita } from '../../../models/valuelist.model';

@Component({
  selector: 'app-impegni',
  templateUrl: './impegni.component.html',
  styleUrls: ['./impegni.component.scss'],
})
export class ImpegniComponent implements OnInit {

  @Input() impegno:Impegno=new Impegno;
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
