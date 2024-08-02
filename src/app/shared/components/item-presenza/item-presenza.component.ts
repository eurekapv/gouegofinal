import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyDateTime, TypePeriod } from 'src/app/library/models/mydatetime.model';
import { CorsoPresenze } from 'src/app/models/corso/corsopresenze.model';
import { ModalitaIscrizione } from 'src/app/models/zsupport/valuelist.model';

@Component({
  selector: 'app-item-presenza',
  templateUrl: './item-presenza.component.html',
  styleUrls: ['./item-presenza.component.scss'],
})
export class ItemPresenzaComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  _itemPresenza: CorsoPresenze;
  _canUpdate: boolean = false;
  _rowNumber: number = 1;
  _classGrid: string = 'row-dispari';
  _modoIscrizione: ModalitaIscrizione = ModalitaIscrizione.ModalitaAPeriodo;
  _totMinutiPacchetto: number = 0;
  _showPacchetti: boolean = false;

  @Input() set itemPresenza(value: CorsoPresenze) {
    this._itemPresenza = value;
  }

  @Input() set canUpdate(value: boolean) {
    this._canUpdate = value;
  }

  /**
   * Specifica se il corso è a giornata o a periodo
   */
  @Input() set modoIscrizione(value: ModalitaIscrizione) {
    this._modoIscrizione = value;
    if (this._modoIscrizione == ModalitaIscrizione.ModalitaAGiornata) {
      this._showPacchetti = true;
    }
    else {
      this._showPacchetti = false;
    }
  }

  @Input() set totMinutiPacchetto(value: number) {
    this._totMinutiPacchetto = value;
  }

  @Output() click: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Imposta il numero della riga con un base 1
   * @param value Numero della riga in arrivo come Base 0
   */
  @Input() set rowNumber(value: number) {
    this._rowNumber = value + 1;
    
    if (this._rowNumber % 2 == 0) {
      this._classGrid = 'row-pari'
    }
    else {
      this._classGrid = 'row-dispari'
    }
  }


  /**
   * Ritorna l'icona da impostare per la presenza
   */
  get iconPresenza():string {
    let iconName = '';
    iconName = 'remove-circle-outline';

    if (this._itemPresenza) {
      if (this._itemPresenza.PRESENTE != null && this._itemPresenza.PRESENTE != undefined) {
        if (this._itemPresenza.PRESENTE) {
          iconName = 'person';
        }
        else {
          iconName = 'person-remove';
        }
      }
    }

    return iconName;
  }

  /**
   * Ritorna il colore da ritornare per la presenza
   */
  get colorPresenza():string {
    let colorName = '';
    colorName = 'warning';

    if (this._itemPresenza) {
      if (this._itemPresenza.PRESENTE != null && this._itemPresenza.PRESENTE != undefined) {
        if (this._itemPresenza.PRESENTE) {
          colorName = 'success';
        }
        else {
          colorName = 'danger';
        }
      }
    }

    return colorName;
  }  

  /**
   * Ritorna il colore da assegnare al certificato
   * @param presenza 
   * @returns 
   */
  get coloreCertificato(): string{
    let adesso: Date;
    let fra7Giorni: Date;
    let color: string;

    adesso = new Date();
    fra7Giorni = MyDateTime.calcola(adesso, 7 , TypePeriod.days);

    if (this._itemPresenza) {

      /*E' presente una data Certificato Medico */
      if (this._itemPresenza.DATACERTIFICATOMEDICO) {
        
        if (MyDateTime.isBefore(this._itemPresenza.DATACERTIFICATOMEDICO, adesso)) {
          //Colore Danger per certificato scaduto
          color = 'danger';
        }
        else if (MyDateTime.isBefore(this._itemPresenza.DATACERTIFICATOMEDICO, fra7Giorni)) {
          //Scade tra 7 giorni
          color = 'warning';
        }
        else {
          color = 'primary';
        }
      }
      else{
        color = 'danger';
      }

    }
    else {
      color = 'primary'
    }


    return color;
  }  
}
