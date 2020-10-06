import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Utente } from '../models/utente.model';
import { ApicallService } from './apicall.service';
import { StartConfiguration } from '../models/start-configuration.model';
import { LogApp } from '../models/log.model';
import { AccountRequestCode, AccountOperationResponse, AccountVerifyCode } from '../models/accountregistration.model';
import { PostResponse } from '../library/models/postResult.model';
import { ParamsExport } from '../library/models/iddocument.model';
import { DocstructureService } from '../library/services/docstructure.service';
import { Account } from '../models/account.model';






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

  get actualLoggato(){
    return this._utenteLoggato.getValue();
  }

  get actualUtente() {
    return this._utente.getValue();
  }

  /**
   * Area Favorita dall'utente
   */
  get idAreaFAV() {
    return this._idAreaFAV.asObservable();
  }


  constructor(private apiService: ApicallService,
              private docService: DocstructureService) { }

  /**
   * Recupera le informazioni di un utente passato per ID
   * @param config Parametri di configurazione chiamata
   * @param idUtente IDUtente da recuperare
   */
  // request(config: StartConfiguration, idUtente: string) {
  //   return new Promise((resolve, reject)=>{
  //     let myHeaders = config.getHttpHeaders();

  //     const doObject = 'UTENTE';

  //     let myParams = new HttpParams().set('ID',idUtente);
  //     let myUrl = config.urlBase + '/' + doObject;

  //     this.apiService
  //       .httpGet(myUrl, myHeaders, myParams)
  //       .pipe(map(data => {
  //         return data.UTENTE
  //       }))
  //       .subscribe( resultData => {
  //         this.loginSuccessfull(resultData);
  //         resolve();
  //       }, error=>{
  //         reject (error);
  //       });
  //   })
  // }


  /**
   * Effettua la richiesta al Server con i dati dell'Utente
   * @param config Parametri di configurazione
   * @param username Username Utente
   * @param password Password Utente
   */
  requestAuthorization(username: string,
                       password: string): Promise<any> {

    return new Promise<any>((resolve,reject) => {
            let myUtente = new Utente();
            let jsonBody = '';
            let paramExp = new ParamsExport();
            let myAccount = new Account();
            const method = 'authLoginMob';


            //Compilo un documento con login e password
            myUtente.WEBLOGIN = username;
            myUtente.INPUTPASSWORD = password;

            //Preparo esportazione
            paramExp.clearDOProperty = true;
            paramExp.clearPKProperty = true;
            paramExp.clearPrivateProperty = true;
            jsonBody = myUtente.exportToJSON(paramExp);
            jsonBody = `{"docUtente" : ${jsonBody}}`;


            //Disattivo il login utente
            this._utenteLoggato.next(false);

            this.docService.requestForFunction(myAccount,method,jsonBody)
                          .then((response:PostResponse) => {

                            //Risposta ricevuta
                            if (response.result) {

                              let docInResponse = JSON.parse(response.document);

                              let docUtente = new Utente();
                              docUtente.setJSONProperty(docInResponse);
                              docUtente.WEBLOGIN = username;
                              docUtente.setOriginal();

                              //Imposto come tag authCode il codice di autorizzazione utente ricevuto
                              docUtente.setTagValue('authCode',response.code);

                              //Emetto Utente
                              this._utente.next(docUtente);

                              //Emetto il Boolean TRUE di avvenuto accesso
                              this._utenteLoggato.next(true);

                              //Utente ha una area preferita
                              if (docUtente.IDAREAOPERATIVA) {
                                //Dovrei posizionarlo
                                this._idAreaFAV.next(docUtente.IDAREAOPERATIVA);
                              }

                              //Emetto la risposta del server
                              resolve(response);
                              
                            }
                            else {
                              reject(response.message);
                            }


                          })
                          .catch(error => {
                            reject(error);
                          });
      });

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

  requestUpdate(config: StartConfiguration, docUtenteUpdate: Utente):Promise<Utente>{

    return new Promise((resolve, reject)=>{

    const doObject = 'UTENTE';

    const metodo = 'updateUtente';
    let myHeaders = config.getHttpHeaders();
    myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);

    const myParams = new HttpParams();
    let body = '';


    let myUrl = config.urlBase + '/' + doObject;

    //Body da inviare

    //Questi sono i parametri per l'esportazione
    let paramExport = new ParamsExport();
    paramExport.clearDOProperty = true;
    paramExport.clearPKProperty = false;
    paramExport.clearPrivateProperty = true;
    paramExport.onlyModified = true;

    body = docUtenteUpdate.exportToJSON(paramExport);
    body = `{"docUtente": ${body}}`;
    LogApp.consoleLog('Request Update utente');
    LogApp.consoleLog(body);

    //faccio la richiesta
    this.apiService.httpPost(myUrl, myHeaders, myParams, body)
    .pipe(map(rawResponse => {

      return rawResponse.update;

    })).subscribe(response => {

      let myResponse = new PostResponse();
      myResponse.result = response['result'];
      myResponse.message = response['message'];
      myResponse.document = response['document'];

      if (myResponse.result){

        let docUtente = new Utente();
        let objDocument = myResponse.getDocument();

        if (objDocument) {
            //l'operazione è andata a buon fine, restituisco l'utente
            docUtente.setJSONProperty(objDocument);
            console.log(docUtente);
            this._utente.next(docUtente);
            resolve(docUtente);
        }
        else {
          reject('Errore ricezione dati server');
        }

      }
      else{
        //il server ha risposto, ma l'operazione non è andata a buon fine, restituisco il messaggio di errore
        reject (response.message);
      }
    }, error => {

      //il server non ha risposto
      reject(error);

    })
    })
  }



  requestChangePassword(config: StartConfiguration, oldPsw:string, newPsw:string) {
    let actualUtente = this._utente.getValue();
    let myHeaders = config.getHttpHeaders();
    myHeaders = myHeaders.append('X-HTTP-Method-Override','CHANGEPWDMOB');

    //  new HttpHeaders({'Content-type':'application/json',
    //                                    'X-HTTP-Method-Override':'CHANGEPWDMOB',
    //                                    'appid':config.appId
    //                                   });

    const myParams = new HttpParams().set('GUIDUTENTE', actualUtente.ID).append('PWDATTUALE', oldPsw).append('PWDNUOVA',newPsw);
    const doObject = 'ACCOUNT';

    let myUrl = config.urlBase + '/' + doObject;


    // Ritorno la chiamata
    return this.apiService
        .httpGet(myUrl, myHeaders, myParams)

  }






  //#region FASI REGISTRAZIONE


  /**
   * Invia al server la richiesta per inviare via Mail/SMS i codici per la registrazione account
   * @param config Dati di configurazione
   * @param docRequestCode Documento con le informazioni da inviare al server per effettuare la richiesta
   */
  registrationSendCodici(config: StartConfiguration,
                         docRequestCode: AccountRequestCode):Promise<AccountOperationResponse> {
          //Viene effettuata una chiamata al server per ottenere
          //l'invio di una mail e/o un SMS contenente codici PIN
          const metodo = 'registrationSendCodici';
          let myHeaders = config.getHttpHeaders();
          myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);

          const myParams = new HttpParams();
          const doObject = 'ACCOUNT';
          let bodyRequest = '';

          let myUrl = config.urlBase + '/' + doObject;

          return new Promise<AccountOperationResponse>((resolve, reject)=> {
            if (docRequestCode) {

              //Creo il body da inviare

              //Questi sono i parametri per l'esportazione
              let paramExport = new ParamsExport();
              paramExport.clearDOProperty = true;
              paramExport.clearPKProperty = true;
              paramExport.clearPrivateProperty = true;

              bodyRequest = docRequestCode.exportToJSON(paramExport);

              bodyRequest = `{"docRequest" : ${bodyRequest}}`;
              console.log(bodyRequest);

              //Faccio la chiamata POST
              this.apiService
                  .httpPost(myUrl, myHeaders, myParams, bodyRequest )
                  .pipe(map(received => {
                          return received.activation;
                  }))
                  .subscribe((response:AccountOperationResponse) => {
                      if (response.result) {
                        resolve(response);
                      }
                      else {
                        reject(response.message);
                      }
                  }, error => {
                  reject(error);
                  })
            }
            else {
              reject('Dati mancanti per la richiesta');
            }

          });



  }

  /**
   * Invia al server una richiesta per verificare i pincode inseriti dall'utente
   * @param config Dati di configurazione
   * @param docVerifyCode Dati da verificare
   */
  registrationVerifyCodici(config: StartConfiguration,
    docVerifyCode: AccountVerifyCode):Promise<AccountOperationResponse> {
        const metodo = 'registrationVerifyCodici';
        let myHeaders = config.getHttpHeaders();
        myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);

        const myParams = new HttpParams();
        const doObject = 'ACCOUNT';
        let bodyRequest = '';

        let myUrl = config.urlBase + '/' + doObject;

        return new Promise<AccountOperationResponse>((resolve, reject)=> {
            if (docVerifyCode) {

                //Creo il body da inviare

                //Questi sono i parametri per l'esportazione
                let paramExport = new ParamsExport();
                paramExport.clearDOProperty = true;
                paramExport.clearPKProperty = true;
                paramExport.clearPrivateProperty = true;


                bodyRequest = docVerifyCode.exportToJSON(paramExport);

                bodyRequest = `{"docRequest" : ${bodyRequest}}`;

                //Faccio la chiamata POST
                this.apiService
                .httpPost(myUrl, myHeaders, myParams, bodyRequest )
                .pipe(map(received => {
                    return received.activation;
                }))
                .subscribe((response:AccountOperationResponse) => {
                if (response.result) {
                  resolve(response);
                }
                else {
                  reject(response.message);
                }
                }, error => {
                  reject(error);
                })
            }
            else {
              reject('Dati mancanti per la richiesta');
            }

        });



}

/**
 * Invia al server i dati per completare la registrazione di un account
 * @param config Dati configurazione
 * @param docUtente Utente da registrare
 * @param docRequestCode Documento di Richiesta codici iniziale
 */
registrationFinalize(config: StartConfiguration,
  docUtente: Utente,
  docRequestCode: AccountRequestCode):Promise<AccountOperationResponse> {

    //Viene inviato al server il documento per chiedere la registrazione utente
    const metodo = 'registrationFinalize';

    let myHeaders = config.getHttpHeaders();
    myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);

    const myParams = new HttpParams();
    const doObject = 'ACCOUNT';
    let bodyRequest = '';
    let bodyUtente = '';
    let bodyFinal = '';

    let myUrl = config.urlBase + '/' + doObject;

return new Promise<AccountOperationResponse>((resolve, reject)=> {
  if (docRequestCode && docUtente) {

    //Creo il body da inviare

    //Questi sono i parametri per l'esportazione
    let paramExport = new ParamsExport();
    paramExport.clearDOProperty = true;
    paramExport.clearPKProperty = true;
    paramExport.clearPrivateProperty = true;


    bodyRequest = docRequestCode.exportToJSON(paramExport);
    bodyUtente = docUtente.exportToJSON(paramExport);

    bodyFinal = `{"docRequest" : ${bodyRequest}, "docUtente": ${bodyUtente}}`;

    console.log('Richiesta di Registrazione: ' + bodyFinal);

    //Faccio la chiamata POST
    this.apiService
      .httpPost(myUrl, myHeaders, myParams, bodyFinal )
      .pipe(map(received => {
        return received.activation;
      }))
      .subscribe((response:AccountOperationResponse) => {

        console.log(response);

        if (response.result) {
            resolve(response);
        }
        else {
            reject(response.message);
        }
        }, error => {
            reject(error);
        });
    }
    else {
      reject('Dati mancanti per la richiesta');
    }

});



}


  //#endregion


  //#region  FASI RECUPERO PSW

  /**
   * Invia al server la richiesta per inviare via Mail/SMS i codici per la registrazione account
   * @param config Dati di configurazione
   * @param docRequestCode Documento con le informazioni da inviare al server per effettuare la richiesta
   */
  recoverySendCodici(config: StartConfiguration,
  docRequestCode: AccountRequestCode):Promise<AccountOperationResponse> {
  //Viene effettuata una chiamata al server per ottenere
  //l'invio di una mail e/o un SMS contenente codici PIN
  const metodo = 'recoverySendCodici';

  let myHeaders = config.getHttpHeaders();
  myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
  const myParams = new HttpParams();
  const doObject = 'ACCOUNT';
  let bodyRequest = '';

  let myUrl = config.urlBase + '/' + doObject;

  return new Promise<AccountOperationResponse>((resolve, reject)=> {
  if (docRequestCode) {

  //Creo il body da inviare

  //Questi sono i parametri per l'esportazione
  let paramExport = new ParamsExport();
  paramExport.clearDOProperty = true;
  paramExport.clearPKProperty = true;
  paramExport.clearPrivateProperty = true;


  bodyRequest = docRequestCode.exportToJSON(paramExport);

  bodyRequest = `{"docRequest" : ${bodyRequest}}`;
  console.log(bodyRequest);

  //Faccio la chiamata POST
  this.apiService
  .httpPost(myUrl, myHeaders, myParams, bodyRequest )
  .pipe(map(received => {
      return received.recovery;
  }))
  .subscribe((response:AccountOperationResponse) => {
    resolve(response);
  }, error => {
  reject(error);
  })
  }
  else {
  reject('Dati mancanti per la richiesta');
  }

  });



}

 /**
   * Invia al server una richiesta per verificare i pincode inseriti dall'utente
   * @param config Dati di configurazione
   * @param docVerifyCode Dati da verificare
   */
  recoveryVerifyCodici(config: StartConfiguration,
    docVerifyCode: AccountVerifyCode):Promise<AccountOperationResponse> {
        const metodo = 'recoveryVerifyCodici';

        let myHeaders = config.getHttpHeaders();
        myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
        const myParams = new HttpParams();
        const doObject = 'ACCOUNT';
        let bodyRequest = '';

        let myUrl = config.urlBase + '/' + doObject;

        return new Promise<AccountOperationResponse>((resolve, reject)=> {
            if (docVerifyCode) {

                //Creo il body da inviare

                //Questi sono i parametri per l'esportazione
                let paramExport = new ParamsExport();
                paramExport.clearDOProperty = true;
                paramExport.clearPKProperty = true;
                paramExport.clearPrivateProperty = true;

                bodyRequest = docVerifyCode.exportToJSON(paramExport);
                bodyRequest = `{"docRequest" : ${bodyRequest}}`;

                //Faccio la chiamata POST
                this.apiService
                .httpPost(myUrl, myHeaders, myParams, bodyRequest )
                .pipe(map(received => {
                    return received.recovery;
                }))
                .subscribe((response:AccountOperationResponse) => {
                  resolve(response);
                }, error => {
                  reject(error);
                })
            }
            else {
              reject('Dati mancanti per la richiesta');
            }

        });
}

/**
 * Invia al server i dati per completare la registrazione di un account
 * @param config Dati configurazione
 * @param docUtente Utente da registrare
 * @param docRequestCode Documento di Richiesta codici iniziale
 */
recoveryFinalize(config: StartConfiguration,
  docUtente: Utente,
  docRequestCode: AccountRequestCode):Promise<AccountOperationResponse> {

    //Viene inviato al server il documento per chiedere la registrazione utente
    const metodo = 'recoveryFinalize';


    let myHeaders = config.getHttpHeaders();
    myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
    const myParams = new HttpParams();
    const doObject = 'ACCOUNT';
    let bodyRequest = '';
    let bodyUtente = '';
    let bodyFinal = '';

    let myUrl = config.urlBase + '/' + doObject;

return new Promise<AccountOperationResponse>((resolve, reject)=> {
  if (docRequestCode && docUtente) {

    //Creo il body da inviare
    //Questi sono i parametri per l'esportazione
    let paramReqExport = new ParamsExport();
    paramReqExport.clearDOProperty = true;
    paramReqExport.clearPKProperty = true;
    paramReqExport.clearPrivateProperty = true;

    bodyRequest = docRequestCode.exportToJSON(paramReqExport);

    //Questi sono i parametri per l'esportazione
    let paramUteExport = new ParamsExport();
    paramUteExport.clearDOProperty = true;
    paramUteExport.clearPKProperty = false;
    paramUteExport.clearPrivateProperty = true;

    bodyUtente = docUtente.exportToJSON(paramUteExport);

    bodyFinal = `{"docRequest" : ${bodyRequest}, "docUtente": ${bodyUtente}}`;

    console.log('Richiesta di Registrazione: ' + bodyFinal);

    //Faccio la chiamata POST
    this.apiService
      .httpPost(myUrl, myHeaders, myParams, bodyFinal)
      .pipe(map(received => {
        return received.recovery;
      }))
      .subscribe((response:AccountOperationResponse) => {
        console.log(response);
        resolve(response);
        }, error => {
            reject(error);
        });
    }
    else {
      reject('Dati mancanti per la richiesta');
    }

});



}



  //#endregion

  //#region VERIFICA CONTATTI

  /**
   * Invia al server la richiesta per inviare via Mail/SMS i codici per la procedura di verifica dei contatti
   * @param config Dati di configurazione
   * @param docRequestCode Documento con le informazioni da inviare al server per effettuare la richiesta
   */
  validationSendCodici(config: StartConfiguration,
    docUtente:Utente,
    docRequestCode: AccountRequestCode):Promise<AccountOperationResponse> {
    //Viene effettuata una chiamata al server per ottenere
    //l'invio di una mail e/o un SMS contenente codici PIN
    const metodo = 'validationSendCodici';
    // const myHeaders = new HttpHeaders({'Content-type':'application/json',
    //                         'X-HTTP-Method-Override': metodo,
    //                         'appid':config.appId
    //                       });
    let myHeaders = config.getHttpHeaders();
    myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
    const myParams = new HttpParams();
    const doObject = 'ACCOUNT';
    let bodyRequest = '';
    let bodyUtente = '';
    let bodyFinal = '';

    let myUrl = config.urlBase + '/' + doObject;

    return new Promise<AccountOperationResponse>((resolve, reject)=> {
    if (docRequestCode) {

    //Questi sono i parametri per l'esportazione
    let paramReqExport = new ParamsExport();
    paramReqExport.clearDOProperty = true;
    paramReqExport.clearPKProperty = true;
    paramReqExport.clearPrivateProperty = true;

    //Creo il body da inviare
    bodyRequest = docRequestCode.exportToJSON(paramReqExport);

    //Questi sono i parametri per l'esportazione
    let paramUteExport = new ParamsExport();
    paramUteExport.clearDOProperty = true;
    paramUteExport.clearPKProperty = false;
    paramUteExport.clearPrivateProperty = true;

    bodyUtente = docUtente.exportToJSON(paramUteExport);

    bodyFinal = `{"docRequest" : ${bodyRequest}, "docUtente": ${bodyUtente}}`;

    //Faccio la chiamata POST
    this.apiService
    .httpPost(myUrl, myHeaders, myParams, bodyFinal )
    .pipe(map(received => {
        return received.validation;
    }))
    .subscribe((response:AccountOperationResponse) => {
      resolve(response);
    }, error => {
    reject(error);
    })
    }
    else {
    reject('Dati mancanti per la richiesta');
    }

    });

  }



   /**
   * Invia al server una richiesta per verificare i pincode inseriti dall'utente
   * @param config Dati di configurazione
   * @param docVerifyCode Dati da verificare
   */
  validationVerifyCodici(config: StartConfiguration,
    docVerifyCode: AccountVerifyCode):Promise<AccountOperationResponse> {
        const metodo = 'validationVerifyCodici';

        let myHeaders = config.getHttpHeaders();
        myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
        const myParams = new HttpParams();
        const doObject = 'ACCOUNT';
        let bodyRequest = '';

        let myUrl = config.urlBase + '/' + doObject;

        return new Promise<AccountOperationResponse>((resolve, reject)=> {
            if (docVerifyCode) {

                //Creo il body da inviare

                //Questi sono i parametri per l'esportazione
                let paramReqExport = new ParamsExport();
                paramReqExport.clearDOProperty = true;
                paramReqExport.clearPKProperty = true;
                paramReqExport.clearPrivateProperty = true;

                bodyRequest = docVerifyCode.exportToJSON(paramReqExport);
                bodyRequest = `{"docRequest" : ${bodyRequest}}`;

                //Faccio la chiamata POST
                this.apiService
                .httpPost(myUrl, myHeaders, myParams, bodyRequest )
                .pipe(map(received => {
                    return received.validation;
                }))
                .subscribe((response:AccountOperationResponse) => {
                  resolve(response);
                }, error => {
                  reject(error);
                })
            }
            else {
              reject('Dati mancanti per la richiesta');
            }

        });
}

  //#endregion
}
