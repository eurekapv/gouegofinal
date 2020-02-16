import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { Location } from '../models/location.model';
import { ApicallService } from './apicall.service';
import { StartConfiguration } from '../models/start-configuration.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private _listLocation = new BehaviorSubject<Location[]>([]);

  get listLocation() {
    return this._listLocation.asObservable();
  }

  constructor(private apiService:ApicallService) { }



  /**
   * Recupero delle Location di un'area
   * @param config Parametri di configurazione
   * @param idArea Area di riferimento
   */
  requestByIdArea(config: StartConfiguration, idArea: string) {
    let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
    const doObject = 'LOCATION';
    
    // In Testata c'e' sempre l'AppId
    myHeaders = myHeaders.set('APPID',config.appId);
    // Nei parametri imposto l'Area Operativa
    let myParams = new HttpParams().set('IDAREAOPERATIVA', idArea);

    let myUrl = config.urlBase + '/' + doObject;

    this.apiService
        .httpGet(myUrl, myHeaders, myParams)
        .pipe(map(fullData => {
          return fullData.LOCATION
        }))
        .subscribe(resultData => {

          //Cancello le Location
          this._listLocation.next([]);

          //Inserisco le location
          this._addMultipleLocation(resultData);

        });
  }


    /** Effettua la richiesta al server di una Location precisa
   * @param idLocation Location scelta 
   * 
   */
  requestLocationByID(config: StartConfiguration, idLocation: string) {
    let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
    const doObject = 'LOCATION';

    // In Testata c'e' sempre l'AppId
    myHeaders = myHeaders.set('APPID',config.appId);
    myHeaders = myHeaders.set('child-level',"2");

    // Nei parametri imposto l'Area Operativa
    let myParams = new HttpParams().set('ID', idLocation);

    let myUrl = config.urlBase + '/' + doObject;


    return this.apiService
                .httpGet(myUrl, myHeaders, myParams)
                .pipe(map(fullData => {
                  return fullData.LOCATION
                }));
  }

  /**
   * Aggiunge un insieme di elementi all'array delle Location
   * @param dataJSON JSON Received
  */
  private _addMultipleLocation(dataJSON: any) {
    
    if (dataJSON) {
      dataJSON.forEach(element => {
        let newLocation = new Location();
        newLocation.setJSONProperty(element);

        this.listLocation
          .pipe(take(1))
          .subscribe( collLocation => {
            this._listLocation.next( collLocation.concat(newLocation));
          });
      });
    }
  }
}
