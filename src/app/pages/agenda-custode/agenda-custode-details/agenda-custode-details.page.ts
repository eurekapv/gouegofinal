import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { LogApp } from 'src/app/models/log.model';

import { OccupazioneCampi } from 'src/app/models/occupazionecampi.model';

import { Prenotazione } from 'src/app/models/prenotazione.model';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';
import { StartService } from 'src/app/services/start.service';


@Component({
  selector: 'app-agenda-custode-details',
  templateUrl: './agenda-custode-details.page.html',
  styleUrls: ['./agenda-custode-details.page.scss'],
})
export class AgendaCustodeDetailsPage implements OnInit, OnDestroy {

  selectedIdPianificazione: string;
  myOccupazione: OccupazioneCampi;
  myPrenotazione: Prenotazione;
  myPianificazione: PrenotazionePianificazione;

  subParaMap: Subscription;

  _showInputPrezzo: boolean = false;

  incassoAttuale: number;

  myToday: Date = new Date();

  constructor(
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private startService: StartService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController
  ) { 
    this.myPianificazione = new PrenotazionePianificazione();
    this.myPrenotazione = new Prenotazione();
    
  }

  ngOnInit() {
    this.subParaMap = this.activatedRoute.paramMap.subscribe(route => {
      if (route.has('idPianificazione')){
        this.selectedIdPianificazione = route.get('idPianificazione');
        this.updateOccupazione(this.selectedIdPianificazione);
      }
      else{
        this.navController.pop();
      }
    })
  }


  updateOccupazione(id: string){

    this.loadingController.create({
      message: 'Caricamento',
      spinner: 'circular',
      backdropDismiss: true
    })
    .then(elLoading => {
      return elLoading.present();
    })
    .then(() => {
      return this.startService.requestOccupazioneById(id, true);
    })
    .then(elOccupazione => {
      this.loadingController.dismiss();
      this.myOccupazione = elOccupazione;
      //@ts-ignore
      this.myPrenotazione = elOccupazione.getDocInRepository(elOccupazione.IDREF);
      this.myPianificazione = this.myPrenotazione.getPianificazione(this.myOccupazione.ID);
      this.myPianificazione._INCASSOCUSTODE = this.myPianificazione.RESIDUO;


      
      
    })

    .catch(error => {
      this.loadingController.dismiss();
      LogApp.consoleLog(error,'error');
      this.navController.pop();

    })
  }

  onClickConferma(){

    let alertOptions = {
      header: 'Sei sicuro',
      message: 'Una volta confermato l\'importo, non potrai più modificarlo',
      buttons: [
        {
          text: 'Conferma',
          handler: ()=> {this.onSubmit()}
        },
        {
          text: 'Annulla',
          role: 'cancel'
        }
      ]
    }
    this.alertController.create(alertOptions)
    .then(elAlert => {
      elAlert.present()
    })

    
  }

  onSubmit(){
    if(this.canEditData()){
      //TODO inviare il docpianificazione a gouego
      
      this.navController.pop();

    }
  }
  
  
  
  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subParaMap.unsubscribe();
  }

  getIcon (idSport){
    return this.startService.getSportIcon(idSport);
  }

  onChangedNumPlayer(nPlayer: number)
  {
    //Memorizzo il numero Partecipanti
    this.myPianificazione.NUMPARTECIPANTI=nPlayer;


    // this.calcolaTotale();
  }

 

  showInputPrezzo(){
    this._showInputPrezzo = true;
  }

  dismissInputPrezzo(value:number){
    if(value){
      this.myPianificazione._INCASSOCUSTODE = value;
    }

    this._showInputPrezzo = false;
  }

  canEditData(){
    if(this.myPrenotazione.DATA  <= this.myToday){
      return true;
    }
    else{
      return false;
    }
  }

}
