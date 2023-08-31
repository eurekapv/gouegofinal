import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Location } from '../models/location.model';
import { ApicallService } from './apicall.service';
import { StartConfiguration } from '../models/start-configuration.model';
import { Sport } from '../models/sport.model';
import { CampoSport } from '../models/camposport.model';
import { SlotWeek } from '../models/imdb/slotweek.model';
import { RequestDecode, RequestParams } from '../library/models/requestParams.model';
import { DocstructureService } from '../library/services/docstructure.service';
import { LocationAppVisibility } from '../models/valuelist.model';



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

  constructor(
                private apiService:ApicallService,
                private docStructureService: DocstructureService
              ) { }

  /**
   * Richiede un elenco di location con idArea passato, e lo risolve direttamente, 
   * senza passare da nessun'altra parte (usa il nuovo docstructure per fare la richiesta)
   * @param idArea l'id dell'area
   */
  requestByIdArea(idArea: string): Promise<Location[]>{

    return new Promise((resolve, reject) => {
      let myFilter = new Location(true);
      myFilter.IDAREAOPERATIVA = idArea;
      myFilter.APPVISIBILITY = LocationAppVisibility.tutti;
  
      let myParams = new RequestParams();
      myParams.decode = new RequestDecode();
      myParams.decode.active = true;
  
      this.docStructureService.requestNew(myFilter, myParams)
                              .then(listLocation => {
                                this._listLocation.next(listLocation);
                                resolve (listLocation);
                              })
                              .catch(error => {
                                reject (error);
                              })

    })
  }


  /** 
   * Effettua la richiesta al server di una Location precisa
   * @param idLocation Location scelta 
   * 
   */
  requestLocationByID(idLocation: string, childLevel : number = 3) {
    return new Promise<Location>((resolve, reject)=>{

      let filterDoc: Location;
      let reqParams: RequestParams;

      if (idLocation && idLocation.length != 0) {

        filterDoc = new Location(true);
        filterDoc.ID = idLocation;

        reqParams = new RequestParams();
        reqParams.child_level = childLevel;

        this.docStructureService.requestNew(filterDoc, reqParams)
                                .then(listItems => {

                                  if (listItems && listItems.length !== 0) {

                                    //Emetto evento di cambio
                                    this._activeLocation.next(listItems[0]);
                                    resolve(listItems[0]);

                                  }     
                                  else
                                  {
                                    reject('location non trovata');
                                  } 
                                })
                                .catch(error => {
                                  reject(error);
                                })

      }
      else {
        reject('idLocation undefined');
      }
           
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

    if (docLocation && docLocation.CAMPO) {

      docLocation.CAMPO.forEach(elCampo => {

        //Sincronizzo informazioni sui campi
        this.syncInfoCampoSport(config, elCampo.ID)
                        .subscribe(resultData => {
  
                          if (resultData && Array.isArray(resultData)) {

                            //Ciclo sui risultati
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
                          }
  
          })
      });
    }

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
    let myParams = this.docStructureService.getHttpParams().set('IDCAMPO', idCampo);

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
