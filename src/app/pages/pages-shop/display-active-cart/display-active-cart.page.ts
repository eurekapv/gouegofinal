import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertButton, AnimationController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DetailCarrello } from 'src/app/models/shop/detail-carrello.model';
import { ShopCarrello } from 'src/app/models/shop/shop-carrello.model';
import { Utente } from 'src/app/models/utente/utente.model';
import { StartService } from 'src/app/services/start.service';
import { CartCheckoutPage } from '../cart-checkout/cart-checkout.page';

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

    userLogged: boolean;      //TRUE-FALSE: Utente Loggato
    subUserLogged: Subscription;  
    
    userDoc: Utente;
    subUserDoc: Subscription; 

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
      .then(() => this.onListenUtente())
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

      if (this.subUserLogged) {
        this.subUserLogged.unsubscribe();
      }

      if (this.subUserDoc) {
        this.subUserDoc.unsubscribe();
      }
    }    

  /**
   * Mi metto in ascolto del carrello
   */
  onListenCarrello():Promise<void> {
    return new Promise<void>((resolve, reject) => {
      
      this.subListenCarrello = this.startService.activeCart$.subscribe({
        next: (dataCarrello) => {
            console.log(dataCarrello);
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
   * Metto in ascolto dell'utente attivo
   * @returns 
   */
  onListenUtente(): Promise<void> {
    return new Promise<void>((resolve) => {

      //Controllo dell'utente loggato
      this.subUserLogged = this.startService.flagUtenteIsLoggato$
          .subscribe({
            next: (element: boolean) => {
              this.userLogged = element;
            }
          });

      //Richiedo lo User
      this.subUserDoc = this.startService.activeUtenteDoc$
          .subscribe({
            next: (element: Utente) => {
              //Utente loggato
              this.userDoc = element;
              if (this.userDoc) {
                this.startService.shopSetIdAnagrafica(this.userDoc);
              }
            }
          });  
          
      resolve();
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

   /**
    * Cambio Quantità con un documento fittizio
    * @param sampleRow 
    */
   onChangeQuantity(sampleRow: DetailCarrello) {
      console.log(sampleRow);
      if (sampleRow && sampleRow.QUANTITA != 0) {
        this.startService.shopUpdateQuantityRowCart(sampleRow.ID, sampleRow.QUANTITA);
      }
   }

   /**
    * Richiesta di eliminazione da parte dell'utente
    * @param idRowItem 
    */
   onDeleteRequest(idRowItem: string) {

     let message:string = '';
     let buttons: AlertButton[] = [];

      if (idRowItem && idRowItem.length != 0 && this.carrelloDoc) {
        let itemRow = this.carrelloDoc.DETAILCARRELLO.find(elRowItem => elRowItem.ID == idRowItem);

        if (itemRow) {
          message = `<p>Vuoi rimuovere dal carrello</p>`
          message+= `<p>${itemRow.DESCR}</p>`;

          buttons = [{
            text: 'Elimina',
            handler: ()=> {
              //Eseguo la cancellazione reale
              this.onExecDeleteRow(itemRow.ID);
            }
            },
            {
              text: 'No, mantieni',
              role: 'cancel'
            }];

          //Procedo con la richiesta
          this.startService.presentAlertMessage(message, 'Eliminazione', buttons);
        }
      }
   }

   /**
    * Esegue l'operazione di cancellazione della riga, con ricalcolo
    * @param idRow 
    */
   onExecDeleteRow(idRow: string) {
      let loadingElement: HTMLIonLoadingElement;
      this.startService.showLoadingMessage('Attendere eliminazione')
                       .then(elLoading => {

                          loadingElement = elLoading;
                          elLoading.present();

                          //Adesso richiedo l'eliminazione
                          return this.startService.shopRemoveItemFromCart(idRow, true);
                       })
                       .then(()=> {
                          //Chiudo il loading
                          loadingElement.dismiss();
                       })
                       .catch(error => {
                          loadingElement.dismiss();
                          this.startService.presentAlertMessage(error);
                       })
   }
   
   /**
    * Procede con la richiesta di ordine
    */
   onClickOrdina() {
    //Devo chiedere il login utente
    if (!this.userLogged) {
      //impostare nel servizio Start forceIdArea = 
      this.startService.setIdAreaForcedForLogin();
      
      //Apro la videata di Login
      this.startService.openFormLogin();
    }
    else {
      //Controllo se serve aggiornare dei dati (il metodo apre la form di verifica se necessario)
      this.startService.onVerificationUserData()
      .then(flagNeed => {
        if (flagNeed == false) {
          //Proseguo senza problemi
          //sono loggato e l'account è completo; posso prenotare
          this.onOpenCheckout();
        }
      })  
    }
   }

   /**
    * Apre la finestra modale per 
    * eseguire il checkout
    */
   onOpenCheckout() {
    //Apro la videata modale
    this.modalController.create({
      component: CartCheckoutPage,
      cssClass: 'modal-xl-class'
    })
    .then(elModal => {
      elModal.present();
    })
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
