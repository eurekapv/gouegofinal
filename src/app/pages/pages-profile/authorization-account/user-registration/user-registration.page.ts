import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertButton, IonInput, LoadingController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CryptoService } from 'src/app/library/services/crypto.service';
import { AccountOperationResponse, AccountRequestCode, AccountVerifyCode } from 'src/app/models/utente/accountregistration.model';
import { Area } from 'src/app/models/struttura/area.model';
import { AreaLink } from 'src/app/models/struttura/arealink.model';
import { Gruppo } from 'src/app/models/struttura/gruppo.model';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { Utente } from 'src/app/models/utente/utente.model';
import { PageType, RequestPincodeUse, TipoVerificaAccount } from 'src/app/models/zsupport/valuelist.model';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.page.html',
  styleUrls: ['./user-registration.page.scss'],
})
export class UserRegistrationPage implements OnInit, OnDestroy {

  formPagePrimary: FormGroup;
  fullNominativo: string = '';
  fullEmail: string = '';
  fullMobileNumber: string = '';

  informationText: string = 'Ottima scelta, quella di effettuare la registrazione; poche informazioni per iniziare';
  linkPolicy: string = '';

  srcImage: string = `assets/profile/user-login-1.png`;

  //Boolean per mostrare nascondere password
  showPassword1: boolean = false;
  showPassword2: boolean = false;

  gruppoDoc: Gruppo;
  areaDoc: Area;
  subListenArea: Subscription;  

  //Documento per la richiesta codici
  docRichiestaCodici: AccountRequestCode;
  docVerificaCodici: AccountVerifyCode;
  utenteRegistration: Utente;

  //Lunghezza del codice di verifica
  verificationCodeLength: number = 5;  

  //Step della registrazione
  stepRegistration: 'input' | 'code' | 'final'  = 'input';

  //Modalità prevista per effettuare la registrazione
  registrationMode: 'none' | 'mail' | 'mobile' | 'all' = 'all'; 


  constructor(private startService: StartService,
              private cryptoService:CryptoService,
              private modalCtrl:ModalController,
              private loadingController: LoadingController) { }

  ngOnInit() {

    this.stepRegistration = 'input';
    this.onListenDoc();
    this.setRegistrationMode()
    this.setImageLogin();

    this.createFormPrimary();

    this.setInformationText();
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
    this.subListenArea = this.startService.areaSelected$
                                          .subscribe({
                                            next: (dataArea) => {
                                              let dataLink: AreaLink;

                                              this.areaDoc = dataArea;

                                              if (dataArea) {
                                                //Recupero il Link Policy Privacy
                                                dataLink = this.areaDoc.findAreaLinkByPageType(PageType.policyPrivacy);
                                                if (dataLink && dataLink.REFERURL && dataLink.REFERURL.length != 0) {
                                                  this.linkPolicy = dataLink.REFERURL;
                                                }
                                                else {
                                                  this.linkPolicy = '';
                                                }
                                              }
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

  /**
   * Imposta il messaggio informativo superiore sulla base dello stepRegistrazione e la Modalità
   */
  setInformationText() {
    let myText = '';

    if (this.stepRegistration == 'input') {
      myText = 'Ottima scelta, quella di effettuare la registrazione; poche informazioni per iniziare';
    }
    else if (this.stepRegistration == 'code') {
      switch (this.registrationMode) {
        case 'all':
            myText = 'Inserire i due codici ricevuti via <strong>messaggio E-mail</strong> e <strong>messaggio SMS</strong>, impostare la password desiderata e procedere con la registrazione';
          break;

        case 'mail': 
          myText = 'Inserire il codice ricevuto via <strong>messaggio E-mail</strong>, impostare la password desiderata e procedere con la registrazione';
          break;

        case 'mobile':
          myText = 'Inserire il codice ricevuto via <strong>messaggio SMS</strong>, impostare la password desiderata e procedere con la registrazione';
          break;

        case 'none':
          myText = 'Impostare la password desiderata e procedere con la registrazione';
          break;
      
        default:
          myText = '';
          break;
      }
    }

    this.informationText = myText;
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
              disabled: false
            },
            {
              updateOn: 'change',
              validators: [Validators.maxLength(this.verificationCodeLength),
                           Validators.minLength(this.verificationCodeLength)]
            }),
      verificationSmsCode: new FormControl<string>({
              value:'', 
              disabled: false
            },
            {
              updateOn: 'change',
              validators: [Validators.maxLength(this.verificationCodeLength),
                           Validators.minLength(this.verificationCodeLength)]
            }),            
      password1: new FormControl<string>({
                value:'', 
                disabled: false
              },
              {
                updateOn: 'change',
                validators: []
              }),
      password2: new FormControl<string>({
                value:'', 
                disabled: false
              },
              {
                updateOn: 'change',
                validators: []
              }),
      flagNewsletter: new FormControl<boolean>(
              {
                value: false,
                disabled: false
              },
              {
                updateOn: 'change',
                validators: []        
              }),
      flagConditionReading: new FormControl<boolean>(
              {
                value: true,
                disabled: false
              },
              {
                updateOn: 'change',
                validators: []
              })               
    });
  }   


  /**
   * Sposta la visualizzazione allo step specificato
   * @param nextStep 
   */
  moveStepRegistration(nextStep: 'input' | 'code' | 'final') {
    this.stepRegistration = nextStep;
    this.setInformationText();
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
              this.onRegistrationStep2();
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
      let messageCollection: string[] = [];
      let myMessage = '';
      let tmpCode = '';
      let tmpPwd1 = '';
      let tmpPwd2 = '';
      let tmpFlagCheck = false;
  
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
              flagValidation = true;

              //Non ho il documento e invece dovrei averlo
              if (!this.docRichiestaCodici) {
                flagValidation = false;
                myMessage = '<p>Si &egrave; verificato un problema</p>';
                myMessage += '<p>Chiudere la registrazione e riprovare</p>';
                
              }
              else {

                //Controllo Codice Mail
                if (this.registrationMode == 'all' || this.registrationMode == 'mail') {
                  tmpCode = this.formPagePrimary.value.verificationMailCode;
  
                  if (!tmpCode || tmpCode.length != this.verificationCodeLength) {
                    flagValidation = false;
                    messageCollection.push(`Codice ricevuto via E-mail deve essere di ${this.verificationCodeLength} cifre`);
                  }
                }
  
                //Controllo Codice SMS
                if (this.registrationMode == 'all' || this.registrationMode == 'mobile') {
                  tmpCode = this.formPagePrimary.value.verificationSmsCode;
  
                  if (!tmpCode || tmpCode.length != this.verificationCodeLength) {
                    flagValidation = false;
                    messageCollection.push(`Codice ricevuto via SMS deve essere di ${this.verificationCodeLength} cifre`);
                  }
                }              
  
                //Controllo Password
                tmpPwd1 = this.formPagePrimary.value.password1;
                tmpPwd2 = this.formPagePrimary.value.password2;
  
                if (!tmpPwd1 || tmpPwd1.length == 0) {
                  flagValidation = false;
                  messageCollection.push('Digitare la password desiderata');
                }
  
                if (!tmpPwd2 || tmpPwd2.length == 0) {
                  flagValidation = false;
                  messageCollection.push('Ripetere la password desiderata');
                }
  
                //Ci sono le due password
                if (flagValidation) {
  
                  if (tmpPwd1 != tmpPwd2) {
                    flagValidation = false;
                    messageCollection.push('Le due password devono coincidere');
                  }
  
                }
                
                //Controllo Check
                tmpFlagCheck = this.formPagePrimary.value.flagConditionReading;
  
                if (!tmpFlagCheck) {
                  flagValidation = false;
                  messageCollection.push('Accettare le condizioni di registrazione');
                }
  
                //Composizione Messaggio
                if (!flagValidation) {
                  myMessage = '<p>Per proseguire è necessario correggere gli errori:<p>';
                  myMessage += '<ul>'
                  for (let index = 0; index < messageCollection.length; index++) {
                    const itemMessage = messageCollection[index];
                    myMessage += `<li>${itemMessage}</li>`;
                  }
                  myMessage += '</ul>';
  
                }

              }
              
              
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
   * In questa fase viene preparato un documento di Richiesta Codici, appositamente compilato ed inviato al 
   * server (se la registrazione richiede una verifica codici)
   * altrimenti si passa alla fase successiva
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
                      //Reimposto il Nominativo completo
                      this.fullNominativo = this.formPagePrimary.value.profileName + ' ' + this.formPagePrimary.value.profileSurname;
                      this.fullEmail = this.formPagePrimary.value.profileEmail;
                      this.fullMobileNumber = this.formPagePrimary.value.profileMobile;

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
                      this.moveStepRegistration('code');
                      
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
      this.moveStepRegistration('code');
      
      myMessage = '<p>Impostare la password desiderata, accettare le condizioni e proseguire con la registrazione<p>';
      this.startService.presentAlertMessage(myMessage);
    }

  }

  /**
   * Effettua il secondo Step della registrazione dove viene inviato tutto al server
   */
  onRegistrationStep2() {
    let flagNewsLetter: boolean = false;
    let myMessage = '';

    flagNewsLetter = this.formPagePrimary.value.flagNewsletter;

    //Il documento con la verifica codici viene inviato sempre (anche in assenza di verifica)
    this.docVerificaCodici = new AccountVerifyCode();
    this.docVerificaCodici.IDAREA = this.docRichiestaCodici.IDAREA;
    this.docVerificaCodici.IDREFER = this.docRichiestaCodici.IDREFER;


    if (this.registrationMode == 'all' || this.registrationMode == 'mail') {
      this.docVerificaCodici.EMAILPINCODE = this.formPagePrimary.value.verificationMailCode;
    }

    if (this.registrationMode == 'all' || this.registrationMode == 'mobile') {
      this.docVerificaCodici.SMSPINCODE = this.formPagePrimary.value.verificationSmsCode;
    }  
    
    //Preparazione del documento Utente
    this.utenteRegistration = new Utente();
    this.utenteRegistration.NOME = this.formPagePrimary.value.profileName;
    this.utenteRegistration.COGNOME = this.formPagePrimary.value.profileSurname;
    this.utenteRegistration.NEWSLETTER = flagNewsLetter;
    this.utenteRegistration.WEBLOGIN = this.formPagePrimary.value.profileEmail;
    this.utenteRegistration.EMAIL = this.formPagePrimary.value.profileEmail;
    this.utenteRegistration.MOBILENUMBER = this.formPagePrimary.value.profileMobile;

    //Composizione della Password
    this.cryptoService.setSendingPasswordForUtenteDoc(this.docRichiestaCodici, this.utenteRegistration, this.formPagePrimary.value.password1);

    //Posso procedere con la richiesta al server
    this.loadingController
        .create({
          message: 'Attendere, registrazione in corso'
        })
        .then(elLoading => {    

            //Mostro il loader
            elLoading.present();

            //Posso procedere con la richiesta
            this.startService.registrationComplete(this.utenteRegistration,
                                                    this.docRichiestaCodici,
                                                    this.docVerificaCodici)
                              .then((dataResponse: AccountOperationResponse) => {

                                //Dismetto il loading
                                elLoading.dismiss();
                                //Ritorna sempre un documento di risposta
                                if (dataResponse.result) {
                                  //Registrazione effettuata con successo
                                  this.moveStepRegistration('final');
                                }
                                else {
                                  //Si è verificato un problema
                                  myMessage = '<p>Spiacenti, si è verificato un problema<p>';

                                  if (dataResponse.message && dataResponse.message.length != 0) {
                                    myMessage += `<p>${dataResponse.message}</p>`
                                  }

                                  this.startService.presentAlertMessage(myMessage,'Registrazione Fallita');
                                }
                              })
                              .catch(error => {
                                elLoading.dismiss();
                                this.startService.presentAlertMessage(error);
                              })


        });



  }
  
  /**
   * Attenzione il documento deve essere istanziato esternamente
   * @param fillOnly E' possibile anche fare compilare 1 solo campo (mail o mobile)
   */
  prepareRichiestaCodiciDoc(fillOnly: 'mail' | 'mobile' | '' = '') {

    //La registrazione non prevede l'invio di codici
    if (this.registrationMode == 'none') {
      //Non imposto nulla
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

  /**
   * Richiedo all'utente se effettivamente vuole il Reinvio del codice specificato
   * @param type 
   */
  onRequestReinvioCode(type: 'mail' | 'mobile') {
    let myMessage: string = '';
    let arButtons: AlertButton[] = [];

    if (this.stepRegistration == 'code') {

      if (type == 'mail') {

        myMessage = '<p>Desideri che venga inviato un nuovo codice tramite un </p>'
        myMessage += `<p>messaggio E-mail a <strong>${this.formPagePrimary.value.profileEmail}</strong> ?</p>`;

      }
      else if (type == 'mobile') {

        myMessage = '<p>Desideri che venga inviato un nuovo codice tramite un </p>'
        myMessage += `<p>Messaggio SMS al numero <strong>${this.formPagePrimary.value.profileMobile}</strong> ?</p>`;

      }
      myMessage += '<p>Il precedente codice non sarà piu valido</p>';

      //Preparo i Bottoni
      arButtons = [{
        text: 'Si, procedi',
        handler: () => this.onReinvioCodice(type)
      },
      {
        text: 'No, aspetta',
        role: "cancel"
      }]

      //Chiedo ed eventualmente eseguo
      this.startService.presentAlertMessage(myMessage, 'Reinvio Codice', arButtons);
    }
  }

  /**
   * Effettua il reinvio del codice richiesto
   * @param type 
   */
  onReinvioCodice(type: 'mail' | 'mobile') {

    let myMessage = '';

    if (this.docRichiestaCodici) {
      //Preparo il documento per il reinvio
      this.prepareRichiestaCodiciDoc(type);

      //Apro il loading
      //Qui devo contattare il server
      this.loadingController
          .create({
              message: 'Richiesta Reinvio Codice'
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

                      myMessage = '<p>Il codice &egrave; stato reinviato con successo</p>'

                      this.startService.presentAlertMessage(myMessage, 'Reinvio Codici');
                      
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
      myMessage = '<p>Spiacente, </p>'
      myMessage += '<p>qualcosa è andato storto</p>';
      myMessage += '<p>Esci e ripeti la registrazione</p>';

      this.startService.presentAlertMessage(myMessage);
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
  closeModal(openLogin: boolean = false) {

    //Chiudo la Modale 
    this.modalCtrl.dismiss()
                  .then(isClosed => {
                      //Se devo chiudere e aprire il login
                      if (isClosed && openLogin) {
                        this.startService.openFormLogin();
                      }
                  });


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

   //Apre il link delle Policy se presente
   openPolicyLink() {
    
    if (this.linkPolicy && this.linkPolicy.length != 0) {
       this.startService.openLink(this.linkPolicy);
    }

    
  }

  //#endregion
}
