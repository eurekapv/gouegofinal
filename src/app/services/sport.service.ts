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
  private _listLocationSport = new BehaviorSubject<Sport[]>([]);

  //Lista di tutti gli sport presenti in Gouego
  get listSport() {
    return this._listSport.asObservable();
  }

  /**
  * Ritorna la lista non in modalità Observable
  */
  get actualListSport() {
    return this._listSport.getValue();
  }

  //Lista degli sport presenti in una location
  get listLocationSport() {
    return this._listLocationSport.asObservable();
  }


  constructor(private apiService: ApicallService) { 
    this._loaded = false;
  }

  /**
   * Richiede al server l'elenco delle Attività
   * @param config Parametri configurazione chiamata
   */
  request(config: StartConfiguration, withLivelli?:boolean) {
    return new Promise((resolve, reject)=>{
      let myHeaders = config.getHttpHeaders();
     
      const doObject = 'SPORT';

      //TODO: Non mi piace molto il modo
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

            if (resultData) {

              for (let index = 0; index < resultData.length; index++) {
                const element = resultData[index];
                let newSport = new Sport();
                newSport.setJSONProperty(element);
                this.add2ListSport(newSport);               
              }
              resolve(this._listSport);

            }
            else {
              reject('No data Attività retrieved');
            }
            
          }, error=>{
            reject(error);
          });
      }
      else {
        //Già caricati dal server
      }
      
    })

  }


  //Aggiunge una attivita alla lista globale
  add2ListSport(objSport: Sport) {

    this.listSport
      .pipe(take(1))
      .subscribe( collSport => {
        this._listSport.next( collSport.concat(objSport))
      });
    
  }


  /**
   * Richiede le attività praticate in una location
   * Sottoscriversi all'oggetto listLocationSport per ricevere i risultati
   * 
   * @param config Dati configurazione
   * @param idLocation Location
   */
  requestLocationSport(config: StartConfiguration, idLocation: string) {
    return new Promise((resolve, reject)=>{
      
        // const myHeaders = new HttpHeaders({'Content-type':'text/plain', 
        //                   'X-HTTP-Method-Override':'getSportLocation', 
        //                   'appid':config.appId,
        //                   'child-level': '1'
        //                   });

      let myHeaders = config.getHttpHeaders();
      const myParams = new HttpParams().set('idLocation', idLocation);
      const doObject = 'SPORT';
      myHeaders = myHeaders.append('X-HTTP-Method-Override','getSportLocation');
      myHeaders = myHeaders.append('child-level', '1');

      let myUrl = config.urlBase + '/' + doObject;

      //Svuoto gli attuali
      this._listLocationSport.next([]);

      // Effettuo la chiamata
      return this.apiService
                .httpGet(myUrl, myHeaders, myParams)
                .pipe(map(data => {
                        return data.SPORT
                      }))
                .subscribe(resultData => {

                      resultData?.forEach(element => {
        
                        let newSport = new Sport();
                        newSport.setJSONProperty(element);
                        this.add2ListLocationSport(newSport);
                        
                      });

                      resolve(this._listLocationSport);
                }, error=>{
                  reject(error);
                });
    })
    }


    //Aggiunge una attivita alla lista globale
    add2ListLocationSport(objSport: Sport) {

      this.listLocationSport
            .pipe(take(1))
            .subscribe( collSport => {
                  this._listLocationSport.next( collSport.concat(objSport))
            });
      
    }


    /**
   * Dato l'id di uno sport, restituisce la stringa dell'icona associata
   * @param idSport l'id dello sport
   */
  getIconaSport(idSport: string){
    let listSport = this._listSport.getValue();
    let icona='';
    let docSport: Sport;

    if(listSport){

      //Cerco lo Sport nella collection
      docSport = listSport.find(el => {
        return el.ID == idSport
      });

      //Sport trovato applico l'icona
      if (!docSport) {
        //Ne creo uno fasullo
        docSport = new Sport();
      }

      //Ricavo l'icona
      icona = docSport.htmlIconHex
      
    }
    return icona;
  }

}
