import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { Location } from '../models/location.model';
import { ApicallService } from './apicall.service';
import { StartConfiguration } from '../models/start-configuration.model';
import { Sport } from '../models/sport.model';
import { CampoSport } from '../models/camposport.model';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private _listLocation = new BehaviorSubject<Location[]>([]);
  private _decodeListSport: Sport[]; //Lista di Decodifica degli Sport

  get listLocation() {
    return this._listLocation.asObservable();
  }

  set decodeListSport(value: Sport[]) {
    this._decodeListSport = value;
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

  //#region SINCRONIZZAZIONE CON CAMPI SPORT

  /**
   * Richiede al Server le informazioni sulle tipologie dei Campi (e Attività Svolte)
   * @param config Parametri di configurazione
   * @param docLocation Location da Completare con i campi Sport
   */
  syncInfoCampi(config: StartConfiguration, 
                docLocation: Location
                ) {
    //Elimino le informazioni precedenti dei Campi Sport
    docLocation.emptyCampiSport();

    //Creo un Observable
    let myLocation = new BehaviorSubject<Location>(docLocation);

    docLocation.CAMPO.forEach(elCampo => {
      this.syncInfoCampoSport(config, elCampo.ID)
        .subscribe(resultData => {

          resultData.forEach(elCampoSport => {

            let docCampoSport = new CampoSport();
            docCampoSport.setJSONProperty(elCampoSport);
            docCampoSport.lookup('IDSPORT',this._decodeListSport, 'DENOMINAZIONE');
            
            myLocation
            .pipe(take(1))
            .subscribe( docLocation => {
              docLocation.addCampoSport(docCampoSport, elCampo.ID);

              myLocation.next(docLocation);
            }

            );

          });

        })
    });

    return myLocation.asObservable();

  }

  /**
   * Sincronizzo le informazioni degli sport dei campi
   */
  syncInfoCampoSport(config: StartConfiguration, idCampo: string) {
    let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
    const doObject = 'CAMPOSPORT';

    // In Testata c'e' sempre l'AppId
    myHeaders = myHeaders.set('APPID',config.appId);
    //myHeaders = myHeaders.set('child-level',"2");

    // Nei parametri imposto il Campo
    let myParams = new HttpParams().set('IDCAMPO', idCampo);

    let myUrl = config.urlBase + '/' + doObject;


    return this.apiService
                .httpGet(myUrl, myHeaders, myParams)
                .pipe(map(fullData => {
                  return fullData.CAMPOSPORT
                }));
  }


  /**
   * Ritorna la Location presente in memoria
   * @param idLocation Location cercata
   */
  findLocationByID(idLocation: string) {
    let arLocation = this._listLocation.getValue();
    
    return arLocation.find(element => {
      return element.ID == idLocation
    });
  }
  //#endregion

}
