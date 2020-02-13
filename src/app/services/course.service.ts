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

  get listCorsi() {
    return this._listCorsi.asObservable();
  }

  constructor(private apiService: ApicallService) { }

  /**
   * Effettua una chiamata al server per il recupero dei corsi
   * Utilizzare il documento di Filtro per richiedere dati filtrati
   * @param config Parametri di configurazione
   * @param filter Filtri da applicare in ricerca
   */
  request(config: StartConfiguration, filter: FilterCorsi) {
    let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
    const doObject = 'CORSO';

    //In Testata c'e' sempre l'AppId
    myHeaders = myHeaders.set('APPID',config.appId);
    let myUrl = config.urlBase + '/' + doObject;  

    let myParams = this.setFilterParams(filter);
    
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


  setFilterParams(filter: FilterCorsi): HttpParams {
    let myParams = new HttpParams().set('IDLOCATION', filter.IDLOCATION);
    let arProperty = Object.keys(filter);

    arProperty.forEach(element => {
      
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
