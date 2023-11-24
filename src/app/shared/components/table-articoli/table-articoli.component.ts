import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Articolo } from 'src/app/models/shop/articolo.model';
import { TipoArticolo } from 'src/app/models/zsupport/valuelist.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-table-articoli',
  templateUrl: './table-articoli.component.html',
  styleUrls: ['./table-articoli.component.scss'],
})
export class TableArticoliComponent implements OnInit {


  @Input() set typeArticolo(value: TipoArticolo) {
    this._typeArticolo = value;
  }

  @Input() set listArticoli(value: Articolo[]) {
    this._listArticoli = value;
    //Ricevuti i dati
    this._received = true;
  }
  @Output() clickArticolo = new EventEmitter<Articolo>();

  _listArticoli: Articolo[] = [];
  _typeArticolo: TipoArticolo;
  _received = false;
  srcImageEmpty = environment.additionalConfig.defaultShopImage;

  /**
   * Torna un boolean ad indicare se deve mostrare la card di NoProduct
   */
  get flagEmptyCard(): boolean {
    let showCardEmpty = false;

    if (this._received == false) {
      //Non ho ricevuto i dati
      //Non so ancora
      showCardEmpty = false;
    }
    else {
      //Dati ricevuti ma la lista è vuota 
      if (this._listArticoli.length == 0) {
        showCardEmpty = true;
      }

    }

    return showCardEmpty;
  }


  constructor() { }

  ngOnInit() {}

  /**
   * Emetto l'evento di click
   */
  onClickArticolo(articoloSelected: Articolo) {
    this.clickArticolo.emit(articoloSelected);
  }

  /**
   * Ritorna una Etichetta ad indicare l'articolo
   * @param useMultiple Utilizza multiplo
   */
  labelFor(useMultiple = false) {
    let label: string = '';

    if (useMultiple == false) {
      
      switch (this._typeArticolo) {
        case TipoArticolo.prodotto:
            label = 'prodotto';
          break;

        case TipoArticolo.servizio:
            label = 'servizio';
          break;          

        case TipoArticolo.pacchettoOre:
            label = 'pacchetto ore';
          break;          
      
        default:
            label = 'articolo';
          break;
      }

    }
    else {
      switch (this._typeArticolo) {
        case TipoArticolo.prodotto:
            label = 'prodotti';
          break;

        case TipoArticolo.servizio:
            label = 'servizi';
          break;          

        case TipoArticolo.pacchettoOre:
            label = 'pacchetti ore';
          break;          
      
        default:
            label = 'articoli';
          break;
      }
    }

    return label;
  }

}
