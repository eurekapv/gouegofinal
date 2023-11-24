import { Component, OnInit } from '@angular/core';
import { Area } from 'src/app/models/struttura/area.model';
import { Articolo } from 'src/app/models/shop/articolo.model';
import { TipoArticolo } from 'src/app/models/zsupport/valuelist.model';
import { Subscription } from 'rxjs';
import { StartService } from 'src/app/services/start.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab-shop',
  templateUrl: './tab-shop.page.html',
  styleUrls: ['./tab-shop.page.scss'],
})
export class TabShopPage implements OnInit {

  constructor(private startService: StartService,
              private navController: NavController) { }

  selectedView: TipoArticolo = TipoArticolo.prodotto;
  //Questo è per usare l'enum nell HTML
  TypeArticle: typeof TipoArticolo = TipoArticolo;

  listProdotti: Articolo[] = [];
  subListProdotti: Subscription; 
  
  listServizi: Articolo[] = [];
  subListServizi: Subscription; 
  
  listPacchetti: Articolo[] = [];
  subListPacchetti: Subscription; 


  selectedArea: Area;
  selectedAreaListen: Subscription; 

  
  

  ngOnInit(): void {
    this.onListenArea();
    this.onListenArticoli();

  }

  ngOnDestroy(): void {
    this.onUnscribeAll();
  }  

  /**
 * Metto in ascolto della modifica dell'area
 */
  onListenArea(): void {
    this.selectedAreaListen = this.startService.areaSelected
                    .subscribe(areaSel => {
                        this.selectedArea = areaSel;
                        //Posso richiedere i dati
                        this.requestData()
                    })
  }

  /**
   * Mi metto in ascolto per tutte e 3 le liste
   */
  onListenArticoli(): void {
    this.subListProdotti = this.startService.listProdotti
                                        .subscribe(elList => {
                                          this.listProdotti = elList;
                                        });

    this.subListServizi = this.startService.listServizi
                                        .subscribe(elList => {
                                          this.listServizi = elList;
                                        });

    this.subListPacchetti = this.startService.listPacchetti
                                        .subscribe(elList => {
                                          this.listPacchetti = elList;
                                        });                                        
  }


  /**
   * Tolgo la sottoscrizione a tutto
   */
  onUnscribeAll(): void {
    if (this.selectedAreaListen) {
      this.selectedAreaListen.unsubscribe();
    }

    if (this.subListProdotti) {
      this.subListProdotti.unsubscribe();
    }

    if (this.subListServizi) {
      this.subListServizi.unsubscribe();
    }

    if (this.subListPacchetti) {
      this.subListPacchetti.unsubscribe();
    }
    
  }  
    

    /**
     * Effettua la richiesta dei dati
     * 
     * @param tipoArticolo TipoArticolo oppure null per Tutti
     */
    requestData(tipoArticolo?:TipoArticolo, eventoRefresher?: any) {
      //Effettuo la richiesta dei dati
      this.startService.requestArticoli(this.selectedArea.ID, tipoArticolo)
                       .then(() => {
                        this.afterRefresh(eventoRefresher);
                      })
                      .catch(error => {
                         this.afterRefresh(eventoRefresher);
                       })
    }


  /**
   * L'utente ha scelto un altra pagina
   * @param value Cambio Visualizzazione del Segment
   */
  onChangeSegment(value)
  {
    //ngModel su HTML modifica la proprieta, qui 
    //nel caso debba effettuare operazioni al cambio
    this.requestData(this.selectedView);
  } 
  
  /**
   * Esecuzione del Refresh Dati
   * @param evento 
   */
  doRefresh(evento:any) {  
    this.requestData(this.selectedView, evento);
  }

  /**
   * Chiamare al termine della ricezione dei dati
   * @param evento 
   */
  afterRefresh(evento: any) {
    //Chiude il refresher in interfaccia
    if (evento && evento.target) {
      evento.target.complete();
    }
  }  

  /**
   * Stato eseguito il click su un articolo
   * @param articoloDoc 
   */
  clickArticolo(articoloDoc: Articolo) {
    let retPath = [];

    if (articoloDoc) {
      retPath = this.startService.getUrlPageDisplayProduct(articoloDoc.ID);
      if (retPath.length != 0) {
        this.navController.navigateForward(retPath);
      }
    }
  }
}
