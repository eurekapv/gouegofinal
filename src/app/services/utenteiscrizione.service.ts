import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UtenteIscrizione } from '../models/utenteiscrizione.model';
import { ApicallService } from './apicall.service';
import { StartConfiguration } from '../models/start-configuration.model';
import { map, take } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { IDDocument } from '../library/models/iddocument.model';

@Injectable({
  providedIn: 'root'
})
export class UtenteiscrizioneService {

  private _listUtenteIscrizione = new BehaviorSubject<UtenteIscrizione[]>([]);

  get listUtenteIscrizione() {
    return this._listUtenteIscrizione.asObservable();
  }


  constructor(private apiService: ApicallService) { }

   /**
   * Richiede l'elenco delle Iscrizioni Corsi
   * @param config Dati configurazione
   * @param idUtente Utente che effettua richiesta
   * @param maxRecord Max Record da recuperare
   */
  request(config: StartConfiguration, idUtente: string, maxRecord: number = 0) {
    return new Promise<UtenteIscrizione[]>((resolve, reject)=>{
      let myHeaders = config.getHttpHeaders();
      myHeaders = myHeaders.append('order-by','desc');

      //new HttpHeaders({'Content-type':'text/plain'});
      const doObject = 'UTENTEISCRIZIONE';
      const filterDateTime = this.getFilterDateTime();
  
      let myUrl = config.urlBase + '/' + doObject;  
  
      //Nei Parametri imposto l'area richiesta
      let myParams = new HttpParams().set('IDUTENTE',idUtente);
      myParams = myParams.append('DATAISCRIZIONE',filterDateTime);
      myParams = myParams.append('$top', (maxRecord + '') );
  
      //Elimino gli attuali
      this._listUtenteIscrizione.next([]);
  
      this.apiService
        .httpGet(myUrl, myHeaders, myParams)
        .pipe(map(data => {
            
              let arReturn = [];
              if (data.UTENTEISCRIZIONE) {
                arReturn = data.UTENTEISCRIZIONE;
              }
  
              return arReturn;
            
        }))
        .subscribe (resultData => {
  
          for (let index = 0; index < resultData.length; index++) {
            const element = resultData[index];
            let newUtenteIscrizione = new UtenteIscrizione();
            newUtenteIscrizione.setJSONProperty(element);
            this.addUtenteIscrizione(newUtenteIscrizione);            
          }

            resolve(this._listUtenteIscrizione.getValue());

        }, error=>{
          reject (error);
        })
      
    })
  }


     /**
   * 
   * @param config Dati configurazione
   * @param idIscrizione ID Iscrizione richiesta
   */
  requestById(config: StartConfiguration, idIscrizione: string) {
    return new Promise<UtenteIscrizione>((resolve, reject)=>{
      //let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
      let myHeaders = config.getHttpHeaders();
      myHeaders = myHeaders.append('order-by','desc');

      const doObject = 'UTENTEISCRIZIONE';
      const filterDateTime = this.getFilterDateTime();
  
      let myUrl = config.urlBase + '/' + doObject;  
  
      //Nei Parametri imposto richiesta
      let myParams = new HttpParams().set('ID',idIscrizione);
        
  
      this.apiService
        .httpGet(myUrl, myHeaders, myParams)
        .pipe(map(data => {
              return data.UTENTEISCRIZIONE      
        }))
        .subscribe (arrData => {

            let docIscrizione = new UtenteIscrizione();

            if (arrData) {
              if (arrData[0]){
                docIscrizione.setJSONProperty(arrData[0]);
                resolve(docIscrizione);
              }
              else{
                reject('iscrizione inesistente');
              }
            }
            else {
              reject('iscrizione inesistente');
            }

            
        }, error => {
          reject (error);
        })
      
    })
  }

  /**
   * Aggiunge all'elenco una prenotazione dell'utente
   * @param objUtenteIscrizione Prenotazione da aggiungere
   */
  addUtenteIscrizione(objUtenteIscrizione: UtenteIscrizione) {
    this.listUtenteIscrizione
      .pipe(take(1))
      .subscribe (collUtenteIscrizione => {
        let findElement = collUtenteIscrizione.find(element => {
          return element.ID == objUtenteIscrizione.ID
        });

        if (!findElement) {
          this._listUtenteIscrizione.next( collUtenteIscrizione.concat(objUtenteIscrizione));
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
