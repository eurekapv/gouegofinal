import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertButton, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Utente } from 'src/app/models/utente.model';
import { StartService } from 'src/app/services/start.service';
import { EditLoginPage } from '../../pages-profile/edit-login/edit-login.page';
import { UserLoginPage } from '../../pages-profile/authorization-account/user-login/user-login.page';

@Component({
  selector: 'app-tab-profile',
  templateUrl: './tab-profile.page.html',
  styleUrls: ['./tab-profile.page.scss'],
})
export class TabProfilePage implements OnInit, OnDestroy {

  constructor(private startService: StartService,
              private modalController: ModalController) { 
      //Array di immagini da mostrare in assenza di login
      this.setSpecialPicture();
  }

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
      component: EditLoginPage,
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

  //Apro in modale la form per la registrazione
  this.modalController.create({
    component: UserLoginPage,
    componentProps: {
      'startSection': 'register'
    }
  })
  .then(elModal => {
    elModal.present();
  })
}

/**
 * Apertura form per effettuare la login
 */
onClickAccedi(): void {

  this.startService.openFormLogin();

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

}
