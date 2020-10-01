import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemCalendario } from 'src/app/models/itemCalendario.model';
import { PianificazioneCorso } from 'src/app/models/pianificazionecorso.model';

@Component({
  selector: 'app-item-calendario',
  templateUrl: './item-calendario.component.html',
  styleUrls: ['./item-calendario.component.scss'],
})
export class ItemCalendarioComponent implements OnInit {

  @Input() params : ItemCalendario = new ItemCalendario()

  @Output() click: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {}

  onClick(){
    this.click.emit();
  }


}
