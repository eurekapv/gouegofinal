import { Component, OnInit, Input } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, AbstractControl } from '@angular/forms';
import { Utente } from 'src/app/models/utente.model';
import { ModalController, IonInput, LoadingController, ToastController } from '@ionic/angular';
import { StartService } from 'src/app/services/start.service';




@Component({
  selector: 'app-edit-login',
  templateUrl: './edit-login.page.html',
  styleUrls: ['./edit-login.page.scss'],
})
export class EditLoginPage implements OnInit {

  
  @Input() myUser: Utente;
  @Input() myUrlLogo: string; //Path Logo da utilizzare
  
  form: UntypedFormGroup;
  showActual = false;
  showNew = false;
  showNewRetype = false;




  constructor(private modalController: ModalController,
              private startService: StartService,
              private loadingController: LoadingController,
              private toastCtrl: ToastController) {
    
  }
  
  ngOnInit() {
    this.createFormGroup();
  }

  /**
   * Chiusura Videata senza Conferma
   */
  onCancel() {

    this.modalController
        .dismiss({action:'none'});
  }


  createFormGroup()
  {
    this.form = new UntypedFormGroup({
      oldPsw: new UntypedFormControl(null,{
        updateOn: 'change',
        validators:[Validators.required]
      }),
      newPsw1: new UntypedFormControl(null,{
        updateOn: 'change',
        validators:[Validators.required]
      }),
      newPsw2: new UntypedFormControl(null,{
        updateOn: 'change',
        validators:[Validators.required]
      })
    },
    this.pswValidator);
  }

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
    if (this.form.value.newPsw1 && this.form.value.newPsw2 ) {
      if (this.form.value.newPsw1 !== this.form.value.newPsw2) {
        message = 'Nuova password non coincide'
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


  onSubmit()
  {
    let newPsw = '';
    let oldPsw = '';

    if (this.form.valid)
     {
       
        newPsw = this.form.value.newPsw1;
        oldPsw = this.form.value.oldPsw; 

        this.loadingController.create ({
          message: 'Aggiornamento in corso'
        })
        .then(elLoading => {
          //Visualizzo il loading
          elLoading.present();

          //Ora faccio la richiesta al server
          this.startService
            .requestChangePassword(oldPsw, newPsw)
            .subscribe(elResult => {

              let myMessage = 'Errore aggiornamento';
              if (elResult.MESSAGE) {
                myMessage = elResult.MESSAGE;
              }

              //Termino il loading
              elLoading.dismiss();

              //Mi preparo un Toast Controller
              this.toastCtrl.create({
                message: myMessage,
                duration: 2000
              })
              .then(elToast => {
                elToast.present();
              });

              //Se è andato bene chiudo la Modal e torno di aggiornare il cookie con la nuova password
              if (elResult.RESULT) {

                this.modalController.dismiss(
                  {action:'update', pwd: newPsw}
                );
              };
            });

        });
     }
  }
}
