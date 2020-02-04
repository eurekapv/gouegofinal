import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { tap, delay } from 'rxjs/operators';

import { StartService } from './start.service';
import { ApicallService } from './apicall.service';

import { Utente } from '../models/utente.model';
import { StartConfiguration } from '../models/start-configuration.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _account = new BehaviorSubject<Utente>(new Utente());
  private startConfig: StartConfiguration;

  get account() {
    return this._account.asObservable();
  }

  constructor(private startSrv: StartService, private apiService: ApicallService) {
    this.startSrv.startConfig.subscribe(element => {
      this.startConfig = element;
    });

   }


  requestAuthorization( username: string, 
                        password: string, 
                      ) {

    const myHeaders = new HttpHeaders({'Content-type':'text/plain', 'X-HTTP-Method-Override':'VERIFICALOGINMOB', 'APPID':this.startConfig.appId});
    const myParams = new HttpParams().set('Username', username).append('Password', password);
    const doObject = 'ACCOUNT';

    let myUrl = this.startConfig.urlBase + '/' + doObject;
    

    return this.apiService
          .httpGet(myUrl, myHeaders, myParams)
          .pipe(tap(element => {
            if (element.RESULT == -1) {
              //Autorizzazione concessa
              //Dentro a MESSAGE è presente il documento dell'utente
              // Avviso il servizio si impostare l'account
              this.startSrv.setAccount(element.MESSAGE);
            }
          }));
  }

}
