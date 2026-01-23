import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { ShopCarrello } from 'src/app/models/shop/shop-carrello.model';
import { StatoCarrello } from 'src/app/models/zsupport/valuelist.model';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-list-shop-account',
  templateUrl: './list-shop-account.page.html',
  styleUrls: ['./list-shop-account.page.scss'],
})
export class ListShopAccountPage implements OnInit {

  listOrdini: ShopCarrello[] = [];
  inRichiesta = true;

  // Enum per l'HTML
  statoCarrello = StatoCarrello;

  constructor(private startService: StartService,
              private loadingController: LoadingController,
              private navController: NavController
                ) { }

  ngOnInit() {
    this.inRichiesta = false;
    this.requestListaOrdini();
  }

  /**
   * Ritorna un Array con il percorso di ritorno
   */
  get backPathArray():string[] {
    let retPath = ['/','appstart-home','tab-profile'];

    return retPath;
  }

  //Ritorna il Path Array Back in formato stringa concatenata
  get backButtonHref(): string {
    let myHref = '';
    myHref = this.backPathArray.join('/').substring(1);

    return myHref;
  }  
  
  /**
   * Richiede al server gli ordini
   */
  requestListaOrdini() {
    //Se è presente un utente attivo
     if (this.startService.activeUtenteDoc) {
      
        this.inRichiesta = true;

        this.loadingController.create({
            message: 'Caricamento',
            spinner: 'circular',
            backdropDismiss: true
       })
       .then(elLoading => {
          //Mostro il loading
          elLoading.present();
          this.startService.requestListShopCarrelli()
                           .then(listItems => {
                              this.inRichiesta = false;
                              elLoading.dismiss();
                              this.listOrdini = listItems;
                              console.log(this.listOrdini);
                           })
                           .catch(error => {
                              console.log(error);
                              this.inRichiesta = false;
                              elLoading.dismiss();
                           })
       })
    }
  }

  /**
   * Gestisce il pull-to-refresh
   */
  handleRefresh(event: any) {
    this.startService.requestListShopCarrelli()
      .then(listItems => {
        this.listOrdini = listItems;
        event.target.complete();
      })
      .catch(error => {
        console.log(error);
        event.target.complete();
      });
  }

  /**
   * Click su un ordine per vedere il dettaglio
   */
  onClickOrdine(ordine: ShopCarrello) {
    // Naviga al dettaglio ordine
    this.navController.navigateForward(`/detail-shop-account/${ordine.ID}`);
  }

  /**
   * Ritorna l'icona in base allo stato dell'ordine
   */
  getStatusIcon(stato: StatoCarrello): string {
    switch (stato) {
      case StatoCarrello.evaso:
        return 'checkmark-circle-outline';
      case StatoCarrello.evasoParzialmente:
        return 'time-outline';
      case StatoCarrello.nonEvaso:
      default:
        return 'hourglass-outline';
    }
  }

  /**
   * Ritorna l'etichetta in base allo stato dell'ordine
   */
  getStatusLabel(stato: StatoCarrello, ritiroInSede: boolean): string {
    switch (stato) {
      case StatoCarrello.evaso:
        return 'Completato';
      case StatoCarrello.evasoParzialmente:
        return 'In lavorazione';
      case StatoCarrello.nonEvaso:
      default:
        return ritiroInSede ? 'Da ritirare' : 'In consegna';
    }
  } 
}
