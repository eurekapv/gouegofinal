import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationController, IonModal, LoadingController, ModalController, NavController } from '@ionic/angular';
import { Articolo } from 'src/app/models/shop/articolo.model';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { StartService } from 'src/app/services/start.service';
import SwiperCore, { Navigation, Pagination  } from 'swiper';
import { ImageModalPage } from '../../image-modal/image-modal.page';
import { ArticoloTaglieMisura } from 'src/app/models/shop/articolotagliemisura.model';
import { ArticoloColore } from 'src/app/models/shop/articolocolore.model';
import { TipoArticolo } from 'src/app/models/zsupport/valuelist.model';
import { Subscription } from 'rxjs';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.page.html',
  styleUrls: ['./display-product.page.scss'],
})
export class DisplayProductPage implements OnInit, OnDestroy {

  @ViewChild('swiperGallery') swiperRef: ElementRef | undefined;
  @ViewChild(IonModal) modalAddedItem: IonModal;

  idPrimaryKey: string = '';
  articoloDoc: Articolo = new Articolo(true);
  listImagePath: string[] = [];
  activeVariation: 'size'|'color' = 'size';
  selectedTaglia: ArticoloTaglieMisura;
  selectedColor: ArticoloColore;
  enableTaglie: boolean = false;
  enableColori: boolean = false;

  isOpenModalAddedItem = false; //Switch per l'apertura della modale sotto
  subListenCarrello: Subscription;
  numProdotti: number = 0;


  constructor(private router: ActivatedRoute,
              private animatioCntrl: AnimationController,
              private startService: StartService,
              private loadingController: LoadingController,
              private modalController: ModalController,
              private navController: NavController) { }

  ngOnInit() {

    //Reimposto le immagini
    this.setListImagePath();

    //Mi metto in ascolto del carrello
    this.onListenCarrello();

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

  ngOnDestroy(): void {
    if (this.subListenCarrello) {
      this.subListenCarrello.unsubscribe();
    }
  }

  /**
   * Mi metto in ascolto del carrello per sapere il numero dei prodotti
   */
  onListenCarrello() {
    this.subListenCarrello = this.startService.activeCart$.subscribe({
      next: (carrelloDoc) => {
          if (carrelloDoc) {
            this.numProdotti = carrelloDoc.getNumProdotti();
          }
          else {
            this.numProdotti = 0;
          }
      },
      error: () => {
        this.numProdotti = 0;
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
  this.listImagePath.push('assets/commercial/item_placeholder.png');

  if (this.articoloDoc &&
      this.articoloDoc.ARTICOLIIMAGES && 
      this.articoloDoc.ARTICOLIIMAGES.length != 0) {
        //Svuoto e sostituisco
        this.listImagePath = [];

        this.articoloDoc.ARTICOLIIMAGES.forEach(elImage => {
          this.listImagePath.push(elImage.FILENAMEESTENSIONE);
        });
      }
}

  /**
   * Apertura della Preview di una immagine
   * @param myImageUrl 
   */
  openPreview(myImageUrl: string) {
    
    this.modalController.create({
      component: ImageModalPage,
      cssClass: 'transparent-blur-modal',
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

/**
 * Aggiunta del prodotto al carrello
 */
onAddToCart() {
  let validate = true;
  let listMessage: string[] = [];

  if (this.articoloDoc) {

    if (this.enableTaglie && !this.selectedTaglia) {
        validate = false;
        listMessage.push('Specifica la taglia');
    }

    if (this.enableColori && !this.selectedColor) {
      validate = false;
      listMessage.push('Seleziona il colore');
    }

    if (!validate) {
      const header = `Prima di proseguire è necessario correggere i seguenti problemi`;
      this.startService.presentAlertListMessage(listMessage, header, '','Attenzione');
    }
    else {
      
      //Posso aggiungere un articolo
      this.startService.shopAddItemToCart(this.articoloDoc, this.selectedTaglia?.ID, this.selectedColor?.ID)
                       .then(() => {
                          this.isOpenModalAddedItem = true;                          
                       })
                       .catch(error => {
                          this.startService.presentAlertMessage(error, 'Aggiunta fallita');
                       })
    }
  }
}

/**
 * Chiusura della modale con l'aggiunta del prodotto
 */
closeModalAddedItem() {
  if (this.modalAddedItem) {
    this.modalAddedItem.dismiss();
    this.isOpenModalAddedItem = false;
  }
}

  /**
   * Richiesta la visualizzazione del carrello
   */
  clickCarrello() {
    
    let retPath = [];
    
    retPath = this.startService.getUrlPageActiveCart();
    if (retPath.length != 0) {
      this.navController.navigateForward(retPath);
    }    
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
