import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AlertButton, IonModal, LoadingController, ModalController, NavController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ShopCarrello } from 'src/app/models/shop/shop-carrello.model';
import { Area } from 'src/app/models/struttura/area.model';
import { AreaPaymentSetting } from 'src/app/models/struttura/areapaymentsetting.model';
import { Utente } from 'src/app/models/utente/utente.model';
import { PaymentProcess } from 'src/app/models/zsupport/payment-process.model';
import { ModeIncassoConfig, PageType, PaymentChannel, PaymentMode, SettorePagamentiAttivita } from 'src/app/models/zsupport/valuelist.model';
import { StartService } from 'src/app/services/start.service';
import { PostResponse } from 'src/app/library/models/post-response.model';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { AreaLink } from 'src/app/models/struttura/arealink.model';
import { Browser } from '@capacitor/browser';

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
  selectedArea: Area;
  subAreaDoc: Subscription;  

  //accettazione delle condizioni di vendita
  disclaimer: boolean =true; 
  

  //Configurazioni di pagamento
  myListPayment: AreaPaymentSetting[];
  mySelectedPayment: AreaPaymentSetting;
  myPaymentMode: PaymentMode;

  subPaymentResult: Subscription;  

  /* NUOVE PROPRIETA */
  // Creo le variabili per ognuna modalita di incasso (Contanti/Bonifico/Mobile)
  //Queste variabili vengono popolate una volta che ho l'elenco delle modalità di pagamento
  _configIncassoContanti: AreaPaymentSetting;
  _configIncassoBonifico: AreaPaymentSetting;
  _configIncassoMobile: AreaPaymentSetting;

  _selectedPaymentMode: ModeIncassoConfig;
  _selectedPaymentConfig: AreaPaymentSetting;

  showStripeForm = false;

  // Variabili per gestire la promise
  private currentPaymentResolve: any;
  private currentPaymentReject: any;

  /* FINE NUOVE PROPRIETA */

  // Modalità di consegna
  deliveryMode: 'pickup' | 'shipping' = 'pickup';
  
  //Il carrello deve poter essere consegnato
  enableDeliveryMode: boolean = true;
 

  
  constructor(    
    private startService: StartService,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private navController: NavController,
    private platform: Platform) { 

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
          //Inizializzo la modalità di consegna in base al carrello
          this.initDeliveryMode();
          //Chiudo il Loading e mi fermo sulla pagina
          loadingItem.dismiss();
        })
        .catch(error => {
          let listButtons: AlertButton[] = [{
                  text:'Chiudi',
                  handler: () => {this.closeModalOrderFailed();
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
          if (dataCarrello) {
            //Mi tengo il carrello per mostrare nella pagina
            this.carrelloDoc = dataCarrello;
            this.numProdotti = dataCarrello.getNumRigheArticoli();
            this.enableDeliveryMode = dataCarrello.getEnableDeliveryMode();

            console.log('RICEVUTO CARRELLO');
            console.log(dataCarrello);

              resolve();
            }
            else {
              this.numProdotti = 0;
            }          
        },
        error: (err) => {
          this.enableDeliveryMode = false;
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
            this.selectedArea = dataArea;
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

  //#region MODALITÀ DI CONSEGNA

  /**
   * Inizializza la modalità di consegna in base al valore RITIROINSEDE del carrello
   */
  initDeliveryMode() {
    // Se RITIROINSEDE è true o undefined, imposta pickup, altrimenti shipping
    this.deliveryMode = (this.carrelloDoc.RITIROINSEDE === false) ? 'shipping' : 'pickup';
  }

  /**
   * Gestisce il cambio di modalità di consegna
   */
  onDeliveryModeChange() {

    //Reimposto Utente e Metodo di spedizione
    this.startService.shopSetIdAnagrafica(this.userDoc, this.deliveryMode);
                     

    // if (this.deliveryMode === 'pickup') {
    //   // Ritiro in sede
    //   this.carrelloDoc.RITIROINSEDE = true;
    //   // Azzero i campi di spedizione
    //   this.clearShippingFields();
    // } else {
    //   // Spedizione
    //   this.carrelloDoc.RITIROINSEDE = false;
    //   // Inizializzo i campi con i dati dell'utente se disponibili
    //   this.initShippingFields();
    // }
    
    // // Calcolo le spese di trasporto (da implementare con la logica backend)
    // //Richiamare il server per ottenere le informazioni di spedizione
    // this.calculateShippingCost();

  }

  /**Quando cambia Stato o Provincia ricalcolo il totale */
  onShippingAddressChange() {
    // Calcolo le spese di trasporto (da implementare con la logica backend)
    //Richiamare il server per ottenere le informazioni di spedizione
    this.calculateShippingCost();
  }

  // /**
  //  * Azzera i campi di spedizione
  //  */
  // clearShippingFields() {
  //   this.carrelloDoc.NOMEDESTINAZIONE = null;
  //   this.carrelloDoc.INDIRIZZODESTINAZIONE = null;
  //   this.carrelloDoc.COMUNEDESTINAZIONE = null;
  //   this.carrelloDoc.CAPDESTINAZIONE = null;
  //   this.carrelloDoc.PROVINCIADESTINAZIONE = null;
  //   this.carrelloDoc.STATODESTINAZIONE = null;
  //   this.carrelloDoc.NOTESDESTINAZIONE = null;
  // }

  // /**
  //  * Inizializza i campi di spedizione con i dati dell'utente
  //  */
  // initShippingFields() {
  //   if (this.userDoc) {
  //     this.startService.shopSetIdAnagrafica()


  //     this.carrelloDoc.NOMEDESTINAZIONE = this.userDoc.NOMINATIVO;
  //     this.carrelloDoc.INDIRIZZODESTINAZIONE = this.userDoc.INDIRIZZO || null;
  //     this.carrelloDoc.COMUNEDESTINAZIONE = this.userDoc.COMUNE || null;
  //     this.carrelloDoc.CAPDESTINAZIONE = this.userDoc.CAP || null;
  //     this.carrelloDoc.PROVINCIADESTINAZIONE = this.userDoc.PROVINCIA || null;
  //     this.carrelloDoc.STATODESTINAZIONE = 'Italia';
  //   } else {
  //     this.carrelloDoc.STATODESTINAZIONE = 'Italia';
  //   }

  //   console.log('********** CARRELLO ')
  //   console.log(this.carrelloDoc);
  //   console.log(this.carrelloDoc.NOMEDESTINAZIONE);
  //   console.log('********** UTENTE ')
  //   console.log(this.userDoc);
  //   console.log(this.userDoc.NOMINATIVO);
  // }

  /**
   * Calcola le spese di trasporto in base al valore del carrello
   * TODO: Implementare chiamata al backend per calcolo dinamico
   */
  calculateShippingCost() {
      //Effettuo la chiamata al server per il ricalcolo del carrello
      this.startService.shopRecalcCart()
                       .then(()=> {
                          this.startService.presentToastMessage('Aggiornamento totale carrello')
                       })
                       .catch(error => {
                        this.startService.presentAlertMessage('Si sono verificati errori nel calcolo del totale');
                       });
  }

  // /**
  //  * Ricalcola il totale del documento
  //  */
  // recalculateTotal() {
  //   this.carrelloDoc.TOTDOCUMENTO = this.carrelloDoc.TOTINTERMEDIO +
  //                                    (this.carrelloDoc.SPESETRASPORTO || 0) +
  //                                    (this.carrelloDoc.TOTARROTONDAMENTO || 0);

  //   // Aggiorna anche il residuo se non è stato ancora pagato
  //   if (this.carrelloDoc.TOTRESIDUO === this.carrelloDoc.TOTDOCUMENTO - this.carrelloDoc.SPESETRASPORTO) {
  //     this.carrelloDoc.TOTRESIDUO = this.carrelloDoc.TOTDOCUMENTO;
  //   }
  // }

  /**
   * Valida i campi di spedizione prima di procedere con il pagamento
   */
  validateShippingFields(): boolean {
    if (this.deliveryMode === 'shipping') {
      // Campi sempre obbligatori per tutte le destinazioni
      const baseRequiredFields = [
        { field: this.carrelloDoc.NOMEDESTINAZIONE, name: 'Nome Destinatario' },
        { field: this.carrelloDoc.INDIRIZZODESTINAZIONE, name: 'Indirizzo' },
        { field: this.carrelloDoc.COMUNEDESTINAZIONE, name: 'Città' },
        { field: this.carrelloDoc.STATODESTINAZIONE, name: 'Stato' }
      ];

      // Verifica campi base
      for (const item of baseRequiredFields) {
        if (!item.field || item.field.trim().length === 0) {
          this.startService.presentAlertMessage(
            `Il campo "${item.name}" è obbligatorio per la spedizione`,
            'Dati Incompleti'
          );
          return false;
        }
      }

      // Verifica se la destinazione è Italia
      const stato = (this.carrelloDoc.STATODESTINAZIONE || '').trim().toUpperCase();
      const isItaly = ['IT', 'ITA', 'ITALIA', 'ITALY'].includes(stato);

      // Per l'Italia, CAP e Provincia sono obbligatori
      if (isItaly) {
        if (!this.carrelloDoc.CAPDESTINAZIONE || this.carrelloDoc.CAPDESTINAZIONE.trim().length === 0) {
          this.startService.presentAlertMessage(
            'Il campo "CAP" è obbligatorio per le spedizioni in Italia',
            'Dati Incompleti'
          );
          return false;
        }
        if (!this.carrelloDoc.PROVINCIADESTINAZIONE || this.carrelloDoc.PROVINCIADESTINAZIONE.trim().length === 0) {
          this.startService.presentAlertMessage(
            'Il campo "Provincia" è obbligatorio per le spedizioni in Italia',
            'Dati Incompleti'
          );
          return false;
        }
      }
    }
    return true;
  }

  //#endregion

  //#region ACQUISTO
  onClickAcquista() {
    // Valida i campi di spedizione prima di procedere
    if (!this.validateShippingFields()) {
      return;
    }

    //Procedo con il pagamento
    this.onExecPayment();
  }

  /**
   * Dovrei mostrare le condizioni di vendita
   */
  onClickCondizioniVendita() {
    let link: AreaLink;


    if (this.selectedArea) {

      link = this.selectedArea.findAreaLinkByPageType(PageType.condizioniVenditaShop);
  
      if (link && link.REFERURL && link.REFERURL.length != 0) {

        //Apro il link
        this.openLink(link.REFERURL);

      }
    }
  }

  /**
   * Apre nel browser URL richiesto
   * @param url 
   */
  openLink(url:string)
  {
    Browser.open({url:url})
  }
  //#endregion

  
  //#region METODI GESTIONE PAGAMENTO

  /**
   * Recupera i metodi di pagamento sulla base dell'Area e popola 
   * l'array myListPayment e l'elemento mySelectedPayament
   */  
  setListPayment(): Promise<void> {

    return new Promise<void>((resolve) => {

    let listConfigIncassi: AreaPaymentSetting[];

    LogApp.consoleLog('Imposto Lista Metodi Pagamento');


    //Azzero le configurazioni
    this._configIncassoContanti = null;
    this._configIncassoBonifico = null;
    this._configIncassoMobile = null;
    //Questo è il modo di pagamento scelto
    this._selectedPaymentMode = null;
    this._selectedPaymentConfig = null;


    //Ho il documento dell'Area
    if (this.selectedArea) {
          //Recupero le modalità
          listConfigIncassi = this.selectedArea.getPaymentFor(SettorePagamentiAttivita.settorePagamentoShop)

          //Recupero la modalità per il pagamento in contanti (se presente)
          this._configIncassoContanti = AreaPaymentSetting.findConfigIncassoFor(listConfigIncassi, 
                                                                              ModeIncassoConfig.incassoContanti, 
                                                                              SettorePagamentiAttivita.settorePagamentoShop)

          //Recupero la modalità per il pagamento in bonifico (se presente)
          this._configIncassoBonifico = AreaPaymentSetting.findConfigIncassoFor(listConfigIncassi, 
                                                                              ModeIncassoConfig.incassoBonifico, 
                                                                              SettorePagamentiAttivita.settorePagamentoShop)

          //Recupero la modalità per il pagamento in mobile (se presente)
          this._configIncassoMobile = AreaPaymentSetting.findConfigIncassoFor(listConfigIncassi, 
                                                                              ModeIncassoConfig.incassoCreditCard, 
                                                                              SettorePagamentiAttivita.settorePagamentoShop)
          LogApp.consoleLog('Contanti');
          LogApp.consoleLog(this._configIncassoContanti);
          LogApp.consoleLog('Bonifico');
          LogApp.consoleLog(this._configIncassoBonifico);
          LogApp.consoleLog('Mobile');
          LogApp.consoleLog(this._configIncassoMobile);

          resolve();
      }
      else {
        //Anche se sono in errore continuo
        resolve();
      }
    })

  }


    /**
   * Selezionato un valore per il metodo di pagamento
   * @param value 
   */
  onSelectPaymentConfig(value: ModeIncassoConfig) {

    this._selectedPaymentMode = value;

    switch (this._selectedPaymentMode) {
      case ModeIncassoConfig.incassoContanti:
          this._selectedPaymentConfig = this._configIncassoContanti;
        break;
      case ModeIncassoConfig.incassoBonifico:
          this._selectedPaymentConfig = this._configIncassoBonifico;
        break;
      case ModeIncassoConfig.incassoCreditCard:
          this._selectedPaymentConfig = this._configIncassoMobile;
        break;        
    
      default:
        break;
    }
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

      //Metodo di pagamento che non prevede altri passaggi 
      if (this._selectedPaymentMode == ModeIncassoConfig.incassoContanti) {

          //Creo il risultato del pagamento, passando la modalità
          let docPaymentResult = new PaymentProcess(PaymentMode.pagaStruttura);
          // Essendo una modalita che non prevede interazioni app
          // viene impostato automaticamento il channelPayment 
          // e il processResult = TRUE
          
          //Passo subito al Success
          this.onPaymentSuccess(docPaymentResult);        
      }
      else if (this._selectedPaymentMode == ModeIncassoConfig.incassoBonifico) {

          //Creo il risultato del pagamento, passando la modalità
          let docPaymentResult = new PaymentProcess(PaymentMode.pagaBonifico);
          // Essendo una modalita che non prevede interazioni app
          // viene impostato automaticamento il channelPayment 
          // e il processResult = TRUE
          
          //Passo subito al Success
          this.onPaymentSuccess(docPaymentResult);        
      }
      else if (this._selectedPaymentMode == ModeIncassoConfig.incassoCreditCard) {

        //*********** Pagamento tramite Stripe *********************
        if (this._selectedPaymentConfig.TIPOPAYMENT == PaymentChannel.stripe) {
            //Chiamo il metodo per il pagamento
            this.payWithStripe()
                .then(paymentResultDoc => {
                  //Pagamento avvenuto correttamente
                  //Passo subito al Success
                  this.onPaymentSuccess(paymentResultDoc);
                })
                .catch(error => {
                  if (error instanceof Error) {
                    //Errore pagamento
                    this.startService.presentAlertMessage(error.message, 'Pagamento fallito');
                  }
                  else if (typeof error == 'string') {
                    this.startService.presentAlertMessage(error, 'Pagamento fallito');
                  }
                  else {
                    this.startService.presentAlertMessage(error.toString(), 'Pagamento fallito');
                  }
                })
        }
      }
      else {
        this.startService.presentAlertMessage("Nessuna modalità di pagamento selezionata", 'Procedura interrotta');
      }
      
    }
    else {
      this.startService.presentAlertMessage('Ordine non accettato, Contattare la struttura.');
    }

  }


  //#region STRIPE PAYMENT

  // Modifica il metodo payWithStripe
  /**
   * Si chiede il pagamento tramite Stripe
   */
  payWithStripe(): Promise<PaymentProcess> {
    return new Promise<PaymentProcess>((resolve, reject) => {
      
      const amount = this.carrelloDoc.TOTRESIDUO * 100;
      const centroAccountId = this._selectedPaymentConfig.STIDACCOUNT;

      this.startService.presentPaymentOptions(
                        amount,
                        'EUR',
                        centroAccountId)
        .then(result => {

          if (result.success) {

            // Su browser, mostra il form e monta Stripe Elements
            if (!this.platform.is('capacitor')) {
              console.log('🌐 Browser: mostro form pagamento');
              this.showStripeForm = true;
              this.currentPaymentResolve = resolve;
              this.currentPaymentReject = reject;
              
              // Aspetta che Angular renderizzi il DOM, poi monta Stripe
              setTimeout(() => {
                this.mountStripeElement();
              }, 100);
              return;
            }

            // Su mobile, procedi direttamente
            let paymentResultDoc = new PaymentProcess(PaymentMode.pagaAdesso);
            paymentResultDoc.modePayment = PaymentMode.pagaAdesso;
            paymentResultDoc.channelPayment = PaymentChannel.stripe;
            paymentResultDoc.amount = amount / 100;
            paymentResultDoc.currency = 'EUR';
            paymentResultDoc.description = 'Pagamento Ordine';
            paymentResultDoc.idElectronicResult = result.paymentIntentId;
            paymentResultDoc.processResult = true;

            console.log('✅ Pagamento completato!', result.paymentIntentId);
            resolve(paymentResultDoc);

          }
          else {
            console.error('❌ Errore:', result.error);
            reject(result.error);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Monta l'elemento Stripe nel DOM
   */
  async mountStripeElement() {
    try {
      await this.startService.mountPaymentElement();
      console.log('✅ Stripe Element montato nel DOM');
    } catch (error) {
      console.error('❌ Errore montaggio Stripe Element:', error);
      this.showStripeForm = false;
      if (this.currentPaymentReject) {
        this.currentPaymentReject('Errore caricamento form pagamento');
      }
    }
  }

  /**
   * Conferma il pagamento su browser
   */
  async confirmStripePayment() {
    try {
      const result = await this.startService.confirmBrowserPayment();
      
      this.showStripeForm = false;

      if (result.success) {
        const amount = this.carrelloDoc.TOTRESIDUO * 100;
        let paymentResultDoc = new PaymentProcess(PaymentMode.pagaAdesso);
        
        paymentResultDoc.modePayment = PaymentMode.pagaAdesso;
        paymentResultDoc.channelPayment = PaymentChannel.stripe;
        paymentResultDoc.amount = amount / 100;
        paymentResultDoc.currency = 'EUR';
        paymentResultDoc.description = 'Pagamento Ordine';
        paymentResultDoc.idElectronicResult = result.paymentIntentId || '';
        paymentResultDoc.processResult = true;

        if (this.currentPaymentResolve) {
          this.currentPaymentResolve(paymentResultDoc);
        }
      } else {
        if (this.currentPaymentReject) {
          this.currentPaymentReject(result.error);
        }
      }
    } catch (error: any) {
      this.showStripeForm = false;
      if (this.currentPaymentReject) {
        this.currentPaymentReject(error.message || error);
      }
    }
  }

  /**
   * Annulla il pagamento su browser
   */
  cancelStripePayment() {
    this.showStripeForm = false;
    if (this.currentPaymentReject) {
      this.currentPaymentReject('Pagamento annullato dall\'utente');
    }
  }
  //#endregion



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

            //Chiudo il checkout e chiedo di andare alla pagina del Order Success
            this.closeModalOrderSuccess();

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
   * Annullo il checkout
   */
  closeModalOrderFailed() {
    this.modalController
        .dismiss();
  }

  /**
   * Chiude la modale perchè ordine è andato a buon fine
   */
  closeModalOrderSuccess() {
     let actualOrderId:string = '';

    //Chiudo questa modale
    this.modalController
        .dismiss()
        .then(result => {
          if (result) {
            //Memorizzo ID Attuale
            actualOrderId = this.carrelloDoc.ID;

            //Smetto di seguire le modifiche del carrello
            if (this.subListenCarrello) {
              this.subListenCarrello.unsubscribe();
            }
            
            //Creo un nuovo carrello
            this.startService.shopNewCart();


            //Mostro l'ordine finalizzato
            let pathToGo = this.startService.getUrlPageBasic('shop');
            pathToGo.push('order-success');
            pathToGo.push(actualOrderId);
  
            this.navController.navigateRoot(pathToGo);

          }
        });
  }
}
