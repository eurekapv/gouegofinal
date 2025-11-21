import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { ShopCarrello } from 'src/app/models/shop/shop-carrello.model';
import { DetailCarrello } from 'src/app/models/shop/detail-carrello.model';
import { StatoCarrello, TipoRigoDetailCarrello } from 'src/app/models/zsupport/valuelist.model';
import { StartService } from 'src/app/services/start.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail-shop-account',
  templateUrl: './detail-shop-account.page.html',
  styleUrls: ['./detail-shop-account.page.scss'],
})
export class DetailShopAccountPage implements OnInit {

  ordine: ShopCarrello;
  inRichiesta = true;
  loadError = false;

  // Enum per l'HTML
  statoCarrello = StatoCarrello;
  tipoRigo = TipoRigoDetailCarrello;

  // URL base per le immagini
  baseImageUrl = '';

  constructor(
    private startService: StartService,
    private actRouter: ActivatedRoute,
    private navController: NavController,
    private loadingController: LoadingController
  ) {
    // Imposta URL base immagini
    this.baseImageUrl = environment.connection.urlLocation.production.urlFileServer;
  }

  ngOnInit() {
    this.actRouter.paramMap.subscribe(param => {
      if (param.has('orderId')) {
        const idOrdine = param.get('orderId');
        this.requestOrdine(idOrdine);
      } else {
        this.goBack();
      }
    });
  }

  /**
   * Ritorna un Array con il percorso di ritorno
   */
  get backPathArray(): string[] {
    return ['/', 'appstart-home', 'tab-profile', 'list-shop-account'];
  }

  /**
   * Ritorna il Path Array Back in formato stringa concatenata
   */
  get backButtonHref(): string {
    return this.backPathArray.join('/').substring(1);
  }

  /**
   * Torna indietro
   */
  goBack() {
    this.navController.back();
  }

  /**
   * Richiede i dettagli dell'ordine
   */
  requestOrdine(idOrdine: string) {
    this.inRichiesta = true;
    this.loadError = false;

    this.loadingController.create({
      message: 'Caricamento...',
      spinner: 'circular',
      backdropDismiss: true
    })
    .then(elLoading => {
      elLoading.present();

      // Richiedo l'ordine con tutte le righe (numChild = 999)
      this.startService.requestShopCarrelloById(idOrdine, 999)
        .then((ordine: ShopCarrello) => {
          this.ordine = ordine;
          this.inRichiesta = false;
          elLoading.dismiss();
        })
        .catch(error => {
          console.error('Errore caricamento ordine:', error);
          this.inRichiesta = false;
          this.loadError = true;
          elLoading.dismiss();
        });
    });
  }

  /**
   * Ritorna solo le righe prodotto (esclude spese, sconti, etc.)
   */
  getRigheProdotti(): DetailCarrello[] {
    if (!this.ordine || !this.ordine.DETAILCARRELLO) {
      return [];
    }
    return this.ordine.DETAILCARRELLO.filter(r => r.TIPORIGO === TipoRigoDetailCarrello.prodotti);
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
  getStatusLabel(stato: StatoCarrello): string {
    switch (stato) {
      case StatoCarrello.evaso:
        return 'Completato';
      case StatoCarrello.evasoParzialmente:
        return 'In lavorazione';
      case StatoCarrello.nonEvaso:
      default:
        return 'In attesa';
    }
  }

  /**
   * Costruisce l'URL completo dell'immagine prodotto
   */
  getImageUrl(path: string): string {
    if (!path) {
      return environment.additionalConfig.defaultShopImage;
    }
    if (path.startsWith('http')) {
      return path;
    }
    return `https://${this.baseImageUrl}/${path}`;
  }
}
