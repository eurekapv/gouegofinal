import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
//per lo share via browser
import { Share, ShareOptions } from '@capacitor/share';

import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Area } from 'src/app/models/struttura/area.model';
import { CustomAlertClass, PageType } from 'src/app/models/zsupport/valuelist.model'

import { AreaPaymentSetting } from 'src/app/models/struttura/areapaymentsetting.model';

import { Swiper, Navigation, Pagination } from 'swiper';
import { Prenotazione } from 'src/app/models/prenotazioni/prenotazione.model';
import { Subscription } from 'rxjs';
import { AlertButton, IonAccordionGroup, LoadingController, NavController } from '@ionic/angular';
import { StartService } from 'src/app/services/start.service';
import { ActivatedRoute } from '@angular/router';
import { PrenotazionePianificazione } from 'src/app/models/prenotazioni/prenotazionepianificazione.model';
import { MyDateTime } from 'src/app/library/models/mydatetime.model';
import { LogApp } from 'src/app/models/zsupport/log.model';
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
                private loadingController: LoadingController,
            ) { }

  myPrenotazione: Prenotazione = new Prenotazione();
  activePianificazione: PrenotazionePianificazione = new PrenotazionePianificazione();
  qrCodeActivePianificazione: string = '';

  indexPianificazione: number = 0;
  loadingComplete: boolean = false;

  startConfig:StartConfiguration;
  subStartConfig:Subscription;
  
  idPrenotazione: string;
  idPianificazione: string;
  historyId: string;
  myArea:Area;

  @ViewChild('accordiondate', { static: true }) accordionGroup: IonAccordionGroup;

  //i metodi di pagamento possibili
  arPayments : AreaPaymentSetting[] = [];

  // Gestione Tab - NUOVA AGGIUNTA
  activeTab: 'dettagli' | 'pagamento' = 'dettagli';


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
                        this.loadingComplete = true;

                      })
                      .catch(error => {
                        this.loadingController.dismiss();
                        //Errori di recupero
                        this.showMessage(error);
                        this.onGoToBack();
                      })
                }
                else {
                  this.showMessage('Informazioni prenotazione errate');
                  this.onGoToBack();
                }
              }
              else {
                this.showMessage('Informazioni prenotazione errate');
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

  /**
   * Ritorna il numero di date pianificate per la prenotazione
   */
  get numDatePianificate(): number {
    let numDate: number = 0;
    if (this.myPrenotazione && this.myPrenotazione.PRENOTAZIONEPIANIFICAZIONE) {
      numDate = this.myPrenotazione.PRENOTAZIONEPIANIFICAZIONE.length;
    }

    return numDate;
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

            //Richiedo prima 
            this.startService.requestPrenotazioneById(this.idPrenotazione, 2, true, true)
                             .then(elPrenotazione => {
                                //Prenotazione recuperata
                                this.myPrenotazione = elPrenotazione;
                                LogApp.consoleLog('Prenotazione trovata');
                                LogApp.consoleLog(this.myPrenotazione);
                                //Imposto la Pianificazione attiva
                                return this.setActivePianificazione(this.myPrenotazione, this.idPianificazione);
                              })
                              .then(() => {
                                //Richiedo l'Area di riferimento
                                return this.startService.requestAreaById(this.myPrenotazione.IDAREAOPERATIVA);
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
     * Imposta il documento myPianificazione sulla base del parametro
     * Ritorna una Prenotazione (utile per la request Iniziale)
     * @param idPianificazione 
     */
    setActivePianificazione(prenotazioneDoc:Prenotazione, idPianificazione: string): Promise<Prenotazione> {
      return new Promise<Prenotazione>((resolve, reject) => {

        let indexFind = 0;
        if (prenotazioneDoc && idPianificazione.length != 0) {
          if (prenotazioneDoc.PRENOTAZIONEPIANIFICAZIONE && prenotazioneDoc.PRENOTAZIONEPIANIFICAZIONE.length != 0) {
            
            //Controlliamo se presente
            indexFind = prenotazioneDoc.PRENOTAZIONEPIANIFICAZIONE.findIndex(itemData => {
              return itemData.ID == idPianificazione;
            })

            if (indexFind != -1) {
              //Memorizzo le informazioni
              this.idPianificazione = idPianificazione;
              this.activePianificazione = prenotazioneDoc.PRENOTAZIONEPIANIFICAZIONE[indexFind];
              this.qrCodeActivePianificazione = this.activePianificazione.getQrCode();

              this.indexPianificazione = indexFind + 1;
              resolve(prenotazioneDoc);
            }
            else {
              reject('Pianificazione non trovata');
            }
          }
          else {
            reject('Date pianificate non presenti');
          }
        }
        else {
          reject('Prenotazione non presente');
        }
      })
    }

    /**
     * Cambiamento della Pianificazione da mostrare
     * @param idPianificazione 
     */
    onChangeActivePianificazione(idPianificazione: string) {
      this.setActivePianificazione(this.myPrenotazione, idPianificazione)
          .then(() => {
            //Chiudo l'accordion
            const nativeEl = this.accordionGroup;
            if (nativeEl) {
              nativeEl.value = undefined;
            }
          })
          .catch(error => {
            this.showMessage(error);
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
  
      if (docPianificazione['_DENOMINAZIONE_Campo']){
        messaggio += ' per il campo '+docPianificazione['_DENOMINAZIONE_Campo'];
      }

      oggetto=this.startConfig.companyName+' - Prenotazione';
     
      let shareOptions:ShareOptions={
        title: oggetto,
        text: messaggio,
        url: webUrlArea,
        dialogTitle: 'Condividi la prenotazione'
      }

      Share.share(shareOptions);
    }
  }

  /**
   * Click sul pulsante Elimina
   * @param docPianificazione 
   */
  onClickTrash(docPianificazione:PrenotazionePianificazione){

    let arrayButtons:AlertButton[]=[];
    let msgPrinc='';
    let subHeader='';

    //Preparo i Pulsanti
    let btnAnnulla:AlertButton={
      text:'Annulla',
      role:'cancel',
    }

    let btnConferma:AlertButton={
      text:'Conferma',
      role:'confirm',
      handler: ()=>{
        this.onDeletePianificazione(docPianificazione);
      }
    }

    arrayButtons.push(btnAnnulla);
    arrayButtons.push(btnConferma);

    //Messaggio
    msgPrinc='Confermi di voler eliminare la prenotazione del '+docPianificazione.DATAORAINIZIO.toLocaleDateString()+' alle '+docPianificazione.DATAORAINIZIO.toLocaleTimeString()+'?';
    
    if (this.numDatePianificate>1){
      subHeader='La prenotazione ha più date pianificate';
    }

    this.startService.presentAlertMessage(msgPrinc, 'Eliminazione Prenotazione', arrayButtons, subHeader, CustomAlertClass.subtitleWarning);

  }

  /**
   * Eliminazione della Pianificazione
   * @param docPianificazione 
   */
  onDeletePianificazione(docPianificazione:PrenotazionePianificazione){
    
    this.loadingController.create({
      message:'Eliminazione in corso',
      spinner:'circular',
      backdropDismiss:false
    })
    .then(elLoading=>{
      elLoading.present();

      //Chiedo al server di eliminare la piafinicazione
      this.startService.requestDeletePianificazione(docPianificazione.ID)
                       .then((data)=>{
                          elLoading.dismiss();
                          if (data.result) {
                            this.showMessage('Prenotazione eliminata correttamente','toast');
                            //Torno indietro
                            this.onGoToBack();
                          }
                          else {
                            this.showMessage(data.message, 'alert');
                          }

                       })
                       .catch(error=>{
                          elLoading.dismiss();
                          this.showMessage(error);
                       })
    })
  }

  /**
   * Mostra un messaggio all'utente
   * @param message 
   * @param type 
   */
  showMessage(message:string, type:'alert'|'toast'='alert'){
    if (type=='alert'){
      this.startService.presentAlertMessage(message);
    }
    else if (type=='toast'){
      this.startService.presentToastMessage(message);
    }
  }

  //#endregion

}