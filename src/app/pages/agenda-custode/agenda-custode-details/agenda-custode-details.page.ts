import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController, NavParams, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { OccupazioneCampi } from 'src/app/models/occupazionecampi.model';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-agenda-custode-details',
  templateUrl: './agenda-custode-details.page.html',
  styleUrls: ['./agenda-custode-details.page.scss'],
})
export class AgendaCustodeDetailsPage implements OnInit {

  selectedIdPianificazione: string;
  myOccupazione: OccupazioneCampi;
  myPrenotazione: Prenotazione;
  myPianificazione: PrenotazionePianificazione;

  subParaMap: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private startService: StartService,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) { }

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
      console.log(this.myOccupazione);
      console.log(this.myPrenotazione);
      console.log(this.myPianificazione);
      
    })

    .catch(error => {
      this.loadingController.dismiss();
      console.log(error)
      this.navController.pop();

    })
  }

  onSubmit(){
    //TODO

    this.navController.pop();
  }
  
  
  
  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subParaMap.unsubscribe();
  }

}
