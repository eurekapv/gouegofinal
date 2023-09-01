import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonInput, LoadingController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CryptoService } from 'src/app/library/services/crypto.service';
import { AccountOperationResponse, AccountRequestCode } from 'src/app/models/accountregistration.model';
import { Area } from 'src/app/models/area.model';
import { Gruppo } from 'src/app/models/gruppo.model';
import { LogApp } from 'src/app/models/log.model';
import { RequestPincodeUse, TipoVerificaAccount } from 'src/app/models/valuelist.model';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.page.html',
  styleUrls: ['./user-registration.page.scss'],
})
export class UserRegistrationPage implements OnInit, OnDestroy {

  formPagePrimary: FormGroup;
  fullNominativo: string = '';

  srcImage: string = `assets/profile/user-login-1.png`;

  //Boolean per mostrare nascondere password
  showPassword1: boolean = false;
  showPassword2: boolean = false;

  gruppoDoc: Gruppo;
  areaDoc: Area;
  subListenArea: Subscription;  

  //Documento per la richiesta codici
  docRichiestaCodici: AccountRequestCode;

  //Lunghezza del codice di verifica
  verificationCodeLength: number = 5;  

  //Step della registrazione
  stepRegistration: 'input' | 'code'  = 'input';

  //Modalità prevista per effettuare la registrazione
  registrationMode: 'none' | 'mail' | 'mobile' | 'all' = 'all'; 


  constructor(private startService: StartService,
              private cryptoService:CryptoService,
              private modalCtrl:ModalController,
              private loadingController: LoadingController) { }

  ngOnInit() {
    this.onListenDoc();
    this.setRegistrationMode()
    this.setImageLogin();

    this.createFormPrimary();
  }

  ngOnDestroy() {
    if (this.subListenArea) {
      this.subListenArea.unsubscribe();
    }
  } 

  /**
   * Determina la Visibilita di un campo di INPUT
   */
  getFlagshowInput(nameField: string): boolean {

    let flagShow = false;

    switch (nameField) {
      case 'verificationMailCode':
        flagShow = (this.stepRegistration == 'code' && (this.registrationMode == 'all' || this.registrationMode == 'mail'));
        break;

      case 'verificationSmsCode':
        flagShow = (this.stepRegistration == 'code' && (this.registrationMode == 'all' || this.registrationMode == 'mobile'));
        break;        
    
      default:
        break;
    }

    return flagShow;

  }

  /**
   * In attesa di alcuni documenti
   */
  onListenDoc() {
    this.subListenArea = this.startService.areaSelected
                                          .subscribe({
                                            next: (dataArea) => {
                                              this.areaDoc = dataArea;
                                            },
                                            error: (dataError) =>{
                                              LogApp.consoleLog(dataError, 'error');
                                            }
                                          })
  }  

  /**
   * Imposta la modalità prevista di recupero credenziali
   */
  setRegistrationMode() {

    //Recupero il Gruppo di riferimento
    this.gruppoDoc = this.startService.actualStartConfig?.gruppo;

    console.log(this.gruppoDoc)

    if (this.gruppoDoc.APPTIPOVERIFICA == TipoVerificaAccount.verificaemail || 
        this.gruppoDoc.APPTIPOVERIFICA == TipoVerificaAccount.noverifica) {
          this.registrationMode = 'mail';

    }
    else if (this.gruppoDoc.APPTIPOVERIFICA == TipoVerificaAccount.verificasms) {
      this.registrationMode = 'mobile';
    }
    else if (this.gruppoDoc.APPTIPOVERIFICA == TipoVerificaAccount.verificaemailsms) {
      this.registrationMode = 'all';
    }
    else {
      this.registrationMode = 'none';
    }

    console.log(this.gruppoDoc)
    console.log(this.registrationMode)
    


  }  

  //#region CONTROLLI FORM 

  /**
   * Creazione del form per la registrazione
   */
  createFormPrimary() {
    let pattTelefono = '^[+]*[0-9]{7,}';
    //Spiegazione pattern 
    //Per altre spiegazioni guardare qui https://regexr.com/3c53v

    // ^ Il match parte dall'inizio della stringa
    // [+] Qualsiasi elemento contenuto nelle quadre (quindi il +)
    // * la regola precedente è opzionale
    // [0-9] Qualsiasi elemento delle quadre
    // {7,} i valori [0,9] almeno per 7 caratteri o piu
    // * la regola precedente è opzionale

    this.formPagePrimary = new FormGroup({

      profileName: new FormControl<string>(
            {
              value:'', 
              disabled: false
            }, 
            {
              updateOn: 'change',
              validators: [Validators.required]
            }),
      profileSurname: new FormControl<string>(
              {
                value:'', 
                disabled: false
              }, 
              {
                updateOn: 'change',
                validators: [Validators.required]
              }),         
      profileEmail: new FormControl<string>(
                {
                  value:'', 
                  disabled: false
                }, 
                {
                  updateOn: 'change',
                  validators: [Validators.required]
                }),    
      profileMobile: new FormControl<string>(
                  {
                    value:'', 
                    disabled: false
                  }, 
                  {
                    updateOn: 'change',
                    validators: [Validators.required,  Validators.pattern(pattTelefono)]
                  }),                                
      verificationMailCode: new FormControl<string>({
              value:'', 
              disabled: true
            },
            {
              updateOn: 'change',
              validators: [Validators.maxLength(this.verificationCodeLength),
                           Validators.minLength(this.verificationCodeLength)]
            }),
      verificationSmsCode: new FormControl<string>({
              value:'', 
              disabled: true
            },
            {
              updateOn: 'change',
              validators: [Validators.maxLength(this.verificationCodeLength),
                           Validators.minLength(this.verificationCodeLength)]
            }),            
      password1: new FormControl<string>({
                value:'', 
                disabled: true
              },
              {
                updateOn: 'change',
                validators: []
              }),
      password2: new FormControl<string>({
                value:'', 
                disabled: true
              },
              {
                updateOn: 'change',
                validators: []
              })
    });
  }   

  /**
   * Clic sul pulsante della form Recovery
   */
  onClickActionRegistration() {
    //Validiamo i dati
    let flagValidation = false;

    flagValidation = this.onValidationRegistration();

    if (flagValidation) {
      //Posso proseguire
      switch (this.stepRegistration) {
        case 'input':
              this.onRegistrationStep1();
          break;

        case 'code':
              
            break;
      
        default:
          break;
      }
    }
  }  

  /**
  * Effettua la validazione dei dati inseriti per il recovery
  */
  onValidationRegistration(): boolean {
      let flagValidation = false;
      let tmpValue: string[] = [];
      let myMessage = '';
  
      if (!this.areaDoc || !this.gruppoDoc) {
        flagValidation = false;
        myMessage = 'Purtroppo, non ho raccolto sufficienti informazioni per contattare il server di registrazione'
      }
      else {

        switch (this.stepRegistration) {
          case 'input':
              //Valori inseriti
              tmpValue.push(this.formPagePrimary.value.profileName);
              tmpValue.push(this.formPagePrimary.value.profileSurname);
              tmpValue.push(this.formPagePrimary.value.profileEmail);
              tmpValue.push(this.formPagePrimary.value.profileMobile);
  
              flagValidation = true;
  
              for (let index = 0; index < tmpValue.length; index++) {
                const elValue = tmpValue[index];
                if (!elValue || elValue.length == 0) {
  
                  flagValidation = false;
  
                  switch (index) {
  
                      case 0:
                        myMessage = 'Per proseguire è necessario inserire il nome';
                      break;
  
                      case 1:
                        myMessage = 'Per proseguire è necessario inserire il cognome';
                      break;
  
                      case 2:
                        myMessage = 'Per proseguire è necessario inserire un indirizzo email';
                      break;                    
  
                      case 3:
                        myMessage = 'Per proseguire è necessario inserire un numero di telefono mobile';
                      break;                    
                      
                  
                    default:
                      break;
                  }
                }
              }
          break;
    
          case 'code':
  
            break;
        
          default:
              flagValidation = false;
            break;
        }

      }
  
      if (!flagValidation) {
        this.startService.presentAlertMessage(myMessage);
      }
  
      return flagValidation;
  }

  /**
   * 
   */
  onRegistrationStep1() {
    let myMessage = '';

    //Creo un nuovo documento
    this.docRichiestaCodici = new AccountRequestCode();
    this.docRichiestaCodici.IDAREA = this.areaDoc.ID;
    this.docRichiestaCodici.USE = RequestPincodeUse.forRegistration;
    
    //Preparo il documento con i parametri
    this.prepareRichiestaCodiciDoc();

    if (this.registrationMode != 'none') {
      //Qui devo contattare il server
      this.loadingController
          .create({
              message: 'Invio dettagli registrazione'
          })
          .then(elLoading => {

            //Creo il loading
            elLoading.present();      

            this.startService
                .registrationSendCodici(this.docRichiestaCodici)
                .then((risposta: AccountOperationResponse) => {

                  elLoading.dismiss();

                  if (risposta) {
                    if (risposta.result) {
                      //Risposta corretta con successo
                      this.docRichiestaCodici.IDREFER = risposta.idRefer;
                      //Disattivo i flag
                      this.docRichiestaCodici.REQUESTEMAILCODE = false;
                      this.docRichiestaCodici.REQUESTSMSCODE = false;

                      switch (this.registrationMode) {
                        case 'all':
                          myMessage = '<p>Per proseguire controllare la ricezione di un </p>'
                          myMessage += '<ul><li><strong>messaggio E-mail</strong></li>';
                          myMessage += '<li><strong>messaggio SMS</strong></li></ul>';
                          myMessage += '<p>Inserire i <strong>codici ricevuti</strong> per poter completare la registrazione</p>';
                          break;

                        case 'mail':
                            myMessage = '<p>Per proseguire controllare la ricezione di un <strong>messaggio e-mail</strong></p>';
                            myMessage += '<p>Inserire il <strong>codice ricevuto</strong> per poter completare la registrazione</p>';
                          break;

                        case 'mobile':
                            myMessage = '<p>Per proseguire controllare la ricezione di un <strong>messaggio SMS</strong></p>';
                            myMessage += '<p>Inserire il <strong>codice ricevuto</strong> per poter completare la registrazione</p>';
                          break;
                      
                        default:
                          break;
                      }

                      this.startService.presentAlertMessage(myMessage, 'Invio Codici');

                      //Passo allo Step Successivo
                      this.stepRegistration = 'code';

                    }
                    else {
                      myMessage = '<p>Si sono verificati problemi nell\'invio</p>';
                      if (risposta.message && risposta.message.length != 0) {
                          myMessage += `<p>${risposta.message}</p>`
                      }

                      this.startService.presentAlertMessage(myMessage, 'Invio fallito');

                    }
                  }
                  else {
                        //Qualche problema
                        myMessage = '<p class="ion-text-bold">Spiacente</p>'
                        myMessage += '<p>Non ho ricevuto una risposta corretta dal server</p>';
                        this.startService.presentAlertMessage(myMessage);                    
                  }
                })
                .catch(error => {

                  elLoading.dismiss();
                  this.startService.presentAlertMessage(error);
                })

          });


    }
    else {
      //Posso passare subito alla pagina successiva
      this.stepRegistration = 'code';
    }

  }
  
  /**
   * Attenzione il documento deve essere istanziato esternamente
   * @param fillOnly E' possibile anche fare compilare 1 solo campo (mail o mobile)
   */
  prepareRichiestaCodiciDoc(fillOnly: 'mail' | 'mobile' | '' = '') {

    //La registrazione non prevede l'invio di codici
    if (this.registrationMode == 'none') {

    }

    //Preparo il documento per la modalita Mail
    if (this.registrationMode == 'mail' || this.registrationMode == 'all'){
      if (fillOnly == 'mail' || fillOnly == '') {

        //Popolo il documento per la richiesta Mail
        this.docRichiestaCodici.REQUESTEMAILCODE = true;
        this.docRichiestaCodici.EMAIL = this.formPagePrimary.value.profileEmail;
      }
    }

    //Preparo il documento per la modalita Mobile
    if (this.registrationMode == 'mobile' || this.registrationMode == 'all') {

      if (fillOnly == 'mobile' || fillOnly == '') {

        //Popolo il documento per la richiesta SMS
        this.docRichiestaCodici.REQUESTSMSCODE = true;
        this.docRichiestaCodici.TELEPHONE = this.formPagePrimary.value.profileMobile;
      }
    }    

  }

  //#endregion


  //#region INTERFACE METHOD
  
  /**
   * Prende un valore casuale tra 1 e 5 e ritorna l'immagine
   */
  setImageLogin() {
    let adesso = new Date().toISOString();
    //Prendo il 17 carattere
    //2023-09-01T08:45:43.731Z
    let imageNumber = 1;

    try {

      imageNumber = parseInt(adesso.substring(17,18));

    } catch (error) {

      imageNumber = 1;
    }

    this.srcImage = `assets/profile/user-login-${imageNumber}.png`;
  }


  /**
  * Chiusura della videata
  */  
  closeModal(){
    this.modalCtrl.dismiss();
  }

  
  /**
   * Switch per mostrare o nascondere la password
   * @param idElement 
   * @param elementDOM 
   */
  showHideInput(idElement:string, elementDOM: IonInput) {

    switch (idElement) {

      case 'password1':
        this.showPassword1 = !this.showPassword1;
        elementDOM.type = (this.showPassword1 ? 'text':'password');
      break;        

      case 'password2':
          this.showPassword2 = !this.showPassword2;
          elementDOM.type = (this.showPassword2 ? 'text':'password');
        break;

      default:
        break;
    }
  }
  //#endregion
}
