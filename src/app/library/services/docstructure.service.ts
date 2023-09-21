import { Injectable } from '@angular/core';
import { IDDocument, OperatorCondition, FilterCondition } from '../models/iddocument.model';
import {RequestParams, RequestForeign, PostParams } from '../models/requestParams.model';
import { DynamicClass } from '../models/structure.model';

import { ApicallService } from '../../services/apicall.service';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { HttpParams } from '@angular/common/http';
import { Descriptor, TypeReflector } from '../models/descriptor.model';
import { map } from 'rxjs/operators';
import { CacheListElement } from '../models/cachelistelement.model';
import { Cache } from '../models/cache.model';
import { LogApp } from 'src/app/models/log.model';
import { ParamsExport } from '../models/iddocument.model';


@Injectable({
  providedIn: 'root'
})
export class DocstructureService {

  //Struttura documentale
  structureDocuments = [];
  myConfig: StartConfiguration;
  
  
  //Oggetto con la cache
  objCache = new Cache();
  


  constructor(private apiService: ApicallService) { 

  }

  /**
   * Ritorna un documento VUOTO da popolare con i parametri
   * Ritorno un documento con un Encoder Specifico 
   * Lo espongo anche di qua il metodo 
   */
  getHttpParams(): HttpParams {

    return this.apiService.getHttpParams();

  }  

  /**
   * Partendo dal servizio Start Service c'e' un subscribe nel costruttore
   * che serve a inviarmi la configurazione ad ogni cambiamento
   * Impostare la configurazione prima delle chiamate
   * @param configuration Configurazione di Partenza
   */
  setConfig(elConfig: StartConfiguration) {
    this.myConfig = elConfig;
    LogApp.consoleLog('New Configuration received');
  }

  /**
   * Converte la Collection Generica in Tipizzata
   * @param collection Collection non tipizzata
   * @param castInto Passare un Documento per specificare la classe su cui tipizzare
   */
  castCollection(collection: any[], castInto: IDDocument): any[] {
    let listResult = [];
    let objDescriptor: Descriptor;

    if (collection && collection.length != 0 && castInto) {
      //Vediamo che documento è
      objDescriptor = castInto.getDescriptor();

      //Ciclo e creo i documenti tipizzati
      collection.forEach(elItem => {
        let newClass: any = new DynamicClass(objDescriptor.className);
        newClass.setJSONProperty(elItem);
        listResult.push(newClass);
      });
    }

    return listResult;
  }


  /**
   * Decodifica tutte le Foreign Key presenti, eccetto quelle passate nell'array di esclusione
   * @param doc Documento da decodificare
   * @param fieldsExclude Campi di ForeignKeys da non decodificare
   * @param decodeThisCollectionName Elenco delle Collection da Decodificare (per non farle tutte)
   */
  decodeAll(doc:IDDocument, 
            useCache:boolean=true, 
            fieldsExclude?:string[],
            decodeChild: boolean = false,
            decodeThisCollectionName?: string[]): Promise<void>{
    
    return new Promise<void>((resolve, reject)=>{       

      let executePromise:Promise<any|void>[] = [];

      if (doc) {
        //Chiedo le ForeignKeys del documento
        let arForeign = doc.ForeignKeys;
        let _this = this;

        /**Ciclo sulle foreignkey */
        for (let index = 0; index < arForeign.length; index++) {
          const element = arForeign[index];
          let use = true;

          if (fieldsExclude && fieldsExclude.length !== 0) {
            //Utilizzo questa foreignkeys solo se non presente tra quelle da
            //escludere
            use = !(fieldsExclude.includes(element.fieldName));
          }

          if (use) {
            //Richiedo la decodifica del campo
            executePromise.push(_this.decodeField(doc, element.fieldName, useCache));
          }
          
        }


        //Ho dei campi che devo decodificare con le Promise
        if (executePromise.length !== 0) {

          //Devo decodificare anche la collection Figlia
          if (decodeChild) {

            //Eseguo le decodifiche dei campi del documento principale
            Promise.all(executePromise)
                    .then(() => {
                      //Decodifico le collection interne
                      return this.decodeChildCollections(doc,useCache, decodeThisCollectionName);
                    })
                    .then(() => {
                      resolve();
                    })
                    .catch(err => {
                      reject(err);
                    });

          }
          else {
            //Decodifico solo i doc di primo livello
            //Eseguo le decodifiche dei campi del documento principale
            Promise.all(executePromise)
                    .then(() => {
                      resolve();
                    })
                    .catch(err => {
                      reject(err);
                    });            
          }

        }
        else {

          if (decodeChild) {

            //Non ho nulla da decodificare come campi principali
            //Decodifico le collection del documento
            this.decodeChildCollections(doc,useCache, decodeThisCollectionName)
                .then(() => {
                  console.log('Decodifica conclusa')
                  console.log(doc);
  
                  resolve();
                })
                .catch(error => {
                  reject(error);
                })

          }
          else {
            resolve();
          }
        }

      }
      else {
        reject('Document null');
      }



    });
  }


  /**
   * Decodifica le collection figlie
   * @param doc Documento da analizzare
   * @param useCache 
   * @returns 
   */
  decodeChildCollections(doc:IDDocument, 
                         useCache:boolean=true,
                         decodeThisCollectionName?: string[]): Promise<IDDocument> {
    return new Promise<IDDocument>((resolve, reject) => {
      //Controlliamo anche le Collection del Documento
      let descrObj: Descriptor;
      let listNameCollection: string[];
      let arPromise: Promise<any|void>[] = [];
      let pthis = this;


      if (doc) {
        LogApp.consoleLog('Richiesta decodifica per le collection del documento');
        LogApp.consoleLog(doc);

        //Descrittore del documento
        descrObj = doc.getDescriptor();

        //Elenco delle Collection
        listNameCollection = descrObj.getListCollection();

        
        if (listNameCollection.length == 0) {
          LogApp.consoleLog('Il descrittore non riporta collection per il documento');
          LogApp.consoleLog(doc);

          resolve(doc);
        }
        else {
          LogApp.consoleLog('La struttura documento contiene le collection: ');
          LogApp.consoleLog(listNameCollection);

          //Creo la lista di Promise
          listNameCollection.forEach(nameCollection => {
  
            let flagDecoding = false;
  
            //Mi ha detto cosa decodificare
            if (decodeThisCollectionName && decodeThisCollectionName.length != 0) {
              flagDecoding = decodeThisCollectionName.includes(nameCollection);
            }
            else {
              //Decodifico tutte le collection
              flagDecoding = true;
            }
  
            if (flagDecoding) {
              //Chiedo la collection
              let myColl = doc.getCollection(nameCollection);
  
              
              if (myColl && myColl.length != 0) {
  
                LogApp.consoleLog('Decodifica per la collection ' + nameCollection);
                LogApp.consoleLog(myColl);
    
                //Creo l'elenco delle Promise
                arPromise.push(pthis.decodeCollection(myColl, null, useCache));
              }
              else {
                LogApp.consoleLog(`La collection da decodificare ${nameCollection} non contiene documenti`);
              }
            }
            else {
              LogApp.consoleLog(`Collection ${nameCollection} da non decodificare`);
            }
  
          });


          //Ho operazioni da eseguire
          if (arPromise && arPromise.length != 0) {
  
            Promise.allSettled(arPromise)
                  .then(() => {
                    resolve(doc);
                  })
                  .catch(errors => {
                    reject(errors)
                  })
          }
          else {
            resolve(doc);
          }

        }

      }
      else {
        resolve(doc);
      }
    })
  }


  /**
   * Decodifica un campo del documento
   * @param doc Documento
   * @param fieldDecode Nome del campo da cui parte la decodifica
   */
  decodeField(doc:IDDocument, 
         fieldDecode: string, 
         useCache:boolean=true, 
         newDecodeField?:string[]) {

    return new Promise<void>((resolve, reject)=>{          
          //Step 1: field Decode esiste in doc
          //Step 2: field Decode è in una relazione
          let definition: TypeReflector;
          let queryServer = true;
          let result = false;
          let goToDecode = false;

          if (doc && fieldDecode) {
            //Chiedo la definizione del campo, e controlla che
            //n
            definition = doc.getTypeReflectorByFieldName(fieldDecode);

            //Definizione presente
            if (definition) {
              if (definition.isForeignKey) {  //  {relFieldDoc}

              
                //Decodifica se il campo  contiene un valore
                goToDecode = !(doc.propertyIsEmpty(fieldDecode));
                
                //Il campo da decodificare contiene un valore
                if (goToDecode) {

                  //Step 3: Cercare nella cache 
                  //Se non lo trovo nella cache devo richiederlo al server
                  if (useCache) {
                    //Cerco nella cache se trovo la decodifica
                    result = this._decodeInCache(doc, definition, newDecodeField);
                    
                    //Se non trovo in cache devo eseguire la query al server
                    queryServer = !result;
                  }
  
                  //Chiedo al server
                  if (queryServer) {
  
                    this._decodeWithServer(doc, definition, newDecodeField)
                        .then(() => {
                          resolve();
                        })
                        .catch(errMessage => {
                          reject(errMessage);
                        });
                  }
                  else {
                    //Ho usato la cache
                    resolve();
                  }

                }
                else {
                  //Il campo non contiene valori e quini non lo decodifico
                  resolve();
                }

              }
              else {
                reject('Field ' + fieldDecode + ' is not a foreingKey');
              }
            }
            else {
              reject('Field ' + fieldDecode + ' unknown in structure');
            }
          }
          else {
            reject('Field or Document null');
          }

        });

  }





  /**
   * Contatta il server per richiedere elementi 
   * in Definition come relFieldDoc e relFieldName
   * @param doc 
   * @param definition 
   * @param newDecodeField 
   */
  private _decodeWithServer(doc:IDDocument, 
                            definition: TypeReflector, 
                            newDecodeField?:string[]) {
    
    return new Promise<void>((resolve, reject)=>{

          let docFilter: any = new DynamicClass(definition.relFieldDoc,true);
          
          //Valorizzo le proprietà del documento come filtro di caricamento
          docFilter[definition.relFieldName] = doc[definition.fieldName];

          this.requestNew(docFilter)
              .then(serverElement => {
                  //In teoria dovrei aver ricevuto qualcosa dal server
                  if (serverElement.length !== 0) {
                    //Step 1: Inserirlo in cache
                    this.objCache.addTo(serverElement[0]);

                    //Step 2: Valorizzare le proprietà
                    this._setNewDecodeField(doc, serverElement[0], newDecodeField);

                    
                  }

                  resolve();

              })
              .catch(errMessage => {
                reject(errMessage);
              });
    });


  } 

  /**
   * 
   * @param doc Documento da decodificare
   * @param definition Definitione del campo e sua relazione
   * @param newDecodeField Se presenti vengono creati come campi di decodifica al posto del describeRowField
   */
  private _decodeInCache(doc:IDDocument, 
                         definition: TypeReflector, 
                         newDecodeField?:string[]): boolean {

    let elementList: CacheListElement;
    let result = false;
    let findElement: IDDocument;
    let nameField: string;


    if (doc && definition) {
      if (this.objCache) {

        elementList = this.objCache.findByClassName(definition.relFieldDoc);

        //Questa è la lista degli elementi della stessa tipologia del 
        //documento di riferimento che contiene le decodifiche
        if (elementList) {

          nameField = definition.relFieldName;

          if (elementList.list) {
            //Cerco nella lista della cache il valore presente nel documento e impostato come nameField nel documento correlato
            findElement = elementList.findElementByFieldName(nameField, doc[definition.fieldName]);

            //Questo e' il documento di Decodifica
            //Devo conoscere il valore della proprietà eletta come describeRowField
            if (findElement) {

              //Passo il documento che devo modificare e il documento di decodifica
              result = this._setNewDecodeField(doc, findElement, newDecodeField);
              
            }
          }
        }
      }
    }
    

    return result;

  }


  /**
   * 
   * @param doc Documento a cui applicare nuovi campi
   * @param docRel Documento di riferimento
   * @param useFields Se presente sono i campi usati per la decodifica, altrimenti viene usato il describeRowFields
   */
  private _setNewDecodeField(doc: IDDocument, 
                             docRel: IDDocument, 
                             useFields?:string[]): boolean {
    let objDescriptor: Descriptor;
    let result = false;
    let nameDescribe = '';
    let nameNewProperty = '';

    if (doc && docRel) {
      if (!useFields || useFields.length == 0) {
        //doc è il documento a cui aggiungere proprietà
        //in questo caso ne aggiungo 1 sola, che è il describeRowField del docRel
        objDescriptor = docRel.getDescriptor();

        if (objDescriptor && objDescriptor.describeField && objDescriptor.describeField.length !== 0) {

          nameDescribe = objDescriptor.describeField;
          nameNewProperty = "_" + objDescriptor.describeField + "_" + objDescriptor.className;

          //Creo la nuova proprietà con il valore
          doc[nameNewProperty] = docRel[nameDescribe];

          result = true;
        }
  
  
      }
      else {
        //Nell'array useFields ho i nomi dei campi che voglio come nuovi campi di decodifica
        objDescriptor = docRel.getDescriptor();
        for (let index = 0; index < useFields.length; index++) {
          const elFieldDecode = useFields[index];

          nameDescribe = elFieldDecode;
          nameNewProperty = "_" + elFieldDecode + "_" + objDescriptor.className;

          //Creo la nuova proprietà con il valore
          doc[nameNewProperty] = docRel[nameDescribe];

          result = true;          
        }
      }
    }

    
    return result;
  }

  


   /**
    * Carica una collection figlia del documento passato 
    * e la imposta nel documento
    * @param document  Documento base da cui caricare
    * @param collectionName Nome collection da caricare
    * @param params parametri aggiuntivi
    */
  public loadCollection(document:IDDocument, collectionName: string, params?:RequestParams) {
    return new Promise<IDDocument>((resolve, reject)=>{
      let prosegui = true;
      let objDescriptor: Descriptor;
      let message: string = '';
      let defCollection: TypeReflector;
      let namePrimaryKey = '';

      if (!document) {
        message = 'Documento null';
        prosegui = false;
        reject(message);
      }
      else if (!collectionName || collectionName.length == 0) {
        message = 'Collection non specificata';
        prosegui = false;
        reject(message);
      }

      if (prosegui) {
        //Recupero il descrittore della classe
        objDescriptor = document.getDescriptor();

        if (!objDescriptor) {
          prosegui = false;
          message = "Document descriptor not find";
          reject(message);
        }
      }

      

      //Controllo correttezza configurazione collection
      if (prosegui) {
        defCollection = objDescriptor.getByCollectionName(collectionName);

        if (!defCollection) {
          prosegui = false;
          message = 'Collection ' + collectionName + 'not found';
          reject(message);
        }
        else if (!defCollection.relFieldDoc || defCollection.relFieldDoc.length == 0) {
          prosegui = false;
          message = 'Document in collection ' + collectionName + ' not defined';
          reject(message);
        }
        else if (!defCollection.relFieldName || defCollection.relFieldName.length == 0) {
          prosegui = false;
          message = 'Field in ' + defCollection.relFieldDoc + ' to loading collection ' + collectionName + ' not defined';
          reject(message);
        }
      }

      if (prosegui) {
        namePrimaryKey = objDescriptor.primaryKeyFieldName;

        if (namePrimaryKey.length == 0) {
          prosegui = false;
          message = 'Document Descriptor ' + objDescriptor.className + ' without primary key';
          reject(message);
        }

      }

      //Preparo il documento di filtro per la chiamata
      if (prosegui) {

        let filterDocument: any = new DynamicClass(defCollection.relFieldDoc,true);
        filterDocument[defCollection.relFieldName] = document[namePrimaryKey];

        this.requestNew(filterDocument, params)
          .then(collReceived => {

            //Devo eliminare i dati precedenti della collection del documento
            //Svuoto la collection attuale
            document[defCollection.fieldName] = [];

            document[defCollection.fieldName] = collReceived;
            resolve(document);


          })
          .catch(error => {
            reject(error);
          });

      }
    });
  }


  /**
   * Per ogni documento contenuto nella collection viene caricata la collection figlia richiesta
   * @param collection Collection di Documenti
   * @param collectionName Collection figlia da caricare
   * @param params parametri aggiuntivi
   */
  public loadCollectionMulti(collection: IDDocument[], collectionName:string, params?:RequestParams) {
    return new Promise<IDDocument[]>((resolve, reject)=>{
      let executePromise:Promise<IDDocument>[] = [];
      if (collection && collection.length !== 0) {

        for (let index = 0; index < collection.length; index++) {
          const elDocument = collection[index];

          let exPromise = this.loadCollection(elDocument, collectionName, params);
          executePromise.push(exPromise);

        }

        //Esecuzione di tutte le Promise se presenti
        if (executePromise.length !== 0) {
          //Eseguo tutte le Promise
          Promise.all(executePromise)
                  .then(() => {
                    //Ritorno il tutto decodificato
                    resolve(collection);
                  })
                  .catch(err => {
                    reject(err);
                  });
          }
          else {
            //Non ho nulla da decodificare e va bene cosi
            resolve(collection);
          }
      }
      else {
        reject('Collection not defined');
      }
    });
  }  

  /**
   * Effettua chiamate al server 
   * il document dovrà essere istanziato con i parametri che si desiderano diventare filtri di caricamento
   * @param filterDocument Parametri di configurazione
   * @param decode Effettua la decodifica dei dati 
   */
  public requestNew(filterDocument: IDDocument, params?:RequestParams) {

    return new Promise<any[]>((resolve, reject)=>{
      
      
      let myHeaders = this.myConfig.getHttpHeaders();
      let objDescriptor: Descriptor;
      let childLevel = -1;
      let orderBy: string = '';
      let nElem = 0;
      let requestAndDecode = false; //Richiedi e Decodifica i documento di primo livello
      let decodeChildDoc = false; //Anche i documenti di secondo livello
      let useDecodeCache = true;
      let foreignFields: RequestForeign[];
      let listNameCollectionDecode: string[] = []; //Nomi eventuali delle collection da decodificare
      
      if (!filterDocument) {
        reject('Documento filtro non presente');
      }
      else {
        //Recupero il descrittore della classe
        objDescriptor = filterDocument.getDescriptor();

        if (!objDescriptor) {
          reject('Descrittore Documento filtro non presente');
        }
        else if (objDescriptor.doRemote == false) {
          //Non è gestito esternamente
          reject('Documento non gestito in remoto');
        }
        else {

          // Controllo i parametri di richiesta
          if (params) {

            if (params.child_level) {
              childLevel = params.child_level;
            }

            if (params.top) {
              nElem = params.top;
            }

            if (params.orderBy) {
              orderBy = params.orderBy;
            }

            if (params.decode) {
              //Controllo se devo usare la cache
              useDecodeCache = params.decode.useCache;

              //Devo decodificare
              if (params.decode.active) {
                //Come devo comportarmi con la decodifica
                requestAndDecode = true;
                decodeChildDoc = params.decode.childDoc;

                //Eventuale Collection List da decodificare
                if (params.decode.listCollectionName) {
                  listNameCollectionDecode = params.decode.listCollectionName;
                }


                if (params.decode.foreignFields) {
                  foreignFields = params.decode.foreignFields;
                }
              }

            }

            

          }


          if (childLevel != -1) {
            myHeaders = myHeaders.append('child-level', childLevel+'');
          }

          if (orderBy && orderBy.length !== 0) {
            myHeaders = myHeaders.append('order-by', orderBy);
          }


          //Preparare i parametri con i filtri arrivati sul documento
          let myParams = this._getHttpParamsFromDoc(filterDocument);

          if (nElem && nElem > 0){
            myParams=myParams.append('$top',nElem+'');
          }



          let myUrl = this.myConfig.urlBase + '/' + objDescriptor.classWebApiName;

          if (!myParams) {
            reject('Request Parametri insufficienti');
          }
          else {

            this.apiService
              .httpGet(myUrl, myHeaders, myParams)
              .pipe(map(fullData => {
                return fullData[objDescriptor.classWebApiName]
              }))
              .subscribe({
                next: (resultData)=> {

                  let listElement: IDDocument[] = [];
    
                  if (resultData){
    
                    resultData.forEach(elData => {
                      
                      let newClass: any = new DynamicClass(objDescriptor.className);
                      newClass.setJSONProperty(elData);
                      listElement.push(newClass);
                    });
                    
    
                  }
    
                  //Se non devo decodificare posso fare qui il resolve
                  if (!requestAndDecode) {
                    resolve(listElement);
                  }
                  else if (listElement.length !== 0) {
    
                    //Decodifico la collection di documenti (ed eventualmente i figli)
                    this.decodeCollection(listElement, 
                                          foreignFields, 
                                          useDecodeCache,
                                          decodeChildDoc,
                                          listNameCollectionDecode
                                          )
                        .then(() => {
                          LogApp.consoleLog('Conclusa la decodifica della lista Elementi');
                          LogApp.consoleLog(listElement);
                          resolve(listElement);
                        })
                        .catch(errMessage => {
                          LogApp.consoleLog('Conclusa con errori la decodifica della lista Elementi',"error")
                          LogApp.consoleLog(errMessage);
                          reject(errMessage);
                        });
                  }
                  else {
                    LogApp.consoleLog('Conclusa la decodifica della lista Elementi')
                    resolve(listElement);
                  }
                },
                error: (error) => {

                  reject(error);
                }
              });
              

          }
          
        }
      }
      
    });

  }


  /**
   * Decodifica una collection di documenti
   * @param collection 
   * @param foreignFields 
   * @param useCache 
   * @param decodeChildDoc Indica se devo decodificare anche le collection figlie
   * @param listCollectionChild Indicare i nomi delle sole collection da decodificare
   * @returns 
   */
  public decodeCollection(collection: IDDocument[], 
                          foreignFields?:RequestForeign[],
                          useCache:boolean = true,
                          decodeChildDoc: boolean = false,
                          listCollectionChild?: string[]): Promise<any> {
    
    //Devo decodificare l'intera collection di dati
    //Versione 1: foreignField non presente
    //        Decodifica di tutte le foreign key presenti con il describeRowField default
    //Versione 2: foreignField presente 
    //        Decodifica delle solo foreign key indicate controllando all'interno se ci sono campi di decodifica richiesti
    


    return new Promise((resolve, reject)=>{        

      let executePromise:Promise<any>[] = [];

      //Dati presenti in collection
      if (collection && collection.length !== 0) {

        //Versione 2
        if (foreignFields && foreignFields.length !== 0) {

          for (let index = 0; index < collection.length; index++) {
            const doc = collection[index];

            //Ciclo i ForeignFields
            for (let iField = 0; iField < foreignFields.length; iField++) {
              const elForeign = foreignFields[iField];

              let exPromise = this.decodeField(doc, elForeign.nameField, useCache, elForeign.describeFields);
              //Aggiunta all'Array
              executePromise.push(exPromise);
            }

          }
  
        }
        else {
          //Versione 1
          //Decodifica di tutte le foreign key presenti con il describeRowField default
          //Utilizzo il decodeAll
          for (let index = 0; index < collection.length; index++) {
            const doc = collection[index];

            //Creo la Promise di decodifica
            let exPromise = this.decodeAll(doc, useCache, null, decodeChildDoc, listCollectionChild);
            
            //Aggiunta all'Array
            executePromise.push(exPromise);
          }

        }
        
        //Esecuzione di tutte le Promise se presenti
        if (executePromise.length !== 0) {
        //Eseguo tutte le Promise
        Promise.all(executePromise)
                .then(() => {
                  //Ritorno il tutto decodificato
                  resolve(collection);    
                })
                .catch(err => {
                  LogApp.consoleLog(err, "error");
                  
                  reject(err);
                });
        }
        else {
          //Non ho nulla da decodificare e va bene cosi
          resolve(collection);          
        }

      }
      else {

        //Non ci sono dati ritorno la stessa collection vuota
        resolve(collection);
      }

    });


    
  }

    
  /**
   * Prepara i parametri per la chiamata controllando i parametri presenti sul documento
   * @param document Documento con i parametri di filtro
   */
  private _getHttpParamsFromDoc(document:IDDocument): HttpParams {
    
    let myParams: HttpParams;
    let arProperty = Object.keys(document); //Prendo tutte le proprietà
    let objDescriptor = document.getDescriptor(); //Descrittore dell'oggetto

    
    // CIclo le proprieta dell'oggetto filter
    objDescriptor.fields.forEach(element => {
      let nameProperty = element.fieldName;
      let strValue = '';
      let tipo = document.getPropertyType(nameProperty);
      let operatoreSpecial: OperatorCondition; //Condizione speciale sulla proprietà

      //Se non inizia con _ è una proprieta da includere
      if (!nameProperty.startsWith('_')) {
        let filterCondition: FilterCondition;
        

        //Recupero della condizione di filtro speciale
        filterCondition = document.getFilterConditionByFieldName(nameProperty);

        //Recupero la condizione speciale (potrebbe non esserci)
        operatoreSpecial = document.getFilterOperatorByFieldName(nameProperty);

        //La proprietà non contiene un valore
        if (document[nameProperty] == null || document[nameProperty] == undefined ) {
          //C'e' una condizione di filtro speciale
          if (filterCondition) {
            
            //Gli elementi contenuti vanno in OR e separati dal punto e virgola
            if (filterCondition.listOrValue && filterCondition.listOrValue.length != 0) {
              //Ci sono valori da mettere in OR

              //Devo inserirli separati da ;
              for (let index = 0; index < filterCondition.listOrValue.length; index++) {
                const valoreProperty = filterCondition.listOrValue[index];
                if (strValue && strValue.length != 0) {
                  strValue += ';';
                }

                strValue += document.formatValue(tipo,valoreProperty);
              }

              //Si inseriscono con l'operatore uguaglianza
              operatoreSpecial = OperatorCondition.uguale;

            }
          }
        }
        else  {

          //Converto il valore della proprieta
          strValue = document.formatValue(tipo, document[nameProperty]);

          //Recupero la condizione speciale (potrebbe non esserci)
          operatoreSpecial = document.getFilterOperatorByFieldName(nameProperty);  
          
        }

        //Posso aggiungerle ai parametri
        if (strValue.length !== 0) {

          //Tutti i parametri vengono aggiunti per uguaglianza o controllando
          //se presenti con una condizione diversa nel filterCondition
          
          //Viene sempre ritornato l'operatore da impostare
          strValue = operatoreSpecial + strValue;
          
          if (myParams == undefined) {

            //Chiedo un nuovo documento e lo popolo
            myParams = this.apiService.getHttpParams().set(nameProperty, strValue);
          }
          else {
            //Aggiungo il parametro
            myParams = myParams.append(nameProperty, strValue);
          }
        }
      }
    });

    return myParams;
  }

  /**
  * Clona un oggetto 
  */
  public cloneObject(document:IDDocument): any {
    let objDescriptor: Descriptor;
    let cloneObj:any;

    if (document) {

      objDescriptor = document.getDescriptor();

      cloneObj = new DynamicClass(objDescriptor.className, true);

      for (var attribut in document) {
          if (typeof document[attribut] === "object") {
              //cloneObj[attribut] = this.cloneObject(document[attribut]);
          } else {
              cloneObj[attribut] = document[attribut];
          }
      }
    }
    
    return cloneObj;

  }

  /**
   * Dato un documento di partenza e una sequenza di campi ritorna il documento correlato
   * Esempio Documento Corso contiene IDLOCATION
   * seqField mi da il percorso da seguire per arrivare al documento correlato
   * seqField = ['IDLOCATION'] => Location
   * seqField = ['IDLOCATION', 'IDAREA'] => Area
   * seqField = ['IDLOCATION', 'IDAREA','IDGRUPPO'] => Gruppo
   * @param docStart Documento di partenza
   * @param seqField Percorso da seguire per ottenere il documento correlato
   * @param childLevel Profondita dell'ultima chiamata
   * @param docRepository Aggiunge il documento correlato al documento passato (spesso il docRepository è uguale a docStart)
   */
  public getRelDoc( docStart: IDDocument, 
                    seqField: string[], 
                    childLevel = 2,
                    docRepository?: IDDocument,
                    indexSeq = -1):Promise<any> {
    return new Promise<any>((resolve, reject)=>{  

      let nameField = '';
      
      let objFieldType: TypeReflector;

      if (docStart) {
        if (seqField && seqField.length !== 0) {

          if (indexSeq == -1) {
            //Inizio il giro impostando posizione 0
            indexSeq = 0;
          }
        }

        
        if (seqField && seqField.length !== 0) {
          
          nameField = seqField[indexSeq];

          //Con il nome del campo, ottengo la definizione del campo
          objFieldType = docStart.getTypeReflectorByFieldName(nameField);
            
          //Il campo esiste e contiene qualcosa
          if (objFieldType && docStart.propertyIsEmpty(nameField)==false) {

            //E' un campo in foreing Key
            if (objFieldType.isForeignKey) {
              
              //Impostare il documento di filtro
              let filter:any = new DynamicClass(objFieldType.relFieldDoc, true);
              let idDocFilter:IDDocument = filter;

              idDocFilter.setPrimaryKey(docStart[nameField]);

              //creo i filtri per il child level
              let params : RequestParams = new RequestParams();
              if (seqField.length == indexSeq + 1) {
                params.child_level = childLevel;
              }
              else {
                params.child_level = 1;
              }

              this.requestNew(idDocFilter, params)
                  .then(arElement => {

                    if (arElement && arElement.length !== 0) {
                      let element = arElement[0];

                      
                      //Ho ancora relazioni da decodificare
                      if (indexSeq + 1 < seqField.length) {
                        //Incremento l'indice sequenza
                        indexSeq++;
                        //Eseguo un nuovo relDoc
                        this.getRelDoc(element, seqField, childLevel, docRepository, indexSeq)
                            .then(elResolve => {
                              resolve(elResolve);
                            })
                            .catch(error => {
                              reject(error);
                            })

                      }
                      else {

                        //Il giro è finito

                        //Elemento presente e vuole che venga aggiunto al documento chiamante come relDoc nel Repository
                        if (element && docRepository) {
                          
                          //Aggiungo al repository
                          docRepository.addToRepositoryRelDoc(element, seqField);
                        }


                        resolve(element);
                      }
                    }
                    else {
                      LogApp.consoleLog('Document rel not found');
                      resolve(null);
                    }

                  })
                  .catch(error => {
                    reject(error);
                  })
  
            }
            else {
              LogApp.consoleLog('Foreign Key not found');
              resolve(null);
            }
          }
          else {
            LogApp.consoleLog('Foreign Key not found');
            resolve(null);
          }
          
  
        }
        else {
          reject('Sequence Field Link empty');
        }
      }
      else {
        reject('Document null or undefined');
      }

    });

  }

public getRelDocOriginale( docStart: IDDocument, 
                    seqField: string[], 
                    childLevel = 2,
                    docRepository?: IDDocument,
                    indexSeq = -1):Promise<any> {
    return new Promise<any>((resolve, reject)=>{  

      let nameField = '';
      
      let objFieldType: TypeReflector;

      if (docStart) {
        if (seqField && seqField.length !== 0) {

          if (indexSeq == -1) {
            //Inizio il giro impostando posizione 0
            indexSeq = 0;
          }
        }
        
        if (seqField && seqField.length !== 0) {
          
          nameField = seqField[indexSeq];

          //Con il nome del campo, ottengo la definizione del campo
          objFieldType = docStart.getTypeReflectorByFieldName(nameField);
            
          //Il campo esiste e contiene qualcosa
          if (objFieldType && docStart.propertyIsEmpty(nameField)==false) {

            //E' un campo in foreing Key
            if (objFieldType.isForeignKey) {
              
              //Impostare il documento di filtro
              let filter:any = new DynamicClass(objFieldType.relFieldDoc, true);
              let idDocFilter:IDDocument = filter;

              idDocFilter.setPrimaryKey(docStart[nameField]);

              //creo i filtri per il child level
              let params : RequestParams = new RequestParams();
              if (seqField.length == indexSeq + 1) {
                params.child_level = childLevel;
              }
              else {
                params.child_level = 1;
              }

              this.requestNew(idDocFilter, params)
                  .then(arElement => {

                    if (arElement && arElement.length !== 0) {
                      let element = arElement[0];

                      
                      //Ho ancora relazioni da decodificare
                      if (indexSeq + 1 < seqField.length) {
                        //Incremento l'indice sequenza
                        indexSeq++;
                        //Eseguo un nuovo relDoc
                        return this.getRelDoc(element, seqField, childLevel, docRepository, indexSeq);

                      }
                      else {

                        //Il giro è finito

                        //Elemento presente e vuole che venga aggiunto al documento chiamante come relDoc nel Repository
                        if (element && docRepository) {
                          
                          //Aggiungo al repository
                          docRepository.addToRepositoryRelDoc(element, seqField);
                        }


                        return resolve(element);
                      }
                    }
                    else {
                      LogApp.consoleLog('Document rel not found');
                      return resolve(null);
                    }

                  })
                  .catch(error => {
                    return reject(error);
                  })
  
            }
            else {
              LogApp.consoleLog('Foreign Key not found');
              return resolve(null);
            }
          }
          else {
            LogApp.consoleLog('Foreign Key not found');
            return resolve(null);
          }
          
  
        }
        else {
          return reject('Sequence Field Link empty');
        }
      }
      else {
        return reject('Document null or undefined');
      }

    });

  }  


  /**
   * Richiede per tutti i documenti della collection, un documento relativo 
   * basato sulla sequenza seqField
   * Il documento correlato viene aggiunto al repository di ogni documento
   * @param collection Collection di Documenti della stessa tipologia
   * @param seqField Percorso da seguire per ottenere il documento correlato
   */
  public getRelDocCollection( collection: IDDocument[],
                              seqField: string[]
                              ):Promise<void> {

    return new Promise<void>((resolve)=>{

      let executePromise:Promise<any>[] = [];

      if (collection) {
        for (let index = 0; index < collection.length; index++) {
          const elDoc = collection[index];
          let elPromise = this.getRelDoc(elDoc, seqField, 1, elDoc);
          executePromise.push(elPromise);
        }

        if (executePromise.length != 0) {
          Promise.all(executePromise)
            .then( () => {
              resolve();
            })
            .catch(error => {
              resolve();
            });
        }
        else {
          resolve();
        }
      }
      else {
        resolve();
      }


    });
            
 }

 /**
  * Per ogni documento presente, vengono chieste le N seqField presenti
  * Esempio tutti i documenti devono recuperare
  * ['IDCORSO']
  * ['IDCORSO','IDLIVELLOENTRATA']
  * Per ogni documento ne recupero altri 2
  * @param collection Collection di Documenti della stessa tipologia
  * @param seqField Array che contiene un Array di stringhe per la sequenza
  */
 public getRelMultiDocCollection( collection: IDDocument[],
                                  seqField: string[][]
                                  ):Promise<void> {

    let pthis = this;

    return new Promise<void>((resolve)=>{
      let executePromise:Promise<any>[] = [];

      if (collection && seqField && seqField.length != 0) {

        for (let index = 0; index < seqField.length; index++) {
          const elSeq = seqField[index];
          executePromise.push(pthis.getRelDocCollection(collection, elSeq));
        }

        Promise.all(executePromise)
              .then(() => {
                resolve();
              })
              .catch(error => {
                resolve();
              })
      }
      else {
        resolve();
      }
    })                                    
  }

  // ****************************************************************
  // ***************  REQUEST PER I METODI STATICI    ***************
  // ****************************************************************

  /**
   * Effettua una chiamata POST al metodo indicato dell'oggetto specificato
   * E' possibile indicare a scelta:
   * 1) un jsonbody stringa o documento (il documento viene convertito in JSON)
   * 2) postParams:unione di chiavi /valore da inviare nei parametri se i valori non sono oggetti, altrimenti essendo oggetti,
   *    viene creato un oggetto e innestato nel body
   * 
   * 
   * 
   * 
   * @param documentCall Documento a cui effettuare la chiamata
   * @param method nome del metodo statico da chiamare
   * @param jsonBodyOrDoc body da inviare in formato json o documento
   * @param postParams Array con i parametri da aggiungere nell'url
   * @param reqOptions Eventuali Opzioni (Per ora funziona solo il Max Elementi)
   */
  public requestForFunction(documentCall: IDDocument, 
                     method: string, 
                     jsonBodyOrDoc?: string | IDDocument,
                     postParams?: PostParams[] | PostParams,
                     reqOptions?:RequestParams
                     ): Promise<any> { 

    return new Promise<any>((resolve,reject) => {

      let myHeaders = this.myConfig.getHttpHeaders();

      //Chiedo un documento dei parametri
      let myParams = this.apiService.getHttpParams();
      
      let myUrl = '';
      let myJsonBody = '';
      let postBasicType = false;

      let objDescriptor: Descriptor;

      if (!this.myConfig) {
        reject('Configuration non presente');
      }
      else if (!documentCall) {
        reject('Documento non presente');
      }
      else if (method.length == 0) {
        reject('Metodo non presente');        
      }
      else {
         //Recupero il descrittore della classe
         objDescriptor = documentCall.getDescriptor();


         if (!objDescriptor) {
           reject('Descrittore Documento non presente');
         }
         else if (objDescriptor.doRemote == false) {
           //Non è gestito esternamente
           reject('Documento non gestito in remoto');
         }
         else {

          //Creo URL di chiamata
          myUrl = this.myConfig.urlBase + '/' + objDescriptor.classWebApiName;

          //Sistemo l'header
           myHeaders = myHeaders.append('X-HTTP-Method-Override',method);



           //Controllo dei parametri post
           if (postParams) {

            //Controllo come sono i parametri di post
            postBasicType = PostParams.getBasicTypeFrom(postParams);

            if (postBasicType) {
              //Essendo tutti parametri basici li sistemo come parametri
              
              //Se è un Array
              if ( Array.isArray(postParams) ) {
  
                if (postParams.length != 0) {
                  for (let index = 0; index < postParams.length; index++) {
                    const elParam = postParams[index];
                     myParams = myParams.append(elParam.key, elParam.value);
                   }
              }           
             }
             else {
               //Oggetto semplice
               myParams = myParams.append(postParams.key, postParams.value);
             }


            }
            else {
              //Costruire un oggetto da sistemare nel body
              jsonBodyOrDoc = PostParams.getJsonFrom(postParams);

            }

          } 

          if (reqOptions) {
            //Se avessi l'opzione Top la aggiungo
            if (reqOptions.top) {
              myParams = myParams.append('$top', reqOptions.top +'');
            }
           }          

          if (jsonBodyOrDoc) {
            if (typeof jsonBodyOrDoc == "string") {
              myJsonBody = jsonBodyOrDoc;
            }
            else if (typeof jsonBodyOrDoc == "object") {
              //Questi sono i parametri per l'esportazione
              let paramExport = new ParamsExport();

              paramExport.clearDOProperty = true;
              paramExport.clearPKProperty = false;
              paramExport.clearPrivateProperty = true;
              paramExport.onlyPropertyModified = true;
              paramExport.onlyDocModified = true;

              paramExport.numLivelli = 999;
              myJsonBody = jsonBodyOrDoc.exportToJSON(paramExport);
            }
          }

          //Effettuo la chiamata POST
          //Era cosi' ho cambiato la variabile alla fine this.apiService.httpPost(myUrl,myHeaders,myParams, jsonBodyOrDoc)
          this.apiService.httpPost(myUrl,myHeaders,myParams, myJsonBody)
          .subscribe(response => {
            resolve(response);
          }, error => {
            reject(error);
          });

        }
      }
    });


  }

  /**
   * Prende la collection e ne torna il primo elemento
   * Reject se non lo trovasse 
   * @param Collection 
   * @returns 
   */
  public findFirstDoc<T>(Collection: T[]): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      if (Collection && Collection.length != 0) {
        resolve(Collection[0]);
      }
      else {
        reject('No Document find');
      }
    })
  }

  // **********************************************
  // *          REQUEST FOR UPDATE                *
  // **********************************************


  /**
   * Richiesta effettuata al server per aggiornare un documento
   * @param document Documento da aggiornare
   * @param onlyPropModified Invia solo le proprietà modificate
   */
  public requestForUpdate(document: IDDocument, onlyPropModified = true, onlyDocModified = false): Promise<any> {
    //Si esegue una PUT con il parametro ID e il body i valori da modificare
    return new Promise<void>((resolve,reject) => {
      let myHeaders = this.myConfig.getHttpHeaders();
      let objDescriptor: Descriptor;
      let fieldNamePK = '';
      let fieldValuePK = '';
      let jsonBody = '';
      let myParams: HttpParams;
      let myUrl = '';

      if (!document) {
        reject('Document null');
      }
      else {
        //Recupero il descrittore della classe
        objDescriptor = document.getDescriptor();

        if (!objDescriptor) {
          reject('Descrittore Documento filtro non presente');
        }
        else if (objDescriptor.doRemote == false) {
          //Non è gestito esternamente
          reject('Documento non gestito in remoto');
        }
        else {
          //Recupero nome e valore della primary Key
          fieldNamePK = document.getPrimaryKey('name');
          fieldValuePK = document.getPrimaryKey('value');

          //Vuole che aggiorni le proprietà modificate ma non ne ho
          //Che facciamo dico che è andata a buon fine
          if (onlyPropModified && document.isModified() == false) {

          }
          else {

            //Preparo il body

            //Questi sono i parametri per l'esportazione
            let paramExport = new ParamsExport();

            paramExport.clearDOProperty = true;
            paramExport.clearPKProperty = false;
            paramExport.clearPrivateProperty = true;
            paramExport.onlyPropertyModified = onlyPropModified;
            paramExport.onlyDocModified = onlyDocModified;
            
            jsonBody = document.exportToJSON(paramExport);
    
            myUrl = this.myConfig.urlBase + '/' + objDescriptor.classWebApiName;

            this.apiService
                  .httpPut(myUrl, myHeaders, myParams, jsonBody )
                  .subscribe(() => {
                    resolve();
                  },error => {
                    reject(error);
                  });
          }
        }
      }
    });

  }

}
