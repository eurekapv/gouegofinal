import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CorsoGiornaliero } from 'src/app/models/corso/corso-giornaliero.model';

@Component({
  selector: 'app-daily-course-item-list',
  templateUrl: './daily-course-item-list.component.html',
  styleUrls: ['./daily-course-item-list.component.scss'],
})
export class DailyCourseItemListComponent implements OnInit {

  @Input() set dailyCorsoDoc(value: CorsoGiornaliero) {
    this._dailyCorsoDoc = value;
    this.setContainField();
    //Reimposto gli attributi addizionali
    this.setAdditionalAttribute();
  }

  /**
   * Per rendere le righe alternate, oltre a passare il flag
   * è necessario passare index di riga
   */
  @Input() set alternateColor(value: boolean) {
    this._alternateColor = value;
  }

  @Input() set index(value:number) {
    this._index = value;
    if (value % 2 != 0) {
      this._colorItem = 'light';
    }
    else {
      this._colorItem = 'default';
    }

  }

  @Output() OnClickItem = new EventEmitter<CorsoGiornaliero>();

  _dailyCorsoDoc: CorsoGiornaliero = new CorsoGiornaliero();
  _index: number = 0;
  _alternateColor: boolean = false;
  _containOre: boolean = false;
  _containCampo: boolean = false;
  _containTrainers: boolean = false;
  _containLivello: boolean = false;

  iconName: string;
  iconColor: string;
  _colorItem: string = 'default';

  constructor() { }

  ngOnInit() {}

  /**
   * Imposta le property che indica la presenza di campo e delle ore
   */
  setContainField():void {

    if (this._dailyCorsoDoc) {

      if (this._dailyCorsoDoc.ORELEZIONE != 0) {
          this._containOre = true;
      } 

      if (this._dailyCorsoDoc.DENOMINAZIONECAMPO && this._dailyCorsoDoc.DENOMINAZIONECAMPO.length != 0) {
            this._containCampo = true;
      }

      if (this._dailyCorsoDoc.DENOMINAZIONELIVELLO && this._dailyCorsoDoc.DENOMINAZIONELIVELLO.length != 0) {
        this._containLivello = true;
      }      

      if (this._dailyCorsoDoc.LISTTRAINERS && this._dailyCorsoDoc.LISTTRAINERS.length != 0) {
        this._containTrainers = true;
      }
    }
  }


  /**
   * Imposta parametri addizionali
   */
  setAdditionalAttribute() {
    let adesso = new Date();

    //E' presente un Corso Giornaliero
    if (this._dailyCorsoDoc) {

      this.iconName='school-outline';
      
      if (this._dailyCorsoDoc.DATAORAINIZIO && this._dailyCorsoDoc.DATAORAINIZIO > adesso) {
        //Inizierà prossimamente
        this.iconColor = 'success';
      }
      else if (this._dailyCorsoDoc.DATAORAFINE && this._dailyCorsoDoc.DATAORAFINE > adesso) {
        //Finirà prossimamente
        this.iconColor = 'success';
      }
      else {
        //Già passato
        this.iconColor = 'danger';
      }

    }
    else {
      this.iconName='school-outline';
      this.iconColor = 'success';
    }  

  }

  /**
  * Click sull'elemento (giro il click al chiamante)
  */
  onClickElement() {
      
    this.OnClickItem.emit(this._dailyCorsoDoc);
    
}  
}
