import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { LocationImage } from 'src/app/models/locaton-image.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  imgLocation: LocationImage;
  sliderOpts = {
    zoom: {
      maxRatio: 3
    }
  };

  @ViewChild('slider',{ read: ElementRef, static: false })slider: ElementRef;

  constructor(private navParams: NavParams, private modalCtrl: ModalController) { 
  }

  ngOnInit() {
    this.imgLocation = this.navParams.get('imgLocation');
    window.screen.orientation.unlock();
  }

  zoom(zoomIn: boolean) {
    let zoom = this.slider.nativeElement.swiper.zoom;
    if (zoomIn) {
      zoom.in();
    }
    else {
      zoom.out();
    }
  }

  close() {
    this.modalCtrl.dismiss();
  }


}
