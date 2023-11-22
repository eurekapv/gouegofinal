import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Area } from 'src/app/models/struttura/area.model';
import { NewsEvento } from 'src/app/models/evento/newsevento.model';
import { StartService } from 'src/app/services/start.service';
import { NewsDetailPage } from '../../pages-eventi/news-detail/news-detail.page';
import { Evento } from 'src/app/models/evento/evento.model';

@Component({
  selector: 'app-tab-eventi',
  templateUrl: './tab-eventi.page.html',
  styleUrls: ['./tab-eventi.page.scss'],
})
export class TabEventiPage implements OnInit, OnDestroy {

  constructor(private startService: StartService,
              private navController: NavController,
              private modalController: ModalController
              ) { 

                //Recupero la card che dice che non ci sono news
                this.cardNessunaNews = NewsEvento.getNoNews();                
                this.cardNessunEvento = NewsEvento.getNoEventi();                

              }

  //Oggetti per le News
  cardNessunaNews: NewsEvento;
  cardNessunEvento: NewsEvento; 

  /*Usato alla prima richiesta*/
  numMinNews: number = 5; 
  /*Usato se l'utente chiede Mostra tutte */
  numMaxNews: number = 99;
  /*Valore usato per la richiesta*/
  numRequestNews: number = this.numMinNews;

  listNews: NewsEvento[] = [];
  listEventi: Evento[] = [];
  subListEventi: Subscription;  
  
  //Tab Selezionato
  selectedView: string = 'pag-eventi';
  
  selectedArea: Area;
  selectedAreaListen: Subscription;  
  

  ngOnInit(): void {
    this.onListenArea();
    this.onListenEventi();
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
                        this.requestEventi();
                        this.requestNews();
                    })
  }

  /**
   * In ascolto della lista degli eventi
   */
  onListenEventi(): void {
    //Mi sottoscrivo all'ascolto degli eventi
    this.subListEventi = this.startService.listEventi.subscribe(listReceived => {
      this.listEventi = listReceived;
    })
  }

  onUnscribeAll(): void {
    if (this.selectedAreaListen) {
      this.selectedAreaListen.unsubscribe();
    }

    if (this.subListEventi) {
      this.subListEventi.unsubscribe();
    }
  }

  /**
   * L'utente ha scelto un altra pagina
   * @param value Cambio Visualizzazione del Segment
   */
  onChangeSegment(value)
  {
    //ngModel su HTML modifica la prorpieta, qui 
    //nel caso debba effettuare operazioni al cambio
    switch (this.selectedView) {
      case "pag-eventi":
        //Pagina Evento
        this.requestEventi();
        break;
      case "pag-news":
        //Scelta pagina News
        this.requestNews();
        break;
    
      default:
        break;
    }
  }  


  /**
   * Esecuzione del Refresh Dati
   * @param evento 
   */
  doRefresh(evento:any) {
    switch (this.selectedView) {
      case 'pag-eventi':
        this.requestEventi(evento);
        break;
      case 'pag-news':
        this.requestNews(evento);
        break;
    
      default:
        break;
    }
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

  //#region NEWS

  /**
   * Effettua la richiesta delle News
   * @param eventoRefresher Oggetto Evento del Refresher
   */
  requestNews(eventoRefresher?: any) {

    let idArea = (this.selectedArea ? this.selectedArea.ID : '');

    //Richiesta delle News
    this.startService.requestListNews(idArea, this.numRequestNews)
        .then(listNews => {
          console.log(listNews);
            this.listNews = listNews;
            this.afterRefresh(eventoRefresher);
        })
        .catch(error => {
          this.afterRefresh(eventoRefresher);
        });
  }

  /**
   * Richiede la visualizzazione di tutte le news
   */
  onClickShowAllNews() {
    this.numRequestNews = this.numMaxNews;
    this.requestNews();    
  }

  /**
   * Apre in modalità modale la news
   * @param newsDoc News da leggere
   */
  onClickNews(newsDoc: NewsEvento, event: any) {

    //Apro la News in Modale
    this.modalController.create({
      component: NewsDetailPage,
      componentProps: { myNews: newsDoc }
    }).then(modal => {
      modal.present();
    })
  }

  //#endregion  


  //#region EVENTI
  /**
   * Effettua la richiesta degli Eventi da visualizzare
   */
  requestEventi(eventoRefresher?: any) {
    let idArea = (this.selectedArea ? this.selectedArea.ID : '');

    //Effettuo la richiesta
    this.startService.requestNextEventi(idArea)
                     .then(() => {
                      this.afterRefresh(eventoRefresher);
                     })
                     .catch(error => {
                      this.afterRefresh(eventoRefresher);
                     })
  }

  /**
   * Effettuato il Click su un evento
   * @param eventoDoc 
   */
  onClickEvento(eventoDoc: Evento) {
    let arPath: string[];
    
    if (eventoDoc) {
      arPath = this.startService.getUrlPageDetailNewsEventi('evento', eventoDoc.ID);
      this.navController.navigateForward(arPath);
    }
  }
  //#endregion
}
