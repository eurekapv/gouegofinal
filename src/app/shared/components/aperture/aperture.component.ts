import { Component, OnInit, Input } from '@angular/core';
import { AperturaLocation } from '../../../models/aperturalocation.model';


@Component({
  selector: 'app-aperture',
  templateUrl: './aperture.component.html',
  styleUrls: ['./aperture.component.scss'],
})
export class ApertureComponent implements OnInit {

  @Input() myApertura: AperturaLocation = new AperturaLocation();
  colorChip = 'primary';

  constructor() { }

  ngOnInit() {}

  getIcon() {
    let icon = 'close';
    if (this.myApertura.isOpen()) {
      icon = 'flag';
    }

    return icon;
  }

}
