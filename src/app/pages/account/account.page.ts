import { Component, OnInit, OnDestroy } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { Subscription } from 'rxjs';
import { AlertController, NavController, ModalController } from '@ionic/angular';
import { Utente } from 'src/app/models/utente.model';
import { EditLoginPage } from './edit-login/edit-login.page';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { PhotoService, PhotoType, Photo } from 'src/app/services/photo.service';

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

  

  //Source da applicare come foto profilo
  imgSrcProfilePic: string = '';
  pictureExist: boolean = false;

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

    //Richiedo la foto dell'utente
    this.syncPictureUtente();


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
 * Richiede la foto dell'utente e imposta la proprietà
 *  imgSrcProfilePic
 */
syncPictureUtente() {

    this.startSrv.loadPictureUtente()
                .then(dataUrl => {
                  if (dataUrl && dataUrl.length != 0) {
                    this.imgSrcProfilePic = dataUrl;
                    this.pictureExist = true;
                  }
                  else {
                    this.imgSrcProfilePic = '';
                    this.pictureExist = false;
                  }
                })
}







  /**
   * Effettuato il click sull'avatar
   */
  onClickAvatar() {
    //Cattura e salva l'immagine
    this.startSrv.takePictureUtente()
                .then(() => {
                  //Recupero l'immagine e la imposto nella pagina
                  this.syncPictureUtente();
                })
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
            this.startSrv.userLogoff();

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



/**
 * Apertura Modale di Cambio Password
 */
openChangePassword() {
  

  this.mdlController
    .create({
      component: EditLoginPage,
      componentProps: {
        'myUser': this.docUtente,
        'myUrlLogo': this.docConfig.getUrlLogo()
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
