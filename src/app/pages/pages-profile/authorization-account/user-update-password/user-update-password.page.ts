import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Validators, AbstractControl, FormGroup, FormControl } from '@angular/forms';
import { Utente } from 'src/app/models/utente.model';
import { ModalController, IonInput, LoadingController, ToastController } from '@ionic/angular';
import { StartService } from 'src/app/services/start.service';
import { Subscription } from 'rxjs';
import { PostResponse } from 'src/app/library/models/postResult.model';




@Component({
  selector: 'app-user-update-password',
  templateUrl: './user-update-password.page.html',
  styleUrls: ['./user-update-password.page.scss'],
})
export class UserUpdatePassword implements OnInit, OnDestroy {

  
  @Input() myUser: Utente;
  @Input() myUrlLogo: string; //Path Logo da utilizzare
  
  formPagePrimary: FormGroup;
  showActual = false;
  showNew = false;
  showNewRetype = false;

  srcImage: string = `assets/profile/user-login-1.png`;
  informationText: string = '';
  actualUser: Utente;
  subActualUser: Subscription;



  constructor(private modalController: ModalController,
              private startService: StartService,
              private loadingController: LoadingController,
              private toastCtrl: ToastController) {
    
  }
  
  ngOnInit() {

    this.createFormPagePrimary();
    this.onListenUser();

    this.setImageLogin();
    this.setInformationText();

  }

  ngOnDestroy(): void {
    if (this.subActualUser) {
      this.subActualUser.unsubscribe();
    }
  }

  /**
   * Ricezione dell'utente attivo
   */
  onListenUser() {
    this.startService.activeUtenteDoc$.subscribe(elUser => {
        this.actualUser = elUser;
    })
  }

  /**
   * Imposta un messaggio informativo da mostrare
   */
  setInformationText() {
    let myText = '';

    myText = 'Inserire la password attualmente utilizzata e la nuova password desiderata'

    this.informationText = myText;
  }

  /**
   * Chiusura Videata senza Conferma
   */
  onCancel() {

    this.modalController
        .dismiss({action:'none'});
  }


  /**
   * Crea il form da mostrare nella pagina
   */
  createFormPagePrimary()
  {
    this.formPagePrimary = new FormGroup({
      oldPsw: new FormControl<string>(
          {
            value: '',
            disabled: false
          },
          {
            updateOn: 'change',
            validators:[Validators.required]
          }),
      newPsw1: new FormControl<string>(
          {
            value: '',
            disabled: false
          },
          {
            updateOn: 'change',
            validators:[Validators.required]
          }),
      newPsw2: new FormControl<string>(
        {
          value: '',
          disabled: false
        },
        {
            updateOn: 'change',
            validators:[Validators.required]
        })
    },
    this.pswValidator);
  }

  /**
   * Validazione Password
   * @param c 
   * @returns 
   */
  pswValidator(c:AbstractControl):{invalid:boolean}
  {

      if ((c.get('newPsw1').value==c.get('newPsw2').value))
      {
        return
      }
      else
      {
        return {invalid: true};
      }
  }


  invalidMessage() {
    let message = '';
    if (this.formPagePrimary.value.newPsw1 && this.formPagePrimary.value.newPsw2 ) {
      if (this.formPagePrimary.value.newPsw1 !== this.formPagePrimary.value.newPsw2) {
        message = 'Nuova password non coincide'
      }
      
    }

    return message;
  }


  /**
   * Switch della Type Password < - > Type Text
   * @param idElement 
   * @param elementDOM 
   */
  showHideInput(idElement:string, elementDOM: IonInput) {
    switch (idElement) {
      case 'oldpsw':
          this.showActual = !this.showActual;
          elementDOM.type = (this.showActual ? 'text':'password');
        break;
      case 'newpsw1':
          this.showNew = !this.showNew;
          elementDOM.type = (this.showNew ? 'text':'password');
        break;

      case 'newpsw2':
          this.showNewRetype = !this.showNewRetype;
          elementDOM.type = (this.showNewRetype ? 'text':'password');
        break;

      default:
        break;
    }

    
  }


  /**
   * Preparazione della richiesta per la modifica Password
   */
  onSubmit()
  {
    let newPsw = '';
    let oldPsw = '';
    let myMessage = '';

    if (this.actualUser) {

      if (this.formPagePrimary.valid)
       {
         
          newPsw = this.formPagePrimary.value.newPsw1;
          oldPsw = this.formPagePrimary.value.oldPsw; 
  
          this.loadingController.create ({
            message: 'Aggiornamento in corso'
          })
          .then(elLoading => {
            //Visualizzo il loading
            elLoading.present();
  
            //Ora faccio la richiesta al server
            this.startService.onRequestChangePassword(this.actualUser.ID, oldPsw, newPsw)
                            .then((resultOpe: PostResponse) => {

                              elLoading.dismiss();

                              if (resultOpe && resultOpe.result) {

                                //Chiudo la videata e poi mostro un messaggio
                                //e tento di aggiornare il cookie con la nuova password
                                this.modalController.dismiss(
                                  {action:'update', pwd: newPsw}
                                    )
                                    .then(isClosed => {
                                      if (isClosed) {

                                        //Operazione effettuata
                                        this.startService.presentAlertMessage('Password modificata con successo','Modifica');
                                      }
                                    });

                              }
                              else {
                                
                                myMessage = '<p>Spiacente,</p>';
                                myMessage += '<p>Si sono verificati errori</p>';
                                if (resultOpe && resultOpe.message && resultOpe.message.length != 0) {
                                  myMessage += `<p>${resultOpe.message}</p>`;
                                }

                                this.startService.presentAlertMessage(myMessage);
                              }

                            })
                            .catch(error => {
                                elLoading.dismiss();
                                this.startService.presentAlertMessage(error);
                            })

              });
  
        }
        else {
          myMessage = '<p>Compila tutti i campi richiesti</p>';
          this.startService.presentAlertMessage(myMessage);
        }
       
    }
    else {
      this.startService.presentAlertMessage('Non riesco a modificare la password','Operazione fallita');
    }
  }

    //#region INTERFACE METHOD
  
  /**
   * Prende un valore casuale tra 1 e 5 e ritorna l'immagine
   */
  setImageLogin() {
    let adesso = new Date().toISOString();
    //Prendo il 17 carattere
    //2023-09-01T08:45:43.731Z
    let imageNumber = 1;

    try {

      imageNumber = parseInt(adesso.substring(17,18));

    } catch (error) {

      imageNumber = 1;
    }

    this.srcImage = `assets/profile/user-login-${imageNumber}.png`;
  }

  //#endregion
}

