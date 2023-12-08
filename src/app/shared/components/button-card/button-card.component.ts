import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ButtonCard } from 'src/app/models/zsupport/buttoncard.model';

@Component({
  selector: 'app-button-card',
  templateUrl: './button-card.component.html',
  styleUrls: ['./button-card.component.scss'],
})
export class ButtonCardComponent implements OnInit {

  @Input() set myButtonCard(value: ButtonCard) {

    if (value) {
      this._buttonCard = value;
      this._iconLink = value.iconLink;
      this._disabled = value.disabled;
      this._slotIcon = value.sloticon;
      this._nameIcon = value.nameicon;
      this._color = value.color;
      this._backcolor = (value.backColor && value.backColor.length != 0 ? value.backColor : 'default');
      this._title = value.title;
      this._subtitle = value.subtitle;
      this._text = value.text;
    }
  }

   //Small Version usa H2 e P invece di H1 e H3
  _smallVersion = false;
  @Input() set smallVersion(value: boolean) {
    this._smallVersion = value;
  }



  _buttonCard: ButtonCard = new ButtonCard();

  _iconLink: boolean = false;
  @Input() set iconLink(value: boolean) {
    this._iconLink = value;
    this._buttonCard.iconLink = value;
  }
  
  _disabled: boolean = false;
  @Input() set disabled(value: boolean) {
    this._disabled = value;
    this._buttonCard.disabled = value;
  }

  _slotIcon: string = '';
  @Input() set slotIcon(value: string) {
    this._slotIcon = value;
    this._buttonCard.sloticon = value;
  }

  _nameIcon: string = '';
  @Input() set nameIcon(value: string) {
    this._nameIcon = value;
    this._buttonCard.nameicon = value;
  }

  _color: string = '';
  @Input() set color(value: string) {
    this._color = value;
    this._buttonCard.color = value;
  }

  _backcolor: string = 'default';
  @Input() set backcolor(value: string) {
    value = (value && value.length != 0 ? value : 'default');
    this._backcolor = value;
    this._buttonCard.backColor = value;
  }  

  _title: string = '';
  @Input() set title(value: string) {
    this._title = value;
    this._buttonCard.title = value;
  }

  _subtitle: string = '';
  @Input() set subtitle(value: string) {
    this._subtitle = value;
    this._buttonCard.subtitle = value;
  }

  _text: string = '';
  @Input() set text(value: string) {
    this._text = value;
    this._buttonCard.text = value;
  }  

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
