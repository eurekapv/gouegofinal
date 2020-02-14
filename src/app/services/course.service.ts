import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { Corso } from '../models/corso.model';
import { ApicallService } from './apicall.service';
import { StartConfiguration } from '../models/start-configuration.model';
import { FilterCorsi } from '../models/filtercorsi.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private _listCorsi = new BehaviorSubject<Corso[]>([]);
  private _filterCorsi: FilterCorsi;

  get listCorsi() {
    return this._listCorsi.asObservable();
  }

  get filterCorsi() {
    return this.filterCorsi;
  }

  set filterCorsi(value: FilterCorsi) {
    this._filterCorsi = value;
  }

  /**
   * Inizializza il filtro dei corsi
   * @param idLocation Location da utilizzare
   */
  initFilterCorsi(idLocation: string) {
    this._filterCorsi = new FilterCorsi(idLocation);
  }

  constructor(private apiService: ApicallService) { }

  /**
   * Effettua una chiamata al server per il recupero dei corsi
   * Utilizzare il documento di Filtro per richiedere dati filtrati
   * @param config Parametri di configurazione
   * @param filter Filtri da applicare in ricerca
   */
  request(config: StartConfiguration, filter?: FilterCorsi) {
    let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
    const doObject = 'CORSO';
    let filterUsed: FilterCorsi;

    //In Testata c'e' sempre l'AppId
    myHeaders = myHeaders.set('APPID',config.appId);
    let myUrl = config.urlBase + '/' + doObject;  

    if (filter) {
      filterUsed = filter;
    }
    else {
      filterUsed = this._filterCorsi;
    }

    let myParams = this.getHttpParamsFilter(filterUsed);
    
    //Elimino i corsi presenti
    this.emptyCorsi();

    this.apiService
      .httpGet(myUrl, myHeaders, myParams)
      .pipe(map(data => {
        return data.CORSO
      }))
      .subscribe( resultData => {

        resultData.forEach(element => {

          let newCorso = new Corso();
          newCorso.setJSONProperty(element);
          this.addCorso(newCorso);

        });
      })
  }


  /**
   * Ritorna un oggetto HttpParams con i parametri impostati
   * @param filter Oggetto co i filtri da applicare e passare come HttpParams
   */
  getHttpParamsFilter(filter: FilterCorsi): HttpParams {
    let myParams = new HttpParams().set('IDLOCATION', filter.IDLOCATION);
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
