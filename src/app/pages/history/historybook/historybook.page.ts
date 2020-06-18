import { Component, OnInit } from '@angular/core';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { Subscription } from 'rxjs';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';
import { Campo } from 'src/app/models/campo.model';
import { Location } from 'src/app/models/location.model';


@Component({
  selector: 'app-historybook',
  templateUrl: './historybook.page.html',
  styleUrls: ['./historybook.page.scss'],
})
export class HistorybookPage implements OnInit {

  activePrenotazione: Prenotazione = new Prenotazione();
  subActivePrenotazione: Subscription;

  //Elemento 1 di Pianificazione contenuta in activePrenotazione
  docPianificazione: PrenotazionePianificazione = new PrenotazionePianificazione();

 //Location selezionata
  selectedLocation: Location = new Location();
  
  //Campo in versione normale
  selectedCampo: Campo = new Campo();

  constructor() { }

  ngOnInit() {
  }

}
