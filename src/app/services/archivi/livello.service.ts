import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Livello } from '../../models/archivi/livello.model';
import { DocstructureService } from '../../library/services/docstructure.service';
import { LogApp } from '../../models/zsupport/log.model';

@Injectable({
  providedIn: 'root'
})
export class LivelloService {

  private _listLivelli = new BehaviorSubject<Livello[]>([]);
  

  constructor(private docService: DocstructureService) { 
    
  }

  get listLivelli() {
    return this._listLivelli.asObservable();
  }
  
    /**
   * Ritorna la lista non in modalità Observable
   */
  get actualListLivelli() {
    return this._listLivelli.getValue();
  }  



  /**
   * Richiede al server l'elenco dei Livelli
   * @param config Parametri configurazione chiamata
   */
  request(): Promise<Livello[]> {
    return new Promise<Livello[]>((resolve, reject)=>{

      let filterDoc: Livello = new Livello(true);
      filterDoc.ID = '.';
      this.docService.requestNew(filterDoc)
                     .then(listReceived => {

                        let listReceivedTyped:Livello[] = listReceived;
                        //Riemetto Observable
                        this._listLivelli.next(listReceivedTyped);
                        //Chiudo la promise
                        resolve(listReceivedTyped)
                     })
                     .catch(error => {
                      LogApp.consoleLog(error);
                      reject(error);
                     })  

    })

  }

  

  /**
   * Richiede al server l'elenco dei Livelli per lo Sport
   * @param idSport Sport da utilizzare
   * @returns Promise Array Livelli Ordinati 
   * 
   */
  requestLivelliForSport(idSport: string):Promise<Livello[]> {
    let collLivelli: Livello[] = [];

    return new Promise<Livello[]>((resolve) => {

      if (idSport && idSport.length != 0) {

        //Devo effettuare la chiamata al server
        let filterLivello: Livello = new Livello(true);
        filterLivello.IDSPORT = idSport;
        
        //Effettuo la richiesta
        this.docService.requestNew(filterLivello)
                       .then((collData:Livello[]) => {
                         collLivelli = collData;
                         resolve(collLivelli);
                       })
                       .catch(error => {

                        resolve(collLivelli);
                        
                       })

      }
      else {
        resolve(collLivelli);
      }
    })
  }
}
