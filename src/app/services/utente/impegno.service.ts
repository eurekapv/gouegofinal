import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Impegno } from '../../models/utente/impegno.model';
import { DocstructureService } from '../../library/services/docstructure.service';
import { OperatorCondition } from '../../library/models/iddocument.model';
import { RequestParams } from '../../library/models/requestParams.model';
import { LogApp } from '../../models/zsupport/log.model';
import { MyDateTime } from '../../library/models/mydatetime.model';

@Injectable({
  providedIn: 'root'
})
export class ImpegnoService {

  private _nextImpegno$ = new BehaviorSubject<Impegno>(null);
  public get nextImpegno$() {
    return this._nextImpegno$;
  }

  private _listImpegni$ = new BehaviorSubject<Impegno[]>([]);
  public get listImpegni$() {
    return this._listImpegni$;
  }

  constructor(private docStructureService: DocstructureService) { }

  /**
   * Richiede i prossimi impegni del cliente
   * @param idUtente 
   * @param numMaxRequest Numero massimo di record richiesti (10 = Default)
   * @param onlyFuture Richiede solo i prossimi impegni
   * @returns 
   */
  request(idUtente: string, 
          onlyFuture: boolean = true,
          numMaxRequest: number = 10): Promise<void> {

    return new Promise<void>((resolve, reject) => {

      if (idUtente && idUtente.length != 0) {

        let filterImpegno = new Impegno(true);
        let reqParam = new RequestParams();

        //Imposto i parametri di richiesta
        reqParam.top = numMaxRequest;
        reqParam.child_level = 1;
        reqParam.decode.active = true;
        reqParam.orderBy = 'asc';
        reqParam.decode.foreignFields = Impegno.getReqForeignKeys();

        //Preparo il documento di filtro
        filterImpegno.IDUTENTE = idUtente;
        //Richiedo i prossimi impegni
        if (onlyFuture) {
          filterImpegno.DATAORAINIZIO = new Date();
          //Applico una condizione per la dataorainizio
          filterImpegno.addFilterCondition(OperatorCondition.maggiore, 'DATAORAINIZIO');
        }

        this.docStructureService.requestNew(filterImpegno, reqParam)
                                .then(dataList => {
                                    
                                    //Imposto la nuova lista
                                    this._listImpegni$.next(dataList);

                                    return this.nextImpegnoFromList(dataList);
                                })
                                .then(nextImpegno => {
                                    this._nextImpegno$.next(nextImpegno);
                                    resolve();
                                })
                                .catch(error => {
                                  this._listImpegni$.next([]);
                                  this._nextImpegno$.next(null);
                                  LogApp.consoleLog(error,'error');
                                  reject('Errore recupero impegni');
                                })
      }
      else {
        //Svuoto la collection
        this._listImpegni$.next([]);
        this._nextImpegno$.next(null);        
        resolve();
      }
    })
  }



  /**
   * Recupera il prossimo impegno su base oraria
   * @param dataList Lista di Impegni
   */
  nextImpegnoFromList(dataList: Impegno[]): Promise<Impegno> {
    return new Promise<Impegno>((resolve) => {
      
      let nextImpegno: Impegno = null;
      let gapMin = 0;
  
      if (dataList && dataList.length != 0) {
        for (let index = 0; index < dataList.length; index++) {
          
          const element = dataList[index];
          let gapItem = MyDateTime.durataSecondi(new Date(),element.DATAORAINIZIO);

          if (index == 0) {
            gapMin = gapItem;
            nextImpegno = element;
          }
          else if (gapItem < gapMin) {
            nextImpegno = element;
            gapMin = gapItem;
          }
        }
      }

      resolve(nextImpegno);
    })
  }


}
