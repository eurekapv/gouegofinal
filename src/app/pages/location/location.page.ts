import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StartService } from 'src/app/services/start.service';
import { Location } from 'src/app/models/location.model';
import { LocationImage } from 'src/app/models/locaton-image.model';
import { ModalController } from '@ionic/angular';
import { AperturaLocation } from 'src/app/models/aperturalocation.model';
import { GalleryPage } from './gallery/gallery.page';
import { CampiPage } from './campi/campi.page';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  selectedLocation = new Location();
  aperture: AperturaLocation[] = [];

  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    //centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 20
  };

  constructor(private router: ActivatedRoute, 
              private startService: StartService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    let idLocation;
    this.router.paramMap.subscribe( param => {
      
      if (param.has('locationId')) 
      {
        idLocation = param.get('locationId');

        //Chiedo al Server le informazioni Location
        this.startService.requestLocationByID(idLocation).subscribe(element => {
          if (element.length !== 0) {
            
            //Imposto le informazioni della Location Selezionata
            this.selectedLocation.setJSONProperty(element[0]);
            
            console.log(this.selectedLocation)
          }
        });
        
      }
      else {

      }
    })
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

  goToPrenota() {

  }

  goToCorsi() {

  }

  goToTornei() {

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
