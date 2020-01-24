import { Component, OnInit, Input } from '@angular/core';
import { Location } from 'src/app/models/location.model';

@Component({
  selector: 'app-centri',
  templateUrl: './centri.component.html',
  styleUrls: ['./centri.component.scss'],
})
export class CentriComponent implements OnInit {

  location: Location;

  constructor() {
    this.location=new Location;
    this.location.COMUNE='Milano';
    this.location.DENOMINAZIONE="Washington"
    this.location.INDIRIZZO='Via Washington 33'
    this.location.IMAGEURL='http://www.openbeachvolley.com/milano/wp-content/uploads/modi-1-500x500.jpg'
    this.location.FAVORITE=false;
    
   }

  ngOnInit() {}

  onClickFavorite()
  {
    this.location.FAVORITE=!this.location.FAVORITE;

  }

}
