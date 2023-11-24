import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { Articolo } from 'src/app/models/shop/articolo.model';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { StartService } from 'src/app/services/start.service';
import SwiperCore, { Navigation, Pagination  } from 'swiper';
import { ImageModalPage } from '../../image-modal/image-modal.page';
import { ArticoloTaglieMisura } from 'src/app/models/shop/articolotagliemisura.model';
import { ArticoloColore } from 'src/app/models/shop/articolocolore.model';
import { TipoArticolo } from 'src/app/models/zsupport/valuelist.model';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.page.html',
  styleUrls: ['./display-product.page.scss'],
})
export class DisplayProductPage implements OnInit {

  @ViewChild('swiperGallery') swiperRef: ElementRef | undefined;
  idPrimaryKey: string = '';
  articoloDoc: Articolo = new Articolo(true);
  listImagePath: string[] = [];
  activeVariation: 'size'|'color' = 'size';
  selectedTaglia: ArticoloTaglieMisura;
  selectedColor: ArticoloColore;
  enableTaglie: boolean = false;
  enableColori: boolean = false;


  constructor(private router: ActivatedRoute,
              private animatioCntrl: AnimationController,
              private startService: StartService,
              private loadingController: LoadingController,
              private modalController: ModalController,
              private docStructureSrv: DocstructureService,
              private navController: NavController) { }

  ngOnInit() {

    //Reimposto le immagini
    this.setListImagePath();

    this.router.paramMap.subscribe( param => {
      if (param.has('id')) {
        this.idPrimaryKey = param.get('id');

        //C'e' una Chiave per effettuare la richiesta
        if (this.idPrimaryKey.length != 0) {
            this.onRequestData();
        }
        else {
          this.onGoToBack();
        }
      }
    })    
  }

/**
   * Viene effettuata la richiesta
   * @param event 
   */
onRequestData(event?: any) {

  if (event) {
    event.target.complete();
  }

  this.loadingController.create({
    message: 'Caricamento...',
    spinner: "circular",
    backdropDismiss: true
  })
  .then(elLoading => {
    elLoading.present();
    
    //Faccio la chiamata
    this.startService.requestArticoloById(this.idPrimaryKey,2,true)
                      .then(dataReceived => {

                        //Dati ricevuti
                        this.articoloDoc = dataReceived;
                        //Reimposto le immagini
                        this.setListImagePath();
                        //Imposto la logica Taglie/Colori
                        this.setInitialSizeColor();

                        //Chiudo il Loading
                        elLoading.dismiss();
                        console.log(this.articoloDoc)
                      })
                      .catch(error => {

                        elLoading.dismiss();
                        //Si è verificato un errore
                        this.startService.presentToastMessage('Articolo non recuperato');
                        LogApp.consoleLog(error, "error");

                        this.onGoToBack();
                      })

  })
} 

//#region GESTIONE IMMAGINI 

/**
 * Imposta la lista delle immagini da mostrare
 */
setListImagePath(): void {
  
  //Imposto l'immagine di default
  this.listImagePath.push('assets/commercial/shopmobilelogo.png');

  if (this.articoloDoc &&
      this.articoloDoc.ARTICOLIIMAGES && 
      this.articoloDoc.ARTICOLIIMAGES.length != 0) {
        //Svuoto e sostituisco
        this.listImagePath = [];

        this.articoloDoc.ARTICOLIIMAGES.forEach(elImage => {
          this.listImagePath.push(elImage.FILENAMEESTENSIONE);
        })

        console.log(this.listImagePath);
      }
}

  /**
   * Apertura della Preview di una immagine
   * @param myImageUrl 
   */
  openPreview(myImageUrl: string) {
    
    this.modalController.create({
      component: ImageModalPage,
      cssClass: 'transparent-modal',
      componentProps: {
        'imageUrl': myImageUrl
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

//#endregion

//#region INTERFACCIA

/**
 * Selettore per Taglia / Colore
 * @param e Evento
 */
segmentChanged(e: any) {
  this.activeVariation = e.detail.value;

  if (this.activeVariation == 'color') {
    this.animatioCntrl.create()
    .addElement(document.querySelector('.sizes'))
    .duration(500)
    .iterations(1)
    .fromTo('transform', 'translateX(0px)', 'translateX(100%)')
    .fromTo('opacity', '1', '0.2')
    .play();

    this.animatioCntrl.create()
    .addElement(document.querySelector('.colors'))
    .duration(500)
    .iterations(1)
    .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
    .fromTo('opacity', '0.2', '1')
    .play();
  } else {
    this.animatioCntrl.create()
    .addElement(document.querySelector('.sizes'))
    .duration(500)
    .iterations(1)
    .fromTo('transform', 'translateX(100%)', 'translateX(0)')
    .fromTo('opacity', '0.2', '1')
    .play();

    this.animatioCntrl.create()
    .addElement(document.querySelector('.colors'))
    .duration(500)
    .iterations(1)
    .fromTo('transform', 'translateX(0px)', 'translateX(-100%)')
    .fromTo('opacity', '1', '0.2')
    .play();
  }
}

/**
 * Imposta inizialmente l'impostazione Taglia/Colore
 */
setInitialSizeColor() {

  if (this.articoloDoc) {

    this.enableTaglie = false;
    this.enableColori = false;

    if (this.articoloDoc.TIPOARTICOLO == TipoArticolo.prodotto) {

      if (this.articoloDoc.FLAGTAGLIEMISURE && this.articoloDoc.ARTICOLITAGLIEMISURE && this.articoloDoc.ARTICOLITAGLIEMISURE.length != 0) {
        this.enableTaglie = true;
      }
  
      if (this.articoloDoc.FLAGCOLORI && this.articoloDoc.ARTICOLICOLORI && this.articoloDoc.ARTICOLICOLORI.length != 0) {
        this.enableColori = true;
      }
  
      if (this.enableTaglie && this.enableColori) {
        //Le ho entrambi, imposto la taglia
        this.activeVariation = 'size';
      }
      else if (!this.enableColori && this.enableTaglie) {
        //Solo le taglie
        this.activeVariation = 'size';
      }
      else if (this.enableColori && !this.enableTaglie) {
        //Solo i colori
        this.activeVariation = 'color';
      }
      else {
        //Nulla intanto non visualizzo
        this.activeVariation = 'size';
      }
    }

    
  }
}

/**
 * Effettua la modifica della Taglia
 * @param size 
 */
changeSize(size: ArticoloTaglieMisura) {
  this.selectedTaglia = size;
}

/**
 * Effettua la modifica del Colore
 * @param color 
 */
changeColor(color: ArticoloColore) {
  this.selectedColor = color;
}
//#endregion

  //#region PULSANTE BACK
  /**
   * Ritorna un Array con il percorso di ritorno
   */
  get backPathArray():string[] {
    let retPath = ['/','appstart-home','tab-shop'];

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

}
