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
import { ParamsExport } from '../library/models/iddocument.model';
import { PostResponse } from '../library/models/postResult.model';

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
      let myHeaders = config.getHttpHeaders();
      //new HttpHeaders({'Content-type':'text/plain'});
      const doObject = 'PRENOTAZIONE';
      


      // Nei parametri imposto il gruppo Sportivo
      let myParams = new HttpParams().set('IDGRUPPOSPORTIVO',config.gruppo.ID);
  
      let myUrl = config.urlBase + '/' + doObject;
  
      this.apiService
        .httpGet(myUrl, myHeaders, myParams)
        .pipe(map(fullData => {
          return fullData.PRENOTAZIONE
        }))
        .subscribe( resultData => {
  
          for (let index = 0; index < resultData.length; index++) {
            const element = resultData[index];

            let docPrenotazione = new Prenotazione();
            docPrenotazione.setJSONProperty(element);
            this.add2ListPrenotazioni(docPrenotazione);
          }

          resolve(this._listPrenotazioni.getValue());

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
    //let myHeaders = new HttpHeaders({'Content-type':'text/plain'}).append('child-level', numLivelli + '');
    let myHeaders = config.getHttpHeaders();
    const doObject = 'PRENOTAZIONE';
    
    
    myHeaders = myHeaders.append('child-level', numLivelli + '');
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

    let myParams = new HttpParams();
    let myHeaders = config.getHttpHeaders();
    myHeaders = myHeaders.append('X-HTTP-Method-Override','MOBBOOKINGTOTALE');
    myHeaders = myHeaders.append('child-level','999');

    const paramName = 'docPrenotazione'; //Nome del parametro in entrata della funzione WebApi

    const doObject = 'PRENOTAZIONE';
    let myUrl = config.urlBase + '/' + doObject;

    //Questi sono i parametri per l'esportazione
    let paramExport = new ParamsExport();
    paramExport.clearDOProperty = false;
    paramExport.clearPKProperty = false;
    paramExport.clearPrivateProperty = true;
    
    //Creo il JSON del documento , eliminando le proprietà private (clear = true) ed inviando le proprietà do e le chiavi primarie(clear = false)
    let myBodyJSON = docPrenotazione.exportToJSON(paramExport);

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


    /**
     * Ritorna una Promise per salvare il documento
     * @param config Configurazione
     */
    requestSave(config: StartConfiguration): Promise<Prenotazione> {

      return new Promise((resolve, reject)=>{
          let docPrenotazione = this._activePrenotazione.getValue();

          let myHeaders = config.getHttpHeaders();                                            
          let myParams = new HttpParams(); 
          const paramName = 'docPrenotazione'; //Nome del parametro in entrata della funzione WebApi
          //Imposto gli header aggiuntivi
          myHeaders = myHeaders.append('X-HTTP-Method-Override','MOBBOOKINGSAVE');
          myHeaders = myHeaders.append('child-level','999');
          //Quali proprietà non voglio esportare
          const noExportDO = false;
          const noExportPK = true;
          const noExportPrivate = true;
          const doObject = 'PRENOTAZIONE';
          let myUrl = config.urlBase + '/' + doObject;

          //Questi sono i parametri per l'esportazione
          let paramExport = new ParamsExport();
          paramExport.clearDOProperty = false;
          paramExport.clearPKProperty = true;
          paramExport.clearPrivateProperty = true;
          
          //Creo il JSON del documento , eliminando le proprietà do e private (true) e le chiavi primarie(true)
          
          let myBodyJSON = docPrenotazione.exportToJSON(paramExport);
          //Il parametro inviato nel body deve essere strutturato cosi
          
          let myBody = '{' + '\"' + paramName + '\"' + ':' + myBodyJSON + '}';
      
          //Chiamo per il salvataggio                      
          this.apiService
                .httpPost(myUrl,myHeaders, myParams, myBody)
                .subscribe(elPrenotazione => {

                  let receivedPrenotazione = Prenotazione.getPrenotazioneFromJson(elPrenotazione);
                  
                  if (receivedPrenotazione.ISVALID == true) {
                    resolve(receivedPrenotazione);
                  }
                  else {
                    let errMessage = '';
                    if (receivedPrenotazione.MSGINVALID && receivedPrenotazione.MSGINVALID.length != 0) {
                      errMessage = receivedPrenotazione.MSGINVALID;
                    }
                    else {
                      errMessage = 'Salvataggio Fallito';
                    }

                    reject(errMessage);
                  }

                }, error => {
                  console.log(error);
                  let errMessage = 'Errore di connessione';
                  reject(errMessage);
                  
                });

      });

      }

    
    /**
     * Richiede al server la cancellazione di una pianificazione
     * @param idPianificazione 
     */
    requestDelete(idPianificazione: string, config: StartConfiguration): Promise<PostResponse>{

      return new Promise<PostResponse>((resolve, reject) => {
        const method: string = 'MOBBOOKINGDELETE';
        const doObject = 'PRENOTAZIONE';
        const myUrl = config.urlBase + '/' + doObject;

        //headers
        let myHeaders = config.getHttpHeaders();
        myHeaders = myHeaders.append('X-HTTP-Method-Override', method);


        //params
        let myParams = new HttpParams().set('idPianificazione', idPianificazione);
      
        //abbiamo tutto, faccio la richiesta
        this.apiService
        .httpGet(myUrl, myHeaders, myParams)
        .subscribe(data => {
          //creo l'oggetto con la risposta
          let response = new PostResponse();
          console.log(data);
          response.setFromResponse(data);
          resolve(response);

        },
        err => {
          //creo comunque un postResponse fittizio
          let response = new PostResponse();
          response.result = false
          response.message = "Connessione non riuscita";
          reject(response);
        })
        

      })

    }
}
