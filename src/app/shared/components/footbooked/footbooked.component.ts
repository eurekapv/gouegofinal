import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';


@Component({
  selector: 'app-footbooked',
  templateUrl: './footbooked.component.html',
  styleUrls: ['./footbooked.component.scss'],
})
export class FootbookedComponent implements OnInit {

  /* Componente mostrato nella pagina di Booking per segnalare la prenotazione che l'utente sta effettuando*/


  @Input() myPrenotaPianifica: PrenotazionePianificazione;
  @Output() clickPrenota = new EventEmitter<PrenotazionePianificazione>();

  constructor() { 

  }

  ngOnInit() {}

  /** Emette un evento di Click sul pulsante di prenotazione */
  onClickPrenota() {
    this.clickPrenota.emit(this.myPrenotaPianifica);
  }





}
