import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { FormGroup, FormControl, Validators, AbstractControl  } from '@angular/forms';
import { StartService } from 'src/app/services/start.service';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Subscription } from 'rxjs';
import { LoadingController, ToastController, NavController, ModalController } from '@ionic/angular';

//TODO: componente dichiarato momentaneamente nell'home.module per evitare errori, da rimuovere
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  
  iconColor = 'primary';

  @ViewChild('c1',{static:false}) c1;
  @ViewChild('c2',{static:false}) c2;
  @ViewChild('c3',{static:false}) c3;
  @ViewChild('c4',{static:false}) c4;
  @ViewChild('c5',{static:false}) c5;

  @Input() onModal=false;

  //per utilizzare l'enum nell'html
  pageState: typeof PageState=PageState;

  formRegister: FormGroup;
  formConfirm: FormGroup;
  formLogin: FormGroup;

  startConfig:StartConfiguration
  startListen: Subscription;
  stato: PageState;  
  docUtente= new Account;
  

  constructor(
    
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController, 
    private navCtrl: NavController, 
    private startService: StartService,
    private modalCtrl: ModalController) {
      this.stato=PageState.REGISTRATION;
      this.startListen = this.startService.startConfig.subscribe( element => {
        this.startConfig = element;
      });
     }

  ngOnInit() {
    console.log(this.onModal);
    this.createLoginForm();
    this.createRegisterForm();
  }

  createLoginForm() {
    this.formLogin = new FormGroup({
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

  createRegisterForm()
  {
    //form di registrazione
    this.formRegister=new FormGroup({
      name: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      surname: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      email: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.email]
      }),
      psw: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      verifyPsw: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),      
      telephone: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      chkPrivacy: new FormControl(false, {
        updateOn: 'change',
        validators: [Validators.requiredTrue]
      }),
      chkNewsletter: new FormControl(true, {
        updateOn: 'change',
        validators: []
      })      
    }, this.pswValidator);

    //form di conferma codice
    this.formConfirm=new FormGroup({
      c1: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.maxLength(1),Validators.minLength(1)]
      }),
      c2: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.maxLength(1),Validators.minLength(1)]
      }),
      c3: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.maxLength(1),Validators.minLength(1)]
      }),
      c4: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.maxLength(1),Validators.minLength(1)]
      }),
      c5: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.maxLength(1),Validators.minLength(1)]
      })
    })

  }

  pswValidator(c:AbstractControl):{invalid:boolean}
  {
      if ((c.get('verifyPsw').value==c.get('psw').value))
      {
        return
      }
      else
      {
        return {invalid: true};
      }
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


            this.stato=PageState.CONFIRM;
        })
    }
  }

  onClickRegister()
  {
    if(this.formConfirm.valid)
    {
      //qui manca la richiesta di registrazione a gouego
      this.stato=PageState.WELCOME;
    }
  }

  changeFocus(evento)
  {
    let id=evento['target']['id'];
  
      if (id==1)
      this.c2.setFocus();
      else if (id==2)
      this.c3.setFocus();
      else if (id==3)
      this.c4.setFocus();
      else if (id==4)
      this.c5.setFocus();      
    
  }

  



  /** Usata per effettuare il login  */
  onClickLogin()
  {
    if (!this.formLogin.valid)
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
            .requestAuthorization(this.formLogin.value.username, this.formLogin.value.password)
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
                  this.startService.saveStorageUtente(this.formLogin.value.username,this.formLogin.value.password);

                  //Resetto la form
                  this.formLogin.reset();
                  
                  //Chiudo la modale o torno alla home
                  if (this.onModal)
                  {
                    this.closeModal();
                  }
                  else{
                    this.navCtrl.navigateBack(['/']);
                  }
                }


            })
        })




    }

  }

  goToRegistrazione() {
    this.stato=this.pageState.REGISTRATION;
    
  }

  goToLogin()
  {
    this.stato=this.pageState.LOGIN;
  }


  async showMessage(myMessage: string) {
    const toast = await this.toastCtrl
      .create({
        message: myMessage,
        duration: 3000
      });

      toast.present();
  }

  onClickReinvia()
  {

  } 

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

  onClickVerificaInSeguito(){
   this.stato=this.pageState.WELCOME;
  }

  onClickInizia(){
     //se non siamo nella modale, vado alla home
     if (!this.onModal){
      this.navCtrl.navigateRoot('/');
    }
    //invece, se siamo in modale, la chiudo
    else
    {
      this.modalCtrl.dismiss();
    }
  }

}


enum PageState
{
  REGISTRATION =10,
  CONFIRM = 20,
  WELCOME = 30,
  LOGIN = 40
}


