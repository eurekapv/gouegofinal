import { Component, OnInit, OnDestroy } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Utente } from 'src/app/models/utente.model';
import { ValueList, Sesso } from 'src/app/models/valuelist.model';
import { StartService } from 'src/app/services/start.service';
import { Subscription } from 'rxjs';
import { NavController, LoadingController, ModalController } from '@ionic/angular';
import { MyDateTime } from 'src/app/library/models/mydatetime.model';
import { UserVerifyPage } from 'src/app/pages/pages-profile/authorization-account/user-verify/user-verify.page'
import { TipoVerificaAccount } from 'src/app/models/valuelist.model'
import { Gruppo } from 'src/app/models/gruppo.model';
import { LogApp } from 'src/app/models/log.model';



@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
})
export class EditAccountPage implements OnInit, OnDestroy {

  formPagePrimary: UntypedFormGroup; 

  utente:Utente = new Utente;
  utenteListen: Subscription;

  listSesso: ValueList[]=[];
  showLoading: boolean;

  docGruppo: Gruppo = new Gruppo();
  today:string; //questo serve per impostare la data di nascita max ad oggi
  showCapNascita = false; //Nasconde il cap di nascita

  constructor(
      private startService : StartService,
      private navController: NavController,
      private loadingController: LoadingController,
      private modalController: ModalController
    ) {

      //Chiedo al servizio i dati dell'utente
      this.utenteListen = this.startService.activeUtenteDoc$.subscribe(data=>{
          
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
    
    this.today=MyDateTime.formatDateISO(new Date(),"date");

    this.docGruppo = this.startService.actualStartConfig.gruppo;
    
  }

  ngOnDestroy() {
    if (this.utenteListen) {
      this.utenteListen.unsubscribe();
    }
  }

  /**
   * Ritorna un Array con il percorso di ritorno
   */
  get backPathArray():string[] {
    let retPath = ['/','appstart-home','tab-profile'];

    return retPath;
  }

  //Ritorna il Path Array Back in formato stringa concatenata
  get backButtonHref(): string {
    let myHref = '';
    myHref = this.backPathArray.join('/').substring(1);

    return myHref;
  }

  /**
   * Torno alla pagina del profilo
   */
  onGoToBack() {
    
    this.navController.navigateBack(this.backPathArray);
  }  

  /**
   * Creazione del form nella pagina
   */
  createForm()
  {
    let patternCodice = '^[A-Za-z]{6}[0-9]{2}[A-Za-z]{1}[0-9]{2}[A-Za-z]{1}[0-9]{3}[A-Za-z]{1}';
    

    this.formPagePrimary=new UntypedFormGroup({
      nome:new UntypedFormControl(this.utente.NOME, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      cognome:new UntypedFormControl(this.utente.COGNOME, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      sesso:new UntypedFormControl(this.utente.SESSO, {
        updateOn:'change',
        validators: []
      }),
      provNascita:new UntypedFormControl(this.utente.NATOPROV, {
        updateOn:'change',
        validators: []
      }),
      comNascita:new UntypedFormControl(this.utente.NATOA, {
        updateOn:'change',
        validators: []
      }),
      statoNascita:new UntypedFormControl(this.utente.NATOISOSTATO, {
        updateOn:'change',
        validators: []
      }),
      capNascita:new UntypedFormControl(this.utente.NATOCAP, {
        updateOn:'change',
        validators: []
      }),
      provResidenza:new UntypedFormControl(this.utente.PROVINCIA, {
        updateOn:'change',
        validators: []
      }),
      comResidenza:new UntypedFormControl(this.utente.COMUNE, {
        updateOn:'change',
        validators: []
      }),
      indResidenza:new UntypedFormControl(this.utente.INDIRIZZO, {
        updateOn:'change',
        validators: []
      }),
      capResidenza:new UntypedFormControl(this.utente.CAP, {
        updateOn:'change',
        validators: []
      }),
      statoResidenza:new UntypedFormControl(this.utente.ISOSTATO, {
        updateOn:'change',
        validators: []
      }),
      cf:new UntypedFormControl(this.utente.CODICEFISCALE, {
        updateOn:'change',
        validators: [Validators.pattern(patternCodice)]
      })
    })

    if(!this.docGruppo.needMobileVerify){

      //devo creare il campo mobile solo per mostrarlo
      let mobile = new UntypedFormControl(this.utente.MOBILENUMBER, {
        updateOn: 'change',
        validators: []
      })

      this.formPagePrimary.addControl('mobile', mobile)
    } 

    if(!this.docGruppo.needEmailVerify){
      //devo creare il campo tel
      let email = new UntypedFormControl(this.utente.EMAIL, {
        updateOn: 'change',
        validators: [Validators.email]
      })
      this.formPagePrimary.addControl('email', email)
    }
  }

  /**
   * Conferma della Form
   */
  onSubmit()
  {
    
    if (this.formPagePrimary.valid)
    {

      this.utente.NOME=this.formPagePrimary.value.nome;
      this.utente.COGNOME=this.formPagePrimary.value.cognome;
      this.utente.SESSO=this.formPagePrimary.value.sesso;
      this.utente.CODICEFISCALE=this.formPagePrimary.value.cf;

      this.utente.INDIRIZZO=this.formPagePrimary.value.indResidenza;
      this.utente.COMUNE=this.formPagePrimary.value.comResidenza;
      this.utente.CAP=this.formPagePrimary.value.capResidenza;
      this.utente.PROVINCIA=this.formPagePrimary.value.provResidenza;
      this.utente.ISOSTATO=this.formPagePrimary.value.statoResidenza;    

      this.utente.NATOA=this.formPagePrimary.value.comNascita;
      this.utente.NATOCAP=this.formPagePrimary.value.capNascita;
      this.utente.NATOPROV=this.formPagePrimary.value.provNascita;
      this.utente.NATOISOSTATO=this.formPagePrimary.value.statoNascita;
      
      //EMAIL E NUMERO DI TELEFONO LI MODIFICO SOLO SE NON DEVONO ESSERE VERIFICATI, ALTRIMENTI VERRA' CHIAMATA LA VIDEATA APPOSITA
      if(!this.docGruppo.needEmailVerify){
        this.utente.EMAIL = this.formPagePrimary.value.email;
      }
      if(!this.docGruppo.needMobileVerify){
        this.utente.MOBILENUMBER = this.formPagePrimary.value.mobile;
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
                      this.startService.presentToastMessage('Info Aggiornate');
                      this.onGoToBack();


                  }, error => {
                    elLoading.dismiss();
                    this.startService.presentToastMessage('Errore  di connessione');
                    LogApp.consoleLog(error,'error');
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
    let codFiscString: string = this.formPagePrimary.value.cf;

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

          this.formPagePrimary.get('comNascita').setValue(this.utente.NATOA);
          this.formPagePrimary.get('provNascita').setValue(this.utente.NATOPROV);
          this.formPagePrimary.get('sesso').setValue(this.utente.SESSO);
          this.formPagePrimary.get('statoNascita').setValue(this.utente.NATOISOSTATO);
          this.formPagePrimary.get('capNascita').setValue(this.utente.NATOCAP);

          //setto il campo cf come valido
          this.formPagePrimary.controls['cf'].setErrors(null);

  
        }).catch(err => {

          //qui in teoria il cf non ha passato neppure il check base, segno il campo come non valido
          this.formPagePrimary.controls['cf'].setErrors({'incorrect':true});
          LogApp.consoleLog(err,'error');
        })
      }
    }
  }
  

  validateTel(){
    this.modalController.create({
      component: UserVerifyPage,
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
      component: UserVerifyPage,
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


