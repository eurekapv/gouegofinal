import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

import { Corso } from '../../models/corso/corso.model';
import { FilterCorsi } from '../../models/corso/filtercorsi.model';


import { PostParams, RequestDecode, RequestParams } from '../../library/models/requestParams.model';
import { DocstructureService } from '../../library/services/docstructure.service';
import { TimeTrainerCourse } from '../../models/zsupport/valuelist.model';


@Injectable({
  providedIn: 'root'
})

export class CourseService {

  private _listCorsi = new BehaviorSubject<Corso[]>([]);
  private _filterCorsi: FilterCorsi;
  private _selectedCorso = new BehaviorSubject<Corso>(new Corso());

  private _listCorsiTrainer = new BehaviorSubject<Corso[]>([]);

  
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


}
