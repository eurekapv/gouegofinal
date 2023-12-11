import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

import { Corso } from '../../models/corso/corso.model';
import { FilterCorsi } from '../../models/corso/filtercorsi.model';


import { PostParams, RequestDecode, RequestParams } from '../../library/models/requestParams.model';
import { DocstructureService } from '../../library/services/docstructure.service';
import { TimeTrainerCourse } from '../../models/zsupport/valuelist.model';
import { CorsoGiornaliero, GroupedCorsiGiornalieri } from 'src/app/models/corso/corso-giornaliero.model';
import { OperatorCondition } from 'src/app/library/models/iddocument.model';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { MyDateTime } from 'src/app/library/models/mydatetime.model';



@Injectable({
  providedIn: 'root'
})

export class CourseService {

  private _listCorsi = new BehaviorSubject<Corso[]>([]);
  private _filterCorsi: FilterCorsi;
  private _selectedCorso = new BehaviorSubject<Corso>(new Corso());

  private _listCorsiTrainer = new BehaviorSubject<Corso[]>([]);

  //Modalità di caricamento progressivo
  private _listGroupedCorsiGiornalieri = new BehaviorSubject<GroupedCorsiGiornalieri[]>([]);
  private _lastDateCorsiGiornalieri = new BehaviorSubject<Date>(new Date);

  
  constructor(
    private docStructureService: DocstructureService    
  ){

  }

  get listCorsi() {
    return this._listCorsi.asObservable();
  }

  /**
   * Sono i corsi che il trainer richiede nella pagina Trainer
   */
  get listCorsiTrainer() {
    return this._listCorsiTrainer.asObservable();
  }  

  get selectedCorso() {
    return this._selectedCorso.asObservable();
  }

  get filterCorsi() {
    return this.filterCorsi;
  }

  set filterCorsi(value: FilterCorsi) {
    this._filterCorsi = value;
  }

  //#region MODALITA PROGRESSIVE MODE
  //Lista
  get listGroupedCorsiGiornalieri$(): Observable<GroupedCorsiGiornalieri[]> {
    return this._listGroupedCorsiGiornalieri.asObservable();
  }

  get listGroupedCorsiGiornalieri(): GroupedCorsiGiornalieri[] {
    return this._listGroupedCorsiGiornalieri.getValue();
  }

  //Ultima data letta
  get lastDateCorsiGiornalieri$(): Observable<Date> {
    return this._lastDateCorsiGiornalieri.asObservable();
  }

  get lastDateCorsiGiornalieri(): Date {
    return this._lastDateCorsiGiornalieri.getValue();
  }  
  //#endregion



  /**
   * Inizializza e ritorna una copia del filtro dei corsi
   * @param idLocation Location da utilizzare
   */
  newFilterCorsi(idLocation: string) {
    this._filterCorsi = new FilterCorsi(idLocation);
    
    return this._filterCorsi;
  }


  /**
   * Effettua una chiamata per il recupero di un corso
   * @param idCorso 
   * @param numChild (1 Solo il Documento / 2+ Collection Figlie 
   * @param decodeAll = Decodifica i foreign Key di primo livello)
   * @returns 
   */
  requestById(idCorso: string, numChild = 1, decodeAll = true): Promise<Corso>{

    return new Promise<Corso>((resolve, reject) => {
      //preparo il filtro
      let filtroCorso = new Corso(true);
      filtroCorso.ID=idCorso;

      //preparo i parametri per decodificare
      let params = new RequestParams();
      params.decode = new RequestDecode();
      params.decode.active = decodeAll;
      params.child_level = numChild;
      


       //faccio la richiesta
       this.docStructureService.requestNew(filtroCorso, params)
       .then((listCorsi : Corso[]) => {

          let myCorso: Corso;
          if (listCorsi && listCorsi.length != 0) {
            //Prendo il primo corso (in teoria anche l'unico)
            myCorso = listCorsi[0];
          }

          if (myCorso) {
            //ora richiedo anche il programma
            this.docStructureService.loadCollection(myCorso, 'CORSOPROGRAMMA')
            .then(() => {
              resolve(myCorso);

            })
            .catch(error => {
              reject(error);
            });
          }
          else {
            reject('Errore recupero corso');
          }
          
      })
      .catch(error => {
        reject(error);
      })
  })
}

/**
 * Effettua la chiamata al server per ottenere i corsi riferiti al trainer
 * Risultato nell'Observable listCorsiTrainer
 * 
 * @param idTrainer Trainer
 * @param timeState Corsi richiesti
 */
 requestTimeTrainerCourse(idTrainer: string, timeState: TimeTrainerCourse):void {
  let myPostParams : PostParams;
  let arPostParams: PostParams[] = [];
  let method: string = 'getCorsitrainer';
  let docCall: Corso = new Corso();

  if (idTrainer && idTrainer.length != 0) {

    if ([-1,0,1].includes(timeState)) {
      
      //Procedo con la chiamata
      myPostParams = new PostParams();
      myPostParams.key = 'idTrainer';
      myPostParams.value = idTrainer;
      arPostParams.push(myPostParams);

      myPostParams = new PostParams();
      myPostParams.key = 'stateTime';
      myPostParams.value = timeState;
      arPostParams.push(myPostParams);

      this.docStructureService.requestForFunction(docCall,method,'',arPostParams)
                              .then((collData:Object) => {

                                let listElement: Corso[] = [];
                                let collDataCorso: any[];

                                
                                if (collData) {

                                  if (collData.hasOwnProperty('CORSO')) {
                                    collDataCorso = collData['CORSO'];

                                    if (collDataCorso.length != 0) {
  
                                      //Creo la lista
                                      collDataCorso.forEach(elData => {
                                        let newElement: Corso = new Corso;
                                        newElement.setJSONProperty(elData);
                                        listElement.push(newElement);
                                      })
  
                                      //Adesso voglio anche decodificare i dati contenuti
                                      this.docStructureService.decodeCollection(listElement)
                                                              .then(() => {
                                                                //Riemetto la lista aggiornata
                                                                this._listCorsiTrainer.next(listElement);
                                                              })
                                                              .catch(error => {
                                                                //Anche in errore riemetto la lista
                                                                this._listCorsiTrainer.next(listElement);
  
                                                              })
  
                                    }
                                    else {
                                      //Nessun dato
                                      this._listCorsiTrainer.next([]);
                                    }
                                  }
                                  else {
                                      //Nessun dato
                                      this._listCorsiTrainer.next([]);                                    
                                  }

                                }
                                else {
                                  //Nessun dato
                                  this._listCorsiTrainer.next([]);
                                }
                              })


    }
  }
  
 }


  /**
   * Ritorna un oggetto HttpParams con i parametri impostati
   * @param filter Oggetto co i filtri da applicare e passare come HttpParams
   */
  getHttpParamsFilter(filter: FilterCorsi): HttpParams {

    let myParams = this.docStructureService.getHttpParams().set('IDLOCATION', filter.IDLOCATION);
    let arProperty = Object.keys(filter); //Prendo tutte le proprieta

    // CIclo le proprieta dell'oggetto filter
    arProperty.forEach(element => {
      let nameProperty = element;

      //Se non inizia con _ è una proprieta da includere
      if (!nameProperty.startsWith('_')) {
        //Se c'è un valore
        if (filter[nameProperty]) {
          let value = filter[nameProperty];

          /* Per la DATAFINE applico la condizione se è presente*/
          if (value == 'DATAFINE') {

            if (filter._CONDITIONDATAFINE) {
              value = filter._CONDITIONDATAFINE + value;
            }
            
          }

          //Aggiungo il parametro
          myParams = myParams.append(nameProperty, value);
        }
      }
      else if (nameProperty = '_CHECKISCRIZIONEAPERTA') {
        if (filter[nameProperty]) {
          //devo includere la ricerca 
          //per avere solo i corsi con iscrizione aperta
          
        }
      }
    });


    return myParams;
  }

  /**
   * Aggiunge un corso all'elenco dei corsi
   * @param objCorso Corso da Aggiungere
   */
  addCorso(objCorso: Corso) {
    this.listCorsi
      .pipe(take(1))
      .subscribe( collCorsi => {
        this._listCorsi.next( collCorsi.concat(objCorso));
      })
  }

  /**
   * Elimina tutti i corsi presenti
   */
  emptyCorsi() {
    this._listCorsi.next([]);
  }


  //#region CORSO GIORNALIERO


    
  /**
   * Carica una lista con il filtro impostato
   * Utilizza il metodo statico invece della query semplice
   * @param filter 
   */
  requestCorsoGiornalieroList(filter: CorsoGiornaliero):Promise<CorsoGiornaliero[]> {
    return new Promise<CorsoGiornaliero[]>((resolve, reject) => {
      let myPostParams : PostParams;
      let arPostParams: PostParams[] = [];
      let method: string = 'getDailyCourseForDate';
      
      if (filter) {

            myPostParams = new PostParams();
            myPostParams.key = 'filterDoc';
            myPostParams.value = filter;
            arPostParams.push(myPostParams);
            this.docStructureService.requestForFunctionCasting<CorsoGiornaliero>(filter, method,arPostParams)
                                    .then(dataReceived => {
                                        resolve(dataReceived);
                                    })
                                    .catch(error => {
                                      reject(error);
                                    });
        }
        else {
          reject('Filtro non impostato');
        }
    })
  }


  /**
   * Recupera un Corso Giornaliero
   * Catch se non trovato
   * @param idCorso Corso di riferimento
   * @returns 
   */
  requestCorsoGiornalieroById(idCorso: string): Promise<CorsoGiornaliero> {

    return new Promise<CorsoGiornaliero>((resolve, reject) => {
      if (idCorso && idCorso.length != 0) {
        let filter: CorsoGiornaliero = new CorsoGiornaliero();
        filter.ID = idCorso;
        this.docStructureService.requestDoc<CorsoGiornaliero>(filter)
                                .then( itemDoc => {
                                    resolve(itemDoc);
                                })
                                .catch(error => {
                                  reject(error);
                                })

      }
      else {
        reject('IdCorso non impostato');
      }
    })
  }
  //#endregion

  //#region GESTIONE CORSI GIORNALIERI CON ELENCO
  //Caricamento avviene piano piano
  
  /**
   * Richiede i prossimi corsi e ritorna l'ultima data/ora ricevuta
   * @param idLocation 
   * @param numMaxRequest Numero massimo di record richiesti (10 = Default)
   * @param onlyFuture Richiede solo i prossimi impegni
   * @returns 
   */


  /**
   * Se filterRequest viene popolata la Data recupera tutto di quella data,
   * altrimenti recupera numMaxRequest partendo da 
   * DATAORAINIZIO >= startFromDateTime
   * @param filterRequest Filtro di richiesta (popolare idLocation e idArea)
   * @param startFromDatetime Eventuale DataOra da cui richiedere il recupero
   * @returns 
   */
  requestGroupedCorsiGiornalieri(filterRequest: GroupedCorsiGiornalieri,
                                startFromDatetime?: Date
                                ): Promise<GroupedCorsiGiornalieri[]> {

  return new Promise<GroupedCorsiGiornalieri[]>((resolve, reject) => {
    let idLocation: string;
    let idArea: string;
    let numMaxRequest: number = 10;
    let fullRequest: boolean = false;
    let arPostParams: PostParams[] = [];
    let method: string = 'getDailyCourseForDate';
    

    if (filterRequest) {
      //Posso fare le richieste solo se ho Location e Area
      if (filterRequest.IDLOCATION && filterRequest.IDLOCATION.length != 0) {
        idLocation = filterRequest.IDLOCATION;
      }

      if (filterRequest.IDAREAOPERATIVA && filterRequest.IDAREAOPERATIVA.length != 0) {
        idArea = filterRequest.IDAREAOPERATIVA;
      }
    }

    //Posso proseguire nella chiamata
    if (idLocation && idLocation.length != 0 && 
        idArea && idArea.length != 0) {

      //Preparo il filtro di chiamata
      let filterCall = new CorsoGiornaliero();
      
      //Preparo il documento di filtro di chiamata
      filterCall.IDLOCATION = idLocation;
      filterCall.IDAREAOPERATIVA = idArea;

      //Ho una data precisa di richiesta
      if (filterRequest.DATEFILTER) {
        method = 'getDailyCourseForDate';

        //Imposto la data richeista
        filterCall.DATA = filterRequest.DATEFILTER;

        //Imposto il documento di filtro con area e location
        PostParams.addParamsTo(arPostParams, 'filterDoc', filterCall);

        fullRequest = true;

      }
      else {
        //Richiedo la modalità progressiva di caricamento
        method = 'getDailyCourseFromDateTime';
        //Se non ho date, richiedo da oggi
        if (!startFromDatetime) {
          filterCall.DATAORAINIZIO = MyDateTime.today();
        }
        else {
          filterCall.DATAORAINIZIO = startFromDatetime;
        }        

        //Imposto il documento di filtro con area e location
        PostParams.addParamsTo(arPostParams, 'filterDoc', filterCall);
        PostParams.addParamsTo(arPostParams, 'maxRequest', numMaxRequest);
        
      }
      
      //Effettuo la chiamata
      this.docStructureService.requestForFunctionCasting<CorsoGiornaliero>(filterCall,method, arPostParams)
                              .then(dataList => this.orderForDataOraInizio(dataList))
                              .then(dataList => this.mergeGroupedCorsiGiornalieri(dataList))
                              .then(groupedData => this.setFlagFullRequestIn(groupedData, fullRequest, filterRequest.DATEFILTER))
                              .then(finalGroupedList => {
                                  resolve(finalGroupedList);
                              })
                              .catch(error => {
                                this._listGroupedCorsiGiornalieri.next([]);
                                LogApp.consoleLog(error,'error');
                                reject('Errore recupero corsi');
                              })
      }
      else {
        //Svuoto la collection
        this._listGroupedCorsiGiornalieri.next([]);
        resolve([]);
      }
    })
}

/**
 * Popola la listCorsiGiornalieri 
 * @param dataList 
 */
mergeGroupedCorsiGiornalieri(dataList: CorsoGiornaliero[]): Promise<GroupedCorsiGiornalieri[]> {
  return new Promise<GroupedCorsiGiornalieri[]>((resolve) => {
    let actualListGrouped = this._listGroupedCorsiGiornalieri.getValue();
    let actualMaxDateTime: Date;
    
    let groupedDoc: GroupedCorsiGiornalieri;
    let flagMerge = false;

    //Lista attuale contiene dati
    if (actualListGrouped.length != 0) {

      if (dataList && dataList.length != 0) {
        let firstIncoming = dataList[0];
        let firstActual = actualListGrouped[0];

        if (firstIncoming && firstActual && 
            firstIncoming.IDLOCATION && firstActual.IDLOCATION && 
            firstIncoming.IDLOCATION != firstActual.IDLOCATION) {

            //Location cambiata cnon faccio il merge
            flagMerge = false;
        }
        else {
          //Eseguo operazione di merge
          flagMerge = true;
        }
      }
    }
    else {
      flagMerge = true;
    }

    //Se non devo fare il merge, svuoto l'esistente
    if (!flagMerge) {

      actualListGrouped = [];
      actualMaxDateTime = null;

    }

    //Se ci sono dati posso popolare
    if (dataList && dataList.length != 0) {

      //Ciclo su i dati ricevuti e creo gli array
      dataList.forEach(elIncomingCorso => {

        //Cerchiamo la data di riferimento
        groupedDoc = actualListGrouped.find(elGroup => MyDateTime.compareEqualDate(elGroup.DATEFILTER, elIncomingCorso.DATA));

        if (!groupedDoc) {
          //Creo il record con la data
          groupedDoc = new GroupedCorsiGiornalieri();
          groupedDoc.DATEFILTER = elIncomingCorso.DATA;
          groupedDoc.IDLOCATION = elIncomingCorso.IDLOCATION;
          //Aggiungo alla lista Attuale
          actualListGrouped.push(groupedDoc);

          //Aggiungo il record del corso
          groupedDoc.addCorso(elIncomingCorso);
        }
        else {
          //Data presente
          //Vediamo se è gia presente il corso
          let findCorso = groupedDoc.findCorsoById(elIncomingCorso.ID);
          //Non ho trovato il corso, lo aggiungo
          if (!findCorso) {
            groupedDoc.addCorso(elIncomingCorso);
          }
        }
      })

      //Reimposto la Max DataOrainizio rilevata
      actualMaxDateTime = GroupedCorsiGiornalieri.getMaxDataOraInizioIn(actualListGrouped);

    }



    //Reimposto la lista
    this._listGroupedCorsiGiornalieri.next(actualListGrouped);

    //Reimposto l'ultima Data/Ora
    if (!actualMaxDateTime) {
      actualMaxDateTime = new Date();
    }
    this._lastDateCorsiGiornalieri.next(actualMaxDateTime);

    //Torno la lista completa corsi
    resolve(actualListGrouped);
  })
}


/**
 * Ordina la Lista in modalità CRESCENTE per DATAORAINIZIO
 * @param dataList 
 * @returns 
 */
orderForDataOraInizio(dataList: CorsoGiornaliero[]): Promise<CorsoGiornaliero[]> {
  return new Promise<CorsoGiornaliero[]>((resolve, reject) => {
    dataList.sort((a,b) => {
      let valRet: number;
      if (a.DATAORAINIZIO < b.DATAORAINIZIO) {
        valRet = -1;
      }
      else {
        valRet = 1;
      }
      return valRet;
    })

    resolve(dataList);
  })
}

/**
 * Imposta nella collection passata il flag di ALLREQUEST
 * @param collection 
 * @param fullrequest 
 * @param dataRequest 
 */
setFlagFullRequestIn(collection: GroupedCorsiGiornalieri[], 
                    flagFullrequest: boolean, 
                    dataRequest?: Date ): Promise<GroupedCorsiGiornalieri[]> {

  return new Promise<GroupedCorsiGiornalieri[]>((resolve) => {

    if (collection && dataRequest) {

      let itemData = collection.find(elGrouped => MyDateTime.compareEqualDate(elGrouped.DATEFILTER, dataRequest));
      if (itemData) {
        itemData.ALLREQUESTED = flagFullrequest;
      }

    }

    resolve(collection);
  })

}

  //#endregion

}
