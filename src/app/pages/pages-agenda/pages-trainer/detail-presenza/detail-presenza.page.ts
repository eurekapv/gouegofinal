import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertButton, LoadingController, NavController, ToastController } from '@ionic/angular';
import { MyDateTime, TypePeriod } from 'src/app/library/models/mydatetime.model';
import { Corso } from 'src/app/models/corso/corso.model';
import { CorsoPresenze } from 'src/app/models/corso/corsopresenze.model';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { PianificazioneCorso } from 'src/app/models/corso/pianificazionecorso.model';
import { StatoIscrizione, TipoSocieta } from 'src/app/models/zsupport/valuelist.model';
import { StartService } from 'src/app/services/start.service';
import { UtenteTotaleMinuti } from 'src/app/models/utente/utente-totale-minuti.model';
import { PostResponse } from 'src/app/library/models/post-response.model';


@Component({
  selector: 'app-detail-presenza',
  templateUrl: './detail-presenza.page.html',
  styleUrls: ['./detail-presenza.page.scss'],
})
export class DetailPresenzaPage implements OnInit {

  listPresenze : CorsoPresenze[] = [];
  listPresenzeConfermate: CorsoPresenze[] = [];
  listPresenzeInProva: CorsoPresenze[] = [];
  listPacchettiMinuti: UtenteTotaleMinuti[] = [];

  pianificazioneDoc: PianificazioneCorso = new PianificazioneCorso();
  corsoDoc: Corso;
  canUpdate = false; //Posso aggiornare i dati

  //Segmento visualizzato
  selectedView: number = 1;

  gapAggiornamentoPresenze: number;

  idPianificazione: string;

  //il tipo di società sportiva
  tipoSocieta: TipoSocieta;

  TipoSocieta: typeof TipoSocieta = TipoSocieta;

  isDesktop: boolean;

  showTabs = true;



  //Segnala un errore di caricamento dei dati
  loadingError = false;
  messageError: string = '';
  loadingComplete = false; //Caricamento dati concluso
  colorPresente = 'success';
  colorAssente = 'danger';
   
  //TODO: Sembra tutto effettuato, bisogna solo testare di scaricare le presenze quando utente ha pacchetto minuti

  constructor(
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private startService: StartService,
    private toastController: ToastController,
    private loadingController: LoadingController,
    
  ) 
    {
      //recupero il tipo di società
      this.tipoSocieta = this.startService.actualStartConfig.gruppo.TIPOGRUPPO;

      //capisco se sono su desktop
      this.isDesktop = startService.isDesktop;

      this.gapAggiornamentoPresenze = startService.areaSelected.APPGAPOREPRESENZE;
      
    }

    

  ngOnInit() {

    //Recupero idCorso
    this.activatedRoute.paramMap.subscribe(data => {

      //recupero id della pianificazione
      this.idPianificazione = data.get('pianificazioneCorsoId');
      
      //Effettuo il recupero dei documenti interessati
      this.requestDocs()
      .then(() => {
            this.loadingComplete = true;
            this.loadingError = false;
            //Tutto è pronto
            this.startService.presentToastMessage('Scheda presenze caricata');
      })
      .catch(error => {
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

 

  /**
   * Effettuo la richiesta dei documenti necessari
   */
  requestDocs():Promise<void> {

    return new Promise<void>((resolve, reject) => {
      if (this.idPianificazione && this.idPianificazione.length != 0)   {

        //Recupero del documento di pianificazione
        this.startService.requestPianificazioneCorso(this.idPianificazione)       
                         .then(dataPianificataDoc => {
                            //Questo è il documento di Pianificazione
                            this.pianificazioneDoc = dataPianificataDoc;
                            //Controllo se posso modificare i dati
                            this.canUpdate = dataPianificataDoc.canUpdatePresenze(this.gapAggiornamentoPresenze);
                            //Chiedo anche la collection delle presenze
                            return this.startService.requestPresenzeFor(this.pianificazioneDoc);
                         })
                         .then(dataPianificataDoc => {

                              //Imposto gli array per le presenze
                              this.setAndSplitListPresenze(dataPianificataDoc.CORSOPRESENZE);

                              //Qui ho anche le presenze del corso
                              //Adesso chiedo le info del corso
                              return this.startService.requestCorsoById(dataPianificataDoc.IDCORSO)
                          })
                         .then(myCorso => {
                            //Ho recuperato il corso e lo memorizzo
                            this.corsoDoc = myCorso;
                            console.log(`Area = ${this.corsoDoc.IDAREAOPERATIVA}`);
                            //Ritorno la pianificazione perchè mi serve lei
                            return this.requestUtenteTotaleMinuti(this.listPresenze, this.corsoDoc.IDAREAOPERATIVA);
                        })
                        .then(() => {
                          //Conclusa la catena
                          resolve();
                        })
                         .catch(error => {
                          reject(error);
                         })
      }
      else {
        reject('Data pianificazione non presente');
      }
    })
  }

  /**
   * Imposta e splitta le liste delle presenze
   * @param listFullPresenze 
   */
  setAndSplitListPresenze(listFullPresenze: CorsoPresenze[]) {
    if (listFullPresenze) {
      this.listPresenze = listFullPresenze;

      //Prepara una lista delle presenze confermate
      this.listPresenzeConfermate = listFullPresenze.filter(element => {
        return element.STATOISCRIZIONE == StatoIscrizione.confermata;
      });

      //Prepara una lista delle presenze in prova
      this.listPresenzeInProva = listFullPresenze.filter(element => {
        return element.STATOISCRIZIONE == StatoIscrizione.inProva;
      });      
    }
    else {
      this.listPresenze = [];
      this.listPresenzeConfermate = [];
      this.listPresenzeInProva = [];
    }
  }


  /**
   * Richiede al server tutti i pacchetti minuti
   * @param listFullPresenze 
   * @param idArea
   */
  requestUtenteTotaleMinuti(listFullPresenze: CorsoPresenze[], 
                            idArea: string): Promise<void> {
    let listUT: UtenteTotaleMinuti[] = [];

    return new Promise<void>((resolve, reject) => {

      //Creo un array con la lista degli utenti 
      listUT = listFullPresenze.map(item => {
        let utmDoc = new UtenteTotaleMinuti();
        utmDoc.init();
        utmDoc.IDUTENTE = item.IDUTENTE;
        utmDoc.IDAREAOPERATIVA = idArea;
        utmDoc.setOriginal();
        return utmDoc;
      });

      //Se ci sono utenti da richiedere i dati
      if (listUT && listUT.length != 0) {

        LogApp.consoleLog('Richiesta pacchetti minuti');
        //Effettuo la richiesta
        this.startService.requestListUtentiTotaliMinuti(listUT)
                         .then(receivedPacchetti => {
                            //Memorizzo i pacchetti
                            this.listPacchettiMinuti = receivedPacchetti;
                            console.log(this.listPacchettiMinuti);
                            resolve();
                         })
                         .catch(error => {
                            reject(error);
                         })

      }
      else {
        this.listPacchettiMinuti = [];
        resolve();
      }

    })
  }

  /**
   * Visualizzare le note dalla segreteria
   */
  get showNoteFromBackoffice(): boolean {
    let flagValue = false;
    if (this.pianificazioneDoc && this.pianificazioneDoc.NOTEADMIN) {
      if (this.pianificazioneDoc.NOTEADMIN.length != 0) {
        flagValue = true;
      }

      return flagValue;
    }
  }


  /**
   * Contiene note del trainer
   */
  get containNoteTrainer(): boolean {
    let flagValue = false;
    if (this.pianificazioneDoc && this.pianificazioneDoc.NOTETRAINER) {
      if (this.pianificazioneDoc.NOTETRAINER.length != 0) {
        flagValue = true;
      }
      
      return flagValue;
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
    onGoToBack() {
      
      this.navController.navigateBack(this.backPathArray);
    }

  /**
   * Bottone in interfaccia per uscire
   */
  onClickGoBack(){

    if (this.pianificazioneDoc && this.pianificazioneDoc.isModified(2)) {

      this.startService.presentAlertMessage('Se esci senza confermare, le presenze non verranno salvate',
                                            'Vuoi abbandonare ?',
                                            [
                                              {
                                                text: 'Esci',
                                                handler: () => {this.onGoToBack()}
                                              },
                                              {
                                                text: 'Rimani',
                                                role: 'cancel'
                                              }
                                            ]);
    }
    else{
      this.onGoToBack();
    }
  }   
  
  //#endregion

  /**
   * Click su un partecipante
   * @param elem 
   */
  onClickElement(elem: CorsoPresenze) {

    let message = '';

    if (this.canUpdate) {

      if (elem.PRESENTE == null || elem.PRESENTE == undefined){
        elem.PRESENTE = true;
      }
      else {
        elem.PRESENTE = !elem.PRESENTE;
      }

      if (elem.PRESENTE) {
        message = elem.NOMINATIVO + ' Presente';
      }
      else {
        message = elem.NOMINATIVO +  ' Assente';
      }

      this.startService.presentToastMessage(message);
    }
  }

  /**
   * Click sul pulsante di invio dati
   */
  onClickSubmit() {
    let myButtons: AlertButton[] = [
      {
        text: 'Invia Tutto',
        handler: () => {
            this.onExecSubmit();
        }
      },
      {
        text: 'Annulla',
        role: 'cancel'
      }
    ];

    let message = '<p>' + `Stai inviando i dati aggiornati della lezione alla segreteri` + '</p>';
    message += '<p>' + `Vuoi continuare ?` + '</p>';

    //Ora posso chiedere
    this.startService.presentAlertMessage(message, 'Invio Dati', myButtons);  
  }
  /**
   * Conferma dei dati presenti
   */
  onExecSubmit() {


    //Il documento è modificato ?
    if(this.pianificazioneDoc.isModified(2)) {
      
      this.loadingController.create({
        message: 'Aggiornamento dati',
        spinner: 'circular',
        backdropDismiss: true
      })
      .then(elLoading => {
  
        elLoading.present();
        this.startService.requestUpdateAllPresenze(this.pianificazioneDoc)
        .then(response => {
  
          elLoading.dismiss();

          //In entrambi i casi chiedo di recuperare nuovamente i pacchetti minuti
          this.requestUtenteTotaleMinuti(this.listPresenze, this.corsoDoc.IDAREAOPERATIVA);

          if (response.result) {
            let message: string = '';
            message = '<p>' + "Tutti i dati sono stati" + '</p>';
            message = message + '<p class="ion-text-bold">' + "Aggiornati correttamente" + '</p>';
            //è andato tutto bene
            this.startService.presentAlertMessage(message, 'Aggiornamento lezione');
            //Torno indietro
            this.onGoToBack();
          }
          else {
            let message: string = '';
            message = '<p>' + "Spiacente, non tutti i dati sono stati" + '</p>';
            message = message + '<p class="ion-text-bold">' + "aggiornati correttamente" + '</p>';
            message = message + '<p>' + response.message + '</p>';
            //è andato tutto bene
            this.startService.presentAlertMessage(message, 'Aggiornamento lezione');
            //errore dal server
            LogApp.consoleLog(response);

            //I dati ricevuti li rielaboro per visualizzarli
            this.onFailedSubmit(response);
          }

          
          
        })
        .catch((error) => {
  
          elLoading.dismiss();
          LogApp.consoleLog(error,'error');
          this.startService.presentToastMessage('Errore di connessione');
        })
      })
      
    }
    else {
      this.startService.presentToastMessage('Dati aggiornati');
      //Vado indietro senza segnalare nulla
      this.onGoToBack();

    }

  }

  /**
   * Ho un documento con degli errori ricevuti dal server
   * @param response 
   */
  onFailedSubmit(response: PostResponse): void {
    let serverDoc: PianificazioneCorso;

    console.log('Qui');
    //Ho ricevuto un documento di risposta
    if (response && this.pianificazioneDoc) {
      //In ListDocument trovo il documento Pianificazione che ho inviato
      //Quindi attenzione che è un documento con poche proprietà
      if (response.listDocuments && response.listDocuments.length != 0) {
        //I documenti in lisDocument sono tipizzati
        serverDoc = response.listDocuments[0];
        
        //Ora sistemo i dati nel documento pianificazioneDoc.CORSOPRESENZE
        //Sistemando i flag e i messaggi errori
        serverDoc.CORSOPRESENZE.forEach(receivedPresenza => {

          //Cerco la presenza nel documento in memoria
          let presenzaDoc = this.pianificazioneDoc.CORSOPRESENZE.find(elItem => {
            return elItem.ID == receivedPresenza.ID
          });

          if (presenzaDoc) {
            presenzaDoc.FLAGUPDATEMOB = receivedPresenza.FLAGUPDATEMOB;
            presenzaDoc.MSGUPDATEMOB = receivedPresenza.MSGUPDATEMOB;

            if (presenzaDoc.FLAGUPDATEMOB == true) {
              presenzaDoc.setOriginal();
            }
          }

        });

        //Splitto come sempre le presenze
        this.setAndSplitListPresenze(this.pianificazioneDoc.CORSOPRESENZE);

        
      }
    }
  }

  /**
   * Richiesto un refresh dei dati 
   */
  onClickRefreshData() {
    let myButtons: AlertButton[] = [
      {
        text: 'Ricarica',
        handler: () => {
            this.onRefreshData();
        }
      },
      {
        text: 'Annulla',
        role: 'cancel'
      }
    ];

    let message = '<p>' + `Stai ricaricando la scheda presenze del corso` + '</p>';
    message += '<p>' + `Tutti i dai non salvati andranno persi` + '</p>';
    message += '<p>' + `Vuoi continuare ?` + '</p>';

    //Ora posso chiedere
    this.startService.presentAlertMessage(message, 'Ricarica Dati', myButtons);    
  }

  /**
   * Esegue il refresh dei dati
   */
  onRefreshData() {

      this.loadingComplete = false;
      //Effettuo il recupero dei documenti interessati
      this.requestDocs()
      .then(() => {
            this.loadingComplete = true;
            this.loadingError = false;
            //Tutto è pronto
            this.startService.presentToastMessage('Scheda presenze caricata');
      })
      .catch(error => {
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
  }

 onScroll(event:any){
    if(event.detail.currentY < 5){
      this.showTabs = true;
    }
    else{
      if (event['detail']['deltaY'] > 20){
        this.showTabs = false;
      }
      else if (event['detail']['deltaY'] < -20){
        this.showTabs = true;
      }
    }  
  }

  /**
   * Chiede all'utente come vuole impostare le presenze assenza
   */
  onAskForSetPresenze(): void {

    let myButtons: AlertButton[] = [
      {
        text: 'Presenti',
        handler: () => {
          this.setAllPresenze(true);
        }
      },
      {
        text: 'Assenti',
        handler: () => {
          this.setAllPresenze(false);
        }
      },
      {
        text: 'Annulla',
        role: 'cancel'
      }
    ];

    let message = '<p>' + `Desideri impostare tutti i ` + '</p>';
    message += '<p>' + `partecipanti come` + '</p>';

    //Ora posso chiedere
    this.startService.presentAlertMessage(message, 'Presenti/Assenti', myButtons);
  }

  /**
   * Imposta per tutti i partecipanti la stessa
   * voce presente/assente
   * @param flagPresente 
   */
  setAllPresenze(flagPresente: boolean){
    if (this.listPresenze) {

      this.listPresenze.forEach(elem => {
        elem.PRESENTE = flagPresente;
      });

    }
  }

  /**
   * Cerca il numero di minuti che contiene il pacchetto del cliente
   * @param idUtente 
   */
  findMinutiPacchettiFor(idUtente: string): number {
    let totMinuti:number = 0;

    if (this.listPacchettiMinuti) {
      let recUser: UtenteTotaleMinuti;
      recUser = this.listPacchettiMinuti.find(elItem => {
        return elItem.IDUTENTE == idUtente
      });

      if (recUser) {
        totMinuti = recUser.TOTALEMINUTI;
      }
    }

    return totMinuti;
  }





}
