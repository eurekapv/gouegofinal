import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StartConfiguration } from '../models/start-configuration.model';
import { CampoSport } from '../models/camposport.model';
import { DocstructureService } from '../library/services/docstructure.service';

@Injectable({
  providedIn: 'root'
})
export class CamposportService {

  private _listCampiSport = new BehaviorSubject<CampoSport[]>([]);

  get listCampiSport() {
    return this._listCampiSport.asObservable();
  }

  constructor(private docStructureService: DocstructureService) { }

  /**
   * Richiede al server l'elenco degli Sport dei Campi
   * @param config Parametri configurazione chiamata
   */
  request(idCampo: string):Promise<CampoSport[]> {
    return new Promise<CampoSport[]>((resolve, reject)=>{

      let filterDoc: CampoSport;

      filterDoc = new CampoSport(true);
      filterDoc.IDCAMPO = idCampo;

      this.docStructureService.requestNew(filterDoc)
                              .then(listItems => {

                                //Riemetto la lista dei Campi Sport
                                this._listCampiSport.next(listItems);

                                resolve(listItems);

                              })
                              .catch(error => {
                                reject(error);
                              })
    })
  }

}
