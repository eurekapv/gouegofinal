import { Component, OnInit, Input } from '@angular/core';
import { Location } from 'src/app/models/location.model';

@Component({
  selector: 'app-centri',
  templateUrl: './centri.component.html',
  styleUrls: ['./centri.component.scss'],
})
export class CentriComponent implements OnInit {

  @Input() location: Location = new Location();

  constructor() {
    
    
   }

  ngOnInit() {}

  onClickFavorite()
  {
    this.location.FAVORITE=!this.location.FAVORITE;
  }

}
