import { Component, OnInit } from '@angular/core';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { Subscription } from 'rxjs';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';
import { Campo } from 'src/app/models/campo.model';

@Component({
  selector: 'app-historybook',
  templateUrl: './historybook.page.html',
  styleUrls: ['./historybook.page.scss'],
})
export class HistorybookPage implements OnInit {

  activePrenotazione: Prenotazione;
  subActivePrenotazione: Subscription;

  //Elemento 1 di Pianificazione contenuta in activePrenotazione
  docPianificazione: PrenotazionePianificazione;

 //Location selezionata
  selectedLocation: Location;
  
  //Campo in versione normale
  selectedCampo: Campo;

  constructor() { }

  ngOnInit() {
  }

}
