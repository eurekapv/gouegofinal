import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApicallService } from '../zsupport/apicall.service';
import { StartConfiguration } from '../../models/start-configuration.model';
import { LogApp } from '../../models/zsupport/log.model';
import { AccountRequestCode, AccountOperationResponse, AccountVerifyCode } from '../../models/utente/accountregistration.model';
import { PostResponse } from '../../library/models/post-response.model';
import { ParamsExport } from '../../library/models/iddocument.model';
import { DocstructureService } from '../../library/services/docstructure.service';
import { Account } from '../../models/utente/account.model';
import { TipoVerificaAccount } from '../../models/zsupport/valuelist.model';
import { Gruppo } from '../../models/struttura/gruppo.model';
import { ParamsVerificaAccount } from '../../models/utente/params-verifica-account.model';
import { Utente } from '../../models/utente/utente.model';
import { PostParams, RequestParams } from '../../library/models/requestParams.model';
import { UtenteTotaleMinuti } from 'src/app/models/utente/utente-totale-minuti.model';
import { UtenteMinuti } from 'src/app/models/utente/utente-minuti.model';


@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  private _activeUtenteDoc$ = new BehaviorSubject<Utente>(new Utente());
  private _flagUtenteIsLoggato$ = new BehaviorSubject<boolean>(false);
  private _idAreaFAV = new BehaviorSubject<string>(''); //Avvisa di cambiare l'Area Operativa
  private _utenteImmagine$ = new BehaviorSubject<string>('');

  get activeUtenteDoc$() {
    return this._activeUtenteDoc$.asObservable();
  }

  get activeUtenteDoc() {
    return this._activeUtenteDoc$.getValue();
  }

  get flagUtenteIsLoggato$() {
    return this._flagUtenteIsLoggato$.asObservable();
  }

  get flagUtenteIsLoggato(){
    return this._flagUtenteIsLoggato$.getValue();
  }


  get utenteImmagine$():Observable<string> {
    return this._utenteImmagine$.asObservable();
  }

  /**
   * Area Favorita dall'utente
   */
  get idAreaFAV() {
    return this._idAreaFAV.asObservable();
  }  

  constructor(private apiService: ApicallService,
              private docStructureService: DocstructureService) { }


  //#region RICHIESTE GENERICHE

  /**
   * Carica il documento Utente partendo dal ID
   * @param idUtente 
   */
   request(idUtente: string, numChild: number = 1, decodeAll: boolean=false): Promise<Utente> {

    return new Promise<Utente>((resolve, reject) => {

      if (idUtente && idUtente.length != 0)   {
        let filterDoc: Utente;
        let reqParams: RequestParams;

        filterDoc = new Utente(true);
        filterDoc.ID = idUtente;

        reqParams = new RequestParams();
        reqParams.child_level = numChild;
        reqParams.decode.active = decodeAll;
        
        this.docStructureService.requestNew(filterDoc, reqParams)
                                .then(listItems => {
                                  if (listItems && listItems.length == 1) {
                                    resolve(listItems[0]);
                                  }
                                  else {
                                    reject('Document not found');
                                  }
                                })
                                .catch(error => {
                                  reject(error);
                                })
      }
      else {
        reject('IdUtente unknown');
      }
    })
   }

   /**
    * Richiede il documento con il totale dei minuti di un utente
    * @param idUtente 
    * @returns 
    */
   requestUtenteTotaleMinuti(idUtente: string, idArea:string): Promise<UtenteTotaleMinuti> {

    return new Promise<UtenteTotaleMinuti>((resolve, reject) => {

      let filterDoc: UtenteTotaleMinuti;

      if (idUtente && idUtente.length != 0 &&
          idArea && idArea.length != 0)   {

        filterDoc = new UtenteTotaleMinuti();
        filterDoc.IDUTENTE = idUtente;
        filterDoc.IDAREAOPERATIVA = idArea;

        
        this.docStructureService.requestNew(filterDoc)
                                .then(listItems => {
                                  if (listItems && listItems.length == 1) {
                                    resolve(listItems[0]);
                                  }
                                  else {
                                    reject('Document not found');
                                  }
                                })
                                .catch(error => {
                                  reject(error);
                                })                                
      }
      else {
        reject('Utente/Area non definita');
      }
    })
   }


   /**
    * Richiesta della Lista della situazione Minuti Utente
    * @param idUtente 
    * @param idArea 
    * @returns 
    */
   requestListUtenteMinuti(idUtente: string, idArea:string): Promise<UtenteMinuti[]> {

    return new Promise<UtenteMinuti[]>((resolve, reject) => {

      let filterDoc: UtenteMinuti;

      if (idUtente && idUtente.length != 0 &&
          idArea && idArea.length != 0)   {

        filterDoc = new UtenteMinuti();
        filterDoc.IDUTENTE = idUtente;
        filterDoc.IDAREAOPERATIVA = idArea;

        
        this.docStructureService.requestNew(filterDoc)
                                .then(listItems => {
                                  resolve(listItems);
                                })
                                .catch(error => {
                                  reject(error);
                                })                                
      }
      else {
        reject('Utente/Area non definita');
      }
    })
   }   


   /**
    * Partendo da una lista popolata di soli idUtente richiede al server il ritorno della lista con i minuti residui
    * degli utenti
    * @param listUtentiTotaliMinuti 
    * @param guidArea 
    * @returns 
    */
   requestListUtentiTotaliMinuti(listUtentiTotaliMinuti: UtenteTotaleMinuti[]): Promise<UtenteTotaleMinuti[]> {
      return new Promise<UtenteTotaleMinuti[]>((resolve, reject) => {
        let method = 'onRequestCollection';
        let docToCall: UtenteTotaleMinuti;
        let listPostParams: PostParams[] = [];

        docToCall = new UtenteTotaleMinuti();
        PostParams.addParamsTo(listPostParams, 'collRequest', listUtentiTotaliMinuti);
        
        this.docStructureService.requestForFunction(docToCall, method, '', listPostParams)
                                .then(objRecevied => {
                                  //Ricevo un oggetto composto da
                                  //{do_loaded: 0, UTENTETOTALEMINUTI: [{...}]}
                                  //Recupero il nome della classe
                                  let className = docToCall.getDescriptor().classWebApiName;
                                  let listDecoded: UtenteTotaleMinuti[] = [];

                                  if (objRecevied && objRecevied.hasOwnProperty(className)) {
                                    let listItems = objRecevied[className];

                                    if (listItems && Array.isArray(listItems)) {
                                      //Tipizzola collection
                                      listDecoded = this.docStructureService.castCollection<UtenteTotaleMinuti>(listItems, new UtenteTotaleMinuti());
                                    }



                                  }
                                  
                                  
                                  resolve(listDecoded);
                                })
                                .catch(error => {
                                  reject(error);
                                })
      })
   }

   /**
    * Richiesto il caricamento della collection per nome
    * @param masterDoc 
    * @param nameCollection 
    */
   requestLoadCollection(masterDoc: Utente, nameCollection: string): Promise<Utente> {
     return new Promise<Utente>((resolve, reject) => {
        let reqParams: RequestParams;

        if (masterDoc) {
          if (nameCollection && nameCollection.length != 0) {
              reqParams = new RequestParams();
              reqParams.decode.active = true;

              //Chiedo il caricamento della collection
              this.docStructureService.loadCollection(masterDoc, nameCollection, reqParams)
                                      .then(docLoaded => {
                                        resolve(<Utente>docLoaded);
                                      })
                                      .catch(error => {
                                        reject(error);
                                      })
          }
          else {
            reject('Collection undefined');
          }
        }
        else {
          reject('Document undefined');
        }
     })
   }
    
   /** 
    * Se presente un ActiveUtenteDoc richiede un refresh dal Server
    * e riemette Observable
    */
   refreshActiveUtenteDoc(): void {
      let filterDoc = this._activeUtenteDoc$.getValue();

      if (filterDoc && filterDoc.ID) {
        //Richiedo al server il documento
        this.request(filterDoc.ID, 2)
            .then(dataReceived => {
              //Riemetto il documento
              this._activeUtenteDoc$.next(dataReceived);
            })
            .catch(error => {
              LogApp.consoleLog(error, "error");
            })
      }
   }

   /**
   * Imposta la UserPicture
   * @param value DataUrl image
   */
  setUtenteImmagine(dataUrl: string) {
    this._utenteImmagine$.next(dataUrl);
  }


  /**
   * Effettua la richiesta al Server con i dati dell'Utente
   * @param config Parametri di configurazione
   * @param username Username Utente
   * @param password Password Utente
   * @param forceIdArea Se impostata, l'area favorita dell'utente diventa questa
   */
  login(username: string,
        password: string,
        myStartConfig: BehaviorSubject<StartConfiguration>,
        forceIdArea?:string 
        ): Promise<any> {

    return new Promise<any>((resolve,reject) => {
            let myUtente = new Utente();
            let jsonBody = '';
            let paramExp = new ParamsExport();
            let myAccount = new Account();
            const method = 'authLoginMob';
            let startConf: StartConfiguration;

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
            this._flagUtenteIsLoggato$.next(false);

            this.docStructureService.requestForFunction(myAccount,method,jsonBody)
                          .then((response:PostResponse) => {
                            let myUserAuthCode = '';

                            //Risposta ricevuta
                            if (response.result) {

                              if (response.document) {

                                let docInResponse = response.document
                                
                                let docUtente = new Utente();
                                docUtente.setJSONProperty(docInResponse);
                                docUtente.WEBLOGIN = username;
                                docUtente.setOriginal();
                                
  
                                //Imposto come tag authCode il codice di autorizzazione utente ricevuto
                                docUtente.setTagValue('authCode',response.code);
                                myUserAuthCode = response.code;

                                startConf = myStartConfig.getValue();
                                startConf.authorizationUserCode = response.code;
                                myStartConfig.next(startConf);
  
                                //Emetto Utente
                                this._activeUtenteDoc$.next(docUtente);
  
                                //Emetto il Boolean TRUE di avvenuto accesso
                                this._flagUtenteIsLoggato$.next(true);
  
                                //Se devo forzare l'area preferita la imposto
                                if (forceIdArea && forceIdArea.length !== 0) {
                                  docUtente.IDAREAOPERATIVA = forceIdArea;
                                }

                                //Utente ha una area preferita
                                if (docUtente.IDAREAOPERATIVA) {
                                  //Dovrei posizionarlo
                                  this._idAreaFAV.next(docUtente.IDAREAOPERATIVA);
                                }
  
                                //Emetto la risposta del server
                                resolve(response);
                              }
                              else {
                                reject("User document not found");
                              }
                              
                            }
                            else {
                              reject(response.message);
                            }

                            //Reimposto authorization code
                            startConf = myStartConfig.getValue();
                            startConf.authorizationUserCode = response.code;
                            myStartConfig.next(startConf);



                          })
                          .catch(error => {

                            //Reimposto authorization code
                            startConf = myStartConfig.getValue();
                            startConf.authorizationUserCode = '';
                            myStartConfig.next(startConf);

                            reject(error);
                          });
      });

  }


  /**
   * Esecuzione Logoff dell'utente
   */
  logoff() {

    this._flagUtenteIsLoggato$.next(false);
  }


  /**
   * Richiede nuovamente al server i dati dell'utente (esattamente come al login); dopodichè il docutente viene riemesso aggiornato
   * @param authUserCode codice autorizzativo legato all'utente
   */
  updateClientData(): Promise<Utente>{
    
    return new Promise((resolve, reject) => {
      const method = 'GetActiveUtente';  //Da decidere 
      const document = new Account();

      //faccio la richiesta
      this.docStructureService.requestForFunction(document, method)
      .then(result => {

        if(result){

          let newUtente: Utente = new Utente();
          newUtente.setJSONProperty(result);
          this._flagUtenteIsLoggato$.next(true);
          this._activeUtenteDoc$.next(newUtente);

          resolve(newUtente);
        }
        else{
          throw new Error('Nessuna risposta dal server');
        }

        //recupero l'utente
        //lo metto nella proprietà
        //riemetto il next della proprietà
        //risolvo


      })
      .catch(error => {
        reject(error); 
      })
      
    })
  }

  /**
   * Richiede al server l'aggiornamento dei dati Utente
   * @param config Dati di configurazione
   * @param utenteDoc Documento Utente con dati modificati
   */
  requestUpdate(utenteDoc: Utente):Promise<Utente>{

    return new Promise((resolve, reject) => {

      let myPostParams : PostParams = new PostParams();
      let method = 'updateUserdata';
      let docToCall: Utente = new Utente();

      if (utenteDoc) {

        myPostParams.key = 'docUtente';
        myPostParams.value = utenteDoc;

        this.docStructureService.requestForFunction(docToCall, method, '', myPostParams)
                                //Converto la risposta nell'oggetto PostResponse con un documento Utente contenuto
                                .then(risposta => PostResponse.toPostResponse(risposta, new Utente()))
                                //Analizzo la risposta positiva o negativa (va in catch)
                                .then((typedRisposta:PostResponse) => typedRisposta.analizeResultFlag())
                                .then((typedRisposta:PostResponse) => typedRisposta.getDocFromList<Utente>(0))
                                .then((userDoc:Utente) => {
                                  this._activeUtenteDoc$.next(userDoc);
                                  resolve(userDoc);
                                })
                                .catch(error => {
                                  reject(error);
                                })


      }
      else {
        reject('Document null');
      }
    })
  }  


  /**
   * Richiede al server la cancellazione di un account
   * @param actualPassword Password attuale inserita dall'utente
   * @returns 
   */
  requestDeleteProfile(actualPassword: string): Promise<PostResponse> {

                        
   return new Promise<PostResponse>((resolve, reject) => {

      const metodo = 'deleteUserProfile';
      let actualUtente = this._activeUtenteDoc$.getValue();
      let docUtente: Utente; //Documento da inviare
      let bodyRequest = '';
      

      if (actualUtente) {

        //Preparo il documento utente da inviare
        docUtente = new Utente();
        docUtente.ID = actualUtente.ID;
        docUtente.INPUTPASSWORD = actualPassword;

        //Creo il body da inviare

        //Questi sono i parametri per l'esportazione
        let paramExport = new ParamsExport();
        paramExport.clearPKProperty = false;
        paramExport.clearDOProperty = true;
        paramExport.clearPrivateProperty = true;

        bodyRequest = docUtente.exportToJSON(paramExport);

        bodyRequest = `{"docUtente" : ${bodyRequest}}`;        

        this.docStructureService.requestForFunction(new Account(true), metodo, bodyRequest)
                       .then((rawResponse: PostResponse) => {
                          if (rawResponse && rawResponse.result) {
                            resolve(rawResponse);
                          }
                          else {
                            if (rawResponse && rawResponse.message && rawResponse.message.length != 0) {
                              reject(rawResponse.message);
                            }
                            else {
                              reject('Spiacenti, operazione fallita');
                            }
                          }
                       })
                       .catch(error => {
                        LogApp.consoleLog(error, 'error');
                        reject(error);
                       })

      }
      else {
        reject('Nessun utente loggato');
      }
      
    })
    
     
  }

  //#endregion

  //#region RICHIESTE ELENCHI
  /**
   * Richiede un elenco di utenti per filterkeyword nominativo
   * @param filterKeyword 
   * @param numMaxRequest 
   * @returns 
   */
  requestListUtenti(filterKeyword: string, numMaxRequest: number = 0): Promise<Utente[]> {

    return new Promise<Utente[]>((resolve, reject) => {
      const metodo = 'getListFor';
      let docToApply: Utente;
      let listPostParams: PostParams[] = [];

      if (filterKeyword && filterKeyword.length != 0) {

        docToApply = new Utente(true);
        PostParams.addParamsTo(listPostParams, 'filterKeyword', filterKeyword);
        PostParams.addParamsTo(listPostParams, 'numMaxElement', numMaxRequest);

        this.docStructureService.requestForFunction(docToApply, metodo, null, listPostParams)
                                .then(dataReceived => {
                                  let listUtenti: Utente[] = [];

                                  if (dataReceived && dataReceived.hasOwnProperty('UTENTE')) {
                                    listUtenti = this.docStructureService.castCollection(dataReceived['UTENTE'], new Utente(true));
                                  }

                                  resolve(listUtenti);

                                })
                                .catch(error => {
                                  reject(error);
                                })

      }
      else {
        resolve([]);
      }
    })
  }
  //#endregion



  //#region FASI REGISTRAZIONE

  /**
   * Invia al server la richiesta per inviare via Mail/SMS i codici per la registrazione account
   * @param docRequestCode Documento con le informazioni da inviare al server per effettuare la richiesta
   */
  registrationSendCodici(docRequestCode: AccountRequestCode):Promise<AccountOperationResponse> {
          //Viene effettuata una chiamata al server per ottenere
          //l'invio di una mail e/o un SMS contenente codici PIN
          
          return new Promise<AccountOperationResponse>((resolve, reject)=> {

            let bodyRequest = '';
            let docToCall: Account;
            const method = 'registrationSendCodici';
            
            if (docRequestCode) {
              
              docToCall = new Account(true);
              //Creo il body da inviare

              //Questi sono i parametri per l'esportazione
              let paramExport = new ParamsExport();
              paramExport.clearDOProperty = true;
              paramExport.clearPKProperty = true;
              paramExport.clearPrivateProperty = true;

              bodyRequest = docRequestCode.exportToJSON(paramExport);

              bodyRequest = `{"docRequest" : ${bodyRequest}}`;

              this.docStructureService.requestForFunction(docToCall, method, bodyRequest)
                                      .then(dataReceived => {
                                        let respDoc: AccountOperationResponse;

                                        if (dataReceived.hasOwnProperty('activation')) {
                                          respDoc = <AccountOperationResponse>dataReceived['activation'];
                                        }
                                        else {
                                          respDoc = new AccountOperationResponse();
                                          respDoc.result = false;
                                          respDoc.message = 'Risposta server non corretta'
                                        }

                                        resolve(respDoc);
                                      })
                                      .catch(error => {
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
   * @deprecated UTILIZZARE registrationComplete
   */
  registrationVerifyCodici(config: StartConfiguration,
    docVerifyCode: AccountVerifyCode):Promise<AccountOperationResponse> {
        const metodo = 'registrationVerifyCodici';
        let myHeaders = config.getHttpHeaders();
        myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);

        const myParams = this.docStructureService.getHttpParams();
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
 * @deprecated Utilizzare registrationComplete
 */
registrationFinalize(config: StartConfiguration,
  docUtente: Utente,
  docRequestCode: AccountRequestCode):Promise<AccountOperationResponse> {

    //Viene inviato al server il documento per chiedere la registrazione utente
    const metodo = 'registrationFinalize';

    let myHeaders = config.getHttpHeaders();
    myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);

    const myParams = this.docStructureService.getHttpParams();
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

    

    //Faccio la chiamata POST
    this.apiService
      .httpPost(myUrl, myHeaders, myParams, bodyFinal )
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
        });
    }
    else {
      reject('Dati mancanti per la richiesta');
    }

});



}

/**
 * * Contatta il server per la conclusione della registrazione account
 *
 * @param utenteDoc Compilare COGNOME-NOME-EMAIL-NUMEROMOBILE-NEWSLETTER-WEBLOGIN
 * @param richiestaDoc Documento di Richiesta
 * @param verificaDoc Documento di Codici Verifica (Il documento deve esserci istanziato senza valori anche quando tipoverifica = no)
 * @returns 
 */
  registrationComplete(utenteDoc: Utente, richiestaDoc: AccountRequestCode, verificaDoc: AccountVerifyCode): Promise<AccountOperationResponse> {

    return new Promise<AccountOperationResponse>((resolve, reject) => {
        let docToCall: Account;
        const method = 'registrationComplete';
        let bodyUser: string = '';
        let bodyRichiesta: string = '';
        let bodyVerifica: string = '';
        let finalBody:string = '';

        
        
        if (utenteDoc && richiestaDoc && verificaDoc) {

          docToCall = new Account(true);

          //Questi sono i parametri per l'esportazione
          let paramExport = new ParamsExport();
          paramExport.clearDOProperty = true;
          paramExport.clearPKProperty = true;
          paramExport.clearPrivateProperty = true;        
  
          bodyUser = utenteDoc.exportToJSON(paramExport);
          bodyRichiesta = richiestaDoc.exportToJSON(paramExport);
          bodyVerifica = verificaDoc.exportToJSON(paramExport);
  
          finalBody = `{"docUser":${bodyUser}, "docRequestCode": ${bodyRichiesta}, "docVerifyCode": ${bodyVerifica}}`;

          this.docStructureService.requestForFunction(docToCall, method, finalBody)
                                  .then(dataReceived => {
                                    let respDoc: AccountOperationResponse;

                                    if (dataReceived.hasOwnProperty('activation')) {
                                      respDoc = <AccountOperationResponse>dataReceived['activation'];
                                    }
                                    else {
                                      respDoc = new AccountOperationResponse();
                                      respDoc.result = false;
                                      respDoc.message = 'Risposta server non corretta'
                                    }

                                    resolve(respDoc);
                                  })
                                  .catch(error => {
                                    reject(error);
                                  })

        }
        else {
          reject('Dati non completi');
        }
    })
  }


  //#endregion


  //#region  FASI RECOVERY PASSWORD

  /**
   * Invia al server la richiesta per inviare via Mail/SMS i codici per la registrazione account
   * @param config Dati di configurazione
   * @param docRequestCode Documento con le informazioni da inviare al server per effettuare la richiesta
   */
  recoverySendCodice(docRequestCode: AccountRequestCode):Promise<AccountOperationResponse> {

      //Viene effettuata una chiamata al server per ottenere
      //l'invio di una mail e/o un SMS contenente codici PIN

      return new Promise<AccountOperationResponse>((resolve, reject)=> {
          let docToCall: Account;
          let bodyRequest = '';
          const method = 'recoverySendCodici';

          if (docRequestCode) {

              //Documento da chiamare
              docToCall = new Account(true);
              //Preparazione Body Chiamata
              //Questi sono i parametri per l'esportazione
              let paramExport = new ParamsExport();
              paramExport.clearDOProperty = true;
              paramExport.clearPKProperty = true;
              paramExport.clearPrivateProperty = true;
              bodyRequest = docRequestCode.exportToJSON(paramExport);
              bodyRequest = `{"docRequest" : ${bodyRequest}}`;

              this.docStructureService.requestForFunction(docToCall, method, bodyRequest)
                                      .then(dataReceived => {
                                        let nameProp = 'recovery';
                                        if (dataReceived && dataReceived.hasOwnProperty(nameProp)) {

                                          let response: AccountOperationResponse;
                                          response = new AccountOperationResponse();
                                          response = dataReceived[nameProp];
                                          
                                          resolve(response);
                                        }
                                        else {
                                          reject('Dati ricevuti non corretti');
                                        }
                                      })
                                      .catch(error => {
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
  recoveryVerifyCodice(docVerifyCode: AccountVerifyCode):Promise<AccountOperationResponse> {
        
        return new Promise<AccountOperationResponse>((resolve, reject)=> {

            let docToCall: Account;
            let bodyRequest = '';
            const method = 'recoveryVerifyCodici';
            
            if (docVerifyCode) {

                //Documento da chiamare
                docToCall = new Account(true);

                //Creo il body da inviare
                //Questi sono i parametri per l'esportazione
                let paramExport = new ParamsExport();
                paramExport.clearDOProperty = true;
                paramExport.clearPKProperty = true;
                paramExport.clearPrivateProperty = true;
                bodyRequest = docVerifyCode.exportToJSON(paramExport);
                bodyRequest = `{"docRequest" : ${bodyRequest}}`;

                this.docStructureService.requestForFunction(docToCall, method, bodyRequest)
                                        .then(dataReceived => {
                                          let nameProp = 'recovery';
                                          if (dataReceived && dataReceived.hasOwnProperty(nameProp)) {

                                            let response: AccountOperationResponse;
                                            response = new AccountOperationResponse();
                                            response = dataReceived[nameProp];
                                            
                                            resolve(response);
                                          }
                                          else {
                                            reject('Dati ricevuti non corretti');
                                          }
                                        })
                                        .catch(error => {
                                          reject(error);
                                        })
            }
            else {
              reject('Dati mancanti per la richiesta');
            }

        });
}

/**
 * Invia al server i dati per completare la procedura di recovery password
 * @param docUtente Utente da registrare
 * @param docRequestCode Documento di Richiesta codici iniziale
 */
recoveryUpdatePassword(docUtente: Utente,
                       docRequestCode: AccountRequestCode):Promise<AccountOperationResponse> {

    //Viene inviato al server il documento per chiedere l'aggiornamento della password 
    //a seguito di una operazione di recovery
    
    return new Promise<AccountOperationResponse>((resolve, reject)=> {
      let docToCall: Account;
      let bodyRequest = '';
      let bodyUtente = '';
      let bodyFinal = '';
      const method = 'recoveryFinalize';

  if (docRequestCode && docUtente) {

    //Documento da chiamare
    docToCall = new Account(true);

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

    this.docStructureService.requestForFunction(docToCall, method, bodyFinal)
                            .then(dataReceived => {
                              let nameProp = 'recovery';
                              if (dataReceived && dataReceived.hasOwnProperty(nameProp)) {

                                let response: AccountOperationResponse;
                                response = new AccountOperationResponse();
                                response = dataReceived[nameProp];
                                
                                resolve(response);
                              }
                              else {
                                reject('Dati ricevuti non corretti');
                              }
                            })
                            .catch(error => {
                              reject(error);
                            })
    }
    else {
      reject('Dati mancanti per la richiesta');
    }

});



}



  //#endregion

  //#region VERIFICA DATI ACCOUNT UTENTE

  /**
   * Effettua il controllo sull'utente attivo 
   * se ha bisogno di verificare qualche dato
   * @param config 
   * @returns 
   */
  needDataVerification(config: StartConfiguration): Promise<ParamsVerificaAccount> {

    return new Promise<ParamsVerificaAccount>((resolve) => {
      
      let dataReturn: ParamsVerificaAccount;
      let gruppoDoc: Gruppo;
      
      dataReturn = new ParamsVerificaAccount();
      dataReturn.tipoVerifica = TipoVerificaAccount.noverifica;
      dataReturn.updateDocUtente = false;
  
      //Recupero del Gruppo
      gruppoDoc = config.gruppo;
  
      if (this.activeUtenteDoc && gruppoDoc) {
        switch (gruppoDoc.APPTIPOVERIFICA) {
          case TipoVerificaAccount.verificaemail:
              if (this.activeUtenteDoc.VERIFICATAMAIL == false) {
                dataReturn.tipoVerifica = TipoVerificaAccount.verificaemail
              }
            break;
  
          case TipoVerificaAccount.verificasms:
            if (this.activeUtenteDoc.VERIFICATAMOBILE == false) {
              dataReturn.tipoVerifica = TipoVerificaAccount.verificasms
            }
          break;
  
          case TipoVerificaAccount.verificaemailsms:
            //Non è verificato nulla
            if (this.activeUtenteDoc.VERIFICATAMOBILE == false &&
                this.activeUtenteDoc.VERIFICATAMAIL == false) {
              dataReturn.tipoVerifica = TipoVerificaAccount.verificaemailsms
            }
            else if (this.activeUtenteDoc.VERIFICATAMAIL == false) {
              dataReturn.tipoVerifica = TipoVerificaAccount.verificaemail
            }
            else if (this.activeUtenteDoc.VERIFICATAMOBILE == false) {
              dataReturn.tipoVerifica = TipoVerificaAccount.verificasms
            }
          break;
  
          default:
            break;
        }
  
        if (!this.activeUtenteDoc.COMUNE || this.activeUtenteDoc.COMUNE.length == 0) {
          dataReturn.updateDocUtente = true;
        }
  
      }

      resolve(dataReturn);
    })
  }

  /**
   * Richiede al server di Inviare Codici per la verifica dei Dati Utente (Utente già registrato)
   * @param docRequestCode 
   */
  onUserVerificationSendCodici(docRequestCode: AccountRequestCode):Promise<AccountOperationResponse> {
    return new Promise<AccountOperationResponse>((resolve, reject) => {
      let docToCall: Account;
      let bodyRequest = '';
      const method = 'userVerificationSendCodici';
      
      if (docRequestCode) {

          //Documento da chiamare
          docToCall = new Account(true);

          //Creo il body da inviare
          //Questi sono i parametri per l'esportazione
          let paramExport = new ParamsExport();
          paramExport.clearDOProperty = true;
          paramExport.clearPKProperty = true;
          paramExport.clearPrivateProperty = true;
          bodyRequest = docRequestCode.exportToJSON(paramExport);
          bodyRequest = `{"docRequest" : ${bodyRequest}}`;   
          
          this.docStructureService.requestForFunction(docToCall, method, bodyRequest)
                                  .then(dataReceived => {
                                    let nameProp = 'verification';
                                    
                                    if (dataReceived && dataReceived.hasOwnProperty(nameProp)) {

                                      let response: AccountOperationResponse;
                                      response = new AccountOperationResponse();
                                      response = dataReceived[nameProp];
                                      
                                      resolve(response);
                                    }
                                    else {
                                      reject('Dati ricevuti non corretti');
                                    }
                                  })
                                  .catch(error => {
                                    reject(error);
                                  })            
          
      }
      else {
        reject('Dati insufficienti per la richiesta');
      }
    });
  }

  /**
   * Richiede al server l'aggiornamento dei dati a seguito di una verifica (se necessario vengono controllati anche i codici)
   * @param docVerifyCode 
   */
  onUserVerificationFinalize(docVerifyCode: AccountVerifyCode, docUtente: Utente):Promise<AccountOperationResponse> {
      return new Promise<AccountOperationResponse>((resolve, reject) => {
        let docToCall: Account;
        let bodyRequest = '';
        let bodyUtente = '';
        let bodyFinal = '';
        const method = 'userVerificationFinalize';
        
        if (docVerifyCode && docUtente) {
  
            //Documento da chiamare
            docToCall = new Account(true);
  
            //Creo il body da inviare
            //Questi sono i parametri per l'esportazione
            let paramExport = new ParamsExport();
            paramExport.clearDOProperty = true;
            paramExport.clearPrivateProperty = true;
            paramExport.clearPKProperty = false;
            paramExport.numLivelli = 1;

            bodyRequest = docVerifyCode.exportToJSON(paramExport);
            bodyUtente = docUtente.exportToJSON(paramExport);

            bodyFinal = `{"docVerify" : ${bodyRequest},"docUtente" : ${bodyUtente} }`;   
            
            this.docStructureService.requestForFunction(docToCall, method, bodyFinal)
                                    .then(dataReceived => {
                                      let nameProp = 'verification';
                                      
                                      if (dataReceived && dataReceived.hasOwnProperty(nameProp)) {
  
                                        let response: AccountOperationResponse;
                                        response = new AccountOperationResponse();
                                        response = dataReceived[nameProp];
                                        
                                        resolve(response);
                                      }
                                      else {
                                        reject('Dati ricevuti non corretti');
                                      }
                                    })
                                    .catch(error => {
                                      reject(error);
                                    })            
            
        }
        else {
          reject('Dati insufficienti per la richiesta');
        }
      });
    }

  /**
   * Invia al server la richiesta per inviare via Mail/SMS i codici per la procedura di verifica dei contatti
   * @param config Dati di configurazione
   * @param docRequestCode Documento con le informazioni da inviare al server per effettuare la richiesta
   * @deprecated
   */
  validationSendCodici(docUtente:Utente,
                       docRequestCode: AccountRequestCode):Promise<AccountOperationResponse> {


      return new Promise<AccountOperationResponse>((resolve, reject)=> {
        let docToCall: Account;
        const method = 'validationSendCodici';
        let bodyRequest = '';
        let bodyUtente = '';
        let bodyFinal = '';

        docToCall = new Account(true);
        //Preparazione Body

        if (docRequestCode && docUtente) {

            //Questi sono i parametri per l'esportazione RequestDoc
            let paramReqExport = new ParamsExport();
            paramReqExport.clearDOProperty = true;
            paramReqExport.clearPKProperty = true;
            paramReqExport.clearPrivateProperty = true;

            //Creo il body da inviare
            bodyRequest = docRequestCode.exportToJSON(paramReqExport);

            //Questi sono i parametri per l'esportazione Utente
            let paramUteExport = new ParamsExport();
            paramUteExport.clearDOProperty = true;
            paramUteExport.clearPKProperty = false;
            paramUteExport.clearPrivateProperty = true;

            bodyUtente = docUtente.exportToJSON(paramUteExport);

            bodyFinal = `{"docRequest" : ${bodyRequest}, "docUtente": ${bodyUtente}}`;

            this.docStructureService.requestForFunction(docToCall, method, bodyFinal)
                                    .then(dataReceived => {
                                      let nameProp = 'validation';
                                      if (dataReceived && dataReceived.hasOwnProperty(nameProp)) {

                                        let response: AccountOperationResponse;
                                        response = new AccountOperationResponse();
                                        response = dataReceived[nameProp];
                                        
                                        resolve(response);
                                      }
                                      else {
                                        reject('Dati ricevuti non corretti');
                                      }
                                    })
                                    .catch(error => {
                                      reject(error);
                                    })                                  


        }
        else {
          reject('Dati insufficienti per la richiesta');
        }        
    })

  }



   /**
   * Invia al server una richiesta per verificare i pincode inseriti dall'utente
   * @param config Dati di configurazione
   * @param docVerifyCode Dati da verificare
   * @deprecated
   */
  validationVerifyCodici(config: StartConfiguration,
                         docVerifyCode: AccountVerifyCode):Promise<AccountOperationResponse> {
                          
        const metodo = 'validationVerifyCodici';

        let myHeaders = config.getHttpHeaders();
        myHeaders = myHeaders.append('X-HTTP-Method-Override', metodo);
        const myParams = this.docStructureService.getHttpParams();
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
                .httpPost(myUrl, myHeaders, myParams, bodyRequest)
                .pipe(map(received => {
                    return received.validation;
                }))
                .subscribe((response:AccountOperationResponse) => {
                  this.updateClientData()
                  .then(() => {
                    resolve(response);
                  })
                  .catch(error => {
                    reject(error);
                  })
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
