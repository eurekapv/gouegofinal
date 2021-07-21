import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Corso } from 'src/app/models/corso.model';
import { ItemCalendario } from 'src/app/models/itemCalendario.model';
import { PianificazioneCorso } from 'src/app/models/pianificazionecorso.model';
import { Utente } from 'src/app/models/utente.model';
import { TimeTrainerCourse } from 'src/app/models/valuelist.model';
import { StartService } from 'src/app/services/start.service';


export enum ViewTrainerCourse {
  pianificazioni = 'pianificazioni',
  corsi = 'corsi'
}




@Component({
  selector: 'app-agenda-trainer',
  templateUrl: './agenda-trainer.page.html',
  styleUrls: ['./agenda-trainer.page.scss'],
})
export class AgendaTrainerPage implements OnInit,OnDestroy {

  utente: Utente = new Utente();
  //Pianificazini
  myListPianificazioni: PianificazioneCorso[] = [];
  selectedDate: Date = new Date();
  selectedIsoDate: string = this.selectedDate.toISOString();

  //Elenco Corsi
  myListCorsi: Corso[] = [];
  subListenCorsi: Subscription;

  showFilter: boolean = true;

  //FIXME: C'e' gia un enum con i giorni della settimana
  settimana = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato']

  //Viste della pagina
  PageView : typeof ViewTrainerCourse = ViewTrainerCourse;
  selectedView: ViewTrainerCourse = ViewTrainerCourse.pianificazioni;

  //Stati di un corso con la data odierna
  TimeStateCourse: typeof TimeTrainerCourse = TimeTrainerCourse;
  selectedTimeState:TimeTrainerCourse = TimeTrainerCourse.attivi;

  myLoadingForCorsi: HTMLIonLoadingElement;


  constructor(
    private startService: StartService,
    private navController: NavController,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) { 

    //Ascolto i cambiamenti per la Lista Corsi
    this.listenChangeListCorsi();

  }

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


  ngOnDestroy() {
    if (this.subListenCorsi) {
      this.subListenCorsi.unsubscribe();
    }
  }


  /**
   * Richiedo al server le date pianificate dei corsi
   */
  private requestImpegni(event?: any) {

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

          if (event && event.target) {
            event.target.complete();
          }

        })
        .catch(error => {

          if (event && event.target) {
            event.target.complete();
          }

          elLoading.dismiss();
          console.log(error);
          this.showMessage('Errore di connessione');
        });
        
    })
  }


  /**
   * Richiedo al server i Corsi
   * @param event 
   */
  private requestTimeCorsi(event?: any) {

        //creo il loading
        this.loadingController.create({
          message: 'Caricamento...',
          spinner: 'circular',
          backdropDismiss: true
        })
        .then(elLoading => {
    
          if (event && event.target) {
            event.target.complete();
          }

          //Mostro il loading
          this.myLoadingForCorsi = elLoading;
          this.myLoadingForCorsi.present();

          //Devo effettuare la richiesta per i nuovi corsi
          //Sono Observable e quindi verranno popolati in autonomia
          this.startService.requestTimeTrainerCourse(this.utente.ID, this.selectedTimeState);

          //Il Dismiss ci pensera la funzione dell'Observable a spegnerlo
          
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


  /**
   * Utente ha richiesto un refresh dei dati
   * @param event 
   */
  doRefresh(event: any) {

    if (this.selectedView == this.PageView.pianificazioni) {

      this.requestImpegni(event);

    }
    else if (this.selectedView == this.PageView.corsi) {

      this.requestTimeCorsi(event);
    }
      
  }

  /**
   * L'utente ha scelto un altra pagina
   * @param value Cambio Visualizzazione del Segment
   */
     onChangeSegment(value)
     {
       //ngModel su HTML modifica la prorpieta, qui 
       //nel caso debba effettuare operazioni al cambio
       switch (this.selectedView) {
         case ViewTrainerCourse.corsi:
           //Scelta Corsi
           this.requestTimeCorsi();
           break;
         case ViewTrainerCourse.pianificazioni:
           //Scelta Pianificazioni
           this.requestImpegni();
           break;
       
         default:
           break;
       }
     }

    /**
    * Cambio del valore di ricerca per l'elenco corsi
    * @param value Valore selezionato
    */
    onChangeTimeState(value: TimeTrainerCourse) {

        //Devo effettuare la richiesta per i nuovi corsi
        this.requestTimeCorsi();

    }

  /**
  * Sottoscrizione all'ascolto della lista dei corsi Trainer (Passati, presenti, futuri)
  */
  listenChangeListCorsi() {

    this.subListenCorsi = this.startService.listCorsiTrainer
                                  .subscribe(listElement => {
                                          this.myListCorsi = listElement;

                                          if (this.myLoadingForCorsi) {
                                            this.myLoadingForCorsi.dismiss();
                                          }
                                  }, error => {
                                    this.myListCorsi = [];
                                    if (this.myLoadingForCorsi) {
                                      this.myLoadingForCorsi.dismiss();
                                    }
                                  });
  }


}





