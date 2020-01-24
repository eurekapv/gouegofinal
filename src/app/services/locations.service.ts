import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Location } from '../models/location.model';
import { StartConfiguration } from '../models/start-configuration.model';
import { ApicallService } from './apicall.service';
import { StartService } from './start.service';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  //Elenco Locations
  private _listLocation = new BehaviorSubject<Location[]>([]);
  private startConfig: StartConfiguration;

  get listLocation() {
    return this._listLocation.asObservable();
  }

  constructor(private apiService: ApicallService, 
              private startService: StartService) { 

    //Sottoscrivo la ricezione
    this.startService.startConfig.subscribe( element => {
      this.startConfig = element;
    });
  }

  requestLocation(idArea: string) {
    
  }
}
