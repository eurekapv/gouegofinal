import { Component, OnInit } from '@angular/core';
import { NewsEvento } from 'src/app/models/evento/newsevento.model';
import { LoadingController, NavController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { ActivatedRoute } from '@angular/router';
import { StartService } from 'src/app/services/start.service';
import { DocstructureService } from 'src/app/library/services/docstructure.service';




@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

 
  constructor(private router: ActivatedRoute,
                private startService: StartService,
                private loadingController: LoadingController,
                private docStructureSrv: DocstructureService,
                private navController: NavController) { 
    
  }

  newsDoc: NewsEvento=new NewsEvento();
  idPrimaryKey: string = '';

  ngOnInit() {

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


  //#region PULSANTE BACK
  /**
   * Ritorna un Array con il percorso di ritorno
   */
  get backPathArray():string[] {
    let retPath = ['/','appstart-home','tab-eventi'];

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
        this.startService.requestNewsByID(this.idPrimaryKey)        
                          .then(dataReceived => {
  
                            //Dati ricevuti
                            this.newsDoc = dataReceived;
  
                            //Chiudo il Loading
                            elLoading.dismiss();
                            
                          })
                          .catch(error => {
                            elLoading.dismiss();
  
                            //Si è verificato un errore
                            this.startService.presentToastMessage('News non recuperata');
  
                            this.onGoToBack();
                          })
  
      })
  }


  /**
   * Se presente un Link News da controllare
   * @returns TRUE/FALSE
   */
  existLinkNews():boolean {
    let flagExist: boolean = false;
    if (this.newsDoc && 
        this.newsDoc.LINKNEWS && 
        this.newsDoc.LINKNEWS.length != 0) {
          flagExist = true;
    }

    return flagExist;
  }
  /**
   * Apre il link della News
   */
  onClickReadNews(url:string) {
    if (url&&url.length>0){
      Browser.open({url:url})
    }
  }


}
