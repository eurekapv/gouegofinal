import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertButton, AlertController, IonInput, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { SupportFunc } from 'src/app/library/models/support-func.model';
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

  @ViewChild('inputprice') inputPrice: IonInput;
  
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
  lockedFormPartecipanti = true; //Specifica se il pannello è bloccato per le modifiche
  lockedFormDurata = true; //Specifica se il pannello è bloccato per le modifiche

  inputIncassoAttuale: number;
  inputAnnotazioni: string;
  
  
  modeIncasso: 'nessuno' |'completo' | 'parziale' = 'completo'; //Come si effettua l'incasso della prenotazione
  activePageView: 'page-info' | 'page-conferma' = 'page-info';

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

  ngOnDestroy(): void {
    if (this.subParaMap) {
      this.subParaMap.unsubscribe();
    }
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
  onGoToBack(message?: string) {
        this.navController.navigateBack(this.backPathArray)
                          .then(isFinish => {
                            if (isFinish) {

                              if (message && message.length != 0) {
                                this.startService.presentAlertMessage(message);
                              }

                            }
                          });
  }
  
  //#endregion
  //#region METHOD INTERFACE

  /**
   * Cambio del Modo di Incasso
   * Aggiungo all'INPUT NATIVE 
   * un FontSize xx-large
   */
  onChangeSegmentModoIncasso() {

    console.log('Qua');
    if (this.modeIncasso == 'parziale') {

      setTimeout(()=> {

        if (this.inputPrice) {
          
          this.inputPrice.getInputElement()
                         .then(htmlItem => {
                            if (htmlItem) {
                              htmlItem.style.fontSize = 'xx-large';
                            }
                         })
          
        }

      }, 250);
      
    }
    
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
                                return this.startService.requestPrenotazioneById(referDoc.IDPRENOTAZIONE,2)
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
                            console.log(this.prenotazioneDoc);
                            console.log(this.pianificazioneDoc);

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

  //#endregion

  //#region GESTIONE MODIFICHE
  
  /**
   * Verifica se possibile modificare i dati
   * @returns 
   */
  get canEditDataPrenotazione(): boolean {

    return true;
    
  }

  /**
   * Utente richiede il blocco/sblocco dei dati
   */
  onClickLockButton(where:'partecipanti'|'durata') {
    if (this.canEditDataPrenotazione) {
      switch (where) {
        case 'partecipanti':
          this.lockedFormPartecipanti = !this.lockedFormPartecipanti;
          break;
          case 'durata':
          this.lockedFormDurata = !this.lockedFormDurata;
          break;
      
        default:
          break;
      }
    }
  }


  /**
   * Valido i dati per continuare
   * @returns 
   */
  onValidationConferma(): boolean {
    let flagValue = false;
    let message = '';
    let residuoStr = '';

    flagValue = true;


    if (this.prenotazioneDoc && this.pianificazioneDoc) {

      //C'e' un residuo da incassare
      if (this.pianificazioneDoc.paymentRequested()) {

        switch (this.modeIncasso) {
          case 'completo':
              this.pianificazioneDoc.INCASSOCUSTODE = this.pianificazioneDoc.RESIDUO;
            break;
          case 'parziale':

            if (!this.inputIncassoAttuale || this.inputIncassoAttuale == 0) {
              flagValue = false;

              residuoStr = SupportFunc.formatNumeric(this.pianificazioneDoc.RESIDUO);
              message = `<p>Indicare l'importo ricevuto dal cliente</p>`
            }
            else if (this.inputIncassoAttuale > this.pianificazioneDoc.RESIDUO){
              flagValue = false;
              residuoStr = SupportFunc.formatNumeric(this.pianificazioneDoc.RESIDUO);
              message = `<p>L\'importo da incassare deve essere al massimo <strong>${residuoStr}</strong> Eur.</p>`
            }
            else {
              this.pianificazioneDoc.INCASSOCUSTODE = this.inputIncassoAttuale;
            }

            break;
          case 'nessuno':
              this.pianificazioneDoc.INCASSOCUSTODE = 0;
            break;
        
          default:
            break;
        }
      }
    }
    else {
      flagValue = false;
      message = '<p>Si sono verificati errori</p>';
      message += '<p>Ricaricare la prenotazione per proseguire</p>'
    }

    if (!flagValue) {
      this.startService.presentAlertMessage(message);
    }

    return flagValue;
  }
  /**
   * Utente ha effettuato il click per confermare i dati
   */
  onClickConferma(){
    let flagValidation = false;
    let message = '';
    let valueStr = '';
    let arButtons: AlertButton[] = [];

    flagValidation = this.onValidationConferma();

    if (flagValidation) {

      if (this.pianificazioneDoc.paymentRequested()) {

        //Ho incassato
        if (this.pianificazioneDoc.INCASSOCUSTODE != 0) {
          valueStr = SupportFunc.formatNumeric(this.pianificazioneDoc.INCASSOCUSTODE);
          message = `<p>Confermi la prenotazione e dichiari di aver incassato</p>`;
          message += `<p class="ion-text-bold ion-text-large">${valueStr} €</p>`
          message += '<p>dal cliente</p>'
        }
        else {
          message = `<p>Confermi la prenotazione e dichiari di</p>`
          message += `<p class="ion-text-bold ion-text-large">NON AVER INCASSATO NULLA</p>`
          message += `<p>dal cliente</p>`
        }
      }
      else {
        message = 'Confermi che il cliente si &grave presentato ed ha usufruito della struttura ?'
      }

      //Preparo i Bottoni
      arButtons = [{
        text: 'CONFERMO',
        handler: ()=> {this.onSubmitData()}
      },
      {
        text: 'ANNULLA',
        role: 'cancel'
      }]

      //Faccio la domanda
      this.startService.presentAlertMessage(message, 'Conferma',arButtons);
    }
    
  }

  /**
   * Aggiornamento dei dati sul server
   */
  onSubmitData(){
    this.startService.showLoadingMessage('Salvataggio in corso...')
                     .then(elLoading => {

                        elLoading.present();

                        this.startService.onRequestCustodePianificazioneSave(this.pianificazioneDoc)
                                         .then(elPrenotazione => {

                                            elLoading.dismiss();

                                            //Qui è andato tutto bene
                                            let myMessage = 'Aggiornamento effettuato con successo';

                                            //Posso chiudere la videata e tornare indietro
                                            this.onGoToBack(myMessage);

                                         })
                                         .catch(error => {
                                            elLoading.dismiss();

                                            this.startService.presentAlertMessage(error, 'Errore occorso');
                                         })
                     })
  }
  

  /**
   * Modifica del numero di giocatori
   * @param nPlayer 
   */
  onChangedNumPlayer(nPlayer: number)
  {
    //Memorizzo il numero Partecipanti
    this.pianificazioneDoc.NUMPARTECIPANTI=nPlayer;

    //Devo richiedere il ricalcolo 
    this.onRequestRicalcoloTotalePianificazione();
  }

  /**
   * Modifica della durata
   * @param durata 
   */
  onChangeDurata(valueDurata: number) {

    if (valueDurata != this.pianificazioneDoc.DURATAORE) {

      //Memorizzo il numero Partecipanti
      this.pianificazioneDoc.DURATAORE = valueDurata;
 
      //Devo chiamare il server per eseguire un ricalcolo
     this.onRequestRicalcoloTotalePianificazione();

    }
    

  }

  /**
   * Effettua una chiamata al server per il ricalcolo
   */
  onRequestRicalcoloTotalePianificazione() {
    this.startService.showLoadingMessage('Attendere ricalcolo')
                     .then(elLoading => {
                        //Mostro il loading
                        elLoading.present();

                        this.startService.onRequestCustodePianificazioneChange(this.pianificazioneDoc)
                                         .then(elPrenotazione => {
                                            //Chiudo il loading
                                            elLoading.dismiss();

                                            this.prenotazioneDoc = elPrenotazione;

                                            //Imposto la pianificazione
                                            this.pianificazioneDoc = this.prenotazioneDoc.PRENOTAZIONEPIANIFICAZIONE.find(elPianificazione => {
                                              return elPianificazione.ID == this.idPianificazione
                                            });

                                            console.log(this.pianificazioneDoc);
                                            console.log(this.prenotazioneDoc);

                                            this.startService.presentToastMessage('Ricalcolo effettuato');
                                          
                                         })
                                         .catch(error => {
                                            //Chiudo il loading
                                            elLoading.dismiss();
                                            this.startService.presentAlertMessage(error);
                                         })
                     })
  }

  //#endregion
 




}
