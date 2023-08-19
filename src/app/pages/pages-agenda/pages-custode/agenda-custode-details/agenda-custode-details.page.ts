import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Corso } from 'src/app/models/corso.model';
import { Evento } from 'src/app/models/evento.model';
import { ImpegnoCustode } from 'src/app/models/impegno-custode.model';
import { LogApp } from 'src/app/models/log.model';

import { Prenotazione } from 'src/app/models/prenotazione.model';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';
import { SettoreAttivita } from 'src/app/models/valuelist.model';
import { StartService } from 'src/app/services/start.service';


@Component({
  selector: 'app-agenda-custode-details',
  templateUrl: './agenda-custode-details.page.html',
  styleUrls: ['./agenda-custode-details.page.scss'],
})
export class AgendaCustodeDetailsPage implements OnInit, OnDestroy {

  //Segnala un errore di caricamento dei dati
  loadingError = false;
  messageError: string = '';
  loadingComplete = false; //Caricamento dati concluso

  settoreRefer: SettoreAttivita; //Settore di riferimento


  idPianificazione: string;
  
  impegnoDoc: ImpegnoCustode;
  prenotazioneDoc: Prenotazione;
  pianificazioneDoc: PrenotazionePianificazione;
  corsoDoc: Corso;
  eventoDoc: Evento;
  captionHeader: string = 'Agenda';
  iconHeader: string = 'calendar'
  Tiposettore: typeof SettoreAttivita = SettoreAttivita;

  subParaMap: Subscription;
  lockedForm = true; //Specifica se il pannello è bloccato per le modifiche

  incassoAttuale: number;
  originalResiduo = true; //E' presente in origine un residuo da incassare

  myToday: Date = new Date();

  constructor(
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private startService: StartService,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { 
    
  }

  ngOnInit() {
    let paramKey = 'pianificazioneId';
    this.loadingError = false;
    this.loadingComplete = false;
    this.messageError = '';

    //Recupero il parametro
    this.subParaMap = this.activatedRoute.paramMap.subscribe(paramsData => {

      if (paramsData.has(paramKey)) {
        //Recupero idPianificazione  
        this.idPianificazione = paramsData.get(paramKey);

        //Procedo con il caricamento        
        this.loadingController.create({
          message : 'Attendere caricamento',
          backdropDismiss: true,
          spinner: 'circular',
        })
        .then(elLoading => {

          elLoading.present();

          //Procedo con la richiesta dei documenti
          this.requestDocs()
              .then(() => {
                    //Fermo il loading
                    elLoading.dismiss();
                    this.loadingComplete = true;
                    this.loadingError = false;
                    this.messageError = '';

                    //Caricato tutto
                    this.startService.presentToastMessage('Dati caricati');
              })
              .catch(error => {
                    LogApp.consoleLog(error);

                    //Fermo il loading
                    elLoading.dismiss();

                    this.loadingComplete = true;
                    this.loadingError = true;

                    if (typeof error == 'string') {
                      this.messageError = error
                    }
                    else {
                      try {
                        this.messageError = error.message;
                      } catch (error) {
                        this.messageError = 'Errore nel recupero dei dati'
                      }
                    }
              })
          
          

        })        
      }
      else{
        this.loadingError = true;
        this.loadingComplete = true;
        this.messageError = 'Pianificazione non definita'
      }
    })
  }

  //#region PULSANTE BACK
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
  
  //#endregion

  //#region RICHIESTA DOCUMENTI
  /**
   * Effettua la richiesta dei documenti necessari
   */
  requestDocs():Promise<void> {

    return new Promise<void>((resolve, reject) => {
        if (this.idPianificazione && this.idPianificazione.length != 0) {
          //Inizio con la richiesta del documento di Impegno Custode
          this.startService.requestImpegnoCustodeById(this.idPianificazione)          
                           .then(elImpegno => {
                              if (elImpegno) {
                                this.impegnoDoc = elImpegno;
                                return elImpegno;
                              }
                              else {
                                reject('Non è stato trovato l\'elemento richiesto');
                              }
                           })
                           .then(elImpegno => {
                              return this.requestDocRelFromImpegno(elImpegno);
                           })
                           .then(referDoc => {
                              LogApp.consoleLog('Caricamento Impegno concluso');
                              LogApp.consoleLog(referDoc);

                              //Imposto l'icona di riferimento
                              this.iconHeader = this.impegnoDoc.getIconName();

                              if (referDoc instanceof Corso) {
                                //Settore di riferimento
                                this.settoreRefer = SettoreAttivita.settoreCorso;
                                this.corsoDoc = referDoc;
                                this.captionHeader = 'Corso';
                                
                              }
                              else if (referDoc instanceof PrenotazionePianificazione) {
                                //Settore di riferimento
                                this.settoreRefer = SettoreAttivita.settorePrenotazione;
                                this.pianificazioneDoc = referDoc;
                                this.captionHeader = 'Prenotazione';
                                //Incasso del Custode
                                this.pianificazioneDoc._INCASSOCUSTODE = this.pianificazioneDoc.RESIDUO;
                                this.originalResiduo = (this.pianificazioneDoc.RESIDUO != 0);
                              }
                              else if (referDoc instanceof Evento) {
                                //Settore di riferimento
                                this.settoreRefer = SettoreAttivita.settoreEvento;
                                this.eventoDoc = referDoc;
                                this.captionHeader = 'Evento';
                              }

                              return referDoc;
                           })
                           .then(referDoc => {
                            LogApp.consoleLog('Caricamento documenti aggiuntivi');

                              //Se necessario carico altri documenti
                              if (referDoc instanceof PrenotazionePianificazione) {
                                LogApp.consoleLog('Caricamento prenotazione');
                                //Carico anche la prenotazione
                                return this.startService.requestPrenotazioneById(referDoc.IDPRENOTAZIONE)
                              }
                              else {
                                return;
                              }
                              
                           })
                           .then(docSingle => {
                            //Se c'e' un documento - dovrebbe essere la prenotazione
                            if (docSingle) {
                              if (docSingle instanceof Prenotazione) {
                                this.prenotazioneDoc = docSingle;
                              }
                            }

                            return;
                           })
                           .then(() => {
                            //Creo di aver fatto tutti i caricamenti richiesti
                            resolve();
                           })
                           .catch(error => {
                            reject(error);
                           })
        }
        else {
          reject('Pianificazione non definita')
        }
    })

  }

  /**
   * Carica il documento di riferimento partendo dall'occupazione
   * Settore Corso  => Caricamento Corso
   * Settore Prenotazione => Caricamento Prenotazione Pianificazione
   * Settore Evento => ANCORA DA FARE
   * @param docImpegno 
   * @returns 
   */
  requestDocRelFromImpegno(docImpegno: ImpegnoCustode): Promise<PrenotazionePianificazione | Corso | Evento> {
    return new Promise<PrenotazionePianificazione | Corso | Evento>((resolve, reject) => {
        if (docImpegno) {
          switch (docImpegno.SETTORE) {
            case SettoreAttivita.settoreCorso:
                //Devo ritornare il corso di riferimento
                this.startService.requestCorsoById(docImpegno.IDREF)
                                .then(elCorso => {
                                  resolve(elCorso);
                                })
                                .catch(error => {
                                  reject(error);
                                })
              break;
            case SettoreAttivita.settorePrenotazione:
                this.startService.requestPianificazionePrenotazioneById(docImpegno.ID)
                                .then(elPianificazionePrenotazione => {
                                  resolve(elPianificazionePrenotazione);
                                })
                                .catch(error => {
                                  reject(error);
                                })
              break;
            case SettoreAttivita.settoreEvento:
              this.startService.requestEventoById(docImpegno.IDREF)
                              .then(elEvento => {
                                resolve(elEvento);
                              })
                              .catch(error => {
                                reject(error);
                              })
              break;
          
            default:
              reject('Tipologia di riferimento non impostata')
              break;
          }
        }
        else {
          reject('Informazioni insufficienti per il caricamento');
        }
    })
  }

  //#ewndregion

  //#region GESTIONE ABILITAIZONE MODIFICHE

  
  /**
   * Verifica se possibile modificare i dati
   * @returns 
   */
  get canEditData(): boolean {
    if(this.prenotazioneDoc.DATA  <= this.myToday){
      return true;
    }
    else{
      return false;
    }
  }

  /**
   * Utente richiede il blocco/sblocco dei dati
   */
  onClickLockButton() {
    if (this.canEditData) {
      this.lockedForm = !this.lockedForm;
    }
  }

  /**
   * Utente ha effettuato il click per confermare i dati
   */
  onClickConferma(){

    let alertOptions = {
      header: 'Sei sicuro',
      message: 'Una volta confermato l\'importo, non potrai più modificarlo',
      buttons: [
        {
          text: 'Conferma',
          handler: ()=> {this.onSubmitData()}
        },
        {
          text: 'Annulla',
          role: 'cancel'
        }
      ]
    }
    this.alertController.create(alertOptions)
    .then(elAlert => {
      elAlert.present()
    })

    
  }

  onSubmitData(){
    if(this.canEditData){
      //TODO inviare il docpianificazione a gouego
      
      this.navController.pop();

    }
  }
  
  
  
  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subParaMap.unsubscribe();
  }

  getIcon (idSport){
    return this.startService.getSportIcon(idSport);
  }

  onChangedNumPlayer(nPlayer: number)
  {
    //Memorizzo il numero Partecipanti
    this.pianificazioneDoc.NUMPARTECIPANTI=nPlayer;


    // this.calcolaTotale();
  }

 
  //#region VALORE INCASSO
  /**
   * Flag per decidere se mostrare l'input importo incassato
   */
  get flagInputValoreIncasso(){
    //Mostro l'input del prezzo se originariamente era previsto un residuo da incassare
    let flag = false;
    if (this.originalResiduo) {
      flag = true;
    }
    return flag;
  }

  dismissInputPrezzo(value:number){
    if(value){
      this.pianificazioneDoc._INCASSOCUSTODE = value;
    }
  }

  //#endregion



}
