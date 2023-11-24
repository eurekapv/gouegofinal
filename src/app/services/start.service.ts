import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApicallService } from './zsupport/apicall.service';
import { SportService } from './archivi/sport.service';
import { CategoriaetaService } from './archivi/categoriaeta.service';
import { CourseService } from './corso/course.service';
import { FilterCorsi } from '../models/corso/filtercorsi.model';
import { UtenteService } from './utente/utente.service';
import { LivelloService } from './archivi/livello.service';
import { AreaService } from './struttura/area.service';
import { LocationService } from './struttura/location.service';
import { CourseschedulerService } from './corso/coursescheduler.service';

import { PrenotazioneService } from './prenotazioni/prenotazione.service';
import { NewseventiService } from './evento/newseventi.service';
import { SlotoccupazioneService } from './prenotazioni/slotoccupazione.service';
import { StartConfiguration } from '../models/start-configuration.model';

import { Location } from '../models/struttura/location.model';
import { Utente,  } from '../models/utente/utente.model';
import { LogApp } from '../models/zsupport/log.model';
import { SlotDay } from '../models/imdb/slotday.model';
import { Campo } from '../models/struttura/campo.model';
import { PrenotazionePianificazione } from '../models/prenotazioni/prenotazionepianificazione.model';
import { Prenotazione } from '../models/prenotazioni/prenotazione.model';
import { UtenteprenotazioneService } from './utente/utenteprenotazione.service';
import { UtenteiscrizioneService } from './utente/utenteiscrizione.service';
import { ModalController, Platform } from '@ionic/angular';

import { CodicefiscaleService } from './archivi/codicefiscale.service';
import { CodiceFiscale } from '../models/zsupport/codicefiscale.model';
import { Mansione, RangeSearch, StateApplication, TimeTrainerCourse, TipoArticolo, TipoPrivateImage, TipoVerificaAccount, TypeUrlPageLocation } from 'src/app/models/zsupport/valuelist.model'
import { AccountRequestCode, AccountOperationResponse, AccountVerifyCode } from '../models/utente/accountregistration.model';
import { OccupazioniService } from './struttura/occupazioni.service';

import { DocstructureService } from '../library/services/docstructure.service';
import { OccupazioneCampi } from '../models/struttura/occupazionecampi.model';
import { PostParams, RequestParams } from '../library/models/requestParams.model';
import { PianificazioneCorso } from '../models/corso/pianificazionecorso.model';
import { InvoicesService } from './utente/invoices.service';
import { PosizioneService } from './struttura/posizione.service';
import { Area } from '../models/struttura/area.model';
import { MasterDocumento } from '../models/utente/master-documento.model';
import { PostResponse } from '../library/models/post-response.model';
import { DataChiusuraService } from './archivi/data-chiusura.service';


import { PlatformLocation } from '@angular/common';
import { Gruppo } from '../models/struttura/gruppo.model';
import { CorsoallegatoService } from './corso/corsoallegato.service';

import { CorsoAllegato } from '../models/corso/corsoallegato.model';
import { IscrizionecorsoService } from './corso/iscrizionecorso.service';
import { IscrizioneCorso } from '../models/corso/iscrizione-corso.model';
import { CorsoValutazioneService } from './corso/corso-valutazione.service';
import { CorsoValutazione } from '../models/corso/corsovalutazione.model';
import { Livello } from '../models/archivi/livello.model';
import { PhotoService, PhotoType } from './zsupport/photo.service';
import { SmartInterfaceService } from './zsupport/smart-interface.service';
import { AlertButton, SpinnerTypes } from "@ionic/core";
import { Browser } from '@capacitor/browser';
import { ConnectionMode, environment } from 'src/environments/environment';
import { TipoTesseraService } from './archivi/tipo-tessera.service';
import { TipoTessera } from '../models/archivi/tipo-tessera';
import { TesseramentoService } from './utente/tesseramento.service';
import { EventoService } from './evento/evento.service';
import { ImpegnoService } from './utente/impegno.service';
import { ImpegnoCollaboratoreService } from './utente/impegno-collaboratore.service';
import { ImpegnoCustodeService } from './utente/impegno-custode.service';
import { Evento } from '../models/evento/evento.model';
import { ImpegnoCustode } from '../models/utente/impegno-custode.model';
import { ArticoloService } from './shop/articolo.service';
import { Articolo } from '../models/shop/articolo.model';
import { Sport } from '../models/archivi/sport.model';
import { CategoriaEta } from '../models/archivi/categoriaeta.model';
import { KeyStorageService } from './zsupport/key-storage.service';
import { Authorization } from '../models/zsupport/authorization.model';
import { Corso } from '../models/corso/corso.model';
import { NewsEvento } from '../models/evento/newsevento.model';
import { UserLoginAuthorizationPage } from '../pages/pages-profile/authorization-account/user-login-authorization/user-login-authorization.page';
import { UserRegistrationPage } from '../pages/pages-profile/authorization-account/user-registration/user-registration.page';
import { AuthUserMobileService } from './zsupport/auth-user-mobile.service';
import { UserDataVerificationPage } from '../pages/pages-profile/authorization-account/user-data-verification/user-data-verification.page';
import { StorageUtente } from '../models/utente/stogare-utente.model';
import { TipoPagamentoService } from './archivi/tipo-pagamento.service';
import { TipoPagamento } from '../models/archivi/tipopagamento.model';
import { CorsoPresenze } from '../models/corso/corsopresenze.model';
import { Tesseramento } from '../models/utente/tesseramento';
import { AdvertisingService } from '../library/services/advertising.service';
import { FileService } from './zsupport/file.service';
import { ShoppingService } from './shop/shopping.service';
import { ShopCarrello } from '../models/shop/shop-carrello.model';

@Injectable({
  providedIn: 'root'
})
export class StartService {

  //Oggetto contentente la configurazione
  private _startConfig = new BehaviorSubject<StartConfiguration>(new StartConfiguration());

  /* Valorizzata a TRUE quando l'app è pronta a partire */
  private _appReady = new BehaviorSubject<boolean>(false);
  private _stateApplication: StateApplication = StateApplication.onStarting;

   
  //Determina se la connessione sarà a un database locale, o al server
  private _localConnection = false;

  private _forceIdAreaOnLogin = ''; //Se impostato è l'area da mantenere a seguito del login (Usata quando nella booking non sono loggatto, e al termine devo rimanere sull'area)
  

  /**
   * Stato dell'Applicazione
   */
  public get stateApplication() {
    return this._stateApplication;
  }
  public set stateApplication(value) {
    this._stateApplication = value;
  }

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

  //Ritorna se l'applicazione sta girando dentro a un browser, quindi non in capacitor
  get isOnBrowser() {
    let result = false;
    
    if (this.platformService.is("mobileweb") || this.platformService.is("desktop")) {
      result = true;
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


  constructor(
    private authUserService: AuthUserMobileService,
    private platformService: Platform,
    private apiService: ApicallService,
    private keyStorageService: KeyStorageService,
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
    private articoloService: ArticoloService,
    private modalController: ModalController,
    private tipoPagamentoService: TipoPagamentoService,
    private advertisingService: AdvertisingService,
    private fileService: FileService,
    private shopService: ShoppingService
    ) { 

      //Ogni volta che cambia la configurazione la invio 
      //al servizio docStructure
      this.startConfig.subscribe(elConfig => {
        this.docStructureService.setConfig(elConfig);
      });

  }

  //#region FUNZIONI START

  startApplication(): Promise<void> {
    let typeLog: 'log'|'error'|'warn' = 'warn';

    return new Promise<void>((resolve, reject) => {
      LogApp.consoleLog('* Start Application', typeLog);

      //Inizio con il recupero della configurazione
      this.retrieveConfiguration()
          .then(dataConfig => {
            LogApp.consoleLog('* Recupero configurazione effettuato',typeLog);
            //Riemetto Observable
            this._startConfig.next(dataConfig);
            //Tento il recupero AppId dal Server (se non fosse presente)
            return this.retrieveAppIdFromServer(dataConfig);
          })
          .then(dataConfig => {
            LogApp.consoleLog('* Recupero AppId effettuato',typeLog);
            //Riemetto Observable
            this._startConfig.next(dataConfig);
            //Controllo di aver tutto il necessario
            return this.checkForAuthorizationCall(dataConfig);
          })
          .then(dataConfig => {
            //Non riemetto la configurazione perchè non è cambiata
            LogApp.consoleLog('* Controllo configurazione effettuato',typeLog);

            //Chiediamo Authorizzazione al Server
            return this.requestStartAuthorization(dataConfig);
          })
          .then(dataConfig => {
            //Autorizzazione concessa
            LogApp.consoleLog('* Autorizzazione ricevuta', typeLog);
            //Riemetto Observable
            this._startConfig.next(dataConfig);
            //Sistemo i dati a seguito della concessione dell'autorizzazione
            return this.onAuthorizationGrant(dataConfig);
          })
          .then(dataConfig => {

            LogApp.consoleLog('* Sistemazione Documenti Autorizzazione', typeLog);

            //Riemetto Observable
            this._startConfig.next(dataConfig);

            //E dopo richiedo le Aree
            return this.requestAree();
          })
          .then(listAree => {
            //Ricezione delle Aree (Se l'array è vuoto va in catch con la richiesta)
            //Observable con le Aree viene popolato dalla richiesta
            LogApp.consoleLog('* Aree Operative ricevute', typeLog);

            //Recupero il documento con la proprietà selected
            return this.areaService.findFirstDoc(listAree);
          })
          .then(areaDoc => {
            LogApp.consoleLog('* Area selezionata', typeLog);

            //Seleziono l'area
            this.areaService.selectAreaByID(areaDoc.ID);

            //Con l'area posso recuperare le Location
            return this.requestLocationByIdArea(areaDoc.ID);
          })
          .then(listLocations => {
            //Ricezione delle Location
            LogApp.consoleLog('* Ricezione Location dell\'area selezionata', typeLog);
            //Applicazione puo' partire
            this._stateApplication = StateApplication.started;
            resolve();
          })
          .catch(error => {
            //Non riesco a collegarmi perchè sono presenti errori
            LogApp.consoleLog('Inizializzazione Fallita','error');
            LogApp.consoleLog(error,'error');

            //Applicazione in errore
            this._stateApplication = StateApplication.onError;

            reject(error);
          })

    })
  }

  /**
   * L'applicazione è partita
   */
  onAfterStartApplication(): void {

      //Adesso ho tutto e posso sottoscrivermi al cambio Area
      // Mi iscrivo alle modifiche dell'Area Selezionata
      this.onListenAreaSelezionata();

      //Tento il login Automatico
      this.loadUserCredential();

      //Carico altri documenti
      this.onRetrieveAdditionalDocument();

  }


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
  retrieveConfiguration(): Promise<StartConfiguration> {

    return new Promise<StartConfiguration>((resolve) => {
      
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
      if (this.isOnBrowser) {
  
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
    
      //Imposto gli Url utilizzati nelle chiamate
      myConfig.setUrlLocation();

      myConfig.prefixDomain = prefixDomain;
      myConfig.appId = myAppId;

      resolve(myConfig);

      /*
      //Reimposto Observable
      this._startConfig.next(myConfig);
  
      //Il secondo step si preoccupa di ricavare l'app id se mancante, 
      //Impostare i dati nell'oggetti startConfiguration
      //ed iniziare la comunicazione server
      this.settingStartStepTwo(prefixDomain, myAppId);
      */

    })

  }

  /**
   * SECONDO STEP DI CONFIGURAZIONE
   * Il metodo tenta il recupero di un appId se non ne possiede già uno, e se prefixdomain vale qualcosa
   * effettuando una chiamata al server e passando il prefixDomain
   */
  retrieveAppIdFromServer(dataConfig: StartConfiguration): Promise<StartConfiguration> {

    return new Promise<StartConfiguration>((resolve, reject) => {
      
      let docToCall: Gruppo;
      
  
      //Ho la configurazione base
      if (dataConfig) {

        //Non ho ancora un AppID
        if (dataConfig.appId.length == 0) {
    
          //Ho un Prefisso di dominio
          if (dataConfig.prefixDomain.length != 0) {
            //Provo a chiedere al server
            //Preparo il documento di filtro
            docToCall = new Gruppo(true);
            docToCall.PREFIXDOMAIN = dataConfig.prefixDomain;
            
            //Effettuo la chiamata
            this.docStructureService.requestNew(docToCall)
              .then(collGruppo => {
                //Ho ricevuto un risultato
                if (collGruppo && collGruppo.length != 0) {
                  
                  let gruppoDoc: Gruppo = collGruppo[0];

                  //Ho trovato un AppId da utilizzare
                  if (gruppoDoc.APPID && gruppoDoc.APPID.length != 0) {
                    dataConfig.appId = gruppoDoc.APPID;
                    resolve(dataConfig);
                  }
                  else {
                    //Stranamento non ho dentro un AppId
                    LogApp.consoleLog('Group without AppId','error');
                    reject('Group without AppId');
                  }  
                }
                else {
                  //Non ho ricevuto nulla
                  LogApp.consoleLog('Call to determinate AppId return empty','error');
                  reject('Call to determinate AppId return empty');
                }
    
              })
              .catch(error => {
                LogApp.consoleLog(error,'error');
                reject(error);
              })
    
          }
          else {
            //Non ho AppId e non ho trovato modo di leggere URL
            reject('AppId Empty with no domain Prefix');
          }
        }
        else {
          //Sono già in possesso dell'AppId
          resolve(dataConfig);
        }
      }
      else {
        reject('Data Configuration failed');
      }

    })
  }

  /**
   * Effettua un controllo per verificare di essere in possesso dei requisiti per 
   * richiedere una authorizzazione 
   */
  checkForAuthorizationCall(dataConfig:StartConfiguration): Promise<StartConfiguration> {

    return new Promise<StartConfiguration>((resolve, reject) => {
        if (dataConfig) {
          if (dataConfig.appId && dataConfig.appId.length != 0) {
            resolve(dataConfig);
          }
          else {
            reject('AppId UnKnown');
          }
        }
        else {
          reject('Data Configuration failed before authorization');
        }
    })

  }
  
  /**
   * Effettua la chiamata WebAPI al Server per richiedere l'autorizzazione
   */
  requestStartAuthorization(dataConfig: StartConfiguration): Promise<StartConfiguration> {

      return new Promise<StartConfiguration>((resolve, reject) => {
        
        const method = 'requestAuthorization';
        let reqParams: PostParams[] = [];
        let docToCall: Authorization = new Authorization(true);
        if (dataConfig) {

          PostParams.addParamsTo(reqParams, 'withimages', '1');
          PostParams.addParamsTo(reqParams, 'withoptions', '1');
          
          //Effettuo la chiamata
          this.docStructureService.requestForFunction(docToCall, method,'',reqParams)
                                  .then(resultData => {
  
                                    //Imposto il risultato ricevuto
                                    dataConfig.startAuthorization = resultData;

                                    if (dataConfig.startAuthorization) {

                                      if (dataConfig.startAuthorization.result == -1 && 
                                          dataConfig.startAuthorization.authcode && 
                                          dataConfig.startAuthorization.authcode.length != 0) {
                                            resolve(dataConfig);
                                      }
                                      else {
                                        LogApp.consoleLog('Authorization not allowed','error');
                                        reject('Authorization not allowed');
                                      }  

                                    }
                                    else {
                                      LogApp.consoleLog('Authorization not received','error');
                                      reject('Authorization not received');
                                    }

                                  })
                                  .catch(error => {
                                    reject(error);
                                  })
        }
        else {
          reject('Data Configuration failed after check authorization');
        }
      })


        
  
        
    }

  //Autorizzazione ricevuta
  onAuthorizationGrant(dataConfig: StartConfiguration): Promise<StartConfiguration> {

    return new Promise<StartConfiguration>((resolve, reject) => {
      let flagResult: boolean = false;

      if (dataConfig) {
        //Imposto nella configurazione i dati del Gruppo e AuthCode
        flagResult = dataConfig.setFromAuthorizationGrant();
        if (flagResult) {
          resolve(dataConfig);
        }
        else {
          reject('Data Authorization invalid');
        }
        
      }
      else {
        reject('Data Configuration failed after authorization grant');
      }

    })
    

  }    



  /**
   * Effettuo il caricamento di ulteriori dati quali (Chiusure, Sport, Categorie Eta, etcc..)
   */
  onRetrieveAdditionalDocument(): void {

    //0- RECUPERO LE CHIUSURE DEL GRUPPO
    this.dataChiusuraService.request()
                            .then(() => {
                              LogApp.consoleLog('Recupero Date Chiusura');
                             })
                             .catch(error => {
                              LogApp.consoleLog("Errore recupero date chiusura","error")
                             });

    // 1- CHIEDO ELENCO SPORT, LIVELLI, CATEGORIEETA che mi servono sempre

    //Richiedo gli Sport
    this.sportService.request()
                     .then(() => {
                        LogApp.consoleLog('Sport richiesti');
                     })
                      .catch(error => {
                        LogApp.consoleLog(error,'error');
                      });

    this.livelloService.request()
                        .then(() => {
                          LogApp.consoleLog('Livelli richiesti');
                      })    
                      .catch(error => {
                        LogApp.consoleLog(error,'error');
                      });

    this.categoriaEtaService.request()
                            .then(() => {
                              LogApp.consoleLog('Categorie Età richieste');
                             })
                            .catch(error => {
                              LogApp.consoleLog(error,'error');
                            });

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
    requestAree():Promise<Area[]> {
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
    onListenAreaSelezionata() {

      this.areaService.areaSelected
          .subscribe(newAreaSelected => {
            //Cambiando Area selezionata
            //Devo necessariamente recuperare le Location
            //Se il documento è in stato inserted non è ancora arrivato dal server
            if (!newAreaSelected.inserted) {
              //Richiedo al server le Location
              this.requestLocationByIdArea(newAreaSelected.ID);
            }
            //Preparo un nuovo carrello Shop
            this.shopService.newShoppingCart(newAreaSelected.ID);
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
  requestLocationByIdArea(idArea: string) {
    
    return this.locationService.requestByIdArea(idArea);
  }



  /** Effettua la richiesta al server di una Location precisa
   * @param idLocation Location scelta 
   * @param childLevel (Default 3) Profondita richiesta (1 Documento / 2+ Collection Figlie)
   * 
   */
  requestLocationByID(idLocation: string, 
                      childLevel:number = 3):Promise<Location> {
    
    return this.locationService.requestLocationByID(idLocation, childLevel);
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

  //#endregion


//#region SPORT SERVICE

/**
 * Richiede in modalità Observable l'elenco degli sport
 */
get listSport():Observable<Sport[]> {
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
 * @param forceReload Ricaricamento forzato
 */
requestSport(withLivelli?:boolean, forceReload = false):Promise<Sport[]> {
  
  return this.sportService.request(withLivelli, forceReload);
            
}

/**
 * Proprietà per gli Sport di una Location
 */
get listLocationSport() {
  return this.sportService.listLocationSport;
}

/**
 * Richiede al server i dati degli Sport in una location
 * 
 * @param config Dati configurazione
 * @param idLocation idLocation selezionata
 */
requestLocationSport(idLocation: string):Promise<Sport[]> {
  
  //Effettuo la chiamata
  return this.sportService.requestLocationSport(idLocation);
}





//#endregion

//#region LIVELLI
get listLivelli() {
  return this.livelloService.listLivelli;
}

/**
 * Richiedo al servizio i Livelli
 */
requestLivelli():Promise<Livello[]> {
  
  return this.livelloService.request();
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
 * Emette Observable e le  ritorna anche come Promise
 */
requestCategorieEta():Promise<CategoriaEta[]> {
  
  return this.categoriaEtaService.request();
            
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

  /**
   * Effettua una chiamata per il recupero di un corso
   * @param idCorso 
   * @param numChild (1 Solo il Documento / 2+ Collection Figlie 
   * @param decodeAll = Decodifica i foreign Key di primo livello)
   * @returns 
   */
  requestCorsoById(idcorso: string, numChild = 1, decodeAll = true): Promise<Corso> {
    return this.corsoService.requestById(idcorso, numChild, decodeAll);
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
   * Effettua la chiamata per il recupero del Calendario Corso
   * @param idCorso Corso richiesto
   * @param decodeAll Decodifica i campi indispensabili
   */
  requestCalendarioCorso(idCorso: string, decodeAll = true):Promise<PianificazioneCorso[]> {
    
    return this.corsoCalendarioService.requestCalendario(idCorso, decodeAll);
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

  /**
   * Richiede al server l'elenco delle Presenze per la data di corso pianificata
   * @param idPianificazione 
   */
  requestPresenzeDataCorso(idPianificazione: string): Promise<CorsoPresenze[]> {
      return this.corsoCalendarioService.requestPresenze(idPianificazione);
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
 * In caso di errori server va in reject, altrimenti torna un documento
 * Iscrizione Corso compilato (anche nelle righe IscrizioneIncasso)
 * @param paramsDocIscrizione Documento a cui vengono compilati
 * DataIscrizione, IdCorso, IdUtente, IdTipoPagamento
 */
onRequestIscrizioneDocFor(paramsDocIscrizione: IscrizioneCorso):Promise<IscrizioneCorso> {
  
  return this.iscrizioneCorsoService.onRequestIscrizioneDocFor(paramsDocIscrizione);
}

/**
 * Chiama il server per il salvataggio di una nuova iscrizione
 * @param docIscrizione Documento Iscrizione da creare
 */
requestSaveIscrizioneCorso(docIscrizione: IscrizioneCorso):Promise<PostResponse> {
  return this.iscrizioneCorsoService.onRequestIscrizioneDocSave(docIscrizione);
} 

/**
 * Ricerca una Iscrizione Corso per Chiave Primaria
 * (Reject se non trovata)
 * @param idPrimary Chiave Primaria
 * @param childLevel Default = 1 
 * @param decodeAll Default FALSE - Decodifica la ricezione
 */
requestIscrizioneCorsoById(idPrimary: string, childLevel: number = 1, decodeAll:boolean = false): Promise<IscrizioneCorso> {
  return this.iscrizioneCorsoService.requestById(idPrimary, childLevel, decodeAll);
}


/**
 * Effettua il caricamento dei dati filtrati
 * @param filterDoc Filtro con i campi per la ricerca
 * @param childLevel 
 * @param decodeAll 
 * @returns 
 */
requestIscrizioneCorsoByFilter(filterDoc: IscrizioneCorso, childLevel: number = 1, decodeAll:boolean = false): Promise<IscrizioneCorso[]> {
  return this.iscrizioneCorsoService.requestByFilter(filterDoc, childLevel, decodeAll);
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

/**
 * Documento Utente Attivo
 */
get activeUtenteDoc$() {
  return this.utenteService.activeUtenteDoc$;
}

/**
 * recupera l'utente loggato (non Obs)
 */
get activeUtenteDoc(): Utente {
  return this.utenteService.activeUtenteDoc;
}

/**
 * Valore Boolean che indica se un utente è connesso
 * Observable
 */
get flagUtenteIsLoggato$():Observable<boolean> {
  return this.utenteService.flagUtenteIsLoggato$;
}

/**
 * Valore Boolean che indica se un utente è connesso
 */
get flagUtenteIsLoggato(): boolean {
  return this.utenteService.flagUtenteIsLoggato;
}


/**
 * Ritorna ID Utente attualmente loggato
 */
get activeUtenteId(): string {
  let myId: string = '';
  if (this.utenteService.activeUtenteDoc) {
    myId = this.utenteService.activeUtenteDoc.ID;
  }

  return myId;

}

/**
 * Foto utente presente nel servizio utente
 */
get utenteImmagine$():Observable<string> {
  return this.utenteService.utenteImmagine$;
}


/**
 * Lista Tessere Utente di tipo Observable
 */
get listTessereUtente$() {
  return this.srvTesseramento.listTessere$;
}

/**
 * Esegue un refresh del documento activeUtenteDoc
 * ricaricandolo dal server
 */
refreshActiveUtenteDoc(): void {
  this.utenteService.refreshActiveUtenteDoc();
}

/**
 * Effettua la richiesta di un utente qualsiasi (non utente Attivo)
 * @param idUtente 
 */
requestUtenteBy(idUtente: string, numChild: number = 1, decodeAll: boolean=false): Promise<Utente> {
  return this.utenteService.request(idUtente, numChild, decodeAll);
}

/**
 * Richiede il caricamento di una collection del documento Utente per nameCollection
 * @param masterDoc 
 * @param nameCollection 
 * @returns 
 */
requestUtenteLoadCollection(masterDoc: Utente, nameCollection: string): Promise<Utente> {
  return this.utenteService.requestLoadCollection(masterDoc, nameCollection);
}


/**
 * Richiede l'elenco dei clienti sulla base di una chiave di ricerca
 * @param filterKeyword 
 * @param numMaxRequest 
 */
requestListUtentiBy(filterKeyword: string, numMaxRequest: number = 0): Promise<Utente[]> {
  return this.utenteService.requestListUtenti(filterKeyword, numMaxRequest);
}

/**
 * Il metodo controlla se fosse necessario effettuare una verifica dei dati Utente
 * In tal caso apre la form UserDataVerificationPage
 * Quando si richiama questo metodo, includere nei Moduli della pagina il modulo
 * UserDataVerificationPageModule
 * 
 * Ritorna TRUE => Verifica necessaria / FALSE => Verifica non necessaria
 */
onVerificationUserData(): Promise<boolean> {

  return new Promise<boolean>((resolve) => {
    
    let myStartConfig = this._startConfig.getValue();
  
    this.utenteService.needDataVerification(myStartConfig)
                      .then(resultData => {
                        if (resultData.tipoVerifica == TipoVerificaAccount.noverifica && 
                            resultData.updateDocUtente == false) {
                              resolve(false);
                            }
                            else {
                              //Apro la Modale di verifica
                              this.modalController.create({
                                component: UserDataVerificationPage,
                                cssClass: 'modal-xl-class',
                                componentProps: {
                                  verificationData: resultData
                                }
                              })
                              .then(elModal => {
                                //Apro la modale
                                elModal.present();
                              })

                              resolve(true);

                            }
                      })
                      .catch(error => {
                        LogApp.consoleLog(error,'error');
                      })
  })
}

updateClientUtenteData(){
  return this.utenteService.updateClientData();
}

/**
 * Memorizza nello storage username e password
 * @param userLogin Username da memorizzare
 * @param pwd Password da memorizzare
 */
saveUserCredential(userLogin: string, passwordLogin: string): void {

  let utenteStorageDoc = new StorageUtente();
  
  utenteStorageDoc.userLogin = userLogin;
  utenteStorageDoc.userPassword = passwordLogin;
  utenteStorageDoc.crypted = false;

  //Richiedo il salvataggio
  this.keyStorageService.saveCredential(utenteStorageDoc)
                        .then(() => {
                          LogApp.consoleLog('Credential saved');
                        })
                        .catch(error => {
                          LogApp.consoleLog('Credential saved error','error');
                          LogApp.consoleLog(error,'error');
                        })
}


/**
 * Carica dallo Storage le credenziali utente memorizzate
 * Se il recupero è corretto tenta anche il login
 */
loadUserCredential() {
  LogApp.consoleLog('Trying autologin');

  //Chiedo di caricare l'impostazione
  this.keyStorageService.loadCredential()
                        .then((userStorage: StorageUtente) => {
                          if (userStorage.containCredentials()) {
                            //Tento AutoLogin
                            this.userLogin(userStorage.userLogin, userStorage.userPassword)
                                .then(() => {
                                  LogApp.consoleLog('AutoLogin passed: ');
                                })
                                .catch(error => {
                                  LogApp.consoleLog('AutoLogin failed: ' + error);
                                });
                          }
                        })      
}

/**
 * Richiesta apertura della form di Login
 * Nella pagine in cui viene effettuata la chiamata aggiungere nel file 
 * module il riferimento a UserLoginAuthorizationPageModule
 */
openFormLogin() {

    //Apro la form di login (se l'utente non è loggato)
    if (this.flagUtenteIsLoggato == false) {

      this.modalController.create({
        component: UserLoginAuthorizationPage,
        cssClass: 'modal-xl-class'
      })
      .then(elModal => {
        elModal.present();
      })

    }
}

/**
 * Richiesta apertura della form di Registrazione nuovo Account
 * Nella pagine in cui viene effettuata la chiamata aggiungere nel file 
 * module il riferimento a UserRegistrationPageModule
 */
openFormRegistration() {

  //Apro la form di login (se l'utente non è loggato)
  if (this.flagUtenteIsLoggato == false) {

    this.modalController.create({
      component: UserRegistrationPage,
      cssClass: 'modal-xl-class'
    })
    .then(elModal => {
      elModal.present();
    })

  }
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
  this.saveUserCredential('','');
  
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
   * Effettua la richiesta per la modifica della password
   * @param idUtente 
   * @param oldPassword 
   * @param newPassword 
   * @returns 
   */
onRequestChangePassword(idUtente: string, oldPassword: string, newPassword: string): Promise<PostResponse> {
  return this.authUserService.onRequestChangePassword(idUtente,oldPassword, newPassword);
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
 * Apre la fotocamera per la foto utente
 */
takePictureUtente():Promise<string> {

  let photoType: PhotoType = PhotoType.account;
  let idPhoto: string = '';
  let myTitle = 'Immagine Profilo';

  return new Promise<string>((resolve, reject) => {
    
    if (this.flagUtenteIsLoggato$) {
  
      //Identificativo della foto
      this.activeUtenteDoc$.subscribe(elutente => {

        idPhoto = elutente.ID;
    
        //Apro la fotocamera per il caricamento
        this.photoService.takePicure(photoType, idPhoto, myTitle)
                        .then(dataUrl => {

                          //Foto memorizzata, la imposto nel servizio utente
                          this.utenteService.setUtenteImmagine(dataUrl);
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

    if (this.flagUtenteIsLoggato$) {
  
      this.activeUtenteDoc$.subscribe(elutente => {
        //Identificativo della foto
        idPhoto = elutente.ID;
    

        //Apro la fotocamera per il caricamento
        this.photoService.storageLoad(photoType, idPhoto)
                        .then(dataUrl => {

                          //Foto memorizzata, la imposto nel servizio utente
                          this.utenteService.setUtenteImmagine(dataUrl);

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
 * Richiede i Tesseramenti per l'utente loggato
 * @param idUtente 
 */
requestListTessereUtente():Promise<void> {
  let idUtente = this.activeUtenteId;
  return this.srvTesseramento.request(idUtente);
}

/**
 * Richiede i Tesseramenti per l'utente passato
 * (non per l'utente attivo e non popola Observable)
 * @param idUtente 
 */
requestListTessereFor(idUtente: string):Promise<Tesseramento[]> {
  return this.srvTesseramento.requestNow(idUtente);
}


//#endregion

//#region REGISTRAZIONE ACCOUNT

/**
 * Chiama il server e chiede l'invio dei PINCODE di registrazione
 * @param docRequestCode Dati per la richiesta da inviare al server
 */
registrationSendCodici(docRequestCode: AccountRequestCode):Promise<AccountOperationResponse> {

    return this.utenteService.registrationSendCodici(docRequestCode);
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
  return this.utenteService.registrationComplete(utenteDoc, richiestaDoc, verificaDoc);
}

/**
 * Chiama il server inviando i codici inseriti dall'utente per chiederne il controllo
 * @param docVerifyCode Dati per la verifica dei codici inseriti
 * @deprecated Utilizzare registrationComplete
 */
registrationVerifyCodici(docVerifyCode: AccountVerifyCode):Promise<AccountOperationResponse> {
  const actualStartConfig = this._startConfig.getValue();
  return this.utenteService.registrationVerifyCodici(actualStartConfig, docVerifyCode);
}

/**
 * Invia al server la richiesta per la registrazione di un nuovo account
 * @param docUtente Nuovo Utente da registrare
 * @param docRequestCode Documento richiesta codici presentato in precedenza
 * @deprecated Utilizzare registrationComplete
 */
registrationFinalize(docUtente: Utente, 
                     docRequestCode: AccountRequestCode):Promise<AccountOperationResponse> {

    const actualStartConfig = this._startConfig.getValue();
    return this.utenteService.registrationFinalize(actualStartConfig,docUtente, docRequestCode);
  }

//#endregion

//#region PSW RECOVERY

/**
 * Viene richiesto al server di inviare al destinatario il Codice di Verifica
 * @param docRequestCode 
 * @returns 
 */
recoverySendCodice(docRequestCode: AccountRequestCode):Promise<AccountOperationResponse> {
  return this.utenteService.recoverySendCodice(docRequestCode);
}

/**
 * Viene reinviato al server il codice di verifica per confrontarlo con quello memorizzato
 * @param docVerifyCode 
 * @returns 
 */
recoveryVerifyCodice(docVerifyCode: AccountVerifyCode):Promise<AccountOperationResponse> {
  return this.utenteService.recoveryVerifyCodice(docVerifyCode);
}


/**
 * Invia al server la richiesta per completare l'operazione di recovery password
 * @param docUtente Utente di rierimento
 * @param docRequestCode Documento richiesta codici presentato in precedenza
 */
recoveryUpdatePassword(docUtente: Utente, 
  docRequestCode: AccountRequestCode):Promise<AccountOperationResponse> {

    return this.utenteService.recoveryUpdatePassword(docUtente, docRequestCode);
}


//#endregion

//#region DATA USER VERIFICATION

/**
 * Richiesta per l'invio di Codici SMS / Mail per effettuare la 
 * verifica dei dati Utente
 * @param docRequestCode Valorizzare Obbligatoriamente USE / IDUTENTE / IDAREA 
 * @returns 
 */
userVerificationSendCodici(docRequestCode: AccountRequestCode):Promise<AccountOperationResponse> {
  return this.utenteService.onUserVerificationSendCodici(docRequestCode );
}

/**
 * Effettua l'aggiornamento dei dati Utente a seguito di una verifica
 * @param docVerify 
 * @param docUtente 
 */
userVerificationFinalize(docVerify: AccountVerifyCode, docUtente: Utente): Promise<AccountOperationResponse> {
  return this.utenteService.onUserVerificationFinalize(docVerify, docUtente);
}


/**
 * 
 * @param docRequestCode 
 * @param docUtente 
 * @deprecated
 * @returns 
 */
validationSendCodici(docRequestCode: AccountRequestCode, docUtente: Utente):Promise<AccountOperationResponse> {  
  return this.utenteService.validationSendCodici(docUtente, docRequestCode );
}

/**
 * 
 * @param docVerifyCode 
 * @returns 
 * @deprecated
 */
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
   * @param decodeChildDoc Decodifica anche i documento di secondo livello
   * @param listNameCollectionDecode Array con i nomi delle Collection da decodificare* 
   * @returns 
   */
  requestPrenotazioneById(idPrenotazione: string, 
                          numChild = 0, 
                          decodeAll = false,
                          decodeChildDoc = false,
                          listNameCollectionDecode?:string[]): Promise<Prenotazione> {
    return this.prenotazioniService.requestPrenotazioneById(idPrenotazione, numChild, decodeAll, decodeChildDoc, listNameCollectionDecode);
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

  /* ************************* */
  /*   CUSTODE PIANIFICAZIONE  */
  /* ************************* */

  /**
   * Richiede l'aggiornamento del totale di una pianificazione
   * E' possibile modificare DURATA / NUM PARTECIPANTI
   * @param samplePianificazione 
   * @returns 
   */
  onRequestCustodePianificazioneChange(samplePianificazione: PrenotazionePianificazione): Promise<Prenotazione> {
    return this.prenotazioniService.requestCustodePianificazioneChange(samplePianificazione);
  }

  onRequestCustodePianificazioneSave(samplePianificazione: PrenotazionePianificazione): Promise<Prenotazione> {
    return this.prenotazioniService.requestCustodePianificazioneSave(samplePianificazione);
  }

  /**
   * Effettua la validazione QrCode
   * @param qrCode 
   */
  validateQrCode(qrCode: string): boolean  {

    let flag: boolean = false;
    let tmpCode: string = '';

    if (qrCode && qrCode.length != 0) {

      //Badge utente
      if (qrCode.startsWith('USR-')) {

        //Inizia con USR potrebbe essere corretto
        tmpCode = qrCode.replace('USR-','');

        if (tmpCode.trim().length != 36) {
          flag = true;          
        }
      }
      else {
        //Puo' Essere un 'PRE-GUIDPrenotazione-GuidPianificazione' => Prenotazione
        //Oppure un 'CRS-Id'
      }
    }

    return flag;
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
 * @param idArea il guid dell'area 
 * @param maxItems il numero di elementi richiesti (Defualt = 30)
 */
requestListNews(idArea: string, maxItems: number = 30){
  
  return this.newsEventiService.request(idArea,maxItems);

}

/** Effettua la richiesta al servizio di una news
 * @param idNews News scelta 
 * 
 */
requestNewsByID(idNews: string): Promise<NewsEvento> {
  
  return this.newsEventiService.requestById(idNews);
  
}

//#endregion

//#region TIPI PAGAMENTI

/**
 * Effettua la richiesta per la lista dei Tipi Pagamenti
 * @param numChild Default = 1
 * @param decodeAll Default = FALSE
 * @returns 
 */
requestListTipiPagamenti(numChild:number = 1, decodeAll: boolean = false): Promise<TipoPagamento[]> {
  return this.tipoPagamentoService.request(numChild, decodeAll);
}
//#endregion

//#region EVENTI
get listEventi() {
  return this.eventoService.listEventi$;
}

/**
 * Effettuo la richiesta di un Evento
 * @param idEvento 
 * @param numChild Profondità della richiesta (1 Il solo documento / 2+ Profondita Collection)
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

//#region SHOP 

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
  return this.articoloService.requestById(this.actualStartConfig, idArticolo, numChild, decodeAll);
}

/**
 * Ritorna il path per la visualizzazione di un prodotto
 * @param idProduct 
 */
getUrlPageDisplayProduct(idProduct: string): string[] {
  let retPath = [];

  if (idProduct && idProduct.length != 0) {
    retPath = ['/','appstart-home','tab-shop','display-product', idProduct];
  }

  return retPath;
}


get listShopCarrello(): ShopCarrello[] {
  return this.shopService.listShopCarrello;
}

get listShopCarrello$() {
  return this.shopService.listShopCarrello$;
}

/**
 * Carrello in versione Observable
 */
get activeCart$() {
  return this.shopService.activeCart$;
}

/**
 * Carrello in versione NON OBSERVABLE
 */
get activeCart() {
  return this.shopService.activeCart;
}

/**
 * Effettuo la richiesta di un Carrello per Id
 * @param idCarrello 
 * @param numChild Profondità della richiesta (1 Il solo documento / 2+ Profondita Collection)
 * @param decodeAll Decodifica le chiavi esterne
 * @returns 
 */
requestShopCarrelloById(idCarrello: string, 
                        numChild = 0, 
                        decodeAll = false): Promise<ShopCarrello> {

  return this.shopService.requestById(idCarrello, numChild, decodeAll);
}

/**
 * Richiede l'elenco degli ordini effettuati da un utente
 * @returns 
 */
requestListShopCarrelli():Promise<ShopCarrello[]> {
  let idUtente = this.activeUtenteId;
  return this.shopService.requestList(idUtente);
}

/**
 * Aggiunge un elemento al carrello attivo
 * @param articoloDoc Articolo
 * @param idArticoloTaglia Taglia
 * @param idArticoloColor Colore
 */
shopAddItemToCart(articoloDoc:Articolo, 
    idArticoloTaglia?:string, 
    idArticoloColor?:string): Promise<void> {  

        return this.shopService.addItemToCart(articoloDoc, idArticoloTaglia, idArticoloColor);
}

/**
 * Rimuove la riga richiesta dal carrello
 * @param idDetail 
 * @param {boolean} recalc Esegue il ricalcolo contattando il server
 */
shopRemoveItemFromCart(idDetail: string, recalc = true):Promise<void> {
  return this.shopService.removeItemFromCart(idDetail, recalc);
}


/**
 * Modifica la Quantita di un articolo di carrello
 * @param idDetail 
 * @param qta 
 * @param recalc 
 * @returns 
 */
shopChangeItemQuantityFromCart(idDetail: string, qta: number, recalc = true):Promise<void> {
  return this.shopService.changeItemQuantityFromCart(idDetail, qta, recalc);
}

/**
 * Contatta il server, inviando il carrello e ottenendo un carrello 
 * completo di importi, totali etc
 */
shopRecalcCart(): Promise<void> {
  return this.shopService.recalcCart();
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
   
    let myParams= this.docStructureService.getHttpParams().set('Tipo', tipo+'');

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


//#region FILE SERVICE
requestDocumento(urlDocumento: string) {
  return this.fileService.downloadFile(this.actualStartConfig, urlDocumento);
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
 * Ritorna il valore come Array e come Observable
 * listTipoTessere$
 */
requestListTipoTessere(): Promise<TipoTessera[]> {
  return this.srvTipoTessere.request();
}
//#endregion


//#region IMPEGNI


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
requestImpegniCustode(periodAnalize: RangeSearch,
                      periodDate: Date,
                      idArea: string,
                      idLocation?: string,
                      numMaxRequest: number = 10): Promise<void> {

  return this.impegniCustodeService.request(periodAnalize,
                                            periodDate,
                                            idArea,
                                            idLocation,
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

  /**
   * Ritorna Impegno Custode dal IDRef
   * @param idRef 
   */
  requestImpegnoCustodeByIdRef(idRef: string, numChild = 0, decodeAll=false): Promise<ImpegnoCustode> {
    return this.impegniCustodeService.requestByIdRef(idRef, numChild, decodeAll);
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


//#region COMPOSE URL ROUTING PAGE

/**
 * 
 * @param type Quale pagina vuole visualizzare
 * @param primaryKey Chiave primaria
 * @returns 
 */
getUrlPageCustomer(type: 'list' | 'detail', primaryKey?:string): string[] {
  let retPath = [];
  switch (type) {
    case 'list':
      retPath = ['/','appstart-home','tab-agenda','customer','customer-list'];
      break;

    case 'detail':
      retPath = ['/','appstart-home','tab-agenda','customer','customer-detail',primaryKey];
      break;      
  
    default:
      break;
  }
  return retPath;
}


/**
 * 
 * @returns Array Routing per la pagina agenda
 */
getUrlPageAgenda(): string[] {
  let retPath = [];

  retPath = ['/','appstart-home','tab-agenda'];
  return retPath;
}

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
 * Ritorna il path per andare nel dettaglio
 * @param type 
 * @param idPrimaryKey 
 */
getUrlPageDetailNewsEventi(type: 'news' | 'evento', idPrimaryKey): string[] {
  
  let retPath = [];
  retPath = ['/','appstart-home','tab-eventi'];

  if (idPrimaryKey && idPrimaryKey.length != 0) {
    switch (type) {
      case 'news':
          retPath.push('news-detail');
          retPath.push(idPrimaryKey);
        break;
      case 'evento':
          retPath.push('evento-detail');
          retPath.push(idPrimaryKey);
        break;  
    
      default:
        break;
    }
  }

  return retPath;
}

  
  /**
  * Nel caso debba navigare verso una location utilizzare questo metodo per 
  * avere il percorso corretto
  * 
  * Url pagina per andare verso una location
  * @param where Cosa si desidera effettuare con la location
  * @param idLocation Location di riferimento
  */
  getUrlPageLocation(where: TypeUrlPageLocation, 
                     idPrimaryKey: string, 
                     ): string[] {
      let retPath = ['/','appstart-home','tab-home','location'];

      switch (where) {
        case TypeUrlPageLocation.LocationDetail:
          retPath.push('detail');
          retPath.push(idPrimaryKey);
          break;

        case TypeUrlPageLocation.LocationBooking:
          retPath.push('booking');
          retPath.push(idPrimaryKey);
          break;  
                
        case TypeUrlPageLocation.CourseList:
          retPath.push('courselist');
          retPath.push(idPrimaryKey);          
          break;

        case TypeUrlPageLocation.CourseDetail:
          retPath.push('coursedetail');
          retPath.push(idPrimaryKey);          
          break;          
      
        default:
          break;
      }
  
      return retPath;
  }


//#endregion

//#region ADVERTISING

get activeAdvertisingConfig$() {
  return this.advertisingService.activeAdvertisingConfig$;
}

get activeAdvertisingConfig() {
  return this.activeAdvertisingConfig;
}


/**
 * Imposta se l'advertising è stato inizializzato
 * @param flag TRUE / FALSE
 */
setInitializedAdvertising(flag: boolean): void {
  this.advertisingService.setInitialized(flag);
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
presentAlertMessage(myMessage: string | ErrorEvent, 
                    myTitle?: string, 
                    myButtons?: (AlertButton | string)[]) {
  
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


