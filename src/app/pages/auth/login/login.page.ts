import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Utente } from '../../../models/utente.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  docUtente: Utente;
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      username: new FormControl({
        updateOn: 'blur',
        Validators: [Validators.required]
      }),
      password: new FormControl({
        updateOn: 'blur',
        Validators: [Validators.required]
      })
    });
  }



}
