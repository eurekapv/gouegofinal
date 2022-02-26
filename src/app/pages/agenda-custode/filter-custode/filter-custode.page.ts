import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, LoadingController, ModalController, ToastController, } from '@ionic/angular';
import { OccupazioneCampi } from 'src/app/models/occupazionecampi.model';
import { Location } from 'src/app/models/location.model';
import { Giorni, ValueList } from 'src/app/models/valuelist.model';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-filter-custode',
  templateUrl: './filter-custode.page.html',
  styleUrls: ['./filter-custode.page.scss'],
})
export class FilterCustodePage implements OnInit {

  @Input() filter: OccupazioneCampi;

  selectedIsoDate: string;
  selectedLocation: Location = undefined;


  today: Date;
  listLocations: Location[] = [];



  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
    private actionSheetController: ActionSheetController,
    private toastController: ToastController,
    private startService: StartService
  ) { 
    this.today = new Date();
  }
  
  ngOnInit() {
    
    this.selectedIsoDate = this.filter.DATAINIZIO.toISOString();

    //recupero le locations
    this.requestLocations();
  }



  requestLocations() {
    this.loadingController.create({
      message: 'Caricamento',
      spinner: 'circular',
      backdropDismiss: true
    })
      .then(elLoading => {
        elLoading.present();
        return this.startService.newRequestLocation(this.filter.IDAREA);
      })
      .then(listLocations => {
        this.loadingController.dismiss();
        this.listLocations = listLocations;
      })
      .catch(error => {
        this.loadingController.dismiss();
        this.showMessage('Errore di connessione');
        console.log(error);
        this.dismiss();
      });
  }

  dismiss(){
    this.modalController.dismiss();

  }

  submit(){
    if(this.canSubmit){
     
      this.filter.DATAINIZIO = new Date(this.selectedIsoDate);
      this.modalController.dismiss(this.filter);

      if(this.selectedLocation && this.selectedLocation.DENOMINAZIONE && this.selectedLocation.DENOMINAZIONE.length > 0){
        this.filter.IDLOCATION = this.selectedLocation.ID;
      }
      else{
        this.filter.IDLOCATION = undefined;
      }
    }
  }

  get canSubmit(){
    let newDate = new Date(this.selectedIsoDate);
    if(newDate){
      return true;
    }
    else{
      return false;
    }
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


  presentActionSheet(){
    this.actionSheetController.create(this.getActionSheetLocationParams())
    .then(elActionSheet => {
      elActionSheet.present();
    })
  }


  getActionSheetLocationParams(){

    let arButtons = [];
    
    //bottone "tutte le locations"
    let button = new Object();
    button['text'] = 'Tutte';
    button['handler'] = () => {this.selectedLocation = undefined};
    button['icon'] = 'location-outline';
    arButtons.push(button);


    //bottoni locations
    this.listLocations.forEach(elLocation => {
      button = new Object; 
      button['text'] = elLocation.DENOMINAZIONE;
      button['handler'] = () => {this.selectedLocation = elLocation};
      button['icon'] = 'location-outline';
      arButtons.push(button);
    })

    //bottone "annulla"
    button = new Object();
    button['text'] = 'Annulla';
    button['role'] = 'cancel';
    button['icon'] = 'close';
    arButtons.push(button)



    let params = {
      header: 'Scegli la location',
      buttons: arButtons,
    };


    

    return params;
  }

  get labelSelectedLocation(): string{
    let label = '';

    if(this.selectedLocation && this.selectedLocation.DENOMINAZIONE && this.selectedLocation.DENOMINAZIONE.length > 0){
      label = this.selectedLocation.DENOMINAZIONE;
    }
    else{
      label = 'Tutte le locations';
    }
    return label
  }


}
