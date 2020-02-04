import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AccountService } from '../../../services/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  form: FormGroup;

  

  constructor(
    
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController, 
    private accountService: AccountService,
    private navCtrl: NavController) { }

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
            .subscribe(dataResult => {
                // E' arrivato questo
                console.log(dataResult);

                //Chiudo lo Spinner
                element.dismiss();

                // E' Arrivata una risposta
                if (dataResult.RESULT === 0) {
                  this.showMessage(dataResult.MESSAGE);
                }
                else {
                  //resetto la form
                  this.form.reset();

                  // In teoria accesso avvenuto correttamente
                  //Nel Messaggio ci sono le informazioni account
                  //this.accountService.receiveAccount(dataResult.MESSAGE);
                  
                  //Chiudo la pagina e torno indietro
                  this.navCtrl.navigateBack(['/']);
                }


            })
        })




    }

  }

  goToRegistrazione() {
    
  }


  async showMessage(myMessage: string) {
    const toast = await this.toastCtrl
      .create({
        message: myMessage,
        duration: 3000
      });

      toast.present();
  }

}
