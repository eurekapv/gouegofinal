import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
//per lo share via browser
import { Share, ShareOptions } from '@capacitor/share';

import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Area } from 'src/app/models/struttura/area.model';
import { CustomAlertClass, ModeIncassoConfig, PageType, PaymentChannel, SettorePagamentiAttivita } from 'src/app/models/zsupport/valuelist.model'

import { AreaPaymentSetting } from 'src/app/models/struttura/areapaymentsetting.model';

import { Swiper, Navigation, Pagination } from 'swiper';
import { Prenotazione } from 'src/app/models/prenotazioni/prenotazione.model';
import { firstValueFrom, Subscription } from 'rxjs';
import { AlertButton, IonAccordionGroup, LoadingController, NavController, Platform } from '@ionic/angular';
import { StartService } from 'src/app/services/start.service';
import { ActivatedRoute } from '@angular/router';
import { PrenotazionePianificazione } from 'src/app/models/prenotazioni/prenotazionepianificazione.model';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { PrenotaIncassi } from 'src/app/models/prenotazioni/prenota-incassi.model';
import { StripeIntent } from 'src/app/models/pagamenti/stripe-intent';
import { PaymentResult, StripePaymentIntentMetadata } from 'src/app/services/payment/stripe-payment.service';
Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-history-booking',
  templateUrl: './history-booking.page.html',
  styleUrls: ['./history-booking.page.scss'],
})
export class HistoryBookingPage implements OnInit, OnDestroy {

  constructor(
                private router: ActivatedRoute,
                private navCtr: NavController,
                private startService: StartService,
                private loadingController: LoadingController,
                private platform: Platform,
            ) { }

  prenotazioneDoc: Prenotazione = new Prenotazione();
  activePianificazione: PrenotazionePianificazione = new PrenotazionePianificazione();
  qrCodeActivePianificazione: string = '';

  indexPianificazione: number = 0;
  loadingComplete: boolean = false;

  startConfig:StartConfiguration;
  subStartConfig:Subscription;
  
  idPrenotazione: string;
  idPianificazione: string;
  historyId: string;
  selectedArea:Area;
  
  /**Configurazione per pagamenti con Stripe */
  _configIncassoMobile: AreaPaymentSetting;
  _selectedPaymentMode: ModeIncassoConfig;
  _selectedPaymentConfig: AreaPaymentSetting;

  listStripeIntents: StripeIntent[] = []; //Pagamenti Stripe avviati per la prenotazione (stato aggiornato dal webhook)

  //Pagamento di una scadenza con Stripe
  paymentInProgress: boolean = false; //Pagamento avviato, blocca i doppi click
  showStripeForm: boolean = false; //Solo browser: form con i dati della carta
  confirmingStripe: boolean = false; //Solo browser: conferma in corso
  private currentPaymentResolve: (value: PaymentResult | null) => void;
  private currentPaymentReject: (reason?: any) => void;

  //Dopo il pagamento si attende che il webhook registri la scadenza come pagata
  private readonly PAYMENT_CHECK_INTERVAL_MS = 3000; //Ogni quanto controllo
  private readonly PAYMENT_CHECK_MAX_ATTEMPTS = 5; //Quanti controlli al massimo
  private paymentCheckTimer: any;
  private destroyed: boolean = false;

  //Finchè ci sono scadenze in attesa di conferma la pagina si aggiorna da sola
  private readonly PENDING_REFRESH_INTERVAL_MS = 10000;
  private pendingRefreshTimer: any;

  @ViewChild('accordiondate', { static: true }) accordionGroup: IonAccordionGroup;

  //i metodi di pagamento possibili
  arPayments : AreaPaymentSetting[] = [];


  /**
   * Recupero di HistoryId e dei documenti Prenotazione/Area necessari 
   */
  ngOnInit() {

    //Mi sottoscrivo per la configurazione
    this.subStartConfig=this.startService.startConfig.subscribe(config=>{
      this.startConfig=config;
    })

    //Creo il loading per il caricamento
    this.loadingController
          .create({
                spinner:'circular',
                message:'Caricamento',
                backdropDismiss:true
          })
          .then(elLoading=>{
            //Presento il loading
            elLoading.present();

            //Cerco il parametro nell'URL
            this.router.paramMap.subscribe(param => {

              if (param.has('historyId')) {
        
                //HistoryID è formato da IDPrenotazione + '-' + IDPianificazione
                this.historyId = param.get('historyId');
        
                if (this.historyId.length !== 0) {

                  this.requestByHistoryId(this.historyId)
                      .then(() => {
                        this.loadingController.dismiss();
                        //Recupero avvenuto correttamente
                        this.loadingComplete = true;

                      })
                      .catch(error => {
                        this.loadingController.dismiss();
                        //Errori di recupero
                        this.showMessage(error);
                        this.onGoToBack();
                      })
                }
                else {
                  this.showMessage('Informazioni prenotazione errate');
                  this.onGoToBack();
                }
              }
              else {
                this.showMessage('Informazioni prenotazione errate');
                this.onGoToBack();
              }
            });
    })

  }  

  ngOnDestroy() {
    if (this.subStartConfig) {
      this.subStartConfig.unsubscribe();
    }

    this.destroyed = true;

    if (this.paymentCheckTimer) {
      clearTimeout(this.paymentCheckTimer);
    }

    if (this.pendingRefreshTimer) {
      clearTimeout(this.pendingRefreshTimer);
    }
  }

  /**
   * Ritorna il numero di date pianificate per la prenotazione
   */
  get numDatePianificate(): number {
    let numDate: number = 0;
    if (this.prenotazioneDoc && this.prenotazioneDoc.PRENOTAZIONEPIANIFICAZIONE) {
      numDate = this.prenotazioneDoc.PRENOTAZIONEPIANIFICAZIONE.length;
    }

    return numDate;
  }

  //#region RICHIESTE
  /**
   * Richiedo le informazioni con historyID
   * @param historyId HistoryId
   */
  requestByHistoryId(historyId: string): Promise<void> {

      let myIdPrenotazione = '';
      let myIdPianificazione = '';

      const lungHistoryId = 73; //Lunghezza dell'HistoryID
          
      return new Promise<void>((resolve, reject) => {
        
        if (historyId.length == lungHistoryId) {
          //Divido gli elementi
          myIdPrenotazione = historyId.substring(0,36);
          myIdPianificazione = historyId.substring(37,73);
    
          if (myIdPrenotazione.length !== 36 || myIdPianificazione.length !== 36) {
            reject('HistoryId non valido');            
          }
          else {
            //Ecco gli Identificativi
            this.idPrenotazione = myIdPrenotazione;
            this.idPianificazione = myIdPianificazione;

            //Richiedo prima 
            this.startService.requestPrenotazioneById(this.idPrenotazione, 2, true, true)
                             .then(elPrenotazione => {
                                //Prenotazione recuperata
                                this.prenotazioneDoc = elPrenotazione;
                                LogApp.consoleLog('Prenotazione trovata');
                                LogApp.consoleLog(this.prenotazioneDoc);
                                //Imposto la Pianificazione attiva
                                return this.setActivePianificazione(this.prenotazioneDoc, this.idPianificazione);
                              })
                              .then(() => {
                                //Richiedo l'Area di riferimento (con le collection figlie, servono le modalità di pagamento)
                                return this.startService.requestAreaById(this.prenotazioneDoc.IDAREAOPERATIVA, 2);
                             })
                             .then(elArea => {
                                this.selectedArea = elArea;
                                //Imposto i dati per i pagamenti
                                this.setListPayment();

                                //Richiedo i pagamenti Stripe avviati (per sapere se ce ne sono in attesa di esito)
                                return this.requestStripeIntents();
                             })
                             .then(listIntents => {
                                this.listStripeIntents = listIntents;

                                //Se ci sono scadenze in attesa di conferma, la pagina si aggiornerà da sola
                                this.schedulePendingRefresh();

                                resolve();
                             })
                             .catch(error => {
                                reject(error);
                             })
          }
        }
        else {
          reject('HistoryId non valido');   
        }
      })
  
  
    }

    /**
     * Imposta il documento myPianificazione sulla base del parametro
     * Ritorna una Prenotazione (utile per la request Iniziale)
     * @param idPianificazione 
     */
    setActivePianificazione(prenotazioneDoc:Prenotazione, idPianificazione: string): Promise<Prenotazione> {
      return new Promise<Prenotazione>((resolve, reject) => {

        let indexFind = 0;
        if (prenotazioneDoc && idPianificazione.length != 0) {
          if (prenotazioneDoc.PRENOTAZIONEPIANIFICAZIONE && prenotazioneDoc.PRENOTAZIONEPIANIFICAZIONE.length != 0) {
            
            //Controlliamo se presente
            indexFind = prenotazioneDoc.PRENOTAZIONEPIANIFICAZIONE.findIndex(itemData => {
              return itemData.ID == idPianificazione;
            })

            if (indexFind != -1) {
              //Memorizzo le informazioni
              this.idPianificazione = idPianificazione;
              this.activePianificazione = prenotazioneDoc.PRENOTAZIONEPIANIFICAZIONE[indexFind];
              this.qrCodeActivePianificazione = this.activePianificazione.getQrCode();

              this.indexPianificazione = indexFind + 1;
              resolve(prenotazioneDoc);
            }
            else {
              reject('Pianificazione non trovata');
            }
          }
          else {
            reject('Date pianificate non presenti');
          }
        }
        else {
          reject('Prenotazione non presente');
        }
      })
    }

    /**
     * Cambiamento della Pianificazione da mostrare
     * @param idPianificazione 
     */
    onChangeActivePianificazione(idPianificazione: string) {
      this.setActivePianificazione(this.prenotazioneDoc, idPianificazione)
          .then(() => {
            //Chiudo l'accordion
            const nativeEl = this.accordionGroup;
            if (nativeEl) {
              nativeEl.value = undefined;
            }
          })
          .catch(error => {
            this.showMessage(error);
          })
    }

  /**
   * Imposta i pagamenti a seconda dell'area
   */
    setListPayment() {
      let listConfigIncassi: AreaPaymentSetting[];

      LogApp.consoleLog('Imposto Lista Metodi Pagamento');
      this._configIncassoMobile = null;
      this._selectedPaymentConfig = null;
      this._selectedPaymentMode = null;

      //Ho il documento dell'area
      if (this.selectedArea) {
        //Recupero le modalità
        listConfigIncassi = this.selectedArea.getPaymentFor(SettorePagamentiAttivita.settorePagamentoPrenotazione);

        //Recupero la modalità per il pagamento in mobile (se presente)
        this._configIncassoMobile = AreaPaymentSetting.findConfigIncassoFor(listConfigIncassi, 
                                                                            ModeIncassoConfig.incassoCreditCard, 
                                                                            SettorePagamentiAttivita.settorePagamentoPrenotazione);
        if (this._configIncassoMobile) {
          this._selectedPaymentConfig = this._configIncassoMobile;
          this._selectedPaymentMode = ModeIncassoConfig.incassoCreditCard;
        }

      }
    }

  /**
   * Richiede i pagamenti Stripe avviati per la prenotazione.
   * Un errore non blocca la pagina, si torna una lista vuota
   */
  private requestStripeIntents(): Promise<StripeIntent[]> {
    if (!this.containScadenze()) {
      //Nessuna scadenza da pagare
      return Promise.resolve([]);
    }

    return firstValueFrom(this.startService.requestStripeIntentBy(this.idPrenotazione))
              .catch(error => {
                LogApp.consoleLog(error, 'error');
                return <StripeIntent[]>[];
              });
  }

  /**
   * Ricarica la prenotazione (per avere le scadenze aggiornate) e gli intent Stripe
   */
  private refreshPrenotazioneEIntents(): Promise<void> {
    return this.startService.requestPrenotazioneById(this.idPrenotazione, 2, true, true)
              .then(elPrenotazione => {
                this.prenotazioneDoc = elPrenotazione;
                return this.setActivePianificazione(this.prenotazioneDoc, this.idPianificazione);
              })
              .then(() => this.requestStripeIntents())
              .then(listIntents => {
                this.listStripeIntents = listIntents;
              });
  }
  //#endregion


  //#region PAGAMENTO SCADENZE CON STRIPE

  /**
   * TRUE se l'utente può pagare online le scadenze.
   * L'account Stripe usato dal servizio è quello dell'Area attualmente selezionata nell'app,
   * quindi si abilita solo se la prenotazione appartiene proprio a quell'Area
   */
  get canPayOnline(): boolean {
    return !!this._selectedPaymentConfig &&
           this._selectedPaymentMode == ModeIncassoConfig.incassoCreditCard &&
           this._selectedPaymentConfig.TIPOPAYMENT == PaymentChannel.stripe &&
           !!this.selectedArea &&
           this.selectedArea.ID == this.startService.areaSelected?.ID;
  }

  /**
   * TRUE se la scadenza ha un pagamento Stripe incassato o in attesa di esito,
   * ma non risulta ancora registrato come pagato nella prenotazione.
   * Serve a non far pagare due volte la stessa scadenza
   * (i metodi asincroni restano "processing" per un po')
   * @param scadenza Scadenza da controllare
   */
  isPagamentoInAttesa(scadenza: PrenotaIncassi): boolean {
    return scadenza.requestPayment() &&
           this.listStripeIntents.some(elIntent => elIntent.GUIDSECONDARYKEY == scadenza.ID &&
                                                   elIntent.isSucceededOrProcessing());
  }

  /**
   * TRUE se almeno una scadenza è in attesa di conferma del pagamento
   */
  hasPagamentiInAttesa(): boolean {
    return this.getCollectionScadenze().some(elItem => this.isPagamentoInAttesa(elItem));
  }

  /**
   * Se c'è almeno una scadenza in attesa di conferma, programma un aggiornamento
   * silenzioso (solo scadenze e intent, senza ricaricare la pagina).
   * Si ripete finchè restano scadenze in attesa. Si può richiamare più volte:
   * annulla sempre l'aggiornamento già programmato
   */
  private schedulePendingRefresh() {
    if (this.pendingRefreshTimer) {
      clearTimeout(this.pendingRefreshTimer);
      this.pendingRefreshTimer = null;
    }

    if (this.destroyed || !this.hasPagamentiInAttesa()) {
      return;
    }

    this.pendingRefreshTimer = setTimeout(() => {
      this.onPendingRefresh();
    }, this.PENDING_REFRESH_INTERVAL_MS);
  }

  /**
   * Aggiorna in silenzio prenotazione e intent, poi riprogramma se serve
   */
  private onPendingRefresh() {
    if (this.destroyed) {
      return;
    }

    //Se l'utente sta pagando ci pensa già quel flusso
    if (this.paymentInProgress) {
      this.schedulePendingRefresh();
      return;
    }

    this.refreshPrenotazioneEIntents()
        .catch(error => {
          //Un errore momentaneo non ferma gli aggiornamenti
          LogApp.consoleLog(error, 'error');
        })
        .finally(() => {
          this.schedulePendingRefresh();
        });
  }

  /**
   * L'utente vuole pagare una scadenza
   * @param scadenza Scadenza da pagare
   */
  onClickPaga(scadenza: PrenotaIncassi): void {

    if (this.paymentInProgress || !this.canPayOnline || !scadenza || !scadenza.requestPayment() || this.isPagamentoInAttesa(scadenza)) {
      return;
    }

    const utente = this.startService.activeUtenteDoc;

    //Valore in centesimi
    const amount = Math.round(scadenza.IMPORTO * 100);

    const idCampo = this.activePianificazione?.IDCAMPO || '';

    let description = 'Pagamento Prenotazione ' + (this.activePianificazione?.['_DENOMINAZIONE_Location'] || '');
    if (scadenza.DATASCADENZA) {
      description += ` (Scadenza ${scadenza.DATASCADENZA.toLocaleDateString()})`;
    }

    //guidPrimaryKey = Prenotazione, guidSecondaryKey = Scadenza pagata
    const metadata: StripePaymentIntentMetadata = {
      email: utente?.EMAIL,
      customerName: utente?.NOMINATIVO,
      device: this.platform.platforms().join(','),
      productsType: 'location',
      guidPrimaryKey: this.idPrenotazione,
      guidSecondaryKey: scadenza.ID,
      customerGuid: utente?.ID,
      corsoGuid: '',
      campoGuid: idCampo
    };

    this.paymentInProgress = true;

    this.payWithStripe(amount, description, metadata)
        .then(paymentResult => {
          //Se null l'utente ha annullato
          if (paymentResult) {
            return this.onPaymentCompleted(scadenza.ID, paymentResult.paymentIntentId);
          }
        })
        .catch(error => {
          this.onPaymentFailed(error);
        })
        .finally(() => {
          this.paymentInProgress = false;
        });
  }

  /**
   * Avvia il pagamento tramite Stripe.
   * Su iOS non viene usato Apple Pay, ma la Payment Sheet,
   * cosi' l'utente sceglie tra carta e gli altri metodi abilitati.
   * Su browser viene mostrato il form con i dati della carta.
   * @returns Il risultato del pagamento, null se l'utente ha annullato
   */
  private payWithStripe(amount: number, description: string, metadata: StripePaymentIntentMetadata): Promise<PaymentResult | null> {
    return new Promise<PaymentResult | null>((resolve, reject) => {

      this.startService.presentPaymentOptions(amount, 'EUR', description, metadata, { useApplePay: false })
          .then(result => {

            if (!result.success) {
              reject(result.error);
              return;
            }

            if (!this.platform.is('capacitor')) {
              //Browser: è stato creato il PaymentIntent, mostro il form
              this.currentPaymentResolve = resolve;
              this.currentPaymentReject = reject;
              this.showStripeForm = true;

              //Aspetto che Angular renderizzi il DOM, poi monto Stripe
              setTimeout(() => {
                this.mountStripeElement();
              }, 100);
              return;
            }

            //Mobile: pagamento gia' completato
            resolve(result);
          })
          .catch(error => {
            reject(error);
          });
    });
  }

  /**
   * Monta l'elemento Stripe nel DOM (solo browser)
   */
  async mountStripeElement() {
    try {
      await this.startService.mountPaymentElement();
    } catch (error) {
      LogApp.consoleLog(error, 'error');
      this.showStripeForm = false;
      if (this.currentPaymentReject) {
        this.currentPaymentReject('Errore caricamento form pagamento');
      }
    }
  }

  /**
   * Conferma il pagamento (solo browser)
   */
  async confirmStripePayment() {
    if (this.confirmingStripe) {
      return;
    }
    this.confirmingStripe = true;

    try {
      const result = await this.startService.confirmBrowserPayment();
      this.showStripeForm = false;

      if (result.success) {
        if (this.currentPaymentResolve) {
          this.currentPaymentResolve(result);
        }
      }
      else if (this.currentPaymentReject) {
        this.currentPaymentReject(result.error);
      }
    } catch (error: any) {
      this.showStripeForm = false;
      if (this.currentPaymentReject) {
        this.currentPaymentReject(error.message || error);
      }
    } finally {
      this.confirmingStripe = false;
    }
  }

  /**
   * Annulla il pagamento (solo browser)
   */
  cancelStripePayment() {
    this.showStripeForm = false;
    if (this.currentPaymentResolve) {
      //Annullato dall'utente, non è un errore
      this.currentPaymentResolve(null);
    }
  }

  /**
   * Attende l'esito del pagamento, controllando ogni 3 secondi lo stato dell'intent Stripe
   * (aggiornato dal webhook). Termina quando lo stato è definitivo (succeeded, canceled)
   * o "processing" (esito asincrono), dopo il numero massimo di controlli o se la pagina viene chiusa.
   * Gli altri stati (es. requires_payment_method) sono quelli scritti alla creazione dell'intent:
   * significa che il webhook non è ancora arrivato, quindi si continua ad attendere
   * @param idScadenza Scadenza pagata
   * @param idIntent Id del PaymentIntent appena pagato
   * @returns L'intent aggiornato, null se non è arrivato nessun esito
   */
  private waitEsitoPagamento(idScadenza: string, idIntent?: string): Promise<StripeIntent | null> {
    return new Promise<StripeIntent | null>(resolve => {
      let attempt = 0;

      const scheduleNext = () => {
        if (this.destroyed || attempt >= this.PAYMENT_CHECK_MAX_ATTEMPTS) {
          resolve(null);
        }
        else {
          this.paymentCheckTimer = setTimeout(check, this.PAYMENT_CHECK_INTERVAL_MS);
        }
      };

      const check = () => {
        attempt++;

        firstValueFrom(this.startService.requestStripeIntentBy(this.idPrenotazione, idScadenza))
            .then(listIntents => {
              const intent = idIntent ? listIntents.find(elItem => elItem.IDINTENT == idIntent)
                                      : listIntents.find(elItem => elItem.isSucceededOrProcessing());

              if (intent && (intent.isSucceededOrProcessing() || intent.isCanceled())) {
                resolve(intent);
              }
              else {
                scheduleNext();
              }
            })
            .catch(error => {
              //Un errore momentaneo non ferma i controlli
              LogApp.consoleLog(error, 'error');
              scheduleNext();
            });
      };

      //Il primo controllo dopo l'intervallo
      scheduleNext();
    });
  }

  /**
   * Pagamento eseguito dall'utente: attendo l'esito dal server, ricarico i dati e avviso l'utente.
   * @param idScadenza Scadenza pagata
   * @param idIntent Id del PaymentIntent pagato
   */
  private onPaymentCompleted(idScadenza: string, idIntent?: string): Promise<void> {
    let esitoIntent: StripeIntent | null = null;
    let loadError: any = null;

    return this.startService.showLoadingMessage('Conferma del pagamento in corso')
              .then(elLoading => {
                elLoading.present();

                return this.waitEsitoPagamento(idScadenza, idIntent)
                           .then(elIntent => {
                              esitoIntent = elIntent;
                              return this.refreshPrenotazioneEIntents();
                           })
                           .catch(error => {
                              loadError = error;
                           })
                           .finally(() => {
                              elLoading.dismiss();
                           });
              })
              .then(() => {

                if (loadError) {
                  this.showMessage(this.startService.convertErrorDisplay(loadError));
                  return;
                }

                const scadenzaAggiornata = this.getCollectionScadenze().find(elItem => elItem.ID == idScadenza);

                if (scadenzaAggiornata && !scadenzaAggiornata.requestPayment()) {
                  //La scadenza risulta pagata
                  this.startService.presentAlertMessage('Il pagamento è stato completato con successo', 'Pagamento completato');
                }
                else if (esitoIntent && esitoIntent.isCanceled()) {
                  this.startService.presentAlertMessage('<p>Il pagamento è stato annullato.</p><p>Puoi riprovare.</p>', 'Pagamento non riuscito');
                }
                else if (esitoIntent && esitoIntent.isProcessing()) {
                  //Metodo asincrono, l'esito arriverà più tardi
                  this.startService.presentAlertMessage('<p>Il pagamento è stato avviato ma non è ancora stato confermato.</p><p>La scadenza verrà aggiornata appena il pagamento sarà confermato.</p>',
                                                        'Pagamento in attesa di conferma');
                }
                else {
                  //Il server non ha ancora registrato il pagamento
                  this.startService.presentAlertMessage('<p>Pagamento ricevuto.</p><p>La scadenza verrà aggiornata a breve, aggiorna la pagina per vederla.</p>',
                                                        'Pagamento in elaborazione');
                }

                //Riprogramma l'aggiornamento silenzioso se serve ancora
                this.schedulePendingRefresh();
              });
  }

  /**
   * Pagamento non riuscito
   * @param error Errore ricevuto
   */
  private onPaymentFailed(error: any) {
    let message = 'Pagamento non completato';

    if (error instanceof Error) {
      message = error.message;
    }
    else if (typeof error == 'string') {
      message = error;
    }
    else if (error) {
      message = error.toString();
    }

    this.startService.presentAlertMessage(message, 'Pagamento fallito');
  }

  //#endregion


  //#region PULSANTE BACK
  /**
   * Ritorna un Array con il percorso di ritorno
   */
  get backPathArray():string[] {
    let retPath = this.startService.getUrlPageHistoryPersonal('list');

    return retPath;
  }
    
  //Ritorna il Path Array Back in formato stringa concatenata
  get backButtonHref(): string {
      let myHref = '';
      myHref = this.backPathArray.join('/').substring(1);
  
      return myHref;
  }
    
  /**
   * Torno alla pagina del home
   */
  onGoToBack() {
        this.navCtr.navigateBack(this.backPathArray);
  }
  
  //#endregion


  //#region METODI INTERFACCIA 

  /**
   * Controlla se nella prenotazione sono presenti scadenze
   * @returns 
   */
  containScadenze(): boolean {
    if (this.prenotazioneDoc && 
        this.prenotazioneDoc.PRENOTAZIONIINCASSI && 
        this.prenotazioneDoc.PRENOTAZIONIINCASSI.length != 0) {
      return true;
    }

    return false;
  }

  /**
   * Ritorna la collection delle scadenze
   * @returns 
   */
  getCollectionScadenze(): PrenotaIncassi[] {
        if (this.prenotazioneDoc && 
        this.prenotazioneDoc.PRENOTAZIONIINCASSI && 
        this.prenotazioneDoc.PRENOTAZIONIINCASSI.length != 0) {
      return this.prenotazioneDoc.PRENOTAZIONIINCASSI;
    }

    return [];
  }
  

  /**
   * Ritorna una Stringa che identifica l'icona a seconda dello sport
   * @param idSport 
   * @returns 
   */
  getIcon (idSport): string{
    return this.startService.getSportIcon(idSport);
  }

  /**
   * Effettuo lo Sharing della Prenotazione
   * @param docPianificazione 
   */
  onShare(docPianificazione:PrenotazionePianificazione): void {

    let webUrlArea:string = ''; //Link di riferimento dell'area
    let webUrlLogo: string; //Link con il Logo dell'Area
    let messaggio:string;
    let oggetto: string;
    
    

    if (this.prenotazioneDoc && docPianificazione){

      //Cerco URL della mia Area
      for (const iterator of this.selectedArea.AREALINKS) {
        if (iterator.TIPOURL==PageType.home) {
          webUrlArea=iterator.REFERURL;
          break;
        }      
      }

      if(!webUrlArea){
        webUrlArea = '';
      }

      //Chiedo il logo per l'area
      webUrlLogo=this.startConfig.getUrlLogo();

      //Compongo il messaggio
      messaggio=this.prenotazioneDoc.NOMINATIVO + '  ha prenotato il ' + docPianificazione.DATAORAINIZIO.toLocaleDateString()+' alle '+docPianificazione.DATAORAINIZIO.toLocaleTimeString();
      
      if (this.startConfig.companyName){
        messaggio += ' presso '+this.startConfig.companyName;
      }
  
      if (docPianificazione['_DENOMINAZIONE_Campo']){
        messaggio += ' per il campo '+docPianificazione['_DENOMINAZIONE_Campo'];
      }

      oggetto=this.startConfig.companyName+' - Prenotazione';
     
      let shareOptions:ShareOptions={
        title: oggetto,
        text: messaggio,
        url: webUrlArea,
        dialogTitle: 'Condividi la prenotazione'
      }

      Share.share(shareOptions);
    }
  }

  /**
   * Click sul pulsante Elimina
   * @param docPianificazione 
   */
  onClickTrash(docPianificazione:PrenotazionePianificazione){

    let arrayButtons:AlertButton[]=[];
    let msgPrinc='';
    let subHeader='';

    //Preparo i Pulsanti
    let btnAnnulla:AlertButton={
      text:'Annulla',
      role:'cancel',
    }

    let btnConferma:AlertButton={
      text:'Conferma',
      role:'confirm',
      handler: ()=>{
        this.onDeletePianificazione(docPianificazione);
      }
    }

    arrayButtons.push(btnAnnulla);
    arrayButtons.push(btnConferma);

    //Messaggio
    msgPrinc='Confermi di voler eliminare la prenotazione del '+docPianificazione.DATAORAINIZIO.toLocaleDateString()+' alle '+docPianificazione.DATAORAINIZIO.toLocaleTimeString()+'?';
    
    if (this.numDatePianificate>1){
      subHeader='La prenotazione ha più date pianificate';
    }

    this.startService.presentAlertMessage(msgPrinc, 'Eliminazione Prenotazione', arrayButtons, subHeader, CustomAlertClass.subtitleWarning);

  }

  /**
   * Eliminazione della Pianificazione
   * @param docPianificazione 
   */
  onDeletePianificazione(docPianificazione:PrenotazionePianificazione){
    
    this.loadingController.create({
      message:'Eliminazione in corso',
      spinner:'circular',
      backdropDismiss:false
    })
    .then(elLoading=>{
      elLoading.present();

      //Chiedo al server di eliminare la piafinicazione
      this.startService.requestDeletePianificazione(docPianificazione.ID)
                       .then((data)=>{
                          elLoading.dismiss();
                          if (data.result) {
                            this.showMessage('Prenotazione eliminata correttamente','toast');
                            //Torno indietro
                            this.onGoToBack();
                          }
                          else {
                            this.showMessage(data.message, 'alert');
                          }

                       })
                       .catch(error=>{
                          elLoading.dismiss();
                          this.showMessage(error);
                       })
    })
  }

  /**
   * Mostra un messaggio all'utente
   * @param message 
   * @param type 
   */
  showMessage(message:string, type:'alert'|'toast'='alert'){
    if (type=='alert'){
      this.startService.presentAlertMessage(message);
    }
    else if (type=='toast'){
      this.startService.presentToastMessage(message);
    }
  }

  //#endregion

}