import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { MyDateTime, TypePeriod } from 'src/app/library/models/mydatetime.model';
import { Corso } from 'src/app/models/corso.model';
import { CorsoPresenze } from 'src/app/models/corsopresenze.model';
import { LogApp } from 'src/app/models/log.model';
import { PianificazioneCorso } from 'src/app/models/pianificazionecorso.model';
import { StatoIscrizione, TipoSocieta } from 'src/app/models/valuelist.model';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-detail-presenza',
  templateUrl: './detail-presenza.page.html',
  styleUrls: ['./detail-presenza.page.scss'],
})
export class DetailPresenzaPage implements OnInit {

  listPresenze : CorsoPresenze[] = [];
  listPresenzeConfermate: CorsoPresenze[] = [];
  listPresenzeInProva: CorsoPresenze[] = [];

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

  selectedSegment= null;

  //Segnala un errore di caricamento dei dati
  loadingError = false;
  messageError: string = '';
  loadingComplete = false; //Caricamento dati concluso
  

   

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

      this.gapAggiornamentoPresenze = startService.areaSelectedValue.APPGAPOREPRESENZE;
      
    }

    

  ngOnInit() {

    //Recupero idCorso
    this.activatedRoute.paramMap.subscribe(data => {

      //recupero id della pianificazione
      this.idPianificazione = data.get('pianificazioneCorsoId');
      
      //Effettuo il recupero dei documenti interessati
      this.requestDocs().then(() => {
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
                         .then(singleDoc => {
                            //Questo è il documento di Pianificazione
                            this.pianificazioneDoc = singleDoc;
                            //Controllo se posso modificare i dati
                            this.canUpdate = singleDoc.canUpdatePresenze(this.gapAggiornamentoPresenze);
                            
                            return singleDoc;
                         })
                         .then(singleDoc => this.startService.insertPresenzeIntoPianificazione(singleDoc))
                         .then(singleDoc => {
                            //ora ho il documento pianificazione con anche le presenze, posso metterle anche in "listpresenze"
                            this.listPresenze  = singleDoc.CORSOPRESENZE;
                            return this.listPresenze;
                         })
                         .then(listFullPresenze => {

                            //Prepara una lista delle presenze confermate
                            this.listPresenzeConfermate = listFullPresenze.filter(element => {
                              return element.STATOISCRIZIONE == StatoIscrizione.confermata;
                            });

                            return listFullPresenze;
                         })
                         .then(listFullPresenze => {
                          //Prepara una lista delle presenze in prova
                          this.listPresenzeInProva = listFullPresenze.filter(element => {
                            return element.STATOISCRIZIONE == StatoIscrizione.inProva;
                          });
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
      console.log('NoteTrainer ' + flagValue);
      return flagValue;
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

  /**
   * Click su un partecipante
   * @param elem 
   */
  onClickElement(elem: CorsoPresenze){
    if (elem.PRESENTE == null || elem.PRESENTE == undefined){
      elem.PRESENTE = true;
    }
    else{
      elem.PRESENTE = !elem.PRESENTE;
    }

    if (this.tuttiPresenti){
      this.selectedSegment = 'presente';
    }
    else if (this.tuttiAssenti){
      this.selectedSegment = 'assente';
    }
    else{

      this.selectedSegment = null;
    }

  }

  /**
   * Conferma dei dati presenti
   */
  onSubmit(){

    if(this.pianificazioneDoc.isModified(2)){
      
      this.loadingController.create({
        message: 'Caricamento',
        spinner: 'circular',
        backdropDismiss: true
      })
      .then(elLoading => {
  
        elLoading.present();
        this.startService.requestUpdatePresenze(this.pianificazioneDoc)
        .then(response => {
  
          elLoading.dismiss();
          if (response.result){
            //è andato tutto bene
            this.startService.presentToastMessage('Presenze aggiornate');
            //Torno indietro
            this.onGoToBack();
          }
          else{
            //errore dal server
            LogApp.consoleLog(response);
            this.startService.presentAlertMessage(response.message);
          }
          
        })
        .catch((error) => {
  
          elLoading.dismiss();
          LogApp.consoleLog(error,'error');
          this.startService.presentToastMessage('Errore di connessione');
        })
      })
      
    }
    
    else{
      this.onGoToBack();

    }

  }

  /**
   * Ritorna il colore da assegnare al certificato
   * @param presenza 
   * @returns 
   */
    getColoreCertificato(presenza: CorsoPresenze): string{
    let adesso: Date;
    let fra7Giorni: Date;
    let color: string;

    adesso = new Date();
    fra7Giorni = MyDateTime.calcola(adesso, 7 , TypePeriod.days);

    /*E' presente una data Certificato Medico */
    if (presenza.DATACERTIFICATOMEDICO) {
      
      if (MyDateTime.isBefore(presenza.DATACERTIFICATOMEDICO, adesso)) {
        //Colore Danger per certificato scaduto
        color = 'danger';
      }
      else if (MyDateTime.isBefore(presenza.DATACERTIFICATOMEDICO, fra7Giorni)) {
        //Scade tra 7 giorni
        color = 'warning';
      }
      else {
        color = 'primary';
      }

    }
    else{
      color = 'danger';
    }
    return color;
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
   * Imposta per tutti i partecipanti la stessa
   * voce presente/assente
   * @param flagPresente 
   */
  setAllPresenze(flagPresente: boolean){
    //TODO: Sarebbe meglio chiedere
    if (this.listPresenze) {

      this.listPresenze.forEach(elem => {
        elem.PRESENTE = flagPresente;
      });

    }
  }


  get tuttiPresenti(): boolean{
    let tuttiPresenti: boolean = true;
    this.listPresenze.forEach(elem => {
      if (!elem.PRESENTE){
        tuttiPresenti = false;
      }
    })
    return tuttiPresenti;
  }


  get tuttiAssenti(): boolean{
    let tuttiAssenti: boolean = true;
    this.listPresenze.forEach(elem => {
      if (elem.PRESENTE){
        tuttiAssenti = false;
      }
    })
    return tuttiAssenti;
  }


}
