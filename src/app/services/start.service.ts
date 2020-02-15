import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { ApicallService } from './apicall.service';

import { StartConfiguration } from '../models/start-configuration.model';
import { Area } from '../models/area.model';
import { Location } from '../models/location.model';
import { Utente } from '../models/utente.model';
import { SportService } from './sport.service';
import { CategoriaetaService } from './categoriaeta.service';
import { CourseService } from './course.service';
import { FilterCorsi } from '../models/filtercorsi.model';
import { UtenteService } from './utente.service';
import { LivelloService } from './livello.service';
import { AreaService } from './area.service';

@Injectable({
  providedIn: 'root'
})
export class StartService {

  /* 
    Creo l'oggetto per iniziare la configurazione passando 
    testingMode = TRUE (verra chiamato un localhost e non gouego)
    secureProtocol = FALSE (chiamata http e non https)
  */
  private _startConfig = new BehaviorSubject<StartConfiguration>(new StartConfiguration(false,true));
  
  private _listLocation = new BehaviorSubject<Location[]>([]);
  
  
  get startConfig() {
    return this._startConfig.asObservable();
  }



  get listLocation() {
    return this._listLocation.asObservable();
  }





  constructor(private apiService: ApicallService,
    private sportService: SportService,
    private categoriaEtaService: CategoriaetaService,
    private corsoService: CourseService,
    private utenteService: UtenteService,
    private livelloService: LivelloService,
    private areaService: AreaService) { 

      // Mi iscrivo alle modifiche dell'Area Selezionata
      this.onChangeAreaSelezionata();

    }

  /** Effettua la chiamata WebAPI al Server per richiedere l'autorizzazione */
  requestStartAuthorization() {
    const myHeaders = new HttpHeaders({'Content-type':'text/plain'});
    const actualStartConfig = this._startConfig.getValue();
    const myParams = new HttpParams().set('APPID', actualStartConfig.appId);
    const doObject = 'GRUPPOSPORTIVO';

    let myUrl = actualStartConfig.urlBase + '/' + doObject;

    
    // Effettuo la chiamata per l'autorizzazione
    this.apiService
      .httpGet(myUrl, myHeaders, myParams)
      .pipe(map(fullData => {
        return fullData.GRUPPOSPORTIVO.find(singleData => singleData.ID == actualStartConfig.appId)
      }))
      .subscribe(resultData => {
        // Sistemo l'oggetto di configurazione 
        // ed emetto un evento di Cambio

        
        this.startConfig
          .pipe(take(1))
          .subscribe( element => {
            //Imposta l'autorizzazione dal gruppo
            element.setGruppoAuthorization(resultData);
            //Emetto l'evento di cambio
            this._startConfig.next(element);            

            //Passo a richiedere le Aree
            this.requestAree();

          });
      });
      

      
  }


  //#region AREE


    // NUOVA VERSIONE
    /**
     * Area Selezionata
     */
    get areaSelected() {
      return this.areaService.areaSelected;
    }

    /**
     * Elenco delle Aree
     */
    get listAree() {
      return this.areaService.listAree;
    }

    /**
     * Effettua la connessione al server per la richiesta delle Aree
     * e seleziona la prima area disponibile
     */
    requestAree() {
      const actualStartConfig = this._startConfig.getValue();

      this.areaService.request(actualStartConfig);
    }

    /**
     * Effettua la selezione di una Area
     * l'oggetto Observable areaSelected verrà emesso con un nuovo valore
     * @param idArea IDArea da selezionare
     */
    selectAreaByID(idArea: string) {
      this.areaService.selectAreaByID(idArea);
    }


    /**
     * Metodo per sottoscriversi al cambiamento dell'area selezionata
     */
    onChangeAreaSelezionata() {
      this.areaService.areaSelected
          .subscribe(newAreaSelected => {
            //Cambiando Area selezionata
            //Devo necessariamente recuperare le Location

            //Se il documento è in stato inserted non è ancora arrivato dal server
            if (!newAreaSelected.inserted) {
              this.requestLocation(newAreaSelected.ID);
            }
          })
    }



  //#endregion

  //#region LOCATIONS
    //Aggiunge una location
    addLocation(objLocation: Location) {
      this.listLocation
        .pipe(take(1))
        .subscribe( locations => {
          this._listLocation.next( locations.concat(objLocation))
        });
    }
    
    // Ritorno Observable di una Location
    getLocation(id: string) {
      return this.listLocation
              .pipe(take(1), map( locations => {
                return locations.find( loc => loc.ID == id)
              }));
    }


    /** Effettua la richiesta al server di una Location precisa
     * @param idLocation Location scelta 
     * 
     */
    requestLocationByID(idLocation: string) {
      let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
      const doObject = 'LOCATION';
      const actualStartConfig = this._startConfig.getValue();

      // In Testata c'e' sempre l'AppId
      myHeaders = myHeaders.set('APPID',actualStartConfig.appId);
      myHeaders = myHeaders.set('child-level',"2");

      // Nei parametri imposto l'Area Operativa
      let myParams = new HttpParams().set('ID', idLocation);

      let myUrl = actualStartConfig.urlBase + '/' + doObject;


      return this.apiService
                  .httpGet(myUrl, myHeaders, myParams)
                  .pipe(map(fullData => {
                    return fullData.LOCATION
                  }));
    }

  /** Richiesta delle Location di una Area */
  requestLocation(idArea: string) {
    let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
    const doObject = 'LOCATION';
    const actualStartConfig = this._startConfig.getValue();

    // In Testata c'e' sempre l'AppId
    myHeaders = myHeaders.set('APPID',actualStartConfig.appId);
    // Nei parametri imposto l'Area Operativa
    let myParams = new HttpParams().set('IDAREAOPERATIVA', idArea);

    let myUrl = actualStartConfig.urlBase + '/' + doObject;

    this.apiService
        .httpGet(myUrl, myHeaders, myParams)
        .pipe(map(fullData => {
          return fullData.LOCATION
        }))
        .subscribe(resultData => {

          //Cancello le Location
          this._listLocation.next([]);


          // Ciclo sull'Array
          for (let index = 0; index < resultData.length; index++) {
            const element = resultData[index];


            // Creo un Oggetto Location e lo aggiungo
            let newLocation = new Location();
            newLocation.setJSONProperty(element);
            newLocation.setOriginal();

            this.addLocation(newLocation);

          }

          //Posso far partire l'applicazione
          if (resultData.length !== 0) {

            // Memorizzo l'Area nell'oggetto
            this.startConfig
            .pipe(take(1))
            .subscribe( element => {

                // Applicazione Pronta
                element.ready = true;
                console.log('Ambiente Pronto');
                //Riemetto l'evento
                this._startConfig.next(element);
              
            });
          }
        });

    
  }
  //#endregion



//#region SPORT SERVICE

get listSport() {
  return this.sportService.listSport;
}

/**
 * Richiedo al servizio gli Sport
 * @param withLivelli Scaricamento con Livelli 
 */
requestSport(withLivelli?:boolean) {
  const actualStartConfig = this._startConfig.getValue();

  this.sportService
      .request(actualStartConfig, withLivelli);
            
}
//#endregion

//#region LIVELLI
get listLivelli() {
  return this.livelloService.listLivelli;
}

/**
 * Richiedo al servizio i Livelli
 */
requestLivelli() {
  const actualStartConfig = this._startConfig.getValue();

  this.livelloService
    .request(actualStartConfig);
}

//#endregion

//#region CATEGORIAETA

get listCategoriaEta() {
  return this.categoriaEtaService.listCategorieEta;
}

/**
 * Richiede al server le Categorie Eta
 */
requestCategorieEta() {
  const actualStartConfig = this._startConfig.getValue();

  this.categoriaEtaService
      .request(actualStartConfig);
            
}
//#endregion


//#region CORSO
/**
 * Elenco Corsi 
 */
get listCorsi() {
  return this.corsoService.listCorsi;
}

/**
 * Ritorno il filtro corsi impostato nel servizio
 */
get filterCorsi() {
  return this.corsoService.filterCorsi;
}

/**
 * Inizializza i filtri con la location
 * @param idLocation ID Location 
 */
initFilterCorsi(idLocation: string) {
  this.corsoService.initFilterCorsi(idLocation);
}

/**
 * Richiede al server le Categorie Eta
 * @param filter Filtri da applicare in ricerca
 */
requestCorsi(filter?: FilterCorsi) {
  const actualStartConfig = this._startConfig.getValue();

  this.corsoService
      .request(actualStartConfig, filter);
            
}
//#endregion

//#region UTENTE

get utente() {
  return this.utenteService.utente;
}

// Espone se l'utente è loggato 
get utenteLogged() {
  return this.utenteService.utenteLoggato;
}

/** Esegue la disconnessione */
logOffAccount() {
  // Avviso del login
  this.utenteService.logoff();
  
}

/**
 * Effettua la richiesta 
 * @param username Username Utente
 * @param password Password Utente
 */
requestAuthorization(username: string, 
                    password: string) {

  const actualStartConfig = this._startConfig.getValue();

  return this.utenteService.requestAuthorization(actualStartConfig, username, password);

}



/**
 * Richiede al server i dati Utente
 * @param idUtente IDUtente
 */
requestUtente(idUtente: string) {
  const actualStartConfig = this._startConfig.getValue();

  this.utenteService
      .request(actualStartConfig, idUtente);
            
}
//#endregion
}
