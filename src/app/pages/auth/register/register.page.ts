import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/models/utente.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  docUtente= new Utente;
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm()
  {
    this.form=new FormGroup({
      name: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      surname: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      psw: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      telephone: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    })
  }

  onClickRegister()
  {
    if (!this.form.valid)
    {
      return;
    }
    else{
      this.docUtente.NOME=this.form.value.name;
      this.docUtente.COGNOME=this.form.value.surname;
      this.docUtente.EMAIL=this.form.value.email;
      this.docUtente.INPUTPASSWORD=this.form.value.psw;
      this.docUtente.MOBILENUMBER=this.form.value.telephone;

      console.log(this.docUtente);
    }
  }

}
