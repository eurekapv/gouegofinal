import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { ItemCalendario } from 'src/app/models/itemCalendario.model';
import { OccupazioneCampi } from 'src/app/models/occupazionecampi.model';
import { StartService } from 'src/app/services/start.service';
import { FilterCustodePage } from './filter-custode/filter-custode.page';
import { SettoreAttivita } from 'src/app/models/valuelist.model';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Subscription } from 'rxjs';
import { Location } from 'src/app/models/location.model';
import { ActionSheetOptions, ActionSheetButton } from '@ionic/core';

@Component({
  selector: 'app-agenda-custode',
  templateUrl: './agenda-custode.page.html',
  styleUrls: ['./agenda-custode.page.scss'],
})
export class AgendaCustodePage implements OnInit, OnDestroy {

  listOccupazioni: OccupazioneCampi[] = [];
  myIsDesktop: boolean;
  filter:OccupazioneCampi;
  listenAreaSelected: Subscription;
  

  selectedIsoDate: string;

  labelAllLocations: string;
  labelLocation: string;

  listLocations: Location[] = [];

  constructor(
    private barcodeScanner: BarcodeScanner,
    private loadingController: LoadingController,
    private startService: StartService,
    private toastController: ToastController,
    private alertController: AlertController,
    private actionSheeetController: ActionSheetController,
    private modalController: ModalController,
    private navController: NavController,
    
  ) { 
    //Filtro iniziale
    this.filter = new OccupazioneCampi(true);
    this.filter.IDAREA = this.startService.areaSelectedValue.ID;
    this.filter.DATAINIZIO = new Date();
    this.selectedIsoDate = this.filter.DATAINIZIO.toISOString();
    this.myIsDesktop = this.startService.isDesktop;

    //Ascolto i cambiamenti dell'area
    this.onListenAreaChange();
    
  }

  ngOnInit() {

    this.requestOccupazioni();
  }

  ngOnDestroy() {
    if (this.listenAreaSelected) {
      this.listenAreaSelected.unsubscribe();
    }
  }


  /**
   * Recupero Area
   */
  onListenAreaChange() {
    //Recupero le informazioni sull'area
    this.listenAreaSelected = this.startService.areaSelected.subscribe(elArea => {

      if (elArea) {
        this.labelAllLocations = "Locations di " + elArea.DENOMINAZIONE;
      }
      else {
        this.labelAllLocations = "Tutte le Locations"
      }

      //Preparo la lista location
      this.requestListLocation(elArea.ID);
    })
  }


  /**
   * Imposta la label per Item Location
   */
  setLabelLocation() {
    let myLocation: Location;

    if (this.filter && this.filter.IDLOCATION && this.filter.IDLOCATION.length != 0) {

      myLocation = this.listLocations.find(elLocation => {
        return elLocation.ID == this.filter.IDLOCATION;
      });
    }

    if (myLocation) {
      this.labelLocation = myLocation.DENOMINAZIONE;
    }
    else {
      this.labelLocation = this.labelAllLocations;
    }
  }

  /**
   * Evento per la scelta di una nuova location
   * @param idLocation Nuova Location selezionata
   */
  onChangeLocation(idLocation:string) {

    if (this.filter)  {
      this.filter.IDLOCATION = idLocation;
      this.setLabelLocation();
      this.requestOccupazioni();
    }
  }

  /**
   * Recupero elenco locations
   * @param idArea idArea riferimento
   */
  requestListLocation(idArea: string) {

    this.startService.newRequestLocation(idArea)
                    .then(collLocation => {
                      //Location recuperate
                      this.listLocations = collLocation;
                      //Preparo la labelLocation
                      this.setLabelLocation();
                    });

  }



  /**
   * Richiedo nuovamente le occupazioni campi sulla base del filtro
   * @param event evento che ha scatenato la richiesta (usato per dismettere il refresher se presente)
   */
  requestOccupazioni(event?){
    this.loadingController.create({
      message: 'Caricamento...',
      spinner: 'circular'
    })
    .then((elLoading) => {
      if (!event){
        elLoading.present();
      }

      return this.startService.requestOccupazioniByFilter(this.filter);
    })
    .then(listOccupazioni => {
      this.listOccupazioni = listOccupazioni;
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
      console.log(error);
      this.showMessage('Errore di connessione');

      
    })
  }
 

  /**
 * Nella pagina Impegni è stato modificata il filtro Data 
 * per la ricerca
 */
    onChangeFilterDateImpegni(){    

    this.filter.DATAINIZIO = (new Date(this.selectedIsoDate)); 
    this.requestOccupazioni();
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

  showFilter(){
    this.modalController.create({

      component:FilterCustodePage,
      componentProps: {
        filter: this.filter
      }

    })
    .then(elModal => {
      //modale creata
      elModal.present();
      return elModal.onDidDismiss();
    })
    .then(params => {
      //modale dismessa

      let newFilter: OccupazioneCampi = params.data;
      if(newFilter){
        this.filter = newFilter;
        this.selectedIsoDate = this.filter.DATAINIZIO.toISOString();
        this.requestOccupazioni();
        this.setLabelLocation();
      }
      else{
        console.log('Non ci sono dati');
      }

    })
  }

  scanQr(){
    if(!this.startService.isDesktop){
      this.barcodeScanner
      .scan()
      
      .then(data => {
        let myId = data.text;

        this.goToReservationDetail(myId);
      })

      .catch(error => {
        console.log(error);
        this.showMessage('Errore nella lettura del codice')

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
        console.log(error);
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
    
    //bottone "tutte le locations"
    let button: ActionSheetButton = {
      text: this.labelAllLocations,
      handler: () => {
        this.onChangeLocation(null);
      }
    }
    
    arButtons.push(button);


    //bottoni locations
    this.listLocations.forEach(elLocation => {
      let buttonLoc: ActionSheetButton = {
        text: elLocation.DENOMINAZIONE,
        handler: () => {
          this.onChangeLocation(elLocation.ID);
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
      header: 'Scegli la location',
      buttons: arButtons,
    };


    

    return params;
  }

  
}
