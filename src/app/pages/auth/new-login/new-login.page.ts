import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ModalController, LoadingController, ToastController, NavController } from '@ionic/angular';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Subscription } from 'rxjs';
import { StartService } from 'src/app/services/start.service';
import { Utente } from 'src/app/models/utente.model';


@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.page.html',
  styleUrls: ['./new-login.page.scss'],
})
export class NewLoginPage implements OnInit {

  //per utilizzare l'enum nell'html
  pageState: typeof PageState=PageState;
  //variabile che indica lo stato della pagina
  stato:PageState;

  //varibili formGroup (per usare i reactive forms)
  formRegister: FormGroup;
  formConfirm: FormGroup;
  formLogin: FormGroup;

  //Dati
  startConfig:StartConfiguration
  startListen: Subscription;
  docUtente= new Utente;

  //#region questi servono per accedere ai corrispettivi elementi in HTML
  @ViewChild('c1',{static:false}) c1;
  @ViewChild('c2',{static:false}) c2;
  @ViewChild('c3',{static:false}) c3;
  @ViewChild('c4',{static:false}) c4;
  @ViewChild('c5',{static:false}) c5;

  //#endregion


  constructor(
    private modalCtrl:ModalController,
    private startService:StartService,
    private loadingCtrl:LoadingController,
    private toastCtrl:ToastController,
    private navCtrl:NavController
  ) {
    this.stato=this.pageState.LOGIN;
    this.startListen=startService.startConfig.subscribe(data=>{
      this.startConfig=data;
    });
   }

  ngOnInit() {
    this.createLoginForm();
    this.createRegisterForm();
    this.createConfirmForm();
    
  }

  closeModal(){
    //this.modalCtrl.dismiss();
    this.navCtrl.navigateRoot('/')
  }

  /**
   * evento scatenato quando l'utente clicca "registrati" 
   * sulla prima pagina di registrazione
   */
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
      this.docUtente.WEBPASSWORD=this.formRegister.value.psw;
      this.docUtente.MOBILENUMBER=this.formRegister.value.telephone;
      this.docUtente.CODICEFISCALE=this.formRegister.value.codFisc;
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

  /**
   * evento scatenato quando l'utente clicca sul pulsante di validazione
   * del numero di telefono
   */
  onClickRegister()
  {
    if(this.formConfirm.valid)
    {
      //TODO qui manca la richiesta di registrazione a gouego
      this.stato=PageState.WELCOME;
    }
  }

  /**
   * procedura che sposta il focus sulla casella di input successiva
   * @param evento parametri $event dell'eveno "ion-input", necessari a identificare
   * in quale casella c'è stato l'input
   */
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

  /**
   * Evento scatenato al click del login
   */
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
                  
                  //Chiudo la modale
                  this.closeModal();
                }
            })
        })
    }
  }

  /**
   * Procedura che visualizza un toast con il messaggio passato
   * @param myMessage Il messaggio da visualizzare
   */
  async showMessage(myMessage: string) {
    const toast = await this.toastCtrl
      .create({
        message: myMessage,
        duration: 3000
      });

      toast.present();
  }

  /**
   * cambia lo stato della pagina (login, registrazione, ecc...)
   * @param stato il nuovo stato da impostare
   */
  changePageState(stato:PageState)
  {
    this.stato=stato;
  }
  
  /**
   * evento scatenato quando l'utente tappa su "reinvia codice"
   */
  onClickReinvia(){
    //TODO manca la richiesta per ricevere un nuovo codice
  }

  /**
   * evento scatenato quando l'utente clicca su "verifica in seguito"
   */
  onClickVerificaInSeguito(){
    this.stato=this.pageState.WELCOME;
  }

  /**
   * evento scatenato quando l'utente clicca su inizia
   */
  onClickInizia(){
    //TODO da decidere cosa fare
    this.modalCtrl.dismiss();
  }

   

//#region funzioni per la creazioe dei form
  createRegisterForm(){
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
      codFisc: new FormControl(null,{
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
  }
  createLoginForm(){
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
  createConfirmForm(){
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
//#endregion

}

enum PageState
{
  REGISTRATION =10,
  CONFIRM = 20,
  WELCOME = 30,
  LOGIN = 40
}

