import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OccupazioneCampi } from '../models/occupazionecampi.model';
import { IDDocument, OperatorCondition } from '../library/models/iddocument.model';
import { DocstructureService } from '../library/services/docstructure.service';
import { SettoreAttivita } from '../models/valuelist.model';
import { filter } from 'rxjs/operators';
import { RequestParams } from '../library/models/requestParams.model';

@Injectable({
  providedIn: 'root'
})
export class OccupazioniService {

  private _listOccupazioni = new BehaviorSubject<OccupazioneCampi[]>([]);
  

  get listOccupazioni() {
    return this._listOccupazioni.asObservable();
  }


  constructor(private docStructureService: DocstructureService) { }

  /**
   * Richiede la lista di occupazione campi
   * Senza filtro precedente, imposto la data Inizio da oggi
   * @param filterDocument 
   * @param decodeAll 
   */
  request(idArea: string, 
          filterDocument?:OccupazioneCampi, 
          params?: RequestParams):Promise<OccupazioneCampi[]> {
    let adesso = new Date();

    return new Promise<OccupazioneCampi[]>((resolve, reject) => {
      if (!filterDocument) {

        let filterTipo = [];
        //Quando voglio mettere in OR dei valori su un campo, creo un array 
        //e lo passo alla funzione addFilterCondition
        filterTipo.push(SettoreAttivita.settoreCorso);
        filterTipo.push(SettoreAttivita.settorePrenotazione);
        console.error('QUI');
        filterDocument = new OccupazioneCampi(true);
        filterDocument.DATAINIZIO = adesso;
        filterDocument.ORAINIZIO = adesso;

        filterDocument.IDAREA = idArea;
        //Aggiungo la condizione di filtro per l'orario
        filterDocument.addFilterCondition(OperatorCondition.maggiore, 'ORAINIZIO');
        //Aggiungo la condizione speciale per TIPO con dei valori in OR
        filterDocument.addFilterCondition(OperatorCondition.uguale, 'TIPO', filterTipo);
      }
      else {
        filterDocument.IDAREA = idArea;
      }

      if (!params) {
        params = new RequestParams();
        params.decode.active = true;
      }

      this.docStructureService
            .requestNew(filterDocument, params)
            .then(listElement => {

              //Riemetto Observable
              this._listOccupazioni.next(listElement);

              //Chiudo la promise
              resolve(listElement);

            })
            .catch( error => {
              reject(error);
            })

    });
      
  }


  /**
   * Lista completa di occupazione
   * @param collOccupazione Lista completa di occupazione
   */
  public createShortList(collOccupazione: OccupazioneCampi[]) {
    let shortList: OccupazioneCampi[];
    if (collOccupazione && collOccupazione.length != 0) {

      shortList = collOccupazione.filter((element,index) => {
        return (index < 5);
      });

    }
    else {
      shortList = [];
    }
    
  }
}
