import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StartService } from 'src/app/services/start.service';
import { Location } from 'src/app/models/location.model';
import { LocationImage } from 'src/app/models/locaton-image.model';
import { ModalController } from '@ionic/angular';
import { GalleryPageModule } from './gallery/gallery.module';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  selectedLocation = new Location();

  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    centeredSlides: true,
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

        //Faccio la richiesta al server
        this.startService.requestLocationByID(idLocation).subscribe(element => {
          if (element.length !== 0) {
            this.selectedLocation.setJSONProperty(element[0]);
          }
        });
        
      }
    })
  }

  /** Apre il Preview di una immagine */
  openPreview(img: LocationImage) {
    console.log('Preview');
    this.modalCtrl.create({
      component: GalleryPageModule,
      componentProps: {
        imgLocation: img
      }
    })
    .then(modal => modal.present());
  }
}
