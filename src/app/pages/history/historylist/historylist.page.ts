import { Component, OnInit } from '@angular/core';
import { Corso } from 'src/app/models/corso.model';
import { Language } from 'src/app/models/valuelist.model';
import { NavController, LoadingController, ToastController, Gesture, GestureController } from '@ionic/angular';
import { Utente } from 'src/app/models/utente.model';
import { Subscription } from 'rxjs';
import { UtentePrenotazione } from 'src/app/models/utenteprenotazione.model';
import { StartService } from 'src/app/services/start.service';

import { UtenteIscrizione } from 'src/app/models/utenteiscrizione.model';
import { type } from 'os';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { UtenteprenotazioneService } from 'src/app/services/utenteprenotazione.service';


@Component({
  selector: 'app-historylist',
  templateUrl: './historylist.page.html',
  styleUrls: ['./historylist.page.scss'],
})
export class HistorylistPage implements OnInit {

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

  constructor(
    private navCtrl:NavController,
    private startService:StartService,
    private loadingCtrl:LoadingController,
    private toastCtrl: ToastController,
    private docstructureService:DocstructureService,
    private gestureCtrl: GestureController
  ) 
  { 
     
  }

  ngOnInit() {

 
    //Mi sottoscrivo alla ricezione Prenotazioni e Iscrizioni Corsi
    //Verranno richiesti successivamente
    this.sottoscrizionePrenotazioni();
    this.sottoscrizioneIscrizioni()


    // //Richiesta utente attuale
    // this.subDocUtente = this.startService.utente
    //                       .subscribe  (elDocUtente => {
    //                           this.docUtente = elDocUtente;
    //                           //Utente arrivato
    //                           if (this.docUtente) {
    //                             this.requestPrenotazioni();
    //                           }

    //                       });

  }

  ionViewDidEnter() {
    //Richiesta utente attuale
    this.subDocUtente = this.startService.utente
                          .subscribe  (elDocUtente => {
                              this.docUtente = elDocUtente;
                              //Utente arrivato
                              if (this.docUtente) {
                                this.requestPrenotazioni();
                              }

                          });
  }


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

                console.log(error);
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
                      // console.log(this.listUtenteCorsi)
                        loading.dismiss();
                  })
                  .catch(error=>{
                        loading.dismiss();
                        console.log(error);
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

  

  /**
   * E' stato cliccato un corso e si vuole visualizzare i dati di Iscrizione
   * @param selectedCorso Corso Selezionato
   */
  onClickCorso(selectedCorso: Corso)
  {
    this.navCtrl.navigateForward(['/','historylist','course',selectedCorso.ID])

  }

  /**
   * E' stata selezionata una prenotazione e si vuole la scheda di conferma
   * @param selectedPrenotazione Prenotazione
   */
  onClickPrenotazione(selectedPrenotazione:UtentePrenotazione)
  {
    //Concateno IDPrenotazione con IDPianificazione
    let historyId = selectedPrenotazione.IDPRENOTAZIONE + '-' + selectedPrenotazione.ID;

    this.navCtrl.navigateForward(['/','historylist','booking',historyId])
  }

  //Richiesta di Refresh
  doRefresh(event) {

    if(this.docUtente&&this.docUtente.ID)
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

                      console.log(error);
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
                      console.log(error);
                      this.showMessage('Errore nel caricamento');
              });
    
      default:
        break;
    }

  }


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

  onClickSettings(){
    this.navCtrl.navigateForward('/account');
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
