import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { ApicallService } from './apicall.service';

import { StartConfiguration } from '../models/start-configuration.model';
import { Area } from '../models/area.model';
import { Location } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class StartService {

  /* 
    Creo l'oggetto per iniziare la configurazione passando 
    testingMode = TRUE (verra chiamato un localhost e non gouego)
    secureProtocol = FALSE (chiamata http e non https)
  */
  private _startConfig = new BehaviorSubject<StartConfiguration>(new StartConfiguration(false,true));
  private _listAree = new BehaviorSubject<Area[]>([]);
  private _listLocation = new BehaviorSubject<Location[]>([]);

  get startConfig() {
    return this._startConfig.asObservable();
  }

  get listAree() {
    return this._listAree.asObservable();
  }

  get listLocation() {
    return this._listLocation.asObservable();
  }

  
  constructor(private apiService: ApicallService) { }

  // Effettua la chiamata WebAPI al Server per richiedere l'autorizzazione
  requestStartAuthorization() {
    const myHeaders = new HttpHeaders({'Content-type':'text/plain'});
    const actualStartConfig = this._startConfig.getValue();
    const myParams = new HttpParams().set('APPID', actualStartConfig.appId);
    const doObject = 'GRUPPOSPORTIVO';

    let myUrl = actualStartConfig.urlBase + '/' + doObject;

    
    // Effettuo la chiamata per l'autorizzazione
    this.apiService
      .httpGet(myUrl, myHeaders, myParams)
      .pipe(map(fullData => {
        return fullData.GRUPPOSPORTIVO.find(singleData => singleData.ID == actualStartConfig.appId)
      }))
      .subscribe(resultData => {
        // Sistemo l'oggetto di configurazione 
        // ed emetto un evento di Cambio
        console.log('Autorizzazione ricevuta');
        console.log(resultData);

        
        this.startConfig
          .pipe(take(1))
          .subscribe( element => {
            //Imposta l'autorizzazione dal gruppo
            element.setGruppoAuthorization(resultData);
            //Emetto l'evento di cambio
            this._startConfig.next(element);            

            //Passo a richiedere le Aree
            this.requestAree();

          });
      });
      

      
  }


  //#region AREE

    //Aggiunge un'area
    addArea(objArea: Area) {
      this.listAree
        .pipe(take(1))
        .subscribe( aree => {
          this._listAree.next( aree.concat(objArea))
        });
    }
    
    // Ritorno Observable di una Area
    getArea(id: string) {
      return this.listAree
              .pipe(take(1), map( aree => {
                return aree.find( ar => ar.ID == id)
              }));
    }

      // Effettua la chiamata WebAPI al Server per richiedere le Aree
    requestAree() {
      let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
      const doObject = 'AREAOPERATIVA';
      const actualStartConfig = this._startConfig.getValue();

      // In Testata c'e' sempre l'AppId
      myHeaders = myHeaders.set('APPID',actualStartConfig.appId);
      // Nei parametri imposto il gruppo Sportivo
      let myParams = new HttpParams().set('IDGRUPPOSPORTIVO',actualStartConfig.gruppo.ID);

      let myUrl = actualStartConfig.urlBase + '/' + doObject;

      this.apiService
        .httpGet(myUrl, myHeaders, myParams)
        .pipe(map(fullData => {
          return fullData.AREAOPERATIVA
        }))
        .subscribe(resultData => {

          console.log('Aree');
          console.log(resultData);

          let idAreaSelected = ''; //Area da selezionare

          // Ciclo sull'Array
          for (let index = 0; index < resultData.length; index++) {
            const element = resultData[index];
            if (index == 0) {
              //Seleziono il primo elemento
              idAreaSelected = element.ID;
            }

            // Creo un Oggetto Area e lo aggiungo
            let newArea = new Area();
            newArea.setJSONProperty(element);
            newArea.setOriginal();
            this.addArea(newArea);

          }

          //Procedo con il recupero delle Location
          if (idAreaSelected) {
            // Memorizzo l'Area nell'oggetto
            this.startConfig
            .pipe(take(1))
            .subscribe( element => {
                element.idAreaSelected = idAreaSelected;

                //Riemetto l'evento
                this._startConfig.next(element);

                // Recupero le Location
                this.requestLocation(idAreaSelected);
            });
          }
        });

    }
  //#endregion


  //#region LOCATIONS
    //Aggiunge una location
    addLocation(objLocation: Location) {
      this.listLocation
        .pipe(take(1))
        .subscribe( locations => {
          this._listLocation.next( locations.concat(objLocation))
        });
    }
    
    // Ritorno Observable di una Area
    getLocation(id: string) {
      return this.listLocation
              .pipe(take(1), map( locations => {
                return locations.find( loc => loc.ID == id)
              }));
    }


  requestLocation(idArea: string) {
    let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
    const doObject = 'LOCATION';
    const actualStartConfig = this._startConfig.getValue();

    // In Testata c'e' sempre l'AppId
    myHeaders = myHeaders.set('APPID',actualStartConfig.appId);
    // Nei parametri imposto il gruppo Sportivo
    let myParams = new HttpParams().set('IDAREAOPERATIVA', idArea);

    let myUrl = actualStartConfig.urlBase + '/' + doObject;

    this.apiService
        .httpGet(myUrl, myHeaders, myParams)
        .pipe(map(fullData => {
          return fullData.LOCATION
        }))
        .subscribe(resultData => {

          console.log('Locations');
          console.log(resultData);

          // Ciclo sull'Array
          for (let index = 0; index < resultData.length; index++) {
            const element = resultData[index];


            // Creo un Oggetto Location e lo aggiungo
            let newLocation = new Location();
            newLocation.setJSONProperty(element);
            newLocation.setOriginal();

            this.addLocation(newLocation);

          }

          //Posso far partire l'applicazione
          if (resultData.length !== 0) {

            // Memorizzo l'Area nell'oggetto
            this.startConfig
            .pipe(take(1))
            .subscribe( element => {

                // Applicazione Pronta
                element.ready = true;

                //Riemetto l'evento
                this._startConfig.next(element);
              
            });
          }
        });

    
  }
  //#endregion
}
