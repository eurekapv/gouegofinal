import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StartService } from 'src/app/services/start.service';
import { Location } from 'src/app/models/location.model';
import { LocationImage } from 'src/app/models/locaton-image.model';
import { ModalController, NavController } from '@ionic/angular';
import { AperturaLocation } from 'src/app/models/aperturalocation.model';
import { GalleryPage } from './gallery/gallery.page';
import { CampiNewPage } from './campi-new/campi-new.page'
import { ButtonCard } from 'src/app/models/buttoncard.model';
import { Subscription } from 'rxjs';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { TipoSocieta } from 'src/app/models/valuelist.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit, OnDestroy {

  selectedLocation = new Location();
  subSelectedLocation: Subscription;
  myStartConfig: StartConfiguration;

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
          .subscribe(element => {

            this.selectedLocation = element;
            if (!this.selectedLocation.do_inserted) {

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
    let tipoSocieta: TipoSocieta;

    //Recupero il tipo di società
    if (this.myStartConfig && this.myStartConfig.gruppo) {
      tipoSocieta = this.myStartConfig.gruppo.TIPOGRUPPO;
    }

    // Recupero i Bottoni che devo mostrare in videata
    // A seconda se posso Prenotare nella location oppure no
    this.listButtonCard = ButtonCard.getButtonActionLocation(this.selectedLocation.ENABLEPRENOTAZIONI, tipoSocieta);

  }

  /** Apre il Preview di una immagine */
  openPreview(img: LocationImage) {
    

    this.modalCtrl.create({
      component: GalleryPage,
      componentProps: {
        imgLocation: img
      }
    })
    .then(modal => {
      modal.present();
      modal.onWillDismiss()
      .then(() => {
        //quando la modale si chiude, riblocco lo schermo in verticale
        window.screen.orientation.lock("portrait");
        

      })
    });

    
  }

  

  /**
   * Click sul bottone 
   * @param btn Bottone utilizzato
   */
  onClickButtonCard(btn: ButtonCard) {
    
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
      component: CampiNewPage,
      componentProps: {
        myLocation: this.selectedLocation
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
