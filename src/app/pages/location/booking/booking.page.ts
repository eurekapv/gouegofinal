import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StartService } from 'src/app/services/start.service';
import { NavController, IonSlides, LoadingController, ToastController, ModalController } from '@ionic/angular';
import { Location } from 'src/app/models/location.model';
import { throwError, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Campo } from 'src/app/models/campo.model';
import { Utente } from 'src/app/models/utente.model';
import { SlotWeek } from 'src/app/models/imdb/slotweek.model';
import { SlotDay } from 'src/app/models/imdb/slotday.model';
import { SlotTime } from 'src/app/models/imdb/slottime.model';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { HttpErrorResponse } from '@angular/common/http';
import { BookingsummaryPage } from './bookingsummary/bookingsummary.page';
import { Sport } from 'src/app/models/sport.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit, OnDestroy {

  idLocation = '';
  versionBooking = 'manual'; //Versione di Booking (Automatico, Manuale)
  
  selectedLocation: Location;
  subSelectedLocation: Subscription;
  selectedCampo: Campo;

  userLogged: boolean;      //TRUE-FALSE: Utente Loggato
  subUserLogged: Subscription;  
  
  docUtente: Utente;
  subDocUtente: Subscription; 

  ricevuti: boolean; //Dati Ricevuti
  bookable: boolean; //Ho ricevuto dei campi, quindi potrei effettuare prenotazioni

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

  @ViewChild('sliderCampi', {static:false})sliderCampi: IonSlides;
  

  constructor(private router: ActivatedRoute, 
              private startService:StartService,
              private navController: NavController,
              private loadingController: LoadingController,
              private toastCtrl: ToastController,
              private modalCtrl: ModalController) { 

    this.ricevuti = false;
    this.bookable = false;

    //Creo un documento di Pianificazione
    this.actualPlanning = new PrenotazionePianificazione;
    
  }

  //#FIXME il filtro non funziona perchè mancano gli sport praticabili all'interno dei campi
  //inoltre, anche l'elenco sport è sbagliato, perchè prende dentro quelli di tutte le aree operative
  updateAvailableFields()
  {
    console.log(this.selectedLocation.CAMPO);
    this.availableFields=this.selectedLocation.CAMPO.filter((data)=>{
      return data.IDSPORT==this.selectedSport.ID;
    })
  }

  ngOnInit() {

    this.router.paramMap.subscribe(param => {
      
      
      if (param.has('locationId')) {

        this.idLocation = param.get('locationId');

        if (this.idLocation) {

          // Chiedo Location e Campi
          this.startService.requestLocationByID(this.idLocation);

          this.subSelectedLocation = this.startService.activeLocation
              .subscribe(dataLocation => {
                // Chiedo la Location
                this.selectedLocation = dataLocation;

                /* Se ho la location */
                if (this.selectedLocation && !this.selectedLocation.do_inserted ) {


                  //RECUPERO IL TEMPLATE WEEK SLOT TIME
                  this.getTemplateWeek(this.selectedLocation);

                  // Ho ricevuto i dati
                  this.ricevuti = true;

                  //Prelevo il primo campo disponibile
                  this.selectedCampo = this.selectedLocation.getNextCampo();
                  this.bookable = (this.selectedCampo?true:false);

                  //Se è presente un campo posso iniziare ad ottenere gli SlotTime
                  if (this.selectedCampo) {
                    //Richiedo le occupazioni
                    this.getOccupazioni();
                  }

                }
                
              });

          
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
            this.actualSlotDay = elActualDay;
          });

          //Ascolto documento di Prenotazione
          //Sia la prima volta che entra nel OnInit
          //Esegue tutte le colte che la prenotazione cambia
          this.subActivePrenotazione = this.startService.activePrenotazione.subscribe(elPrenotazione => {
            this.activePrenotazione = elPrenotazione;
              console.log(this.activePrenotazione);
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
    this.updateAvailableFields();
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


  }


  /**
   * Manual o Auto
   * @param value Modifica della versione
   */
  onChangeVersion(value: string) {
    this.versionBooking = value;
  }


  /**
   * Ha cambiato il campo
   */
  onDidChangeCampo(e: any) {
    
    //Indice Slide è Zero Base
    this.sliderCampi.getActiveIndex().then((index: number) => {
      
      //Ricavo il campo selezionato
      this.selectedCampo = this.selectedLocation.getCampoByIndex(index);

      //Richiedo le occupazioni
      this.getOccupazioni();
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

    //Step b) Chiamo il servizio
    this.startService.requestSlotOccupazioni(this.actualSlotDay, 
                                             this.selectedLocation, 
                                             this.selectedCampo, 
                                             this.actualBookDay);

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
      //Cambio il Planning attuale visualizzato
      this.actualPlanning = this.actualSlotDay.changeSelectionSlotTime(slotClicked);
      
    }
    
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
    
    if (!this.userLogged) {

      //Deve prima loggarsi
      console.log('Utente non loggato');

    }
    else {

      //Inizializzo con i dati di Prenotazione
      
      this.startService.initActivePrenotazione(this.selectedLocation.IDAREAOPERATIVA);
      this.startService.setIDUtenteActivePrenotazione(this.docUtente);

      //Impostiamo Location e Campo
      docPianificazione.IDAREAOPERATIVA = this.selectedLocation.IDAREAOPERATIVA;
      docPianificazione.IDLOCATION = this.selectedLocation.ID;
      docPianificazione.IDCAMPO = this.selectedCampo.ID;
      docPianificazione._DESCRCAMPO = this.selectedCampo.DENOMINAZIONE;

      //Indico al servizio di memorizzarsi la Pianificazione per poterla passare alle altre pagine
      this.startService.setPianificazioneSingola(docPianificazione);

      //Indico al servizio di mantenere (non Observable) le info del campo selezionato
      this.startService.setSelectedCampoPrenotazione(this.selectedCampo);

      this.calcolaTotale();

      
    }
    

  }

   /**
   * Richiede al server il calcolo degli importi della prenotazione
   */
  calcolaTotale() {
    this.loadingController
        .create({
          message: 'Verifica Prenotazione...',
          spinner: 'bubbles'
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

  onSportChange(newSport)
  {
    this.selectedSport=newSport;
    this.updateAvailableFields();
  }


}
