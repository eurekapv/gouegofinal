import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDDocument } from 'src/app/library/models/iddocument.model';
import { ModesCalendar } from 'src/app/library/models/mydatetime.model';
import { LogApp } from 'src/app/models/log.model';
//import { format, utcToZonedTime } from 'date-fns-tz';


@Component({
  selector: 'app-dtinput',
  templateUrl: './dtinput.component.html',
  styleUrls: ['./dtinput.component.scss'],
})
export class DtinputComponent implements OnInit {

  //Titolo da applicare eventualmente alla form
  @Input() set title(value:string) {
    this._title = value;
    if (value.length != 0) {
      this._showCalendarTitle = true;
    }

  }

  //Valore dell'attributo lines relativo a un ion-item (full default): full, none, inset
  @Input() set itemLines(value: string) {
    this._itemLines = value;
  }

  /**
   * Eventuale colore dell'Item
   */
  @Input() set itemColor(value: string) {
    this._itemColor = value;
  }
  
  /**
   * Freccia visualizzata a destra dell'item
   */
  @Input() set itemDetail(value: boolean) {
    this._itemDetail = value;
  }

  //Etichetta impostata sulla riga dell'Item
  @Input() set label(value: string) {
    this._label = value;
  }

  @Input() set labelPlacement(value:string) {
    this._labelPlacement = value;
  }

  /**
   * Classe applicata al testo con la data formattata
   * per impostare l'allineamento
   * @deprecated 
   */
  @Input() set textAlignmentRight(value: boolean) {

    if (value) {
      this._slotText = 'end';
    }
    else {
      this._slotText = '';
    }
  }


  /**
   * Nome Icona da visualizzare
   */
  @Input() set iconName(value: string) {
    this._iconName = value;
  }

  /**
   * Colore Icona
   */
  @Input() set iconColor(value: string) {
    this._iconColor = value;
  }

  /**
  * Slot Icona
  */
  @Input() set iconSlot(value: string) {
      this._iconSlot = value;
    }

  /**
   * Valore attuale della Data/Ora
   */
  @Input() set actualDate(value: Date) {

    //Valore della Data in formato Date
    this._actualDate = value;
  }

  //Valore di ritorno della data
  @Output() actualDateChange = new EventEmitter<Date>();
  //E' possibile utilizzare un ngModel sul chiamante tipo
  //[(actualDate)] = "una variabile con la data"

  //Mashera per la formattazione dei dati
  @Input() set maskFormat(value: string) {
    this._maskFormat = value;
  }

  //Modo visualizzazione calendario
  @Input() set calendarMode(value: ModesCalendar) {
    this._calendarMode = value;
    this.initMaskFromMode();
  }  

  /**
   * Calendar visualizzato in modalità ReadOnly
   */
  @Input() set readonly(value: boolean) {
    this._readonly = value;
  } 
  
  
  /**
   * Imposta la data massima selezionabile
   * Data formattata come stringa ISO
   */
  @Input() set isoMaxDate(value: string) {
    this._isoMaxDate = value;
  }


  _itemColor = ''; //Eventuale colore applicato all'Item
  _itemLines = ''; //Valore da applicare ad ion-item lines = none, full, inset
  _itemDetail = false; //Valore TRUE-FALSE
  _iconName: string = '';
  _iconColor: string = '';
  _iconSlot: string = '';
  _label: string = '';
  _labelPlacement: string = 'fixed';
  _slotText: string = '';
  _title: string = '';
  _maskFormat: string;
  _actualDate: Date; 
  _isoMaxDate: string = '2099-12-31T23:59:59';
  
  
  _presentation: '';
  _componentId: string = '';
  _calendarMode: ModesCalendar; 
  _readonly: boolean;
  _showCalendarTitle: boolean; //Flag per mostrare il titolo

  constructor() { 
    this._componentId = new IDDocument().newID();
    this._itemDetail = false;
    this._itemLines = 'full';
    this._iconColor = 'primary';
    this._iconSlot = 'start';
    this._maskFormat ='dd/MM/yyyy';
    this._calendarMode = ModesCalendar.date;
    this._readonly = false;
    this._showCalendarTitle = false;
    this._slotText = ''; //Se vale end allinea a destra

    this.initMaskFromMode();
  }

  ngOnInit() {}


  get withLabel(): boolean {
    let result = false;
    if (this._label && this._label.length != 0) {
      result = true;
    }

    return result;
  }

  get withIcon(): boolean {
    let result = false;
    if (this._iconName && this._iconName.length != 0) {
      result = true;
    }

    return result;
  }  


  /**
   * Ritorna la data attuale in versione formattata per IonDateTime
   */
   get formattedDateTimeString(): string {
    let frmDate: string;

    if (this._actualDate) {
      let off = this._actualDate.getTimezoneOffset();
      let myDate = new Date();
      myDate.setTime(this._actualDate.getTime() - (off * 60 * 1000));
      frmDate = myDate.toISOString();
    }
    else {
      frmDate = ''
    }

    return frmDate;
  }  

  /**
   * Inizializza la maschera di visuaizzare sulla base del Mode Calendar
   * per usarlo con date-fns
   */
   initMaskFromMode() {
    let myMask = '';

    switch (this._calendarMode) {
      case ModesCalendar.date:
          myMask = 'dd/MM/yyyy';
        break;

      case ModesCalendar.dateTime:
          myMask = 'dd/MM/yyyy H:mm';
        break;

      case ModesCalendar.month:
        myMask = 'MMMM';
        break;

      case ModesCalendar.monthYear:
        myMask = 'MMMM yyyy';
        break; 

      case ModesCalendar.yearMonth:
        myMask = 'yyyy MMMM';
        break;        

      case ModesCalendar.time:
        myMask = 'H:mm';
        break;   
        
      case ModesCalendar.timeDate:
        myMask = 'H:mm dd/MM/yyyy';
        break;
        
      case ModesCalendar.year:
        myMask = 'yyyy';
        break;

      default:
        break;
    }

    this._maskFormat = myMask;
    
  }

  

  /**
   * Data modificata nel componente DateTime
   * @param valueTz Valore Data/ora nel TimeZone
   */
  dateChanged(valueTz: any) {

    //Questa è la data che emettiamo con il timezone
    let myDateToEmit: Date = new Date(valueTz);
    

    let off = myDateToEmit.getTimezoneOffset();
    let myCorrectionDate = new Date();
    myCorrectionDate.setTime(myDateToEmit.getTime() + (off * 60 * 1000));


    if (this._actualDate.getTime() != myCorrectionDate.getTime()) {
      this.actualDateChange.emit(myDateToEmit);
      LogApp.consoleLog('Emetto la data ' + myDateToEmit.toDateString());
    }



    

  }
}

