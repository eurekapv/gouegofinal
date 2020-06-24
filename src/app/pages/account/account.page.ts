import { Component, OnInit, OnDestroy } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { Subscription } from 'rxjs';
import { AlertController, NavController, ModalController } from '@ionic/angular';
import { Utente } from 'src/app/models/utente.model';
import { EditLoginPage } from './edit-login/edit-login.page';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { PhotoService, PhotoType } from 'src/app/services/photo.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit, OnDestroy {

  docUtente: Utente;
  docUtenteListen: Subscription;

  docConfig: StartConfiguration;
  docConfigListen: Subscription;

  constructor(private startSrv: StartService,
              private alertCtrl: AlertController,
              private navCtrl: NavController,
              private mdlController: ModalController,
              private photoService: PhotoService
              ) { 
    this.docUtenteListen = this.startSrv.utente.subscribe(element => {
      this.docUtente = element;
    });

    //Ricavo la configurazione
    this.docConfigListen = this.startSrv.startConfig.subscribe(elConfig => {
      this.docConfig = elConfig;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.docUtenteListen) {
      this.docUtenteListen.unsubscribe();
    }

    if (this.docConfigListen) {
      this.docConfigListen.unsubscribe();
    }
  }


  /**
   * Effettuato il click sull'avatar
   */
  onClickAvatar() {
    this.photoService.addNewToGallery(PhotoType.account);
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

/**
 * Apertura Modale di Cambio Password
 */
openChangePassword() {
  

  this.mdlController
    .create({
      component: EditLoginPage,
      componentProps: {
        'myUser': this.docUtente,
        'myUrlLogo': this.docConfig.getUrlIcon()
      }
    })
    .then(formModal => {
      formModal.present();

      /* Alla chiusura aggiorno le credenziali se necessario */
      formModal.onWillDismiss().then((objReceived:any) => {

        if (objReceived) {
          if (objReceived.data) {
            if (objReceived.data.action == 'update') {
    
              if (objReceived.data.pwd) {
                //Devo aggiornare il cookie con le credenziali
                let newPsw = objReceived.data.pwd;
                
                // MEMORIZZO LE CREDENZIALI PER UN SUCCESSIVO RECUPERO
                this.startSrv.saveStorageUtente(this.docUtente.WEBLOGIN,newPsw);
              }
    
            }
          }
        }
      });
    })
}

}
