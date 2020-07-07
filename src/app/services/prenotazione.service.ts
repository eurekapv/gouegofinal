import { Injectable, ɵConsole } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { ApicallService } from './apicall.service';
import { Prenotazione } from '../models/prenotazione.model';
import { Utente } from '../models/utente.model';
import { LogApp } from '../models/log.model';
import { Campo } from '../models/campo.model';
import { StartConfiguration } from '../models/start-configuration.model';
import { PrenotazionePianificazione } from '../models/prenotazionepianificazione.model';
import { SportService } from './sport.service';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {


  private _listPrenotazioni = new BehaviorSubject<Prenotazione[]>([]);
  private _activePrenotazione = new BehaviorSubject<Prenotazione>(new Prenotazione());
  private _selectedCampo: Campo;

  constructor(private apiService: ApicallService, private sportService: SportService) { }

  /** Prenotazione */
  get activePrenotazione() {
    return this._activePrenotazione.asObservable();
  }

  get listPrenotazioni() {
    return this._listPrenotazioni.asObservable();
  }

  //Memorizzo il campo selezionato
  set selectedCampo(value: Campo) {
    this._selectedCampo = value;
  }

  get selectedCampo() {
    return this._selectedCampo;
  }

  // Imposta come attiva la Prenotazione passata
  setActivePrenotazione(value: Prenotazione) {
    this._activePrenotazione.next(value);
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
   * Richiesta elenco Prenotazioni
   * @param config Parametri di configurazione
   * @param idUtente idUtente
   */
  request(config: StartConfiguration) {
    return new Promise((resolve, reject)=>{
      let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
      const doObject = 'PRENOTAZIONE';
      
      // In Testata c'e' sempre l'AppId
      myHeaders = myHeaders.set('appid',config.appId);
      // Nei parametri imposto il gruppo Sportivo
      let myParams = new HttpParams().set('IDGRUPPOSPORTIVO',config.gruppo.ID);
  
      let myUrl = config.urlBase + '/' + doObject;
  
      this.apiService
        .httpGet(myUrl, myHeaders, myParams)
        .pipe(map(fullData => {
          return fullData.PRENOTAZIONE
        }))
        .subscribe( resultData => {
  
          resultData.forEach(elPrenotazione => {
  
            let docPrenotazione = new Prenotazione();
            docPrenotazione.setJSONProperty(elPrenotazione);
            this.add2ListPrenotazioni(docPrenotazione);
          });
          resolve();
        }, error=>{
          reject (error);
        });
    })
  }

  //Aggiunge una attivita alla lista globale
  add2ListPrenotazioni(objPrenotazione: Prenotazione) {

    let listSport = this.sportService.actualListSport;

    this.listPrenotazioni
      .pipe(take(1))
      .subscribe( collLocation => {
        this._listPrenotazioni.next( collLocation.concat(objPrenotazione));
      });
    
  }


  /**
   * Richiede una prenotazione al server
   * @param config Dati configurazione
   * @param idPrenotazione IdPrenotazione 
   */
  requestById(config: StartConfiguration, idPrenotazione: string, numLivelli: number) {
    let myHeaders = new HttpHeaders({'Content-type':'text/plain'}).append('child-level', numLivelli + '');
    const doObject = 'PRENOTAZIONE';
    
    // In Testata c'e' sempre l'AppId
    myHeaders = myHeaders.set('appid',config.appId);
    // Nei parametri imposto idPrenotazion richiesto
    let myParams = new HttpParams().set('ID',idPrenotazione);

    let myUrl = config.urlBase + '/' + doObject;

    return this.apiService
      .httpGet(myUrl, myHeaders, myParams)
      .pipe(map(fullData => {

        let docPrenotazione: Prenotazione;

        if (fullData) {
          if (fullData.hasOwnProperty('PRENOTAZIONE')) {
            let collPrenotazioni = fullData.PRENOTAZIONE;
            if (collPrenotazioni.length !== 0) {

              let listSport = this.sportService.actualListSport;
              docPrenotazione = new Prenotazione();
              docPrenotazione.setJSONProperty(collPrenotazioni[0]);

              
              docPrenotazione.PRENOTAZIONEPIANIFICAZIONE.forEach(elPianificazione => {
                  elPianificazione.lookup('IDSPORT', listSport, "DENOMINAZIONE");
              });

            }
          }
        }
        return docPrenotazione;
      }));
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
                                       'child-level': '999',
                                       'appid':config.appId
                                      });
    let myParams = new HttpParams(); 
    const paramName = 'docPrenotazione'; //Nome del parametro in entrata della funzione WebApi
    //Quali proprietà non voglio esportare
    const noExportDO = false;
    const noExportPK = true;
    const noExportPrivate = true;
    const doObject = 'PRENOTAZIONE';
    let myUrl = config.urlBase + '/' + doObject;
    
    //Creo il JSON del documento , eliminando le proprietà do e private (true) e le chiavi primarie(true)
    let myBodyJSON = docPrenotazione.exportToJSON(noExportDO, noExportPK, noExportPrivate);
    //Il parametro inviato nel body deve essere strutturato cosi
    // { "nomeParametro" : { oggetto exportato JSON } }
    let myBody = '{' + '\"' + paramName + '\"' + ':' + myBodyJSON + '}';

   

    return this.apiService
          .httpPost(myUrl,myHeaders, myParams, myBody)
          .pipe(map(fullData => {
            //fulldata è già l'oggetto Prenotazione
            return fullData;
          }));

    }


    

}
