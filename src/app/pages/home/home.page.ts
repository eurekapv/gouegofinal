import { Component, OnDestroy } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Subscription } from 'rxjs';
import { AreeService } from 'src/app/services/aree.service';
import { Area } from 'src/app/models/area.model';
import { Location } from 'src/app/models/location.model';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy{

  startConfig: StartConfiguration;
  startConfigListen: Subscription;

  // Elenco delle Aree
  listAree: Area[];
  listAreeListen: Subscription;

  // Elenco delle Location da mostrare
  listLocation: Location[];
  listLocationListen: Subscription;


  constructor(private startService: StartService,
              private areeService: AreeService,
              private locationService: LocationsService) {

    // Parametri di Configurazione Iniziale Applicazione
    this.startConfigListen = this.startService.startConfig
      .subscribe(element => {
        this.startConfig = element;
      });
    
    // Sottoscrivo alla ricezione delle Aree
    this.listAreeListen = this.areeService.listAree.subscribe(aree => {
      this.listAree = aree;
    });

    // Sottoscrivo alla ricezione delle Locations
    this.listLocationListen = this.locationService.listLocation.subscribe(locations => {
      this.listLocation = locations;
    })
  }

  ngOnDestroy() {
    if (this.startConfigListen) {
      this.startConfigListen.unsubscribe();
    }

    if (this.listAreeListen) {
      this.listAreeListen.unsubscribe();
    }

    if (this.listLocation) {
      this.listLocationListen.unsubscribe();
    }
  }

}
