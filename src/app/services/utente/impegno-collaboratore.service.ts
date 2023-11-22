import { Injectable } from '@angular/core';
import { ImpegnoCollaboratore } from '../../models/utente/impegno-collaboratore.model';
import { BehaviorSubject } from 'rxjs';
import { DocstructureService } from '../../library/services/docstructure.service';
import { LogApp } from '../../models/zsupport/log.model';
import { OperatorCondition } from '../../library/models/iddocument.model';
import { RequestParams } from '../../library/models/requestParams.model';
import { Mansione, RangeSearch } from '../../models/zsupport/valuelist.model';
import { MyDateTime } from '../../library/models/mydatetime.model';

@Injectable({
  providedIn: 'root'
})
export class ImpegnoCollaboratoreService {

  private _listImpegni$ = new BehaviorSubject<ImpegnoCollaboratore[]>([]);
  public get listImpegni$() {
    return this._listImpegni$;
  } 


  constructor(private docStructureService: DocstructureService) { }

  /**
   * Viene effettuata la richiesta dati di un utente per la mansione specificata
   * @param idUtente 
   * @param mansione 
   * @param periodAnalize 
   * @param periodDate 
   * @param numMaxRequest 
   * @returns 
   */
  request(idUtente: string,
                 mansione: Mansione,
                 periodAnalize: RangeSearch,
                 periodDate: Date,
                 numMaxRequest: number = 10): Promise<void> {

    return new Promise<void>((resolve, reject) => {


        if (idUtente && idUtente.length != 0) {

          let filterImpegno = new ImpegnoCollaboratore(true);
          let reqParam = new RequestParams();

          //Imposto i parametri di richiesta
          reqParam.top = numMaxRequest;
          reqParam.child_level = 1;
          reqParam.decode.active = false;
          reqParam.orderBy = 'asc';

          //Preparo il documento di filtro
          filterImpegno.IDCOLLABORATORE = idUtente;
          filterImpegno.MANSIONE = mansione;

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
                                    myErr = 'Errore recupero impegni trainer';   
                                    LogApp.consoleLog(error,'error');
                                    reject(myErr);
                                  })
        }
        else {
          //Svuoto la collection
          this._listImpegni$.next([]);       
          resolve();
        }
    })
  }

  /**
   * Riempie i dati di DATAORAINIZIO / DATAORA FINE con le informazioni passate nei parametri
   * @param filterImpegno 
   * @param periodAnalize 
   * @param periodDate 
   */
  fillDateRequestFilter(filterImpegno: ImpegnoCollaboratore, periodAnalize: RangeSearch, periodDate: Date):void {

    if (filterImpegno && periodAnalize && periodDate) {
      switch (periodAnalize) {
        case RangeSearch.giorno:
            filterImpegno.DATAORAINIZIO = periodDate;
            //Applico una condizione per la dataorainizio
            filterImpegno.addFilterCondition(OperatorCondition.uguale, 'DATAORAINIZIO');
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
