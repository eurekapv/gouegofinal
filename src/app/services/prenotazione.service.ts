import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { ApicallService } from './apicall.service';
import { Prenotazione } from '../models/prenotazione.model';
import { Utente } from '../models/utente.model';
import { StartConfiguration } from '../models/start-configuration.model';
import { PrenotazionePianificazione } from '../models/prenotazionepianificazione.model';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {

  private _listPrenotazioni = new BehaviorSubject<Prenotazione[]>([]);
  private _activePrenotazione = new BehaviorSubject<Prenotazione>(new Prenotazione());

  constructor(private apiService: ApicallService) { }

  /** Prenotazione */
  get activePrenotazione() {
    return this._activePrenotazione.asObservable();
  }

  get listPrenotazioni() {
    return this._listPrenotazioni.asObservable();
  }

  
  /**
   * Inizializza la prenotazione con l'AREA
   * @param idArea Area Operativa
   */
  initActivePrenotazione(idArea: string) {
    this.activePrenotazione
      .pipe(take(1))
      .subscribe( elPrenotazione => {
        elPrenotazione = new Prenotazione();
        elPrenotazione.initNewPrenotazione(idArea);

        this._activePrenotazione.next(elPrenotazione);
      });
      
  }

  /**
   * Imposta la Pianificazione Singola
   * @param docPianificazione Pianificazione da impostare
   */
  setPianificazioneSingola(docPianificazione: PrenotazionePianificazione) {
    this.activePrenotazione
      .pipe(take(1))
      .subscribe( elPrenotazione => {
          elPrenotazione.setPianificazioneSingola(docPianificazione);
          this._activePrenotazione.next(elPrenotazione);
      });
  }

  /**
   * 
   */
  setIDUtenteActivePrenotazione(docUtente: Utente) {
    this.activePrenotazione
    .pipe(take(1))
    .subscribe( elPrenotazione => {
        elPrenotazione.setUtente(docUtente.ID, docUtente.NOMINATIVO);

        this._activePrenotazione.next(elPrenotazione);
    });
  }



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


  /**
   * Richiesta al Server il calcolo dell'importo
   * Metodo Statico: MOBBOOKINGTOTALE
   * Body contiene il JSON del documento
   * @param config Parametri di Configurazione
   */
  requestImporto(config: StartConfiguration) {
    let docPrenotazione = this._activePrenotazione.getValue();
    const myHeaders = new HttpHeaders({'Content-type':'application/json', 
                                       'X-HTTP-Method-Override':'MOBBOOKINGTOTALE', 
                                       'APPID':config.appId
                                      });
    let myParams = new HttpParams();                                      

    const doObject = 'PRENOTAZIONE';
    let myUrl = config.urlBase + '/' + doObject;
    // let myBody = JSON.stringify(docPrenotazione);

    let myBody = docPrenotazione.exportToJSON(true);

    console.log(myBody);

    return this.apiService
          .httpPost(myUrl,myHeaders, myParams, myBody)
          .pipe(map(fullData => {
            return fullData.PRENOTAZIONE;
          }));

    }


}
