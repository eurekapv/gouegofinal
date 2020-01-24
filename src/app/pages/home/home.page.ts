import { Component, OnDestroy } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Subscription } from 'rxjs';
import { AreeService } from 'src/app/services/aree.service';
import { Area } from 'src/app/models/area.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy{

  startConfig: StartConfiguration;
  startConfigListen: Subscription;

  listAree: Area[];
  listAreeListen: Subscription;


  constructor(private startService: StartService,
              private areeService: AreeService) {

    // Parametri di Configurazione Iniziale Applicazione
    this.startConfigListen = this.startService.startConfig
      .subscribe(element => {
        this.startConfig = element;
      });
    
    // Sottoscrivo alla ricezione delle Aree
    this.listAreeListen = this.areeService.listAree.subscribe(aree => {
      this.listAree = aree;
    });
  }

  ngOnDestroy() {
    if (this.startConfigListen) {
      this.startConfigListen.unsubscribe();
    }

    if (this.listAreeListen) {
      this.listAreeListen.unsubscribe();
    }
  }

}
