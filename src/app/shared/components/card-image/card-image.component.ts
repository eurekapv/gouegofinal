import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss'],
})
export class CardImageComponent implements OnInit {

  @Input() set src(value: string) {
    this._src = value;  
  }

  @Input() set title(value: string) {
    this._title = value;  
  }

  @Input() set subtitle(value: string) {
    this._subtitle = value;  
  }

  @Input() set text(value: string) {
    this._text = value;  
  }
  
  _src: string = '';
  _title: string = '';
  _subtitle: string = '';
  _text:string = '';

  constructor() { }

  ngOnInit() {}

}
