import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Sport } from '../models/sport.model';
import { StartConfiguration } from '../models/start-configuration.model';
import { ApicallService } from './apicall.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SportService {

  private _listSport = new BehaviorSubject<Sport[]>([]);
  private _loaded: boolean; //Sport sono stati richiesti al server e sono caricati in memoria

  get listSport() {
    return this._listSport.asObservable();
  }


  /**
   * Ritorna la lista non in modalità Observable
   */
  get actualListSport() {
    return this._listSport.getValue();
  }

  constructor(private apiService: ApicallService) { 
    this._loaded = false;
  }

  /**
   * Richiede al server l'elenco delle Attività
   * @param config Parametri configurazione chiamata
   */
  request(config: StartConfiguration, withLivelli?:boolean) {
    let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
    const doObject = 'SPORT';

    //In Testata c'e' sempre l'AppId
    myHeaders = myHeaders.set('APPID',config.appId);
    //Nei Parametri imposto il LivelloAutorizzazione
    let myParams = new HttpParams().set('LivelloAutorizzazione','0');
    let myUrl = config.urlBase + '/' + doObject;

    if (withLivelli) {
      //Richiedo di caricare anche i livelli
      myHeaders = myHeaders.append('only-level','-1');
    }

    /*Non ho ancora caricato dal server*/
    if (!this._loaded) {
      this.apiService
        .httpGet(myUrl, myHeaders, myParams)
        .pipe(map(data => {
          return data.SPORT
        }))
        .subscribe(resultData => {
  
          //Arrivati dal server
          this._loaded = true;
  
          resultData.forEach(element => {
  
            let newSport = new Sport();
            newSport.setJSONProperty(element);
            this.addSport(newSport);
            
          });
        });
    }
    else {
      //Già caricati dal server
      
    }

  }


  //Aggiunge una attivita
  addSport(objSport: Sport) {

    this.listSport
      .pipe(take(1))
      .subscribe( collSport => {
        this._listSport.next( collSport.concat(objSport))
      });
    
      
  }


  


}
