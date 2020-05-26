import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from 'src/app/models/location.model';

@Component({
  selector: 'app-centri',
  templateUrl: './centri.component.html',
  styleUrls: ['./centri.component.scss'],
})
export class CentriComponent implements OnInit {

  @Input() location: Location = new Location();
  @Output() clickPrenota = new EventEmitter<Location>();
  @Output() clickLocation = new EventEmitter<Location>();

  constructor() {
    
    
   }

  ngOnInit() {}

  onClickFavorite()
  {
    this.location.FAVORITE=!this.location.FAVORITE;
  }

  // Lancio l'evento di Click di Prenotazione
  onClickPrenota() {
    this.clickPrenota.emit(this.location);
  }

  /**
   * Lancio l'evento di Click per la scheda Location
   */
  onClickLocation() {
    this.clickLocation.emit(this.location);
  }



}
