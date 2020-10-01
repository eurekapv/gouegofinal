import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PianificazioneCorso } from 'src/app/models/pianificazionecorso.model';

@Component({
  selector: 'app-item-calendario',
  templateUrl: './item-calendario.component.html',
  styleUrls: ['./item-calendario.component.scss'],
})
export class ItemCalendarioComponent implements OnInit {

  @Input() pianificazioneElem : PianificazioneCorso = new PianificazioneCorso()

  @Output() Click: EventEmitter<PianificazioneCorso> = new EventEmitter<PianificazioneCorso>()

  constructor() { }

  ngOnInit() {}

  onClick(){
    this.Click.emit(this.pianificazioneElem);
  }

}
