import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StartService } from 'src/app/services/start.service';
import { NavController, IonSlides, LoadingController, ToastController, ModalController, ActionSheetController, AlertController} from '@ionic/angular';
import { Location } from 'src/app/models/location.model';
import { throwError, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Campo } from 'src/app/models/campo.model';
import { Utente, ParamsVerifica } from 'src/app/models/utente.model';
import { SlotWeek } from 'src/app/models/imdb/slotweek.model';
import { SlotDay } from 'src/app/models/imdb/slotday.model';
import { SlotTime } from 'src/app/models/imdb/slottime.model';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { HttpErrorResponse } from '@angular/common/http';
import { BookingsummaryPage } from './bookingsummary/bookingsummary.page';
import { Sport } from 'src/app/models/sport.model';
import { NewLoginPage } from 'src/app/pages/auth/new-login/new-login.page'
import { VerifyPage } from '../../auth/verify/verify.page';
import { StatoSlot } from 'src/app/models/valuelist.model';




@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit,  OnDestroy {

  idLocation = '';
  versionBooking = 'manual'; //Versione di Booking (Automatico, Manuale)

  listLocationSport: Sport[] = [];  //Lista Sport presenti sulla Location
  subListLocationSport: Subscription;

  selectedLocation: Location;
  subSelectedLocation: Subscription;
  selectedCampo: Campo;

  userLogged: boolean;      //TRUE-FALSE: Utente Loggato
  subUserLogged: Subscription;  
  
  docUtente: Utente;
  subDocUtente: Subscription; 

  ricevuti: boolean; //Dati Ricevuti
  bookable: boolean = false; //Ho ricevuto dei campi, quindi potrei effettuare prenotazioni

  templateWeekSlot: SlotWeek = new SlotWeek(); //Template con gli slotTime settimanali relativi alla location
  
  actualBookDay = new Date(); //Giorno di Pianificazione
  actualSlotDay: SlotDay; //E' lo Slot Day attualmente in visualizzazione
  actualCaptionButtonSelected = ''; //E' il testo visualizato sul bottone selezionato
  
  //Prenotazione Attiva
  activePrenotazione: Prenotazione;
  //Singola Data Pianificata
  actualPlanning: PrenotazionePianificazione = new PrenotazionePianificazione(); //E' la pianificazione attuale che l'utente vorrebbe prenotare
  
  subActualPlanning: Subscription;
  subActualSlotDay: Subscription;
  subActivePrenotazione: Subscription;

  selectedSport: Sport; //lo sport selezionato

  availableFields: Campo[]=[]; //un array dei soli campi per lo sport selezionato

  @ViewChild('sliderCampi')sliderCampi: IonSlides;
  indexCount: number = 0;
  showExtraToolbar = true;
  isOnAppleSystem = false; //Sta girando su sistemi IOS (Introdotto per animare diversamente la toolbar Hide)
  

  constructor(private router: ActivatedRoute, 
              private startService:StartService,
              private navController: NavController,
              private loadingController: LoadingController,
              private toastCtrl: ToastController,
              private modalCtrl: ModalController,
              private actionSheetController: ActionSheetController,
              private alertController: AlertController) { 


    //Creo un documento di Pianificazione
    this.actualPlanning = new PrenotazionePianificazione;
    
    this.myDebug('Constructor Booking Page');
    this.myDebug(this.actualPlanning);
    //Ricavo la piattaforma di esecuzione
    //in HTML sul content viene usata una direttiva per una animazione diversa della toolbar in Ios
    this.isOnAppleSystem = this.startService.isOnAppleSystem;

  }
  
// Problematica dell'animazione toolbar
//https://github.com/ionic-team/ionic-framework/issues/17728
//https://github.com/ionic-team/ionic-framework/pull/17224


  /**
   * 
   * @param element Element 
   */
  myDebug(element) {
    let actDebug = false;
    if (actDebug) {
      console.log(element);
    }
  }
  
  /**
   * Crea l'array con i soli Campi dove è possibile effettuare l'attività selezionata
   */
  updateAvailableFields()
  {
     if (this.selectedLocation) {
      if (this.selectedLocation.CAMPO) {

        this.availableFields = this.selectedLocation.CAMPO.filter( el=> {
          let trovato =false;

          if (this.selectedSport) {

            for (const iterator of el.CAMPOSPORT) {
              if (iterator.IDSPORT==this.selectedSport.ID)
              {
                trovato=true;
                break;
              }
            }

          }
          
          return trovato;
        });


      }
     }
  }


  ngOnInit() {

    this.loadingController.create({
      message: 'Caricamento',
      spinner: 'circular',
      backdropDismiss: true

    }).then(loading=>{

        this.myDebug('Presentazione Loading');

        loading.present()
        this.ricevuti = false;
        this.bookable = false;
      

        //Controllo dei parametri del router
      this.router.paramMap.subscribe(param => {
        
        this.myDebug('Controllo Routing locationId');
        
        if (param.has('locationId')) {
          
          this.myDebug('locationId trovata');

          //Location sulla barra
          this.idLocation = param.get('locationId');
          
          if (this.idLocation) {

            this.myDebug('locationId: ' + this.idLocation);
            
            //Chiedo al server gli Sport praticati nella location
            this.myDebug('Richiesta al server Sport Praticati nella location ');
            this.startService.requestLocationSport(this.idLocation);
            
            //Mi sottoscrivo alla ricezione degli Sport
            this.sottoscrizioneListaSport();
          
            // Chiedo al server Location, Campi e CampiSport (3 Livelli)
            this.myDebug('Richiesta al server Location, Campi e CampiSport ');

            this.startService.requestLocationByID(this.idLocation, 3)
              .then(()=>{
                  this.ricevuti=true;
                  loading.dismiss();
              },()=>{
                  loading.dismiss();
                  this.showMessage('Errore di connessione');
            });

            //Mi sottoscrivo alla ricezione
            this.sottoscrizioneLocationCampi();
          
          
            //Controllo dell'utente loggato
            this.subUserLogged = this.startService.utenteLogged.subscribe(element => {
              this.userLogged = element;
            });
            
            //Richiedo lo User
            this.subDocUtente = this.startService.utente.subscribe(element => {
              this.docUtente = element;
            });
            
            // Mi metto in ascolto di variazioni di Slot attuale
            this.subActualSlotDay = this.startService.docOccupazione.subscribe(elActualDay => {
              this.myDebug('Variazione Slot Day');
              this.actualSlotDay = elActualDay;
              this.myDebug(elActualDay);
            });
            
            //Ascolto documento di Prenotazione
            //Sia la prima volta che entra nel OnInit
            //Esegue tutte le volte che la prenotazione cambia
            this.subActivePrenotazione = this.startService.activePrenotazione.subscribe(elPrenotazione => {
              this.activePrenotazione = elPrenotazione;
            });
          
        }
        else {
          // Dico che non posso prenotare
          this.bookable = false;
          this.ricevuti = true;
        }
        
      }
      else {
        //Rimando alla HOME
        this.navController.navigateForward(['/']);
      }

    })
});
    
  }


  
  ngOnDestroy() {
    
    
    if (this.subSelectedLocation) {
      this.subSelectedLocation.unsubscribe();
    }

    if (this.subUserLogged) {
      this.subUserLogged.unsubscribe();
    }

    if (this.subDocUtente) {
      this.subDocUtente.unsubscribe();
    }    

    if (this.subActualSlotDay) {
      this.subActualSlotDay.unsubscribe();
    }

    if (this.subActivePrenotazione) {

      this.subActivePrenotazione.unsubscribe();
    }   
    
    if (this.subListLocationSport) {
      this.subListLocationSport.unsubscribe();
    }


  }

  /*
  Sottoscrivo alla ricezione di Location e Campi
  */
  private sottoscrizioneLocationCampi() {

    this.myDebug('Sottoscrizione Location, Campi e CampiSport ');
    this.subSelectedLocation = this.startService.activeLocation
      .subscribe(dataLocation => {

        // Chiedo la Location
        this.selectedLocation = dataLocation;

        /* Se ho la location */
        if (this.selectedLocation && !this.selectedLocation.do_inserted && this.selectedLocation.CAMPO.length !== 0) {

          this.myDebug('Ricezione Location, Campi e CampiSport ');

          //RECUPERO IL TEMPLATE WEEK SLOT TIME
          this.getTemplateWeek(this.selectedLocation);

          //Recupero Campi, e Occupazioni
          this.onRefresh();

        }
        else {
          if (this.selectedLocation && this.selectedLocation.CAMPO) {
            this.myDebug('Location');
            this.myDebug(this.selectedLocation);
            this.myDebug(this.selectedLocation.CAMPO);
          }
          else {
            this.myDebug('Non ho la location oppure i campi ')
          }
        }

      });
  }



  /**
   * Chiamata per sottoscriversi alla ricezione degli Sport praticati nella location
   */
  private sottoscrizioneListaSport() {

    //Mi sottoscrivo alla ricezione degli Sport praticati
    this.subListLocationSport = this.startService.listLocationSport
          .subscribe(resultData => {



                //Popolo Lista degli Sport
                this.listLocationSport = resultData;

                //Prendo il primo e lo seleziono
                if (this.listLocationSport) {
            
                  if (this.listLocationSport.length !== 0) {
                    this.selectedSport = this.listLocationSport[0];
                  }
                  else {
                    this.selectedSport = undefined;
                  }
                }
                else {
                  this.selectedSport = undefined;
                }

                //Chiedo di eseguire il refresh dell'Interfaccia, dove recupero i campi legati allo sport e le occupazioni
                this.onRefresh();
            });
  }



  /**
   * Manual o Auto
   * @param value Modifica della versione
   */
  onChangeVersion(value: string) {
    this.versionBooking = value;
  }


  /**
   * Evento che occorre quando cambia lo Sport Selezionato
   * 1) Attribuzione di una nuova collection di Campi
   * 2) this.selectedCampo viene impostato al 1 Campo disponibile
   * 3) Rielaborazione degli Slot e di tutto il resto
   */
  onRefresh() {
    
    

    if (this.selectedSport) {

      //this.selectedLocation è la Location, che contiene la Collection dei Campi, con dentro i CampiSport
      this.availableFields = this.selectedLocation.getAvalaibleFields(this.selectedSport.ID);

      //Seleziono come Campo il primo disponibile
      if (this.availableFields.length !== 0) {
        this.selectedCampo = this.availableFields[0];
      }

      if (this.selectedCampo) {

        this.myDebug('Richiesto Refresh success, getOccupazioni');
        this.bookable = (this.selectedCampo?true:false);

        //Richiesta delle nuove occupazioni e impostazione nuova Pianificazione
        this.getOccupazioni();
        
      }
      else {
        this.myDebug('Richiesto Refresh failed NO SELECTED CAMPO');
      }
    }
    else {
      this.myDebug('Richiesto Refresh failed NO SELECTED SPORT');
    }


  }

  /**
   * E' stato richiesta la modifica del campo Selezionato
   * @param newCampo nuovo Campo
   */
  onChangeCampo(newCampo: Campo) {
    this.selectedCampo = newCampo;
    //Richiedo le occupazioni
    this.getOccupazioni();
  }

  /**
   * Ha cambiato il campo nello Slide
   */
  onDidChangeCampo(e: any) {
    
    //Indice Slide è Zero Base
    this.sliderCampi.getActiveIndex().then((index: number) => {
      
      //Ricavo il campo selezionato
      if (index <= this.availableFields.length) {

        this.selectedCampo = this.availableFields[index];
        //Richiedo le occupazioni
        this.getOccupazioni();

      }

      
    });
    
    
  }

  

  /**
   * E' stata selezionata un'altra data
   * @param newDate Nuova Data
   */
  onChangeBookDay(newDate: Date) {
    
    this.actualBookDay = newDate;

    //Richiedo le occupazioni
    this.getOccupazioni();
  }

  /**
   * Al cambio dello Sport devo rieseguire un Refresh della UI
   * @param newSport Oggetto del Nuovo Sport
   */
  onChangeSport(newSport)
  {
    if (newSport) {
      this.selectedSport=newSport;
      this.onRefresh();
    }
    
  }


  /**
   * Recupera il template Week Slot Time per la generazione degli slot di prenotazioni
   * @param docLocation Location prenotazione
   */
  getTemplateWeek(docLocation: Location) {
    
    this.templateWeekSlot = this.startService.getTemplateSlotWeek(docLocation);

  }

  /**
   * Recupero le occupazioni quando
   * 1) CAMBIA IL CAMPO
   * 2) CAMBIA IL GIORNO
   * 
   * Procedura: 
   * a) Viene cercato nel templateWeek lo SlotDay e viene applicata una copia a actualSlotDay
   * b) Viene chiamato il servizio passando actualSlotDay
   * c) il servizio chiama il server, e mi ritorna actualSlotDay come Observable
   * 
   */
  getOccupazioni() {
    
    //Step a) Chiedo al TemplateWeek una copia del Template di una Giornata (TRUE-> Chiedo di aggiornare la data su tutti i record figli SLOTTIME)
    this.actualSlotDay = this.templateWeekSlot.getCopySlotDay(this.actualBookDay, true);
    
      
    this.myDebug('Richiesta Slot Occupazioni');
    
    //Step b) Chiamo il servizio
    this.startService.requestSlotOccupazioni(this.actualSlotDay, 
      this.selectedLocation, 
      this.selectedCampo, 
      this.actualBookDay)
      
      .then(() => {
        //Per gli orario del centro saremmo aperti (come giornata)
        if (this.actualSlotDay.APERTOCHIUSO == true) {
          //Controlliamo se per caso è un giorno FESTIVO o di chiusura generale
          //this.actualBookDay è il giorno
          let isFestivita = this.startService.isFestivita(this.actualBookDay, 
                                                    this.selectedLocation.IDAREAOPERATIVA, 
                                                    this.selectedLocation.ID, 
                                                    this.selectedCampo.ID);
          if (isFestivita) {
            this.actualSlotDay.APERTOCHIUSO = false;
          }
          else {
            this.actualSlotDay.APERTOCHIUSO = true;
          }
        }

      });
      
      

      
    //Step c) Creo un nuovo oggetto di prenotazione
    this.actualPlanning = new PrenotazionePianificazione;

    //Ora tutto avviene in modalità asincrona

  }




  /**
   * E' stato cliccato uno slot tempo
   * @param slotClicked SlotTime Cliccato
   */
  myClickSlot(slotClicked: SlotTime) {
    
    if (slotClicked) {
      if (slotClicked.STATO == StatoSlot.contattare) {
        //Mostro un alert per telefonare alla struttura
        this.showAlertContattaStruttura();
      }
      else {
        //Cambio il Planning attuale visualizzato
        this.actualPlanning = this.actualSlotDay.changeSelectionSlotTime(slotClicked);
      }
      
    }
    
  }

  /**
   * Mostra un alert per contattare la struttura
   */
  showAlertContattaStruttura() {
    let myButton = [];
    let myMessage = ''

    myMessage = 'Per la prenotazione dello slot è necessario contattare la struttura telefonicamente';
    myButton = [
      {
        text: 'OK',
        role: 'cancel'
      }
    ];


     if (this.selectedLocation.TELEFONO && this.selectedLocation.TELEFONO.length > 0) {

      myMessage = myMessage + ' al ' + this.selectedLocation.TELEFONO;

      if (!this.startService.isDesktop) {

        myButton = [
          {
            text: 'OK',
            role: 'cancel'
          },
          {
            text: 'Chiama',
            handler: () => {
              const number = this.selectedLocation.TELEFONO;
              const link: HTMLAnchorElement = document.createElement('a');
              link.setAttribute('href', `tel:${number}`);
              link.click();
  
            }
          }
        ];

      }


      
    }

    this.alertController.create({
      header: 'Contattare la struttura',
      subHeader: 'per richiedere informazioni',
      message: myMessage,
      buttons: myButton
    })
    .then(elAlert => {
      elAlert.present();
    });
  }


  /**
   * il Footer contiene la prenotazione attiva che uno sta implementando
   * Viene visualizzato solo se c'e' una prenotazione attiva
   * cioè se sono presenti le DATAORAINIZIO e DATAORAFINE
   */
  visibleFooter()  {
    let visible = false;
    if (this.actualPlanning) {
      if (this.actualPlanning.DATAORAINIZIO && this.actualPlanning.DATAORAFINE) {
        visible = true;
      }
    }

    return visible;
  }

  /**
   * Evento Click sul pulsante di prenotazione presente nel footer
   */
  myClickPrenota(docPianificazione: PrenotazionePianificazione) {
    
    //Non solo loggato, devo loggarmi
    if (!this.userLogged) {

      //Prima di aprire la pagina di login
      //impostare nel servizio Start forceIdArea = 
      this.startService.setIdAreaForcedForLogin();
      
      //Ora preparo e creo la pagina di Login
      this.modalCtrl.create({
        component:NewLoginPage
      })
        .then(modal=>{
          modal.present();
        });

    }
    else {

      let paramsVerifica : ParamsVerifica;
      paramsVerifica = this.docUtente.getParamsVerifica(this.startService.actualStartConfig.gruppo)
      if (paramsVerifica){
        //se ci sono parametri, significa che devo chiamare la pagina di verifica
        this.modalCtrl.create({
          component: VerifyPage,
          componentProps:{
            params: paramsVerifica
          } 
        })
        .then(elModal => {
          elModal.present();
        })
      }
      else{
        //sono loggato e l'account è completo; posso prenotare
        this.execPrenotazione(docPianificazione);

      }

      
    }
    

  }

  private execPrenotazione(docPianificazione: PrenotazionePianificazione) {

    //Inizializzo con i dati di Prenotazione
    this.startService.initActivePrenotazione(this.selectedLocation.IDAREAOPERATIVA);
    this.startService.setIDUtenteActivePrenotazione(this.docUtente);

    //Impostiamo Location e Campo
    docPianificazione.IDAREAOPERATIVA = this.selectedLocation.IDAREAOPERATIVA;
    docPianificazione.IDLOCATION = this.selectedLocation.ID;
    docPianificazione.IDCAMPO = this.selectedCampo.ID;
    docPianificazione.IDSPORT = this.selectedSport.ID;
    docPianificazione._DESCRCAMPO = this.selectedCampo.DENOMINAZIONE;
    docPianificazione._DESCRSPORT = this.selectedSport.DENOMINAZIONE;

    //Indico al servizio di memorizzarsi la Pianificazione per poterla passare alle altre pagine
    this.startService.setPianificazioneSingola(docPianificazione);

    //Indico al servizio di mantenere (non Observable) le info del campo selezionato
    this.startService.setSelectedCampoPrenotazione(this.selectedCampo);

    //Chiedo al server il calcolo del totale
    this.calcolaTotale();
  }

   /**
   * Richiede al server il calcolo degli importi della prenotazione
   */
  calcolaTotale() {
    this.loadingController
        .create({
          message: 'Verifica Prenotazione...',
          spinner: 'circular'
        })
        .then (elLoading => {
          //Mostro il loading
          elLoading.present();

          //Chiedo al server di calcolare l'importo
          this.startService
              .requestImportoPrenotazione()
              .pipe(
                catchError(this.handleError)
              )
              .subscribe(resultData => {
                
                //Chiudo il loading
                elLoading.dismiss();

                //Converto il documento ricevuto
                let newPrenotazione = Prenotazione.getPrenotazioneFromJson(resultData);
                

                // Risposta corretta del server
                if (newPrenotazione.ISVALID === true) {
                  
                  let myPianificazione = newPrenotazione.PRENOTAZIONEPIANIFICAZIONE[0];
                  myPianificazione._DESCRCAMPO = this.selectedCampo.DENOMINAZIONE;
                  myPianificazione._DESCRSPORT = this.selectedSport.DENOMINAZIONE;
                  
                  //Invio al servizio il documento
                  this.startService.setActivePrenotazione(newPrenotazione);


                  //Procedo al passaggio di finalizzazione
                  this.goToFinalizza();
                }
                else {
                  
                  let msg = (newPrenotazione.MSGINVALID ? newPrenotazione.MSGINVALID: 'Errore comunicazione imprevisto');
                  this.showMessage(msg);
                }


              }, error => {
                //Chiudo il loading
                elLoading.dismiss();
                this.showMessage(error);
              });
        });
    
  }


  /**
   * E' tutto a posto e posso spostarmi alla pagina di Finalizza Prenotazione
   */
  goToFinalizza() {
    /* VERSIONE MODALE */
    this.modalCtrl.create({
      component: BookingsummaryPage,
      componentProps: {
        bookId: this.activePrenotazione.ID,
        locationId : this.selectedLocation.ID
      }
    })
    .then(modal => modal.present());

    /* VERSIONE PAGINA FULLSCREEN
    this.navController.navigateForward(['/','location',
                                              this.selectedLocation.ID,
                                            'booking','bookingsummary',
                                            this.activePrenotazione.ID]);
    */                                            
  }

  /**
   * Visualizza un messaggio come Toast
   * @param message Messaggio da mostrare
   */
  showMessage(message: string) {

    //Creo un messaggio
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
    .then(tstMsg => {
      tstMsg.present();
    });

  }

  /**
   * Gestore errori http
   * @param error Errore http rilevato
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Errore di chiamata:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Errore Backend Codice ${error.status}, ` +
        `Body: ${error.error}`);
    }
    // return an observable with a user-facing error message
      return throwError('Si sono verificati errori. Riprovare AHIME.');
  };


  onClickChangeCampo(){
    
    
    //creo i bottoni
    let buttons = [];
    this.availableFields.forEach(element => {
      let btn = {
        text: element.DENOMINAZIONE,
        icon: 'location',
        handler: () =>{
          this.selectedCampo = element;
          this.getOccupazioni();
          let newPosition = this.availableFields.findIndex(el => {
            return el.ID == this.selectedCampo.ID
          })
          this.sliderCampi.slideTo(newPosition);
        }
      }

      buttons.push(btn);
    });


    //ora che ho i bottoni, creo l'actionsheet e lo presento
    this.actionSheetController.create({
      header: 'Scegli il campo',
      buttons: buttons
    })
    .then(elActionSheet => {
      elActionSheet.present();
    })
  }

  


}
