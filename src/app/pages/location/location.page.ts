import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StartService } from 'src/app/services/start.service';
import { Location } from 'src/app/models/location.model';
import { LocationImage } from 'src/app/models/locaton-image.model';
import { ModalController, NavController } from '@ionic/angular';
import { AperturaLocation } from 'src/app/models/aperturalocation.model';
import { GalleryPage } from './gallery/gallery.page';
import { CampiPage } from './campi/campi.page';
import { LogApp } from 'src/app/models/log.model';
import { ButtonCard } from 'src/app/models/buttoncard.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit, OnDestroy {

  selectedLocation = new Location();
  subSelectedLocation: Subscription;

  aperture: AperturaLocation[] = [];
  listButtonCard: ButtonCard[] = []; // Lista dei Bottoni
  

  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    //centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 20
  };

  constructor(private router: ActivatedRoute, 
              private startService: StartService,
              private modalCtrl: ModalController, 
              private navCtrl: NavController) {

      //Imposto i bottoni da mostrare 
      this.setButtonCard();

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
          .subscribe(element => {

            this.selectedLocation = element;
            if (!this.selectedLocation.do_inserted) {

              LogApp.consoleLog('Location Selezionata');
              //LogApp.consoleLog(this.selectedLocation);

              /** Imposto i Bottoni Card */
              this.setButtonCard();


            }
          });
        
      }
      else {
        this.navCtrl.navigateForward(['/']);
      }
    });
  }

  ngOnDestroy() {
    if (this.subSelectedLocation) {
      this.subSelectedLocation.unsubscribe();
    }
  }

  setButtonCard() {
    
    // Recupero i Bottoni che devo mostrare in videata
    // A seconda se posso Prenotare nella location oppure no
    this.listButtonCard = ButtonCard.getButtonActionLocation(this.selectedLocation.ENABLEPRENOTAZIONI);

  }

  /** Apre il Preview di una immagine */
  openPreview(img: LocationImage) {
    

    this.modalCtrl.create({
      component: GalleryPage,
      componentProps: {
        imgLocation: img
      }
    })
    .then(modal => modal.present());
  }

  /**
   * Click sul bottone 
   * @param btn Bottone utilizzato
   */
  onClickButtonCard(btn: ButtonCard) {
    console.log('qui');
    switch (btn.functionCod) {
      case 'book':
        //Prenotazioni
        this.navCtrl.navigateForward(['/','location',this.selectedLocation.ID,'booking']);
        break;
      case 'course':
        // Corsi
        this.navCtrl.navigateForward(['/','listcourses',this.selectedLocation.ID]);
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
      component: CampiPage,
      componentProps: {
        myLocation: this.selectedLocation
      }
    })
    .then(modal => modal.present());
  }
}
