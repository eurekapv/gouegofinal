import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DocstructureService } from '../library/services/docstructure.service';
import { LogApp } from '../models/log.model';
import { OperatorCondition } from '../library/models/iddocument.model';
import { RequestParams } from '../library/models/requestParams.model';
import { RangeSearch } from '../models/valuelist.model';
import { MyDateTime } from '../library/models/mydatetime.model';
import { ImpegnoCustode } from '../models/impegno-custode.model';


@Injectable({
  providedIn: 'root'
})
export class ImpegnoCustodeService {

  private _listImpegni$ = new BehaviorSubject<ImpegnoCustode[]>([]);
  public get listImpegni$() {
    return this._listImpegni$;
  } 

  constructor(private docStructureService: DocstructureService) { }


  /**
   * Viene effettuata la richiesta dati di un utente per la mansione specificata
   * @param periodAnalize 
   * @param periodDate 
   * @param numMaxRequest 
   * @returns 
   */
  request(  periodAnalize: RangeSearch,
            periodDate: Date,
            idArea: string,
            idLocation?: string,
            numMaxRequest: number = 10): Promise<void> {

    return new Promise<void>((resolve, reject) => {

      if (idArea && idArea.length != 0) {

        let filterImpegno = new ImpegnoCustode(true);
        let reqParam = new RequestParams();
  
        //Imposto i parametri di richiesta
        reqParam.top = numMaxRequest;
        reqParam.child_level = 1;
        reqParam.decode.active = false;
        reqParam.orderBy = 'asc';
  
        filterImpegno.IDAREAOPERATIVA = idArea;
        
        if (idLocation && idLocation.length != 0) {
          filterImpegno.IDLOCATION = idLocation;
        }

        this.fillDateRequestFilter(filterImpegno, periodAnalize, periodDate);
  
        //Procedo con la richiesta
        this.docStructureService.requestNew(filterImpegno, reqParam)
                                .then(dataList => {
                                  //Imposto la nuova lista Trainer
                                  this._listImpegni$.next(dataList);
                                  resolve();
                                })
                                .catch(error => {
                                  let myErr = '';
                                  this._listImpegni$.next([]); 
                                  myErr = 'Errore recupero impegni custode';   
                                  LogApp.consoleLog(error,'error');
                                  reject(myErr);
                                })
      }
      else {
        this._listImpegni$.next([]); 
        resolve();
      }

    })
  }

  /**
   * Carica un Impegno Custode per ID
   * @param idImpegno 
   * @param numChild Numero Livelli Default = 0
   * @param decodeAll Decodifica Tutto (Default FALSE)
   * @returns 
   */
  requestById(idImpegno: string, numChild = 0, decodeAll = false): Promise<ImpegnoCustode> {
    return new Promise<ImpegnoCustode>((resolve, reject) => {

        if (idImpegno && idImpegno.length != 0) {
          let filterImpegno = new ImpegnoCustode(true);
          let reqParam = new RequestParams();
    
          //Imposto i parametri di richiesta
          reqParam.child_level = numChild;
          reqParam.decode.active = decodeAll;
    
          filterImpegno.ID = idImpegno;          

        //Procedo con la richiesta
        this.docStructureService.requestNew(filterImpegno, reqParam)
                                .then(dataList => {
                                  if (dataList && dataList.length != 0) {
                                    return dataList[0];
                                  }
                                  else {
                                    reject('Impegno non trovato');
                                  }
                                  
                                })
                                .then(singleDoc => {
                                  resolve(singleDoc);
                                })
                                .catch(error => {
                                  LogApp.consoleLog(error,'error');
                                  reject(error);
                                })


        }
        else {
          reject('idImpegno non definito');
        }
    })
  }


  /**
 * Ritorna Impegno Custode dal IDRef
 * @param idRef 
 */
  requestByIdRef(idRef: string, numChild = 0, decodeAll=false): Promise<ImpegnoCustode> {
    return new Promise<ImpegnoCustode>((resolve, reject) => {

      if (idRef && idRef.length != 0) {
        let filterImpegno = new ImpegnoCustode(true);
        let reqParam = new RequestParams();
  
        //Imposto i parametri di richiesta
        reqParam.child_level = numChild;
        reqParam.decode.active = decodeAll;
  
        filterImpegno.IDREF = idRef;          

        //Procedo con la richiesta
        this.docStructureService.requestNew(filterImpegno, reqParam)
                                .then(dataList => {
                                  if (dataList && dataList.length != 0) {
                                    return dataList[0];
                                  }
                                  else {
                                    reject('Impegno non trovato');
                                  }
                                  
                                })
                                .then(singleDoc => {
                                  resolve(singleDoc);
                                })
                                .catch(error => {
                                  LogApp.consoleLog(error,'error');
                                  reject(error);
                                })


      }
      else {
        reject('idRef non definito');
      }
  })  
  }

  /**
   * Riempie i dati di DATAORAINIZIO / DATAORA FINE con le informazioni passate nei parametri
   * @param filterImpegno 
   * @param periodAnalize 
   * @param periodDate 
   */
  fillDateRequestFilter(filterImpegno: ImpegnoCustode, periodAnalize: RangeSearch, periodDate: Date):void {

    if (filterImpegno && periodAnalize && periodDate) {
      switch (periodAnalize) {
        case RangeSearch.giorno:
            filterImpegno.DATAINIZIO = periodDate;
          break;

        case RangeSearch.settimana:
          //Imposto da Domenica a Sabato
          filterImpegno.DATAORAINIZIO = MyDateTime.getStartEndDate(periodDate, 'week','start');
          //Applico una condizione per la dataorainizio
          filterImpegno.addFilterCondition(OperatorCondition.maggiore, 'DATAORAINIZIO');
          filterImpegno.DATAORAFINE = MyDateTime.getStartEndDate(periodDate, 'week','end');
          filterImpegno.addFilterCondition(OperatorCondition.minore, 'DATAORAFINE');
          break;

        case RangeSearch.mese:
          //Dal 1 a fine Mese
          filterImpegno.DATAORAINIZIO = MyDateTime.getStartEndDate(periodDate, 'month','start');
          //Applico una condizione per la dataorainizio
          filterImpegno.addFilterCondition(OperatorCondition.maggiore, 'DATAORAINIZIO');
          filterImpegno.DATAORAFINE = MyDateTime.getStartEndDate(periodDate, 'month','end');
          filterImpegno.addFilterCondition(OperatorCondition.minore, 'DATAORAFINE');
          break;          
      
        default:
          break;
      }
    }
  }  
}
