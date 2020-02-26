import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Utente } from 'src/app/models/utente.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-login',
  templateUrl: './edit-login.page.html',
  styleUrls: ['./edit-login.page.scss'],
})
export class EditLoginPage implements OnInit {

  //docUtente:Account=new Account;
  @Input() myUser: Utente;

  form: FormGroup;


  constructor(private mdlController: ModalController) {
  }
  
  ngOnInit() {
    this.createFormGroup();
  }

  /**
   * Chiusura Videata senza Conferma
   */
  onCancel() {

    this.mdlController
        .dismiss({action:'none'});
  }


  createFormGroup()
  {
    this.form = new FormGroup({
      oldPsw: new FormControl(null,{
        updateOn: 'change',
        validators:[Validators.required]
      }),
      newPsw1: new FormControl(null,{
        updateOn: 'change',
        validators:[Validators.required]
      }),
      newPsw2: new FormControl(null,{
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

  showPswMessage()
  {
    if (this.form.value.newPsw1!=this.form.value.newPsw2)
    {
      return true;
    }
    else 
    {
      return false
    }
  }

  onSubmit()
  {
    if (this.form.valid)
     {
      
        //this.docUtente.INPUTPASSWORD=this.form.value.newPsw1;
      
        //faccio richiesta di cambio psw
      
     }
  }
  

}
