import { Component, OnInit } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Subscription } from 'rxjs';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { Location } from 'src/app/models/location.model';
import { Utente } from 'src/app/models/utente.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';


@Component({
  selector: 'app-bookingsummary',
  templateUrl: './bookingsummary.page.html',
  styleUrls: ['./bookingsummary.page.scss'],
})
export class BookingsummaryPage implements OnInit {

  //Prenotazione Master
  activePrenotazione: Prenotazione;
  //Elemento 1 di Pianificazione contenuta in activePrenotazione
  docPianificazione: PrenotazionePianificazione;


  subActivePrenotazione: Subscription;
  selectedLocation: Location;
  
  userLogged: boolean;      //TRUE-FALSE: Utente Loggato
  subUserLogged: Subscription;  
  
  docUtente: Utente;
  subDocUtente: Subscription; 

  idPrenotazione = '';
  idLocation = '';
  
  constructor(private startService:StartService,
              private router: ActivatedRoute,
              private navCtrl: NavController) {

  }

  ngOnInit() {
    
    
    let result = true;

    this.router.paramMap.subscribe( param => {
      
      if (param.has('locationId')) {
        this.idLocation = param.get('locationId');
        
        // Chiedo Location
        this.selectedLocation = this.startService.findLocationByID(this.idLocation);        
      }

      //Controllo dell'utente loggato
      this.subUserLogged = this.startService.utenteLogged.subscribe(element => {
              this.userLogged = element;
      });

      //Richiedo lo User
      this.subDocUtente = this.startService.utente.subscribe(element => {
        this.docUtente = element;
      });


      if (param.has('bookId')) 
      {
        this.idPrenotazione = param.get('bookId');

        this.subActivePrenotazione = this.startService.activePrenotazione.subscribe(elPrenotazione => {
          //Recupero la prenotazione
          this.activePrenotazione = elPrenotazione;
          //Recupero la Pianificazione
          this.docPianificazione = this.activePrenotazione.getPianificazione();

          //Id Book è diverso da quello in arrivo dalla prenotazione
          if (this.idPrenotazione != this.activePrenotazione.ID) {
            this.onBookIdWrong();
          }
          else {
            console.log(this.activePrenotazione);
          }

        });   

        
      }
      else {
        result = false;
      }
      
      if (!result) {
        this.onBookIdWrong();
      }

    });
  }

  /**
   * Book ID Errato devo uscire
   */
  onBookIdWrong() {
    if (this.idLocation.length !== 0) {
      this.navCtrl.navigateForward(['/','location',this.idLocation,'booking']);
    }
    else {
      this.navCtrl.navigateForward(['/']);
    }
  }
}


