import { Component, OnDestroy, OnInit } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Subscription } from 'rxjs';
import { Area } from 'src/app/models/area.model';
import { Location } from 'src/app/models/location.model';
import { ActionSheetController, NavController, ModalController, ToastController } from '@ionic/angular';
import { Utente } from 'src/app/models/utente.model';
import { TypeUrlPageLocation } from 'src/app/models/valuelist.model';



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



  // L'area viene recuperata dal subscribe
  selectedIdArea : string;
  selectedArea: Area;
  selectedAreaListen: Subscription;

  idAreaFav: string;
  listenIdAreaFav: Subscription;

  constructor(private startService: StartService,
    private actionSheetController: ActionSheetController,
    private navController: NavController,
    private modalController: ModalController,
  ) {

    // Parametri di Configurazione Iniziale Applicazione
    this.startConfigListen = this.startService.startConfig
      .subscribe(element => {
        this.startConfig = element;
      });

    // Sottoscrivo alla ricezione delle Aree
    this.listAreeListen = this.startService.listAree
      .subscribe(listAreeReceived => {

            //Filtro e recupero solo le Aree che devono comparire nell'app
            this.listAree = listAreeReceived.filter(objArea => {
              return objArea.APPSHOW;
            });

        //quando le aree sono arrivate, se non sono loggato seleziono la più vicina
        if (!this.userLogged) {

          //Cerco di selezionare l'area piu' vicina
          this.startService.getNearestArea(this.listAree)
                                    .then(nearestArea => {

                                      //trovata l'area, posso passarne l'id al metodo selectarea
                                      this.startService.selectAreaByID(nearestArea.ID);

                                    })
        }
      });


    //QUESTO E' IMPORTANTE, QUI POSSO AGGANCIARE EVENTI A SEGUITO DEL CAMBIO DI AREA
    //Mi sottoscrivo alla ricezione della Area Selezionata
    this.selectedAreaListen = this.startService.areaSelected
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

  ionViewDidEnter() {

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
   * Visualizzazione della lista dei corsi
   * @param location Location Selezionata
   */
   onClickCorsi(location: Location) {
    let fullPath: string[] = [];
    fullPath = this.startService.getUrlPageLocation(TypeUrlPageLocation.CourseList, location.ID);
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



  /**
   * se viene dato un valore a "componente", apre in modale quel componente, altrimenti apre la pagina di test
   */
  onTest() {

    const componente = undefined;
    const componentProps = undefined;

    let idArea = this.startService.areaSelectedValue.ID;

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
