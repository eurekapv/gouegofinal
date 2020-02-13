import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Utente } from '../models/utente.model';
import { ApicallService } from './apicall.service';
import { StartConfiguration } from '../models/start-configuration.model';
import { RequestState } from '../models/valuelist.model';


@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  private _utente = new BehaviorSubject<Utente>(new Utente);
  private _utenteLoggato = new BehaviorSubject<boolean>(false);
  

  get utente() {
    return this._utente.asObservable();
  }

  get utenteLoggato() {
    return this._utenteLoggato.asObservable();
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

        let newUtente = new Utente();
        newUtente.setJSONProperty(resultData);

        this._utente.next(newUtente);

      })
  }


  /**
   * Effettua la richiesta al Server con i dati dell'Utente
   * @param config Parametri di configurazione
   * @param username Username Utente
   * @param password Password Utente
   */
  requestAuthorization(config: StartConfiguration, 
                        username: string, 
                        password: string) {
    const myHeaders = new HttpHeaders({'Content-type':'text/plain', 
                                       'X-HTTP-Method-Override':'VERIFICALOGINMOB', 
                                       'APPID':config.appId
                                      });

    const myParams = new HttpParams().set('Username', username).append('Password', password);
    const doObject = 'ACCOUNT';

    let myUrl = config.urlBase + '/' + doObject;

    //Disattivo il login utente
    this._utenteLoggato.next(false);

    // Effettuo la chiamata
    return this.apiService
              .httpGet(myUrl, myHeaders, myParams)
              .pipe(tap(element => {
                //Autorizzazione concessa
                //Dentro a MESSAGE è presente il documento dell'utente
                // Avviso il servizio si impostare l'account
                if (element.RESULT == -1) {
                  // User accettato
                  this.loginSuccessfull(element.MESSAGE);
                }
              }));
  }

  /**
   * Utente loggato
   * @param JSonUtente Dati Utente
   */
  private loginSuccessfull(JSonUtente: any) {
    let newUtente = new Utente();
    newUtente.setJSONProperty(JSonUtente);

    //Riemetto Utente
    this._utenteLoggato.next(true);
    this._utente.next(newUtente);
  }

  /**
   * Esecuzione Logoff dell'utente
   */
  logoff() {
    this._utenteLoggato.next(false);
  }

}
