import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ButtonCard } from 'src/app/models/buttoncard.model';

@Component({
  selector: 'app-button-card',
  templateUrl: './button-card.component.html',
  styleUrls: ['./button-card.component.scss'],
})
export class ButtonCardComponent implements OnInit {

  @Input() myButtonCard: ButtonCard = new ButtonCard();
  @Input() smallVersion = false; //Small Version usa H2 e P invece di H1 e H3
  @Output() clickElement = new EventEmitter<ButtonCard>();
  
  constructor() { }

  ngOnInit() {}

  /**
   * Click sull'elemento
   * @param objButtonCard Card scelta
   */
  onClickElement(objButtonCard: ButtonCard) {
    if (objButtonCard) {
      this.clickElement.emit(objButtonCard);
    }
  }

}
