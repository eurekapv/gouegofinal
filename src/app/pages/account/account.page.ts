import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/models/utente.model';
import { StartService } from 'src/app/services/start.service';
import { Subscription } from 'rxjs';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  docUtente: Utente;
  accountListen: Subscription;

  constructor(private startSrv: StartService,
              private alertCtrl: AlertController,
              private navCtrl: NavController) { 
    this.accountListen = this.startSrv.account.subscribe(element => {
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

}
