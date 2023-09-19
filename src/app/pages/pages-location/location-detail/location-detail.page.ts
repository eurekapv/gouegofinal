import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StartService } from 'src/app/services/start.service';
import { Location } from 'src/app/models/location.model';
import { LocationImage } from 'src/app/models/locaton-image.model';
import { ModalController, NavController } from '@ionic/angular';
import { AperturaLocation } from 'src/app/models/aperturalocation.model';
import { LocationCampiListPage } from '../location-campi-list/location-campi-list.page'
import { ButtonCard } from 'src/app/models/buttoncard.model';
import { Subscription } from 'rxjs';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { TipoSocieta, TypeUrlPageLocation } from 'src/app/models/valuelist.model';
import { ImageModalPage } from '../../image-modal/image-modal.page';
import SwiperCore, { Pagination  } from 'swiper';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-location',
  templateUrl: './location-detail.page.html',
  styleUrls: ['./location-detail.page.scss'],
})
export class LocationDetailPage implements OnInit, OnDestroy {

  @ViewChild('swiperGallery') swiperRef: ElementRef | undefined;
  selectedLocation = new Location();
  subSelectedLocation: Subscription;
  myStartConfig: StartConfiguration;

  aperture: AperturaLocation[] = [];
  listButtonCard: ButtonCard[] = []; // Lista dei Bottoni
  showSliderPagination = true;

  constructor(private router: ActivatedRoute, 
              private startService: StartService,
              private modalCtrl: ModalController, 
              private navController: NavController) {

      //Imposto i bottoni da mostrare 
      this.setButtonCard();

      //Recupero il documento di start config
      this.startService.startConfig.subscribe(elData => {
        this.myStartConfig = elData;
      })

  }



  ngOnInit() {
    let idLocation = '';
    this.router.paramMap.subscribe( param => {
      
      if (param.has('locationId')) 
      {
        idLocation = param.get('locationId');

        //Chiedo al Server le informazioni Location
        this.startService.requestLocationByID(idLocation);
        
        //Ricevo le info della Location
        this.subSelectedLocation = this.startService.activeLocation
                                                        .subscribe(myLocation => {
                                                          //Location caricata
                                                          this.onLoadLocation(myLocation);
                                                        });
        
      }
      else {
        //Non è arrivata la location
        this.navController.navigateForward(this.backPathArray);
      }
    });
  }

  ngOnDestroy() {
    if (this.subSelectedLocation) {
      this.subSelectedLocation.unsubscribe();
    }
  }

  //#region PULSANTE BACK
  /**
   * Ritorna un Array con il percorso di ritorno
   */
  get backPathArray():string[] {
    let retPath = ['/','appstart-home','tab-home'];

    return retPath;
  }
    
  //Ritorna il Path Array Back in formato stringa concatenata
  get backButtonHref(): string {
      let myHref = '';
      myHref = this.backPathArray.join('/').substring(1);
  
      return myHref;
  }
    
  /**
   * Torno alla pagina del home
   */
  onGoToBack() {
        this.navController.navigateBack(this.backPathArray);
  }
  
  //#endregion

  /**
   * In arrivo una location 
   * @param incomingLocation 
   */
  onLoadLocation(incomingLocation: Location) {
    //Applico la location
    this.selectedLocation = incomingLocation;

    //Imposto i Bottoni delle Card
    if (!this.selectedLocation.do_inserted) {
      /** Imposto i Bottoni Card */
      this.setButtonCard();
    }

  }

  setButtonCard() {
    let tipoSocieta: TipoSocieta;

    //Recupero il tipo di società
    if (this.myStartConfig && this.myStartConfig.gruppo) {
      tipoSocieta = this.myStartConfig.gruppo.TIPOGRUPPO;
    }

    // Recupero i Bottoni che devo mostrare in videata
    // A seconda se posso Prenotare nella location oppure no
    this.listButtonCard = ButtonCard.getButtonActionLocation(this.selectedLocation.ENABLEPRENOTAZIONI, tipoSocieta);

  }

  /**
   * Apertura della Preview di una immagine
   * @param myImageUrl 
   */
  openPreview(myImageUrl: LocationImage) {
    
    this.modalCtrl.create({
      component: ImageModalPage,
      cssClass: 'transparent-modal',
      componentProps: {
        'imageUrl': myImageUrl.IMAGEURL
      }
    })
    .then(modal => {
      modal.present();
      modal.onWillDismiss()
      .then(() => {
        //quando la modale si chiude, riblocco lo schermo in verticale
        //window.screen.orientation.lock("portrait");
      })
    });

    
  }  

  

  /**
   * Click sul bottone 
   * @param btn Bottone utilizzato
   */
  onClickButtonCard(btn: ButtonCard) {
    let arPath = [];

    switch (btn.functionCod) {
      case 'book':
        arPath = this.startService.getUrlPageLocation(TypeUrlPageLocation.LocationBooking, this.selectedLocation.ID);
        //Prenotazioni
        this.navController.navigateForward(arPath);
        break;
      case 'course':
        // Lista dei Corsi
        arPath = this.startService.getUrlPageLocation(TypeUrlPageLocation.CourseList, this.selectedLocation.ID);
        this.navController.navigateForward(arPath);
        break;
    
      default:
        break;
    }

  }

  /** Apertura modale dei campi */
  onClickOpenCampi() {
    
    //Apertura modale della pagina dei campi
    this.modalCtrl
        .create({
          component: LocationCampiListPage,
          componentProps: {
            'location': this.selectedLocation
          }
        })
        .then(modal => modal.present());
  }


  /**
   * Ritorna l'etichetta da mostrare nell'item Aule/Campi
   */
  getLabelCampiDisponibili() {
    let text = 'Struttura';
    let singolare = true;
    
    if (this.selectedLocation.getNumCampi() > 1 ) {
      singolare = false;
    }

    if (this.myStartConfig && this.myStartConfig.gruppo) {

      switch (this.myStartConfig.gruppo.TIPOGRUPPO) {
        case TipoSocieta.formazione:
            text = (singolare ? 'Aula disponibile' : 'Aule disponibili');
          break;

        case TipoSocieta.sportiva:
            text = (singolare ? 'Campo disponibile' : 'Campi disponibili');
          break;
      
        default:
          break;
      }
    }
    
    return text;
  }
}
