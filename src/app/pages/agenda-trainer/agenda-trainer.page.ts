import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { MyDateTime } from 'src/app/library/models/mydatetime.model';
import { Corso } from 'src/app/models/corso.model';
import { CorsoValutazione } from 'src/app/models/corsovalutazione.model';
import { ItemCalendario } from 'src/app/models/itemCalendario.model';
import { Livello } from 'src/app/models/livello.model';
import { PianificazioneCorso } from 'src/app/models/pianificazionecorso.model';
import { Utente } from 'src/app/models/utente.model';
import { Language, RangeSearch, TimeTrainerCourse } from 'src/app/models/valuelist.model';
import { StartService } from 'src/app/services/start.service';
import { ValutazioneTrainerPage } from './valutazione-trainer/valutazione-trainer.page';


export enum ViewTrainerCourse {
  impegni = 'impegni',
  corsi = 'corsi'
}

export interface IRangeDate {
  startDate: Date,
  endDate: Date
}


@Component({
  selector: 'app-agenda-trainer',
  templateUrl: './agenda-trainer.page.html',
  styleUrls: ['./agenda-trainer.page.scss'],
})
export class AgendaTrainerPage implements OnInit,OnDestroy {
  lingua=Language.italiano;  
  
  utente: Utente = new Utente();

  //Impegni
  myListPianificazioni: PianificazioneCorso[] = [];
  selectedDate: Date = new Date();
  selectedIsoDate: string = this.selectedDate.toISOString();

  //Criteri ricerca delle pianificazioni
  rangeSearchPianificazioni: RangeSearch = RangeSearch.giorno;
  PageRangeSearch: typeof RangeSearch = RangeSearch;

  //Il Gruppo con i Filtri degli impegni puo' essere collassato o aperto
  collapsedFilterPianificazioni: boolean = true;
  //Il Gruppo con i Filtri degli impegni puo' essere collassato o aperto
  collapsedFilterCorsi: boolean = true;

  //Elenco Corsi
  myListCorsi: Corso[] = [];
  subListenCorsi: Subscription;

  showFilter: boolean = true;

  //FIXME: C'e' gia un enum con i giorni della settimana
  settimana = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato']

  //Viste della pagina
  PageView : typeof ViewTrainerCourse = ViewTrainerCourse;
  selectedView: ViewTrainerCourse = ViewTrainerCourse.impegni;

  //Stati di un corso con la data odierna
  TimeStateCourse: typeof TimeTrainerCourse = TimeTrainerCourse;
  selectedTimeState:TimeTrainerCourse = TimeTrainerCourse.attivi;

  myLoadingForCorsi: HTMLIonLoadingElement;

  today = new Date();


  constructor(
    private startService: StartService,
    private navController: NavController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController,
    private modalController: ModalController
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
   * Calcola le Date Inizio e Fine per effettuare la richiesta Impegni
   * @returns IRangeDate con inizio e fine
   */
  private prepareDateForSearchImpegni(): IRangeDate {
    let dataInizio: Date;
    let dataFine: Date;
    let range: IRangeDate;

    if (this.rangeSearchPianificazioni == RangeSearch.giorno) {
      dataInizio = this.selectedDate;
      dataFine = this.selectedDate;
    }
    else if (this.rangeSearchPianificazioni == RangeSearch.settimana) {
      //Imposto da Domenica a Domenica
      dataInizio = MyDateTime.getStartEndDate(this.selectedDate,'week','start');
      dataFine = MyDateTime.getStartEndDate(this.selectedDate,'week','end');
    }
    else if (this.rangeSearchPianificazioni == RangeSearch.mese) {
      //Dal 1 a fine Mese
      dataInizio = MyDateTime.getStartEndDate(this.selectedDate,'month','start');
      dataFine = MyDateTime.getStartEndDate(this.selectedDate,'month','end');
    }

    //Preparo il range e lo ritorno
    range = {
      startDate: dataInizio,
      endDate: dataFine
    }
    
    return range;

  }

  /**
   * Richiedo al server le date pianificate dei corsi
   */
  private requestImpegni(event?: any) {

    let rangeDate: IRangeDate;

    //creo il loading
    this.loadingController.create({
      message: 'Caricamento...',
      spinner: 'circular',
      backdropDismiss: true
    })
    .then(elLoading => {

      elLoading.present();

      //Preparo le date da utilizzare per la ricerca
      rangeDate = this.prepareDateForSearchImpegni();

      //Chiudo il collapsed
      this.collapsedFilterPianificazioni = true;
      
      //qui stò richiedendo gli impegni che riguardano l'utente in quanto "collaboratore"
      this.startService.requestImpegniTrainer(this.utente.ID, rangeDate.startDate, rangeDate.endDate)
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

  /**
   * Click su un elemento della Lista Impegni
   * @param elImpegno Elemento selezionato
   */
   onClickImpegno(elImpegno: PianificazioneCorso){
    this.navController.navigateForward('/agenda-trainer/' + elImpegno.ID);
    // this.navController.navigateForward('/agenda-trainer/' + elem.ID+'-'+elem.IDCORSO);

  }

  /**
   * Quando viene scelto un corso, si vuole accedere alla Scheda di Valutazione
   * E' necessario chiedere informazioni al server
   * @param elCorso 
   * 
   */
  onClickCorso(elCorso: Corso) {

    if (elCorso) {

      this.loadingController.create({
        message: 'Caricamento...',
        spinner: 'circular',
        backdropDismiss: true      
      })
      .then(elLoading => {
  
        elLoading.present();

        //Effettuo la richiesta al server
        this.startService.requestSchedaValutazioneCorso(elCorso.ID)
                        .then((docScheda: CorsoValutazione) => {


                          //Chiedo al server i livelli per lo sport
                          this.startService.requestLivelliForSport(elCorso.IDSPORT)
                                           .then((collLivelli:Livello[]) => {

                                             //Chiudo il loading
                                             elLoading.dismiss();

                                             //Devo aprire la videata in modale passando 
                                             //a) Scheda di Valutazione
                                             //b) Corso di riferimento
                                             //c) Livelli Sportivi
                                             this.openModaleSchedaValutazione(docScheda, elCorso, collLivelli);

                                           })


                        })
                        .catch(error => {

                          elLoading.dismiss();

                          //Mostro un messaggio
                          this.showMessage(error,'alert');
                        })
      })


    }

  }

  /**
   * Apre in modale la videata ValutazioneTrainer 
   * passando la scheda da mostrare
   * @param docScheda Scheda di Valutazione
   * @param docCorso Corso di riferimento
   */
  openModaleSchedaValutazione(docScheda: CorsoValutazione, 
                              docCorso: Corso,
                              collLivelli:Livello[]) {
    
    //Scheda di Valutazione e Corso presente
    if (docScheda && docCorso) {

      this.modalController.create({
        component: ValutazioneTrainerPage,
        componentProps: {
          'docCorsoValutazione': docScheda,
          'docCorso': docCorso,
          'collLivelli': collLivelli
        }
      })
      .then(elModal => {

        elModal.present();
      })
    }
  }


  /**
   * Visualizza un messaggio
   */
  showMessage(messaggio: string, type?:'toast'|'alert'){

    if (type == 'alert') {

      let alertOptions = {
        message: messaggio,
        buttons: ['OK']
      }


      this.alertController.create(alertOptions)
            .then(elAlert => {
                    elAlert.present();
            });

    }
    else {

      this.toastController.create({
        message: messaggio,
        duration: 3000
      })
      .then(elToast => {
        elToast.present();
      })

    }
  }


  /**
   * Nella pagina Impegni è stato modificata il filtro Data 
   * per la ricerca
   */
  onChangeFilterDateImpegni(){    
    this.selectedDate = (new Date(this.selectedIsoDate)); 
    this.requestImpegni();
  }

  /**
   * Nella pagina Impegni è stato premuto Item-Divider-Group
   * per cambiare il collassamento dei dati
   */
  onChangeCollapseFilterPianificazioni() {
    if (this.collapsedFilterPianificazioni) {
      this.collapsedFilterPianificazioni = false;
    }
    else {
      this.collapsedFilterPianificazioni = true;
    }
  }


  /**
   * Nella pagina Corsi è stato premuto Item-Divider-Group
   * per cambiare il collassamento dei dati
   */
  onChangeCollapseFilterCorsi() {
    if (this.collapsedFilterCorsi) {
      this.collapsedFilterCorsi = false;
    }
    else {
      this.collapsedFilterCorsi = true;
    }
  }

  /**
   * Pagina Impegni, è stato modificato il PageRangeSearch 
   * per recuperare gli impegni con un range giornaliero, settimanale, mensile
   * @param event 
   */
  onChangePageRangeSearch(event: any) {
    //Devo effettuare nuovamente la ricerca degli impegni

    //Recupero nuovamente gli Impegni
    this.requestImpegni();

  }




  getItemParamsFromPianificazione(pianificazioneElem: PianificazioneCorso){
    return ItemCalendario.getParamsPianificazioneCorso(pianificazioneElem);
  }

  /**
   * 
   * @param idSport idSport
   * @returns Ritorna l'icona sport da usare
   */
  getIconSport (idSport:string){
    return this.startService.getSportIcon(idSport);
  }

  /**
   * Ritorna il colore da applicare alla riga della Lista Corsi
   * @param elCorso 
   */
  getColorIconCorso(elCorso: Corso):string {
    let color = 'primary';

    let today: Date = new Date(MyDateTime.formatDateISO(new Date));
    
    if (elCorso) {
      if (elCorso.DATAFINE < today) {
        //Già concluso
        color='danger';
      }
      else if (elCorso.DATAINIZIO > today) {
        //Futuri
        color = 'warning'
      }
      else {
        //Attuali
        color = 'success';
      }
    }

    return color;
  }


  /**
   * Etichetta da mostrare nella Barra di ricerca
   * Pagina Impegni
   * Il valore dipende dalla variabile rangeSearchPianificazioni
   */
  getLabelFilterImpegni(): string {
    let label: string;

    switch (this.rangeSearchPianificazioni) {
      case RangeSearch.giorno:
        label = 'Impegni giornalieri';
        break;
      case RangeSearch.settimana:
        label = 'Impegni settimanali';
        break;
      case RangeSearch.mese:
        label = 'Impegni mensili';
        break;
    
      default:
        break;
    }

    return label;
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

    if (this.selectedView == this.PageView.impegni) {

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
         case ViewTrainerCourse.impegni:
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





