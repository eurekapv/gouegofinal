import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Area } from 'src/app/models/area.model';
import { TipoTessera } from 'src/app/models/tipo-tessera';
import { Utente } from 'src/app/models/utente.model';
import { StartService } from 'src/app/services/start.service';
import { IonAccordionGroup, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Tesseramento } from 'src/app/models/tesseramento';
import { TipoTesseraTemplate } from 'src/app/models/tipo-tessera-template';
import { LogApp } from 'src/app/models/log.model';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-club-cards',
  templateUrl: './club-cards.page.html',
  styleUrls: ['./club-cards.page.scss'],
})
export class ClubCardsPage implements OnInit {

  isDesktop:boolean;
  actualUtente: Utente;
  utenteListener: Subscription;
  listTessere: TipoTessera[];
  selectedArea: Area = new Area();

  listTipoTessere$: Observable<TipoTessera[]>;
  listTipoTessere: TipoTessera[];
  listTessereUtente$: Observable<Tesseramento[]>;
  listTessereUtente: Tesseramento[];

  refreshEvent: any; //Evento del refresher
  loadingElement:  HTMLIonLoadingElement;

  @ViewChild('accordiontessere', { static: true }) accordionGroup: IonAccordionGroup;

  
  constructor(
        private fileService: FileService,
        private loadingController: LoadingController,
        private navController: NavController,
        private startService: StartService) { 

          //Mi metto in ascolto delle variazioni per List Tipo Tessere
          this.onWaitingListTipoTessere();

          //Mi metto in ascolto delle variazioni per List Tessere Utente
          this.onWaitingListTessereUtente();

        }
  
  ngOnInit() {

    this.isDesktop=this.startService.isDesktop;
    this.selectedArea = this.startService.areaSelectedValue;
    this.actualUtente = this.startService.actualUtente;

    //Senza l'utente scappo via
    if (!this.actualUtente) {
      this.navController.navigateRoot('/home');
    }
    else {
      //Richiedo tutti i dati che mi servono
      this.requestAllData();
    }    
  }

  /**
   * Elemento attaccao al refresh in interfaccia
   * @param event 
   */
  doRefresh(event: any){
    this.requestAllData(event);
  }


  /**
   * Effettua la richiesta dei dati
   */
  requestAllData(event?: any) {

    this.refreshEvent = event;

    //Richiesta effettuata dal Refresher
    if (event) {

      //Chideo la lista della tipologia tessere
      this.startService.requestListTipoTessere()
                       .then(() => this.startService.requestListTessereUtente())
                       .then(() => {
                          //Chiamata effettuata
                       })
                       .catch(error => {
                        //Mostro l'errore ricevuto
                         this.startService.presentToastMessage(error);

                        //In caso di errore Se avessi il refresh aperto
                        if (this.refreshEvent) {
                            this.refreshEvent.target.complete();
                        }
                      })
    }
    else {
      //Preparo un Loading Controller
      this.loadingController.create()
                  .then(elLoading => {
                        this.loadingElement = elLoading;
                        //Mostro il Loading
                        this.loadingElement.present();

                        //Effettuo la richiesta
                        this.startService.requestListTipoTessere()
                            .then(() => this.startService.requestListTessereUtente())
                            .then(() => {
    
                            })
                            .catch(error => {

                            //Mostro l'errore ricevuto
                              this.startService.presentToastMessage(error);
    
                              //Se avessi aperto il loading
                              if (this.loadingElement) {
                                this.loadingElement.dismiss();
                              }
                          })
                  })
    }
  }

  /**
   * Imposta l'ascolto della lista delle Tipologie Tessere previste
   */
  onWaitingListTipoTessere() {
    this.listTipoTessere$ = this.startService.listTipoTessere$;
    //Lista Tipologie Tessere arrivata
    this.listTipoTessere$.subscribe(incomingList => {

      //Nuova lista arrivata
      this.listTipoTessere = incomingList;

      //Espando l'accordion
      this.expandAccordion();

      //Se avessi il refresh aperto
      if (this.refreshEvent) {
        this.refreshEvent.target.complete();
      }

      //Se avessi aperto il loading
      if (this.loadingElement) {
        this.loadingElement.dismiss();
      }
    });
  }

  /**
   * In ascolto del cambiamento delle Tessere Utente
   */
  onWaitingListTessereUtente() {

    this.listTessereUtente$ = this.startService.listTessereUtente$;

    //Lista Tipologie Tessere arrivata
    this.listTessereUtente$.subscribe(incomingList => {
      //Nuova lista arrivata  
      this.listTessereUtente = incomingList;

    });
  } 
  
  
  /**
   * Filtra e torna un Array con le tessere del tipo passato
   * @param idTipo 
   */
  filterListTessereUtente(idTipo: string): Tesseramento[] {
    let resultList: Tesseramento[] = [];

    if (this.listTessereUtente) {

      resultList = this.listTessereUtente.filter(itemElement => {
        return itemElement.IDTIPOTESSERA == idTipo
      });
    }

    return resultList;
  }

  /**
   * Controlla la presenza di tessere della tipologia
   * @param idTipo 
   */
  existListTessereUtente(idTipo: string): boolean {
    let idxPos = -1;

    if (this.listTessereUtente) {

      idxPos =  this.listTessereUtente.findIndex(itemElement => {
        return itemElement.IDTIPOTESSERA == idTipo
      });
    }

    return idxPos != -1;
  }  

  /**
   * Ritorna TRUE FALSE ad indicare se necessario mostrare un qrcode
   * @param myTessera Tessera di riferimento
   */
  flagShowQRCode(myTessera: Tesseramento): boolean {
    let flag: boolean = false;
    if (myTessera && myTessera.CODICE && myTessera.CODICE.length != 0) {
      flag = true;
    }

    return flag;
  }



  /**
   * Effettua l'apertura dell'Accordion
   */
  expandAccordion() {
    const nativeEl = this.accordionGroup;
    let arItems: string[] = [];
    
    if (this.listTipoTessere) {
      arItems = this.listTipoTessere.map(item => item.ID);
      
      if (nativeEl) {
        nativeEl.value = arItems;
      }
    }
  }

  /**
   * Eseguo il download del template specificato
   * @param template 
   */
  onDownloadTemplate(template: TipoTesseraTemplate) {
    //creo il loading e lo presento
    if(template && template.FILENAMEESTENSIONE && template.FILENAMEESTENSIONE.length > 0){

      this.loadingController.create({
        message: 'Caricamento',
        spinner: 'circular',
        backdropDismiss: true
      }).then(elLoading => {

          elLoading.present();
  
        //ora faccio la get del file
        this.startService.requestDocumento(template.FILENAMEESTENSIONE)
        .then(blob => {
          //E' andato tutto bene, ho il blob
          elLoading.dismiss();
          
          if(blob){
            //Effettuo l'apertura del file ricevuto
            this.fileService.open(blob)
          }
          else{
            this.startService.showAlertMessage('File non visualizzabile');
          }
        })
        .catch(error => {

          elLoading.dismiss();
          //qualcosa non ha funzionato
          LogApp.consoleLog(error,'error');
          this.startService.showAlertMessage('Impossibile scaricare il file');
        })
  
      })
    }
    else{
      this.startService.showAlertMessage('Errore, file non presente in archivio');
    }
  }

}
