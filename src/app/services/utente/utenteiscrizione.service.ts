import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UtenteIscrizione } from '../../models/utente/utenteiscrizione.model';
import { ApicallService } from '../zsupport/apicall.service';
import { StartConfiguration } from '../../models/start-configuration.model';
import { map, take } from 'rxjs/operators';
import { IDDocument, OperatorCondition } from '../../library/models/iddocument.model';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { RequestParams } from 'src/app/library/models/requestParams.model';
import { MyDateTime, TypePeriod } from 'src/app/library/models/mydatetime.model';

@Injectable({
  providedIn: 'root'
})
export class UtenteiscrizioneService {

  private _listUtenteIscrizione = new BehaviorSubject<UtenteIscrizione[]>([]);

  get listUtenteIscrizione() {
    return this._listUtenteIscrizione.asObservable();
  }


  constructor(private apiService: ApicallService,
              private docStructure: DocstructureService) { }

   /**
   * Richiede l'elenco delle Iscrizioni Corsi
   * @param config Dati configurazione
   * @param idUtente Utente che effettua richiesta
   * @param maxRecord Max Record da recuperare
   * @param lastMonth Numero di mesi cui andare indietro a pescare i dati
   */
  request( 
          idUtente: string, 
          maxRecord: number = 0,
          lastMonth: number = 6) {
    return new Promise<UtenteIscrizione[]>((resolve, reject)=>{
      let filterDoc: UtenteIscrizione;
      let reqParams: RequestParams;
      let dateLimit: Date;

      if (idUtente && idUtente.length != 0) {
        lastMonth = -lastMonth;
        dateLimit = new Date();
        dateLimit = MyDateTime.calcola(dateLimit, lastMonth , TypePeriod.years);


        filterDoc = new UtenteIscrizione();
        filterDoc.IDUTENTE = idUtente;
        filterDoc.DATAISCRIZIONE = dateLimit;
        filterDoc.addFilterCondition(OperatorCondition.maggiore, 'DATAISCRIZIONE')

        reqParams = new RequestParams();
        reqParams.top = maxRecord;
        reqParams.orderBy = 'desc';
        

        this.docStructure.requestNew(filterDoc, reqParams)
                         .then(collResult => {
                            let listColl: UtenteIscrizione[];
                            listColl = this.docStructure.castCollection<UtenteIscrizione>(collResult, filterDoc);
                            //Riemetto la lista
                            this._listUtenteIscrizione.next(listColl);
                            resolve(listColl);
                         })
                         .catch(error => {
                            reject(error);
                         })

      }
      else {
        reject('Utente non definito')
      } 
    })
  }


  /**
   * Effettua la richiesta dell'elenco Iscrizioni con un residuo da pagare
   * @param config Dati configurazione
   * @param idUtente Utente che effettua richiesta
   * @param maxRecord Max Record da recuperare
   */
  requestDaPagare(config: StartConfiguration, 
                  idUtente: string, 
                  maxRecord: number = 0): Promise<UtenteIscrizione[]> {

    return new Promise((resolve, reject)=>{
      let myHeaders = config.getHttpHeaders();
          

      const doObject = 'UTENTEISCRIZIONE';
        
      let myUrl = config.urlBase + '/' + doObject;  
  
      //Nei Parametri imposto l'area richiesta
      let myParams = this.apiService.getHttpParams().set('IDUTENTE',idUtente);
      myParams = myParams.append('RESIDUO','>0');
      myParams = myParams.append('$top', (maxRecord + '') );
  
  
      this.apiService
        .httpGet(myUrl, myHeaders, myParams)
        .pipe(
          map(data => {
            
              let arReturn = [];
              if (data.UTENTEISCRIZIONE) {
                arReturn = data.UTENTEISCRIZIONE;
              }
  
              return arReturn;
            
          }),
          map(listData => {
            let listReturn: UtenteIscrizione[] = [];
            listData.forEach(element => {
              const doc = new UtenteIscrizione();
              doc.setJSONProperty(element);
              listReturn.push(doc);
            });            
            return listReturn;
          })
        )
        .subscribe({
          next: (resultData)=> {
            //Al termine ritorno la nuova lista
            resolve(resultData);
          },
          error: (err) => {
            reject (err);
          }
        });
  
    });
  }   


     /**
   * 
   * @param config Dati configurazione
   * @param idIscrizione ID Iscrizione richiesta
   */
  requestById(idIscrizione: string) {
    return new Promise<UtenteIscrizione>((resolve, reject)=>{
      
      let filterDoc: UtenteIscrizione;

      if (idIscrizione && idIscrizione.length != 0) {
        filterDoc = new UtenteIscrizione(true);
        filterDoc.ID = idIscrizione;

        this.docStructure.requestDoc<UtenteIscrizione>(filterDoc)
                         .then(resultDoc => {
                            resolve(resultDoc);
                         })
                         .catch(error => {
                          reject(error);
                         })
      }
      else {
        reject('IdIscrizione sconosciuto');
      }    
      
    })
  }



}
