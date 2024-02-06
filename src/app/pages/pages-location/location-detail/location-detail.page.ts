import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StartService } from 'src/app/services/start.service';
import { Location } from 'src/app/models/struttura/location.model';
import { LocationImage } from 'src/app/models/struttura/locaton-image.model';
import { ModalController, NavController } from '@ionic/angular';
import { AperturaLocation } from 'src/app/models/struttura/aperturalocation.model';
import { LocationCampiListPage } from '../location-campi-list/location-campi-list.page'
import { ButtonCard } from 'src/app/models/zsupport/buttoncard.model';
import { Subscription } from 'rxjs';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { TipoSocieta, TypeUrlPageLocation } from 'src/app/models/zsupport/valuelist.model';
import { ImageModalPage } from '../../image-modal/image-modal.page';
import SwiperCore, { Pagination  } from 'swiper';
import { Area } from 'src/app/models/struttura/area.model';
import { LogApp } from 'src/app/models/zsupport/log.model';


SwiperCore.use([Pagination]);

@Component({
  selector: 'app-location',
  templateUrl: './location-detail.page.html',
  styleUrls: ['./location-detail.page.scss'],
})
export class LocationDetailPage implements OnInit, OnDestroy {

  @ViewChild('swiperGallery') swiperRef: ElementRef | undefined;

  selectedLocation = new Location();
  
  
  areaDoc: Area;

  startConfigDoc: StartConfiguration;
  subConfig: Subscription;

  idLocation: string = '';

  //Dati richiesti e caricati
  loadedData: boolean = false;
  errorLoadingData: boolean = false;
  messageErrorPage: string = "";
  refresherMode: boolean = false; //C'e' un refresh in atto


  aperture: AperturaLocation[] = [];
  listButtonCard: ButtonCard[] = []; // Lista dei Bottoni
  showSliderPagination = true;

  constructor(private router: ActivatedRoute, 
              private startService: StartService,
              private modalCtrl: ModalController, 
              private navController: NavController) {

                this.onListenStartConfig();

  }

  ngOnInit() {

    //Recupero area di riferimento
    this.areaDoc = this.startService.areaSelected;

    this.loadedData = false;

    this.router.paramMap.subscribe( param => {
      
      if (param.has('locationId')) {
        //Recupero la LocationId
        this.idLocation = param.get('locationId');

        if (!this.idLocation || this.idLocation.length == 0) {
          this.loadedData = true;
          this.errorLoadingData = true;
          this.messageErrorPage = 'Non riesco a recuperare la location desiderata';
        }
        else {
          //Creo un loadinh e presento
          this.startService.showLoadingMessage('Attendere caricamento')
                           .then(elLoading => {

                              elLoading.present();

                              this.onRequestAllData()
                                  .then(() => {
                                      elLoading.dismiss();
                                  })
                                  .catch(error => {
                                    LogApp.consoleLog(error,"error");
                                    elLoading.dismiss();
                                  })
                           })
        }
      }
      else {
        this.loadedData = true;
        this.errorLoadingData = true;
        this.messageErrorPage = 'Non riesco a recuperare la location desiderata';
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subConfig) {
      this.subConfig.unsubscribe();
    }
  }

  /**
   * In ascolto sulla configurazione
   */
  onListenStartConfig() {

    this.subConfig = this.startService.startConfig.subscribe(elData => {
      this.startConfigDoc = elData;
    });

  }


  /**
   * Richiedo tutti i dati necessari
   * @returns 
   */
  onRequestAllData(): Promise<void> {

    return new Promise<void>((resolve, reject) => {
      this.loadedData = false;
      this.errorLoadingData = false;
      this.messageErrorPage = '';

       
      if (this.idLocation) {
        //Chiedo al Server le informazioni Location
        this.startService.requestLocationByID(this.idLocation)
                         .then(dataLocation => {
                            //Location presente
                            this.selectedLocation = dataLocation;

                            // Recupero i Bottoni che devo mostrare in videata
                            this.listButtonCard = ButtonCard.getButtonActionLocation(this.areaDoc, 
                                                                                     this.selectedLocation); 
                                                                                     
                            this.loadedData = true;
                            this.errorLoadingData = false;
                            this.messageErrorPage = '';
                            resolve();
                         })
                         .catch(error => {
                          this.loadedData = true;
                          this.errorLoadingData = true;
                          this.messageErrorPage = 'Non riesco a recuperare la location desiderata';
                          reject(error);                          
                         })
      }
      else {
        this.loadedData = true;
        this.errorLoadingData = true;
        this.messageErrorPage = 'Non riesco a recuperare la location desiderata';
        reject('Location non definita');
      }
    })
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
   * Apertura della Preview di una immagine
   * @param myImageUrl 
   */
  openPreview(myImageUrl: LocationImage) {
    
    this.modalCtrl.create({
      component: ImageModalPage,
      cssClass: 'transparent-blur-modal',
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

      case TypeUrlPageLocation.LocationBooking:
        arPath = this.startService.getUrlPageLocation(TypeUrlPageLocation.LocationBooking, this.selectedLocation.ID);
        //Prenotazioni
        this.navController.navigateForward(arPath);
        break;

      case TypeUrlPageLocation.PeriodicCourseList:
        // Lista dei Corsi
        arPath = this.startService.getUrlPageLocation(TypeUrlPageLocation.PeriodicCourseList, this.selectedLocation.ID);
        this.navController.navigateForward(arPath);
        break;

      case TypeUrlPageLocation.DailyCourseList:
          // Lista dei Corsi
          arPath = this.startService.getUrlPageLocation(TypeUrlPageLocation.DailyCourseList, this.selectedLocation.ID);

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
   * Richiesto il refresh dei dati
   * @param ev 
   */
  onRefreshData(ev:any) {
    //Entro in refreshmode
    this.refresherMode = true;

    this.onRequestAllData()
        .then(() => {
          this.refresherMode = false;
          if (ev && ev.target) {
            ev.target.complete();
          }
        })
        .catch(error => {
          this.refresherMode = false;
          if (ev && ev.target) {
            ev.target.complete();
          }
        })
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

    if (this.startConfigDoc && this.startConfigDoc.gruppo) {

      switch (this.startConfigDoc.gruppo.TIPOGRUPPO) {
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
