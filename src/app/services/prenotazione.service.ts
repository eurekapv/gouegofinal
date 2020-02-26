import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { ApicallService } from './apicall.service';
import { Prenotazione } from '../models/prenotazione.model';
import { StartConfiguration } from '../models/start-configuration.model';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {

  private _listPrenotazioni = new BehaviorSubject<Prenotazione[]>([]);

  get listPrenotazioni() {
    return this._listPrenotazioni.asObservable();
  }

  constructor(private apiService: ApicallService) { }


  /**
   * 
   * @param config Parametri di configurazione
   * @param idUtente idUtente
   */
  request(config: StartConfiguration, idUtente: string) {
    let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
    const doObject = 'PRENOTAZIONE';
    
    // In Testata c'e' sempre l'AppId
    myHeaders = myHeaders.set('APPID',config.appId);
    // Nei parametri imposto il gruppo Sportivo
    let myParams = new HttpParams().set('IDGRUPPOSPORTIVO',config.gruppo.ID);

    let myUrl = config.urlBase + '/' + doObject;

    this.apiService
      .httpGet(myUrl, myHeaders, myParams)
      .pipe(map(fullData => {
        return fullData.PRENOTAZIONE
      }))
      .subscribe( resultData => {
        console.log(resultData);
      });
  }


  private _addMultiplePrenotazioni(dataJSON: any) {

  }
}
