import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Articolo } from 'src/app/models/shop/articolo.model';
import { TipoArticolo } from 'src/app/models/zsupport/valuelist.model';

@Component({
  selector: 'app-table-item-articolo',
  templateUrl: './table-item-articolo.component.html',
  styleUrls: ['./table-item-articolo.component.scss'],
})
export class TableItemArticoloComponent implements OnInit {

  @Input() set itemArticolo(value: Articolo) {
    this._itemArticolo = value;
  }
  @Output() clickArticolo = new EventEmitter<Articolo>();

  _itemArticolo: Articolo = new Articolo(true);

  
  constructor() { }

  ngOnInit() {}

  setPlaceholder(ref: HTMLImageElement){
    ref.src = '/assets/commercial/item_placeholder.png';
  }

  /**
  * Emetto l'evento di click
  */
  onClickArticolo() {
    this.clickArticolo.emit(this._itemArticolo);
  }
}
