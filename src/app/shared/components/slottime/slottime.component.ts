import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SlotTime } from 'src/app/models/imdb/slottime.model';
import { StatoSlot } from 'src/app/models/valuelist.model';

@Component({
  selector: 'app-slottime',
  templateUrl: './slottime.component.html',
  styleUrls: ['./slottime.component.scss'],
})
export class SlottimeComponent implements OnInit {

  @Input() mySlot: SlotTime;
  @Output() clickSlot = new EventEmitter<SlotTime>();
  @Input() captionBtn = ''; //Caption da visualizzare nel bottone
  @Input() readOnly = false; //Gli slot sono ReadOnly

  constructor() { }

  ngOnInit() {}

  getClassButton() {
    let myClass = '';
    if (this.readOnly) {
      myClass = "slot-read-only";
    }
    else {
      if (this.mySlot.STATO == StatoSlot.occupato || this.mySlot.STATO == StatoSlot.chiuso) {
        myClass = 'slot-busy';
      }
      else {
        // Button utilizzabile
        if (this.mySlot.SELECTED) {
          myClass = 'slot-selected';
        }
        else {
          myClass = 'slot-free';
        }
      }
    }

    

    return myClass;
  }

  getDisableButton() {

    let disable = false;

    if (this.mySlot.STATO == StatoSlot.occupato || this.mySlot.STATO == StatoSlot.chiuso || this.readOnly) {
      disable = true;
    }

    return disable;
  }

  /**
   * Emetto un evento di scelta slot
   */
  chooseSlot() {
    this.clickSlot.emit(this.mySlot);
  }

}
