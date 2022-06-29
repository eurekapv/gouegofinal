import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ModesCalendar, MyDateTime } from 'src/app/library/models/mydatetime.model';
import { RequestDecode, RequestParams } from 'src/app/library/models/requestParams.model';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { Corso } from 'src/app/models/corso.model';
import { CorsoValutazione } from 'src/app/models/corsovalutazione.model';
import { ItemCalendario } from 'src/app/models/itemCalendario.model';
import { Livello } from 'src/app/models/livello.model';
import { LogApp } from 'src/app/models/log.model';
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

  //Proprietà per la pagina IMPEGNI
  myListPianificazioni: PianificazioneCorso[] = [];
  selectedDate: Date = new Date();

  //Modalità Impegni mostrate nella Segment
  impegniModes: ISegmentRange[] = [{
    value: RangeSearch.giorno,
    title: 'Giorno'
  }, 
  {
    value: RangeSearch.settimana,
    title: 'Settimana'
  },
  {
    value: RangeSearch.mese,
    title: 'Mese'
  }];

  //Segmento Impegni selezionato
  impegniSelectedMode: ISegmentRange = this.impegniModes[0];
  
  //Proprietà per la pagina VALUTAZIONI
  valutazioniModes: ISegmentTime[] = [{
    value: TimeTrainerCourse.passati,
    title: 'Conclusi'
  }, 
  {
    value: TimeTrainerCourse.attivi,
    title: 'In Esecuzione'
  },
  {
    value: TimeTrainerCourse.futuri,
    title: 'Futuri'
  }];

  valutazioniSelectedMode: ISegmentTime = this.valutazioniModes[1];


  PageRangeSearch: typeof RangeSearch = RangeSearch;

  //Il Gruppo con i Filtri degli impegni puo' essere collassato o aperto
  collapsedFilterCorsi: boolean = true;

  //Elenco Corsi
  myListCorsi: Corso[] = [];
  subListenCorsi: Subscription;

  showFilter: boolean = true;

  //Viste della pagina
  PageView : typeof ViewTrainerCourse = ViewTrainerCourse;
  selectedView: ViewTrainerCourse = ViewTrainerCourse.impegni;

  myLoadingForCorsi: HTMLIonLoadingElement;

 

  constructor(
    private startService: StartService,
    private navController: NavController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController,
    private modalController: ModalController,
    private docStructureService: DocstructureService,
    private actionController: ActionSheetController
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
   * Titolo mostrato nella Modale degli impegni
   */
  get titleModalImpegniDate():string {
    let title = '';
    if (this.impegniSelectedMode) {

      switch (this.impegniSelectedMode.value) {

        case RangeSearch.giorno:
          title = 'Impegni Giorno'
          break;

        case RangeSearch.settimana:
          title = 'Impegni Settimana'
          break;
        
        case RangeSearch.mese:
          title = 'Impegni Mensili'
          break;
          
      
        default:
          break;
      }
    }

    return title;

  }

  /**
   * Etichetta mostrata nel componente DateTime Impegni
   */
   get labelModalImpegniDate():string {

    let myLabel = '';

    if (this.impegniSelectedMode) {

      switch (this.impegniSelectedMode.value) {

        case RangeSearch.giorno:
          myLabel = 'del'
          break;

        case RangeSearch.settimana:
          myLabel = 'del'
          break;
        
        case RangeSearch.mese:
          myLabel = 'di'
          break;
          
      
        default:
          break;
      }
    }

    return myLabel;

  }  

  /**
   * Modalità del calendario per gli Impegni
   */
  get calendarModeImpegniDate(): ModesCalendar {
    let mode: ModesCalendar = ModesCalendar.date;

    if (this.impegniSelectedMode) {
      switch (this.impegniSelectedMode.value) {

        case RangeSearch.giorno:
          mode = ModesCalendar.date;
          break;

        case RangeSearch.settimana:
          mode = ModesCalendar.date;
          break;
        
        case RangeSearch.mese:
          mode = ModesCalendar.monthYear;
          break;
          
      
        default:
          mode = ModesCalendar.date;
          break;
      }

    }
    return mode;
  }

  /**
   * Calcola le Date Inizio e Fine per effettuare la richiesta Impegni
   * @returns IRangeDate con inizio e fine
   */
  private prepareDateForSearchImpegni(): IRangeDate {
    let dataInizio: Date;
    let dataFine: Date;
    let range: IRangeDate;

    switch(this.impegniSelectedMode.value) {
      case RangeSearch.giorno:
          dataInizio = this.selectedDate;
          dataFine = this.selectedDate;
        break;
      case RangeSearch.settimana:
        //Imposto da Domenica a Sabatp
        dataInizio = MyDateTime.getStartEndDate(this.selectedDate,'week','start');
        dataFine = MyDateTime.getStartEndDate(this.selectedDate,'week','end');
        break;
      case RangeSearch.mese:
        //Dal 1 a fine Mese
        dataInizio = MyDateTime.getStartEndDate(this.selectedDate,'month','start');
        dataFine = MyDateTime.getStartEndDate(this.selectedDate,'month','end');        
        break;
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
  public requestImpegni(event?: any) {

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
      
     
      //qui stò richiedendo gli impegni che riguardano l'utente in quanto "collaboratore"
      this.startService
        .requestImpegniTrainer(this.utente.ID, rangeDate.startDate, rangeDate.endDate)
        .then(listReceived => {
          

          let seqField = [
                          ['IDCORSO','IDLIVELLOENTRATA'], 
                          ['IDCORSO','IDSPORT'], 
                          ['IDCORSO']
                          ];
  
          //Recupero le informazioni di Corso
          this.docStructureService.getRelMultiDocCollection(listReceived, seqField)
              .then(() => {

                this.myListPianificazioni = listReceived;
                
                
                elLoading.dismiss();
      
                if (event && event.target) {
                  event.target.complete();
                }
              })
              .catch(() => {

                this.myListPianificazioni = listReceived;
                
                elLoading.dismiss();
      
                if (event && event.target) {
                  event.target.complete();
                }   

              })

        })
        .catch(error => {

          if (event && event.target) {
            event.target.complete();
          }

          elLoading.dismiss();
          console.log(error);
          this.startService.presentToastMessage('Errore di connessione');

        });
        
    })
  }


  /**
   * Richiedo al server i Corsi
   * @param event 
   */
  public requestTimeCorsi(event?: any) {

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
          this.startService.requestTimeTrainerCourse(this.utente.ID, this.valutazioniSelectedMode.value);

          //Il Dismiss ci pensera la funzione dell'Observable a spegnerlo
          
        })

  }

  /**
   * Click su un elemento della Lista Impegni
   * @param elImpegno Elemento selezionato
   */
   onClickImpegno(elImpegno: PianificazioneCorso){
    let docCorso: Corso;
    let showScelta = false;
    let adesso = new Date();
    let dataOraFine: Date; 


    if (elImpegno) {
      //Vediamo se trovo il documento Corso all'interno
      docCorso = elImpegno.getDocInRepository(['IDCORSO']) as Corso;
      if (docCorso) {
        dataOraFine = MyDateTime.mergeDateAndTime(docCorso.DATAFINE, docCorso.ORAINIZIO);

        if (adesso >= dataOraFine) {
          //Chiedo cosa vuole fare
          showScelta = true;
        }
      }
    }

    if (showScelta) {
      this.askPresenzeValutazioni(elImpegno);
    }
    else {
      this.showSchedaPresenze(elImpegno.ID);
    }
    
  }

  /**
   * Visualizza la scheda relativa all'IdImpegno
   * per 
   * @param idImpegno idImpegno da aprire
   */
  showSchedaPresenze(idImpegno: string): void {

    if (idImpegno && idImpegno.length != 0) {

      this.navController.navigateForward('/agenda-trainer/' + idImpegno);

    }
  }

  /**
   * Recupera dal parametro passato il documento Corso
   * utile all'apertura della scheda Valutazioni
   * 
   * E' possibile passare un documento Corso o anche uno Pianificazione
   * 
   * @param elItem Elemento da cui recuperare
   */
  private _forValutazioneRequestCorso(elItem: Corso | PianificazioneCorso):Promise<Corso> {
    let docCorso: Corso;
    let reqParam: RequestParams;
    let reqDecode: RequestDecode;

    return new Promise<Corso>((resolve) => {
      
      if (elItem) {
        if (elItem instanceof Corso) {
          
          resolve(elItem);

        }
        else if (elItem instanceof PianificazioneCorso) {

          docCorso = new Corso(true);
          docCorso.ID = elItem.IDCORSO;

          reqDecode = new RequestDecode();
          reqDecode.active = true;

          reqParam = new RequestParams();
          reqParam.decode = reqDecode;
          
          //Devo recuperare l'elemento Corso
          this.docStructureService.requestNew(docCorso, reqParam)
                                  .then(listCorsi => {
                                    if (listCorsi && listCorsi.length != 0) {

                                      resolve(listCorsi[0]);
                                    }
                                    else {
                                      resolve(null);
                                    }
                                  })
                                  .catch(error => {
                                    LogApp.consoleLog(error);
                                    resolve(null);
                                  });

        }
        else {
          resolve(null);
        }
      }
      else {
        resolve(null);
      }

    })
  }

  /**
   * Evento di Interfaccia al Click del corso
   * @param elCorso Corso di riferimento
   */
  onClickCorso(elCorso: Corso) {
    //Passo alla visualizzazione della Scheda Valutazione
    this.showSchedaValutazioni(elCorso);
  }

  /**
   * Riceve un documento in Ingresso e cerca sempre di ricavare il documento
   * Corso utile all'apertura della form Valutazioni  
   * @param elItem Corso o Pianificazione
   */
  showSchedaValutazioni(elItem: Corso | PianificazioneCorso) {
    if (elItem) {

      this.loadingController.create({
        message: 'Caricamento...',
        spinner: 'circular',
        backdropDismiss: true      
      })
      .then(elLoading => {

        //Mostro il loading
        elLoading.present();

        //Richiedo il documento Corso
        this._forValutazioneRequestCorso(elItem)
            .then(elCorso => {

              //Qualcosa è andato storto
              if (!elCorso) {

                //Chiudo il loading
                elLoading.dismiss();
                this.startService.presentToastMessage('Informazioni corso non trovate');
              }
              else {
                //Posso procedere con la richiesta al server della scheda di valutazione, 
                //e relativa visualizzazione
                //Passo il corso e il loading da chiudere
                this._requestAndOpenValutazione(elCorso, elLoading);
              }
            })

      })
    }
  }


  /**
   * Quando viene scelto un corso, si vuole accedere alla Scheda di Valutazione
   * E' necessario chiedere informazioni al server
   * @param elCorso 
   * 
   */
  private _requestAndOpenValutazione(elCorso: Corso, elLoading:HTMLIonLoadingElement) {

    //Se presente il corso proseguo
    if (elCorso) {

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
                                           this._openModaleSchedaValutazione(docScheda, elCorso, collLivelli);

                                         })
                                         .catch(error => {
                                           //Non ho recuperato i Livelli
                                           elLoading.dismiss();
                                           LogApp.consoleLog(error);
                                           this.startService.presentToastMessage('Recupero Livelli fallito');
                                         })


                      })
                      .catch(error => {

                        //Chiudo il loading
                        elLoading.dismiss();

                        this.startService.presentAlertMessage('Si è verificato un errore');
                        LogApp.consoleLog(error);
                      })


    }
    else {
      //Chiudo il loading
      elLoading.dismiss();
    }

  }

  /**
   * Apre in modale la videata ValutazioneTrainer 
   * passando la scheda da mostrare
   * @param docScheda Scheda di Valutazione
   * @param docCorso Corso di riferimento
   */
  private _openModaleSchedaValutazione(docScheda: CorsoValutazione, 
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
   * @deprecated Per ora non fa piu nulla in quanto abbiamo spostato i filtri nel content
   * @param event 
   */
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

    // /**
    // * Cambio del valore di ricerca per l'elenco corsi
    // * @param value Valore selezionato
    // */
    // onChangeTimeState(value: TimeTrainerCourse) {

    //     //Devo effettuare la richiesta per i nuovi corsi
    //     this.requestTimeCorsi();

    // }

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

  /**
   * Apre un Action Sheet per chiedere cosa l'utente vuole fare
   * Usato nella lista Impegni per farlo andare anche alle Valutazioni
   */
  askPresenzeValutazioni(elImpegno: PianificazioneCorso):void {
    let pthis = this;
    

    if (elImpegno) {
        
      this.actionController.create({
        header: 'Cosa vuoi fare',
        buttons:[{
          icon:'bar-chart-outline',
          text: 'Valutazioni',
          handler: () => {
            //Devo aprire le valutazioni
            pthis.showSchedaValutazioni(elImpegno);
          }
          }, 
          {
            icon:'people-circle-outline',
            text: 'Presenze',
            handler: () => {
              //Devo aprire le presenze
              pthis.showSchedaPresenze(elImpegno.ID);
            }
          },
        {
          icon: 'arrow-undo-outline',
          text: 'Annulla',
          role: 'cancel'
        }]
      })
      .then(elAction => {
        elAction.present();
      });


    }
  }

}

//Utilizzato per mostrare i segment nella pagina
interface ISegmentRange {
  value: RangeSearch,
  title: string;
}

interface ISegmentTime {
  value: TimeTrainerCourse,
  title: string;
}



