import { Injectable } from '@angular/core';
import { BehaviorSubject, of, from } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { ApicallService } from './apicall.service';

import { StartConfiguration } from '../models/start-configuration.model';
import { UtentePrenotazione } from '../models/utenteprenotazione.model';
import { IDDocument } from '../models/iddocument.model';


@Injectable({
  providedIn: 'root'
})
export class UtenteprenotazioneService {

  private _listUtentePrenotazione = new BehaviorSubject<UtentePrenotazione[]>([]);

  //Ritorna la Lista delle prenotazioni di un utente
  get listUtentePrenotazione() {
    return this._listUtentePrenotazione.asObservable();
  }


  constructor(private apiService: ApicallService) { }

  /**
   * 
   * @param config Dati configurazione
   * @param idUtente Utente che effettua richiesta
   * @param maxRecord Max Record da recuperare
   */
  request(config: StartConfiguration, idUtente: string, maxRecord: number = 0) {
    return new Promise((resolve, reject)=>{
      let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
      const doObject = 'UTENTEPRENOTAZIONE';
      const filterDateTime = this.getFilterDateTime();
  
      //In Testata c'e' sempre l'AppId
      myHeaders = myHeaders.set('appid',config.appId).append('order-by','desc');
      let myUrl = config.urlBase + '/' + doObject;  
  
      //Nei Parametri imposto l'area richiesta
      let myParams = new HttpParams().set('IDUTENTE',idUtente);
      myParams = myParams.append('DATAORAINIZIO',filterDateTime);
      myParams = myParams.append('$top', (maxRecord + '') );
  
      //Elimino gli attuali
      this._listUtentePrenotazione.next([]);
  
      this.apiService
        .httpGet(myUrl, myHeaders, myParams)
        .pipe(map(data => {
            
              let arReturn = [];
              if (data.UTENTEPRENOTAZIONE) {
                arReturn = data.UTENTEPRENOTAZIONE;
              }
  
              return arReturn;
            
        }))
        .subscribe (resultData => {
  
            resultData.forEach(element => {
              let newUtentePrenotazione = new UtentePrenotazione();
              newUtentePrenotazione.setJSONProperty(element);
              this.addUtentePrenotazione(newUtentePrenotazione);
            });
            resolve();
        }, error=>{
          reject (error);
        })
      
    })
  }

  /**
   * Aggiunge all'elenco una prenotazione dell'utente
   * @param objUtentePrenotazione Prenotazione da aggiungere
   */
  addUtentePrenotazione(objUtentePrenotazione: UtentePrenotazione) {
    this.listUtentePrenotazione
      .pipe(take(1))
      .subscribe (collUtentePrenotazione => {
        let findElement = collUtentePrenotazione.find(element => {
          return element.ID == objUtentePrenotazione.ID
        });

        if (!findElement) {
          this._listUtentePrenotazione.next( collUtentePrenotazione.concat(objUtentePrenotazione));
        }
      });
  }


    /**
   * Crea il Parametro Filtro per il campo
   */
  getFilterDateTime(): string {
    let adesso = new Date();
    let newDoc = new IDDocument();
    let startDate = new Date(adesso.getFullYear(),0,1);
    let strAdesso = '';
    if (adesso.getMonth() < 6) {
      startDate = new Date((adesso.getFullYear()) - 1, 5, 1);
    }

    strAdesso = newDoc.formatDateTimeISO(startDate);

    strAdesso = '>' + strAdesso;

    return strAdesso;
  }
}
