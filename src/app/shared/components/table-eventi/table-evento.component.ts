import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Evento } from 'src/app/models/evento.model';

@Component({
  selector: 'app-table-eventi',
  templateUrl: './table-eventi.component.html',
  styleUrls: ['./table-eventi.component.scss'],
})
export class TableEventiComponent implements OnInit {

  @Input() set listEventi(value: Evento[]) {
    if (value) {
      this._listEventi = value;
    }
  }
  @Output() clickEvento = new EventEmitter<Evento>();

  _listEventi: Evento[] = [];

  constructor() { }

  ngOnInit() {}


  /**
   * Emetto l'evento di click
   */
  onClickEvento(eventoSelected: Evento) {
    this.clickEvento.emit(eventoSelected);
  }

}
