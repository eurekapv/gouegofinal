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
    return new Promise((resolve, reject)=>{
      let myHeaders = config.getHttpHeaders();
      //new HttpHeaders({'Content-type':'text/plain'});
      const doObject = 'LIVELLO';
  
      //FIXME: ELIMINARE
      //In Testata c'e' sempre l'AppId
      //myHeaders = myHeaders.set('appid',config.appId);

      
      //Nei Parametri imposto il LivelloAutorizzazione
      let myParams = new HttpParams().set('LivelloAutorizzazione','0');
      let myUrl = config.urlBase + '/' + doObject;
  
      this.apiService
        .httpGet(myUrl, myHeaders, myParams)
        .pipe(map(data => {
          return data.LIVELLO
        }))
        .subscribe(resultData => {
  
          //Arrivati dal server
          this._loaded = true;
  
          resultData.forEach(element => {
  
            let newLivello = new Livello();
            newLivello.setJSONProperty(element);
            this.addLivello(newLivello);
            
          });
          resolve();
  
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
