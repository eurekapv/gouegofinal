import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { MyDateTime } from 'src/app/library/models/mydatetime.model';
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
import { ButtonCard } from 'src/app/models/buttoncard.model';
import { Impegno } from 'src/app/models/impegno.model';
import { DetailValutazionePage } from '../detail-valutazione/detail-valutazione.page';


//TODO: Pagina della Lista Valutazione da controllare e modificare
export interface IRangeDate {
  startDate: Date,
  endDate: Date
}

@Component({
  selector: 'app-list-valutazioni',
  templateUrl: './list-valutazioni.page.html',
  styleUrls: ['./list-valutazioni.page.scss'],
})
export class ListValutazioniPage implements OnInit {

  lingua=Language.italiano;  

  //Utente loggato
  utenteDoc: Utente = new Utente();
  
  //Proprietà per la pagina VALUTAZIONI
  valutazioniModes: ISegmentTime[] = [{
    value: TimeTrainerCourse.passati,
    title: 'Conclusi',
    icon: 'stop-circle-outline'
  }, 
  {
    value: TimeTrainerCourse.attivi,
    title: 'In Esecuzione',
    icon: 'play-circle-outline'
  },
  {
    value: TimeTrainerCourse.futuri,
    title: 'Futuri',
    icon: 'play-forward-circle-outline'
  }];

  valutazioniSelectedMode: ISegmentTime = this.valutazioniModes[1];


  PageRangeSearch: typeof RangeSearch = RangeSearch;

  //Elenco Corsi
  myListCorsi: Corso[] = [];
  subListenCorsi: Subscription;

  //Scheda senza corsi
  emptyCardCorsi: ButtonCard = null;



  myLoadingForCorsi: HTMLIonLoadingElement;

 

  constructor(
    private startService: StartService,
    private navController: NavController,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private docStructureService: DocstructureService,
  ) { 

    this.emptyCardCorsi = Impegno.asEmptyButtonCard('nessun corso presente');
    //Ascolto i cambiamenti per la Lista Corsi
    this.onListenChangeListCorsi();

  }

  ngOnInit() {
    //recupero l'utente
    this.utenteDoc = this.startService.actualUtente;
    //Eseguo il refresh dei dati
    this.doRefresh(null);
  }


  ngOnDestroy() {
    if (this.subListenCorsi) {
      this.subListenCorsi.unsubscribe();
    }
  }

    /**
   * Ritorna un Array con il percorso di ritorno
   */
    get backPathArray():string[] {
      let retPath = ['/','appstart-home','tab-agenda'];
  
      return retPath;
    }
  
    //Ritorna il Path Array Back in formato stringa concatenata
    get backButtonHref(): string {
      let myHref = '';
      myHref = this.backPathArray.join('/').substring(1);
  
      return myHref;
    }
  
    /**
     * Torno alla pagina del profilo
     */
    onGoToBack() {
      this.navController.navigateBack(this.backPathArray);
    } 


  /**
   * Richiedo al server i Corsi per le valutazioni
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
          this.startService.requestTimeTrainerCourse(this.utenteDoc.ID, this.valutazioniSelectedMode.value);

          //Il Dismiss ci pensera la funzione dell'Observable a spegnerlo
          
        })

  }


  /**
   * Recupera dal parametro passato il documento Corso
   * utile all'apertura della scheda Valutazioni
   * 
   * E' possibile passare un documento Corso o anche uno Pianificazione
   * 
   * @param elItem Elemento da cui recuperare
   */
  private _requestCorsoDocFrom(elItem: Corso | PianificazioneCorso):Promise<Corso> {
    let docCorso: Corso;
    let reqParam: RequestParams;
    let reqDecode: RequestDecode;

    return new Promise<Corso>((resolve) => {
      
      if (elItem) {
        //Documento già corretto
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
  onClickItemCorso(elCorso: Corso) {


    if (elCorso && elCorso.ID.length != 0) {

      let retPath = ['/','appstart-home','tab-agenda','trainer','detail-valutazione',elCorso.ID];
      let strPath = retPath.join('/').substring(1);
      //Vado verso
      console.log('Vado a ', strPath);
      this.navController.navigateForward(strPath);
    }
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
        this._requestCorsoDocFrom(elItem)
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
        component: DetailValutazionePage,
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

    let today: Date = new Date(MyDateTime.formatDateISO(new Date(), "date"));
    
    if (elCorso) {
      if (MyDateTime.isBefore(elCorso.DATAFINE, today)) {
        //Già concluso
        color='danger';
      }
      else if (MyDateTime.isAfter(elCorso.DATAINIZIO,today)) {
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
   * Utente ha richiesto un refresh dei dati
   * @param event 
   */
  doRefresh(event: any) {
    this.requestTimeCorsi(event);
  }


  /**
  * Sottoscrizione all'ascolto della lista dei corsi Trainer (Passati, presenti, futuri)
  */
  onListenChangeListCorsi() {

    //Ascolto la lista corsi Trainer
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



//Utilizzato per mostrare i segment nella pagina
interface ISegmentRange {
  value: RangeSearch,
  title: string;
}

interface ISegmentTime {
  value: TimeTrainerCourse,
  title: string;
  icon?: string;
}


