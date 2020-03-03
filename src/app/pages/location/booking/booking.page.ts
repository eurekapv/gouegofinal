import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { StartService } from 'src/app/services/start.service';
import { NavController, IonSlides } from '@ionic/angular';
import { Location } from 'src/app/models/location.model';
import { Subscription } from 'rxjs';
import { Campo } from 'src/app/models/campo.model';
import { Utente } from 'src/app/models/utente.model';

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

  bookDay = new Date(); //Giorno di Pianificazione

  ricevuti: boolean; //Dati Ricevuti
  bookable: boolean; //Ho ricevuto dei campi, quindi potrei effettuare prenotazioni

  
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

                  // Ho ricevuto i dati
                  this.ricevuti = true;

                  //Inizializzo il documento con Area e Location
                  this.docPrenotazione.newPrenotazioneSetArea(this.selectedLocation.IDAREAOPERATIVA);
                  this.docPrenotazione.newPrenotazioneSetLocation(this.selectedLocation.ID);

                  //Prelevo il primo campo disponibile
                  this.selectedCampo = this.selectedLocation.getNextCampo();
                  this.bookable = (this.selectedCampo?true:false);

                  // Imposto il campo
                  if (this.selectedCampo) {
                    this.docPrenotazione.newPrenotazioneSetIDCampo(this.selectedCampo.ID);
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
   * Recupero le occupazioni
   */
  getOccupazioni() {

  }

}
