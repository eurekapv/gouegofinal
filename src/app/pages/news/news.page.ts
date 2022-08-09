import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsEvento } from 'src/app/models/newsevento.model';
import { Subscription } from 'rxjs';
import { StartService } from 'src/app/services/start.service';
import { Area } from 'src/app/models/area.model';
import { NavController, LoadingController, ToastController, ModalController } from '@ionic/angular';
import { NewsdetailPage } from 'src/app/pages/newsdetail/newsdetail.page'
import { LogApp } from 'src/app/models/log.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit, OnDestroy {

  listNews: NewsEvento[] = [];
  subListNews: Subscription;
  areaSelected: Area; //Area Selezionata
  subAreaSelected: Subscription; 
  maxRecord = 20; //Numero massimo di News richieste al server
  noNewsCard: NewsEvento; //Card per quando non ci sono Eventi


  constructor(private startService: StartService,
              private navController: NavController,
              private loadingController: LoadingController,
              private toastController: ToastController,
              private modalController: ModalController) { 

    //Recupero la card che dice che non ci sono eventi
    this.noNewsCard = NewsEvento.getNoNews();

    this.requestNews();


    
  }

  /**
   * Richiede al server le news
   */
  private requestNews() {
    this.loadingController.create({
      spinner: 'circular',
      message: 'Caricamento',
      backdropDismiss: true
    }).then(loading => {
      loading.present();
      // Recupero subito l'area non Observable
      this.areaSelected = this.startService.areaSelectedValue;
      this.startService.requestNews(this.areaSelected.ID, this.maxRecord).then(data => {
        this.listNews = data;
        loading.dismiss();
      }).catch(error => {
        
        LogApp.consoleLog(error,'error');
        loading.dismiss();
        this.showMessage("Errore nel caricamento");
      });
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subAreaSelected) {
      this.subAreaSelected.unsubscribe();
    }
  }



  /** Eseguo un refresh delle news */
  doRefresh(evento:any) {
        
    this.startService.requestNews(this.areaSelected.ID, this.maxRecord).then(data => {
      this.listNews = data;
      evento.target.complete();
    }).catch(error => {
      
      LogApp.consoleLog(error,'error');
      evento.target.complete();
      this.showMessage("Errore nel caricamento");
    });

    
  }

  /**
   * Apre in modalità modale la news
   * @param news News da leggere
   */
  onClickNews(news: NewsEvento, event:any) {
      // Le news Inserted sono finte, non posso aprirle
        //this.navController.navigateForward(['/','news',news.ID]);
      this.modalController.create({
        component:NewsdetailPage,
        componentProps:{myNews:news}
      }).then(modal=>{
        modal.present();
      })
      }
  

  showMessage(messaggio:string){
    this.toastController.create({
      message:messaggio
    }).then(toast=>{
      toast.present();
    })
  }
}
