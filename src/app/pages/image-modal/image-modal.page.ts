import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import SwiperCore, { SwiperOptions, Zoom  } from 'swiper';

SwiperCore.use([Zoom]);

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {
  @ViewChild('swiper') swiperRef: ElementRef | undefined;

  @Input() set imageUrl(value: string) {
    this._imageUrl = value;
  };

  _imageUrl: string = '';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    //Sblocco la possibilità di orientare il dispositivo
    window.screen.orientation.unlock();
  }

  /**
   * Chiusura della modale
   */
  close() {
    this.modalCtrl.dismiss();
    //quando la modale si chiude, riblocco lo schermo in verticale
    window.screen.orientation.lock("portrait");
  }

  /**
   * Effettua ZOOM in avanti o Indietro
   * @param zoomIn 
   */
  zoom(zoomIn: boolean) {
    if (this.swiperRef) {
      if (zoomIn) {
        this.swiperRef.nativeElement.swiper.zoom.in();
      }
      else{
        this.swiperRef.nativeElement.swiper.zoom.out();
      }
    }
  }

}
