import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Utente } from '../../../models/utente.model';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Subscription } from 'rxjs';
import { StartService } from 'src/app/services/start.service';
import { LoadingController } from '@ionic/angular';
import { AccountService } from 'src/app/services/account.service';

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

  constructor(private startService: StartService, 
    private loadingCtrl: LoadingController, 
    private accountService: AccountService) { 


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


  /** Usata per effettuare il login  */
  onClickLogin()
  {
    if (!this.form.valid)
    {
      return
    }
    else
    {
    
      this.loadingCtrl
        .create({
          message: 'Controllo credenziali'
        })
        .then(element => {

          //Creo il loading
          element.present();

          this.accountService
            .requestAuthorization(this.form.value.username, this.form.value.password)
            .subscribe(result => {
                //Chiudo lo Spinner
                element.dismiss();

                //Chiudo la login
                console.log(result);

                //resetto la form
                this.form.reset();

            })
        })




    }

  }

  goToRegistrazione() {
    
  }



}
