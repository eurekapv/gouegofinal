import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, ModalController, NavController, NavParams, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { Area } from 'src/app/models/area.model';
import { AreaPaymentSetting } from 'src/app/models/areapaymentsetting.model';
import { Corso } from 'src/app/models/corso.model';
import { Location } from 'src/app/models/location.model';
import { PaymentProcess } from 'src/app/models/payment-process.model';
import { PageType, PaymentMode, SettorePagamentiAttivita, TipoRigoIncasso } from 'src/app/models/valuelist.model';
import { PaymentPage } from 'src/app/pages/payment/payment.page';
import { StartService } from 'src/app/services/start.service';
import { Plugins } from '@capacitor/core';
import { AreaLink } from 'src/app/models/arealink.model';
import { Settimana } from 'src/app/models/settimana.model';
import { UtenteIscrizione } from 'src/app/models/utenteiscrizione.model';
import { Utente } from 'src/app/models/utente.model';
import { PostResponse } from 'src/app/library/models/postResult.model';
import { IscrizioneCorso } from 'src/app/models/iscrizionecorso.model';
import { IscrizioneIncasso } from 'src/app/models/iscrizioneincasso.model';
const { Browser } = Plugins;

@Component({
  selector: 'app-bookcourse',
  templateUrl: './bookcourse.page.html',
  styleUrls: ['./bookcourse.page.scss'],
})
export class BookcoursePage implements OnInit, OnDestroy {

  myCorso: Corso = new Corso();
  subMyCorso: Subscription;

  myLocation: Location = new Location(); 

  isDesktop: boolean;
  iconColor = 'primary';
  
  userLogged = false;
  subUserLogged: Subscription;
  docUser: Utente;
  subUser: Subscription;

  //Gestione Abilitazione Iscrizioni
  listenSelectedArea:Subscription;
  selectedArea: Area;
  enableIscrizioni:boolean = false;

  //accettazione delle condizioni di vendita
  disclaimer: boolean =false;

  //Configurazioni di pagamento
  myListPayment: AreaPaymentSetting[];
  mySelectedPayment: AreaPaymentSetting;
  myPaymentMode: PaymentMode;

  subPaymentResult: Subscription;
  onlyDaysCorso: Settimana[] = []; //Contiene i soli giorni di corso


  //Controllo Posti Disponibili
  flagPostiDisponibili = false;
  txtPostiDisponibili = '';

  constructor(private startService: StartService,
              private navParams: NavParams,
              private modalCtrl: ModalController,
              private docStructureService : DocstructureService,
              private loadingController : LoadingController,
              private toastCtrl : ToastController,
              private alertCtrl: AlertController,
              private navCtrl: NavController) {

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
  this.subUserLogged = this.startService.utenteLogged
                            .subscribe(element => {
                                    this.userLogged = element;
                            });

  //Sottoscrivo al documento Utente
  this.subUser = this.startService.utente.subscribe(elUser => {
      this.docUser = elUser;
  })                            
}

ngOnInit() {

  //this.isDesktop = this.startService.isDesktop;
  //Sembra che l'istruzione sopra non funzioni correttamente
  this.isDesktop = false;

  //Recupero i parametri di chiamata
  this.myCorso = this.navParams.get('params');
  
  if (this.myCorso==null||this.myCorso==undefined){

      //se non ho i parametri, esco
      this.showToastMessage("Corso non trovato");

      //Chiudo la modale
      this.closeModal();
  }
  else {
    //Recupero le giornate di corso
    this.onlyDaysCorso = this.myCorso.getArrayGiorniCorso();

    //Richiedo i Posti Disponibili per l'iscrizione
    this.requestPostiDisponibili(this.myCorso.ID);

    //Richiedo la Location

    //Imposto il loading
    this.loadingController.create({
      spinner: "circular",
      message: 'Caricamento',
      backdropDismiss: true
    })
    .then(elLoading => {

      //Mostro il loading
      elLoading.present();

      //ora richiedo la location
      this.requestLocationById(this.myCorso.IDLOCATION)
          .then(() => {
            //Posso rimanere nella pagina
            elLoading.dismiss();
          })
          .catch(error => {

            elLoading.dismiss();

            this.showToastMessage('Spiacenti, errori nel recupero del corso');

            this.closeModal();                         
          })      

    })
  }
            
} 

/**
 * Contatta il server per sapere se ci sono posti per l'iscrizione
 * Valorizza due proprieta
 * posti Disponibili: Boolean
 * txtPostiDisponibili: Messaggio da visualizzare
 * 
 * @param idCorso idCorso richiesto
 */
requestPostiDisponibili(idCorso: string) {
  console.log('Chiedo al server');

  this.startService.getPostiDisponibiliCorso(idCorso)
      .then((elResponse:PostResponse) => {
        if (elResponse.result) {
          this.flagPostiDisponibili = true;
        }
        else {
          this.flagPostiDisponibili = false;
        }

        this.txtPostiDisponibili = elResponse.message;

      })
}

ngOnDestroy() {
  if (this.subMyCorso) {
    this.subMyCorso.unsubscribe();
  }

  if (this.subUserLogged) {
    this.subUserLogged.unsubscribe();
  }

  if (this.listenSelectedArea) {
    this.listenSelectedArea.unsubscribe();
  }
}



/**
 * Richiedo la location
 * @param idLocation idLocation 
 */
requestLocationById(idLocation: string): Promise<void>{

  //preparo il filtro
  let filterLocation: Location = new Location(true);
  
  return new Promise<void>((resolve, reject) => {
    filterLocation.ID = idLocation;

    //faccio la richiesta
    this.docStructureService.requestNew(filterLocation)
        .then(elLocation => {
      
          if (elLocation && elLocation.length !=0){
  
            //Imposto la location
            this.myLocation = elLocation[0];
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

  /**
   * Chiama il servizio passandogli l'id dell'oggetto corso, 
   * e restituisce la stringa dell'icona
   * @param corso l'oggetto corso per cui si richiede l'icona
   */
   getIcon(corso:Corso)
   {
     return this.startService.getSportIcon(corso.IDSPORT);
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
        this.openLink(link.REFERURL);

      }
    }

    
  }


  /**
   * Click sul bottone di Header
   */
  onClickButtonHeader() {
    if (!this.flagPostiDisponibili) {
      //Se non ci sono posti, uso il pulsante per chiudere
      this.closeModal();
    }
  }


  /**
   * Ritorna TRUE se il pulsante 
   * Conferma Iscrizione è utilizzabile
   */
  enableButtonIscrizione(): boolean {
    let flagEnable: boolean;
    if (this.disclaimer && this.flagPostiDisponibili) {
      if (this.mySelectedPayment) {
        flagEnable = true;
      }
    }


    return flagEnable;
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

      console.log(this.myListPayment);
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
   onConfirm()
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
    if (this.myCorso.PREZZOLORDO != 0) {

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
          
          myCheckoutPayment.amount = this.myCorso.PREZZOLORDO;
          myCheckoutPayment.description = 'Pagamento Iscrizione Corso ' + this.myCorso.DENOMINAZIONE;
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
        this.showToastMessage('E\' necessario selezionare un pagamento');
      }
      
    }


  } 
  
  /**
   * Pagamento andato a buon fine
   * @param resultPayment Risultato del pagamento
   */
   onPaymentSuccess(resultPayment?: PaymentProcess) {
    

    let myDocIscrizione: IscrizioneCorso;
    let myDocRata: IscrizioneIncasso;

    //Preparo i dati dell'iscrizione
    myDocIscrizione = this.prepareDocIscrizione();

    //Preparo i dati della Rata di Pagamento
    myDocRata = new IscrizioneIncasso();
    
    //Pagamento corretto
    if (resultPayment && resultPayment.processResult)  {

      //Nessuna transazione sembra avvenuta
      if (resultPayment.idElectronicResult.length == 0) {
        myDocRata.IDTRANSACTION = '';
        myDocRata.IDORDER = '';
        myDocRata.MODALITA = resultPayment.channelPayment;
        myDocRata.TIPORIGO = TipoRigoIncasso.scadenza;
        myDocRata.DATAOPERAZIONE = myDocIscrizione.DATAISCRIZIONE;
        myDocRata.DATASCADENZA = this.myCorso.DATAINIZIO;
        myDocRata.IMPORTO = this.myCorso.PREZZOLORDO;
      }
      else {

        //Transazione avvenuta
        myDocRata.IDTRANSACTION = '';
        myDocRata.IDORDER = resultPayment.idElectronicResult;
        myDocRata.MODALITA = resultPayment.channelPayment;
        myDocRata.TIPORIGO = TipoRigoIncasso.incassato;
        myDocRata.DATAOPERAZIONE = myDocIscrizione.DATAISCRIZIONE;
        myDocRata.DATASCADENZA = myDocIscrizione.DATAISCRIZIONE;        
        myDocRata.IMPORTO = this.myCorso.PREZZOLORDO;

      }

      //Aggiungo le informaioni del pagamento
      myDocIscrizione.ISCRIZIONIINCASSI.push(myDocRata);


      //Contatto il server per salvare il tutto
      this.loadingController.create({
            message: 'Richiesta Iscrizione',
            spinner: 'circular'
          })
          .then(elLoading => {

            //Creo il loading
            elLoading.present();

            //Procedo con il salvataggio Iscrizione
            this.startService.requestSaveIscrizione(myDocIscrizione)
                            .then((response: PostResponse) => {

                              elLoading.dismiss();

                              //Iscrizione salvata correttamente
                              if (response.result && response.code && response.code.length != 0) {
                                //Mi dirigo alla scheda dell'Iscrizione Corso e concludo la modale
                                this.onAfterSaveIscrizione(response.code);
                              }
                              else {
                                //Si sono verificati problemi
                                this.showAlert(response.message,'Iscrizione Fallita');
                              }
                            })
                            .catch(error => {
                              elLoading.dismiss();

                              //Si sono verificati problemi
                              this.showAlert(error.message,'Iscrizione Fallita');
                            })
               
          });


    }


    
    

  }

  /**
   * Iscrizione salvata nel sistema posso andare via
   */
   onAfterSaveIscrizione(idIscrizione: string)
   {
     this.showToastMessage('Iscrizione confermata');

     //1) Chiudere la modale
     this.closeModal();

     //2) Andare alla History sulla scheda
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

    //Visualizzo il messaggio
    this.showAlert(message, title);
    
  }  
   //#endregion


  //#region PREPARAZIONE DOCUMENTO ISCRIZIONE
  prepareDocIscrizione(): IscrizioneCorso {
    let myDoc = new IscrizioneCorso();

    if (this.myCorso && this.docUser) {

      myDoc.IDCORSO = this.myCorso.ID;
      myDoc.IDUTENTE = this.docUser.ID;
      myDoc.DATAISCRIZIONE = new Date();
      
    }

    return myDoc;
  }
   //#endregion
/**
 * Mostra un messaggio a video
 * @param messaggio Messaggio
 */
  showToastMessage(messaggio:string){

      this.toastCtrl.create({
        message: messaggio,
        duration: 3000
      });

  }

  /**
   * Visualizza un alert con un pulsante Ok se !buttons, oppure con i bottoni dell'array
   * @param messaggio Messaggio
   * @param titolo Titolo
   */
   showAlert(messaggio:string, titolo?:string, bottoni?:string[]) {

    if (!bottoni || bottoni.length == 0) {
      bottoni = [];
      bottoni.push('Ok');
    }

    //Mostro l'alert richiesto
    this.alertCtrl.create({      
      header: (titolo?titolo:'Attenzione'),      
      message: messaggio,
      buttons: bottoni
    })
    .then(elAlert => {
      elAlert.present();
    })
  }  

/**
* Chiusura della videata
*/  
closeModal(){
  this.modalCtrl.dismiss();
}

/**
 * Apre una videata con la pagina richiesta
 * @param url Url da visualizzare
 */
openLink(url:string)
{
  Browser.open({url:url})
}

}
