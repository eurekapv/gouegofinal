import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { OccupazioneCampi } from '../models/occupazionecampi.model';
import { IDDocument, OperatorCondition } from '../library/models/iddocument.model';
import { DocstructureService } from '../library/services/docstructure.service';
import { SettoreAttivita } from '../models/valuelist.model';

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
          idLocation?: string,
          params?: RequestParams,
          top: number = undefined,
          fromTime: Date = undefined
          ):Promise<OccupazioneCampi[]> {
    let adesso = new Date();

    return new Promise<OccupazioneCampi[]>((resolve, reject) => {

      let filterTipo = [];
      //Quando voglio mettere in OR dei valori su un campo, creo un array 
      //e lo passo alla funzione addFilterCondition
      filterTipo.push(SettoreAttivita.settoreCorso);
      filterTipo.push(SettoreAttivita.settorePrenotazione);
      
      let filterDocument = new OccupazioneCampi(true);
      filterDocument.DATAINIZIO = adesso;
      // filterDocument.ORAINIZIO = adesso;

      filterDocument.IDAREA = idArea;
      //Aggiungo la condizione speciale per TIPO con dei valori in OR
      filterDocument.addFilterCondition(OperatorCondition.uguale, 'TIPO', filterTipo);

      if(idLocation){
        filterDocument.IDLOCATION = idLocation;
      }

      if(fromTime){
        filterDocument.ORAFINE = fromTime
        filterDocument.addFilterCondition(OperatorCondition.maggiore, 'ORAFINE');

      }

     
     

      if (!params) {
        params = new RequestParams();
        params.decode.active = true;
        params.top = top;
      }

      this.docStructureService
            .requestNew(filterDocument, params)
            .then(genericListElements => {

              let listElements: OccupazioneCampi[] = genericListElements;
              listElements.sort((a, b) => {
              if(a.ORAINIZIO > b.ORAINIZIO){
                return 1;
              }
              else if(a.ORAINIZIO < b.ORAINIZIO){
                return -1;
              }
              else{
                return 0;
              }
            })

              //Riemetto Observable
              this._listOccupazioni.next(listElements);

              //Chiudo la promise
              resolve(listElements);

            })
            .catch( error => {
              reject(error);
            })

    });
      
  }

  requestByFilter(filter: OccupazioneCampi, params?: RequestParams):Promise<OccupazioneCampi[]>{
    return new Promise((resolve, reject) => {
      let myFilter: IDDocument;
      let myParams: RequestParams;
      if(filter){
        myFilter = filter;
        if(params){
          myParams = params;
        }
        else{
          myParams = new RequestParams();
          myParams.decode.active = true;
        }

        //abbiamo tutto, possiamo fare la richiesta
        this.docStructureService.requestNew(myFilter, myParams)
        .then((genericListElements: any) => {
          let listElements: OccupazioneCampi[] = genericListElements;
          listElements.sort((a, b) => {
            if(a.ORAINIZIO > b.ORAINIZIO){
              return 1;
            }
            else if(a.ORAINIZIO < b.ORAINIZIO){
              return -1;
            }
            else{
              return 0;
            }
          })

          let arPromises: Promise<IDDocument>[] = [];
          listElements.forEach(elOccupazione => {
            arPromises.push(this.docStructureService.getRelDoc(elOccupazione, ['IDREF'], 1, elOccupazione));
          })

          Promise.all(arPromises)
          .then(() => {
            resolve (listElements);
          })
          .catch(error => {
            reject (error);
          })
        })
        .catch(error => {
          reject (error);
        })
      }
      else{
        reject('Documento filtro non definito');
      }
    })
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
