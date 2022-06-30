import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Utente } from 'src/app/models/utente.model';
import { ValueList, Sesso } from 'src/app/models/valuelist.model';
import { StartService } from 'src/app/services/start.service';
import { Subscription } from 'rxjs';
import { NavController, ToastController, LoadingController, ModalController } from '@ionic/angular';
import { MyDateTime } from 'src/app/library/models/mydatetime.model';
import { VerifyPage } from 'src/app/pages/auth/verify/verify.page'
import { TipoVerificaAccount } from 'src/app/models/valuelist.model'
import { Gruppo } from 'src/app/models/gruppo.model';



@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
})
export class EditAccountPage implements OnInit, OnDestroy {

  form: FormGroup; 

  utente:Utente = new Utente;
  utenteListen: Subscription;

  listSesso: ValueList[]=[];
  showLoading: boolean;

  docGruppo: Gruppo = new Gruppo();
  today:string; //questo serve per impostare la data di nascita max ad oggi
  showCapNascita = false; //Nasconde il cap di nascita

  constructor(
      private startService : StartService,
      private navCtr: NavController,
      private toastCtr: ToastController,
      private loadingController: LoadingController,
      private modalController: ModalController
    ) {

      //Chiedo al servizio i dati dell'utente
      this.utenteListen = this.startService.utente.subscribe(data=>{
          
          //Recupero l'utente
          this.utente = data;

          if (this.utente.MOBILENUMBER == null)  {
            this.utente.MOBILENUMBER = '';
          }
          this.createForm();       

      });

      //Preparo un Array con le decodifiche del Sesso
      this.listSesso=ValueList.getArray(Sesso);


   }

  ngOnInit() {
    
    this.today=MyDateTime.formatDateISO(new Date);

    this.docGruppo = this.startService.actualStartConfig.gruppo;
    
  }

  ngOnDestroy() {
    if (this.utenteListen) {
      this.utenteListen.unsubscribe();
    }
  }

  /**
   * Creazione del form nella pagina
   */
  createForm()
  {
    let patternCodice = '^[A-Za-z]{6}[0-9]{2}[A-Za-z]{1}[0-9]{2}[A-Za-z]{1}[0-9]{3}[A-Za-z]{1}';
    

    this.form=new FormGroup({
      nome:new FormControl(this.utente.NOME, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      cognome:new FormControl(this.utente.COGNOME, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      sesso:new FormControl(this.utente.SESSO, {
        updateOn:'change',
        validators: []
      }),
      provNascita:new FormControl(this.utente.NATOPROV, {
        updateOn:'change',
        validators: []
      }),
      comNascita:new FormControl(this.utente.NATOA, {
        updateOn:'change',
        validators: []
      }),
      statoNascita:new FormControl(this.utente.NATOISOSTATO, {
        updateOn:'change',
        validators: []
      }),
      capNascita:new FormControl(this.utente.NATOCAP, {
        updateOn:'change',
        validators: []
      }),
      provResidenza:new FormControl(this.utente.PROVINCIA, {
        updateOn:'change',
        validators: []
      }),
      comResidenza:new FormControl(this.utente.COMUNE, {
        updateOn:'change',
        validators: []
      }),
      indResidenza:new FormControl(this.utente.INDIRIZZO, {
        updateOn:'change',
        validators: []
      }),
      capResidenza:new FormControl(this.utente.CAP, {
        updateOn:'change',
        validators: []
      }),
      statoResidenza:new FormControl(this.utente.ISOSTATO, {
        updateOn:'change',
        validators: []
      }),
      cf:new FormControl(this.utente.CODICEFISCALE, {
        updateOn:'change',
        validators: [Validators.pattern(patternCodice)]
      })
    })

    if(!this.docGruppo.needMobileVerify){

      //devo creare il campo mobile solo per mostrarlo
      let mobile = new FormControl(this.utente.MOBILENUMBER, {
        updateOn: 'change',
        validators: []
      })

      this.form.addControl('mobile', mobile)
    } 

    if(!this.docGruppo.needEmailVerify){
      //devo creare il campo tel
      let email = new FormControl(this.utente.EMAIL, {
        updateOn: 'change',
        validators: [Validators.email]
      })
      this.form.addControl('email', email)
    }
  }

  /**
   * Conferma della Form
   */
  onSubmit()
  {
    
    if (this.form.valid)
    {

      this.utente.NOME=this.form.value.nome;
      this.utente.COGNOME=this.form.value.cognome;
      this.utente.SESSO=this.form.value.sesso;
      this.utente.CODICEFISCALE=this.form.value.cf;

      this.utente.INDIRIZZO=this.form.value.indResidenza;
      this.utente.COMUNE=this.form.value.comResidenza;
      this.utente.CAP=this.form.value.capResidenza;
      this.utente.PROVINCIA=this.form.value.provResidenza;
      this.utente.ISOSTATO=this.form.value.statoResidenza;    

      this.utente.NATOA=this.form.value.comNascita;
      this.utente.NATOCAP=this.form.value.capNascita;
      this.utente.NATOPROV=this.form.value.provNascita;
      this.utente.NATOISOSTATO=this.form.value.statoNascita;
      
      //EMAIL E NUMERO DI TELEFONO LI MODIFICO SOLO SE NON DEVONO ESSERE VERIFICATI, ALTRIMENTI VERRA' CHIAMATA LA VIDEATA APPOSITA
      if(!this.docGruppo.needEmailVerify){
        this.utente.EMAIL = this.form.value.email;
      }
      if(!this.docGruppo.needMobileVerify){
        this.utente.MOBILENUMBER = this.form.value.mobile;
      }


      //USO IL LOADING CONTROLLER 
      this.loadingController
            .create({
              message: 'Aggiornamento dati...',
              spinner: 'circular'
            })
            .then (elLoading => {
              // Mostro il loading
              elLoading.present();

              //richiesta di aggiornamento al server
              this.startService
                  .updateUtente(this.utente)
                  .then(result => {
                      // Operazione effettuata
                      elLoading.dismiss();
                      //Aggiornamento corretto
                      this.showMessage('Info Aggiornate');
                      this.closePage();


                  }, error => {
                    elLoading.dismiss();
                    this.showMessage('Errore  di connessione');
                    console.log(error);
                  });
            });
    }
    else {
      //Devo mostrare qualche errore
      this.startService.presentToastMessage('Alcune informazioni sono errate');
    }
  }



  /**
   * Cambiamento del Codice Fiscale
   */
  onCfChange(){

    //se il cf cambia, quando l'utente esce dalla casella, provo a validarlo e riempire gli altri campi
    let codFiscString: string = this.form.value.cf;

    if (codFiscString!=null&&codFiscString!=undefined){
      
      if (codFiscString.length != 0){
  
        //chiamo il servizio per decodificare il codice fiscale
        this.startService.checkCodiceFiscale(codFiscString, true).then(codFiscObj => {
          
          //inserisco tutto quello che ho decodificato nel utente
          this.utente.NATOISOSTATO='Italia';
          this.utente.NATOA=codFiscObj.comune;
          this.utente.NATOPROV=codFiscObj.provincia;
          this.utente.NATOIL=codFiscObj.dataNascita;
          this.utente.SESSO=codFiscObj.sesso;
          this.utente.NATOCAP=codFiscObj.cap;
          

          //aggiorno i campi del form

          this.form.get('comNascita').setValue(this.utente.NATOA);
          this.form.get('provNascita').setValue(this.utente.NATOPROV);
          this.form.get('nascita').setValue(this.utente.NATOIL.toISOString());
          this.form.get('sesso').setValue(this.utente.SESSO);
          this.form.get('statoNascita').setValue(this.utente.NATOISOSTATO);
          this.form.get('capNascita').setValue(this.utente.NATOCAP);

          //setto il campo cf come valido
          this.form.controls['cf'].setErrors(null);

  
        }).catch(err => {

          //qui in teoria il cf non ha passato neppure il check base, segno il campo come non valido
          this.form.controls['cf'].setErrors({'incorrect':true});
          console.log(err);
        })
      }
    }
  }
  

  /**
   * Chiudo e torno alla pagina Account
   */
  closePage() {
    this.navCtr.navigateBack(['/','account']);
  }

  /**
   * Visualizza un messaggio come Toast
   * @param message Messaggio da mostrare
   */
  showMessage(message: string) {

    //Creo un messaggio
    this.toastCtr.create({
      message: message,
      duration: 3000
    })
    .then(tstMsg => {
      tstMsg.present();
    });

  }

  validateTel(){
    this.modalController.create({
      component: VerifyPage,
      componentProps: {
        params : {
          tipoVerifica : TipoVerificaAccount.verificasms,
          updateDocUtente : false
        }
      }
    })
    .then(elModal => {
      elModal.present();
    })
  }

  validateEmail(){

    this.modalController.create({
      component: VerifyPage,
      componentProps: {
        params : {
          tipoVerifica : TipoVerificaAccount.verificaemail,
          updateDocUtente : false
        }
      }
    })
    .then(elModal => {
      elModal.present();
    })
  }

}


