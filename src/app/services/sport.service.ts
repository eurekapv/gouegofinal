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

  get listSport() {
    return this._listSport.asObservable();
  }

  constructor(private apiService: ApicallService) { }

  /**
   * Richiede al server l'elenco delle Attività
   * @param config Parametri configurazione chiamata
   */
  request(config: StartConfiguration) {
    let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
    const doObject = 'SPORT';

    //In Testata c'e' sempre l'AppId
    myHeaders = myHeaders.set('APPID',config.appId);
    //Nei Parametri imposto il LivelloAutorizzazione
    let myParams = new HttpParams().set('LivelloAutorizzazione','0');
    let myUrl = config.urlBase + '/' + doObject;

    this.apiService
      .httpGet(myUrl, myHeaders, myParams)
      .pipe(map(data => {
        return data.SPORT
      }))
      .subscribe(resultData => {


        resultData.forEach(element => {

          let newSport = new Sport();
          newSport.setJSONProperty(element);
          this.addSport(newSport);
          
        });

        console.log(resultData);


      });

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
