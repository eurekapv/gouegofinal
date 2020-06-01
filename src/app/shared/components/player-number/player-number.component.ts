import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-player-number',
  templateUrl: './player-number.component.html',
  styleUrls: ['./player-number.component.scss'],
})
export class PlayerNumberComponent implements OnInit {

  @Input() numPlayer: Number;
  @Output() changeNumPlayer= new EventEmitter<Number>();
  
  constructor() { }

  ngOnInit() {}

}
