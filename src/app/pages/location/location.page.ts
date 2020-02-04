import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StartService } from 'src/app/services/start.service';
import { Location } from 'src/app/models/location.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  selectedLocation: Location;
  changedLocation: Subscription;

  constructor(private router: ActivatedRoute, private startService: StartService) { }

  ngOnInit() {
    let idLocation;
    this.router.paramMap.subscribe( param => {
      
      if (param.has('locationId')) 
      {
        idLocation = param.get('locationId');
        this.changedLocation = this.startService.getLocation(idLocation).subscribe( element => {
          this.selectedLocation = element;

        })
        
      }
    })
  }
}
