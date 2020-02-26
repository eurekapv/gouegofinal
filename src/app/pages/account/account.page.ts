import { Component, OnInit } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { Subscription } from 'rxjs';
import { AlertController, NavController, ModalController } from '@ionic/angular';
import { Utente } from 'src/app/models/utente.model';
import { EditLoginPage } from './edit-login/edit-login.page';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  docUtente: Utente;
  docUtenteListen: Subscription;

  constructor(private startSrv: StartService,
              private alertCtrl: AlertController,
              private navCtrl: NavController,
              private mdlController: ModalController) { 
    this.docUtenteListen = this.startSrv.utente.subscribe(element => {
      this.docUtente = element;
    });
  }

  ngOnInit() {
  }

  // Chiedo se vuole veramente uscire
  requestLogout() {
    this.alertCtrl
      .create({
        header: 'Vuoi disconnetterti ?',
        subHeader: 'Potrai sempre rieseguire il login',
        buttons: [{
          text: 'Si',
          handler: () => {
            // Che faccio se mi disconnetto

            //Segnalo che esco
            this.startSrv.logOffAccount();

            //Chiudo la pagina e torno alla Home
            this.navCtrl.navigateBack(['/']);
          }
        },
        {
          text: 'No',
          role: 'cancel'
        }]
      })
      .then(elAlert => {
        elAlert.present();
      })
  }

  async takePicture()
{
  //const picture=await Camera
}

openChangePassword() {
  this.mdlController
    .create({
      component: EditLoginPage,
      componentProps: {
        'myUser': this.docUtente
      }
    })
    .then(formModal => {
      formModal.present();

      /* Alla chiusura aggiorno le credenziali se necessario */
      formModal.onWillDismiss().then((objReceived:any) => {
        
      });
    })
}

}
