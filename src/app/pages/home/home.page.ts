import { Component, OnDestroy, OnInit } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Subscription } from 'rxjs';

import { Area } from 'src/app/models/area.model';
import { Location } from 'src/app/models/location.model';

import { ActionSheetController } from '@ionic/angular';
import { Attivita, SettoreAttivita } from 'src/app/models/attivita.model';

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

  //Elenco delle prossime attività (per ora creato a mano)
  listImpegni: Attivita[]=[];

  //Area Selezionata VINENE VALORIZZATA CON IL PULSANTE 'CAMBIA', MA BISOGNA CAPIRE COME VALORIZZARLA ALL'INIZIO
  selectedArea=new Area;

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

    
    //visto che il vettore di impegni ancora non è popolato, lo popolo manualmente per provare
    //per ora lo lascio commentato, poi si potrà eliminare
    /*let prossimoImpegno=new Attivita;
    prossimoImpegno.DATAORAINIZIO=new Date(2020, 2, 12, 21,15, 0);
    prossimoImpegno.DESCRIZIONE="wash"
    prossimoImpegno.SETTORE=SettoreAttivita.settoreCorso;
    this.listImpegni.push(prossimoImpegno);
    prossimoImpegno=new Attivita;
    prossimoImpegno.DATAORAINIZIO=new Date(2020, 2, 12, 21,15, 0);
    prossimoImpegno.DESCRIZIONE="lore"
    prossimoImpegno.SETTORE=SettoreAttivita.settorePrenotazione;
    this.listImpegni.push(prossimoImpegno);*/
    

  }

  ngOnInit() {
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
          
          console.log('è stata scelta ' + iterator.DENOMINAZIONE);

          //Chiedo al servizio di cambiare l'Area Selezionata
          this.startService.changeIdAreaSelected(iterator.ID);
          this.selectedArea=iterator;
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
