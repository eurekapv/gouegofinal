import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Utente } from '../models/utente.model';
import { ApicallService } from './apicall.service';
import { StartConfiguration } from '../models/start-configuration.model';


@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  private _utente = new BehaviorSubject<Utente>(new Utente);

  get utente() {
    return this._utente.asObservable();
  }

  constructor(private apiService: ApicallService) { }

  /**
   * Recupera le informazioni di un utente passato per ID
   * @param config Parametri di configurazione chiamata
   * @param idUtente IDUtente da recuperare
   */
  request(config: StartConfiguration, idUtente: string) {
    let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
    const doObject = 'UTENTE';

    //In Testata c'e' sempre l'AppId
    myHeaders = myHeaders.set('APPID',config.appId);
    let myParams = new HttpParams().set('ID',idUtente);
    let myUrl = config.urlBase + '/' + doObject;

    this.apiService
      .httpGet(myUrl, myHeaders, myParams)
      .pipe(map(data => {
        return data.UTENTE
      }))
      .subscribe( resultData => {

        this._utente.next(resultData);
        
      })
  }

}
