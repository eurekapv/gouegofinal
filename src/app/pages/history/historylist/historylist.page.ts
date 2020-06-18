import { Component, OnInit } from '@angular/core';
import { Corso } from 'src/app/models/corso.model';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';
import { NavController } from '@ionic/angular';
import { Utente } from 'src/app/models/utente.model';
import { throwError, Subscription } from 'rxjs';
import { UtentePrenotazione } from 'src/app/models/utenteprenotazione.model';
import { StartService } from 'src/app/services/start.service';

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
  listCorsi: Corso[]=[];


  //NON UTILIZZARE QUESTE VARIABILI//
  listPrenotazioni: Prenotazione[]=[];
  listPrenotazioniPianificazione: PrenotazionePianificazione[]=[]
  //NON UTILIZZARE LE VARIABILI SOPRA//

  today = new Date();

  constructor(
    private navCtrl:NavController,
    private startService:StartService
  ) { }

  ngOnInit() {
    console.log('Entriamo qui');
    this.subDocUtente = this.startService.utente
                          .subscribe  (elDocUtente => {
                              this.docUtente = elDocUtente;
                              //Utente arrivato
                              if (this.docUtente) {
                                //Mi sottoscrivo alla ricezione delle prenotazioni
                                this.subListUtentePrenotazioni = this.startService.listUtentePrenotazioni.subscribe(
                                  collPrenotazioni => {
                                    this.listUtentePrenotazione = collPrenotazioni;
                                    console.log(this.listUtentePrenotazione);
                                  }
                                );

                                this.startService.requestUtentePrenotazioni(this.docUtente.ID);
                              }
                          });



      //this.initProva(4);
  }

  onChangeSegment(value)
  {
    this.selectedView=value.detail.value;
  }

  
  initProva(num)
  {
    let corsoProva : Corso;
    let prenotaProva: PrenotazionePianificazione;
    for(let i=0; i<num; i++)
    {
      corsoProva=new Corso();
      prenotaProva=new PrenotazionePianificazione();
      corsoProva.ID=String(i);
      prenotaProva.ID=String(i);
      this.listCorsi.push(corsoProva);
      this.listPrenotazioniPianificazione.push(prenotaProva);
      
    }
  }

  onClickCorso(selectedCorso: Corso)
  {
    this.navCtrl.navigateForward(['/','historylist','course',selectedCorso.ID])

  }

  onClickPrenotazione(selectedPrenotazione:PrenotazionePianificazione)
  {
    this.navCtrl.navigateForward(['/','historylist','booking',selectedPrenotazione.ID])
  }

}
