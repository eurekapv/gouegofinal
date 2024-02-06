import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonAccordionGroup, ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Livello } from 'src/app/models/archivi/livello.model';
import { Sport } from 'src/app/models/archivi/sport.model';
import { CorsoGiornaliero, GroupedCorsiGiornalieri } from 'src/app/models/corso/corso-giornaliero.model';
import { Location } from 'src/app/models/struttura/location.model';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { TypeUrlPageLocation } from 'src/app/models/zsupport/valuelist.model';
import { StartService } from 'src/app/services/start.service';
import { DailyCourseSubscribePage } from '../daily-course-subscribe/daily-course-subscribe.page';
import { MyDateTime } from 'src/app/library/models/mydatetime.model';


@Component({
  selector: 'app-daily-course-list',
  templateUrl: './daily-course-list.page.html',
  styleUrls: ['./daily-course-list.page.scss'],
})
export class DailyCourseListPage implements OnInit, OnDestroy {

  elencoMode: boolean = false;
  listLocationSport: Sport[] = [];  //Lista Sport presenti sulla Location
  selectedSport: Sport; //lo sport selezionato
  
  idLocation: string = "";
  selectedLocation: Location;
    
  //Livello scelto sulla base dell'attività
  selectedLivello: Livello;
  //Data richiesta in elencoMode = false
  selectedDate = MyDateTime.today();

  //Dati richiesti e caricati
  loadedData: boolean = false;
  errorLoadingData: boolean = false;
  messageErrorPage: string = "";

  //Lista Corsi con modalità filtrata
  listCorsi: CorsoGiornaliero[]=[];

  //Lista Corsi completi in modalità elenco
  listGroupedCorsi: GroupedCorsiGiornalieri[]=[];
  subListGroupedCorsi: Subscription;
  //Ultima data ora rilevata sulla lista dei corsi
  lastMaxDateCorsiProgressive: Date;
  subMaxDateCorsiProgressive: Subscription;

  eventIonInfinit: any; //Eventuale evento IonInfinity


  //Grid completa che contiene le 2 colonne o la colonna singola
  @ViewChild('gridcontainer', {read: ElementRef}) refGridContainer: ElementRef | undefined;
  @ViewChild('accordionsportlevel', { static: true }) accordionGroup: IonAccordionGroup;


  get directionSliderSportCampi(): 'horizontal' | 'vertical' {
    let direction : 'horizontal' | 'vertical' = 'horizontal';
    //Devo capire quanto è larga la colonna di riferimento
    if (this.refGridContainer && this.refGridContainer.nativeElement) {
      try {
        const width = this.refGridContainer.nativeElement.offsetWidth;
        
        const brkPoint = this.startService.getDefaultBreakpoint(width);
        if (['md','lg','xl'].includes(brkPoint)) {
          direction = 'vertical';
        }
      } catch (error) {
        direction = 'horizontal';
      }

    }

    
    return direction;
  }

  constructor(private startService: StartService,
              private router: ActivatedRoute,
              private navController: NavController,
              private modalController: ModalController) {
  }

  ngOnInit() {
    //In ascolto per i corsi in elenco progressivemode
    this.onListenCorsiElencoProgressiveMode();

    //Procedo con il recupero idLocation, Sport, Livelli etc etc
    this.startLoading();
  }

  ngOnDestroy(): void {
    if (this.subListGroupedCorsi) {
      this.subListGroupedCorsi.unsubscribe();
    }

    if (this.subMaxDateCorsiProgressive) {
      this.subMaxDateCorsiProgressive.unsubscribe();
    }
  }



  /**
   * Fase di caricamento iniziale con il recupero di tutti i dati
   */
  startLoading() {
    let myLoading: HTMLIonLoadingElement;

    this.loadedData = false;

    //Preparo un loading
    this.startService.showLoadingMessage('Recupero dati in corso')
                    .then(elLoading => {
                      myLoading = elLoading;
                      myLoading.present();
                      
                      //Recupero idLocation
                      this.router.paramMap.subscribe({
                        next: (param) => {
                          if (param.has('locationId')) {
                            
                            //Location recuperata
                            this.idLocation = param.get('locationId');

                            //Carico i dati per proseguire
                            this.loadAllData()
                                .then(() => {
                                  //Caricamento concluso
                                  this.loadedData = true;
                                  if (this.elencoMode) {
                                    return this.requestListGroupedCorsi();
                                  }
                                  else {
                                    return this.queryDataList();
                                  }
                                })
                                .then(() => {
                                  //Chiudo il loading
                                  myLoading.dismiss();
                                })
                                .catch(error => {
                                  console.error(error);
                                  //Errori nel caricamento
                                  this.loadedData = true;
                                  this.errorLoadingData = true;
                                  this.messageErrorPage = this.startService.convertErrorDisplay(error);
                                  myLoading.dismiss();
                                })
                          }
                          else {
                            this.loadedData = true;
                            this.errorLoadingData = true;
                            this.messageErrorPage = 'Location non definita';
                            myLoading.dismiss();
                          }
                        },
                        error: (err) => {
                          this.loadedData = true;
                          this.errorLoadingData = true;
                          this.messageErrorPage = this.startService.convertErrorDisplay(err);                          
                          myLoading.dismiss();
                          
                        }
                      })
                    })
  }

  //#region MODALITA' CON FILTRO
  /**
   * Carica i dati relativi alla location e agli sport presenti
   * @returns 
   */
  loadAllData(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.idLocation && this.idLocation.length != 0) {
        //Caricamento Location
        this.startService.requestLocationByID(this.idLocation, 0)
                         .then(dataLocation => {
                            if (dataLocation) {
                              this.selectedLocation = dataLocation;
                              return this.startService.requestLocationSportLivelli(this.idLocation);
                            }
                            else {
                              reject('Location non disponibile');
                            }
                         })
                         .then(listSport => {

                            if (listSport && listSport.length != 0) {
                              this.listLocationSport = listSport;
                              this.selectedSport = listSport[0];
                              resolve();
                            }
                            else {
                              //Non ci sono Sport nella location
                              reject('Nessuna attività è presente sulla location');
                            }
                         })
                         .catch(error => {
                            LogApp.consoleLog(error);
                            reject('Si sono verificati errori nel recupero delle informazioni');
                         })
      }
      else {
        reject('Location non definita');
      }
    })
  }


  
  /**
   * Cambio dello Sport Selezionato
   * @param item 
   */
  onChangeSport(item) {

    //Cambio dello Sport
    this.selectedSport = item;
    //Livello Tutti
    this.selectedLivello = null;
    this.requestCorsiFiltered();
  }

  /**
   * Modifica della data selezionata
   * @param selectedDate 
   */
  onChangeBookDay(selectedDate) {
    
    this.selectedDate = MyDateTime.datePartFrom(selectedDate);
    //Faccio la richiesta  dei dati
    this.requestCorsiFiltered();
  }

  /**
   * Cambiamento del livello
   * @param item 
   */
  onChangeLivello(item?) {
    if (item) {
      this.selectedLivello = item;
    }
    else {
      this.selectedLivello = null;
    }

    this.requestCorsiFiltered();
  }

  /**
   * Effettuo un recupero dei dati
   * @param event 
   */
  onRefreshData(event?:any) {

    if (event) {
      event.target.complete();
    }


    //Se sono in errore tento di recuperare tutto
    if (this.errorLoadingData) {
      //Ritento tutto
      this.startLoading();
    }
    else {
      if (this.elencoMode) {
        //Reimposto la data cosi li recupera tutti di nuovo
        this.lastMaxDateCorsiProgressive = new Date();
        //Recupero i corsi con la modalità in elenco
        this.requestListGroupedCorsi();
      }
      else {
        //Recupero solo i dati
        this.requestCorsiFiltered();
      }
    }
  }

  /**
   * Esegue il refresh dei corsi in modalita filtrata
   */
  requestCorsiFiltered(objLoading?: HTMLIonLoadingElement):Promise<void> {
    return new Promise<void>((resolve, reject) => {

        if (objLoading) {

          //Effettuo la vera ricerca dati
          this.queryDataList()
              .then(() => {
                //Dati Corsi caricati
                resolve();
              })
              .catch(err => {
                //Anche se ci sono errori chiudo
                LogApp.consoleLog(err);
                resolve();
              })
        }
        else {
          //Loading non presente, lo ricreo
          this.startService.showLoadingMessage('Recupero corsi')
                           .then(elLoading => {
                              objLoading = elLoading;
                              elLoading.present();
                              return this.queryDataList();
                           })
                           .then(() => {
                              objLoading.dismiss();
                              //Dati caricati
                              resolve();
                           })
                           .catch(err => {
                             objLoading.dismiss();
                            //Anche se ci sono errori chiudo
                            LogApp.consoleLog(err);
                            resolve();
                          })

        }
    })
  }

  /**
   * Esegue la query reale per recuperare i dati
   * @returns 
   */
  queryDataList(): Promise<void> {
    return new Promise<void>((resolve, reject) => {

      let filter: CorsoGiornaliero = this.prepareFilterList();

      //Chiedo i dati al server
      this.startService.requestCorsoGiornalieroList(filter)
                       .then(listData => {
                          //Imposto i corsi trovati
                          this.listCorsi = listData;
                          resolve();
                       })
                       .catch(err => {
                        reject(err);
                       })
    })
  }

  /**
   * Preparo il documento di filtro
   */
  prepareFilterList(): CorsoGiornaliero {
    let filter: CorsoGiornaliero = new CorsoGiornaliero();
    
    filter.IDAREAOPERATIVA = (this.startService.areaSelected ? this.startService.areaSelected.ID : '');
    filter.IDLOCATION = this.idLocation;
    filter.IDSPORT = this.selectedSport.ID;

    if (this.selectedLivello) {
      filter.IDLIVELLOENTRATA = this.selectedLivello.ID; 
    }

    filter.DATA = this.selectedDate;


    return filter;
  }


  /**
   * Click su un corso selezionato
   * @param itemCorso 
   */
  onClickItem(itemCorso: CorsoGiornaliero): void {
    
    if (itemCorso) {

      this.modalController.create({
        component: DailyCourseSubscribePage,
        cssClass: 'modal-xl-class',
        componentProps: {
          corsoDoc: itemCorso,
        }
      })
      .then(elModal => {
        //Presento la modale
        elModal.present();
      })
    }
  }

  //#endregion

  //#region MODALITA ELENCO

  onClickSwitchElencoMode(): void {
    this.elencoMode = !this.elencoMode;
    //Ricarico di dati
    this.onRefreshData();
  }
  /**
   * In ascolto per la ricezione di corsi in elenco con progressive mode
   */
  onListenCorsiElencoProgressiveMode() {
    //Lista Raggruppata dei corsi
    this.subListGroupedCorsi = this.startService.listGroupedCorsiGiornalieriPM$
                                                        .subscribe(dataList => {
                                                          this.listGroupedCorsi = dataList;

                                                          //Gestione del IonInifiteScroll
                                                          if (this.eventIonInfinit && this.eventIonInfinit.target) {
                                                            this.eventIonInfinit.target.complete();
                                                          }
                                                        });

    //Ultima data Ora letta sui corsi
    this.subMaxDateCorsiProgressive = this.startService.lastDateCorsiGiornalieriPM$
                                                       .subscribe(myDate => {
                                                          this.lastMaxDateCorsiProgressive = myDate;
                                                       });                                                    
  }

  /**
   * Richiede la lista dei prossimi corsi
   */
  requestListGroupedCorsi(ev?: any) {
    
    let filterRequest: GroupedCorsiGiornalieri = new GroupedCorsiGiornalieri();
    filterRequest.IDLOCATION = this.idLocation;
    filterRequest.IDAREAOPERATIVA = (this.startService.areaSelected ? this.startService.areaSelected.ID : '');

    //Memorizzo l'evento
    this.eventIonInfinit = ev;

    //Effettuo la richiesta passando l'ultima dataora richiesta
    this.startService.requestGroupedCorsiGiornalieri(filterRequest,this.lastMaxDateCorsiProgressive);
                                              
  }

  /**
   * Utente vuole vedere tutti gli elementi del gruppo specificato
   * @param filterDate 
   */
  onClickRequestAllGroupedCorsi(groupedDoc: GroupedCorsiGiornalieri): void {
    //Passando anche la DATEFILTER chiedo quelli della giornata
    let filterRequest: GroupedCorsiGiornalieri = new GroupedCorsiGiornalieri();
    filterRequest.IDLOCATION = this.idLocation;
    filterRequest.IDAREAOPERATIVA = (this.startService.areaSelected ? this.startService.areaSelected.ID : '');
    filterRequest.DATEFILTER = groupedDoc.DATEFILTER;

    //Effettuo la richiesta impostando la data nel filtro
    this.startService.requestGroupedCorsiGiornalieri(filterRequest);

  }

  
  //#endregion

  //#region PULSANTE BACK
  /**
   * Ritorna un Array con il percorso di ritorno
   */
  get backPathArray():string[] {
    let retPath = []
    if (this.idLocation) {
      retPath = this.startService.getUrlPageLocation(TypeUrlPageLocation.LocationDetail, this.idLocation);
    }
    else {
      //Rimando alla Home
      retPath = this.startService.getUrlPageBasic('home');
    }

    return retPath;
  }
    
  //Ritorna il Path Array Back in formato stringa concatenata
  get backButtonHref(): string {
      let myHref = '';
      myHref = this.backPathArray.join('/').substring(1);
      return myHref;
  }
    
  /**
   * Torno alla pagina del home
   */
  onGoToBack() {
        this.navController.navigateBack(this.backPathArray);
  }
  
  //#endregion

}
