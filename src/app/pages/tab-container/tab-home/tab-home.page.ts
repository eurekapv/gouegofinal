import { Component, OnDestroy, OnInit } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Subscription } from 'rxjs';
import { Area } from 'src/app/models/struttura/area.model';
import { Location } from 'src/app/models/struttura/location.model';
import { NavController, ModalController } from '@ionic/angular';
import { Utente } from 'src/app/models/utente/utente.model';
import { TypeUrlPageLocation } from 'src/app/models/zsupport/valuelist.model';
import { IAdvertisingConfig } from 'src/app/library/models/advertising-config.model';
import { AdMob, AdMobBannerSize, AdMobError, AdMobRewardItem, AdOptions, AdmobConsentStatus, BannerAdOptions, BannerAdPluginEvents, BannerAdPosition, BannerAdSize, RewardAdOptions, RewardAdPluginEvents } from '@capacitor-community/admob';
import { TrackingAuthorizationStatusInterface } from '@capacitor-community/admob/dist/esm/shared/tracking-authorization-status.interface';
import { environment } from 'src/environments/environment';
import { LogApp } from 'src/app/models/zsupport/log.model';



@Component({
  selector: 'app-home',
  templateUrl: 'tab-home.page.html',
  styleUrls: ['tab-home.page.scss'],
})
export class TabHomePage implements OnInit, OnDestroy {

  // Parametri Iniziali di Configurazione
  startConfig: StartConfiguration;
  startConfigListen: Subscription;

  //Identificativo Utente Loggato
  userLogged: boolean;
  userLoggedListen: Subscription;

  //Utente Loggato
  docUtente: Utente;
  docUtenteListen: Subscription;

  // Elenco delle Aree
  listAree: Area[] = [];
  listAreeListen: Subscription;

  // Elenco delle Location da mostrare
  listLocation: Location[] = [];

  listLocationListen: Subscription;

  activeAdvertisingConfig: IAdvertisingConfig;
  listeActiveAdvertising: Subscription;
  advertisingTestMode: boolean = true; //Modalità Pubblicitaria
  

  // L'area viene recuperata dal subscribe
  selectedIdArea : string;
  selectedArea: Area;
  selectedAreaListen: Subscription;

  idAreaFav: string;
  listenIdAreaFav: Subscription;

  constructor(private startService: StartService,
    private navController: NavController,
    private modalController: ModalController,
  ) {

    //Mi sottoscrivo per la preparazione dell'Advertising
    this.listeActiveAdvertising = this.startService.activeAdvertisingConfig$.subscribe(elAdvertising => {

        this.activeAdvertisingConfig = elAdvertising;
        console.log('Advertising Attiva')
        console.log(this.activeAdvertisingConfig);

        //Posso inizializzare Advertising
        if (this.activeAdvertisingConfig && this.activeAdvertisingConfig.enable) {
          console.log('Advertising Abilitato')
          
          if (this.activeAdvertisingConfig.initialized == false) {

            console.log('Start InitAdvertising')

            //Posso inizializzare Advertising
            this.initAdvertising();

            console.log('Fine InitAdvertising')

          }
        }
        else {
          LogApp.consoleLog('Advertising non abilitato');
        }

    })

    // Parametri di Configurazione Iniziale Applicazione
    this.startConfigListen = this.startService.startConfig
      .subscribe(element => {
        this.startConfig = element;
      });

    // Sottoscrivo alla ricezione delle Aree
    this.listAreeListen = this.startService.listAree$
      .subscribe(listAreeReceived => {

            //Filtro e recupero solo le Aree che devono comparire nell'app
            this.listAree = listAreeReceived.filter(objArea => {
              return objArea.APPSHOW;
            });

        //quando le aree sono arrivate, se non sono loggato seleziono la più vicina
        if (!this.userLogged) {

          //Aspetto 1 secondo a richiedere l'area piu vicina
          setTimeout(() => {

            //Cerco di selezionare l'area piu' vicina
            this.startService.getNearestArea(this.listAree)
                                      .then(nearestArea => {
  
                                        //trovata l'area, posso passarne l'id al metodo selectarea
                                        this.startService.selectAreaByID(nearestArea.ID);
  
                                      })

          }, 1500);

        }
      });


    //QUESTO E' IMPORTANTE, QUI POSSO AGGANCIARE EVENTI A SEGUITO DEL CAMBIO DI AREA
    //Mi sottoscrivo alla ricezione della Area Selezionata
    this.selectedAreaListen = this.startService.areaSelected$
                                      .subscribe(areaSel => {
                                        //controllo se nell'array di aree è presente quella selezionata
                                        if (this.listAree.includes(areaSel)) {
                                          //Cambio Area Selezionata
                                          this.selectedArea = areaSel;
                                        }
                                        //altrimenti setto come area selezionata la prima disponibile
                                        else {
                                          this.selectedArea = this.listAree[0];
                                        }
                                        
                                        //Modifico IDArea
                                        this.selectedIdArea = this.selectedArea.ID;

                                        //richiedo le location sulla base della nuova area selezionata
                                        startService.requestLocationByIdArea(this.selectedIdArea)
                                      
                                      });

    
    // QUI POSSO AGGANCIARE EVENTI ALL'ARRIVO DELLE LOCATIONS
    // Sottoscrivo alla ricezione delle Locations
    this.listLocationListen = this.startService.listLocation
                                        .subscribe(locations => {
                                          this.listLocation = locations;
                                        })

    //Sottoscrivo all'ascolto di un utente loggato
    this.userLoggedListen = this.startService.flagUtenteIsLoggato$
                                                .subscribe(element => {

                                                    //Recupero l'utente
                                                    this.userLogged = element;

                                                });


    //Sottoscrivo all'ascolto dell'Account
    this.docUtenteListen = this.startService.activeUtenteDoc$
                                                .subscribe(element => {

                                                    this.docUtente = element;

                                                  });



  }

//#region Eventi Ionic

/**
 * Accedo alla pagina
 */
  ionViewDidEnter() {
    this.switchAdvertising(true);
  }

  ionViewWillLeave() {
    this.switchAdvertising(false);
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.startConfigListen) {
      this.startConfigListen.unsubscribe();
    }

    if (this.listAreeListen) {
      this.listAreeListen.unsubscribe();
    }

    if (this.listLocation) {
      this.listLocationListen.unsubscribe();
    }

    if (this.selectedAreaListen) {
      this.selectedAreaListen.unsubscribe();
    }

    if (this.userLoggedListen) {
      this.userLoggedListen.unsubscribe();
    }

    if (this.docUtenteListen) {
      this.docUtenteListen.unsubscribe();
    }

    if (this.listeActiveAdvertising) {
      this.listeActiveAdvertising.unsubscribe();
    }


  }  

//#endregion

//#region GESTIONE SCELTA AREA OPERATIVA

  /**
   * L'utente ha scelto un altra pagina
   * @param segmentSelected Cambio Visualizzazione del Segment
   */
  onChangeSegment(segmentSelected)
  {
    if (segmentSelected && segmentSelected.detail && segmentSelected.detail.value) {

      this.startService.selectAreaByID(segmentSelected.detail.value);
    }

  } 

//#endregion


//#region CARD AREA LOCATION

/**
 * Ritorna il valore da applicare alle colonne delle Card Location
 * @param breakpoint 
 * @returns 
 */
  getValueIonColSize(breakpoint: string): number {
    let valueReturn = 12;

    switch (breakpoint) {
      case 'xs':
        valueReturn = 12;
        break;

      case 'sm':
         valueReturn = 12;
        break;

      case 'md':
        if (this.listLocation && this.listLocation.length > 1) {
          valueReturn = 6;
        }
        break;

      case 'lg':
          if (this.listLocation && this.listLocation.length > 1) {
            valueReturn = 6;
          }
        break;

      case 'xl':
          if (this.listLocation && this.listLocation.length > 1) {
            valueReturn = 6;
          }
        break;                
    
      default:
        break;
    }
    return valueReturn;
  }


  /**
   * Prenotazione
   * @param location Location Selezionata
   */
  onClickPrenota(location: Location) {
    let fullPath: string[] = [];
    fullPath = this.startService.getUrlPageLocation(TypeUrlPageLocation.LocationBooking, location.ID);
    this.navController.navigateForward(fullPath);
  }

  /**
   * Visualizzazione della lista dei corsi a periodo
   * @param location Location Selezionata
   */
   onClickCorsiPeriodi(location: Location) {
    let fullPath: string[] = [];
    fullPath = this.startService.getUrlPageLocation(TypeUrlPageLocation.PeriodicCourseList, location.ID);
    this.navController.navigateForward(fullPath);
  }  

  /**
   * Visualizzazione della lista dei corsi a giornata
   * @param location Location Selezionata
   */
  onClickCorsiGiornata(location: Location) {
    let fullPath: string[] = [];
    fullPath = this.startService.getUrlPageLocation(TypeUrlPageLocation.DailyCourseList, location.ID);
    this.navController.navigateForward(fullPath);
  }    

  /**
   * Scheda Location
   * @param location Location selezionata
   */
  onClickLocation(location: Location) {

    let fullPath: string[] = [];

    if (location) {

      fullPath = this.startService.getUrlPageLocation(TypeUrlPageLocation.LocationDetail, location.ID);
     
      this.navController.navigateForward(fullPath);
    }
  }

  //#endregion


  //#region ADVERTISING
  initAdvertising(): void {

    //A seconda se sono in produzione oppure no
    this.advertisingTestMode = environment.advertisingTestMode;

    AdMob.trackingAuthorizationStatus()
         .then((result: TrackingAuthorizationStatusInterface) => {
            if (result.status === 'notDetermined') {
              //Annunci personalizzati - Imposto il consenso
              if (environment.advertisingPersonalized) {
                this.showAdvertisingConsent();
              }
              LogApp.consoleLog('Informativa Advertising non mostrata');
            }

            AdMob.initialize({
              requestTrackingAuthorization: true,
              initializeForTesting: this.advertisingTestMode
            })
            .then(() => {
              LogApp.consoleLog('Advertising inizializzato');
              //Componente Inizializzato
              this.activeAdvertisingConfig.initialized = true;
              this.startService.setInitializedAdvertising(true);

              //Aggiungo i listener
              this.addAdvertisingListening();

              //Posso procedere con la visualizzazione di un banner
              this.showAdvertisingBanner();

            })
            .catch(error => {
              LogApp.consoleLog(error, 'error');
              //Componente Non Inizializzato
              this.activeAdvertisingConfig.initialized = false;
              this.startService.setInitializedAdvertising(false);
            })

         })
  }

  /**
   * Aggiungo alcuni listner sulle operazioni
   */
  addAdvertisingListening() {

    //Fallito caricamento banner
    AdMob.addListener(BannerAdPluginEvents.FailedToLoad, (info: AdMobError ) => {
      LogApp.consoleLog('Errore caricamento Banner', 'error');
      LogApp.consoleLog(info, 'error');
    })

    AdMob.addListener(BannerAdPluginEvents.SizeChanged, (info:AdMobBannerSize) => {
      LogApp.consoleLog(`Cambio dimensione banner Width: ${info.width} x Height: ${info.height}`);
    })
  }

  /**
   * Se necessario mostra il consenso agli advertising
   */
  async showAdvertisingConsent() {
    const consentInfo = await AdMob.requestConsentInfo();
  
    if (consentInfo.isConsentFormAvailable && consentInfo.status === AdmobConsentStatus.REQUIRED) {
      const {status} = await AdMob.showConsentForm();
    }
  }

  /**
   * Effettua lo Switch del Banner
   * @param requestShow 
   */
  switchAdvertising(requestShow:boolean) {

    setTimeout(()=>{

      if (this.activeAdvertisingConfig) {
  
        if (this.activeAdvertisingConfig.enable && 
          this.activeAdvertisingConfig.initialized) {
            if (requestShow == false) {
              if (AdMob.hideBanner)
              //Nascondo il Banner
              AdMob.hideBanner();
            }
            else {
              AdMob.resumeBanner();
            }
          }
  
      }

    }, 500)
  }

  /**
   * Visualizzo un Banner Pubblicitario sulla Home
   */
  showAdvertisingBanner() {

    //In modalità Test non imposto nessun idAnnuncio
    let idAnnuncio = this.advertisingTestMode ? '' : this.activeAdvertisingConfig.bannerId[0];

    const options: BannerAdOptions = {
      adId: idAnnuncio,
      adSize: BannerAdSize.ADAPTIVE_BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: this.activeAdvertisingConfig.bannerMarginBottom,
      isTesting: this.advertisingTestMode,
      npa: !this.activeAdvertisingConfig.personalizeAds //Non-Personalized Ads
    }



    AdMob.showBanner(options)
         .then(() => {
            LogApp.consoleLog('Banner visualizzato')
         })
         .catch(error => {
          LogApp.consoleLog(error,'error');
         })

  }

  showAdvertisingInterstitial() {
    //In modalità Test non imposto nessun idAnnuncio
    let idAnnuncio = this.advertisingTestMode ? '' : this.activeAdvertisingConfig.bannerId[0];
    const options: AdOptions = {
      adId: idAnnuncio,
      isTesting: this.advertisingTestMode,
      npa: !this.activeAdvertisingConfig.personalizeAds //Non-Personalized Ads
    }

    //Preparo e mostro il video
    AdMob.prepareInterstitial(options)
         .then(() => {
          AdMob.showInterstitial();
         })
  }

  /**
   * Visualizza un Advertising per Premio Concesso
   */
  showAdvertisingReward() {
    let idAnnuncio = '';
    AdMob.addListener(
      RewardAdPluginEvents.Rewarded,
      (reward: AdMobRewardItem) => {
        //Premio concesso
        console.log('Premio concesso', reward)
      }
    )

    const options: RewardAdOptions = {
      adId: idAnnuncio,
      isTesting: this.advertisingTestMode
    }

    AdMob.prepareRewardVideoAd(options)
         .then(() => {
          AdMob.showRewardVideoAd();
         })
  }
  //#endregion

  /**
   * se viene dato un valore a "componente", apre in modale quel componente, altrimenti apre la pagina di test
   */
  onTest() {

    const componente = undefined;
    const componentProps = undefined;

    let idArea = this.startService.areaSelected.ID;

    const path:string = '/agenda-custode/' + idArea;


    if (componente) {
      this.modalController.create({
        component: componente,
        componentProps: componentProps
      })
        .then(elModal => {
          elModal.present();
        })

    }

    else if (path){
      this.navController.navigateForward(path)
    }

    else {
      this.navController.navigateForward('/test');
    }


  }


}
