import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import {MaskitoModule} from '@maskito/angular';
import type {MaskitoElementPredicateAsync, MaskitoOptions} from '@maskito/core';
import {maskitoNumberOptionsGenerator} from '@maskito/kit';


@Component({
  selector: 'app-alert-input-prezzo',
  templateUrl: './alert-input-prezzo.component.html',
  styleUrls: ['./alert-input-prezzo.component.scss'],
})
export class AlertInputPrezzoComponent implements OnInit {
  @ViewChild('inputDom', {static:true}) inputDom: IonInput;
  @Input() placeholder: string;
  @Input() description: string;
  @Input() textButton: string;
  @Input() set numberValue(value:number) {
    this._numberValue = value;
  }
  @Input() automaticValue: number; //Valore atteso da inserire
  

  @Output() onChangeValue = new EventEmitter<number>();

  _numberValue: number = 0.00;
  

  optionMask: MaskitoOptions = maskitoNumberOptionsGenerator({
    decimalSeparator: ',',
    thousandSeparator: '.',
    precision: 2,
  });

  readonly maskPredicate: MaskitoElementPredicateAsync = async (el) => (el as HTMLIonInputElement).getInputElement();
  //TODO: MIGLIORARE LA FUNZIONE DI INPUT DELL'IMPORTO
  constructor() { }

  ngOnInit() {
    this.setAligmentInput();
  }

  /**
   * Allineamento INPUT
   */
  setAligmentInput() {

    this.inputDom.getInputElement().then(htmlItem => {
      htmlItem.style.textAlign = 'right';
    })
  }

  /**
   * Visualizza il bottone di comando
   */
  get showButtonCommand(): boolean {
    let flag = false;
    if (this.automaticValue && 
        this.textButton && 
        this.textButton.length != 0) {
      flag = true;
    }

    return flag;
  }

  /**
   * Modifica del valore contenuto nell'input
   */
  _onChangeValue() {
    this.onChangeValue.emit(this._numberValue);
  }

  onClickButton() {
    if (this.automaticValue) {
      this._numberValue = this.automaticValue;
      this._onChangeValue();
    }
  }


}
