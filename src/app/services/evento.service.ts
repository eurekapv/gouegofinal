import { Injectable } from '@angular/core';
import { DocstructureService } from '../library/services/docstructure.service';
import { BehaviorSubject } from 'rxjs';
import { Evento } from '../models/evento.model';
import { PostParams, RequestForeign, RequestParams } from '../library/models/requestParams.model';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private _listEventi$ = new BehaviorSubject<Evento[]>([]);
  public get listEventi$() {
    return this._listEventi$;
  }

  constructor(private docStructureService: DocstructureService) { }


  /**
   * Effettua la richiesta per l'elenco degli Eventi
   * @param {string} idArea Area
   * @returns 
   */
  request(idArea: string): Promise<void> {

    return new Promise<void>((resolve, reject) => {

      let filterDoc: Evento = new Evento(true);
      filterDoc.IDAREAOPERATIVA = idArea;

      //Effettuo la richiesta
      this.docStructureService.requestNew(filterDoc)
          .then(listReceived => {
              if (listReceived) {
                this._listEventi$.next(listReceived);
              }
              else {
                this._listEventi$.next([]);
              }

              //Chiamata conclusa
              resolve();
          })
          .catch(error => {
            //errore di connessione
            reject (error);
          })
    })
  }


  /**
   * Effettuo la richiesta di un Evento
   * @param idEvento 
   * @param numChild Profondità della richiesta
   * @param decodeAll Decodifica le chiavi esterne
   * @returns 
   */
  requestById(idEvento: string, numChild = 0, decodeAll = false): Promise<Evento> {

    return new Promise<Evento>((resolve, reject) => {
      if (idEvento && idEvento.length != 0)   {
        let filterDoc = new Evento(true);
        filterDoc.ID = idEvento;
        let reqParams = new RequestParams();
        reqParams.child_level = numChild;
        reqParams.decode.active = decodeAll;

        this.docStructureService.requestNew(filterDoc, reqParams)
                                .then(listData => {
                                  if (listData && listData.length != 0) {
                                    return listData[0];
                                  }
                                  else {
                                    reject('Evento non trovato');
                                  }
                                })
                                .then(singleDoc => {
                                  resolve(singleDoc);
                                })
                                .catch(error => {
                                  reject(error);
                                })
      }
      else {
        reject('idEvento non specificato');
      }
    })
  }
  
  /**
   * Effettua una richiesta dei prossimi eventi disponibili
   * @param idArea Area di riferimento
   */
  requestNextEventi(idArea: string): Promise<Evento[]> {
    let myPostParams : PostParams = new PostParams();
    let method = 'requestNextEventi';
    let docToCall: Evento = new Evento();
    
    return new Promise<Evento[]>((resolve, reject) => {

      //Preparo i parametri della chiamata
      myPostParams.key = 'guidArea';
      myPostParams.value = idArea;

      this.docStructureService.requestForFunction(docToCall, method, '', myPostParams)
                              .then(responseData => {
                                    //Qui controlliamo la risposta
                                    console.log('Risposta server')
                                    console.log(responseData);
                                    return this._fillFromResponseData(responseData);
                              })
                              .then(eventList => {
                                console.log('Risposta server decodificata')
                                console.log(eventList);

                                //Riemetto la lista degli eventi
                                this._listEventi$.next(eventList);
                                resolve(eventList);
                              })
                              .catch(error => {
                                //Riemetto una lista vuota
                                let eventList: Evento[] = [];
                                this._listEventi$.next(eventList);
                                resolve(eventList);
                              })
    })
  }

  /**
   * Riemetto i dati con la collection ricevuta
   * @param responseData 
   */
  _fillFromResponseData(responseData: any): Promise<Evento[]> {
    let dataList: []; 
    let eventList: Evento[] = [];
    let reqForeign: RequestForeign[] = [];

    return new Promise<Evento[]>((resolve) => {
      
      if (responseData && responseData.hasOwnProperty('EVENTO')) {
        dataList = responseData['EVENTO'];
  
        //Creo la lista di Eventi
        if (dataList.length != 0) {
  
          //Ciclo e creo gli eventi
          dataList.forEach(elData => {
            let myItem = new Evento();
            myItem.setJSONProperty(elData);
            eventList.push(myItem);
          });

          //Chiedo la decodifica di questi campi dell'evento
          reqForeign = Evento.getReqForeignKeys();
    
          //Adesso decodifico le informazioni
          this.docStructureService.decodeCollection(eventList, reqForeign, false)
                                  .then(eventListDecoded => {

                                    console.log('Decodificati');
                                    console.log(eventListDecoded);
                                    resolve(eventListDecoded);

                                  })
                                  .catch(error => {
                                    //Utilizzo gli eventi non decodificati
                                    resolve(eventList);
                                  })
        }
        else {
          eventList = [];
          resolve(eventList);             
        }
      }
      else {
        eventList = [];
        resolve(eventList);
      }
    })

  }

  /**
   * Riemetto i dati con la collection ricevuta
   * @param responseData 
   */
  _oldfillFromResponseData(responseData: any): void {
    let responseList: []; 
    let returnList: Evento[] = [];

    if (responseData && responseData.hasOwnProperty('EVENTO')) {
      responseList = responseData['EVENTO'];

      if (responseList.length != 0) {

        responseList.forEach(elData => {
          let myItem = new Evento();
          myItem.setJSONProperty(elData);
          returnList.push(myItem);
        });
  
        //Adesso decodifico le informazioni
        this.docStructureService.decodeCollection(returnList)
                                .then(returnDecode => {
                                  console.log('Decodifico');
                                  console.log(returnDecode);
                                  //Riemetto la lista degli eventi
                                  this._listEventi$.next(returnDecode);
                                })
                                .catch(error => {
                                  //Riemetto la lista degli eventi
                                  this._listEventi$.next(returnList);
                                })
      }
      else {
        //Riemetto la lista degli eventi vuota
        this._listEventi$.next(returnList);        
      }
    }
    else {
      //Riemetto la lista degli eventi
      this._listEventi$.next(returnList);        
    }

  }
  
}
