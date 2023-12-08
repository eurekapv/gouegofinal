import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AlertButton, IonModal, LoadingController, ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ShopCarrello } from 'src/app/models/shop/shop-carrello.model';
import { Area } from 'src/app/models/struttura/area.model';
import { AreaPaymentSetting } from 'src/app/models/struttura/areapaymentsetting.model';
import { Utente } from 'src/app/models/utente/utente.model';
import { PaymentProcess } from 'src/app/models/zsupport/payment-process.model';
import { PaymentMode, SettorePagamentiAttivita } from 'src/app/models/zsupport/valuelist.model';
import { StartService } from 'src/app/services/start.service';
import { PaymentPage } from '../../payment/payment.page';
import { ErrorDoc } from 'src/app/library/models/error-doc.model';
import { PostResponse } from 'src/app/library/models/post-response.model';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.page.html',
  styleUrls: ['./cart-checkout.page.scss'],
})
export class CartCheckoutPage implements OnInit, OnDestroy {

  @ViewChild('modalordersuccess') modalOrderSuccess: IonModal;
  @ViewChild('modalorderfailed') modalOrderFailed: IonModal;
  isOpenModalOrderSuccess = false; //Switch per l'apertura della modale Ordine corretto
  isOpenModalOrderFailed = false; //Switch per l'apertura della modale Ordine Fallito

  numProdotti: number = 0;
  subListenCarrello: Subscription;
  carrelloDoc: ShopCarrello = new ShopCarrello();
  resultReponse: PostResponse = new PostResponse;

  userLogged: boolean;      //TRUE-FALSE: Utente Loggato
  subUserLogged: Subscription;  
  
  userDoc: Utente;
  subUserDoc: Subscription; 

  //Area selezionata
  docArea: Area;
  subAreaDoc: Subscription;  

  //accettazione delle condizioni di vendita
  disclaimer: boolean =true; 
  

  //Configurazioni di pagamento
  myListPayment: AreaPaymentSetting[];
  mySelectedPayment: AreaPaymentSetting;
  myPaymentMode: PaymentMode;

  subPaymentResult: Subscription;  


  
  constructor(    
    private startService: StartService,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private navController: NavController) { 

        //Svuota l'array
        this.myListPayment = [];
    }

  ngOnInit() {
    let loadingItem: HTMLIonLoadingElement;

    //Imposto il flag a TRUE
    this.disclaimer = true;

    this.startService
        .showLoadingMessage('Recupero carrello')
        .then(elLoading => {
          loadingItem = elLoading;
          elLoading.present();
          //Recupero il carrello
          return this.onListenCarrello();
        })
        .then(()=> {
          //Recupero Utente
          return this.onListenUtente();
        })
        .then(()=> {
          //Recupero Area
          return this.onListeArea();
        })
        .then(()=> {
          return this.setListPayment();
        })
        .then(() => {
          //Chiudo il Loading e mi fermo sulla pagina
          loadingItem.dismiss();
        })
        .catch(error => {
          let listButtons: AlertButton[] = [{
                  text:'Chiudi', 
                  handler: () => {this.closeModal();
                  }}];

            //Chiudo il loading
            loadingItem.dismiss();
            //Mostro l'errore
            this.startService.presentAlertMessage(error, "Errore checkout", listButtons);
        })

  }


  ngOnDestroy(): void {
    if (this.subListenCarrello) {
      this.subListenCarrello.unsubscribe();
    }

    if (this.subUserLogged) {
      this.subUserLogged.unsubscribe();
    }

    if (this.subUserDoc) {
      this.subUserDoc.unsubscribe();
    }

    if (this.subAreaDoc) {
      this.subAreaDoc.unsubscribe();
    }    
  }    
  
  /**
   * Mi metto in ascolto del carrello
   */
  onListenCarrello():Promise<void> {
    return new Promise<void>((resolve, reject) => {
      
      this.subListenCarrello = this.startService.activeCart$.subscribe({
        next: (dataCarrello) => {
            console.log(dataCarrello);
            if (dataCarrello) {
              //Mi tengo il carrello per mostrare nella pagina
              this.carrelloDoc = dataCarrello;
              this.numProdotti = dataCarrello.getNumProdotti();
              resolve();
            }
            else {
              this.numProdotti = 0;
            }          
        },
        error: (err) => {
          this.numProdotti = 0;
          reject(err)
        }
      })
    })
  }    

  /**
   * Metto in ascolto dell'utente attivo
   * @returns 
   */
  onListenUtente(): Promise<void> {
    return new Promise<void>((resolve) => {

      //Controllo dell'utente loggato
      this.subUserLogged = this.startService.flagUtenteIsLoggato$
          .subscribe({
            next: (element: boolean) => {
              this.userLogged = element;
            }
          });

      //Richiedo lo User
      this.subUserDoc = this.startService.activeUtenteDoc$
          .subscribe({
            next: (element: Utente) => {
              //Utente loggato
              this.userDoc = element;
            }
          });  
          
      resolve();
    })
  } 
  
  /**
   * Recupero dell'area di riferimento
   * @returns 
   */
  onListeArea(): Promise<void> {
    return new Promise<void>((resolve, reject) => {

      this.subAreaDoc = this.startService.areaSelected$.subscribe({
        next: (dataArea) => {
          if (dataArea) {
            this.docArea = dataArea;
            resolve();
          }
          else {
            reject('Area non definita');
          }
        },
        error: (err)=> {
          reject(err);
        }
        })
    })
  }

  //#region ACQUISTO
  onClickAcquista() {
    //Procedo con il pagamento
    this.onExecPayment();
  }
  //#endregion

  
  //#region METODI GESTIONE PAGAMENTO

  /**
   * Recupera i metodi di pagamento sulla base dell'Area e popola 
   * l'array myListPayment e l'elemento mySelectedPayament
   */  
  setListPayment(): Promise<void> {

    return new Promise<void>((resolve) => {

      //Svuota l'array
      this.myListPayment = [];
      //Imposto la lista
      this.myListPayment = this.docArea.getPaymentFor(SettorePagamentiAttivita.settorePagamentoShop);
      //Seleziono un metodo di pagamento
      this.mySelectedPayment = (this.myListPayment && this.myListPayment.length != 0 ? this.myListPayment[0]: null);      
      console.log(this.myListPayment);
      resolve();
    })

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
   * Richiesta di esecuzione del pagamento di qualsiasi tipologia
   * 1) Se onSite conclude subito dicendo che va bene
   * 2) Per altre tipologie viene aperta la pagina del pagamento
   *
   */
  onExecPayment() {

    let arModes:PaymentMode[]=[PaymentMode.pagaAdesso, 
                                PaymentMode.pagaBonifico, 
                                PaymentMode.pagaStruttura];

    //Presente un totale da pagare
    if (this.carrelloDoc.TOTRESIDUO != 0) {

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
          
          myCheckoutPayment.amount = this.carrelloDoc.TOTRESIDUO;
          myCheckoutPayment.description = 'Pagamento Shop';
          myCheckoutPayment.currency = 'EUR';
  
          //il channelPayment viene impostato nel componente
          //esterno che si preoccupa del pagamento
          //Passo alla modale in paymentData = myCheckoutPayment
          this.modalController.create({
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
      this.startService.presentAlertMessage('Ordine non accettato, Contattare la struttura.');
    }

  }


  /**
   * Pagamento andato a buon fine
   * @param resultPayment Risultato del pagamento
   */
  onPaymentSuccess(resultPayment?: PaymentProcess) {
    let myLoading: HTMLIonLoadingElement;

    //Pagamento corretto
    if (resultPayment && resultPayment.processResult)  {

      //Nessuna transazione sembra avvenuta
      if (resultPayment.idElectronicResult.length == 0) {

        this.carrelloDoc.IDTRANSACTION = '';
        this.carrelloDoc.IDORDER = '';

        this.carrelloDoc.CHANNELPAYMENT = resultPayment.channelPayment;

        //e che non ho incassato nulla
        this.carrelloDoc.TOTSALDATO = 0;

      }
      else {
        //Pagamento Effettuato
        this.carrelloDoc.TOTRESIDUO = 0;
        this.carrelloDoc.TOTSALDATO = this.carrelloDoc.TOTDOCUMENTO;
        
        //Non riesco ad ottenere idTransaction e quindi non lo mando
        this.carrelloDoc.IDTRANSACTION = '';
        
        //Dovrebbe essere idOrder
        this.carrelloDoc.IDORDER = resultPayment.idElectronicResult;
        this.carrelloDoc.CHANNELPAYMENT = resultPayment.channelPayment;

      }


      //Pagamento avvenuto correttamente
      //Posso salvare e poi chiudere
      //Visualizzo il loading controller
      this.loadingController.create({
            message: 'Attendere, invio ordine',
            spinner: 'circular'
          })
          .then(elLoading => {

            //Mmeorizzo il loading
            myLoading = elLoading;
            //Creo il loading
            elLoading.present();
  
            //Effettuo l'invio dell'ordine
            return this.sendOrder();
          })
          .then(()=> {
            //Chiudo il loading
            myLoading.dismiss();

            //Apro la modale che avviso
            this.isOpenModalOrderSuccess = true;
          })
          .catch(error => {
            //Chiudo il loading
            myLoading.dismiss();
            
            //Migliorare il messaggio
            this.startService.presentAlertMessage(error);
          })


    }

  }

  /**
   * Invia l'ordine al Server
   */
  sendOrder(): Promise<void> {
    return new Promise<void>((resolve, reject) => {

      //Procedo con il salvataggio
      this.startService.shopSaveCart()
                        .then(()=> {
                        resolve();
                        })
                        .catch(error => {
                          reject(error);
                        });
    })
  }

  /**
   * Si sono verificati errori nel pagamento
   * @param resultPayment Risultato Pagamento Fallito
   */
  onPaymentFailed(resultPayment?: PaymentProcess) {
    let message = 'Si sono verificati errori nel pagamento';
    let title = 'Pagamento Fallito';
    let listButtons: AlertButton[] = [{
      text: 'Chiudi',
      role: 'cancel'
    }]

    if (resultPayment) {
      message = `<h3>Ops...qualcosa è andato storto<h3>`;
      message += `<br/>`;
      message += `<p>Si è verificato un problema con la gestione del pagamento</p>`;

      if (resultPayment.messageResult) {
        message += `<p>${resultPayment.messageResult}</p>`;
      }
    }

    this.startService.presentAlertMessage(message, title, listButtons);    
  }

  //#endregion

  /**
   * Chiude la Modale che avverte del successo Ordine e 
   * chiude anche la modale del Check out
   */
  closeModalOrderSuccess() {

    if (this.modalOrderSuccess) {

      this.modalOrderSuccess.dismiss()
                            .then(result => {
                              if (result) {
                                //Creo un nuovo ordine
                                //Creo un nuovo ordine
                                this.startService.shopNewCart();

                                //Chiudo la modale principale ed torno allo shop
                                this.closeModal(true);
                              }
                            })
    }
   

  }

  /**
   * Chiude la modale
   */
  closeModal(goToShopHome: boolean = false) {

    this.modalController
        .dismiss()
        .then(result => {
          if (result && goToShopHome) {
            //Devo portare alla home
            let pathToGo = this.startService.getUrlPageBasic('shop');
            this.navController.navigateRoot(pathToGo);
          }
        });
  }
}
