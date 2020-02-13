import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-edit-login',
  templateUrl: './edit-login.page.html',
  styleUrls: ['./edit-login.page.scss'],
})
export class EditLoginPage implements OnInit {

  docUtente:Account
  form: FormGroup


  constructor() {
   }

  ngOnInit() {
    this.createFormGroup();

  }

  createFormGroup()
  {
    this.form= new FormGroup({
      oldPsw: new FormControl(null,{
        updateOn: 'blur',
        validators:[Validators.required]
      }),
      newPsw1: new FormControl(null,{
        updateOn: 'blur',
        validators:[Validators.required]
      }),
      newPsw2: new FormControl(null,{
        updateOn: 'blur',
        validators:[Validators.required]
      })
    },
    this.pswValidator);
  }

  pswValidator(c:AbstractControl):{invalid:boolean}
  {
      console.log(c.get('newPsw1').value)
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
      this.docUtente.INPUTPASSWORD=this.form.value.newPsw1;
      //faccio richiesta di cambio psw
     }
  }
  

}
