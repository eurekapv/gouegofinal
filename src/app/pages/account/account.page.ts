import { Component, OnInit, OnDestroy } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { Subscription } from 'rxjs';
import { AlertController, NavController, ModalController } from '@ionic/angular';
import { Utente } from 'src/app/models/utente.model';
import { EditLoginPage } from './edit-login/edit-login.page';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { environment } from 'src/environments/environment';

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
  listenUserPicture: Subscription;

  

  //Source da applicare come foto profilo
  imgSrcProfilePic: string = '';
  pictureExist: boolean = false;

  //Versione applicativo
  codeVersion = '';

  constructor(private startSrv: StartService,
              private alertCtrl: AlertController,
              private navCtrl: NavController,
              private mdlController: ModalController
              
              ) { 

    this.docUtenteListen = this.startSrv.utente.subscribe(element => {
      this.docUtente = element;
    });

    //Ricavo la configurazione
    this.docConfigListen = this.startSrv.startConfig.subscribe(elConfig => {
      this.docConfig = elConfig;
    });

    //Ascolto le modifiche della foto profilo
    this.onListenUserPicture();

    //Richiedo la foto dell'utente
    this.requestPictureUtente();

    this.codeVersion = environment.version;

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

    if (this.listenUserPicture) {
      this.listenUserPicture.unsubscribe();
    }
  }

  /**
   * Ascolta i cambiamenti della foto profilo
   */
  onListenUserPicture() {
    this.listenUserPicture = this.startSrv.userPicture.subscribe(dataUrl => {
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
 * Richiede la foto dell'utente 
 *  
 */
requestPictureUtente() {

    //Non mi interessa controllare cosa ricevo perchè ho la subscribe
    this.startSrv.loadPictureUtente();

}


  /**
   * Effettuato il click sull'avatar
   */
  onClickAvatar() {
    //Cattura e salva l'immagine
    this.startSrv.takePictureUtente();
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

/**
 * Apertura della pagina per la cancellazione dell'Account
 */
openDeleteAccount() {

}


  //Apre il link relativo a AlchimistiLab
  openAlchimistiLink() {
    let myLink: string;
    
    myLink = environment.externalUrl.alchimistilab;
    
    if (myLink && myLink.length != 0) {
      this.startSrv.openLink(myLink);
    }

  }

}
