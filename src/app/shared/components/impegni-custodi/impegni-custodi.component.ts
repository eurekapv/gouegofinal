import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImpegnoCustode } from 'src/app/models/impegno-custode.model';
import { SettoreAttivita } from 'src/app/models/valuelist.model';

@Component({
  selector: 'app-impegni-custodi',
  templateUrl: './impegni-custodi.component.html',
  styleUrls: ['./impegni-custodi.component.scss'],
})
export class ImpegniCustodiComponent implements OnInit {

  @Input() set impegnoDoc(value: ImpegnoCustode) {
    this._impegnoDoc = value;
    //Reimposto gli attributi addizionali
    this.setAdditionalAttribute();
  }

  @Output() OnClickItem = new EventEmitter<ImpegnoCustode>();


  _impegnoDoc: ImpegnoCustode = new ImpegnoCustode(true);
  iconName: string;
  iconColor: string; 
  locationName: string; //da valorizzare

  constructor() { }

  ngOnInit(): void {
    
  }

  
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
