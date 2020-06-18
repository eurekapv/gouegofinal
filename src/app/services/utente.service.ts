import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Utente } from '../models/utente.model';
import { ApicallService } from './apicall.service';
import { StartConfiguration } from '../models/start-configuration.model';
import { LogApp } from '../models/log.model';



@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  private _utente = new BehaviorSubject<Utente>(new Utente);
  private _utenteLoggato = new BehaviorSubject<boolean>(false);
  private _idAreaFAV = new BehaviorSubject<string>(''); //Avvisa di cambiare l'Area Operativa
  

  get utente() {
    return this._utente.asObservable();
  }

  get utenteLoggato() {
    return this._utenteLoggato.asObservable();
  }

  /**
   * Area Favorita dall'utente
   */
  get idAreaFAV() {
    return this._idAreaFAV.asObservable();
  }

 
  constructor(private apiService: ApicallService) { }

  /**
   * Recupera le informazioni di un utente passato per ID
   * @param config Parametri di configurazione chiamata
   * @param idUtente IDUtente da recuperare
   */
  request(config: StartConfiguration, idUtente: string) {
    let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
    const doObject = 'UTENTE';

    //In Testata c'e' sempre l'AppId
    myHeaders = myHeaders.set('appid',config.appId);
    let myParams = new HttpParams().set('ID',idUtente);
    let myUrl = config.urlBase + '/' + doObject;

    this.apiService
      .httpGet(myUrl, myHeaders, myParams)
      .pipe(map(data => {
        return data.UTENTE
      }))
      .subscribe( resultData => {
        this.loginSuccessfull(resultData);
      });
  }


  /**
   * Effettua la richiesta al Server con i dati dell'Utente
   * @param config Parametri di configurazione
   * @param username Username Utente
   * @param password Password Utente
   */
  requestAuthorization(config: StartConfiguration, 
                        username: string, 
                        password: string) {
    const myHeaders = new HttpHeaders({'Content-type':'text/plain', 
                                       'X-HTTP-Method-Override':'VERIFICALOGINMOB', 
                                       'appid':config.appId,
                                       'child-level': '2'
                                      });

    const myParams = new HttpParams().set('Username', username).append('Password', password);
    const doObject = 'ACCOUNT';

    let myUrl = config.urlBase + '/' + doObject;

    //Disattivo il login utente
    this._utenteLoggato.next(false);

    // Effettuo la chiamata
    return this.apiService
              .httpGet(myUrl, myHeaders, myParams)
              .pipe(tap(element => {
                //Autorizzazione concessa
                //Dentro a MESSAGE è presente il documento dell'utente
                // Avviso il servizio si impostare l'account
                if (element.RESULT == -1) {
                  // User accettato
                  this.loginSuccessfull(element.MESSAGE, username);
                }
              }));
  }

  /**
   * Utente loggato
   * @param JSonUtente Dati Utente
   */
  private loginSuccessfull(JSonUtente: any, webLogin?:string) {
    let newUtente = new Utente();
    newUtente.setJSONProperty(JSonUtente);
    newUtente.WEBLOGIN = webLogin;

    //Emetto Utente
    this._utente.next(newUtente);

    //Emetto il Boolean TRUE di Log
    this._utenteLoggato.next(true);

    //Utente ha una area preferita
    if (newUtente.IDAREAOPERATIVA) {
      //Dovrei posizionarlo
      this._idAreaFAV.next(newUtente.IDAREAOPERATIVA);
    }
  }

  /**
   * Esecuzione Logoff dell'utente
   */
  logoff() {
    this._utenteLoggato.next(false);
  }


  /**
   * Richiede al server l'aggiornamento dei dati Utente
   * @param config Dati di configurazione
   * @param docUtenteUpdate Documento Utente con dati modificati
   */
  requestUpdateUtente(config: StartConfiguration, docUtenteUpdate: Utente) {
    let actualUtente = this._utente.getValue();
    let docSendingUtente = new Utente(true); //Creo solo l'istanza del documento
    let hasModifiche = false;
    let myHeaders = new HttpHeaders({'Content-type':'application/json'});
    let body = '';
    const doObject = 'UTENTE';


    //In Testata c'e' sempre l'AppId
    myHeaders = myHeaders.set('appid',config.appId);
    let myUrl = config.urlBase + '/' + doObject;

    //Devo impostare nel sendingUtente solo gli elementi modificati
    hasModifiche = docSendingUtente.setWithChanges(actualUtente, docUtenteUpdate);

    LogApp.consoleLog('Documento Attuale');
    LogApp.consoleLog(actualUtente);

    LogApp.consoleLog('Documento Modifica');
    LogApp.consoleLog(docUtenteUpdate);

    
    if (hasModifiche) {
      
      //Body da inviare
      body = docSendingUtente.toJSON();

      LogApp.consoleLog('Invio Modifiche ');
      LogApp.consoleLog(body);

      //DEVO INVIARE LE MODIFICHE AL SERVER
      //OTTENGO LA RISPOSTA COMPLETA
      return this.apiService
          .httpPut(myUrl,myHeaders, body)
          .pipe(tap(element => {

            //Sul server Dati Aggiornati, modifico in locale
            if (element.status == 204 || element.status == 200) {
              //Server Aggiornamento completato
              //Aggiorno l'utente
              actualUtente.setWithChanges(actualUtente, docUtenteUpdate);
              //Riemetto l'utente
              this._utente.next(actualUtente);

            }

          }));
          
    }
    else {
      //Creo un response con status = 200  
      let myHttp = new BehaviorSubject<HttpResponse<Object>>(new HttpResponse({status: 200}));
      
      return myHttp.asObservable();

    }
  }

  requestChangePassword(config: StartConfiguration, oldPsw:string, newPsw:string) {
    let actualUtente = this._utente.getValue();
    const myHeaders = new HttpHeaders({'Content-type':'application/json', 
                                       'X-HTTP-Method-Override':'CHANGEPWDMOB', 
                                       'appid':config.appId
                                      });

    const myParams = new HttpParams().set('GUIDUTENTE', actualUtente.ID).append('PWDATTUALE', oldPsw).append('PWDNUOVA',newPsw);
    const doObject = 'ACCOUNT';

    let myUrl = config.urlBase + '/' + doObject;

    
    // Ritorno la chiamata
    return this.apiService
        .httpGet(myUrl, myHeaders, myParams)       

  }
  

}
