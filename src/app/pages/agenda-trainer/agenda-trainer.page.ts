import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { IDDocument } from 'src/app/library/models/iddocument.model';
import { MyDateTime } from 'src/app/library/models/mydatetime.model';
import { PostResponse } from 'src/app/library/models/postResult.model';
import { PostParams } from 'src/app/library/models/requestParams.model';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { Corso } from 'src/app/models/corso.model';
import { ItemCalendario } from 'src/app/models/itemCalendario.model';
import { PianificazioneCorso } from 'src/app/models/pianificazionecorso.model';
import { Utente } from 'src/app/models/utente.model';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-agenda-trainer',
  templateUrl: './agenda-trainer.page.html',
  styleUrls: ['./agenda-trainer.page.scss'],
})
export class AgendaTrainerPage implements OnInit {

  utente: Utente = new Utente();
  myListPianificazioni: PianificazioneCorso[] = [];
  selectedDate: Date = new Date();
  selectedIsoDate: string = this.selectedDate.toISOString();

  showFilter: boolean = true;

  //FIXME: C'e' gia un enum con i giorni della settimana
  settimana = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato']


  constructor(
    private startService: StartService,
    private navController: NavController,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {   }

  ngOnInit() {

    //recupero l'utente
    this.utente = this.startService.actualUtente;
    

    //se sono un trainer
    if (this.utente.isTrainer || this.utente.isAssistenteTrainer){

      this.requestImpegni();
    }
    else{
      this.navController.navigateRoot('/home');
    }
  }


  /**
   * Richiedo al server gli impegni
   */
  private requestImpegni() {

    //creo il loading
    this.loadingController.create({
      message: 'Caricamento...',
      spinner: 'circular',
      backdropDismiss: true
    })
    .then(elLoading => {

      elLoading.present();
      
      //qui stò richiedendo gli impegni che riguardano l'utente in quanto "collaboratore"
      this.startService.requestImpegniTrainer(this.utente.ID, this.selectedDate)
        .then(result => {

          this.myListPianificazioni = result;
          
          elLoading.dismiss();
        })
        .catch(error => {
          elLoading.dismiss();
          console.log(error);
          this.showMessage('Errore di connessione');
        });
        
    })
  }

  onClickCorso(elem: PianificazioneCorso){
    this.navController.navigateForward('/agenda-trainer/' + elem.ID);
    // this.navController.navigateForward('/agenda-trainer/' + elem.ID+'-'+elem.IDCORSO);

  }


  /**
   * Visualizza un messaggio
   */
  showMessage(messaggio: string){
    this.toastController.create({
      message: messaggio,
      duration: 3000
    })
    .then(elToast => {
      elToast.present();
    })
  }

  onChangeFilter(){    
    this.selectedDate = (new Date(this.selectedIsoDate)); 
    this.requestImpegni();
  }

  getItemParamsFromPianificazione(pianificazioneElem: PianificazioneCorso){
    return ItemCalendario.getParamsPianificazioneCorso(pianificazioneElem);
  }

  
  onScroll(event:any){
    if(event.detail.currentY < 5){
      this.showFilter = true;
    }
    else{
      if (event['detail']['deltaY'] > 20){
        this.showFilter = false;
      }
      else if (event['detail']['deltaY'] < -20){
        this.showFilter = true;
      }
    }  
  }

  doRefresh(event: any){
    this.startService.requestImpegniTrainer(this.utente.ID, this.selectedDate)
        .then(result => {

          this.myListPianificazioni = result;
          
          event.target.complete();
        })
        .catch(error => {
          event.target.complete();
          console.log(error);
          this.showMessage('Errore di connessione');
        });
      
  }


  //OK
  //CONTROLLARE
  /*
    1) Controllare il pulsante BACK, se perde la sequenza deve andare alla home
    2) Il calendario innestato nell'header con lo stesso colore secondo me sfugge, e non si capisce che è cliccabile
    
    3) La grafica è perfetta. BRAVO
  */
}


