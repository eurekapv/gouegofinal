import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { PianificazioneCorso } from '../models/pianificazionecorso.model';
import { ApicallService } from './apicall.service';
import { StartConfiguration } from '../models/start-configuration.model';
import { LogApp } from '../models/log.model';


@Injectable({
  providedIn: 'root'
})
export class CourseschedulerService {

  _calendarioCorso = new BehaviorSubject<PianificazioneCorso[]>([]);

  constructor(private apiService: ApicallService) { }


  get calendarioCorso() {
    return this._calendarioCorso.asObservable();
  }

    /**
   * Effettua una chiamata al server per il recupero dei corsi
   * Utilizzare il documento di Filtro per richiedere dati filtrati
   * @param config Parametri di configurazione
   * @param idCorso Corso Richiesto
   */
  request(config: StartConfiguration, idCorso: string) {
    return new Promise ((resolve, reject)=>{
      let myHeaders = config.getHttpHeaders();
      //new HttpHeaders({'Content-type':'text/plain'});
      const doObject = 'PIANIFICAZIONECORSO';
  
      //FIXME: ELIMINARE
      //In Testata c'e' sempre l'AppId
      //myHeaders = myHeaders.set('appid',config.appId);
      
      let myUrl = config.urlBase + '/' + doObject;  
  
      //Nei Parametri imposto il corso richiesto
      let myParams = new HttpParams().set('IDCORSO',idCorso);
  
      
      //Elimino le schedulazioni presenti
      this.emptyCalendario();
  
      this.apiService
        .httpGet(myUrl, myHeaders, myParams)
        .pipe(map(data => {
          return data.PIANIFICAZIONECORSO
        }))
        .subscribe( resultData => {
  
          LogApp.consoleLog(resultData);
          
          if (resultData) {
            resultData.forEach(element => {
    
              let newCorsoCalendario = new PianificazioneCorso();
              newCorsoCalendario.setJSONProperty(element);
              LogApp.consoleLog(newCorsoCalendario);
              this.addCorsoCalendario(newCorsoCalendario);
              resolve();
            },
            error=>{
              reject(error);
            });
          }
        })

    })
  }

  /**
   * Aggiunge una schedulazione
   * @param objCorsoScheduler Schedulazione Corso
   */
  addCorsoCalendario(objCorsoScheduler: PianificazioneCorso) {
    this.calendarioCorso
      .pipe(take(1))
      .subscribe( collCalendario => {
        this._calendarioCorso.next( collCalendario.concat(objCorsoScheduler));
      })
  }


  /**
   * Svuota il calendario presente
   */
  emptyCalendario() {
    this._calendarioCorso.next([]);
  }
}
