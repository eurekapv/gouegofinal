import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { StartService } from 'src/app/services/start.service';
import { NavController, IonSlides } from '@ionic/angular';
import { Location } from 'src/app/models/location.model';
import { Subscription } from 'rxjs';
import { Campo } from 'src/app/models/campo.model';
import { Utente } from 'src/app/models/utente.model';
import { SlotWeek } from 'src/app/models/imdb/slotweek.model';
import { SlotDay } from 'src/app/models/imdb/slotday.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit, OnDestroy {

  idLocation = '';
  versionBooking = 'manual'; //Versione di Booking (Automatico, Manuale)
  docPrenotazione: Prenotazione;
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
  subActualSlotDay: Subscription;

  @ViewChild('sliderCampi', {static:false})sliderCampi: IonSlides;
  

  constructor(private router: ActivatedRoute, 
              private startService:StartService,
              private navController: NavController) { 

    // Creo una nuova prenotazione
    this.docPrenotazione = new Prenotazione();
    this.docPrenotazione.newPrenotazioneInit();

    this.ricevuti = false;
    this.bookable = false;


    
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

                  //Inizializzo il documento con Area e Location
                  this.docPrenotazione.newPrenotazioneSetArea(this.selectedLocation.IDAREAOPERATIVA);
                  this.docPrenotazione.newPrenotazioneSetLocation(this.selectedLocation.ID);

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
    //Indice Slide è Uno Base
    this.sliderCampi.getActiveIndex().then((index: number) => {
      index -= 1;
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

    //Richiedo le occupazioni
    this.getOccupazioni();
  }


  /**
   * Recupera il template Week Slot Time per la generazione degli slot di prenotazioni
   * @param docLocation Location prenotazione
   */
  getTemplateWeek(docLocation: Location) {
    console.log('Ora');
    
    this.templateWeekSlot = this.startService.getTemplateSlotWeek(docLocation);

    console.log(this.templateWeekSlot);
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
    //Step a) Chiedo al TemplateWeek una copia del Template di una Giornata
    this.actualSlotDay = this.templateWeekSlot.getCopySlotDay(this.actualBookDay);

    //Step b) Chiamo il servizio
    this.startService.requestSlotOccupazioni(this.actualSlotDay, 
                                             this.selectedLocation.ID, 
                                             this.selectedCampo.ID, 
                                             this.actualBookDay);

    //Ora tutto avviene in modalità asincrona
  }

}
