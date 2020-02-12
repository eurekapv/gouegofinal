import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/models/utente.model';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { StartService } from 'src/app/services/start.service';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Subscription } from 'rxjs';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  //per utilizzare l'enum nell'html
  pageState: typeof PageState=PageState;

  docUtente= new Utente;
  formRegister: FormGroup;
  formConfig: FormGroup;

  startConfig:StartConfiguration
  startListen: Subscription;
  stato: PageState;

  
  constructor(
    private startService: StartService,
    private loadingCtrl: LoadingController,
    private accountService: AccountService,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) { 

    this.startListen = this.startService.startConfig.subscribe( element => {
      this.startConfig = element;
    });
    
  }
  
  ngOnInit() {
    this.stato=PageState.CONFIRM;
    this.createForm();
  }



  createForm()
  {
    //form di registrazione
    this.formRegister=new FormGroup({
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

    //form di conferma codice
    this.formConfig=new FormGroup({
      c1: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      c2: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      c3: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      c4: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      c5: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    })

  }

  onClickProsegui()
  {
    if (!this.formRegister.valid)
    {
      return;
    }
    else{
      this.docUtente.NOME=this.formRegister.value.name;
      this.docUtente.COGNOME=this.formRegister.value.surname;
      this.docUtente.EMAIL=this.formRegister.value.email;
      this.docUtente.INPUTPASSWORD=this.formRegister.value.psw;
      this.docUtente.MOBILENUMBER=this.formRegister.value.telephone;

           
      this.loadingCtrl
        .create({
          message: 'Registrazione'
        })
        .then(element => {

          // //Creo il loading
          // element.present();

          // //qui andrà chiamato il servizio per effettuare la registrazione
          // this.accountService
          //   .requestAuthorization(this.form.value.username, this.form.value.password)
          //   .subscribe(dataResult => {

          //       //Chiudo lo Spinner
          //       element.dismiss();

          //       // E' Arrivata una risposta NEGATIVA
          //       if (dataResult.RESULT === 0) {
          //         this.showMessage(dataResult.MESSAGE);
          //       }
          //       else {
          //         //REGISTRAZIONE ACCETTATA
          //         //Resetto la form
          //         this.form.reset();
                  
          //       }
          //   })
            this.stato=PageState.CONFIRM;
        })
    }
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

enum PageState
{
  REGISTRATION =10,
  CONFIRM = 20
}
