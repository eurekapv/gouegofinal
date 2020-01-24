import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StartConfiguration } from '../models/start-configuration.model';
import { take, map } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { ApicallService } from './apicall.service';



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

  get startConfig() {
    return this._startConfig.asObservable();
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

            console.log('Autorizzazione Pre Oggetto');
            console.log(element);

            //Imposta l'autorizzazione dal gruppo
            element.setGruppoAuthorization(resultData);

            console.log('Autorizzazione Post Oggetto');
            console.log(element);

            this._startConfig.next(element);            

          });
      });
      

      
  }
}
