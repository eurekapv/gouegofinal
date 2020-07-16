import { Injectable, Type } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { IDDocument } from '../models/iddocument.model';
import { Area } from 'src/app/models/area.model';
import { Campo } from 'src/app/models/campo.model';
import { CampoSport } from 'src/app/models/camposport.model';
import { CategoriaEta } from 'src/app/models/categoriaeta.model';
import { Corso } from 'src/app/models/corso.model';
import { CorsoProgramma } from 'src/app/models/corsoprogramma.model';
import { ApicallService } from '../../services/apicall.service';
import { StartService } from 'src/app/services/start.service';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Descriptor, TypeDefinition } from '../models/descriptor.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocstructureService {

  tableDocuments = [];
  myConfig: StartConfiguration;


  constructor(private startService: StartService,
              private apiService: ApicallService) { 

    this.initTableDocuments();

    this.startService.startConfig.subscribe(elConfig => {
      this.myConfig = elConfig;
    });

  }



  //Inizializzo tutti i documenti
  initTableDocuments() {

    let docAccount = new Account();
    this.addToTable(docAccount);

    let docArea = new Area();
    this.addToTable(docArea);

    let docCampo = new Campo();
    this.addToTable(docCampo);

    let docCampoSport = new CampoSport();
    this.addToTable(docCampoSport);

    let docCatEta = new CategoriaEta();
    this.addToTable(docCatEta);

    let docCorso = new Corso();
    this.addToTable(docCorso);

    let docCorsoProgramma = new CorsoProgramma();
    this.addToTable(docCorsoProgramma);

    
    
  }



  addToTable(document: IDDocument) {
    if (document) {
      this.tableDocuments.push(document);
    }
  }


   /**
   * Effettua chiamate al server 
   * il document dovrà essere istanziato con i parametri che si desiderano diventare filtri di caricamento
   * @param document Parametri di configurazione
   * @param decode Effettua la decodifica dei dati 
   */
  request(document: IDDocument, decode?: boolean) {

    return new Promise<IDDocument[]>((resolve, reject)=>{
      
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

          //Preparare i parametri con i filtri arrivati sul documento
          let myParams = this.getHttpParamsFromDoc(document);
          let myUrl = this.myConfig.urlBase + '/' + objDescriptor.classWebApiName;

          if (!myParams) {
            reject('Parametri insufficienti');
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
                  
                  let newClass: IDDocument = new (<any>window)[objDescriptor.className]();
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
          let tipo = document.getType(nameProperty);

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
