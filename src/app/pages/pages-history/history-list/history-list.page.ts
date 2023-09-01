import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { Corso } from 'src/app/models/corso.model';
import { LogApp } from 'src/app/models/log.model';
import { Utente } from 'src/app/models/utente.model';
import { UtenteIscrizione } from 'src/app/models/utenteiscrizione.model';
import { UtentePrenotazione } from 'src/app/models/utenteprenotazione.model';
import { Language } from 'src/app/models/valuelist.model';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.page.html',
  styleUrls: ['./history-list.page.scss'],
})
export class HistoryListPage implements OnInit {

  constructor(    
    private navController:NavController,
    private startService:StartService,
    private loadingCtrl:LoadingController,
    private toastCtrl: ToastController,
    private docstructureService: DocstructureService,) { }

  lingua=Language.italiano;  

  docUtente: Utente;
  subDocUtente: Subscription;

  listUtentePrenotazione: UtentePrenotazione[];
  subListUtentePrenotazioni: Subscription;

  selectedView: string='prenotazioni';

  listUtenteCorsi: UtenteIscrizione[];
  subListUtenteIscrizioni: Subscription;

  showTabs: boolean = true;


  today = new Date();


  ngOnInit() {
    //Mi sottoscrivo alla ricezione Prenotazioni e Iscrizioni Corsi
    //Verranno richiesti successivamente
    this.sottoscrizionePrenotazioni();
    this.sottoscrizioneIscrizioni()
  }

  ionViewDidEnter() {
    //Richiesta utente attuale
    this.subDocUtente = this.startService.activeUtenteDoc$
                          .subscribe  (elDocUtente => {
                              this.docUtente = elDocUtente;
                              //Utente arrivato
                              if (this.docUtente) {
                                this.requestPrenotazioni();
                              }

                          });
  }

  //#region RICHIESTE E SOTTOSCRIZIONI

  /**
   * Richiede al server le Prenotazioni
   */
  requestPrenotazioni() {
    if (this.docUtente) {
      if (this.docUtente.ID) {
        this.loadingCtrl.create({
          spinner: 'circular',
          message: 'Caricamento',
          backdropDismiss: true
        })
        .then(loading=>{

          loading.present();

          //Creo il documento di filtro
          let filterUtentePrenotazioni= new UtentePrenotazione(true);
          filterUtentePrenotazioni.IDUTENTE=this.docUtente.ID;

          this.docstructureService.requestNew(filterUtentePrenotazioni)
              .then( list =>{
                      //Copia della lista
                      this.listUtentePrenotazione=list;
                      //Dismetto il loading
                      loading.dismiss();
              })
              .catch(error=>{
                 //Dismetto il loading 
                loading.dismiss();
                LogApp.consoleLog(error,'error');
                this.showMessage('Errore nel caricamento');
              });

        });

      }
    }
  }  

    /**
   * Richiede al server le Iscrizioni Corso
   */
    requestIscrizioni() {
      if (this.docUtente) {
        if (this.docUtente.ID) {
          this.loadingCtrl.create({
            spinner: 'circular',
            message: 'Caricamento',
            backdropDismiss: true
          }).then(loading=>{
  
              loading.present();
              //creo il documento di filtro
              let filterUtenteIscrizioni= new UtenteIscrizione(true);
              filterUtenteIscrizioni.IDUTENTE=this.docUtente.ID
  
              this.docstructureService.requestNew(filterUtenteIscrizioni)
                    .then(list=>{
                          this.listUtenteCorsi=list;
                          loading.dismiss();
                    })
                    .catch(error=>{
                          loading.dismiss();
                          
                          LogApp.consoleLog(error,'error');
                          this.showMessage('Errore nel caricamento');
                    });
  
           });
        }
      }
    }  

  /**
   * Esegue la sottoscrizione ai dati Prenotazioni
   * @param idUtente Utente richiesta
   */
  sottoscrizionePrenotazioni() {
      
    this.subListUtentePrenotazioni = this.startService.listUtentePrenotazioni
                                        .subscribe(collPrenotazioni => {
                                            this.listUtentePrenotazione = collPrenotazioni;                                
                                        }, error => {});
  }  

  /**
  * Esegue la sottoscrizione ai dati Prenotazioni
  * @param idUtente Utente richiesta
  */
  sottoscrizioneIscrizioni() {
      
      this.subListUtenteIscrizioni = this.startService.listUtenteIscrizioni
                                          .subscribe(collIscrizioni => {
                                              this.listUtenteCorsi = collIscrizioni;                                
                                          }, error => {});
  }

  //#endregion


  //#region PULSANTE BACK
  /**
   * Ritorna un Array con il percorso di ritorno
   */
  get backPathArray():string[] {
    let retPath = ['/','appstart-home','tab-agenda'];

    return retPath;
  }
    
  //Ritorna il Path Array Back in formato stringa concatenata
  get backButtonHref(): string {
      let myHref = '';
      myHref = this.backPathArray.join('/').substring(1);
  
      return myHref;
  }
    
  /**
   * Torno alla pagina Home
   */
  onGoToBack() {
        this.navController.navigateBack(this.backPathArray);
  }
  
  //#endregion

/**
 * 
 * @param value Cambio Visualizzazione
 */
  onChangeSegment(value)
  {
    
    switch (this.selectedView) {
      case 'prenotazioni':
        this.requestPrenotazioni();
        break;
      case 'corsi':
        this.requestIscrizioni();
        break;
    
      default:
        break;
    }
  }

  //#region CLIC SU CORSO / PRENOTAZIONE
  /**
 * E' stato cliccato un corso e si vuole visualizzare i dati di Iscrizione
 * @param selectedCorso Corso Selezionato
 */
  onClickCorso(selectedCorso: Corso)
  {
    //Concateno IDPrenotazione con IDPianificazione
    let historyId = selectedCorso.ID;
    let urlPath = [];
    urlPath = this.startService.getUrlPageHistoryPersonal('course', historyId);
    this.navController.navigateForward(urlPath);
  }

  /**
   * E' stata selezionata una prenotazione e si vuole la scheda di conferma
   * @param selectedPrenotazione Prenotazione
   */
  onClickPrenotazione(selectedPrenotazione:UtentePrenotazione)
  {
    //Concateno IDPrenotazione con IDPianificazione
    let historyId = selectedPrenotazione.IDPRENOTAZIONE + '-' + selectedPrenotazione.ID;
    let urlPath = [];
    urlPath = this.startService.getUrlPageHistoryPersonal('book', historyId);
    //MODIFICARE
    this.navController.navigateForward(urlPath)
  } 

  //Richiesta di Refresh
  doRefresh(event) {

    if(this.docUtente && this.docUtente.ID) {
      switch (this.selectedView) {
        case 'prenotazioni':
  
          let filterUtentePrenotazioni = new UtentePrenotazione(true);
          filterUtentePrenotazioni.IDUTENTE=this.docUtente.ID
  
  
          this.docstructureService.requestNew(filterUtentePrenotazioni)
                .then(list=>{
                        this.listUtentePrenotazione=list;
                        //Sparisce il pullToRefresh Image
                        event.target.complete();
                })
                .catch(error=>{
                        //Sparisce il pullToRefresh Image
                        event.target.complete();
  
                        
                        LogApp.consoleLog(error,'error');
                        this.showMessage('Errore nel caricamento');
                });
          break;
  
        case 'corsi':
          //Richiedo le Iscrizioni
          let filterUtenteIscrizioni= new UtenteIscrizione(true);
          filterUtenteIscrizioni.IDUTENTE=this.docUtente.ID
  
          this.docstructureService.requestNew(filterUtenteIscrizioni)
                .then(list=>{
                    
                        this.listUtenteCorsi=list;
                        //Sparisce il pullToRefresh Image
                        event.target.complete();
                })
                .catch(error=>{
  
                        //Sparisce il pullToRefresh Image
                        event.target.complete();
                        
                        LogApp.consoleLog(error,'error');
                        this.showMessage('Errore nel caricamento');
                });
      
        default:
          break;
      }
    }

  }  
  
  //#endregion


/**
 * Mostra un messaggio con ToastController
 * @param message Messaggio da mostrare
 */
  showMessage(message: string) {

    //Creo un messaggio
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
    .then(tstMsg => {
      tstMsg.present();
    });

  }

  onScroll(event:any){
    if(event.detail.currentY < 5){
      this.showTabs = true;
    }
    else{
      if (event['detail']['deltaY'] > 20){
        this.showTabs = false;
      }
      else if (event['detail']['deltaY'] < -20){
        this.showTabs = true;
      }
    }  
  }  
}
