import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyDateTime } from 'src/app/library/models/mydatetime.model';

@Component({
  selector: 'app-durata-chooser',
  templateUrl: './durata-chooser.component.html',
  styleUrls: ['./durata-chooser.component.scss'],
})
export class DurataChooserComponent implements OnInit {

  @Input() set activeDurata(durata: number) {
    let label = '';
    this._activeDurata = durata;

    if (this.arDurate) {
      
      //Sembra che questa durata non ci sia la inserisco
      if (this.arDurate.findIndex(elItem => {return elItem.durata == durata}) == -1) {
        label = MyDateTime.getLabelDurata(durata,true);
        this.arDurate.push({durata: durata, text: label})
      }
    }
  }

  @Input() set color(value: string) {
    this._color = value;
  }

  @Input() set size(value: string) {
    this._size = value;
  }  

  @Output() click = new EventEmitter<number>();

  _color: string = 'primary';
  _size: string = '';
  _activeDurata: number; //Durata Attiva

  //Elenco delle durate
  arDurate: IDurataChooser [] = [];

  constructor() {
    this.prepareDurate();
   }

  ngOnInit() {}

  /**
   * Preparo Array da mostrare
   */
  prepareDurate(): void {
    this.arDurate = [{
      text: '1/2 Ora',
      durata: 0.5
    },
    {
      text: '1 Ora',
      durata: 1
    },
    {
      text: '1 Ora e 1/2',
      durata: 1.5
    },
    {
      text: '2 Ore',
      durata: 2
    },
    {
      text: '2 Ore e 1/2',
      durata: 2.5
    },
    {
      text: '3 Ore',
      durata: 3
    },
    {
      text: '3 Ore e 1/2',
      durata: 3.5
    },
    {
      text: '4 Ore',
      durata: 4
    },
    {
      text: '4 Ore e 1/2',
      durata: 4.5
    },
    {
      text: '5 Ore',
      durata: 5
    }]
  }

  /**
   * Effettuata una scelta
   * @param item 
   */
  onChooseItem(item: IDurataChooser): void {
    if (item) {
      this._activeDurata = item.durata;
      this.click.emit(item.durata);
    }
  }
}

export interface IDurataChooser {
  text: string,
  durata: number
}
