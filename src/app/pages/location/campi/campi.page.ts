import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Location } from '../../../models/location.model';
import { StartService } from 'src/app/services/start.service';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Campo } from 'src/app/models/campo.model';
import { Sport } from 'src/app/models/sport.model'
import { CampoSport } from 'src/app/models/camposport.model';

  
@Component({
  selector: 'app-campi',
  templateUrl: './campi.page.html',
  styleUrls: ['./campi.page.scss'],
})
export class CampiPage implements OnInit, OnDestroy {

  @Input() myLocation: Location;
  listenLocation: Subscription;
  listSport: Sport[]=[];

  constructor(private startService: StartService, 
              private mdlController: ModalController) { }

  ngOnInit() {

    //Sottoscrivo a ricevere le infomazioni aggiuntive
    this.listenLocation = this.startService.requestLocationCampiSport(this.myLocation)
                                            .subscribe(filledLocation => {
                      this.myLocation = filledLocation;
    });

    
  }

  ngOnDestroy() {
    if (this.listenLocation) {
      this.listenLocation.unsubscribe();
    }
  }

  /**
   * Chiude la videata
   */
  close() {
    this.mdlController.dismiss();
  }

  /** 
   * Cambia l'espansione del campo
   */
  switchExpansion(campo: Campo) {
    campo.selected = !campo.selected;
  }


  
  /**
   * Dato un oggetto campo, chiama il servizio e ritorna l'icona
   * @param campoSport L'oggetto campo
   */
  getIconSport(campoSport: CampoSport){
    if (campoSport){
      return this.startService.getSportIcon(campoSport.IDSPORT);
    }
  }

}
