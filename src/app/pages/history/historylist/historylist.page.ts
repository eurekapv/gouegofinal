import { Component, OnInit } from '@angular/core';
import { Corso } from 'src/app/models/corso.model';

import { NavController } from '@ionic/angular';
import { Utente } from 'src/app/models/utente.model';
import { Subscription } from 'rxjs';
import { UtentePrenotazione } from 'src/app/models/utenteprenotazione.model';
import { StartService } from 'src/app/services/start.service';

import { Utenteiscrizione } from 'src/app/models/utenteiscrizione.model';


@Component({
  selector: 'app-historylist',
  templateUrl: './historylist.page.html',
  styleUrls: ['./historylist.page.scss'],
})
export class HistorylistPage implements OnInit {

  docUtente: Utente;
  subDocUtente: Subscription;

  listUtentePrenotazione: UtentePrenotazione[];
  subListUtentePrenotazioni: Subscription;

  selectedView: string='prenotazioni';

  listUtenteCorsi: Utenteiscrizione[];
  subListUtenteIscrizioni: Subscription;

  //Mostra il loading
  receivedPrenotazioni: boolean;
  receivedCorsi: boolean;

  //Eventi dei Refresh
  eventRefresherPrenotazioni: any;
  eventRefresherIscrizioni: any;


  today = new Date();

  constructor(
    private navCtrl:NavController,
    private startService:StartService    
  ) { }

  ngOnInit() {
    this.receivedPrenotazioni = false;
    this.receivedCorsi = false;

    //Mi sottoscrivo alla ricezione Prenotazioni e Iscrizioni Corsi
    //Verranno richiesti successivamente
    this.sottoscrizionePrenotazioni();
    this.sottoscrizioneIscrizioni()


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
        //Segno di non aver ancora ricevuto nulla
        this.receivedPrenotazioni = false;
        //Richiedo le Prenotazioni
        this.startService.requestUtentePrenotazioni(this.docUtente.ID);
      }
    }
  }

    /**
   * Richiede al server le Iscrizioni Corso
   */
  requestIscrizioni() {
    if (this.docUtente) {
      if (this.docUtente.ID) {
        //Segno di non aver ancora ricevuto nulla
        this.receivedCorsi = false;
        //Richiedo le Iscrizioni
        this.startService.requestUtenteIscrizioni(this.docUtente.ID);
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
                                              this.receivedPrenotazioni = true;

                                              //Disattivo il refresh se rimasto attivo
                                              if (this.eventRefresherPrenotazioni) {
                                                if (this.eventRefresherPrenotazioni.target) {
                                                  this.eventRefresherPrenotazioni.target.complete();
                                                  this.eventRefresherPrenotazioni = null;
                                                }
                                              }
                                          }, error => {
                                              //Avvisare dell'errore

                                              //Disattivo il refresh se rimasto attivo
                                              this.receivedPrenotazioni = true;

                                              if (this.eventRefresherPrenotazioni) {
                                                if (this.eventRefresherPrenotazioni.target) {
                                                  this.eventRefresherPrenotazioni.target.complete();
                                                  this.eventRefresherPrenotazioni = null;
                                                }
                                              }                                            
                                          }
      );
  }

    /**
   * Esegue la sottoscrizione ai dati Prenotazioni
   * @param idUtente Utente richiesta
   */
  sottoscrizioneIscrizioni() {
      
    this.subListUtenteIscrizioni = this.startService.listUtenteIscrizioni
                                        .subscribe(collIscrizioni => {
                                            this.listUtenteCorsi = collIscrizioni;                                
                                            this.receivedCorsi = true;
                                            console.log(this.listUtenteCorsi);
                                            if (this.eventRefresherIscrizioni) {
                                              if (this.eventRefresherIscrizioni.target) {
                                                this.eventRefresherIscrizioni.target.complete();
                                                this.eventRefresherIscrizioni = null;
                                              }
                                            }
                                        }, error => {
                                              //Avvisare dell'errore
                                              
                                              this.receivedCorsi = true;

                                              if (this.eventRefresherIscrizioni) {
                                                if (this.eventRefresherIscrizioni.target) {
                                                  this.eventRefresherIscrizioni.target.complete();
                                                  this.eventRefresherIscrizioni = null;
                                                }
                                              }                                       
                                          }
    );
}

  /**
   * 
   * @param value Cambio Visualizzazione
   */
  onChangeSegment(value)
  {
    this.selectedView=value.detail.value;
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

    
    switch (this.selectedView) {
      case 'prenotazioni':
          this.eventRefresherPrenotazioni = event;
          this.requestPrenotazioni();
        break;

      case 'corsi':
        this.eventRefresherIscrizioni = event;
        this.requestIscrizioni();
        break;
    
      default:
        break;
    }

  }


  //TODO Eliminare
  // initCorsiProva()
  // {
  //   for (let i=0; i<4; i++)
  //   {
  //     let utenteCorso = new Utenteiscrizione();
  //     utenteCorso.DENOMINAZIONECORSO ='Base 2';
  //     utenteCorso.GIORNIPREVISTI='1';
  //     utenteCorso.DENOMINAZIONESPORT ="Beach Volley";
  //     utenteCorso.DATAINIZIOCORSO =new Date();
  //     utenteCorso.INDIRIZZOLOCATION="Via Lorenteggio 238";
  //     utenteCorso.COMUNELOCATION="Milano";
  //     this.listUtenteCorsi.push(utenteCorso);
  //     this.receivedCorsi=true;
  //   }
  //   console.log(this.listUtenteCorsi);
  // }



}
