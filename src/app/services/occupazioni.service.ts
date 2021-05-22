import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { OccupazioneCampi } from '../models/occupazionecampi.model';
import { IDDocument, OperatorCondition } from '../library/models/iddocument.model';
import { DocstructureService } from '../library/services/docstructure.service';
import { SettoreAttivita } from '../models/valuelist.model';

import { RequestParams } from '../library/models/requestParams.model';
import { PrenotazionePianificazione } from '../models/prenotazionepianificazione.model';
import { Prenotazione } from '../models/prenotazione.model';

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
   * Richiede una singola occupazione cercando per id, se il secondo parametro è true, richiede anche il docprenotazione collegato e lo inserisce nel repository
   * il docprenotazione viene inoltre decodificato, e contiene l'elenco delle pianificazioni; anch'esse decodificate
   * @param idOccupazione id da cercare
   * @param requestRelatedReservation indica se richiedere anche il documento prenotazione collegato e inserirlo nel docrepository
   */
  requestById(idOccupazione: string, requestRelatedReservation = false): Promise<OccupazioneCampi>{


    return new Promise((resolve, reject) => {
      //filtro e parametri
      let myFilter = new OccupazioneCampi(true);
      let myParams = new RequestParams();

      //controllo di avere un id
      if(idOccupazione && idOccupazione.length > 0){
        //preparo i parametri
        myFilter.ID = idOccupazione;
        myParams.decode.active = true;

        //faccio la richiesta
        this.docStructureService.requestNew(myFilter, myParams)

        .then((resultList: OccupazioneCampi[]) => {
          //se ho ottenuto qualcosa, lo ritorno al prossimo .then
          if (resultList[0]){
            return(resultList[0]);
          }
          //altrimenti rigetto
          else{
            reject('Nessuna occupazione presente con id indicato');
          }
        })

        .then((elOccupazione: OccupazioneCampi) => {
          //adesso che ho l'elemento, se mi è stato chiesto recupero il docprenotazione
          if(requestRelatedReservation){
            this.docStructureService.getRelDoc(elOccupazione, ['IDREF'], 3, elOccupazione)
            .then(() => {
              //@ts-ignore
              let docPrenotazione: Prenotazione = elOccupazione.getDocInRepository(elOccupazione.IDREF)
              //ora devo decodificare la prenotazione e le pianificazioni

              let reqForeign = PrenotazionePianificazione.getReqForeignKeys();

              Promise.all([
                (this.docStructureService.decodeAll(docPrenotazione, true)),
                (this.docStructureService.decodeCollection(docPrenotazione.PRENOTAZIONEPIANIFICAZIONE, reqForeign))

               ])

              
              .then(() => {
                resolve(elOccupazione);
              })
            })
            .catch(error => {reject (error);})
          }
          else{
            resolve (elOccupazione);
          }
        })

        .catch(error => {
          reject(error);
        })
      }


      else{
        reject('Id non fornito');
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
