import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsEvento } from 'src/app/models/newsevento.model';
import { Subscription } from 'rxjs';
import { StartService } from 'src/app/services/start.service';
import { Area } from 'src/app/models/area.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit, OnDestroy {

  listNews: NewsEvento[] = [];
  subListNews: Subscription;
  loading: boolean;
  areaSelected: Area; //Area Selezionata
  subAreaSelected: Subscription; 
  maxRecord = 20; //Numero massimo di News richieste al server
  noNewsCard: NewsEvento; //Card per quando non ci sono Eventi

  myEvent: any;

  constructor(private startService: StartService,
              private navController: NavController) { 

    //Recupero la card che dice che non ci sono eventi
    this.noNewsCard = NewsEvento.getNoNews();

    this.loading = true;

    // Recupero subito l'area non Observable
    this.areaSelected = this.startService.areaSelectedValue;


    //Sottoscrivo alla ricezione delle news
    this.subListNews = this.startService.listNews.subscribe(collNews => {
      this.listNews = collNews;

      //Se qualcosa arriva spengo il loading
      this.loading = false;

      if (this.myEvent) {
        this.myEvent.target.complete();
        this.myEvent = undefined;
      }
    });

    //Chiedo le News
    this.requestNews();
    
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subAreaSelected) {
      this.subAreaSelected.unsubscribe();
    }
  }

  /**
   * Richiesta al servizio delle News
   */
  requestNews() {
    if (this.areaSelected) {
      if (this.areaSelected.ID) {
        this.loading = true;
        //Faccio la richiesta al server
        this.startService.requestNews(this.areaSelected.ID, 20);
      }
    }
  }


  /** Eseguo un refresh delle news */
  doRefresh(event) {
    
    this.myEvent = event;

    this.requestNews();

    // setTimeout(() => {
    //   console.log('Async operation has ended');
    //   event.target.complete();
    // }, 2000);
  }

  /**
   * Apre in modalità dettaglio la news
   * @param news News da leggere
   */
  onClickNews(news: NewsEvento) {
    if (news) {
      // Le news Inserted sono finte, non posso aprirle
      if (!news.do_inserted) {
        this.navController.navigateForward(['/','news',news.ID]);
      }
    }
  }
}
