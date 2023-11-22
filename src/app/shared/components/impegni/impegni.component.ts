import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Impegno } from 'src/app/models/utente/impegno.model';
import { SettoreAttivita } from '../../../models/zsupport/valuelist.model';

@Component({
  selector: 'app-impegni',
  templateUrl: './impegni.component.html',
  styleUrls: ['./impegni.component.scss'],
})
export class ImpegniComponent {

  @Input() set impegnoDoc(value: Impegno) {
    this._impegnoDoc = value;
    //Reimposto gli attributi addizionali
    this.setAdditionalAttribute();
  }

  @Output() OnClickItem = new EventEmitter<Impegno>();

  _impegnoDoc: Impegno = new Impegno(true);
  iconName: string;
  iconColor: string; 
  locationName: string;//da valorizzare

  constructor() { }


  //"corso.DATAFINE > today && corso.DATAINIZIO < today ? 'success': 'danger'"
  setAdditionalAttribute() {
    let adesso = new Date();
    //E' presente un Impegno e posso fare valutazioni
    if (this._impegnoDoc) {
      //Imposto l'icona
      switch (this._impegnoDoc.SETTORE) {
        case SettoreAttivita.settoreCorso:
          this.iconName='school-outline';
          break;
        case SettoreAttivita.settorePrenotazione:
          this.iconName='calendar-outline';
          break;          
        case SettoreAttivita.settoreEvento:
          this.iconName='sparkles-outline';
          break;                    
      
        default:
          this.iconName='calendar-outline';
          this.iconColor = 'success';          
          break;
      }

      if (this._impegnoDoc.DATAORAINIZIO && this._impegnoDoc.DATAORAINIZIO > adesso) {
        //Inizierà prossimamente
        this.iconColor = 'success';
      }
      else if (this._impegnoDoc.DATAORAFINE && this._impegnoDoc.DATAORAFINE > adesso) {
        //Finirà prossimamente
        this.iconColor = 'success';
      }
      else {
        //Già passato
        this.iconColor = 'danger';
      }

    }
    else {
      this.iconName='calendar-outline';
      this.iconColor = 'success';
    }

  }

  /**
  * Click sull'elemento (giro il click al chiamante)
  */
  onClickElement() {
    this.OnClickItem.emit(this._impegnoDoc);
    
}
  
}
