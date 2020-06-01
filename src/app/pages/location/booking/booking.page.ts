import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StartService } from 'src/app/services/start.service';
import { NavController, IonSlides } from '@ionic/angular';
import { Location } from 'src/app/models/location.model';
import { Subscription } from 'rxjs';
import { Campo } from 'src/app/models/campo.model';
import { Utente } from 'src/app/models/utente.model';
import { SlotWeek } from 'src/app/models/imdb/slotweek.model';
import { SlotDay } from 'src/app/models/imdb/slotday.model';
import { SlotTime } from 'src/app/models/imdb/slottime.model';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit, OnDestroy {

  idLocation = '';
  versionBooking = 'manual'; //Versione di Booking (Automatico, Manuale)
  // docPrenotazione: Prenotazione;
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
  actualPlanning: PrenotazionePianificazione = new PrenotazionePianificazione(); //E' la pianificazione attuale che l'utente vorrebbe prenotare
  
  
  subActualPlanning: Subscription;
  subActualSlotDay: Subscription;

  @ViewChild('sliderCampi', {static:false})sliderCampi: IonSlides;
  

  constructor(private router: ActivatedRoute, 
              private startService:StartService,
              private navController: NavController) { 

    this.ricevuti = false;
    this.bookable = false;

    //Chiedo il documento di Planning al servizio
    this.actualPlanning = this.startService.actualPrenotazione;
    
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
          })
          
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
  }

  ngOnDestroy() {
    if (this.subSelectedLocation) {
      this.subSelectedLocation.unsubscribe();
    }

    if (this.subActualSlotDay) {
      this.subActualSlotDay.unsubscribe();
    }


  }


  /**
   * Manual o Auto
   * @param value Modifica della versione
   */
  onChangeVersion(value: string) {
    console.log(value);
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
    console.log('Nuova data selezionata');
    console.log(newDate);

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
      console.log(this.actualPlanning);
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
  myClickPrenota(docPrenotazione: PrenotazionePianificazione) {
    console.log(this.selectedLocation);
    console.log(this.selectedCampo);
    console.log(docPrenotazione);

    //Impostiamo Location e Campo
    docPrenotazione.IDAREAOPERATIVA = this.selectedLocation.IDAREAOPERATIVA;
    docPrenotazione.IDLOCATION = this.selectedLocation.ID;
    docPrenotazione.IDCAMPO = this.selectedCampo.ID;

    //Invio il documento al servizio
    this.startService.setActualPrenotazione(docPrenotazione);

    this.goToFinalizza();
  }


  goToFinalizza() {
    this.navController.navigateForward(['/','location',this.selectedLocation.ID,'booking','bookingsummary',this.actualPlanning.ID]);
  }

}
