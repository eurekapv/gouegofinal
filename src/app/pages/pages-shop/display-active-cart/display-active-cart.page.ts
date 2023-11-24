import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { Subscription, exhaustAll } from 'rxjs';
import { ShopCarrello } from 'src/app/models/shop/shop-carrello.model';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-display-active-cart',
  templateUrl: './display-active-cart.page.html',
  styleUrls: ['./display-active-cart.page.scss'],
})
export class DisplayActiveCartPage implements OnInit, OnDestroy {

  constructor(private router: ActivatedRoute,
    private animatioCntrl: AnimationController,
    private startService: StartService,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private navController: NavController) { }

    specialPicture: string[];
    numProdotti: number = 0;
    subListenCarrello: Subscription;
    carrelloDoc: ShopCarrello = new ShopCarrello();

    ngOnInit() {

      let myLoading: HTMLIonLoadingElement; 

      this.setSpecialPicture();

      this.loadingController.create({
            message: 'Recupero carrello ...',
            spinner: "circular",
            backdropDismiss: true
      })
      .then(elLoading => {
          myLoading = elLoading;
          myLoading.present();
          return this.onListenCarrello();
      })
      .then(() => {
        //Devo chiedere il ricalcolo del carrello
        return this.startService.shopRecalcCart();
      })
      .then(() => {
        myLoading.dismiss();
      })
      .catch(error => {

        myLoading.dismiss();
        //Torno Indietro
        this.onGoToBack();

        //Avviso dell'errore
        this.startService.presentAlertMessage(error);

      })
       
        
    }

    ngOnDestroy(): void {
      if (this.subListenCarrello) {
        this.subListenCarrello.unsubscribe();
      }
    }    

  /**
   * Mi metto in ascolto del carrello
   */
  onListenCarrello():Promise<void> {
    return new Promise<void>((resolve, reject) => {
      
      this.subListenCarrello = this.startService.activeCart$.subscribe({
        next: (dataCarrello) => {
            if (dataCarrello) {
              //Mi tengo il carrello per mostrare nella pagina
              this.carrelloDoc = dataCarrello;
              this.numProdotti = dataCarrello.getNumProdotti();
              resolve();
            }
            else {
              this.numProdotti = 0;
            }          
        },
        error: (err) => {
          this.numProdotti = 0;
          reject(err)
        }
      })
    })
  }    

    /**
    * Crea l'array con l'elenco delle foto da mostrare
    */
    setSpecialPicture() {
      
      let nameFile = '';

      this.specialPicture = [];

      nameFile = `assets/commercial/basketarticoli_small.png`;
      this.specialPicture.push(nameFile);

      nameFile = `assets/commercial/young_ecommerce_1.png`;
      this.specialPicture.push(nameFile);

      nameFile = `assets/commercial/shopmobilelogo.png`;
      this.specialPicture.push(nameFile);

      nameFile = `assets/commercial/young_ecommerce_2.png`;
      this.specialPicture.push(nameFile);
      
   }
   
  
  
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
