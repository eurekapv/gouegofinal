import { Component, OnInit, OnDestroy } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, ToastController } from '@ionic/angular';

import { Subscription } from 'rxjs';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { Location } from 'src/app/models/location.model';
import { Utente } from 'src/app/models/utente.model';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';
import { Campo } from 'src/app/models/campo.model';


@Component({
  selector: 'app-bookingsummary',
  templateUrl: './bookingsummary.page.html',
  styleUrls: ['./bookingsummary.page.scss'],
})
export class BookingsummaryPage implements OnInit, OnDestroy {

  //Prenotazione Master
  activePrenotazione: Prenotazione;
  subActivePrenotazione: Subscription;

  //Elemento 1 di Pianificazione contenuta in activePrenotazione
  docPianificazione: PrenotazionePianificazione;

 //Location selezionata
  selectedLocation: Location;
  
  //Campo in versione normale
  selectedCampo: Campo;
  
  userLogged: boolean;      //TRUE-FALSE: Utente Loggato
  subUserLogged: Subscription;  
  
  docUtente: Utente;
  subDocUtente: Subscription; 

  idPrenotazione = '';
  idLocation = '';

  //Viene effettuato il controllo tra Id Prenotazione e Id del bookId
  checkBookId = true; 

  //accettazione delle condizioni di vendita
  disclaimer: boolean =false;
  
  constructor(private startService:StartService,
              private router: ActivatedRoute,
              private navCtrl: NavController,
              private loadingController: LoadingController,
              private toastCtrl: ToastController) {

  }

  ngOnInit() {
    this.disclaimer=false;
    
    let result = true;

    this.router.paramMap.subscribe( param => {
      
      if (param.has('locationId')) {
        this.idLocation = param.get('locationId');
        
        // Chiedo Location
        this.selectedLocation = this.startService.findLocationByID(this.idLocation);        
        
        if (!this.selectedLocation) {
          result = false;
        }
        
      }
      else {
        result = false;
      }

      //Cerco il BookId
      if (result) {
        if (param.has('bookId')) 
        {
          this.idPrenotazione = param.get('bookId');
  
          //IDPrenotazione presente
          if (this.idPrenotazione) {
  
            //Recupero la prenotazione 
            this.recuperaPrenotazione();
          }
          else {
            result = false;
          }
        }
        else {
          result = false;
        }
      }


      if (result) {
        //Controllo dell'utente loggato
        this.subUserLogged = this.startService.utenteLogged.subscribe(element => {
                this.userLogged = element;
        });
  
        //Richiedo lo User
        this.subDocUtente = this.startService.utente.subscribe(element => {
          this.docUtente = element;
        });
  
        //Recupero il campo selezionato
        this.selectedCampo = this.startService.getSelectedCampoPrenotazione();
      }



      
      if (!result) {
        this.onBookIdWrong();
      }

    });
  }

  ngOnDestroy() {
    // if (this.subUserLogged) {
    //   this.subUserLogged.unsubscribe();
    // }

    // if (this.subActivePrenotazione) {
    //   this.subActivePrenotazione.unsubscribe();
    // }

    // if (this.subDocUtente) {
    //   this.subDocUtente.unsubscribe();
    // }

  }

  //Mi sottoscrivo alla ricezione della Prenotazione
  recuperaPrenotazione() {

    this.subActivePrenotazione = this.startService.activePrenotazione
        .subscribe(elPrenotazione => {
              //Recupero la prenotazione
              this.activePrenotazione = elPrenotazione;
              //Recupero la Pianificazione dentro alla Prenotazione
              this.docPianificazione = this.activePrenotazione.getPianificazione();

              //Probabilmente è la prima richiesta e devo controllare l'entrata
              //tramite la congruenza del BookId e IDPrenotazione
              if (this.checkBookId) {

                //Spegno il controllo
                this.checkBookId = false;
                //Id Book è diverso da quello in arrivo dalla prenotazione
                if (this.idPrenotazione != this.activePrenotazione.ID) {
                  this.onBookIdWrong();
                }
              }
              

    });
  }

  /**
   * Book ID Errato devo uscire
   */
  onBookIdWrong() {

    this.showMessage('Errore dati prenotazione');

    if (this.idLocation.length !== 0) {
      this.navCtrl.navigateForward(['/','location',this.idLocation,'booking']);
    }
    else {
      this.navCtrl.navigateForward(['/']);
    }
  }

  //E' cambiato il numero dei giocatori
  onChangedNumPlayer(nPlayer: number)
  {
    //Memorizzo il numero Partecipanti
    this.docPianificazione.NUMPARTECIPANTI=nPlayer;

    this.calcolaTotale();
  }

  //Effettua le operazioni per il calcolo del totale
  calcolaTotale() {
    this.loadingController
      .create({
        message: 'Ricalcolo importo...',
        spinner: 'bubbles'
      })
      .then(elLoading => {
        //Mostro il loading
        elLoading.present();

        //Contatto il server 
        this.startService
                     .requestImportoPrenotazione()
                     .subscribe(resultData => {

                          console.log('Ricalcolo Prenotazione');
                          console.log(resultData);
                          //Chiudo il loading
                          elLoading.dismiss();

                          //Converto il documento ricevuto
                          let newPrenotazione = Prenotazione.getPrenotazioneFromJson(resultData);
                          console.log('AfterCalcolaTotale prenotazione');
                          console.log(newPrenotazione);


                          //Invio al servizio il documento
                          this.startService
                            .setActivePrenotazione(newPrenotazione);

                            //Se non è valida visualizzo un messsaggio
                          if (!newPrenotazione.ISVALID) {
                            this.showMessage(newPrenotazione.MSGINVALID);
                          }

                        },
                        error => {
                          //Chiudo il loading
                          elLoading.dismiss();
                          this.showMessage(error);
                        });

        
      });
  }
   
  back()
  {
    this.navCtrl.pop();
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


  //Ritorna un indirizzo Location da mostrare
  getAddressLocation() {
    let value = '';
    if (this.selectedLocation) {
      if (this.selectedLocation.INDIRIZZO && this.selectedLocation.INDIRIZZO.length !== 0)  {
        value = this.selectedLocation.INDIRIZZO;
      }
      else if (this.selectedLocation.COMUNE && this.selectedLocation.COMUNE.length !== 0) {
        value = this.selectedLocation.COMUNE;
      }
    }
    

    return value;
  }
  
  onConfirm()
  {
    //operazioni di submit
    this.onAfterSavePrenotazione()
  }
  
  onAfterSavePrenotazione()
  {
    this.navCtrl.navigateRoot(['historylist/booking',this.activePrenotazione.ID])
  }
}


