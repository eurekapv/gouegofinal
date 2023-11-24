import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertButton, ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Utente } from 'src/app/models/utente/utente.model';
import { StartService } from 'src/app/services/start.service';
import { UserUpdatePassword } from '../../pages-profile/authorization-account/user-update-password/user-update-password.page';
import { Gruppo } from 'src/app/models/struttura/gruppo.model';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-tab-profile',
  templateUrl: './tab-profile.page.html',
  styleUrls: ['./tab-profile.page.scss'],
})
export class TabProfilePage implements OnInit, OnDestroy {

  constructor(private startService: StartService,
              private modalController: ModalController,
              private navController: NavController) { 
      //Array di immagini da mostrare in assenza di login
      this.setSpecialPicture();
  }

  developerMode = !environment.production; 

  specialPicture: string[]; //Immagini mostrate nella card di registrazione

  //Path foto profilo
  pathUtentePic: string = '';
  subPathUtentePic: Subscription;

  //Identificativo Utente Loggato
  flagUserLogged: boolean = false;
  subFlagUserLogged: Subscription;

  //Utente Loggato
  utenteDoc: Utente;
  subUtenteDoc: Subscription;
  qrCodeDataUser:string = '';

  gruppoDoc: Gruppo;
  flagEnableRegistrazioni: boolean = true;
  numVersion = environment.version;

  /* Proprietà GET */
  get pictureExist():boolean {
    let flag = false;
    if (this.pathUtentePic && this.pathUtentePic.length != 0) {
      flag = true;
    }

    return flag;
  }



  
  ngOnInit(): void {
    this.onListenUtente();

    //Recupero il gruupo
    this.gruppoDoc = this.startService.actualStartConfig.gruppo;

    //Controllo se posso effettuare registrazioni
    if (this.gruppoDoc.APPFLAGREGISTRAZIONE) {
      this.flagEnableRegistrazioni = true;
    }
    else {
      this.flagEnableRegistrazioni = false;
    }

  }

  ngOnDestroy(): void {
    this.onUnscribeAll();
  }

  /**
   * Metto in ascolto delle modifiche dell'utente
   */
  onListenUtente(): void {

    //Sottoscrivo all'ascolto dell'Account
    this.subUtenteDoc = this.startService.activeUtenteDoc$
            .subscribe(element => {
              //Recupero utente
                this.utenteDoc = element;

                if (this.utenteDoc) {
                  this.qrCodeDataUser = this.utenteDoc.getQrCode();
                }
                else {
                  this.qrCodeDataUser = '';
                }
            });    

    //Sottoscrivo all'ascolto di un utente loggato
    this.subFlagUserLogged = this.startService.flagUtenteIsLoggato$
          .subscribe(element => {
              //Recupero l'utente
              this.flagUserLogged = element;    
          });

    //Sottoscrivo alla ricezione della foto
    this.subPathUtentePic = this.startService.utenteImmagine$
        .subscribe(dataUrl => {
            this.pathUtentePic = dataUrl;
    });
    
    //Effettuo la richiesta della foto profilo
    this.startService.loadPictureUtente();

  }

  /**
   * Tolgo la sottoscrizione a tutto
   */
  onUnscribeAll(): void {
    if (this.subFlagUserLogged) {
      this.subFlagUserLogged.unsubscribe();
    }

    if (this.subUtenteDoc) {
      this.subUtenteDoc.unsubscribe();
    }

    if (this.subPathUtentePic) {
      this.subPathUtentePic.unsubscribe();
    }    
  }

  /**
   * Crea l'array con l'elenco delle foto da mostrare
   */
  setSpecialPicture() {
    let numImages = 3;
    let nameFile = '';

    this.specialPicture = [];

   for (let index = 1; index < numImages; index++) {
      nameFile = `assets/profile/prof_special_${index}.png`;
      this.specialPicture.push(nameFile);
   }
   
  }

  /* Metodi Gestione Utente */

    /**
   * Effettuato il click sull'avatar
   */
  onClickAvatar() {
    //Cattura e salva l'immagine
    this.startService.takePictureUtente();
  }

/**
 * Apertura Modale di Cambio Password
 */
onClickChangePassword() {
  
  //Apro in versione modale la pagina di edit login
  this.modalController
    .create({
      component: UserUpdatePassword,
      cssClass: 'modal-xl-class',
      componentProps: {
        'myUser': this.utenteDoc,
        'myUrlLogo': ''
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
                this.startService.saveUserCredential(this.utenteDoc.WEBLOGIN,newPsw);
              }
    
            }
          }
        }
      });
    })
}

/**
 * Passo alla registrazione dell'utente
 */
onClickRegistrati():void {
  this.startService.openFormRegistration();
}

/**
 * Apertura form per effettuare la login
 */
onClickAccedi(): void {

  this.startService.openFormLogin();

}

/**
 * Vuole vedere solo il Badge
 */
onClickBadge(): void {
  let navPath = ['/','appstart-home','tab-profile', 'badge-account'];

  this.navController.navigateForward(navPath);
  
  
}

// Chiedo se vuole veramente uscire
requestLogout() {
  let listButtons: AlertButton[] = [];

  //Preparo i pulsanti
  listButtons.push({text:'Si, procedi', handler: ()=> {this.startService.userLogoff(); }})
  listButtons.push({text:'No, aspetta', role: 'cancel'});

  //Presento un alerto per la richiesta di logoff
  this.startService.presentAlertMessage('Vuoi disconnetterti dal tuo profilo ?',
                                        'Logout', 
                                        listButtons);

}

/**
 * Vado alla pagina developer
 */
onClickDeveloperMode(): void {
  let navPath = ['/','appstart-home','tab-profile', 'developer-page'];

  this.navController.navigateForward(navPath);
  
  
}

}
