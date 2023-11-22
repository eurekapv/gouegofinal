import { Injectable } from '@angular/core';
import { DocstructureService } from '../../library/services/docstructure.service';
import { TipoTessera } from '../../models/archivi/tipo-tessera';
import { BehaviorSubject } from 'rxjs';
import { RequestParams } from '../../library/models/requestParams.model';
import { LogApp } from '../../models/zsupport/log.model';

@Injectable({
  providedIn: 'root'
})
export class TipoTesseraService {

  private _listTipoTessere$ = new BehaviorSubject<TipoTessera[]>([]);
  public get listTipoTessere$() {
    return this._listTipoTessere$;
  }

  constructor(private docStructureService: DocstructureService) { }

  /**
   * Effettua la richiesta per l'elenco della tipologie di tessere
   * @returns 
   */
  request(): Promise<TipoTessera[]> {

    return new Promise<TipoTessera[]>((resolve, reject) => {
      let params: RequestParams = new RequestParams();
      let filterDoc: TipoTessera = new TipoTessera(true);
      filterDoc.LivelloAutorizzazione = 0;
      params.child_level = 2;

      //Effettuo la richiesta
      this.docStructureService.requestNew(filterDoc, params)
          .then(listReceived => {
              LogApp.consoleLog(listReceived)
              if (listReceived) {
                this._listTipoTessere$.next(listReceived);
              }
              else {
                this._listTipoTessere$.next([]);
              }

              //Chiamata conclusa
              resolve(listReceived);
          })
          .catch(error => {
            //errore di connessione
            reject (error);
          })
    })
  }
}
