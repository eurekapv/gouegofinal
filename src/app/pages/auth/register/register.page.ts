import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { FormGroup, FormControl, Validators, AbstractControl  } from '@angular/forms';
import { StartService } from 'src/app/services/start.service';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Subscription } from 'rxjs';
import { LoadingController, ToastController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  @ViewChild('c1',{static:false}) c1;
  @ViewChild('c2',{static:false}) c2;
  @ViewChild('c3',{static:false}) c3;
  @ViewChild('c4',{static:false}) c4;
  @ViewChild('c5',{static:false}) c5;

  //per utilizzare l'enum nell'html
  pageState: typeof PageState=PageState;

  docUtente= new Account;
  formRegister: FormGroup;
  formConfirm: FormGroup;

  startConfig:StartConfiguration
  startListen: Subscription;
  stato: PageState;

  
  constructor(
    private startService: StartService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) { 

    this.startListen = this.startService.startConfig.subscribe( element => {
      this.startConfig = element;
    });
  }
  
  ngOnInit() {
    this.stato=PageState.REGISTRATION;
    this.createForm();
  }



  createForm()
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

}

enum PageState
{
  REGISTRATION =10,
  CONFIRM = 20,
  WELCOME = 30
}


