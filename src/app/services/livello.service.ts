import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take, tap} from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { Livello } from '../models/livello.model';
import { ApicallService } from './apicall.service';
import { StartConfiguration } from '../models/start-configuration.model';

@Injectable({
  providedIn: 'root'
})
export class LivelloService {

  private _listLivelli = new BehaviorSubject<Livello[]>([]);
  private _loaded: boolean; //Sport sono stati richiesti al server e sono caricati in memoria

  constructor(private apiService: ApicallService) { 
    this._loaded = false;
  }

  get listLivelli() {
    return this._listLivelli.asObservable();
  }
  
    /**
   * Ritorna la lista non in modalità Observable
   */
  get actualListLivelli() {
    return this._listLivelli.getValue();
  }  



  /**
   * Richiede al server l'elenco dei Livelli
   * @param config Parametri configurazione chiamata
   */
  request(config: StartConfiguration) {
    return new Promise<Livello[]>((resolve, reject)=>{
      let myHeaders = config.getHttpHeaders();
      
      const doObject = 'LIVELLO';
  
      
      //Nei Parametri imposto il LivelloAutorizzazione
      let myParams = new HttpParams().set('LivelloAutorizzazione','0');
      let myUrl = config.urlBase + '/' + doObject;
  
      this.apiService
        .httpGet(myUrl, myHeaders, myParams)
        .pipe(map(data => {
          return data.LIVELLO
        }))
        .subscribe(resultData => {
  
          if (resultData) {

            //Arrivati dal server
            this._loaded = true;
    
            for (let index = 0; index < resultData.length; index++) {
              const element = resultData[index];
              let newLivello = new Livello();
              newLivello.setJSONProperty(element);
              this.addLivello(newLivello);
            }

            resolve(this.actualListLivelli);

          }
          else {
            reject('No data Livello retrieved');
          }
  
        }, error=>{
          reject(error);
        });
    })

  }

  

  //Aggiunge un livello
  addLivello(objLivello: Livello) {

    this.listLivelli
      .pipe(take(1))
      .subscribe( collLivelli => {
        this._listLivelli.next( collLivelli.concat(objLivello))
      });
    
      
  }
}
