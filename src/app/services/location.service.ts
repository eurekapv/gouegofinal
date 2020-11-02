import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take, max } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { Location } from '../models/location.model';
import { ApicallService } from './apicall.service';
import { StartConfiguration } from '../models/start-configuration.model';
import { Sport } from '../models/sport.model';
import { CampoSport } from '../models/camposport.model';
import { SlotWeek } from '../models/imdb/slotweek.model';
import { LoadingController } from '@ionic/angular';
import { error } from 'protractor';
import { LogApp } from '../models/log.model';



@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private _listLocation = new BehaviorSubject<Location[]>([]);
  private _decodeListSport: Sport[]; //Lista di Decodifica degli Sport
  private _activeLocation = new BehaviorSubject<Location>(new Location());
  //VARIABILI PER PRENOTAZIONI


  get listLocation() {
    return this._listLocation.asObservable();
  }

  set decodeListSport(value: Sport[]) {
    this._decodeListSport = value;
  }

  get activeLocation() {
    return this._activeLocation.asObservable();
  }

  constructor(private apiService:ApicallService,
              private loadingCtrl: LoadingController) { }



  /**
   * Recupero delle Location di un'area
   * @param config Parametri di configurazione
   * @param idArea Area di riferimento
   */
  requestByIdArea(config: StartConfiguration, idArea: string) {
    return new Promise((resolve, reject)=>{
      let myHeaders = config.getHttpHeaders();
      //new HttpHeaders({'Content-type':'text/plain'});
      const doObject = 'LOCATION';
      

      // Nei parametri imposto l'Area Operativa
      let myParams = new HttpParams().set('IDAREAOPERATIVA', idArea);
  
      let myUrl = config.urlBase + '/' + doObject;
  
      this.apiService
          .httpGet(myUrl, myHeaders, myParams)
          .pipe(map(fullData => {
            return fullData.LOCATION
          }))
          .subscribe(resultData => {
  
            //Cancello le Location
            this._listLocation.next([]);
  
            //Inserisco le location
            this._addMultipleLocation(resultData);
            resolve();
  
          },error=>{
            reject(error);
          });
      
    })
  }


    /** Effettua la richiesta al server di una Location precisa
   * @param idLocation Location scelta 
   * 
   */
  requestLocationByID(config: StartConfiguration, idLocation: string, _numLivelli?:number) {
    return new Promise<Location>((resolve, reject)=>{
      let myHeaders = config.getHttpHeaders();
      //new HttpHeaders({'Content-type':'text/plain'});
      const doObject = 'LOCATION';
  
      if (!_numLivelli) {
        _numLivelli = 3;
      }
  

      myHeaders = myHeaders.set('child-level',_numLivelli + '');
  
      // Nei parametri imposto l'Area Operativa
      let myParams = new HttpParams().set('ID', idLocation);
  
      let myUrl = config.urlBase + '/' + doObject;
  
        this.apiService
                    .httpGet(myUrl, myHeaders, myParams)
                    .pipe(map(fullData => {                
                      return fullData.LOCATION;
                    }))
                    .subscribe(resultData => {
                      let locReturn: Location;
                      
                      if (resultData && resultData.length !== 0) {
                        
                        locReturn = new Location();
                        locReturn.setJSONProperty(resultData[0]);
                        
                        //Emetto evento di cambio
                        this._activeLocation.next(locReturn);
                        resolve(locReturn);
                      }     
                      else
                      {
                        reject('location non trovata');
                      }             
                    }, error=>{
                      reject (error);
                    });      
    })
  }

  /**
   * Aggiunge un insieme di elementi all'array delle Location
   * @param dataJSON JSON Received
  */
  private _addMultipleLocation(dataJSON: any) {
    
    if (dataJSON) {
      dataJSON.forEach(element => {
        let newLocation = new Location();
        newLocation.setJSONProperty(element);

        this.listLocation
          .pipe(take(1))
          .subscribe( collLocation => {
            this._listLocation.next( collLocation.concat(newLocation));
          });
      });
    }
  }

  //#region SINCRONIZZAZIONE CON CAMPI SPORT

  /**
   * Richiede al Server le informazioni sulle tipologie dei Campi (e Attività Svolte)
   * @param config Parametri di configurazione
   * @param docLocation Location da Completare con i campi Sport
   */
  syncInfoCampi(config: StartConfiguration, 
                docLocation: Location
                ) {
    //Elimino le informazioni precedenti dei Campi Sport
    docLocation.emptyCampiSport();

    //Creo un Observable
    let myLocation = new BehaviorSubject<Location>(docLocation);

    docLocation.CAMPO.forEach(elCampo => {
      this.syncInfoCampoSport(config, elCampo.ID)
        .subscribe(resultData => {

          resultData.forEach(elCampoSport => {

            let docCampoSport = new CampoSport();
            docCampoSport.setJSONProperty(elCampoSport);
            docCampoSport.lookup('IDSPORT',this._decodeListSport, 'DENOMINAZIONE');
            
            myLocation
            .pipe(take(1))
            .subscribe( docLocation => {
              docLocation.addCampoSport(docCampoSport, elCampo.ID);

              myLocation.next(docLocation);
            }

            );

          });

        })
    });

    return myLocation.asObservable();

  }

  /**
   * Sincronizzo le informazioni degli sport dei campi
   */
  syncInfoCampoSport(config: StartConfiguration, idCampo: string) {
    let myHeaders = config.getHttpHeaders();
    //new HttpHeaders({'Content-type':'text/plain'});
    const doObject = 'CAMPOSPORT';

    // Nei parametri imposto il Campo
    let myParams = new HttpParams().set('IDCAMPO', idCampo);

    let myUrl = config.urlBase + '/' + doObject;


    return this.apiService
                .httpGet(myUrl, myHeaders, myParams)
                .pipe(map(fullData => {
                  return fullData.CAMPOSPORT
                }));
  }


  /**
   * Ritorna la Location presente in memoria
   * @param idLocation Location cercata
   */
  findLocationByID(idLocation: string) {
    let arLocation = this._listLocation.getValue();
    
    return arLocation.find(element => {
      return element.ID == idLocation
    });
  }
  //#endregion


  //#region PRENOTAZIONE

  /**
   * Data la Location, ritorna il template settimanale con gli slot time da applicare 
   * (Default Slot Time)
   * Andranno poi attualizzati ulteriormente
   * @param docLocation Location da utilizzare
   */
  getTemplateSlotWeek(docLocation: Location): SlotWeek {
    let weekTemplate = new SlotWeek();
    
    weekTemplate.IDAREAOPERATIVA = docLocation.IDAREAOPERATIVA;
    weekTemplate.IDLOCATION = docLocation.ID;

    if (docLocation.MINUTISLOTPRENOTAZIONE) {
      weekTemplate.SLOTMINUTES = docLocation.MINUTISLOTPRENOTAZIONE;
    }

    //Inizializzo con i giorni
    weekTemplate.initDays();

    //Ciclo sulle Aperture Location per poter impostare l'orario minimo e massimo per ogni giorno
    docLocation.APERTURALOCATION.forEach(elApertura => {
      
      let daySlot = weekTemplate.getSlotDay(elApertura.GIORNO);
      let minDateTime: Date;
      let maxDateTime: Date;

      let middleMinTime: Date;
      let middleMaxTime: Date;

      //APERTO
      if (elApertura.APERTOCHIUSO) {

        daySlot.APERTOCHIUSO = true;
        
        //Imposto orari standard di apertura
        daySlot.setStandardTime();

        //Ora devo recuperare ora iniziale e finale definite 
        //sulla apertura location
        minDateTime = elApertura.getOrario('min');
        maxDateTime = elApertura.getOrario('max');

        middleMinTime = elApertura.getOrario('middleMin');
        middleMaxTime = elApertura.getOrario('middleMax');

        //Imposto gli orari di inizio e fine se ci sono
        if (minDateTime && maxDateTime) {
          daySlot.STARTTIME = minDateTime;
          daySlot.ENDTIME = maxDateTime;

          //se ci sono gli orari intermedi, li imposto
          if (middleMaxTime && middleMinTime){
           daySlot.setChiusuraIntermedia(middleMinTime, middleMaxTime);
          }
  

        }
        else {
          //Vuol dire che è aperto tutto il giorno
          let adesso = new Date();
          daySlot.STARTTIME = new Date(adesso.getFullYear(), adesso.getMonth(), adesso.getDate(), 0,0,0);
          daySlot.ENDTIME = new Date(adesso.getFullYear(), adesso.getMonth(), adesso.getDate(), 23,59,59);
          
        }

      }
      else {
        daySlot.APERTOCHIUSO = false;
      }
      
    });

    //Ora per tutti i giorni del template devo creare tutti gli slottime
    weekTemplate.createSlotTimeDays();

    return weekTemplate;
  }

  //#endregion
}
