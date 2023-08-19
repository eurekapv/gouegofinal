import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

import { Storage } from '@ionic/storage';

import { ApicallService } from './apicall.service';
import { SportService } from './sport.service';
import { CategoriaetaService } from './categoriaeta.service';
import { CourseService } from './course.service';
import { FilterCorsi } from '../models/filtercorsi.model';
import { UtenteService } from './utente.service';
import { LivelloService } from './livello.service';
import { AreaService } from './area.service';
import { LocationService } from './location.service';
import { CourseschedulerService } from './coursescheduler.service';

import { PrenotazioneService } from './prenotazione.service';
import { NewseventiService } from './newseventi.service';
import { SlotoccupazioneService } from './slotoccupazione.service';


import { StartConfiguration, StartAuthorization } from '../models/start-configuration.model';

import { Location } from '../models/location.model';
import { Utente, storageUtente } from '../models/utente.model';
import { LogApp } from '../models/log.model';
import { SlotDay } from '../models/imdb/slotday.model';
import { Campo } from '../models/campo.model';
import { PrenotazionePianificazione } from '../models/prenotazionepianificazione.model';
import { Prenotazione } from '../models/prenotazione.model';
import { UtenteprenotazioneService } from './utenteprenotazione.service';
import { UtenteiscrizioneService } from './utenteiscrizione.service';
import { Platform } from '@ionic/angular';

import { CodicefiscaleService } from './codicefiscale.service';
import { CodiceFiscale } from '../models/codicefiscale.model';
import { Mansione, RangeSearch, TimeTrainerCourse, TipoArticolo, TipoPrivateImage } from 'src/app/models/valuelist.model'
import { AccountRequestCode, AccountOperationResponse, AccountVerifyCode } from '../models/accountregistration.model';
import { OccupazioniService } from './occupazioni.service';

import { DocstructureService } from '../library/services/docstructure.service';
import { OccupazioneCampi } from '../models/occupazionecampi.model';
import { RequestParams } from '../library/models/requestParams.model';
import { DocumentoService } from './documento.service';
import { PianificazioneCorso } from '../models/pianificazionecorso.model';
import { InvoicesService } from './invoices.service';
import { PosizioneService } from './posizione.service';
import { Area } from '../models/area.model';
import { MasterDocumento } from '../models/ricevuta.model';
import { PostResponse } from '../library/models/postResult.model';
import { DataChiusuraService } from './data-chiusura.service';
import { DataChiusura } from '../models/datachiusura.model';

import { PlatformLocation } from '@angular/common';
import { Gruppo } from '../models/gruppo.model';
import { CorsoallegatoService } from './corsoallegato.service';

import { CorsoAllegato } from '../models/corsoallegato.model';
import { IscrizionecorsoService } from './iscrizionecorso.service';
import { IscrizioneCorso } from '../models/iscrizionecorso.model';
import { CorsoValutazioneService } from './corso-valutazione.service';
import { CorsoValutazione } from '../models/corsovalutazione.model';
import { Livello } from '../models/livello.model';
import { PhotoService, PhotoType } from './photo.service';
import { SmartInterfaceService } from './smart-interface.service';
import { AlertButton, SpinnerTypes } from "@ionic/core";
import { Browser } from '@capacitor/browser';
import { ConnectionMode, environment } from 'src/environments/environment';
import { TipoTesseraService } from './tipo-tessera.service';
import { TipoTessera } from '../models/tipo-tessera';
import { TesseramentoService } from './tesseramento.service';
import { EventoService } from './evento.service';
import { ImpegnoService } from './impegno.service';
import { ImpegnoCollaboratoreService } from './impegno-collaboratore.service';
import { ImpegnoCustodeService } from './impegno-custode.service';
import { Evento } from '../models/evento.model';
import { ImpegnoCustode } from '../models/impegno-custode.model';
import { ArticoloService } from './articolo.service';
import { Articolo } from '../models/articolo.model';

@Injectable({
  providedIn: 'root'
})
export class StartService {

  //Oggetto contentente la configurazione
  private _startConfig = new BehaviorSubject<StartConfiguration>(new StartConfiguration());

  /* Valorizzata a TRUE quando l'app è pronta a partire */
  private _appReady = new BehaviorSubject<boolean>(false);
  private listenLocation: Subscription;
  
  //Determina se la connessione sarà a un database locale, o al server
  private _localConnection = false;

  private _forceIdAreaOnLogin = ''; //Se impostato è l'area da mantenere a seguito del login (Usata quando nella booking non sono loggatto, e al termine devo rimanere sull'area)
  
  get appReady() {
    return this._appReady.asObservable();
  }

  get startConfig() {
    return this._startConfig.asObservable();
  }

  get actualStartConfig(){
    return this._startConfig.getValue();
  }

  //Ritorna se l'applicazione sta girando su desktop
  get isDesktop() {
    return !this.platformService.is('hybrid');
  }

  //Ritorna se l'applicazione sta girando dentro al web, quindi non in capacitor o cordova
  get isOnWeb() {
    let result = true;
    if (this.platformService.is("cordova") || this.platformService.is("capacitor")) {
      result = false;
    }

    return result;
  }

  /**
   * Controlla l'esecuzione su IOS
   */
  get isOnAppleSystem() {
    let result = true;
    if (this.platformService.is("ios")) {
      result = false;
    }

    return result;
  }

  /**
   * Controlla l'esecuzione su IOS
   */
   get isOnAndroidSystem() {
    let result = true;
    if (this.platformService.is("android")) {
      result = false;
    }

    return result;
  }  

  /**
   * Prende l'Area Attiva e la imposta nella proprietà
   * _forceIdAreaOnLogin 
   * Quando il valore della proprietàè settato, a seguito del Login bisogna rimanere su questa area
   */
  setIdAreaForcedForLogin() {
    if (this.areaService.areaSelectedValue) {
      this._forceIdAreaOnLogin = this.areaService.areaSelectedValue.ID;
    }
    else {
      this._forceIdAreaOnLogin = '';
    }
  }


  constructor(private platformService: Platform,
    private apiService: ApicallService,
    private storageAccess: Storage,
    private sportService: SportService,
    private categoriaEtaService: CategoriaetaService,
    private corsoService: CourseService,
    private utenteService: UtenteService,
    private livelloService: LivelloService,
    private areaService: AreaService,
    private locationService: LocationService,
    private corsoCalendarioService: CourseschedulerService,
    private prenotazioniService: PrenotazioneService,
    private newsEventiService: NewseventiService,
    private slotOccupazioneService: SlotoccupazioneService,
    private utentePrenotazioneService: UtenteprenotazioneService,
    private utenteIscrizioneService: UtenteiscrizioneService,
    private codFiscService: CodicefiscaleService,
    private occupazioniService: OccupazioniService,
    private docStructureService: DocstructureService,
    private documentoService: DocumentoService,
    private invoicesService: InvoicesService,
    private posizioneService: PosizioneService,
    private dataChiusuraService: DataChiusuraService,
    private urlLocation: PlatformLocation,
    private corsoAllegatoService: CorsoallegatoService,
    private iscrizioneCorsoService: IscrizionecorsoService,
    private corsoValutazioneService: CorsoValutazioneService,
    private photoService: PhotoService,
    private srvSmartInterface: SmartInterfaceService,
    private srvTipoTessere: TipoTesseraService,
    private srvTesseramento: TesseramentoService,
    private eventoService: EventoService,
    private impegniService: ImpegnoService,
    private impegniCollaboratoreService: ImpegnoCollaboratoreService,
    private impegniCustodeService: ImpegnoCustodeService,
    private articoloService: ArticoloService
    ) { 

      //Ogni volta che cambia la configurazione la invio 
      //al servizio docStructure
      this.startConfig.subscribe(elConfig => {
        this.docStructureService.setConfig(elConfig);
      });

  }

  //#region FUNZIONI START

  /**
   * PRIMO STEP DI CONFIGURAZIONE
   * 
   * //TODO: QUESTO METODO E' IMPORTANTE PERCHE' INSTRADA L'APPLICAZIONE 
   * A SECONDA SE SIAMO SU CAPACITOR/CORDOVA AL CORRETTO APP ID
   * In caso di Capacitor/Cordova bisogna impostare il valore myAppId a mano
   * Negli altri casi, l'appid viene recuperato grazie all URL di chiamata
   * 
   * Impostazioni iniziali
   * 1) _localConnection -> TRUE per modalità di debug e punta ai database in locale
   * 2) prefixDomain -> prefisso letto sull'url
   * 3) myAppId -> Application id da utilizzare (modo automatico o manuale)
   */
  settingStartStepOne() {
    let myUrl = '';
    let myAppId = '';    
    let arUrl = [];
    let prefixDomain = '';


    //Recupero lo StartConfig, cosi da modificarlo al termine
    let myConfig = this._startConfig.getValue();
    let activeId = '';

    //Unico console log da mantenere
    console.log(`App Version ${environment.version} deployed ${environment.releaseDate}`);

    //Modalità Web
    if (this.isOnWeb) {

      this._localConnection = (environment.connection.mode == ConnectionMode.local);

      //Connessione al server locale
      if (this._localConnection) {
        //Recupero l'activeId
        activeId = environment.connection.activeId;
        //Recupero il relativo AppId
        myAppId = environment.connection.customer[activeId].appId;
      }
      else {
        //Recupero URL del browser
        myUrl = this.urlLocation.hostname;

        if (myUrl == 'localhost') {
          //Sono in debug mode ma voglio puntare fuori
          //Recupero l'activeId
          activeId = environment.connection.activeId;
          //Recupero il relativo AppId
          myAppId = environment.connection.customer[activeId].appId;
        }
        else {
          //Prendo URL e lo separo
          arUrl = myUrl.split('.');
  
          if (arUrl.length != 0) {
            //Prendo il prefisso e sulla base di questo ricavo l'AppID
            prefixDomain = arUrl[0];
          }        
        }


      }
    }
    else {
      //MODALITA CAPACITOR
      
      //Non è mai in localconnection
      this._localConnection = false;
      //Recupero l'activeId
      activeId = environment.connection.activeId;
      //Recupero il relativo AppId
      myAppId = environment.connection.customer[activeId].appId;

      //Sono su capacitor o cordova
      prefixDomain = '';

    }

    /* VECCHIA VERSIONE SENZA ENVIRONMENT
    //Modalità Web
    if (this.isOnWeb) {

        //Qui posso cambiare strategia per puntare localmente
        //this._localConnection = true;
        this._localConnection = false;

        if (this._localConnection) {
          //Modalità di Test metto un AppId di test
          myAppId = '00F15A91-5395-445C-B7F4-5BA594E55D2F';
        }
        else {

          //Recupero URL del browser
          myUrl = this.urlLocation.hostname;
  
          //Simulazione URL
          myUrl = 'demo.gouego.com';
  
          //Sto aprendo in localhost ma voglio far puntare al server
          //ancora una volta metto un appId fisso
          if (myUrl == 'localhost') {
            
            myAppId = '00F15A91-5395-445C-B7F4-5BA594E55D2F'; //Demo AppId
            //myAppId ='CCBA34A5-24F5-4C22-8485-D891823E3434'; //OpenBeach AppId
            // myAppId = 'FD291600-D873-49CF-A90C-525926CA2CDC'; //Key Element

          }
          else {
            //Prendo URL e lo separo
            arUrl = myUrl.split('.');

            if (arUrl.length != 0) {

              //Prendo il prefisso e sulla base di questo ricavo l'AppID
              prefixDomain = arUrl[0];

            }
          }

        }
    }
    else {

      console.log('Capacitor Step');
      //Non è mai in localconnection
      this._localConnection = false;


      //VALORIZZARE L'APP ID PER CAPACITOR
      //TODO: VALORIZZARE APPID PER INSTALLAZIONE CAPACITOR
      //myAppId = 'CCBA34A5-24F5-4C22-8485-D891823E3434'; //OpenBeach
      myAppId = '00F15A91-5395-445C-B7F4-5BA594E55D2F'; //Demo AppId
      
      

      //Sono su capacitor o cordova
      prefixDomain = '';
    }
    */

    //Imposto gli Url utilizzati nelle chiamate
    myConfig.setUrlLocation();

    //Reimposto Observable
    this._startConfig.next(myConfig);

    //Il secondo step si preoccupa di ricavare l'app id se mancante, 
    //Impostare i dati nell'oggetti startConfiguration
    //ed iniziare la comunicazione server
    this.settingStartStepTwo(prefixDomain, myAppId);

  }

  /**
   * SECONDO STEP DI CONFIGURAZIONE
   * Il metodo tenta il recupero di un appId se non ne possiede già uno, e se prefixdomain vale qualcosa
   */
  settingStartStepTwo(prefixDomain: string, myAppId: string) {

    let docGruppo = new Gruppo(true);
    let params = new RequestParams();

    if (myAppId.length == 0) {

      if (prefixDomain.length != 0) {
        //Chiedo al server 
        //Preparo il documento di filtro
        docGruppo.PREFIXDOMAIN = prefixDomain;

        //Effettuo la chiamata
        this.docStructureService.requestNew(docGruppo)
          .then(collGruppo => {
            //Vediamo appId ricevuto
            let appIdReceived = '';

            if (collGruppo) {

              let myList: Gruppo[] = collGruppo;
              let myGruppo: Gruppo; 

              //Se riesco recupero appID
              if (myList && myList.length != 0) {
                myGruppo = myList[0];
                appIdReceived = myGruppo.APPID;

              }  
            }

            //Step 3 (Se il valore passato è '' siamo in errore)
            this.settingStartStepThree(appIdReceived);
          })
          .catch(error => {
            
            LogApp.consoleLog(error,'error');

            //Vado allo Step 3 in errore passando stringa vuota
            this.settingStartStepThree('');
          })

      }
      else {
        //Non ho AppId e non ho trovato modo di leggere URL

        //Vado allo Step 3 in errore passando stringa vuota
        this.settingStartStepThree('');

      }
    }
    else {
      //Sono già in possesso dell'AppId
      this.settingStartStepThree(myAppId);
    }
  }

  /**
   * Fase finale di Start
   * Se il valore di myAppID = '', siamo in errore
   */
  settingStartStepThree(myAppId: string) {

    //Recupero lo StartConfig, cosi da modificarlo al termine
    let myConfig = this._startConfig.getValue();

    myConfig.appId = myAppId;
    
    //Reimposto Observable
    this._startConfig.next(myConfig);

    this.requestStartAuthorization();

  }


    /** Effettua la chiamata WebAPI al Server per richiedere l'autorizzazione */
  requestStartAuthorization() {

      const doObject = 'AUTHORIZATION';
      const method = 'requestAuthorization';

      const actualStartConfig = this._startConfig.getValue();
      //Ricavo gli Header da impostare
      let myHeaders = actualStartConfig.getHttpHeaders();
      myHeaders = myHeaders.append('X-HTTP-Method-Override', method);

      //Aggiungo i parametri di chiamata
      let myParams = new HttpParams().set('withimages', '1');
      myParams = myParams.append('withoptions','1');

      //Url da chiamare
      let myUrl = actualStartConfig.urlBase + '/' + doObject;
  
      LogApp.consoleLog(myUrl);
      LogApp.consoleLog(JSON.stringify(myHeaders));

      // Effettuo la chiamata per l'autorizzazione
      this.apiService
        .httpGet(myUrl, myHeaders, myParams)
        .subscribe(resultData => {

          let objAuth: StartAuthorization = resultData;

          if (objAuth.result == -1 && objAuth.authcode && objAuth.authcode.length != 0) {

            // Sistemo l'oggetto di configurazione 
            // ed emetto un evento di Cambio
            this.onAuthorizationGrant(objAuth);

          }
          else {
            LogApp.consoleLog('Authorization failed','error');
          }
        },error => {
          LogApp.consoleLog('Comunication Error','error');
          LogApp.consoleLog(error,'error');
        });
        
  
        
    }

  //Autorizzazione ricevuta
  onAuthorizationGrant(objAuth: StartAuthorization) {

    let elStartConfig = this._startConfig.getValue();

    //Scrivo in console
    LogApp.consoleLog('Autorizzazione ricevuta');


    //Sistemazione del Gruppo nell'oggetto di configurazione
    elStartConfig.setGruppoAuthorization(objAuth.GRUPPOSPORTIVO);
    //Sistemazione dell'authorization code da usare
    elStartConfig.authorizationAppCode = objAuth.authcode;

    //Emetto l'evento di cambio
    this._startConfig.next(elStartConfig);

    //Passo a richiedere le Aree
    this.requestAree();

    // Mi iscrivo alle modifiche dell'Area Selezionata
    this.onChangeAreaSelezionata();

    //Operazioni ulteriori a seguito dell'autorizzazione
    this.onAfterAuthorization();
  }    



  /**
   * Alcune operazioni a seguito dell'autorizzazioni
   */
  onAfterAuthorization() {

    //0- RECUPERO LE CHIUSURE DEL GRUPPO
    this.dataChiusuraService.request()
                  .then((listChiusure: DataChiusura[]) => {
                  });

    // 1- CHIEDO ELENCO SPORT, LIVELLI, CATEGORIEETA che mi servono sempre
    let elStartConfig = this._startConfig.getValue();

    this.sportService
      .request(elStartConfig, false)
      .catch(error => {
        LogApp.consoleLog(error,'error');
      });

    this.livelloService
      .request(elStartConfig)
      .catch(error => {
        LogApp.consoleLog(error,'error');
      });

    this.categoriaEtaService
        .request(elStartConfig)
        .catch(error => {
          LogApp.consoleLog(error,'error');
        });

    // 2 - TENTO L'ACCESSO AUTOMATICO
    this.loadStorageUtente();

  }

  //#endregion


  //#region AREE
    
    /**
     * Area Selezionata, in versione Observable
     */
    get areaSelected() {
      return this.areaService.areaSelected;
    }

    /** Area Selezionata non Observable */
    get areaSelectedValue() {
      return this.areaService.areaSelectedValue;
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

      return this.areaService.request(actualStartConfig);
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
              
              //Richiedo al server le Location
              this.requestLocation(newAreaSelected.ID);

              //Chiedo la situazione dell' AppReady
              let actualAppReady = this._appReady.getValue();
              if (!actualAppReady) {
                //Applicazione non ancora pronta

                //Mi sottoscrivo per capire quando posso partire
                //appena sono arrivate le location
                this.listenLocation = this.locationService.listLocation
                      .subscribe(data => {
                        if (data.length !== 0) {
                          //App entra in stato pronto
                          this._appReady.next(true);


                          LogApp.consoleLog('Avvio AppReady');

                          //Dopo che l'app è partita in questo contento non 
                          //mi serve piu sapere lo state Location
                          this.listenLocation.unsubscribe();
                        }
                });
              }

            }
          })
    }

    /**
     * Effettua la richiesta di un'area precisa
     * @param idArea 
     * @param numChild 
     */
    requestAreaById(idArea: string, numChild: number = 0): Promise<Area> {
      return this.areaService.requestAreaById(idArea, numChild);
    }


  //#endregion

  //#region LOCATIONS
  

  get listLocation() {
    return this.locationService.listLocation;
  }

  /**
   * Ritorna la location attiva
   */
  get activeLocation() {
    return this.locationService.activeLocation;
  }

  /**
   * Richiesta al server di tutte le location dell'area
   * @param idArea Area selezionata
   */
  requestLocation(idArea: string) {
    const actualStartConfig = this._startConfig.getValue();
    
    return this.locationService.requestByIdArea(actualStartConfig, idArea);
  }

  newRequestLocation(idArea: string){
    return this.locationService.newRequestByIdArea(idArea);
  }

  /** Effettua la richiesta al server di una Location precisa
   * @param idLocation Location scelta 
   * 
   */
  requestLocationByID(idLocation: string, _numLivelli?:number):Promise<Location> {
    const actualStartConfig = this._startConfig.getValue();
    
    return this.locationService.requestLocationByID(actualStartConfig, idLocation, _numLivelli);
  }

  /**
   * Cerca nel servizio la Location desiderata
   * NON OBSERVABLE
   * @param idLocation IDLocation cercata
   */
  findLocationByID(idLocation: string) {
    return this.locationService.findLocationByID(idLocation);
  }

  /**
   * 
   * @param selectedLocation Location richiesta
   */
  requestLocationCampiSport(selectedLocation: Location) {
    const listSport = this.sportService.actualListSport;
    const actualStartConfig = this._startConfig.getValue();

    //Inietto nel servizio la decodifica della Lista Sport
    this.locationService.decodeListSport = listSport;

    return this.locationService
               .syncInfoCampi(actualStartConfig, selectedLocation);
  }


  /**
   * Ritorna il template Week con tutti i giorni della settimana e gli SlotTime da applicare
   * in una prenotazione
   * (Schema di Default che andrà successivamente attualizzato con le info di occupazione e
   * chiusura specifica per festività etc)
   * @param docLocation Location richiesta
   */
  getTemplateSlotWeek(docLocation: Location) {

    return this.locationService.getTemplateSlotWeek(docLocation);

  }
  
  /**
  * Nel caso debba navigare verso una location utilizzare questo metodo per 
  * avere il percorso corretto
  * 
  * Url pagina per andare verso una location
  * @param idLocation Location di riferimento
  * @param where Cosa si desidera effettuare con la location
  */
  getUrlPageLocation(idLocation: string, where: 'book' | 'detail' | 'course'): string[] {
      let retPath = ['/','appstart-home','tab-home','location'];

      switch (where) {
        case 'detail':
          retPath.push('detail');
          retPath.push(idLocation);
          break;
        case 'book':
          retPath.push('booking');
          retPath.push(idLocation);
          break;          
          break;
        case 'course':
          break;
      
        default:
          break;
      }
  
      return retPath;
  }

  //#endregion


//#region SPORT SERVICE

/**
 * Richiede in modalità Observable l'elenco degli sport
 */
get listSport() {
  return this.sportService.listSport;
}

/**
 * Lista degli sport in modalità non observable
 */
get actualListSport() {
  return this.sportService.actualListSport;
}


/**
 * Dato l'id di uno sport, ritorna l'icona
 * @param idSport l'id dello sport
 */
getSportIcon(idSport:string){
  return this.sportService.getIconaSport(idSport);
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

/**
 * Proprietà per gli Sport di una Location
 */
get listLocationSport() {
  return this.sportService.listLocationSport;
}

/**
 * Richiede al server i dati degli Sport in una location
 * @param config Dati configurazione
 * @param idLocation idLocation selezionata
 */
requestLocationSport(idLocation: string) {
  const actualStartConfig = this._startConfig.getValue();

  //Effettuo la chiamata
  return this.sportService.requestLocationSport(actualStartConfig, idLocation);
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

  return this.livelloService
    .request(actualStartConfig);
}


/**
 * Richiede al server l'elenco dei Livelli per lo sport
 * @param idSport Sport da analizzare
 */
requestLivelliForSport(idSport: string):Promise<Livello[]> {
  return this.livelloService.requestLivelliForSport(idSport);
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

isValidCategorieEta(idCategoria: string, eta: number): boolean {
  return this.categoriaEtaService.isValid(idCategoria, eta);
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
 * Elenco Corsi richiesti da un trainer
 */
 get listCorsiTrainer() {
  return this.corsoService.listCorsiTrainer;
}

/**
 * Ritorno il filtro corsi impostato nel servizio
 */
get filterCorsi() {
  return this.corsoService.filterCorsi;
}

/**
 * Imposta i filtri corsi nel servizio
 */
set filterCorsi(value: FilterCorsi) {
  this.corsoService.filterCorsi = value;
}

/**
 * Inizializza e ritorna nuovi Filtri con l'impostazione della location
 * @param idLocation ID Location 
 */
newFilterCorsi(idLocation: string) {
  return this.corsoService.newFilterCorsi(idLocation);
}



requestCorsoById(idCorso: string){
  const actualStartConfig = this._startConfig.getValue();
  return this.corsoService.requestById(actualStartConfig, idCorso);
}

newRequestCorsoById(idcorso: string){
  return this.corsoService.newRequestById(idcorso);
}

/**
 * Effettua la chiamata al server per ottenere i corsi riferiti al trainer
 * Risultato nell'Observable listCorsiTrainer
 * 
 * @param idTrainer Trainer
 * @param timeState Corsi richiesti
 */
 requestTimeTrainerCourse(idTrainer: string, timeState: TimeTrainerCourse):void {
   this.corsoService.requestTimeTrainerCourse(idTrainer, timeState);
 }

//#region PIANIFICAZIONI CORSI

  /**
   * Ritorna il calendario di un corso
   */
  get calendarioCorso() {
    return this.corsoCalendarioService.calendarioCorso;
  }

  /**
   * Richiede al server la pianificazione del Corso
   * @param idPianificazioneCorso 
   * @returns 
   */
  requestPianificazioneCorso(idPianificazioneCorso: string): Promise<PianificazioneCorso> {
    return this.corsoCalendarioService.requestPianificazione(idPianificazioneCorso);
  }

  /**
   * Richiesto il calendario del corso
   * @param idCorso Corso richiesto
   */
  requestCalendarioCorso(idCorso: string) {
    const actualStartConfig = this._startConfig.getValue();

    return this.corsoCalendarioService.requestCalendario(actualStartConfig, idCorso);
  }

  requestImpegniTrainerOLD(idRef: string, dataInizio: Date, dataFine?: Date){
    return this.corsoCalendarioService.requestImpegniTrainer(idRef,dataInizio,dataFine);
  }

  /**
   * Recupera un elemento "impegno del trainer" con l'id specificato. ATTENZIONE: devo prima aver eseguito il metodo requestImpegniTrainer
   * @param idPianificazione l'id della pianificazione da recuperare
  */
  getPianificazioneTrainerById(idPianificazione: string){
    return this.corsoCalendarioService.getPianificazioneTrainerById(idPianificazione);
  }

  insertPresenzeIntoPianificazione(docPianificazione: PianificazioneCorso){
    return this.corsoCalendarioService.insertPresenze(docPianificazione);
  }

  requestUpdatePresenze(docPianificazione: PianificazioneCorso){
    return this.corsoCalendarioService.updatePresenze(docPianificazione);
  }


//#endregion

////#region corsi



//Ritorna il corso selezionato nel servizio
get selectedCorso() {
  return this.corsoService.selectedCorso;
}


//#endregion


//#region ISCRIZIONE CORSO

/**
* Contatta il server per conoscere se sono ancora 
* disponibili posti per l'iscrizione a un corso
* 
* Ritorna un oggetto di tipo =>  PostResponse
* Result = TRUE (Posti diponibili) / FALSE (Posti Esauriti)
*  
 * @param idCorso 
 * @returns Promise (Resolve)
 */
getPostiDisponibiliCorso(idCorso: string):Promise<PostResponse> {
  return this.iscrizioneCorsoService.getPostiDisponibiliCorso(idCorso);
}

/**
 * Si richiede il calcolo del totale di una iscrizione Corso
 * @param docIscrizione 
 * @returns 
 */
requestCalcoloTotaleIscrizioneCorso(docIscrizione: IscrizioneCorso):Promise<IscrizioneCorso> {
  return this.iscrizioneCorsoService.requestTotaleIscrizione(docIscrizione);
}

/**
 * Chiama il server per il salvataggio di una nuova iscrizione
 * @param docIscrizione Documento Iscrizione da creare
 */
requestSaveIscrizioneCorso(docIscrizione: IscrizioneCorso):Promise<PostResponse> {
  return this.iscrizioneCorsoService.requestSaveIscrizione(docIscrizione);
}
//#endregion


//#region CORSO VALUTAZIONE

/**
 * Chiede al server una Scheda di Valutazione finale Corso
 * 
 * @param idCorso idCorso richiesto
 * @returns resolve con la Scheda di Valutazione
 * @return  reject Messaggio Errore
 */
requestSchedaValutazioneCorso(idCorso: string):Promise<CorsoValutazione> {
  return this.corsoValutazioneService.requestSchedaValutazioneCorso(idCorso);
}

/**
 * Richiede al server il salvataggio della scheda di valutazione
 * @param docScheda Scheda in salvataggio
 */
requestForSaveSchedaValutazioneCorso(docScheda: CorsoValutazione):Promise<PostResponse> {
  
  return this.corsoValutazioneService.requestForSave(docScheda);

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

get actualUtenteLogged() {
  return this.utenteService.actualLoggato;
}

/**
 * recupera l'utente loggato (non Obs)
 */
get actualUtente() {
  return this.utenteService.actualUtente;
}

/**
 * Ritorna ID Utente attualmente loggato
 */
get actualIdUtente(): string {
  let myId: string = '';
  if (this.utenteService.actualUtente) {
    myId = this.utenteService.actualUtente.ID;
  }

  return myId;

}
/**
 * Memorizza nello storage username e password
 * @param username Username da memorizzare
 * @param pwd Password da memorizzare
 */
saveStorageUtente(username: string, passwd: string) {
  let account = new storageUtente(username, passwd);
  
  //salvo le informazioni criptate
  let strAccount = account.saveJSON(true);

  this.storageAccess.set('gouegoser',strAccount);
  LogApp.consoleLog('Saved credential');
}

updateClientUtenteData(){
  return this.utenteService.updateClientData();
}

/**
 * Carica dallo Storage le credenziali utente memorizzate
 * Se il recupero è corretto tenta anche il login
 */
loadStorageUtente() {
  LogApp.consoleLog('Trying autologin');

  //Chiedo di caricare l'impostazione
  this.storageAccess
      .get('gouegoser')
      .then ((val) => {
        //Credenziali memorizzate
        if (val) {
          let savedUser = new storageUtente('','');
          savedUser.loadJSON(val);

          if (savedUser.loginUser && savedUser.pwdUser) {
            //Devo tentare di accedere
            
            //Faccio la richiesta al server
            this.userLogin(savedUser.loginUser, savedUser.pwdUser)
                .then(() => {
                  LogApp.consoleLog('AutoLogin passed: ');
                })
                .catch(error => {
                  LogApp.consoleLog('AutoLogin failed: ' + error);
                });
          }
        }
      })
      .catch(error => {
        //Failed load Storage
      });
      
}




/**
 * Disconnessione utente richiesta
 */
userLogoff(): void {
  let myStartConfig = this._startConfig.getValue();

  // Avviso del logoff
  this.utenteService.logoff();

  //Tolgo il codice di autorizzazione utente
  myStartConfig.authorizationUserCode = '';

  //Riemetto l'Observable
  this._startConfig.next(myStartConfig);

  //Tolgo le credenziali memorizzate dallo storage
  this.saveStorageUtente('','');
  
}

/**
 * Effettua la richiesta 
 * @param username Username Utente
 * @param password Password Utente
 */
userLogin(username: string, 
          password: string) {

  const actualStartConfig = this._startConfig.getValue();

  //Mi metto in ascolto per i cambi di Area Favorite a seguito della login
  this.onChangeAreaFavListener();

  //Chiamo il servizio Utente passando username, password, la configurazione e
  //l'eventuale area da Impostare come attiva dopo il login
  
  return this.utenteService
            .login( username, 
                    password,
                    this._startConfig,
                    this._forceIdAreaOnLogin);

}



/**
 * Ascolta il cambio dell'idAreaChange 
 */
onChangeAreaFavListener() {
  this.utenteService.idAreaFAV.subscribe(value => {
    //Se arriva un'area favorita, procedo con il cambio
    if (value) {
      //Cambio dell'area
      this.selectAreaByID(value);
    }
  })
}



/**
 * Richiedere al server l'operazione di Update Utente
 * @param docUtenteUpdate Documento Utente con le modifiche da inviare
 */
updateUtente(docUtenteUpdate: Utente) {
  const actualStartConfig = this._startConfig.getValue();

  return this.utenteService.requestUpdate(actualStartConfig, docUtenteUpdate);
}

/**
 * Effettua la richiesta al server per il cambio della password
 * Ritorna un Observable
 * con {RESULT: 0/1, MESSAGE:''}
 * @param oldPsw Password Attuale
 * @param newPsw Nuova Password
 */
requestChangePassword(oldPsw:string, newPsw:string) {
  const actualStartConfig = this._startConfig.getValue();

  return this.utenteService.requestChangePassword(actualStartConfig, oldPsw, newPsw);
}

/**
 * Richiesta la cancellazione del profilo
 * @param actualPassword 
 * @returns 
 */
requestDeleteProfile(actualPassword: string):Promise<PostResponse>  {

  return new Promise<PostResponse>((resolve, reject) => {
    //Chiedo la cancellazione del profilo
    this.utenteService.requestDeleteProfile(actualPassword)
                      .then(myResponse => {

                        if (myResponse.result) {
                          //Eseguo il logout dell'utente, cancellando le credenziali salvate
                          this.userLogoff();
                        }

                        resolve(myResponse);
                        
                      })
                      .catch(error => {
                        reject(error);
                      })
  })
                            
}


/**
 * Foto utente presente nel servizio utente
 */
get userPicture():Observable<string> {
  return this.utenteService.userPicture;
}
/**
 * Apre la fotocamera per la foto utente
 */
takePictureUtente():Promise<string> {

  let photoType: PhotoType = PhotoType.account;
  let idPhoto: string = '';
  let myTitle = 'Immagine Profilo';

  return new Promise<string>((resolve, reject) => {
    
    if (this.utenteLogged) {
  
      //Identificativo della foto
      this.utente.subscribe(elutente => {

        idPhoto = elutente.ID;
    
        //Apro la fotocamera per il caricamento
        this.photoService.takePicure(photoType, idPhoto, myTitle)
                        .then(dataUrl => {

                          //Foto memorizzata, la imposto nel servizio utente
                          this.utenteService.setUserPicture(dataUrl);
                          //Risolvo la Promise
                          resolve(dataUrl);

                        })
                        .catch(error => {
                          reject(error);
                        })
      }, error => {
        reject(error);
      })

    }
    else {
      reject('No user logged');
    }
  })

}



/**
 * 
 * @returns DataURL con la foto profilo
 */
loadPictureUtente():Promise<string> {
  let photoType: PhotoType = PhotoType.account;
  let idPhoto: string = '';

  return new Promise<string>((resolve) => {

    if (this.utenteLogged) {
  
      this.utente.subscribe(elutente => {
        //Identificativo della foto
        idPhoto = elutente.ID;
    

        //Apro la fotocamera per il caricamento
        this.photoService.storageLoad(photoType, idPhoto)
                        .then(dataUrl => {

                          //Foto memorizzata, la imposto nel servizio utente
                          this.utenteService.setUserPicture(dataUrl);

                          resolve(dataUrl);
                        })
                        .catch(error => {
                          resolve('');
                        })
      }, error => {
        resolve('');
      })

    }
    else {
      resolve('');
    }
  })
}

/**
 * Lista Tessere Utente di tipo Observable
 */
get listTessereUtente$() {
  return this.srvTesseramento.listTessere$;
}

/**
 * Richiede i Tesseramenti per l'utente loggato
 * @param idUtente 
 */
requestListTessereUtente():Promise<void> {
  let idUtente = this.actualIdUtente;
  return this.srvTesseramento.request(idUtente);
}


//#endregion

//#region REGISTRAZIONE ACCOUNT

/**
 * Chiama il server e chiede l'invio dei PINCODE di registrazione
 * @param docRequestCode Dati per la richiesta da inviare al server
 */
registrationSendCodici(docRequestCode: AccountRequestCode):Promise<AccountOperationResponse> {

    const actualStartConfig = this._startConfig.getValue();
    return this.utenteService.registrationSendCodici(actualStartConfig, docRequestCode);
}

/**
 * Chiama il server inviando i codici inseriti dall'utente per chiederne il controllo
 * @param docVerifyCode Dati per la verifica dei codici inseriti
 */
registrationVerifyCodici(docVerifyCode: AccountVerifyCode):Promise<AccountOperationResponse> {
  const actualStartConfig = this._startConfig.getValue();
  return this.utenteService.registrationVerifyCodici(actualStartConfig, docVerifyCode);
}

/**
 * Invia al server la richiesta per la registrazione di un nuovo account
 * @param docUtente Nuovo Utente da registrare
 * @param docRequestCode Documento richiesta codici presentato in precedenza
 */
registrationFinalize(docUtente: Utente, 
                     docRequestCode: AccountRequestCode):Promise<AccountOperationResponse> {

    const actualStartConfig = this._startConfig.getValue();
    return this.utenteService.registrationFinalize(actualStartConfig,docUtente, docRequestCode);
  }

//#endregion

//#region PSW RECOVERY

recoverySendCodici(docRequestCode: AccountRequestCode):Promise<AccountOperationResponse> {
  const actualStartConfig = this._startConfig.getValue();
  return this.utenteService.recoverySendCodici(actualStartConfig, docRequestCode);
}

recoveryVerifyCodici(docVerifyCode: AccountVerifyCode):Promise<AccountOperationResponse> {
  const actualStartConfig = this._startConfig.getValue();
  return this.utenteService.recoveryVerifyCodici(actualStartConfig, docVerifyCode);
}


/**
 * Invia al server la richiesta per la registrazione di un nuovo account
 * @param docUtente Nuovo Utente da registrare
 * @param docRequestCode Documento richiesta codici presentato in precedenza
 */
recoveryFinalize(docUtente: Utente, 
  docRequestCode: AccountRequestCode):Promise<AccountOperationResponse> {

const actualStartConfig = this._startConfig.getValue();
return this.utenteService.recoveryFinalize(actualStartConfig,docUtente, docRequestCode);
}


//#endregion

//#region VALIDATION CONTATTI

validationSendCodici(docRequestCode: AccountRequestCode, docUtente: Utente):Promise<AccountOperationResponse> {
  const actualStartConfig = this._startConfig.getValue();
  return this.utenteService.validationSendCodici(actualStartConfig, docUtente, docRequestCode );
}

validationVerifyCodici(docVerifyCode: AccountVerifyCode):Promise<AccountOperationResponse> {
  const actualStartConfig = this._startConfig.getValue();
  return this.utenteService.validationVerifyCodici(actualStartConfig, docVerifyCode);
}

//#endregion

//#region PRENOTAZIONE

/**
 * Prenotazione Attiva
 */
get activePrenotazione() {
  return this.prenotazioniService.activePrenotazione;
}

//Passo al servizio una prenotazione e la imposto nel servizio
setActivePrenotazione(value: Prenotazione) {
  this.prenotazioniService.setActivePrenotazione(value);
}

/**
 * Chiede al servizio di inizializzare una nuova Prenotazione
 * @param idArea IDArea da impostare
 */
initActivePrenotazione(idArea: string) {
  this.prenotazioniService.initActivePrenotazione(idArea);
}

/**
 * Chiede al servizio di impostare la pianificazione
 * @param docPianificazione Pianificazione da impostare
 */
setPianificazioneSingola(docPianificazione: PrenotazionePianificazione) {
  this.prenotazioniService.setPianificazioneSingola(docPianificazione);
}

/**
 * Chiede al servizio di impostare l'utente
 * @param idUtente Utente da applicare
 */
setIDUtenteActivePrenotazione(docUtente: Utente) {
  this.prenotazioniService.setIDUtenteActivePrenotazione(docUtente);
}

/**
 * Richiede al servizio il calcolo 
 * della Prenotazione
 * 
 */
requestImportoPrenotazione() {
  const actualStartConfig = this._startConfig.getValue();
  return this.prenotazioniService.requestImporto(actualStartConfig);
}

/**
 * Ritorna Observable da analizzare con subscribe relativo alla richiesta di salvataggio
 * della prenotazione
 */
requestSavePrenotazione() {
  const actualStartConfig = this._startConfig.getValue();
  return this.prenotazioniService.requestSave(actualStartConfig);
}



//Mantiene nel servizio il campo per una rilettura futura
setSelectedCampoPrenotazione(value: Campo) {
  this.prenotazioniService.selectedCampo = value;
}

//Recupera nel servizio Prenotazione il campo salvato in precedenza
getSelectedCampoPrenotazione() {
  return this.prenotazioniService.selectedCampo;
}

/**
 * Richiede al server una Prenotazione
 * VERSIONE OBSERVABLE
 * @param idPrenotazione idPrenotazione
 * @param numLivelli Default Numero Livello = 0
 */
requestPrenotazioneById$(idPrenotazione: string, 
                        numLivelli: number = 0):Observable<Prenotazione> {

  const actualStartConfig = this._startConfig.getValue();
  return this.prenotazioniService.requestById$(actualStartConfig, idPrenotazione, numLivelli);
}

  /**
   * Effettua una chiamata al server per il recupero della prenotazione
   * NUOVA MODALITA
   * @param idPrenotazione 
   * @param numChild Profondità della richiesta
   * @param decodeAll Decodifica le chiavi esterne
   * @returns 
   */
  requestPrenotazioneById(idPrenotazione: string, numChild = 0, decodeAll = false): Promise<Prenotazione> {
    return this.prenotazioniService.requestPrenotazioneById(idPrenotazione, numChild, decodeAll);
  }

/**
 * Richiede al server un documento di PrenotazionePianificazione
 * @param idPianificazione 
 * @returns 
 */
requestPianificazionePrenotazioneById(idPianificazione: string): Promise<PrenotazionePianificazione> {
  return this.prenotazioniService.requestPianificazioneById(idPianificazione);
}

requestDeletePianificazione(idPianificazione){
  const actualStartConfig = this._startConfig.getValue();
  return this.prenotazioniService.requestDelete(idPianificazione, actualStartConfig);

}

//#endregion

//#region UTENTEPRENOTAZIONI


/**
 * Richiede al server elenco di prenotazioni di un utente
 * @param idUtente IDUtente Prenotazione
 */
requestUtentePrenotazioni(idUtente: string) {
  const actualStartConfig = this._startConfig.getValue();
  
  //Richiedo i dati al servizio
  return this.utentePrenotazioneService.request(actualStartConfig, idUtente);
}





/**
 * Lista Prenotazioni di tipo Observable
 */
get listUtentePrenotazioni() {
  return this.utentePrenotazioneService.listUtentePrenotazione;
}

//#endregion

//#region UTENTE ISCRIZIONE


/**
 * Richiede al server elenco di Iscrizioni ai corsi di un utente
 * @param idUtente IDUtente
 */
requestUtenteIscrizioni(idUtente: string) {
  const actualStartConfig = this._startConfig.getValue();
  
  //Richiedo i dati al servizio
  return this.utenteIscrizioneService.request(actualStartConfig, idUtente);
}


/**
 * Lista Iscrizioni Corsi di tipo Observable
 */
get listUtenteIscrizioni() {
  return this.utenteIscrizioneService.listUtenteIscrizione;
}

requestIscrizioneById(idIscrizione){
  const actualStartConfig = this._startConfig.getValue();
  return this.utenteIscrizioneService.requestById(actualStartConfig, idIscrizione);
}

//#endregion

//#region NEWS EVENTI (Controllato)
get listNews() {
  return this.newsEventiService.listNews;
}

/**
 * Recupera le news relative ad un'area
 * @param guidArea il guid dell'area 
 * @param nElementi il numero di elementi richiesti
 */
requestNews(guidArea: string, nElementi: number){
  const actualStartConfig= this._startConfig.getValue();
  return this.newsEventiService.request(actualStartConfig,guidArea,nElementi);
}

/** Effettua la richiesta al servizio di una news
 * @param idNews News scelta 
 * 
 */
requestNewsByID(idNews: string) {
  
  return this.newsEventiService.getNewsById(idNews);
  
}

//#endregion

//#region EVENTI
get listEventi() {
  return this.eventoService.listEventi$;
}

/**
 * Effettuo la richiesta di un Evento
 * @param idEvento 
 * @param numChild Profondità della richiesta
 * @param decodeAll Decodifica le chiavi esterne
 * @returns 
 */
requestEventoById(idEvento: string, numChild = 0, decodeAll = false): Promise<Evento> {
  return this.eventoService.requestById(idEvento, numChild, decodeAll);
}
/**
 * Richiede i prossimi eventi per l'area
 * I risultati sono disponibile in listEventi
 * @param idArea 
 * @returns 
 */
requestNextEventi(idArea: string): Promise<Evento[]> {
  return this.eventoService.requestNextEventi(idArea);
}



//#endregion

//#region ARTICOLO
get listProdotti() {
  return this.articoloService.listProdotti$;
}

get listServizi() {
  return this.articoloService.listServizi$;
}
get listPacchetti() {
  return this.articoloService.listPacchetti$;
}

/**
   * Effettuo la richiesta degli articoli
   * @param idArea Area di riferimento
   * @param tipoArticolo Tipologia Articolo (NULL per tutte)
   */
requestArticoli(idArea: string, tipoArticolo?:TipoArticolo): Promise<void> {
  return this.articoloService.request(this.actualStartConfig, idArea, tipoArticolo);
}

/**
   * Effettuo la richiesta di un Articolo
   * @param idArticolo 
   * @param numChild Profondità della richiesta
   * @param decodeAll Decodifica le chiavi esterne
   * @returns 
   */
requestArticoloById(idArticolo: string, numChild = 0, decodeAll = false): Promise<Articolo> {
  return this.articoloService.requestById(idArticolo, numChild, decodeAll);
}


//#endregion

//#region OCCUPAZIONE CAMPI
get docOccupazione() {
  return this.slotOccupazioneService.docOccupazione;
}

/**
 * Il servizio prende il template dello Slot, richiede al server i dati di occupazione, 
 * corregge il templateSlotDay e lo ripropone come Observable
 * @param templateSlotDay Template della Giornata 
 * @param idLocation Location
 * @param idCampo Campo
 * @param dataGiorno Giorno richiesto
 */
requestSlotOccupazioni(templateSlotDay: SlotDay,
                       docLocation: Location, 
                       docCampo: Campo, 
                       dataGiorno: Date) {
  const actualStartConfig = this._startConfig.getValue();

  //Faccio la richiesta dei dati al servizio
  return this.slotOccupazioneService.request(actualStartConfig, templateSlotDay, docLocation, docCampo, dataGiorno);

}

//#endregion

//#region PAGAMENTI



//#endregion

//#region CODICE FISCALE
/**
 * Promise per il controllo e la decodifica del codice fiscale
 * Puo' essere usata solo per controllare il Codice Controllo con il resto, oppure per decodificare tutti i campi
 * @param codiceFiscale Codice Fiscale da anallizare
 * @param decode 
 */
checkCodiceFiscale(codiceFiscale: string, 
                   decode?:boolean,
                   userMsg?:boolean): Promise<CodiceFiscale> {
  return this.codFiscService.checkCodiceFiscale(codiceFiscale, decode, userMsg);
}

//#endregion

//#region PRIVATE IMAGES

/**
 * dato un tipo di immagine, la funzione restituisce la stringa in B64
 * @param tipo il tipo di immagine richiesta 
 */
requestBase64Image(tipo: TipoPrivateImage):Promise<string>{
  return new Promise((resolve,reject)=>{
    const doObject='GRUPPOSPORTIVO'
    let config=this._startConfig.getValue();
    
    let myUrl = config.urlBase + '/' + doObject;  
    
    let myHeaders = config.getHttpHeaders();
    myHeaders = myHeaders.append('X-HTTP-Method-Override','getBase64PrivateImage');
   
    let myParams= new HttpParams().set('Tipo', tipo+'');

    this.apiService.httpGet(myUrl,myHeaders, myParams)
    .pipe(map(data=>{
      return data.image;
    }))
    .subscribe(base64=>{
      resolve(base64);
    },error=>{
      reject(error);
    });
  });
  
}

//#endregion

//#region OCCUPAZIONICAMPI


requestOccupazioni(idArea: string, idLocation?: string, top?, params?: RequestParams, fromTime?: Date) {
  return this.occupazioniService.request(idArea, idLocation, params, top, fromTime);
}

requestOccupazioniByFilter(filter: OccupazioneCampi, params?: RequestParams){
  return this.occupazioniService.requestByFilter(filter, params);
}

/**
 * Richiede una singola occupazione cercando per id, se il secondo parametro è true, 
 * richiede anche il docprenotazione collegato e lo inserisce nel repository
 * il docprenotazione viene inoltre decodificato, e contiene l'elenco delle pianificazioni; 
 * anch'esse decodificate
 * @param idOccupazione id da cercare
 * @param getRelReservation indica se richiedere anche il documento prenotazione collegato e inserirlo nel docrepository
 */
requestOccupazioneById(idOccupazione: string, getRelReservation = false){
  return this.occupazioniService.requestById(idOccupazione, getRelReservation);
}
//#endregion


//#region DOCUMENTO
requestDocumento(urlDocumento: string){
  return this.documentoService.request(this.actualStartConfig, urlDocumento);
}

//#endregion


//#region INVOICES


/**
 * Richiede l'elenco delle ricevute per l'utente passato
 * @param utente il documento utente
 */
  requestInvoices(utente: Utente, anno: number){
    return this.invoicesService.requestInvoices(utente, anno);
}

 /**
   * Dato un elemento MasterDocumento, la funzione lo scarica e restituisce la postResponse contenente il B64
   * @param documento elemento MasterDocumento che si vuole scaricare
   */
  downloadInvoice(documento: MasterDocumento):Promise<PostResponse>{
    return this.invoicesService.downloadInvoice(documento);
  }

    /**
   * la funzione, presa una stringa b64 e il content-type, restituisce il blob
   * @param b64Data stringa B64 SENZA tipo di file
   * @param contentType stringa tipo file (default: application/pdf)
   */
  base64toBlob(b64Data, contentType='application/pdf') {

    return this.invoicesService.base64toBlob(b64Data, contentType);
    
  }




//#endregion


//#region POSIZIONE 

/**
 * La funzione restituisce una promise con la posizione attuale
 */
getCurrentPosition(){
  return this.posizioneService.getCurrentPosition();
}

/**
 * data in input una lista di aree, la funzione restituisce l'oggetto area più vicino alla posizione attuale
 * @param listAree la lista delle aree tra cui cercare
 */
getNearestArea(listAree: Area[]){
  return this.posizioneService.getNearestArea(listAree);
}

//#endregion

//#region DATECHIUSURE
isFestivita(data: Date, idArea: string, idLocation: string, idCampo: string) {
  return this.dataChiusuraService.idFestivita(idArea, idLocation, idCampo, data);
}
//#endregion

//#region CORSOALLEGATO

  requestListAllegatiByIdCorso(idCorso: string): Promise<CorsoAllegato[]>{
    return this.corsoAllegatoService.requestByIdCorso(idCorso);
  }

//#endregion

//#region TIPO TESSERE
get listTipoTessere$():BehaviorSubject<TipoTessera[]> {
  return this.srvTipoTessere.listTipoTessere$;
}

/**
 * Effettua la richiesta per la lista delle tipo tessere previste
 */
requestListTipoTessere(): Promise<void> {
  return this.srvTipoTessere.request();
}
//#endregion

//#region IMPEGNI

/**
 * Ritorna URL per accedere a History
 * list / course / book
 * In caso di Corso o Book passando la primary key manda alla pagina dettaglio
 * @param type 
 * @returns 
 */
getUrlPageHistoryPersonal(type: 'list' | 'course' | 'book', primaryKey?:string): string[] {
  let retPath = [];
  switch (type) {
    case 'list':
      retPath = ['/','appstart-home','tab-agenda','history-list'];
      break;
    case 'book':
      if (primaryKey && primaryKey.length != 0) {        
        retPath = ['/','appstart-home','tab-agenda','history-booking', primaryKey];
      }
      break;

    case 'course':
        if (primaryKey && primaryKey.length != 0) {
          retPath = ['/','appstart-home','tab-agenda','history-course', primaryKey];
        }
        break;  
    default:
      break;
  }
  return retPath;
}

/**
 * Per ottenere la lista Impegni Personali
 * è necessario effettuare la richiesta con 
 * requestImpegniPersonali
 */
get listImpegniPersonali$() {
  return this.impegniService.listImpegni$;
}

/**
 * Per ottenere il prossimo impegno è necessario 
 * effettuare la richiesta con 
 * requestImpegniPersonali
 */
get nextImpegnoPersonale$() {
  return this.impegniService.nextImpegno$;
}
/**
 * Richiede gli impegni personali del cliente
 * @param idUtente Utente di riferimento
 * @param onlyFuture Solo Impegni futuri
 * @param numMaxRequest Default 10 Impegni
 * @returns 
 */
requestImpegniPersonali(idUtente: string, 
                        onlyFuture: boolean = true,
                        numMaxRequest: number = 10): Promise<void> {
   return this.impegniService.request(idUtente, onlyFuture, numMaxRequest);
}
//#endregion

//#region IMPEGNI TRAINER

/**
 * Per ottenere la lista Impegni Trainer/Assistente trainer
 * è necessario effettuare la richiesta con 
 * requestImpegniCollaboratore
 */
get listImpegniCollaboratore$() {
  return this.impegniCollaboratoreService.listImpegni$;
}

/**
 * 
 * @param idCollaboratore Trainer/Assistente
 * @param periodAnalize   Periodo
 * @param periodDate      Data di partenza
 * @param numMaxRequest   numero massimo di elementi
 * @returns 
 */
requestImpegniCollaboratore(idCollaboratore: string,
                            mansione: Mansione,
                            periodAnalize: RangeSearch,
                            periodDate: Date,
                            numMaxRequest: number = 10): Promise<void> {

  return this.impegniCollaboratoreService.request(idCollaboratore,
                                            mansione,
                                            periodAnalize,
                                            periodDate,
                                            numMaxRequest);
}

//#endregion

//#region IMPEGNI CUSTODE

/**
 * Per ottenere la lista Impegni Custode
 * è necessario effettuare la richiesta con 
 * requestImpegniCustode
 */
get listImpegniCustode$() {
  return this.impegniCustodeService.listImpegni$;
}

/**
 * 
 * @param idArea          Area di riferimento
 * @param periodAnalize   Periodo
 * @param periodDate      Data di partenza
 * @param numMaxRequest   numero massimo di elementi
 * @returns 
 */
requestImpegniCustode(idArea: string,
                      periodAnalize: RangeSearch,
                      periodDate: Date,
                      numMaxRequest: number = 10): Promise<void> {

  return this.impegniCustodeService.request(idArea,
                                            periodAnalize,
                                            periodDate,
                                            numMaxRequest);
}

  /**
   * Carica un Impegno Custode per ID
   * @param idImpegno 
   * @param numChild Numero Livelli Default = 0
   * @param decodeAll Decodifica Tutto (Default FALSE)
   * @returns 
   */
  requestImpegnoCustodeById(idImpegno: string, numChild = 0, decodeAll = false): Promise<ImpegnoCustode> {
    return this.impegniCustodeService.requestById(idImpegno, numChild, decodeAll);
  }

//#endregion


//#region VARIE
/**
 * Apre una pagina con il link passato
 * @param url Url a cui indirizzarsi
 */
openLink(url:string): void
{
  if (url && url.length != 0) {
    Browser.open({url:url});
  }
}

/**
 * Ritorna una stringa che identifica il breakpoint di riferimento
 * rispetto alla dimensione larghezza passata
 * @param actualWidth Larghezza Attuale
 */
getDefaultBreakpoint(actualWidth: number): 'xs' | 'sm' | 'md' | 'lg' | 'xl' {
  let value : 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'lg';


  if (actualWidth < 576) {
    value = 'xs'
  }
  else if (actualWidth < 768) {
    value = 'sm'
  }
  else if (actualWidth < 992) {
    value = 'md'
  }
  else if (actualWidth < 1200) {
    value = 'lg'
  }
  else {
    value = 'xl'
  }

  return value;
}

//#endregion

  //#region SMART INTERFACE PROMISE

  //Le funzioni showMessage, showLoading, showToastingMessage ritornano
  //la Promise di creazione che bisogna intercettare e presentare

  //Le funzioni presentMessage, presentToastingMessage
  //non ritornano nulla e il processo di creazione e presentazione è completato nella funzione


  /**
   * Crea un semplice messaggio con l'uso dell'AlertController
   * La presentazione del messaggio è a carico del chiamante
   * @param myMessage Messaggio
   * @param myTitle Titolo
   * @param myButtons Eventuali Button
   * @returns Promise<Alert>
   */
   showAlertMessage(myMessage: string, myTitle?: string, myButtons?: (AlertButton | string)[]): Promise<HTMLIonAlertElement> {
    return this.srvSmartInterface.showMessage(myMessage, myTitle, myButtons);
  }



  /**
 * Crea un semplice loading con l'uso del LoadingController
 * La presentazione del Loader e relativo Dismiss è a carico del chiamante
 * @param myMessage Messaggio
 * @param mySpinner Tipo Spinner (defualt = bubbles)
 * @returns Promise<LoadingController>
 */
  showLoadingMessage(myMessage: string, mySpinner?: SpinnerTypes, backdropDismiss = false): Promise<HTMLIonLoadingElement> {
    return this.srvSmartInterface.showLoading(myMessage, mySpinner, backdropDismiss);
  }

  /**
  * Crea un Toast contenente un messaggio con l'uso del ToastController
  * La presentazione del Toast è a carico del chiamante
  *
  * @param myMessage Messaggio da mostrare
  * @param myTitle Titolo
  * @param position
  * @param duration
  * @returns
  */
  showToastMessage(myMessage: string,
    myTitle?: string,
    myPosition?: 'top' | 'bottom' | 'middle',
    myDuration: number = 2000): Promise<HTMLIonToastElement> {

    return this.srvSmartInterface.showToastingMessage(myMessage, myTitle, myPosition, myDuration);
  }



  //#endregion

  //#region SMART INTERFACE PRESENT
  //I seguenti metodi non tornano una Promise ma presentano subito l'elemento

  /**
   * Crea e presenta un semplice messaggio con l'uso dell'AlertController
   *
   * @param myMessage Messaggio
   * @param myTitle Titolo
   * @param myButtons Eventuali Button
   * @returns void
   */
  presentAlertMessage(myMessage: string, myTitle?: string, myButtons?: (AlertButton | string)[]) {
    this.srvSmartInterface
      .showMessage(myMessage, myTitle, myButtons)
      .then(elMessage => {
        elMessage.present();
      })
  }

  /**
   * Crea e presenta un Toast contenente un messaggio con l'uso del ToastController
   *
   *
   * @param myMessage Stringa or Error Object
   * @param myTitle Titolo
   * @param position
   * @param duration
   * @returns
   */
  presentToastMessage(myMessage: any,
    myTitle?: string,
    myPosition?: 'top' | 'bottom' | 'middle',
    myDuration: number = 2000): void {

      let myText = '';

      if (typeof myMessage == 'string') {
        myText = myMessage
      }
      else if (typeof myMessage == 'object') {
        if (myMessage.message) {
          myText = myMessage.message
        }
      }

      //Creo e mostro il messaggio
      this.srvSmartInterface
        .showToastingMessage(myText, myTitle, myPosition, myDuration)
        .then(elToast => {
          elToast.present();
        })
  }


  //#endregion



}


