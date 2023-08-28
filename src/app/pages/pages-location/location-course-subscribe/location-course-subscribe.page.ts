import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavController, NavParams, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { Area } from 'src/app/models/area.model';
import { AreaPaymentSetting } from 'src/app/models/areapaymentsetting.model';
import { Corso } from 'src/app/models/corso.model';
import { Location } from 'src/app/models/location.model';
import { PaymentProcess } from 'src/app/models/payment-process.model';
import { PageType, PaymentChannel, PaymentMode, SettorePagamentiAttivita, TipoRigoIncasso, ZOrderIncasso } from 'src/app/models/valuelist.model';
import { PaymentPage } from 'src/app/pages/payment/payment.page';
import { StartService } from 'src/app/services/start.service';
import { AreaLink } from 'src/app/models/arealink.model';
import { Settimana } from 'src/app/models/settimana.model';
import { Utente } from 'src/app/models/utente.model';
import { PostResponse } from 'src/app/library/models/postResult.model';
import { IscrizioneCorso } from 'src/app/models/iscrizionecorso.model';
import { IscrizioneIncasso } from 'src/app/models/iscrizioneincasso.model';
import { TipoPagamento } from 'src/app/models/tipopagamento.model';
import { IscrizioneTesseramento } from 'src/app/models/iscrizione-tesseramento';
import { LogApp } from 'src/app/models/log.model';


@Component({
  selector: 'app-location-course-subscribe',
  templateUrl: './location-course-subscribe.page.html',
  styleUrls: ['./location-course-subscribe.page.scss'],
})
export class LocationCourseSubscribePage implements OnInit, OnDestroy {

  corsoDoc: Corso = new Corso();  //Corso di riferimento
  listenerCorsoDoc: Subscription;

  iscrizioneDoc: IscrizioneCorso; //Iscrizione
  locationDoc: Location = new Location(); 

  userDoc: Utente;
  listenerUserDoc: Subscription;


  isDesktop: boolean;
  iconColor = 'primary';
  
  userLogged = false;
  listenerUserLogged: Subscription;

  //Gestione Abilitazione Iscrizioni
  listenSelectedArea:Subscription;
  selectedArea: Area;
  enableIscrizioni:boolean = false;

  //accettazione delle condizioni di vendita
  disclaimer: boolean = true;

  //Configurazioni di pagamento
  myListPayment: AreaPaymentSetting[];
  mySelectedPayment: AreaPaymentSetting;
  myPaymentMode: PaymentMode;

  subPaymentResult: Subscription;
  onlyDaysCorso: Settimana[] = []; //Contiene i soli giorni di corso
  paymentType: TipoPagamento; //Pagamento a scadenza immediata o rateale ???

  //Controllo Posti Disponibili
  flagPostiDisponibili = false;
  txtPostiDisponibili = '';

  constructor(private startService: StartService,
              private navParams: NavParams,
              private modalCtrl: ModalController,
              private docStructureService : DocstructureService,
              private navCtrl: NavController) {

              //Chiedo al server se c'e' qualche possibilità di pagamento rateale
              this.requestTypePaymentDefault();
              
              //Ascolto cambiamenti dell'Area per l'abilitazione delle iscrizioni
              this.onListenSelectedArea();

              //Ascolto cambiamento dell'utente
              this.onListenSelectedUser();



  }

/**
 * In ascolto dell'area selezionata, per capire se solo abilitate le iscrizioni
 */
 onListenSelectedArea() {
  this.listenSelectedArea = this.startService.areaSelected
   .subscribe(elArea => {

    //Imposto l'area di riferimento
     this.selectedArea = elArea;

    //Impostazione tipologie pagamento
    this.setListPayment();

     //Controllo se nell'area sono abilitate le iscrizioni
     if (this.selectedArea.APPISCRIZIONI == true) {
       this.enableIscrizioni = true;

     }
     else {
       this.enableIscrizioni = false;
     }
 }, error => {
   this.enableIscrizioni = false;
 })
}  

/**
 * Ascolto il cambiamento dell'utente
 */
onListenSelectedUser() {
  //Controllo se l'utente è loggato
  this.listenerUserLogged = this.startService.utenteLogged
                            .subscribe(element => {
                                    this.userLogged = element;
                            });

  //Sottoscrivo al documento Utente
  this.listenerUserDoc = this.startService.utente.subscribe(elUser => {
      this.userDoc = elUser;
      //Riconfiguro il documento di Iscrizione
      this.prepareDocIscrizione(this.corsoDoc, this.userDoc);
  })                            
}

/**
 * Porzione di inizializzazione
 */
ngOnInit() {

  //this.isDesktop = this.startService.isDesktop;
  //Sembra che l'istruzione sopra non funzioni correttamente
  this.isDesktop = false;

  //Recupero i parametri di chiamata
  this.corsoDoc = this.navParams.get('params');
  
  if (this.corsoDoc == null || this.corsoDoc == undefined){

      //Esco e avviso
      this.startService.presentToastMessage('Corso non recuperato');

      //Chiudo la modale
      this.closeModal();
  }
  else {
    //Recupero le giornate di corso
    this.onlyDaysCorso = this.corsoDoc.getArrayGiorniCorso();

    //Procedo con la preparazione dell'environment
    this.prepareEnvironment();

  }
            
} 

/**
 * Effettua la preparazione dei documenti e dell'ambiente operativo
 */
prepareEnvironment():void {
  let arPromise = [];

  //Step A - Richiedo i posti diponibili
  arPromise.push(this.requestPostiDisponibili(this.corsoDoc.ID));
  //Step B - Richiesta Location
  arPromise.push(this.requestLocationById(this.corsoDoc.IDLOCATION));
  //Step C - Preparazione del documento Iscrizione
  arPromise.push(this.prepareDocIscrizione(this.corsoDoc, this.userDoc));

  this.startService.showLoadingMessage('Recupero in corso')
                   .then(elLoading => {
                      elLoading.present();
                      Promise.all(arPromise)
                             .then(() => {
                                //Posso chiudere il loading
                                elLoading.dismiss();
                             })
                             .catch(error => {

                              //Errore o chiusura loading
                              elLoading.dismiss();
                              //Mostro un Toast
                              this.startService.presentToastMessage('Spiacenti, errori nel recupero del corso');
                              //Chiudo tutto
                              this.closeModal();                         
                            })                                   
                   })
}

/**
 * Contatta il server per sapere se ci sono posti per l'iscrizione
 * Valorizza due proprieta
 * posti Disponibili: Boolean
 * txtPostiDisponibili: Messaggio da visualizzare
 * 
 * @param idCorso idCorso richiesto
 */
requestPostiDisponibili(idCorso: string):Promise<void> {
  
  return new Promise<void>((resolve, reject) => {

    //Chiamo il server e chiedo    
    this.startService.getPostiDisponibiliCorso(idCorso)
        .then((elResponse:PostResponse) => {
          if (elResponse.result) {
            this.flagPostiDisponibili = true;
          }
          else {
            this.flagPostiDisponibili = false;
          }

          this.txtPostiDisponibili = elResponse.message;
          resolve();
        })
        .catch(error => {
          reject();
        })
  })
}


//Preparazione del documento di Iscrizione
prepareDocIscrizione(myCorso: Corso, myUtente:Utente):Promise<void> {

  return new Promise<void>((resolve, reject) => {
    
    let requestRecalc = false;

    //Documento non presente, faccio la richiesta
    if (!this.iscrizioneDoc) {
      this.iscrizioneDoc = new IscrizioneCorso();
      this.iscrizioneDoc.DATAISCRIZIONE = new Date();
    }

    //E' presente il Documento del Corso
    if (myCorso) {
      if (myCorso.ID != this.iscrizioneDoc.IDCORSO) {
        this.iscrizioneDoc.IDCORSO = myCorso.ID;
        requestRecalc = true;
      }
    }

    //E' presente il Documento del Utente    
    if (myUtente) {
      if (myUtente.ID != this.iscrizioneDoc.IDUTENTE) {
        this.iscrizioneDoc.IDUTENTE = myUtente.ID;
        requestRecalc = true;
      }
    }      
  
    //Devo procedere con la richiesta del totale
    if (requestRecalc) {
      //Preparo la chiamata al Server
      this.startService.requestCalcoloTotaleIscrizioneCorso(this.iscrizioneDoc)
                       .then(elIscrizione => {
                        this.iscrizioneDoc = elIscrizione;
                        resolve();
                       })
                       .catch(error => {
                        LogApp.consoleLog(error);
                        reject(error);
                       })
    }
    else {
      //Se non devo chiamare va bene cosi
      resolve();
    }

  })
}

/**
 * Richiedo la location
 * @param idLocation idLocation 
 */
requestLocationById(idLocation: string): Promise<void>{

  return new Promise<void>((resolve, reject) => {

    //preparo il filtro
    let filterLocation: Location = new Location(true);
    //Imposto la location
    filterLocation.ID = idLocation;

    //faccio la richiesta
    this.docStructureService.requestNew(filterLocation)
        .then(listLocations => {
      
          if (listLocations && listLocations.length !=0){
  
            //Imposto la location
            this.locationDoc = listLocations[0];
            resolve();

          }
          else{
            reject('Location not found');
          }
        }).catch(error => {

            reject('Connection error' + error);
      
        })
    
    })
}
  


ngOnDestroy() {
  if (this.listenerCorsoDoc) {
    this.listenerCorsoDoc.unsubscribe();
  }

  if (this.listenerUserLogged) {
    this.listenerUserLogged.unsubscribe();
  }

  if (this.listenSelectedArea) {
    this.listenSelectedArea.unsubscribe();
  }
}


/**
 * Richiede al Server il tipo di pagamento di default
 * Cosi da sapere se è possibile rateizzare il pagamento
 */
requestTypePaymentDefault() {
  let filterPayment: TipoPagamento;
  filterPayment = new TipoPagamento(true);

  //Intanto imposto il payment Type alla modalità Default
  this.paymentType = TipoPagamento.getDocStandardImmediato();

  filterPayment.PREDEFINITACORSI = true;
  //Chiamiamo il server
  this.docStructureService.requestNew(filterPayment)
                          .then(collTypePayament => {
                            //Prendo il primo valore
                            if (collTypePayament && collTypePayament.length != 0) {
                              this.paymentType = collTypePayament[0];
                            }
                            else {
                              //Classico a scadenza immediata
                              this.paymentType = TipoPagamento.getDocStandardImmediato();
                            }
                          })
}



/**
 * Chiama il servizio passandogli l'id dell'oggetto corso, 
 * e restituisce la stringa dell'icona
 * @param myCorso l'oggetto corso per cui si richiede l'icona
 */
  getIcon(myCorso:Corso)
  {
    return this.startService.getSportIcon(myCorso.IDSPORT);
  }

  /**
 * Recupera il link per le condizioni di vendita Corso e apre il browser
 */
  onClickCondizioniVendita(): void {
    let link: AreaLink;


    if (this.selectedArea) {

      link = this.selectedArea.findAreaLinkByPageType(PageType.condizioniVenditaIscrizioni);
  
      if (link && link.REFERURL) {

        //Apro il link
        this.startService.openLink(link.REFERURL);        

      }
    }

    
  }

  //#region AREA TESSERAMENTI
  get showGroupTesseramenti():boolean {

    let flagShow = false;
    if (this.iscrizioneDoc && 
        this.iscrizioneDoc.ISCRIZIONETESSERAMENTO && 
        this.iscrizioneDoc.ISCRIZIONETESSERAMENTO.length != 0) {
          flagShow = true;
        }
    return flagShow;
  }

  /**
   * Ritorna una collection di PrenotaTesseramento abbinata
   */
  get collTesseramenti(): IscrizioneTesseramento[] {
    let myColl: IscrizioneTesseramento[];

    if (this.iscrizioneDoc && this.iscrizioneDoc.ISCRIZIONETESSERAMENTO) {
      myColl = this.iscrizioneDoc.ISCRIZIONETESSERAMENTO;
    }


    return myColl;
  }  


  //#endregion


  /**
   * Click sul bottone di Header
   */
  onClickButtonHeader() {

    if (!this.flagPostiDisponibili) {
      //Se non ci sono posti, uso il pulsante per chiudere
      this.closeModal();
    }

  }


   //#region METODI GESTIONE PAGAMENTO
  /**
   * Recupera i metodi di pagamento sulla base dell'Area e popola 
   * l'array myListPayment e l'elemento mySelectedPayament
   */  
   setListPayment() {

    //Svuota l'array
    this.myListPayment = [];


    //Ho il documento dell'Area
    if (this.selectedArea) {
      
      this.myListPayment = this.selectedArea.getPaymentFor(SettorePagamentiAttivita.settorePagamentoCorso);

      if (this.myListPayment && this.myListPayment.length != 0) {

        this.mySelectedPayment = this.myListPayment[0];
        
      }
      else {

        this.mySelectedPayment = null;

      }

      
    }

  }   

  /**
   * Ricezione pagamento da utilizzare
   * @param value Valore Pagamento
   */
   onPaymentSelected(value) {
    this.mySelectedPayment = value;
  }
  
  /**
   * Cambiato il modo di pagamento
   * @param valPaymentMode Modo di pagamento
   */
   onPaymentModeSelected(valPaymentMode: PaymentMode) {
    this.myPaymentMode = valPaymentMode;
    
  }  


  /**
   * Pressione del pulsante in interfaccia di conferma 
   */
   onClickConfirmIscrizione()
   {
     //Vado al pagamento
      this.onExecPayment();
   }  

  /**
   * Richiesta di esecuzione del pagamento di qualsiasi tipologia
   * 1) Se onSite conclude subito dicendo che va bene
   * 2) Per altre tipologie viene aperta la pagina del pagamento
   *
   */
   onExecPayment() {

    let arModes:PaymentMode[]=[PaymentMode.pagaAdesso, PaymentMode.pagaBonifico, PaymentMode.pagaStruttura];

    //Presente un totale da pagare
    if (this.corsoDoc.isAPagamento()) {

      //L'utente ha selezionato come pagare
      if (arModes.includes(this.myPaymentMode)) {
  
        //Pagamento non dentro all'App
        if (this.myPaymentMode == PaymentMode.pagaBonifico || this.myPaymentMode == PaymentMode.pagaStruttura) {
  
          //Creo il risultato del pagamento, passando la modalità
          let docPaymentResult = new PaymentProcess(this.myPaymentMode);
          // Essendo una modalita che non prevede interazioni app
          // viene impostato automaticamento il channelPayment 
          // e il processResult = TRUE
          
          //Passo subito al Success
          this.onPaymentSuccess(docPaymentResult);
  
        }
        else {
          
          //Qui invece bisogna gestire il pagamento
  
          //Preparo un oggetto per processare il pagamento
          let myCheckoutPayment = new PaymentProcess(this.myPaymentMode);
          
          myCheckoutPayment.amount = this.iscrizioneDoc.TOTALE;
          myCheckoutPayment.description = 'Pagamento Iscrizione Corso ' + this.corsoDoc.DENOMINAZIONE;
          myCheckoutPayment.currency = 'EUR';
  
          //il channelPayment viene impostato nel componente
          //esterno che si preoccupa del pagamento
          //Passo alla modale in paymentData = myCheckoutPayment
          this.modalCtrl.create({
            component: PaymentPage,
            componentProps: {
              paymentData: myCheckoutPayment,
              listAreaPaymentSettings: this.myListPayment
            }
          })
          .then(elModal => {
            elModal.present();
  
            return elModal.onDidDismiss()
          })
          .then((returnData) => {
  
            //recupero il risultato del pagamento
            let myPaymentResult: PaymentProcess = returnData['data'];

            if (myPaymentResult) {

              //Il Risultato del processo di pagamento è TRUE, posso proseguire
              if (myPaymentResult.processResult) {
                
                //Pagamento avvenuto correttamente
                this.onPaymentSuccess(myPaymentResult); 
  
              }
              else {
  
                //Pagamento Fallito
                this.onPaymentFailed(myPaymentResult);
  
              }
            }
            else {
              
              //Stranamente non mi ha tornato nulla, quindi il pagamento è fallito
              myPaymentResult = new PaymentProcess(this.myPaymentMode);
              myPaymentResult.processResult = false;
              myPaymentResult.messageResult = 'Pagamento fallito';

              //Pagamento Fallito
              this.onPaymentFailed(myPaymentResult);

            }
          })
  
  
        }
  
      }
      else {
        //Pagamento non selezionato
        this.startService.presentAlertMessage('E\' necessario selezionare un pagamento');
      }
      
    }
    else {
      //E' un corso gratuito ?

      //Creo il risultato del pagamento, passando la modalità
      let docPaymentResult = new PaymentProcess(PaymentMode.pagaStruttura);
      // Essendo una modalita che non prevede interazioni app
      // viene impostato automaticamento il channelPayment 
      // e il processResult = TRUE
      
      //Passo subito al Success
      this.onPaymentSuccess(docPaymentResult);
    }


  } 
  
  /**
   * Pagamento andato a buon fine
   * @param resultPayment Risultato del pagamento
   */
   onPaymentSuccess(resultPayment?: PaymentProcess) {
    
    let myDocRata: IscrizioneIncasso;


    //Preparo i dati da includere come rata di incasso
    myDocRata = new IscrizioneIncasso();
    
    //Step del pagamento Effettuato (Potrebbe avere effettivamente pagato, oppure non pagato e rimandato in struttura)
    if (resultPayment && resultPayment.processResult)  {

      //Se non è avvenuta nessuna transazione Elettronica 
      //vuol dire che ha scelto di pagare successivamente
      if (resultPayment.idElectronicResult.length == 0) {

        //Se il corso è a pagamento, dovrà effettivamente pagare
        if (this.corsoDoc.isAPagamento()) {

          //E' a pagamento, in qualche modo dovrà pagare
          //Creo una scadenza
          myDocRata.IDTRANSACTION = '';
          myDocRata.IDORDER = '';
          myDocRata.MODALITA = resultPayment.channelPayment;
          myDocRata.TIPORIGO = TipoRigoIncasso.scadenza;
          myDocRata.ZORDER = ZOrderIncasso.daIncassare;
          //Data operazione non viene valorizzata ma solo DataScadenza
          myDocRata.DATASCADENZA = this.corsoDoc.DATAINIZIO;
          myDocRata.IMPORTO = this.iscrizioneDoc.TOTALE;

        }
        else {

          //E' un corso gratuito, non c'e' nulla da pagare
          myDocRata.IDTRANSACTION = '';
          myDocRata.IDORDER = '';
          myDocRata.MODALITA = PaymentChannel.onSite;
          myDocRata.TIPORIGO = TipoRigoIncasso.incassato;
          myDocRata.ZORDER = ZOrderIncasso.incassato;          
          myDocRata.DATAOPERAZIONE = this.iscrizioneDoc.DATAISCRIZIONE;
          //Non c'e' nessuna scadenza
          myDocRata.IMPORTO = 0;
        }
      }
      else {

        //Transazione avvenuta
        myDocRata.IDTRANSACTION = '';
        myDocRata.IDORDER = resultPayment.idElectronicResult;
        myDocRata.MODALITA = resultPayment.channelPayment;
        myDocRata.TIPORIGO = TipoRigoIncasso.incassato;
        myDocRata.ZORDER = ZOrderIncasso.incassato
        myDocRata.DATAOPERAZIONE = this.iscrizioneDoc.DATAISCRIZIONE;
        //Non c'e' nessuna scadenza      
        myDocRata.IMPORTO = this.iscrizioneDoc.TOTALE;

      }

      //Aggiungo le informaioni del pagamento
      this.iscrizioneDoc.ISCRIZIONEINCASSO.push(myDocRata);

      this.startService.showLoadingMessage('Richiesta Iscrizione','bubbles',false)
                        .then(elLoading => {

                          //Creo il loading
                          elLoading.present();

                          //Procedo con il salvataggio Iscrizione
                          this.startService.requestSaveIscrizioneCorso(this.iscrizioneDoc)
                                          .then((response: PostResponse) => {

                                            elLoading.dismiss();

                                            //Iscrizione salvata correttamente
                                            if (response.result && response.code && response.code.length != 0) {
                                              //Mi dirigo alla scheda dell'Iscrizione Corso e concludo la modale
                                              this.onAfterSaveIscrizione(response.code);
                                            }
                                            else {
                                              //Si sono verificati problemi
                                              this.startService.presentAlertMessage(response.message,'Iscrizione Fallita');
                                            }
                                          })
                                          .catch(error => {

                                            elLoading.dismiss();

                                            //Si sono verificati problemi
                                            this.startService.presentAlertMessage(error.message,'Iscrizione Fallita');
                                          })
                            
                        });


    }


    
    

  }

  /**
   * Iscrizione salvata nel sistema posso andare via
   */
   onAfterSaveIscrizione(idIscrizione: string)
   {
      //Avvisiamo utente
      this.startService.presentToastMessage('Iscrizione confermata');
     
     //Chiudo la modale
     this.closeModal();

     //Andare alla History sulla scheda
     this.navCtrl.navigateRoot(['historylist/course', idIscrizione]);
 
   }  

  /**
   * Si sono verificati errori nel pagamento
   * @param resultPayment Risultato Pagamento Fallito
   */
  onPaymentFailed(resultPayment?: PaymentProcess) {
    let message = 'Si sono verificati errori nel pagamento';
    let title = 'Pagamento Fallito';

    if (resultPayment) {
      if (resultPayment.messageResult) {
        message = resultPayment.messageResult;
      }
    }

    this.startService.presentAlertMessage(message, title);
    
  }  
   //#endregion


 

/**
* Chiusura della videata
*/  
closeModal(){
  this.modalCtrl.dismiss();
}

  /**
   * Mostra un alert per contattare la struttura
   */
  onClickContattaStruttura() {
    let myButton = [];
    let myMessage = ''

    myMessage = 'Per l\'iscrizione è necessario contattare la struttura telefonicamente';
    myButton = [
      {
        text: 'OK',
        role: 'cancel'
      }
    ];

    //Se ho il telefono, glielo scrivo
     if (this.locationDoc.TELEFONO && 
         this.locationDoc.TELEFONO.length != 0) {

      myMessage = myMessage + ' al ' + `<strong>${this.locationDoc.TELEFONO}</strong>`;

      if (!this.startService.isDesktop) {

        myButton = [
          {
            text: 'OK',
            role: 'cancel'
          },
          {
            text: 'Chiama',
            handler: () => {
              const number = this.locationDoc.TELEFONO;
              const link: HTMLAnchorElement = document.createElement('a');
              link.setAttribute('href', `tel:${number}`);
              link.click();
  
            }
          }
        ];

      }
      
    }

    //Mostro il messaggio
    this.startService.presentAlertMessage(myMessage, 'Contatti', myButton);

  }

}
