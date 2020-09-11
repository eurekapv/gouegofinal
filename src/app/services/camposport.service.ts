import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';


import { ApicallService } from './apicall.service';
import { StartConfiguration } from '../models/start-configuration.model';
import { CampoSport } from '../models/camposport.model';

@Injectable({
  providedIn: 'root'
})
export class CamposportService {

  private _listCampiSport = new BehaviorSubject<CampoSport[]>([]);

  get listCampiSport() {
    return this._listCampiSport.asObservable();
  }

  constructor(private apiService: ApicallService) { }

  /**
   * Richiede al server l'elenco degli Sport dei Campi
   * @param config Parametri configurazione chiamata
   */
  request(config: StartConfiguration, 
          idCampo: string) {
    return new Promise((resolve, reject)=>{
      let myHeaders = config.getHttpHeaders();
      //new HttpHeaders({'Content-type':'text/plain'});
      const doObject = 'CAMPOSPORT';
  
      //FIXME: ELIMINARE
      //In Testata c'e' sempre l'AppId
      //myHeaders = myHeaders.set('appid',config.appId);
      
      //Nei Parametri imposto IDCampo
      let myParams = new HttpParams().set('IDCAMPO',idCampo);
      let myUrl = config.urlBase + '/' + doObject;
  
      //Elimino i campi presenti
      this.emptyCampiSport
  
      this.apiService
        .httpGet(myUrl, myHeaders, myParams)
        .pipe(map(data => {
          return data.CATEGORIEETA
        }))
        .subscribe(
           resultData => {
  
            resultData.forEach(element => {
              let newCampoSport = new CampoSport();
              newCampoSport.setJSONProperty(element);
              this.addCampoSport(newCampoSport);
              resolve();
            });
           },
           error=>{
             reject(error);
           }
        )
    })
  }

  /**
   * Aggiunge un oggetto Campo Sport all'Observable
   * @param objCampoSport Oggetto Campo Sport da aggiungere
   */
  addCampoSport(objCampoSport: CampoSport) {
    this.listCampiSport
      .pipe(take(1))
      .subscribe( collCampiSport => {
        this._listCampiSport.next( collCampiSport.concat(objCampoSport));
      })
  }

    /**
   * Svuota i campi sport presenti
   */
  emptyCampiSport() {
    this._listCampiSport.next([]);
  }
}
