import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { StartService } from '../../../services/start.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  form: FormGroup;
  iconColor = 'primary';
  
  

  constructor(
    
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController, 
    private navCtrl: NavController, 
    private startService: StartService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      username: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      password: new FormControl(null, {
        updateOn: 'change',
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

          // Chiamo il Servizio per eseguire l'autorizzazione
          this.startService
            .requestAuthorization(this.form.value.username, this.form.value.password)
            .subscribe(dataResult => {

                //Chiudo lo Spinner
                element.dismiss();

                // E' Arrivata una risposta NEGATIVA
                if (dataResult.RESULT === 0) {
                  this.showMessage(dataResult.MESSAGE);
                }
                else {
                  //LOGIN ACCETTATO
                  
                  // MEMORIZZO LE CREDENZIALI PER UN SUCCESSIVO RECUPERO
                  this.startService.saveStorageUtente(this.form.value.username,this.form.value.password);

                  //Resetto la form
                  this.form.reset();
                  
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
