import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ModesCalendar } from 'src/app/library/models/mydatetime.model';
import { Area } from 'src/app/models/struttura/area.model';
import { ButtonCard } from 'src/app/models/zsupport/buttoncard.model';
import { GeneratorQrcode } from 'src/app/models/imdb/generator-qrcode.model';
import { ImpegnoCollaboratore } from 'src/app/models/utente/impegno-collaboratore.model';
import { ImpegnoCustode } from 'src/app/models/utente/impegno-custode.model';
import { Impegno } from 'src/app/models/utente/impegno.model';
import { Location } from 'src/app/models/struttura/location.model';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { Utente } from 'src/app/models/utente/utente.model';
import { RangeSearch, SettoreAttivita, SettoreQrCode } from 'src/app/models/zsupport/valuelist.model';
import { StartService } from 'src/app/services/start.service';
import { QrCodeScannerComponent } from 'src/app/shared/components/qr-code-scanner/qr-code-scanner.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab-agenda',
  templateUrl: './tab-agenda.page.html',
  styleUrls: ['./tab-agenda.page.scss'],
})
export class TabAgendaPage implements OnInit, OnDestroy {

  constructor(private startService: StartService,
              private navController: NavController,
              private modalController: ModalController) { 

    //Crea il record Tutte le Location (se ne arrivano altre verranno impostate)
    this.setListLocation();

    this.prepareCardImpegniPersonali();
    //Preparo la card in caso di assenza Impegni Trainer
    this.emptyImpegnoTrainerCard = ImpegnoCollaboratore.asEmptyButtonCard();
    //Preparo la card in caso di assenza Impegni Custode
    this.emptyImpegnoCustodeCard = ImpegnoCustode.asEmptyButtonCard();

    //Controllo se sono in versione Desktop
    this.platformDesktop = this.startService.isDesktop;
  }

  platformDesktop = false;
  developerMode = !environment.production;
  flagOnRefresh: boolean = false;
  refresherEvent: any; //Evento di refresh

  selectedArea: Area;
  selectedAreaListen: Subscription;

  //Location
  listLocationListen: Subscription;
  listLocation: Location[] = [];
  selectedLocation: Location;
  idSelectedLocation: string = '';
  id_location_tutte: string = 'idtutte';
  
  //Identificativo Utente Loggato
  flagUserLogged: boolean = false;
  subFlagUserLogged: Subscription;

  //Utente Loggato
  utenteDoc: Utente;
  subUtenteDoc: Subscription;
  
  //Lista Impegni Personali
  listImpegni: Impegno[] = [];
  subListImpegni: Subscription;
  nextImpegno: Impegno = null;
  subNextImpegno: Subscription;
  nextImpegnoCard: ButtonCard = null;
  noImpegnoCard: ButtonCard = null;

  eventImpegniIonInfinit: any; //Eventuale evento IonInfinity

  //Lista Impegni Trainer
  listImpegniTrainer: ImpegnoCollaboratore[] = [];
  sublistImpegniTrainer: Subscription;
  emptyImpegnoTrainerCard: ButtonCard = null;
  eventImpegniTrainerIonInfinit: any; //Eventuale evento IonInfinity

  //Lista Impegni Custode
  listImpegniCustode: ImpegnoCustode[] = [];
  sublistImpegniCustode: Subscription;
  emptyImpegnoCustodeCard: ButtonCard = null;
  eventImpegniCustodeIonInfinit: any; //Eventuale evento IonInfinity
  inputManualCode: string = '';


  selectedView: 'personal' | 'trainer' | 'custode' = 'personal';

  numRequestImpegniTop = 10; //Numero dei dati richiesti come impegni personali
  numRequestImpegniTrainerTop = 10; //Numero dei dati richiesti come impegni trainer
  numRequestImpegniCustodeTop = 10; //Numero dei dati richiesti come impegni custode
  futureRequestImpegni = true; //Chiede solo quelli futuri

  
  //#region FILTRO RICERCA TRAINER

  /* Filtri ricerca Trainer */
  searchTrainerPeriodo = RangeSearch.giorno;

  //Lista di ricerca dei possibili periodi
  searchListPeriodi: IMapData[] = [{
      value: RangeSearch.giorno,
      title: 'Giorno'
    }, 
    {
      value: RangeSearch.settimana,
      title: 'Settimana'
    },
    {
      value: RangeSearch.mese,
      title: 'Mese'
    }];

    //Data Analisi ricerca Trainer
    searchTrainerDate: Date = new Date();

    /**
   * Modalità del calendario per il filtro trainer
   */
  get searchTrainerCalendarMode(): ModesCalendar {
    let mode: ModesCalendar = ModesCalendar.date;

    switch (this.searchTrainerPeriodo) {

      case RangeSearch.giorno:
        mode = ModesCalendar.date;
        break;

      case RangeSearch.settimana:
        mode = ModesCalendar.date;
        break;
      
      case RangeSearch.mese:
        mode = ModesCalendar.monthYear;
        break;
        
    
      default:
        mode = ModesCalendar.date;
        break;
    }

    return mode;
  }

  /**
   * Etichetta mostrata nel filtro della Data Search Trainer
   */
  get searchTrainerDateLabel(): string {
    let myLabel = 'filtro';

    switch (this.searchTrainerPeriodo) {

      case RangeSearch.giorno:
        myLabel = 'giornata del';
        break;

      case RangeSearch.settimana:
        myLabel = 'settimana del';
        break;
      
      case RangeSearch.mese:
        myLabel = 'mese di';
        break;
        
    
      default:
        myLabel = 'filtro';
        break;
    }

    return myLabel;
  }
  //#endregion

  //#region FILTRO RICERCA CUSTODE

  /* Filtri ricerca Custode */
  searchCustodePeriodo = RangeSearch.giorno;

  //Data Analisi ricerca Trainer
  searchCustodeDate: Date = new Date();

    /**
   * Modalità del calendario per il filtro custode
   */
  get searchCustodeCalendarMode(): ModesCalendar {
    let mode: ModesCalendar = ModesCalendar.date;

    switch (this.searchCustodePeriodo) {

      case RangeSearch.giorno:
        mode = ModesCalendar.date;
        break;

      case RangeSearch.settimana:
        mode = ModesCalendar.date;
        break;
      
      case RangeSearch.mese:
        mode = ModesCalendar.monthYear;
        break;
        
    
      default:
        mode = ModesCalendar.date;
        break;
    }

    return mode;
  }

  /**
   * Etichetta mostrata nel filtro della Data Search Custode
   */
  get searchCustodeDateLabel(): string {
    let myLabel = 'filtro';

    switch (this.searchCustodePeriodo) {

      case RangeSearch.giorno:
        myLabel = 'giornata del';
        break;

      case RangeSearch.settimana:
        myLabel = 'settimana del';
        break;
      
      case RangeSearch.mese:
        myLabel = 'mese di';
        break;
        
    
      default:
        myLabel = 'filtro';
        break;
    }

    return myLabel;
  }

  /**
   * Codice inserito nella parte custode
   * @param event 
   */
  handleInputCodeCustode(event) {
    const query = event.target.value.toLowerCase();
    
  }

  /**
   * Inserimento manuale del codice barcode custode
   */
  onClickSearchManualCode() {
    if (this.inputManualCode && this.inputManualCode.length != 0) {
      this.redirectWithQrCode(this.inputManualCode);
    }
  }
  //#endregion  

  //Utente Trainer
  get showTrainer(): boolean {
    return (this.flagUserLogged && (this.utenteDoc.isAssistenteTrainer || this.utenteDoc.isTrainer))
  } 
  
  //Utente Custode
  get showCustode(): boolean {
    return (this.flagUserLogged && this.utenteDoc.isCustode)
  } 

  /**
   * Visualizzo il Segmento superiore solo se sono anche un trainer o custode
   */
  get showSegmentTop():boolean {
    return this.showTrainer || this.showCustode;
  }
  
  

  ngOnInit(): void {
    this.onListenArea();
    this.onListenLocation();
    this.onListenUtente();
    this.onListenImpegniPersonali();
    this.onListenImpegniTrainer();
    this.onListenImpegniCustode();
  }

  ngOnDestroy(): void {
    this.onUnscribeAll();
  }

  ionViewDidEnter() {
    this.requestListImpegniTrainer();
    this.requestListImpegniPersonali();
    this.requestListImpegniCustode();
  }

  /**
   * Metto in ascolto della modifica dell'area
   */
  onListenArea(): void {
    this.selectedAreaListen = this.startService.areaSelected$
                    .subscribe(areaSel => {
                        //Area cambiata
                        this.selectedArea = areaSel;
                        //Richiesta Custode
                        this.requestListImpegniCustode();
                    });                  
  }

  /**
   * Ascolto le location
   */
  onListenLocation(): void {
    // QUI POSSO AGGANCIARE EVENTI ALL'ARRIVO DELLE LOCATIONS
    // Sottoscrivo alla ricezione delle Locations
    this.listLocationListen = this.startService.listLocation
                                        .subscribe({
                                          next: (dataRecevied) => {
                                            //Imposto la lista location e
                                            //il Documento di selezione 
                                            this.setListLocation(dataRecevied);

                                          },
                                          error: (errLog) => {
                                            LogApp.consoleLog(errLog);
                                          }
                                        })    
  }

  /**
   * Definisce e imposta la Lista delle Location
   * @param dataReceived Lista eventuale di altre location
   */
  setListLocation(dataReceived?:Location[]): void {
    let locationDoc: Location;

    //Svuoto la precedente
    this.listLocation = [];

    //Creo un documento per tutte
    locationDoc = new Location(true);
    locationDoc.ID = this.id_location_tutte;
    locationDoc.DENOMINAZIONE = 'Tutte le location';
    this.listLocation.push(locationDoc);

    if (dataReceived) {

      //Ciclo e imposto le altre
      dataReceived.forEach(elRecevied => {
        //Elenco Location
        this.listLocation.push(elRecevied);
      });  

    }

    //Imposto la Location selezionata
    this.selectedLocation = locationDoc;
    this.idSelectedLocation = locationDoc.ID;
    
  }

  /**
   * Metto in ascolto delle modifiche dell'utente
   */
  onListenUtente(): void {

    //Sottoscrivo all'ascolto dell'Account
    this.subUtenteDoc = this.startService.activeUtenteDoc$
            .subscribe(element => {
              //Recupero utente
                this.utenteDoc = element;
                //Simulo un cambio segmento
                this.onChangeSegmentTop(null);
            });    

    //Sottoscrivo all'ascolto di un utente loggato
    this.subFlagUserLogged = this.startService.flagUtenteIsLoggato$
          .subscribe(element => {
              //Recupero l'utente
              this.flagUserLogged = element;    
          });

  }  

  /**
   * Sottoscrivo all'elenco degli impegni personali
   */
  onListenImpegniPersonali(): void {
    //In ascolto della Lista Impegni
    this.subListImpegni = this.startService.listImpegniPersonali$
                                           .subscribe(dataList => {
                                              //Cambia la lista degli impegni
                                              this.listImpegni = dataList;
                                              //Gestione dell'eventuale refresher
                                              this.onAfterRefresh();
                                              //Gestione del IonInifiteScroll
                                              if (this.eventImpegniIonInfinit && this.eventImpegniIonInfinit.target) {
                                                this.eventImpegniIonInfinit.target.complete();
                                              }
                                           });

    this.subNextImpegno = this.startService.nextImpegnoPersonale$
                                          .subscribe(myImpegno => {
                                            //Cambia il prossimo impegno
                                            this.nextImpegno = myImpegno;
                                            //Preparo la card del prossimo impegno personale
                                            this.prepareCardImpegniPersonali();
                                          })
  }

  onListenImpegniTrainer(): void {
    this.sublistImpegniTrainer = this.startService.listImpegniCollaboratore$
                                     .subscribe(dataList => {
                                        //Cambia la lista Trainer
                                        this.listImpegniTrainer = dataList;
                                        //Gestione dell'eventuale refresher
                                        this.onAfterRefresh();
                                        //Gestione del IonInifiteScroll
                                        if (this.eventImpegniTrainerIonInfinit && this.eventImpegniTrainerIonInfinit.target) {
                                          this.eventImpegniTrainerIonInfinit.target.complete();
                                        }                                        
                                     })
  }

  onListenImpegniCustode(): void {
    this.sublistImpegniCustode = this.startService.listImpegniCustode$
                                     .subscribe(dataList => {
                                        //Cambia la lista Custodi
                                        this.listImpegniCustode = dataList;
                                        //Gestione dell'eventuale refresher
                                        this.onAfterRefresh();

                                        //Gestione del IonInifiteScroll
                                        if (this.eventImpegniCustodeIonInfinit && this.eventImpegniCustodeIonInfinit.target) {
                                          this.eventImpegniCustodeIonInfinit.target.complete();
                                        }                                        
                                     })
  }  

  onUnscribeAll(): void {
    if (this.selectedAreaListen) {
      this.selectedAreaListen.unsubscribe();
    }

    if (this.listLocationListen) {
      this.listLocationListen.unsubscribe();
    }    

    if (this.subFlagUserLogged) {
      this.subFlagUserLogged.unsubscribe();
    }

    if (this.subUtenteDoc) {
      this.subUtenteDoc.unsubscribe();
    }  
    
    if (this.subListImpegni) {
      this.subListImpegni.unsubscribe();
    }
    
    if (this.sublistImpegniTrainer) {
      this.sublistImpegniTrainer.unsubscribe();
    }

    if (this.sublistImpegniCustode) {
      this.sublistImpegniCustode.unsubscribe();
    }    

  }  

  /* Gestione Segment */
  onChangeSegmentTop(event:any) {
    switch (this.selectedView) {
      case 'personal': 
          this.requestListImpegniPersonali();
          break;
      case 'trainer':
          this.requestListImpegniTrainer();        
        break;
      case 'custode':
          this.requestListImpegniCustode();
        break;
    }
  }

    /**
   * Esecuzione del Refresh Dati
   * @param event 
   */
    doRefresh(event:any) {

      this.flagOnRefresh = true;
      this.refresherEvent = event;

      this.onChangeSegmentTop(event);
    }

   /**
   * Chiamare al termine della ricezione dei dati   
   */
  onAfterRefresh() {
    //Chiude il refresher in interfaccia
    if (this.flagOnRefresh) {
      this.flagOnRefresh = false;

      if (this.refresherEvent && this.refresherEvent.target) {
        this.refresherEvent.target.complete();      
      }

    }
  }

  //#region IMPEGNI PERSONALI

  /**
   * Vado alla pagina della Lista Generale della persona
   */
  onClickGoToPersonalHistoryList() {
    let urlPath = this.startService.getUrlPageHistoryPersonal('list');
    this.navController.navigateForward(urlPath);
  }

  /**
   * Click su un impegno personale
   * @param impegnoDoc 
   */
  onClickImpegnoPersonale(impegnoDoc: Impegno) {
    let urlPath = [];
    let primaryKey = '';
    let typeUrl: 'list' | 'course' | 'book';

    
    if (impegnoDoc) {
      primaryKey = impegnoDoc.getIdentifier();

      if (primaryKey.length != 0) {

        switch (impegnoDoc.SETTORE) {
          case SettoreAttivita.settoreCorso:
              typeUrl = 'course';
            break;

          case SettoreAttivita.settorePrenotazione:
            typeUrl = 'book';
          break;            
        
          default:
            break;
        }

        if (typeUrl.length != 0) {
          urlPath = this.startService.getUrlPageHistoryPersonal(typeUrl,primaryKey);
          this.navController.navigateForward(urlPath);
        }
      }
      
    }
  }

  /**
   * Prepara la Card da visualizzare per gli impegni personali
   * a seconda se è presente un impegno oppure no
   */
  prepareCardImpegniPersonali() {
    if (this.nextImpegno) {
      //Impegno presente
      this.nextImpegnoCard = this.nextImpegno.asButtonCard();
      this.noImpegnoCard = null;
      console.log(this.nextImpegnoCard);
    }
    else {
      this.nextImpegnoCard = null;
      this.noImpegnoCard = Impegno.asEmptyButtonCard();
    }
  }

  /**
   * Richiede la lista degli impegni personali
   */
  requestListImpegniPersonali() {
    let idUtente = (this.utenteDoc ? this.utenteDoc.ID : '');
    //Effettuo la richiesta
    this.startService.requestImpegniPersonali(idUtente, this.futureRequestImpegni, this.numRequestImpegniTop);
  }

  /**
   * Scroll della videata relativi agli Impegni Personali
   * @param ev 
   */
  onActivateInfiniteScrollImpegni(ev: any) {

    switch (this.numRequestImpegniTop) {
      case 10:
          this.numRequestImpegniTop = 50;
        break;
      case 50:
        this.numRequestImpegniTop = 100;
        break;
      case 100:
        this.numRequestImpegniTop = 0;
        break;
    
      default:
        break;
    }

    this.eventImpegniIonInfinit = ev;

    //Faccio la richiesta
    this.requestListImpegniPersonali();
  }

  
  //#endregion

  //#region IMPEGNI TRAINER
  
  /**
   * Url pagina della lista Valutazioni Trainer
   */
  get urlPageListValutazioniTrainer(): string[] {
    let retPath = ['/','appstart-home','tab-agenda','trainer','list-valutazioni'];

    return retPath;
  }

  /**
   * Vado alla pagina della Lista Valutazioni Trainer
   */
  onClickGoToListaValutazioniTrainer() {
    let urlPath = this.urlPageListValutazioniTrainer;
    this.navController.navigateForward(urlPath);
  }
  /**
   * Effettua la ricerca degli impegni Trainer
   */
  requestListImpegniTrainer() {
    let idCollaboratore = (this.utenteDoc ? this.utenteDoc.ID : '');
    let mansione = (this.utenteDoc ? this.utenteDoc.MANSIONE : 0);

    this.startService.requestImpegniCollaboratore(idCollaboratore, 
                                            mansione,
                                            this.searchTrainerPeriodo, 
                                            this.searchTrainerDate,
                                            this.numRequestImpegniTrainerTop);
  }

  
  /**
   * Scroll della videata relativi agli Impegni Trainer
   * @param ev 
   */
  onActivateInfiniteScrollImpegniTrainer(ev: any) {

    switch (this.numRequestImpegniTrainerTop) {
      case 10:
        this.numRequestImpegniTrainerTop = 50;
        break;
      case 50:
        this.numRequestImpegniTrainerTop = 100;
        break;
      case 100:
        this.numRequestImpegniTrainerTop = 0;
        break;
    
      default:
        break;
    }

    this.eventImpegniTrainerIonInfinit = ev;

    //Faccio la richiesta
    this.requestListImpegniTrainer();
  }


  /**
   * 
   * @param valuePeriod Modifica del periodo di ricerca trainer
   */
  onChangePeriodoTrainer(valuePeriod: RangeSearch) {
    //Reimposto 10 Elementi
    this.numRequestImpegniTrainerTop = 10;

    this.searchTrainerPeriodo = valuePeriod;
    this.requestListImpegniTrainer();
  }

  /**
   * Cambia la Data Filtro per il trainer
   */
  onChangeDataPeriodoTrainer(): void {
    //Reimposto 10 Elementi
    this.numRequestImpegniTrainerTop = 10;
    //Faccio la richiesta
    this.requestListImpegniTrainer();
  }


  /**
   * Click per la visualizzazione dell'impegno
   * @param impegnoDoc 
   */
  onClickImpegnoTrainer(impegnoDoc: ImpegnoCollaboratore): void {
    let pathNavigate = [];

    if (impegnoDoc) {
      //Per ora gestisco solo i corsi
      if (impegnoDoc.SETTORE == SettoreAttivita.settoreCorso) {
        //trainer/detail-presenza/
        pathNavigate = ['/','appstart-home','tab-agenda','trainer','detail-presenza',impegnoDoc.ID]; 
        this.navController.navigateForward(pathNavigate);
      }
    }
  }
  //#endregion

  //#region IMPEGNI CUSTODE
  /**
   * Effettua la ricerca degli impegni Custode
   */
  requestListImpegniCustode() {
    let idArea = (this.selectedArea ? this.selectedArea.ID : '');
    let idLocation = '';

    if (this.idSelectedLocation != this.id_location_tutte) {
      idLocation = this.idSelectedLocation;
    }

    this.startService.requestImpegniCustode(this.searchCustodePeriodo, 
                                            this.searchCustodeDate,
                                            idArea, 
                                            idLocation,
                                            this.numRequestImpegniCustodeTop);
  }

  /**
   * Scroll della videata relativi agli Impegni Custode
   * @param ev 
   */
  onActivateInfiniteScrollImpegniCustode(ev: any) {

    switch (this.numRequestImpegniCustodeTop) {
      case 10:
        this.numRequestImpegniCustodeTop = 50;
        break;
      case 50:
        this.numRequestImpegniCustodeTop = 100;
        break;
      case 100:
        this.numRequestImpegniCustodeTop = 0;
        break;
    
      default:
        break;
    }


    this.eventImpegniCustodeIonInfinit = ev;

    //Faccio la richiesta
    this.requestListImpegniCustode();
  }  


  /**
   * 
   * @param valuePeriod Modifica del periodo di ricerca custode
   */
  onChangePeriodoCustode(valuePeriod: RangeSearch) {
    //Reimposto il valore a 10
    this.numRequestImpegniCustodeTop = 10;
    this.searchCustodePeriodo = valuePeriod;
    this.requestListImpegniCustode();
  }

  /**
   * Cambia la Data Filtro per il custode
   */
  onChangeDataPeriodoCustode(): void {
    //Reimposto 10 Elementi
    this.numRequestImpegniCustodeTop = 10;
    //Faccio la richiesta
    this.requestListImpegniCustode();
  }  

  /**
   * Cambiata la Location sul Custode
   * @param idLocation 
   */
  onChangeLocationCustode(idLocation: string) {

    //Reimposto il valore a 10
    this.numRequestImpegniCustodeTop = 10;

    if (idLocation && idLocation.length != 0) {
      this.idSelectedLocation = idLocation;

      this.selectedLocation = this.listLocation.find(itemLocation => {
        return itemLocation.ID == idLocation
      });

      //Chiedo il recupero Impegni
      this.requestListImpegniCustode();
    }
  }


  /**
   * Click per la visualizzazione dell'impegno
   * @param impegnoDoc 
   */
  onClickImpegnoCustode(impegnoDoc:ImpegnoCustode): void {

    if (impegnoDoc) {
      this.goToAgendaDetailCustode(impegnoDoc.ID);
    }
  }

  /**
   * Click per la lettura di un QrCode Custode
   */
  onClickQrCodeCustode() {
    if (!this.platformDesktop) {
      //Apro la modale per lo scanner
      this.modalController.create({
        component: QrCodeScannerComponent,
        
      })
      .then(elModal => {
        elModal.present();
        return elModal.onDidDismiss();
      })
      .then(objReturn => {

        if (objReturn && objReturn.data) {

          if (objReturn.data.qrcodeData && objReturn.data.qrcodeData.length != 0) {

            
            //Eseguo il redirect con il QrCode
            this.redirectWithQrCode(objReturn.data.qrcodeData);
            
          }
        }
      })
    }
  }

  /**
   * Porta la navigazione alla pagina corretta
   * @param qrCodeData 
   */
  redirectWithQrCode(qrCodeData: string): void {

    let objQrCode: GeneratorQrcode;
    let flagDecode = false;
    let routingFlag = false;

    if (qrCodeData && qrCodeData.length != 0) {
      
      //Controlliamo il QrCode
      objQrCode =  new GeneratorQrcode();
      objQrCode.qrCode = qrCodeData;
      flagDecode = objQrCode.splitQrCode();

      if (flagDecode) {

        switch (objQrCode.tipo) {
          
          case SettoreQrCode.qrCodeUtente:
            //Sembra una decodifica corretta per un Badge Utente
            this.goToDetailCustomer(objQrCode.keyOne);
            routingFlag = true;
            break;

          case SettoreQrCode.qrCodePrenotazione:
              //Questa è una prenotazione
              //Id Impegno = Id Pianificazione
              this.goToAgendaDetailCustode(objQrCode.keyTwo);
              routingFlag = true;
            break;

          case SettoreQrCode.qrCodeCorso:
              //Questa è Iscrizione a un Corso 
              //Mostro la scheda di Iscrizione del corso
              this.goToIscrizioneCorsoCustode(objQrCode.keyOne);
              routingFlag = true;
            break;

          case SettoreQrCode.qrCodeEvento:
              //Questa è Iscrizione all'Evento

            break;
        
          default:
            break;
        }
      }


      if(!routingFlag) {

        this.startService.presentAlertMessage('QrCode non riconosciuto');
        
      }
      
    }    
  }

  /**
   * Va alla pagina del dettaglio informativo per il custode
   * @param idPianificazione (Pianificazione Corso/Prenotazione/Evento)
   */
  goToAgendaDetailCustode(idPianificazione: string) {
    let pathNavigate = [];
    
    if (idPianificazione && idPianificazione.length != 0) {
      pathNavigate = ['/','appstart-home','tab-agenda','custode','detail-occupazione',idPianificazione];
      this.navController.navigateForward(pathNavigate);
    }
  }

  
  /**
   * Visualizza la Scheda di Iscrizione Corso di un utente
   * @param idIscrizione 
   */
  goToIscrizioneCorsoCustode(idIscrizione: string) {
    let pathNavigate = [];
    
    if (idIscrizione && idIscrizione.length != 0) {
      pathNavigate = ['/','appstart-home','tab-agenda','custode','iscrizione-corso-custode',idIscrizione];
      this.navController.navigateForward(pathNavigate);
    }
  }


  /**
   * Va alla pagina con i dettagli del cliente
   * @param idCustomer Cliente di riferimento
   */
  goToDetailCustomer(idCustomer: string) {
    let pathNavigate = [];
    
    if (idCustomer && idCustomer.length != 0) {
      pathNavigate = this.startService.getUrlPageCustomer('detail',idCustomer);
      this.navController.navigateForward(pathNavigate);
    }
  }

  /**
   * Vado alla lista dei Clienti
   */
  goToListCustomer() {
    let pathNavigate = [];
    
    pathNavigate = this.startService.getUrlPageCustomer('list');
    this.navController.navigateForward(pathNavigate);
  }  

  
  //#endregion

}

interface IMapData {
  value: RangeSearch,
  title: string;
}