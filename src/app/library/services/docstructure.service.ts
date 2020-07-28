import { Injectable } from '@angular/core';
import { IDDocument } from '../models/iddocument.model';
import { DynamicClass } from '../models/structure.model';




import { ApicallService } from '../../services/apicall.service';
import { StartService } from 'src/app/services/start.service';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Descriptor, TypeDefinition, TypeReflector } from '../models/descriptor.model';
import { map } from 'rxjs/operators';
import { CacheListElement } from '../models/cachelistelement.model';
import { Cache } from '../models/cache.model';
import { exec } from 'cordova';



@Injectable({
  providedIn: 'root'
})
export class DocstructureService {

  //Struttura documentale
  structureDocuments = [];
  myConfig: StartConfiguration;
  
  
  //Oggetto con la cache
  objCache = new Cache();
  


  constructor(private startService: StartService,
              private apiService: ApicallService) { 



    this.startService.startConfig.subscribe(elConfig => {
      this.myConfig = elConfig;
    });

  }

  /**
   * Decodifica tutte le Foreign Key presenti, eccetto quelle passate nell'array di esclusione
   * @param doc Documento da decodificare
   * @param fieldsExclude Campi di ForeignKeys da non decodificare
   */
  decodeAll(doc:IDDocument, useCache:boolean=true, fieldsExclude?:string[]){
    
    return new Promise((resolve, reject)=>{       

      let executePromise:Promise<any>[] = [];

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
            executePromise.push(_this.decode(doc, element.fieldName, useCache));
          }
          
        }

        //Ho dei campi che devo decodificare con le Promise
        if (executePromise.length !== 0) {

          Promise.all(executePromise).then(() => {
            resolve();
          })
          .catch(err => {
            reject(err);
          });

        }
        else {
          //Non ho nulla da decodificare e va bene cosi
          resolve();
        }

      }
      else {
        reject('Document null');
      }



    });
  }


  /**
   * 
   * @param doc Documento
   * @param fieldDecode Nome del campo da cui parte la decodifica
   */
  decode(doc:IDDocument, 
         fieldDecode: string, 
         useCache:boolean=true, 
         newDecodeField?:string[]) {

    return new Promise((resolve, reject)=>{          
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
                goToDecode = !(doc.isEmpty(fieldDecode));
                
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
    
    return new Promise((resolve, reject)=>{

          let docFilter: any = new DynamicClass(definition.relFieldDoc,true);
          
          //Valorizzo le proprietà del documento come filtro di caricamento
          docFilter[definition.relFieldName] = doc[definition.fieldName];

          this.request(docFilter)
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
      if (!useFields) {
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

    console.log(doc);
    return result;
  }



  /**
   * Effettua chiamate al server 
   * il document dovrà essere istanziato con i parametri che si desiderano diventare filtri di caricamento
   * @param document Parametri di configurazione
   * @param decode Effettua la decodifica dei dati 
   */
  request(document: IDDocument, childLevel=2) {

    return new Promise<any[]>((resolve, reject)=>{
      
      let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
      let objDescriptor: Descriptor;
      
      if (!document) {
        reject('Documento non presente');
      }
      else {
        //Recupero il descrittore della classe
        objDescriptor = document.getDescriptor();

        if (!objDescriptor) {
          reject('Documento non descritto');
        }
        else if (objDescriptor.doRemote == false) {
          //Non è gestito esternamente
          reject('Documento non gestito in remoto');
        }
        else {

          // In Testata c'e' sempre l'AppId
          myHeaders = myHeaders.set('appid',this.myConfig.appId);
          myHeaders = myHeaders.append('child-level', childLevel+'');

          //Preparare i parametri con i filtri arrivati sul documento
          let myParams = this.getHttpParamsFromDoc(document);
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
              .subscribe (resultData => {

                let listElement: IDDocument[] = [];
  
                resultData.forEach(elData => {
                  
                  let newClass: any = new DynamicClass(objDescriptor.className);
                  newClass.setJSONProperty(elData);
                  listElement.push(newClass);

                });
  
                resolve(listElement);

              }, error => {
                reject(error);
              });

          }
          
        }
      }
      
    });

  }

    
  /**
   * Prepara i parametri per la chiamata controllando i parametri presenti sul documento
   * @param document Documento con i parametri di filtro
   */
  getHttpParamsFromDoc(document:IDDocument): HttpParams {
    
    let myParams: HttpParams;
    let arProperty = Object.keys(document); //Prendo tutte le proprietà
    


    // CIclo le proprieta dell'oggetto filter
    arProperty.forEach(element => {
      let nameProperty = element;

      //Se non inizia con _ è una proprieta da includere
      if (!nameProperty.startsWith('_')) {
        //Se c'è un valore
        if (document[nameProperty]) {

          let value = document[nameProperty];
          let strValue = '';
          let tipo = document.getPropertyType(nameProperty);

          switch (tipo) {
            case TypeDefinition.char:
                strValue = value;
            break;
          
            case TypeDefinition.date:
                strValue = document.formatDateISO(value);
            break;

            case TypeDefinition.dateTime:
                strValue = document.formatDateTimeISO(value);
            break;
            
            case TypeDefinition.boolean:
                if (value) {
                  strValue = '-1'
                }
                else {
                  strValue = '0';
                }
            break;
            
            case TypeDefinition.number:
            case TypeDefinition.numberDecimal:
                strValue = value + '';
              break;

            default:
              break;
          }

          if (strValue.length !== 0) {

            if (myParams == undefined) {
              myParams = new HttpParams().set(nameProperty, strValue);
            }
            else {
              //Aggiungo il parametro
              myParams = myParams.append(nameProperty, strValue);
            }
          }
          


        }
      }
    });

    return myParams;
  }




}
