import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Utente } from '../../../models/utente.model';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Subscription } from 'rxjs';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  docUtente = new Utente();
  form: FormGroup;
  startConfig: StartConfiguration;
  startConfigListen: Subscription;
  pageVersione = 1; //VERSIONE DI LOGIN DA MOSTRARE

  /*PROPRIETA' VERSIONE 2 */
  public backgroundImage = 'assets/img/sport5.png';
  /* ******************** */

  constructor(private startService: StartService) { 

    this.startConfigListen = this.startService.startConfig.subscribe(element => {
      this.startConfig = element;
    });

  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      username: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      password: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  onClickLogin()
  {
    if (!this.form.valid)
    {
      return
    }
    else
    {
      //per ora inserisco solo i dati in "docUtente", poi bisognerà integrare la procedura di login vera e propria
      this.docUtente.WEBLOGIN=this.form.value.username;
      this.docUtente.INPUTPASSWORD=this.form.value.password;
      console.log(this.docUtente.WEBLOGIN);
      console.log(this.docUtente.INPUTPASSWORD);

    }

  }

  goToRegistrazione() {
    
  }



}
