import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Evento } from 'src/app/models/evento/evento.model';

@Component({
  selector: 'app-table-eventi',
  templateUrl: './table-eventi.component.html',
  styleUrls: ['./table-eventi.component.scss'],
})
export class TableEventiComponent implements OnInit {

  @Input() set listEventi(value: Evento[]) {
    if (value) {
      this._listEventi = value;
    }
  }
  @Output() clickEvento = new EventEmitter<Evento>();

  _listEventi: Evento[] = [];

  constructor() { }

  ngOnInit() {}

  /**
   * Emetto l'evento di click
   */
  onClickEvento(eventoSelected: Evento) {
    this.clickEvento.emit(eventoSelected);
  }

  /**
   * Calcola giorni mancanti all'evento
   */
  getCountdownDays(evento: Evento): number {
    if (!evento || !evento.DATAINIZIO) {
      return -1;
    }

    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    const eventDate = new Date(evento.DATAINIZIO);
    eventDate.setHours(0, 0, 0, 0);
    
    const diffTime = eventDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  }

  /**
   * Ritorna testo countdown
   */
  getCountdownText(evento: Evento): string {
    const days = this.getCountdownDays(evento);

    if (days < 0) {
      return 'Terminato';
    } else if (days === 0) {
      return 'Oggi';
    } else if (days === 1) {
      return 'Domani';
    } else if (days <= 7) {
      return `${days} giorni`;
    } else if (days <= 30) {
      const weeks = Math.floor(days / 7);
      return `${weeks} settiman${weeks === 1 ? 'a' : 'e'}`;
    } else {
      const months = Math.floor(days / 30);
      return `${months} mes${months === 1 ? 'e' : 'i'}`;
    }
  }

  /**
   * Ritorna icona per sport
   */
  getSportIcon(sport: string): string {
    if (!sport) {
      return 'trophy';
    }

    const sportLower = sport.toLowerCase();

    // Mappa sport -> icone
    if (sportLower.includes('tennis')) {
      return 'tennisball';
    } else if (sportLower.includes('calcio') || sportLower.includes('football')) {
      return 'football';
    } else if (sportLower.includes('basket')) {
      return 'basketball';
    } else if (sportLower.includes('pallavolo') || sportLower.includes('volley')) {
      return 'baseball'; // Purtroppo Ionic non ha volleyball
    } else if (sportLower.includes('nuoto') || sportLower.includes('swim')) {
      return 'water';
    } else if (sportLower.includes('beach') || sportLower.includes('spiaggia')) {
      return 'sunny';
    } else if (sportLower.includes('fitness') || sportLower.includes('gym')) {
      return 'barbell';
    } else if (sportLower.includes('yoga')) {
      return 'body';
    } else if (sportLower.includes('running') || sportLower.includes('corsa')) {
      return 'walk';
    } else {
      return 'trophy';
    }
  }
}