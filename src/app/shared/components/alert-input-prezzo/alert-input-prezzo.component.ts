import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert-input-prezzo',
  templateUrl: './alert-input-prezzo.component.html',
  styleUrls: ['./alert-input-prezzo.component.scss'],
})
export class AlertInputPrezzoComponent implements OnInit {

  @Input() placeholder: string;
  @Input() description: string;
  @Input() btnText: string;

  @Output() onDismiss = new EventEmitter<number>();

  value: number;

  constructor() { }

  ngOnInit() {}


  onClickBtn(){
    this.onDismiss.emit(this.value);
  }

  onClickBackdrop(){
    this.onDismiss.emit(undefined);
  }

}
