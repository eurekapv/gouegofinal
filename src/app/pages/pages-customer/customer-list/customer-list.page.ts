import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ButtonCard } from 'src/app/models/zsupport/buttoncard.model';
import { GeneratorQrcode } from 'src/app/models/imdb/generator-qrcode.model';
import { Utente } from 'src/app/models/utente/utente.model';
import { SettoreQrCode } from 'src/app/models/zsupport/valuelist.model';
import { StartService } from 'src/app/services/start.service';
import { QrCodeScannerComponent } from 'src/app/shared/components/qr-code-scanner/qr-code-scanner.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.page.html',
  styleUrls: ['./customer-list.page.scss'],
})
export class CustomerListPage implements OnInit {

  loadingComplete: boolean = true;
  listUtenti: Utente[] = [];
  numRequestUtentiTop = 10;
  filterKeywords: string = '';
  objEvent: any; //Evento Refresher o Ion InfiniteScroll

  helpCard: ButtonCard = new ButtonCard();
  noResultCard: ButtonCard = new ButtonCard();


  isSearching: boolean = false; // ✅ Aggiungi questa riga

  platformDesktop = false;

  constructor(private navController: NavController,
              private startService: StartService,
              private modalController: ModalController) { 

                this.createCardInfo();

                //Controllo se sono in versione Desktop
                this.platformDesktop = this.startService.isDesktop;
            }

  ngOnInit() {
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

  //#region INTERFACE

  /**
   * Crea due card da mostrare quando a) non ci sono risultati b) non ho inserito nulla
   */
  createCardInfo(): void {
    this.helpCard = new ButtonCard();
    this.helpCard.title = 'Inizia la ricerca'
    this.helpCard.subtitle = 'Inserisci una parte del nominativo del cliente per effettuare la ricerca';
    this.helpCard.nameicon = 'language-outline';
    this.helpCard.sloticon = 'start';

    this.noResultCard = new ButtonCard();
    this.noResultCard.title = 'Nessun cliente';
    this.noResultCard.subtitle = 'Non ho trovato nessun cliente con il testo inserito';
    this.noResultCard.nameicon = 'people-circle-outline';
    this.noResultCard.sloticon = 'start'

  }

  /**
   * Click per la lettura di un QrCode Cliente
   */
  onClickQrCode() {
    if (!this.platformDesktop) {
      //Apro la modale per lo scanner
      this.modalController.create({
        component: QrCodeScannerComponent,
        
      })
      .then(elModal => {
        elModal.present();
        return elModal.onDidDismiss();
      })
      .then(objReturn => {

        if (objReturn && objReturn.data) {

          if (objReturn.data.qrcodeData && objReturn.data.qrcodeData.length != 0) {

            //Eseguo il redirect con il QrCode
            this.redirectWithQrCode(objReturn.data.qrcodeData);
            
          }
        }
      })
    }
  }

    /**
   * Porta la navigazione alla pagina corretta
   * @param qrCodeData 
   */
    redirectWithQrCode(qrCodeData: string): void {

      let objQrCode: GeneratorQrcode;
      let flagDecode = false;

      if (qrCodeData && qrCodeData.length != 0) {
        
        //Controlliamo il QrCode
        objQrCode =  new GeneratorQrcode();
        objQrCode.qrCode = qrCodeData;
        flagDecode = objQrCode.splitQrCode();

        //Sembra una decodifica corretta per un Badge Utente
        if (flagDecode && objQrCode.tipo == SettoreQrCode.qrCodeUtente) {
          this.goToDetailCustomer(objQrCode.keyOne);
        }
        else {
          this.startService.presentAlertMessage('QrCode non conforme');
        }
        
      }
    }

  /**
   * Va alla pagina con i dettagli del cliente
   * @param idCustomer Cliente di riferimento
   */
  goToDetailCustomer(idCustomer: string) {
    let pathNavigate = [];
    
    if (idCustomer && idCustomer.length != 0) {
      pathNavigate = this.startService.getUrlPageCustomer('detail',idCustomer);
      this.navController.navigateForward(pathNavigate);
    }
  }    
  //#endregion


  //#region GESTIONE INPUT E REQUEST DATI
  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.filterKeywords = query;
    this.requestList();
  }

   /**
   * Esecuzione del Refresh Dati
   * @param event 
   */
   doRefresh(event:any) {

      this.objEvent = event;
      this.requestList();
   }


  /**
   * Scroll della videata relativi agli Impegni Personali
   * @param ev 
   */
  onActivateInfiniteScrollUtenti(ev: any) {

    switch (this.numRequestUtentiTop) {
      case 10:
          this.numRequestUtentiTop = 50;
        break;
      case 50:
        this.numRequestUtentiTop = 100;
        break;
      case 100:
        this.numRequestUtentiTop = 0;
        break;
    
      default:
        break;
    }

    this.objEvent = ev;

    //Faccio la richiesta
    this.requestList();
  }   

/**
 * Effettua la ricerca dei dati
 */
requestList(): void {
  this.loadingComplete = false;

  // Posso fare la ricerca
  if (this.filterKeywords && this.filterKeywords.length >= 3) {
    
    // ✅ Mostra loading state
    this.isSearching = true;

    // Effettuo la richiesta
    this.startService.requestListUtentiBy(this.filterKeywords, this.numRequestUtentiTop)
      .then(listReceived => {
        // ✅ Nascondi loading
        this.isSearching = false;
        
        // Gestisco altri eventi
        this.onAfterRequest();

        // Dati presenti
        this.loadingComplete = true;
        this.listUtenti = listReceived;
      })
      .catch(error => {
        // ✅ Nascondi loading
        this.isSearching = false;
        
        // Gestisco altri eventi
        this.onAfterRequest();

        this.loadingComplete = true;
        this.startService.presentAlertMessage(error);
      })
  }
  else {
    this.loadingComplete = true;
    this.listUtenti = [];
    this.onAfterRequest();
  }
}  

   /**
    * Effettua la ricerca dei dati
    */
   requestListOld(): void {

    this.loadingComplete = false;

    //Posso fare la ricerca
    if (this.filterKeywords && this.filterKeywords.length >= 3) {
      
      this.startService.showLoadingMessage('Ricerca in corso')
                       .then(elLoading => { 

                        elLoading.present();

                        //Effettuo la richiesta
                         this.startService.requestListUtentiBy(this.filterKeywords, this.numRequestUtentiTop)
                                          .then(listReceived => {

                                            //Chiudo il loading
                                            elLoading.dismiss();
                                            //Gestisco altri eventi
                                            this.onAfterRequest();

                                            //Dati presenti
                                            this.loadingComplete = true;
                                            this.listUtenti = listReceived;

                                         })
                                         .catch(error => {

                                            //Chiudo il loading
                                            elLoading.dismiss();
                                            //Gestisco altri eventi
                                            this.onAfterRequest();

                                            this.loadingComplete = true;
                                            this.startService.presentAlertMessage(error);
                                          })
                       })
    }
    else {
      this.loadingComplete = true;
      this.listUtenti = [];
      this.onAfterRequest();
    }
   }

   /**
    * Spegne eventuali eventi presenti
    */
   onAfterRequest(): void {
    if (this.objEvent && this.objEvent.target) {
        this.objEvent.target.complete();
    }
   }

   /**
    * Click sull'elemento
    */
   onClickItem(item: Utente): void {
    let path = [];

    if (item) {
      path = this.startService.getUrlPageCustomer('detail',item.ID);
      this.navController.navigateForward(path);
    }
   }

  //#endregion
}
