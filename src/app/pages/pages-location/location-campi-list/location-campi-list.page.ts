import { Component, OnInit, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Location } from '../../../models/struttura/location.model';
import { StartService } from 'src/app/services/start.service';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Campo } from 'src/app/models/struttura/campo.model';
import { Sport } from 'src/app/models/archivi/sport.model'
import { CampoSport } from 'src/app/models/struttura/camposport.model';
import { Swiper, SwiperOptions } from 'swiper';


@Component({
  selector: 'app-campi-new',
  templateUrl: './location-campi-list.page.html',
  styleUrls: ['./location-campi-list.page.scss'],
})
export class LocationCampiListPage implements OnInit {
  myLocation: Location;
  listenLocation: Subscription;
  listSport: Sport[]=[];
  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  @Input() set location(value:Location) {
    this._location = value;
    if (this._location.CAMPO && this._location.CAMPO.length != 0) {
      this._listAvailableCampi = this._location.CAMPO;
      this._flagAvalaibleCampi = true;
      //Richiedo le informazioni degli Sport
      this.requestSports();
    }
    else {
      this._flagAvalaibleCampi = false;
      this._listAvailableCampi = [];
    }
  }
  _location: Location;
  _listAvailableCampi: Campo[] = [];
  _flagAvalaibleCampi: boolean = false;

  public sliderOpts: SwiperOptions = {
    slidesPerView: 2.3,
    spaceBetween: 5
  }

  




  constructor(private startService: StartService, 
              private mdlController: ModalController) { }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    if (this.listenLocation) {
      this.listenLocation.unsubscribe();
    }
  }

  /**
   * Effettuo la richiesta per ottenere gli sport
   */
  requestSports() {
    //Sottoscrivo a ricevere le infomazioni aggiuntive
    this.listenLocation = this.startService.requestLocationCampiSport(this._location)
                                            .subscribe(incomingLocation => {
                                                  //Reimposto la location con i campi e gli sport
                                                  this._location = incomingLocation;
                                                  this._listAvailableCampi = this._location?.CAMPO;
                                                  this._flagAvalaibleCampi = (this._listAvailableCampi?.length != 0)
                                            });
  }

  /**
   * Chiude la videata
   */
  onClickCloseButton() {
    this.mdlController.dismiss();
  }



  
  /**
   * Dato un oggetto campo, chiama il servizio e ritorna l'icona
   * @param campoSport L'oggetto campo
   */
  getIconSport(campoSport: CampoSport): string{
    let iconSport: string = '';
    if (campoSport){
      iconSport = this.startService.getSportIcon(campoSport.IDSPORT);
      return iconSport;
    }
  }

  

}
