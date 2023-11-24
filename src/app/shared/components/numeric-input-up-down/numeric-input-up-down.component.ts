import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-numeric-input-up-down',
  templateUrl: './numeric-input-up-down.component.html',
  styleUrls: ['./numeric-input-up-down.component.scss'],
})
export class NumericInputUpDownComponent implements OnInit {

  valueDisplay: number;
  buttonColor: string = 'success';
  buttonTrashShow: boolean = true;

  sizeColCount = 6;
  sizeColTrash = 6;
  
  @Output() onChangeQuantity = new EventEmitter<number>();
  @Output() onDeleteRequest = new EventEmitter<void>();
  
  /**
   * Numero da visualizzare
   */
  @Input() set displayNumber(numero: number) {
    this.valueDisplay = numero;
    console.log(this.valueDisplay)
  }

  /**
   * Visualizza il pulsante Delete
   */
  @Input() set showDelete(value: boolean) {
    this.buttonTrashShow = value;
    if (value) {
      this.sizeColCount = 6;
      this.sizeColTrash = 6;
    }
    else {
      this.sizeColCount = 12;
      this.sizeColTrash = 0;
    }
  }

  /**
   * Colore dei Button Up And Down
   */
  @Input() set colorButton(color: string) {
    if (color && color.length != 0) {
      this.buttonColor = color;
    }
  }


  
  constructor() { }

  ngOnInit() {}

  /**
   * Click interfaccia di modifica quantita
   * @param posOrNeg Valore negativo sottrae 1, Valore positivo aumenta di 1
   */
  onClickChangeQuantity(posOrNeg: number) {

    this.onChangeQuantity.emit(posOrNeg);
  }

  /**
   * Richiesta la cancellazione dell'elemento
   */
  onClickRequestDelete() {
    //Giro la richiesta al parent
    this.onDeleteRequest.emit();
  }  

}
