import { Component, OnDestroy, OnInit } from '@angular/core';
//per lo share via browser
import { Share } from '@capacitor/share';
import { DocstructureService } from 'src/app/library/services/docstructure.service'

import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Area } from 'src/app/models/area.model';
import { PageType } from 'src/app/models/valuelist.model'
import { RequestParams } from 'src/app/library/models/requestParams.model';
import { AreaPaymentSetting } from 'src/app/models/areapaymentsetting.model';
import { LogApp } from 'src/app/models/log.model';
import { Swiper, SwiperOptions, Navigation, Pagination } from 'swiper';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { Subscription } from 'rxjs';
import { AlertButton, AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { StartService } from 'src/app/services/start.service';
import { ActivatedRoute } from '@angular/router';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';
import { MyDateTime } from 'src/app/library/models/mydatetime.model';
Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-history-booking',
  templateUrl: './history-booking.page.html',
  styleUrls: ['./history-booking.page.scss'],
})
export class HistoryBookingPage implements OnInit, OnDestroy {

  constructor(
                private router: ActivatedRoute,
                private navCtr: NavController,
                private startService: StartService,
                private toastCtr: ToastController,
                private docStructureService: DocstructureService,
                private loadingController: LoadingController,
                private docstructrureService: DocstructureService,
                private alertController: AlertController
            ) { }

  myPrenotazione: Prenotazione = new Prenotazione();

  startConfig:StartConfiguration;
  subStartConfig:Subscription;
  
  idPrenotazione: string;
  idPianificazione: string;
  historyId: string;
  myArea:Area;

  //i metodi di pagamento possibili
  arPayments : AreaPaymentSetting[] = [];

  //Opzioni per lo slider
  sliderOpts: SwiperOptions = {
    pagination: true,
    slidesPerView: 1,
    spaceBetween: 0,
    initialSlide: 0 
  }  


  /**
   * Recupero di HistoryId e dei documenti Prenotazione/Area necessari 
   */
  ngOnInit() {

    //Mi sottoscrivo per la configurazione
    this.subStartConfig=this.startService.startConfig.subscribe(config=>{
      this.startConfig=config;
    })

    //Creo il loading per il caricamento
    this.loadingController
          .create({
                spinner:'circular',
                message:'Caricamento',
                backdropDismiss:true
          })
          .then(elLoading=>{
            //Presento il loading
            elLoading.present();

            //Cerco il parametro nell'URL
            this.router.paramMap.subscribe(param => {

              if (param.has('historyId')) {
        
                //HistoryID è formato da IDPrenotazione + '-' + IDPianificazione
                this.historyId = param.get('historyId');
        
                if (this.historyId.length !== 0) {

                  this.requestByHistoryId(this.historyId)
                      .then(() => {
                        this.loadingController.dismiss();
                        //Recupero avvenuto correttamente

                      })
                      .catch(error => {
                        this.loadingController.dismiss();
                        //Errori di recupero
                        this.showMessage(error);
                        this.onGoToBack();
                      })
                }
                else {
                  this.showMessage('Informazioni prenotazioni errate');
                  this.onGoToBack();
                }
              }
              else {
                this.showMessage('Informazioni prenotazioni errate');
                this.onGoToBack();
              }
            });
    })

  }  

  ngOnDestroy() {
    if (this.subStartConfig) {
      this.subStartConfig.unsubscribe();
    }
  }  

  //#region RICHIESTE
    /**
   * Richiedo le informazioni con historyID
   * @param historyId HistoryId
   */
  requestByHistoryId(historyId: string): Promise<void> {

      let myIdPrenotazione = '';
      let myIdPianificazione = '';

      const lungHistoryId = 73; //Lunghezza dell'HistoryID
          
      return new Promise<void>((resolve, reject) => {
        
        if (historyId.length == lungHistoryId) {
          //Divido gli elementi
          myIdPrenotazione = historyId.substring(0,36);
          myIdPianificazione = historyId.substring(37,73);
    
          if (myIdPrenotazione.length !== 36 || myIdPianificazione.length !== 36) {
            reject('HistoryId non valido');            
          }
          else {
            //Ecco gli Identificativi
            this.idPrenotazione = myIdPrenotazione;
            this.idPianificazione = myIdPianificazione;

            
            this.startService.requestPrenotazioneById(this.idPrenotazione, 2, true)
                             .then(elPrenotazione => {
                                //Prenotazione recuperata
                                this.myPrenotazione = elPrenotazione;
                                return this.startService.requestAreaById(elPrenotazione.IDAREAOPERATIVA);
                             })
                             .then(elArea => {
                                this.myArea = elArea;
                                //Imposto i dati per i pagamenti
                                this.setPaymentFromArea();    
                                
                                resolve();
                             })
                             .catch(error => {
                                reject(error);
                             })
          }
        }
        else {
          reject('HistoryId non valido');   
        }
      })
  
  
    }

  /**
   * Imposta i pagamenti a seconda dell'area
   */
    setPaymentFromArea() {
      //TODO: Per impostare l'array dei pagamenti bisogna scaricare 
      //dal server l'Area perchè potrebbe essere diversa dall'attuale
    }
  //#endregion


  //#region PULSANTE BACK
  /**
   * Ritorna un Array con il percorso di ritorno
   */
  get backPathArray():string[] {
    let retPath = this.startService.getUrlPageHistoryPersonal('list');

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
        this.navCtr.navigateBack(this.backPathArray);
  }
  
  //#endregion


  //#region METODI INTERFACCIA 

  /**
   * Ritorna una Stringa che identifica l'icona a seconda dello sport
   * @param idSport 
   * @returns 
   */
  getIcon (idSport): string{
    return this.startService.getSportIcon(idSport);
  }

  /**
   * Effettuo lo Sharing della Prenotazione
   * @param docPianificazione 
   */
  onShare(docPianificazione:PrenotazionePianificazione): void {

    let webUrlArea:string = ''; //Link di riferimento dell'area
    let webUrlLogo: string; //Link con il Logo dell'Area
    let messaggio:string;
    let oggetto: string;
    
    

    if (this.myPrenotazione && docPianificazione){

      //Cerco URL della mia Area
      for (const iterator of this.myArea.AREALINKS) {
        if (iterator.TIPOURL==PageType.home) {
          webUrlArea=iterator.REFERURL;
          break;
        }      
      }

      if(!webUrlArea){
        webUrlArea = '';
      }

      //Chiedo il logo per l'area
      webUrlLogo=this.startConfig.getUrlLogo();

      //Compongo il messaggio
      messaggio=this.myPrenotazione.NOMINATIVO + '  ha prenotato il ' + docPianificazione.DATAORAINIZIO.toLocaleDateString()+' alle '+docPianificazione.DATAORAINIZIO.toLocaleTimeString();
      
      if (this.startConfig.companyName){
        messaggio += ' presso '+this.startConfig.companyName;
      }
  
      if (docPianificazione['_INDIRIZZO_Location']){
        messaggio += ' '+docPianificazione['_INDIRIZZO_Location'];
      }
  
      if (docPianificazione['_DENOMINAZIONE_Campo']){
        messaggio += ' (Campo: '+docPianificazione['_DENOMINAZIONE_Campo'];
      }
  
      if (docPianificazione['_DENOMINAZIONE_Sport']){
        messaggio += ', Attività: '+docPianificazione['_DENOMINAZIONE_Sport']+')';
      }
  
      //Compongo l'oggetto
      oggetto='Prenotazione ' + docPianificazione.PROGRESSIVO;
  
      //Se posso condividere
      Share.canShare()
          .then(result => {
            if (result.value) {
              //Effettuo la condivisione
              Share.share({
                title: oggetto,
                text: messaggio,
                url: webUrlArea
              });
              
            }
          });
    }
    else{
      this.showMessage('Errore nella condivisione');
    }

  }  

    /**
   * Utente ha premuto per la cancellazione della data pianificata
   * @param docPianificazione Prenotazione Pianificazione
   */
   onClickTrash(docPianificazione: PrenotazionePianificazione): void {

      let myMessage = '';
      let alertButton: AlertButton[] = [];

      if (docPianificazione) {

        //Pulsanti operativi
        alertButton = [
          {
            text: 'Conferma',
            handler: () => {
                            this.execDeletePianificazione(docPianificazione.ID)
                           }
          },
          {
            text: 'Annulla',
            role: 'cancel'
          }
        ]

        myMessage = 'Stai effettuando la cancellazione della data del ' + MyDateTime.formatDate(docPianificazione.DATAORAINIZIO, 'dd/MM/yyyy');
        myMessage = myMessage + '\n';
        myMessage = myMessage + 'Vuoi proseguire ?';

        //Mostro la domanda
        this.startService.presentAlertMessage(myMessage, 'Sei sicuro ?', alertButton);

      }
    }

    /**
     * Eseguo la cancellazione della data Pianificata (Si tenta la cancellazione)
     * @param idPianificazione 
     */
    execDeletePianificazione(idPianificazione: string){

      this.loadingController.create({
        message: 'Cancellazione...',
        spinner: 'circular',
        backdropDismiss: true
      })
      .then(loading => {
        return loading.present();
      })
      .then(() => {
        //faccio richiesta cancellazione 
        return this.startService.requestDeletePianificazione(idPianificazione)
      })
      .then(resp => {
        //Chiudo il Loading Controller
        this.loadingController.dismiss();
        
        //Visualizzo il messaggio
        this.showMessage(resp.message);
  
        //Se è andato tutto bene
        if(resp.result) {
          
          //Torno Indietro
          this.onGoToBack();          
        }
  
      })
      .catch(resp => {
        this.loadingController.dismiss();
        this.showMessage(resp.message);
      })
      
    }

  //#endregion
/**
 * Visualizza un messaggio
 * @param message Messaggio da mostrare
 */
  showMessage(message: string, type:'alert' | 'toast' = 'alert') {

    if (type == 'alert') {
      this.startService.presentAlertMessage(message);
    }
    else if (type == 'toast') {
      this.startService.presentToastMessage(message);
    }
  }
}
