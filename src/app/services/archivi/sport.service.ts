import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Sport } from '../../models/archivi/sport.model';
import { ApicallService } from '../zsupport/apicall.service';
import { DocstructureService } from '../../library/services/docstructure.service';
import { LogApp } from '../../models/zsupport/log.model';
import { PostParams, RequestParams } from '../../library/models/requestParams.model';




@Injectable({
  providedIn: 'root'
})
export class SportService {

  private _listSport = new BehaviorSubject<Sport[]>([]);
  private _loaded: boolean; //Sport sono stati richiesti al server e sono caricati in memoria
  private _listLocationSport = new BehaviorSubject<Sport[]>([]);

  //Lista di tutti gli sport presenti in Gouego
  get listSport() {
    return this._listSport.asObservable();
  }

  /**
  * Ritorna la lista non in modalità Observable
  */
  get actualListSport() {
    return this._listSport.getValue();
  }

  //Lista degli sport presenti in una location
  get listLocationSport() {
    return this._listLocationSport.asObservable();
  }


  constructor(private apiService: ApicallService, 
              private docStructureSrv: DocstructureService) { 

      this._loaded = false;
  }

  /**
   * Richiede al server l'elenco delle Attività
   * @param config Parametri configurazione chiamata
   */
  request(withLivelli?:boolean,
          forceReload:boolean = false): Promise<Sport[]> {

    return new Promise<Sport[]>((resolve, reject)=>{

      if (!this._loaded || forceReload) {
        let filterSport = new Sport(true);

        filterSport.ID = '.';
      
        this.docStructureSrv.requestNew(filterSport)
                            .then(listReceived => this.fillLivelli(listReceived, withLivelli))
                            .then(listReceivedTyped => {

                              this._loaded = true;
                              //Riemetto Observable
                              this._listSport.next(listReceivedTyped);
                              //Risolvo la promise
                              resolve(listReceivedTyped);

                            })
                            .catch(error => {
                              LogApp.consoleLog(error);
                              reject(error);
                            })
      }
      else {
        //Ritorno la lista già presente
        resolve(this._listSport.getValue());
      }
      
    })

  }

  /**
   * Carica dal Server i Livelli se flagOperation = True
   * Usato nella request
   * @param listSport Lista Sport di cui caricare i Livelli
   * @param flagOperation TRUE => Vengono caricati i livelli
   * @returns 
   */
  fillLivelli(listSport: Sport[], flagOperation: boolean): Promise<Sport[]> {
    return new Promise<Sport[]>((resolve, reject) => {
      if (listSport && flagOperation) {
        this.docStructureSrv.loadCollectionMulti(listSport, 'LIVELLO')
                            .then(listReceived => {                                
                                resolve(<Sport[]>listReceived);
                            })
                            .catch(error => {
                              reject(error);
                            })
      }
      else {
        resolve(listSport);
      }
    })
  }

  //Aggiunge una attivita alla lista globale
  add2ListSport(objSport: Sport) {

    this.listSport
      .pipe(take(1))
      .subscribe( collSport => {
        this._listSport.next( collSport.concat(objSport))
      });
    
  }


  /**
   * Richiede le attività praticate in una location
   * Sottoscriversi all'oggetto listLocationSport per ricevere i risultati
   * 
   * @param config Dati configurazione
   * @param idLocation Location
   */
  requestLocationSport(idLocation: string): Promise<Sport[]> {
    return new Promise<Sport[]>((resolve, reject)=>{
      
      let docToCall: Sport;
      let reqParams: PostParams[] = [];
      let reqOptions: RequestParams;
      let method = 'getSportLocation';

      docToCall = new Sport(true);
      PostParams.addParamsTo(reqParams, 'idLocation', idLocation);
      reqOptions = new RequestParams();
      reqOptions.child_level = 1;

      this.docStructureSrv.requestForFunction(docToCall, method, '',reqParams, reqOptions)
                          .then(responseObj => {
                            let resultList: Sport[] = [];

                            if (responseObj && responseObj.hasOwnProperty('SPORT')) {
                              
                              //Converto il risultato in documenti tipizzati
                              resultList = this.docStructureSrv.castCollection(responseObj['SPORT'], docToCall);

                              //Reimposto la liosta
                              this._listLocationSport.next(resultList);
                              resolve(resultList);
                            }
                            else {
                              //Svuoto gli attuali
                              this._listLocationSport.next([]);
                              resolve([]);
                            }
                          })
                          .catch(error => {
                            reject(error);
                          })


    })
    }

    /**
     * Recupera le attività effettuate su una Location con i livelli di riferimento
     * @param idLocation 
     * @returns 
     */
  requestLocationSportLivelli(idLocation: string): Promise<Sport[]> {
      return new Promise<Sport[]>((resolve, reject)=>{
        
        let docToCall: Sport;
        let reqParams: PostParams[] = [];
        let reqOptions: RequestParams;
        let method = 'getSportLivelliLocation';
  
        docToCall = new Sport(true);
        PostParams.addParamsTo(reqParams, 'idLocation', idLocation);
        reqOptions = new RequestParams();
        reqOptions.child_level = 1;
  
        this.docStructureSrv.requestForFunction(docToCall, method, '',reqParams, reqOptions)
                            .then(responseObj => {
                              let resultList: Sport[] = [];
                              
                              if (responseObj && 
                                  responseObj.hasOwnProperty('SPORT')) {
                                
                                //Converto il risultato in documenti tipizzati
                                resultList = this.docStructureSrv.castCollection(responseObj['SPORT'], docToCall);

                              }
                              resolve(resultList);
                            })
                            .catch(error => {
                              reject(error);
                            })
  
  
      })
    }    


    //Aggiunge una attivita alla lista globale
    add2ListLocationSport(objSport: Sport) {

      this.listLocationSport
            .pipe(take(1))
            .subscribe( collSport => {
                  this._listLocationSport.next( collSport.concat(objSport))
            });
      
    }


    /**
   * Dato l'id di uno sport, restituisce la stringa dell'icona associata
   * @param idSport l'id dello sport
   */
  getIconaSport(idSport: string){
    let listSport = this._listSport.getValue();
    let icona='';
    let docSport: Sport;

    if(listSport){

      //Cerco lo Sport nella collection
      docSport = listSport.find(el => {
        return el.ID == idSport
      });

      //Sport trovato applico l'icona
      if (!docSport) {
        //Ne creo uno fasullo
        docSport = new Sport();
      }

      //Ricavo l'icona
      icona = docSport.htmlIconHex
      
    }
    return icona;
  }

}
