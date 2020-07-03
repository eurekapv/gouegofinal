import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';

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
import { CamposportService } from './camposport.service';
import { PrenotazioneService } from './prenotazione.service';
import { NewseventiService } from './newseventi.service';
import { SlotoccupazioneService } from './slotoccupazione.service';

import { StartConfiguration } from '../models/start-configuration.model';

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
import { PaymentService } from './payment.service';
import { PaymentConfiguration } from '../models/payment.model';



@Injectable({
  providedIn: 'root'
})
export class StartService {

  /* 
    Creo l'oggetto per iniziare la configurazione passando 
    testingMode = TRUE (verra chiamato un localhost e non gouego)
    secureProtocol = FALSE (chiamata http e non https)
  */
  //Versione Production
  private _startConfig = new BehaviorSubject<StartConfiguration>(new StartConfiguration(false,true));

  //Versione LocalTest
  //private _startConfig = new BehaviorSubject<StartConfiguration>(new StartConfiguration(true,false));
  
  /* Valorizzata a TRUE quando l'app è pronta a partire */
  private _appReady = new BehaviorSubject<boolean>(false);
  private listenLocation: Subscription;

  
  get appReady() {
    return this._appReady.asObservable();
  }

  get startConfig() {
    return this._startConfig.asObservable();
  }

  //Ritorna se l'applicazione sta girando su desktop
  get isDesktop() {
    return !this.platformService.is('hybrid');
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
    private campiSportService: CamposportService,
    private prenotazioniService: PrenotazioneService,
    private newsEventiService: NewseventiService,
    private slotOccupazioneService: SlotoccupazioneService,
    private utentePrenotazioneService: UtenteprenotazioneService,
    private utenteIscrizioneService: UtenteiscrizioneService,
    private paymentService: PaymentService ) { 
    }

  /** Effettua la chiamata WebAPI al Server per richiedere l'autorizzazione */
  requestStartAuthorization() {
    let myHeaders = new HttpHeaders({'Content-type':'application/json'});
    const actualStartConfig = this._startConfig.getValue();
    const myParams = new HttpParams().set('APPID', actualStartConfig.appId);
    const doObject = 'GRUPPOSPORTIVO';
    //Aggiungo negli header la richiesta delle immagini
    myHeaders = myHeaders.set('with-images','1');

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
        this.onAuthorizationGrant(resultData);
      });
      

      
  }

  //Autorizzazione ricevuta
  onAuthorizationGrant(JSONGruppo: any) {
    let elStartConfig = this._startConfig.getValue();

    //Scrivo in console
    LogApp.consoleLog('Autorizzazione ricevuta');

    //Sistemazione del Gruppo nell'oggetto di configurazione
    elStartConfig.setGruppoAuthorization(JSONGruppo);

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
    // 1- CHIEDO ELENCO SPORT, LIVELLI, CATEGORIEETA che mi servono sempre
    let elStartConfig = this._startConfig.getValue();

    this.sportService.request(elStartConfig, false);
    this.livelloService.request(elStartConfig);
    this.categoriaEtaService.request(elStartConfig);

    // 2 - TENTO L'ACCESSO AUTOMATICO
    this.loadStorageUtente();

  }

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
    
    this.locationService.requestByIdArea(actualStartConfig, idArea);
  }

  /** Effettua la richiesta al server di una Location precisa
   * @param idLocation Location scelta 
   * 
   */
  requestLocationByID(idLocation: string, _numLivelli?:number) {
    const actualStartConfig = this._startConfig.getValue();
    
    this.locationService.requestLocationByID(actualStartConfig, idLocation, _numLivelli);
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
  this.sportService.requestLocationSport(actualStartConfig, idLocation);
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
 * Richiede al server le Categorie Eta
 * @param docUser Documento Utente per estrarre corsi solo dedicati all'utente
 */
requestCorsi(docUser?:Utente) {
  const actualStartConfig = this._startConfig.getValue();
  const listSport = this.sportService.actualListSport;
  const listCategoriaEta = this.categoriaEtaService.actualListCategorieEta;
  const listLivelli = this.livelloService.actualListLivelli;


  //Preparo il Servizio Corsi con le liste di decodifica
  this.corsoService.decodeListEta = listCategoriaEta;
  this.corsoService.decodeListLivelli = listLivelli;
  this.corsoService.decodeListSport = listSport;

  //Chiamo il servizio per il recupero corsi
  this.corsoService
      .request(actualStartConfig, 
               docUser);
            
}


/**
 * Ritorna il calendario di un corso
 */
get calendarioCorso() {
  return this.corsoCalendarioService.calendarioCorso;
}

/**
 * Richiesto il calendario del corso
 * @param idCorso Corso richiesto
 */
requestCalendarioCorso(idCorso: string) {
  const actualStartConfig = this._startConfig.getValue();

  this.corsoCalendarioService.request(actualStartConfig, idCorso);
}


//Ritorna il corso selezionato nel servizio
get selectedCorso() {
  return this.corsoService.selectedCorso;
}

//Richiede il programma del Corso
requestCorsoProgramma(idCorso: string) {
  const actualStartConfig = this._startConfig.getValue();
  this.corsoService.requestCorsoProgramma(actualStartConfig, idCorso);
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
            this.requestAuthorization(savedUser.loginUser, savedUser.pwdUser)
                .subscribe (resultData => {
                  if (resultData.MESSAGE !== 0) {
                    //Son riuscito ad accedere correttamente
                    // IN TEORIA NON DEVO FARE NULLA
                    //CI PENSANO GLI ALTRI SUBSCRIBE
                    LogApp.consoleLog('AutoLogin passed');

                  }
                });
            
          }
        }
      });
}




/** Esegue la disconnessione */
logOffAccount() {
  // Avviso del login
  this.utenteService.logoff();

  //Tolgo le credenziali memorizzate dallo storage
  this.saveStorageUtente('','');
  
}

/**
 * Effettua la richiesta 
 * @param username Username Utente
 * @param password Password Utente
 */
requestAuthorization(username: string, 
                    password: string) {

  const actualStartConfig = this._startConfig.getValue();

  //Mi metto in ascolto per i cambi di Area Favorite a seguito della login
  this.onChangeAreaFavListener();

  return this.utenteService
            .requestAuthorization(actualStartConfig, username, password);

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
 * Richiede al server i dati Utente
 * @param idUtente IDUtente
 */
requestUtente(idUtente: string) {
  const actualStartConfig = this._startConfig.getValue();

  this.utenteService
      .request(actualStartConfig, idUtente);
            
}

/**
 * Richiedere al server l'operazione di Update Utente
 * @param docUtenteUpdate Documento Utente con le modifiche da inviare
 */
requestUpdateUtente(docUtenteUpdate: Utente) {
  const actualStartConfig = this._startConfig.getValue();

  return this.utenteService.requestUpdateUtente(actualStartConfig, docUtenteUpdate);
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
 * Se _callback è una funzione, viene eseguita al termine
 */
requestImportoPrenotazione() {
  const actualStartConfig = this._startConfig.getValue();
  return this.prenotazioniService.requestImporto(actualStartConfig);
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
 * @param idPrenotazione idPrenotazione Padre
 */
requestPrenotazioneById(idPrenotazione: string, numLivelli: number) {
  const actualStartConfig = this._startConfig.getValue();
  return this.prenotazioniService.requestById(actualStartConfig, idPrenotazione, numLivelli);
}

//#endregion


//#region UtentePrenotazione


/**
 * Richiede al server elenco di prenotazioni di un utente
 * @param idUtente IDUtente Prenotazione
 */
requestUtentePrenotazioni(idUtente: string) {
  const actualStartConfig = this._startConfig.getValue();
  
  //Richiedo i dati al servizio
  this.utentePrenotazioneService.request(actualStartConfig, idUtente);
}





/**
 * Lista Prenotazioni di tipo Observable
 */
get listUtentePrenotazioni() {
  return this.utentePrenotazioneService.listUtentePrenotazione;
}

//#endregion


//#region UtenteIscrizione


/**
 * Richiede al server elenco di Iscrizioni ai corsi di un utente
 * @param idUtente IDUtente
 */
requestUtenteIscrizioni(idUtente: string) {
  const actualStartConfig = this._startConfig.getValue();
  
  //Richiedo i dati al servizio
  this.utenteIscrizioneService.request(actualStartConfig, idUtente);
}


/**
 * Lista Iscrizioni Corsi di tipo Observable
 */
get listUtenteIscrizioni() {
  return this.utenteIscrizioneService.listUtenteIscrizione;
}

//#endregion

//#region NEWS EVENTI
get listNews() {
  return this.newsEventiService.listNews;
}



/**
 * Recupera le news dal server
 * @param maxRecord Massimo Numero record restituiti (0 = Tutti)
 */
requestNews(idArea: string, maxRecord: number = 0) {
  const actualStartConfig = this._startConfig.getValue();

  //Chiedo il recupero delle News
  this.newsEventiService.request(actualStartConfig, idArea, maxRecord);
}

  /** Effettua la richiesta al servizio di una news
   * @param idNews News scelta 
   * 
   */
  requestNewsByID(idNews: string) {
    
    
    return this.newsEventiService.getNewsById(idNews);
    
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
  this.slotOccupazioneService.request(actualStartConfig, templateSlotDay, docLocation, docCampo, dataGiorno);

}

//#endregion

//#region PAGAMENTI

/**
 * Observable del Risultato dell'operazione di pagamento
 */
get paymentResult() {
  return this.paymentService.paymentResult;
}

/**
 * 
 * @param paymentMode Configurazione del Modo di pagamento
 * @param importo     Importo pagamento 
 * @param valuta      Valuta
 * @param descrizione Descrizione del pagamento visibile in paypal
 */
execPayment(paymentMode: PaymentConfiguration, 
            importo: number,
            valuta?: string,
            descrizione?: string) {

    this.paymentService.execPayment(paymentMode, importo, valuta, descrizione);
}



//#endregion

}
