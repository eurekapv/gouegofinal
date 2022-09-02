import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { ItemCalendario } from 'src/app/models/itemCalendario.model';
import { OccupazioneCampi } from 'src/app/models/occupazionecampi.model';
import { StartService } from 'src/app/services/start.service';
import { SettoreAttivita } from 'src/app/models/valuelist.model';
import { Subscription } from 'rxjs';
import { Location } from 'src/app/models/location.model';
import { ActionSheetOptions, ActionSheetButton } from '@ionic/core';
import { Area } from 'src/app/models/area.model';
import { LogApp } from 'src/app/models/log.model';
import { QrCodeScannerComponent } from 'src/app/shared/components/qr-code-scanner/qr-code-scanner.component';

@Component({
  selector: 'app-agenda-custode',
  templateUrl: './agenda-custode.page.html',
  styleUrls: ['./agenda-custode.page.scss'],
})
export class AgendaCustodePage implements OnDestroy {

  listOccupazioni: OccupazioneCampi[] = [];
  myIsDesktop: boolean;
  lastFilter:OccupazioneCampi;

  listenListAree: Subscription;

  //Elenco delle Aree
  listAree: Area[] = [];
  //Elenco delle Location legate all'area
  listLocations: Location[] = [];
  //Area Selected
  areaSelected: Area;
  //Eventuale Location Selected (NULL = Tutte)
  locationSelected: Location; 
  //Etichetta mostrata
  labelLocation: string;

  //Data selezionata
  selectedDate: Date = new Date();
    
  labelAllLocations: string;

  showCanvasNoData: boolean = false;


  constructor(
    private loadingController: LoadingController,
    private startService: StartService,
    private toastController: ToastController,
    private alertController: AlertController,
    private actionSheeetController: ActionSheetController,
    private navController: NavController,
    private mdlController: ModalController
    
  ) { 

    this.myIsDesktop = this.startService.isDesktop;

    //Recupero l'elenco delle Aree
    this.onListenListAree();
    
    //Recupero l'area selezionata esterna
    this.requestInitialArea();

    
  }



  ngOnDestroy() {


    //Tolgo la sottoscrizione all'elenco delle aree
    if (this.listenListAree) {
      this.listenListAree.unsubscribe();
    }    
  }

  /**
   * Recupero l'elenco delle Aree disponibili
   */
  onListenListAree() {

    //Chiedo la lista delle Aree presenti
    this.listenListAree = this.startService.listAree.subscribe(myListAree => {
        //Attribuisco la lista delle aree
        this.listAree = myListAree
    });

  }

  /**
   * Selezione di una nuova Area Operativa
   */
  onChangeAreaSelected(ev?: any) {

    if (ev && ev.detail && ev.detail.value) {
      this.areaSelected = ev.detail.value;
    }

    LogApp.consoleLog(this.areaSelected);

    //Riazzero la location
    this.onChangeLocationSelected(null);


    //Devo richiedere la Lista delle Location
    this.prepareLocationList(this.areaSelected.ID);


  }

  /**
   * Cambia la Location selezionata
   * Se viene passato null si intende Tutte le locations
   * E' stato introdotto il parametro delay per ritardare la ricehista delle 
   * occupazioni alla chiusura dell'ActionSheet (provocava un brutto effetto UX)
   * @param myLocation NULL oppure docLocation 
   * @param delayMs ritardo in millisecondi prima di richiedere le occupazioni
   */
  onChangeLocationSelected(myLocation?:Location, delayMs:number = 0) {

    this.locationSelected = myLocation;

    if (this.locationSelected) {
      this.labelLocation = this.locationSelected.DENOMINAZIONE
    }
    else {
      this.labelLocation = 'Tutte le locations';
    }

    if (delayMs > 0) {
      setTimeout(() => this.requestOccupazioni(), delayMs);
    }
    else {
      //Richiedo subito le occupazioni
      this.requestOccupazioni();
    }

  }


  /**
   * Recupero l'area iniziale
   */
  requestInitialArea() {

    //Prelevo l'area iniziale
    this.areaSelected = this.startService.areaSelectedValue;
    this.onChangeAreaSelected();

  }

  
  /**
   * Prepara l'elenco delle Location da mostrare nell'action sheet
   * @param idArea idArea riferimento
   */
  prepareLocationList(idArea: string) {

    this.startService.newRequestLocation(idArea)
                    .then(collLocation => {
                      //Location recuperate
                      this.listLocations = collLocation;
                    });

  }



  /**
   * Richiedo nuovamente le occupazioni campi sulla base del filtro
   * @param event evento che ha scatenato la richiesta (usato per dismettere il refresher se presente)
   */
  requestOccupazioni(event?) {
    let myFilter = new OccupazioneCampi(true);
    
    if (this.areaSelected) {

      
      //Imposto i parametri di filtro
      myFilter.IDAREA = this.areaSelected.ID;

      if (this.locationSelected) {
        myFilter.IDLOCATION = this.locationSelected.ID;
      }
      
      myFilter.DATAINIZIO = this.selectedDate;

      //Creo un Loading controller
      this.loadingController.create({
        message: 'Caricamento...',
        spinner: 'circular'
      })
      .then((elLoading) => {

        if (!event){
          elLoading.present();
        }

        //Richiedo le Occupazioni con il filtro
        return this.startService.requestOccupazioniByFilter(myFilter);
      })
      .then(myListOccupazioni => {
        
        //Ecco le occupazioni trovate
        this.listOccupazioni = myListOccupazioni;

        if (this.listOccupazioni.length == 0) {

          this.showCanvasNoData = true;

        }
        else {

          this.showCanvasNoData = false;

        }

        this.loadingController.dismiss();

        if(event){
          event.target.complete();
        }
      } )
      .catch(error => {

        this.loadingController.dismiss();

        if(event){
          event.target.complete();
        }

        this.startService.presentToastMessage('Errore di connessione');

        LogApp.consoleLog(error,'error');
        
      })
    }
    

  }
 



/**
   * Visualizza un messaggio
   */
 showMessage(messaggio: string, type?:'toast'|'alert'){

  if (type == 'alert') {

    let alertOptions = {
      message: messaggio,
      buttons: ['OK']
    }


    this.alertController.create(alertOptions)
          .then(elAlert => {
                  elAlert.present();
          });

  }
  else {

    this.toastController.create({
      message: messaggio,
      duration: 3000
    })
    .then(elToast => {
      elToast.present();
    })

  }
}


  onClickOccupazione(elOccupazione: OccupazioneCampi){
    this.goToReservationDetail(null, elOccupazione);
  }

  getItemCalendario(elOccupazione: OccupazioneCampi){
    return ItemCalendario.getParamsOccupazioneCampo(elOccupazione);
  }



  /**
   * Effettuo la scanzione del QRCode
   */
  scanQr() {

    //Non sono in versione Desktop
    if(!this.startService.isDesktop) {

      //Mostro per effettuare la scansione
      this.mdlController.create({
        component: QrCodeScannerComponent,
        swipeToClose: true
      })
      .then(elModal => {
        elModal.present();
  
        return elModal.onDidDismiss();
      })
      .then(objReturn => {
  
        //Posso provare a portarlo alla stanza
        if (objReturn?.data?.qrcodeData?.length != 0 ) {
  
          let txtBarcode = objReturn.data.qrcodeData;

          if (txtBarcode && txtBarcode.length != 0) {
            //Provo ad andare alla prenotazione
            this.goToReservationDetail(txtBarcode);
          }
  
        }
      })
    }

  }



  /**
   * Naviga alla pagina di dettaglio dell'occupazione specificata (SOLO PER PRENOTAZIONI)
   * @param idOccupazione id del docOccupazione
   * @param docOccupazione 
   */
  goToReservationDetail(idOccupazione: string = undefined, docOccupazione: OccupazioneCampi = undefined){

    //se mi passano il doc, basta controllare il tipo e posso passare direttamente
    if(docOccupazione){
      if(docOccupazione.TIPO == SettoreAttivita.settorePrenotazione){
        this.navController.navigateForward(`/agenda-custode/${docOccupazione.ID}`);
      }
      else{
        this.showMessage('Puoi visualizzare solo il dettaglio delle prenotazioni')
      }
    }

    //se mi danno solo l'id, devo recuperare l'occupazione, controllare il tipo, e solo a quel punto posso spostarmi
    else if(idOccupazione && idOccupazione.length > 0){
      this.startService.requestOccupazioneById(idOccupazione)
      .then(elOccupazione => {
        if(elOccupazione){
          //ho trovato un'occupazione, l'id era valido
          if(elOccupazione.TIPO == SettoreAttivita.settorePrenotazione){
            //è una prenotazione, procedo
            this.navController.navigateForward(`/agenda-custode/${elOccupazione.ID}`);
          }
          else{
            //non è una prenotazione, non la mostro
            this.showMessage('Puoi visualizzare solo il dettaglio delle prenotazioni')
          }
        }
        else{
          //non ho trovato nessuna occupazione, il codice non era valido
          this.showMessage('Codice non valido');
        }
      })
      .catch(error => {
        this.showMessage('Errore di connessione');        
        LogApp.consoleLog(error,'error');
      })
    }

  }


  //#region ACTION SHEET CAMBIO LOCATION 
  
  /**
   * Crea un Action Sheet con l'elenco delle location
   */
  onChooseLocation(){
    let params: ActionSheetOptions;

    params = this.getActionSheetLocationParams();

    this.actionSheeetController.create(params)
                              .then(elActionSheet => {
                                elActionSheet.present();
                              });
  }


  /**
   * 
   * @returns Parametri per ActionSheet
   */
  getActionSheetLocationParams(): ActionSheetOptions {

    let arButtons: ActionSheetButton[] = [];
    
    //Bottone per tutte le locations
    let allLocationsButton: ActionSheetButton = {
      text: 'Tutte le locations',
      handler: () => {
        //Imposto la location a NULL
        this.onChangeLocationSelected(null, 500);
      }
    }
    
    //Aggiungo all'Array
    arButtons.push(allLocationsButton);


    //Creo gli altri Bottonie con le Locations
    this.listLocations.forEach(elLocation => {
      let buttonLoc: ActionSheetButton = {
        text: elLocation.DENOMINAZIONE,
        handler: () => {
          this.onChangeLocationSelected(elLocation, 500);
        }        
      }

      arButtons.push(buttonLoc);
    })

    //bottone "annulla"
    let buttonCancel: ActionSheetButton = {
      text: 'Annulla',
      role: 'cancel',
      icon: 'close'
    };
    arButtons.push(buttonCancel);

    let params: ActionSheetOptions = {
      buttons: arButtons,
    };


    

    return params;
  }

  
}
