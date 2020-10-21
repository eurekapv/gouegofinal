import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { LocationImage } from 'src/app/models/locaton-image.model';
import { StartAuthorization } from 'src/app/models/start-configuration.model';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  showButtons: boolean;

  imgLocation: LocationImage;
  sliderOpts = {
    zoom: {
      maxRatio: 3
    }
  };

  @ViewChild('slider',{ read: ElementRef, static: false })slider: ElementRef;

  constructor(
    private navParams: NavParams, 
    private modalCtrl: ModalController,
    private startService: StartService ) { 


    if (this.startService.isDesktop){
      this.showButtons = true;
    }
    else{
      this.showButtons = false;
    }
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

  close(params:any) {
    this.modalCtrl.dismiss();
  }

  onTap(){
    if (!this.startService.isDesktop){
      this.showButtons = !this.showButtons;
    }
  }



}
