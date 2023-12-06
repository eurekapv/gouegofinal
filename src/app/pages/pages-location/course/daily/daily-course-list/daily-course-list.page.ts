import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonAccordionGroup, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Livello } from 'src/app/models/archivi/livello.model';
import { Sport } from 'src/app/models/archivi/sport.model';
import { Location } from 'src/app/models/struttura/location.model';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { StartService } from 'src/app/services/start.service';


@Component({
  selector: 'app-daily-course-list',
  templateUrl: './daily-course-list.page.html',
  styleUrls: ['./daily-course-list.page.scss'],
})
export class DailyCourseListPage implements OnInit {

  listLocationSport: Sport[] = [];  //Lista Sport presenti sulla Location
  subListLocationSport: Subscription;
  selectedSport: Sport; //lo sport selezionato

  idLocation: string = "";
  selectedLocation: Location;
  subSelectedLocation: Subscription;
  
  //Livello scelto sulla base dell'attività
  selectedLivello: Livello;

  //Dati richiesti e caricati
  loadedData: boolean = false;
  errorLoadingData: boolean = false;
  messageErrorPage: string = "";

  selectedDate = new Date();

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
              private navController: NavController) {
  }

  ngOnInit() {
    //Nella fase iniziale si recupera idLocation, Sport, Livelli etc etc
    this.startLoading();
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
                            this.idLocation = param.get('locationId');

                            //Carico i dati per proseguire
                            this.loadAllData()
                                .then(() => {
                                  //Caricamento concluso
                                  this.loadedData = true;
                                  myLoading.dismiss();
                                })
                                .catch(error => {
                                  //Errori nel caricamento
                                  this.loadedData = true;
                                  this.errorLoadingData = true;
                                  this.messageErrorPage = error;
                                  myLoading.dismiss();
                                })
                          }
                        },
                        error: (err) => {
                          this.loadedData = true;
                          this.errorLoadingData = true;
                          this.messageErrorPage = err;
                          myLoading.dismiss();
                          this.messageErrorPage = err;
                        }
                      })
                    })
  }

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

  }

  /**
   * Modifica della data selezionata
   * @param selectedDate 
   */
  onChangeBookDay(selectedDate) {
    this.selectedDate = selectedDate;
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

  }

  /**
   * Effettuo un recupero dei dati
   * @param event 
   */
  onRefreshData(event) {

    if (event) {
      event.target.complete();
    }

    //Se sono in errore tento di recuperare tutto
    if (this.errorLoadingData) {
      //Ritento tutto
      this.startLoading();
    }
    else {
      //Recupero solo i dati
      this.refreshData();
    }
  }

  /**
   * Esegue il refresh dei soli dati visualizzati
   */
  refreshData() {

  }

    //#region PULSANTE BACK
  /**
   * Ritorna un Array con il percorso di ritorno
   */
  get backPathArray():string[] {
    let retPath = ['/','appstart-home'];

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
