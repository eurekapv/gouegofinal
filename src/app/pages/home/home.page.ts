import { Component, OnDestroy, OnInit } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Subscription } from 'rxjs';

import { Area } from 'src/app/models/area.model';
import { Location } from 'src/app/models/location.model';

import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{

  startConfig: StartConfiguration;
  startConfigListen: Subscription;

  // Elenco delle Aree
  listAree: Area[];
  listAreeListen: Subscription;

  // Elenco delle Location da mostrare
  listLocation: Location[];
  listLocationListen: Subscription;


  constructor(private startService: StartService,
              private actionSheetController: ActionSheetController) {

    // Parametri di Configurazione Iniziale Applicazione
    this.startConfigListen = this.startService.startConfig
      .subscribe(element => {
        this.startConfig = element;
      });
    
    // Sottoscrivo alla ricezione delle Aree
    this.listAreeListen = this.startService.listAree.subscribe(aree => {
      this.listAree = aree;
      
    });

    // Sottoscrivo alla ricezione delle Locations
    this.listLocationListen = this.startService.listLocation.subscribe(locations => {
      this.listLocation = locations;
      
    })
  }

  ngOnInit() {

    this.presentActionSheet();
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

  //funzione per mostrare il popup di scelta campo
  async presentActionSheet()
  {
    let buttonsArray: any[]=[]
    let singleButton: any;
    //popolo l'array di bottoni con i nomi delle aree operative
    for (const iterator of this.listAree) {
      singleButton={
        text: iterator.DENOMINAZIONE,
        icon: 'pin',
        handler: ()=>{
          //non so cosa si debba fare nell'handler
          console.log('è stata scelta ' + iterator.DENOMINAZIONE)
        }
      }

      buttonsArray.push(singleButton);
    }
    const actionSheet = await this.actionSheetController.create
    ({
      header: 'Scegli l\'Area di tua preferenza:',
      buttons: buttonsArray      
    });
    await actionSheet.present();
  }

}
