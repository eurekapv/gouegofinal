import { Component, OnInit } from '@angular/core';
import { Corso } from 'src/app/models/corso.model';

import { NavController } from '@ionic/angular';
import { Utente } from 'src/app/models/utente.model';
import { Subscription } from 'rxjs';
import { UtentePrenotazione } from 'src/app/models/utenteprenotazione.model';
import { StartService } from 'src/app/services/start.service';
import { Settimana } from 'src/app/models/settimana.model';
import { Language } from 'src/app/models/valuelist.model';

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
  listUtenteCorsi;

  //Mostra il loading
  receivedPrenotazioni: boolean;
  receivedCorsi: boolean;

  today = new Date();

  constructor(
    private navCtrl:NavController,
    private startService:StartService
    
  ) { }

  ngOnInit() {
    this.receivedPrenotazioni = false;
    this.receivedCorsi = false;

    //Richiesta utente attuale
    this.subDocUtente = this.startService.utente
                          .subscribe  (elDocUtente => {
                              this.docUtente = elDocUtente;
                              //Utente arrivato
                              if (this.docUtente) {
                                //Non ho ancora ricevuto nulla
                                this.receivedPrenotazioni = false;
                                //Richiedo le Prenotazioni
                                this.startService.requestUtentePrenotazioni(this.docUtente.ID);
                                //Mi sottoscrivo alla ricezione
                                this.sottoscrizionePrenotazioni();
                              }
                          });
    //TODO da rimuovere
    this.initCorsiProva()

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

    console.log(selectedPrenotazione.IDPRENOTAZIONE);
    this.navCtrl.navigateForward(['/','historylist','booking',historyId])
  }

  initCorsiProva()
  {
    for (let i=0; i<4; i++)
    {
      let corso = new Corso()
      corso.DENOMINAZIONE='Base 2';
      corso._SETTIMANA.push(new Settimana(3, Language.italiano));
      corso._DESCRSPORT="Beach Volley";
      corso.DATAINIZIO=new Date();


      this.listUtenteCorsi.push(corso);
    }
    console.log(this.listUtenteCorsi);
  }



}
