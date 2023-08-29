import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, AbstractControl } from '@angular/forms';
import { StartService } from 'src/app/services/start.service';
import { IonInput, AlertButton, NavController } from '@ionic/angular';


@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.page.html',
  styleUrls: ['./delete-account.page.scss'],
})
export class DeleteAccountPage implements OnInit {

  retypePassword: string = '';
  form: UntypedFormGroup;
  showActual = false;
  showNew = false;
  showNewRetype = false;
  
  constructor(private startService: StartService,
              private navController: NavController,) { }

  ngOnInit() {
    this.createFormGroup();
  }

  /**
   * Ritorna un Array con il percorso di ritorno
   */
  get backPathArray():string[] {
    let retPath = ['/','appstart-home','tab-profile'];

    return retPath;
  }

  //Ritorna il Path Array Back in formato stringa concatenata
  get backButtonHref(): string {
    let myHref = '';
    myHref = this.backPathArray.join('/').substring(1);

    return myHref;
  }

  /**
   * Torno alla pagina del profilo
   */
  onGoToBack() {
    this.navController.navigateBack(this.backPathArray);
  }   

  
  /**
   * Creo la form con le due password
   */
  createFormGroup()
  {
    this.form = new UntypedFormGroup({
      actualPassword1: new UntypedFormControl(null,{
        updateOn: 'change',
        validators:[Validators.required]
      }),
      actualPassword2: new UntypedFormControl(null,{
        updateOn: 'change',
        validators:[Validators.required]
      })
    },
    this.pswValidator);
  }

  pswValidator(c:AbstractControl):{invalid:boolean}
  {

      if ((c.get('actualPassword1').value==c.get('actualPassword2').value))
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
    if (this.form.value.actualPassword1 && this.form.value.actualPassword2 ) {
      if (this.form.value.actualPassword1 !== this.form.value.actualPassword2) {
        message = 'attenzione le password non coincidono'
      }
      
    }

    return message;
  }


  showHideInput(idElement:string, elementDOM: IonInput) {
    switch (idElement) {
      case 'oldpsw':
          this.showActual = !this.showActual;
          elementDOM.type = (this.showActual ? 'text':'password');
        break;
      case 'actualPassword1':
          this.showNew = !this.showNew;
          elementDOM.type = (this.showNew ? 'text':'password');
        break;

      case 'actualPassword2':
          this.showNewRetype = !this.showNewRetype;
          elementDOM.type = (this.showNewRetype ? 'text':'password');
        break;

      default:
        break;
    }

    
  }

  /**
   * Chiede di nuovo all'utente se è sicuro della eliminazione del profilo
   */
  onClickElimina(): void {
    let myMessage = '';
    let myButtons: AlertButton[];

    myMessage = 'Sei sicuro di voler eliminare definitivamente il tuo profilo ?';
    myButtons = [
      {
        text:'No, aspetta', 
        role:'cancel'
      },
      {
        text: 'Si, elimina',
        role: 'confirm',
        handler: () => {
          this.requestDeletionProfile();
        }
      }
    ]
    //Mostro un alert e procedo con l'eliminazione
    this.startService.presentAlertMessage(myMessage, 'Eliminazione Profilo', myButtons);
  }

  /**
   * Procede con la cancellazione dell'Account
   */
  requestDeletionProfile(): void {
    let actualPassword = this.form.value.actualPassword1;
    let myMessage = '';

    myMessage = 'Attendere, richiesta in corso';

    this.startService.showLoadingMessage(myMessage)
                     .then(elLoading => {

                        //Mostro il loading
                        elLoading.present();

                        //Faccio la richiesta
                        this.startService.requestDeleteProfile(actualPassword)
                                        .then(myResponse => {
                                            //Spengo il loading
                                            elLoading.dismiss();

                                            //Cancellazione impedita
                                            if (myResponse.result == false) {
                                              this.startService.presentAlertMessage(myResponse.message, 'Eliminazione fallita');
                                            }
                                            else {
                                              //Preparo un messaggio di eliminazione
                                              this.deletionProfileFinalize();
                                            }

                                        })
                                        .catch(error => {
                                          //Spengo il loading
                                          elLoading.dismiss();

                                          this.startService.presentAlertMessage(error,'Eliminazione fallita');
                                        })
                     });
  }

  /**
   * Il profilo è stato cancellato, mostro un Alert Message e quando chiudo torno alla Home 
   */
  deletionProfileFinalize(): void {
    let myMessage = '';
    let myButtons: AlertButton[];

    myMessage = 'Ci spiace te ne sia andato, ' + '\n' + 'potrai tornare con noi quando lo desideri.'
    myButtons = [{
      text: 'Ok',
      role: ' confirm',
      handler: () => {
        this.onGoToBack();
      }
    }]

    //Mostro un Alert conclusivo
    this.startService.presentAlertMessage(myMessage, 'Profilo eliminato', myButtons)
  }



}
