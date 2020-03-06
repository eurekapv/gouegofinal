import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SlotDay } from '../models/imdb/slotday.model';
import { ApicallService } from './apicall.service';
import { StartConfiguration } from '../models/start-configuration.model';

@Injectable({
  providedIn: 'root'
})
export class SlotoccupazioneService {

  _docOccupazione = new BehaviorSubject<SlotDay>(new SlotDay());

  get docOccupazione() {
    return this._docOccupazione.asObservable();
  }

  constructor(private apiCall: ApicallService) { }

  /**
   * Prende in ingresso il template Slot Day, richiede al server i soli dati di occupazione di un determinato campo per un determinato giorno,
   * sistema il template con le occupazioni e lo riporta come risultato Observable
   * 
   * 
   * @param config Dati configurazione
   * @param idLocation Location richiesta
   * @param idCampo Campo richiesto
   * @param dataGiorno Giorno richiesto
   */
  request(config: StartConfiguration,
          templateSlotDay: SlotDay,
          idLocation: string, 
          idCampo: string, 
          dataGiorno: Date) {

  console.log('Richiesta dati occupazione');
  this._docOccupazione.next(templateSlotDay);


  } 
  
  
}
