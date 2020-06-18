import { Component, OnInit, OnDestroy } from '@angular/core';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { Subscription } from 'rxjs';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';
import { Campo } from 'src/app/models/campo.model';
import { Location } from 'src/app/models/location.model';
import { ActivatedRoute } from '@angular/router';
import { StartService } from 'src/app/services/start.service';
import { NavController, ToastController} from '@ionic/angular';


@Component({
  selector: 'app-historybook',
  templateUrl: './historybook.page.html',
  styleUrls: ['./historybook.page.scss'],
})
export class HistorybookPage implements OnInit, OnDestroy {

  activePrenotazione: Prenotazione;
  subActivePrenotazione: Subscription;

  //Elemento 1 di Pianificazione contenuta in activePrenotazione
  docPianificazione: PrenotazionePianificazione;

 //Location selezionata
  selectedLocation: Location = new Location();
  
  //Campo in versione normale
  selectedCampo: Campo = new Campo();
  idPrenotazione: string;
  showSpinner = true;


  constructor(private router: ActivatedRoute,
              private navCtr: NavController,
              private startService: StartService,
              private toastCtr: ToastController) { }

  //In paramMap leggo IDPrenotazione
  ngOnInit() {
       
    this.showSpinner = true;

    this.router.paramMap.subscribe(param => {
      if (param.has('historyId')) {
        this.idPrenotazione = param.get('historyId');

        if (this.idPrenotazione.length !== 0) {

          //Carico dal server la prenotazione e le collection figlie 999
          this.subActivePrenotazione = this.startService.requestPrenotazioneById(this.idPrenotazione, 999).subscribe (docPrenotazione => {

            this.activePrenotazione = docPrenotazione;
            //Non mi sono arrivati i dati
            if (!this.activePrenotazione) {
              this.goBack();
            }
            else {
              if (this.activePrenotazione.PRENOTAZIONEPIANIFICAZIONE.length !== 0) {
                this.docPianificazione = this.activePrenotazione.PRENOTAZIONEPIANIFICAZIONE[0];
                this.showSpinner = false;
              }
              else {
                this.goBack();      
              }
            }
          });
        }
        else {
          this.goBack();
        }
      }
      else {
        this.goBack();
      }
    });

  }

  

  ngOnDestroy() {
    if (this.subActivePrenotazione) {
      this.subActivePrenotazione.unsubscribe();
    }
  }


  goBack() {
    this.showMessage('Informazioni prenotazioni errate');
    this.navCtr.navigateBack(['/','historylist']);
  }


   /**
   * Visualizza un messaggio come Toast
   * @param message Messaggio da mostrare
   */
  showMessage(message: string) {

    //Creo un messaggio
    this.toastCtr.create({
      message: message,
      duration: 3000
    })
    .then(tstMsg => {
      tstMsg.present();
    });

  }
}
