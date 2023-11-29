import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DetailCarrello } from 'src/app/models/shop/detail-carrello.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart-item-row',
  templateUrl: './cart-item-row.component.html',
  styleUrls: ['./cart-item-row.component.scss'],
})
export class CartItemRowComponent implements OnInit {

  public detailDoc: DetailCarrello;
  public srcImage: string = '';
  public flagWithImage: boolean = false; //Il rigo possiede una immagine
  fallbackUrl = environment.additionalConfig.defaultShopImage;

  @Input() set rowDetail(value:DetailCarrello) {
    this.detailDoc = value;
    if (value.PATHCOVERIMAGE && value.PATHCOVERIMAGE.length != 0) {
      this.srcImage = value.PATHCOVERIMAGE;
      this.flagWithImage = true;
    }
    else {
      this.srcImage = '';
      this.flagWithImage = false;
    }
  }

  @Output() onChangeQuantity = new EventEmitter<DetailCarrello>();
  @Output() onDeleteRequest = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}


  /**
   * Click interfaccia di modifica quantita
   * @param posOrNeg Valore negativo sottrae 1, Valore positivo aumenta di 1
   */
  onClickChangeQuantity(posOrNeg: number) {

    let newValue = this.detailDoc.QUANTITA;
    if (posOrNeg > 0) {
      newValue++;
    }
    else {
      newValue--;
    }

    if (newValue > 0) {
      //Creo un documento fittizio con idArticolo e Quantita
      let sampleRow: DetailCarrello = new DetailCarrello();
      sampleRow.ID = this.detailDoc.ID;
      sampleRow.QUANTITA = newValue;
      this.onChangeQuantity.emit(sampleRow);
    }
  }

  /**
   * Richiesta la cancellazione dell'elemento
   */
  onClickRequestDelete() {
    //Giro la richiesta al parent
    this.onDeleteRequest.emit(this.detailDoc.ID);
  }

}
