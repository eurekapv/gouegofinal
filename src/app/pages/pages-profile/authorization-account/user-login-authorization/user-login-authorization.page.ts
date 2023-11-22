import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertButton, IonInput, LoadingController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { PostResponse } from 'src/app/library/models/post-response.model';
import { SupportFunc } from 'src/app/library/models/support-func.model';
import { CryptoService } from 'src/app/library/services/crypto.service';
import { AccountOperationResponse, AccountRequestCode, AccountVerifyCode } from 'src/app/models/utente/accountregistration.model';
import { Area } from 'src/app/models/struttura/area.model';
import { Gruppo } from 'src/app/models/struttura/gruppo.model';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { Utente } from 'src/app/models/utente/utente.model';
import { RequestPincodeUse, TipoVerificaAccount } from 'src/app/models/zsupport/valuelist.model';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-user-login-authorization',
  templateUrl: './user-login-authorization.page.html',
  styleUrls: ['./user-login-authorization.page.scss'],
})
export class UserLoginAuthorizationPage implements OnInit, OnDestroy {

  formPagePrimary: FormGroup;
  formPageSecondary: FormGroup;

  //Boolean per mostrare nascondere password
  showCurrentPassword: boolean = false;
  showPassword1: boolean = false;
  showPassword2: boolean = false;

  gruppoDoc: Gruppo;
  areaDoc: Area;
  subListenArea: Subscription;

  //Modalità prevista per effettuare il recupero credenziali
  recoveryMode: 'mail' | 'mobile' | 'all' = 'all'; 
  stepRecovery: 'input' | 'code' | 'password' = 'input';
  //Lunghezza del codice di verifica
  verificationCodeLength: number = 5;

  //Documento per la richiesta dei codici di recovery
  docRichiestaCodici: AccountRequestCode;
  docVerifica = new AccountVerifyCode();
  //Documento Utente preparato per la modifica finale
  utenteRecovery = new Utente();

  //Etichetta della form mostrata a seconda del recovery mode
  labelFormRecovery = 'E-mail'; 
  helperFormRecovery = 'inserisci l\'email di registrazione'; 
  errorFormRecovery = 'controllare l\'email inserita'; 
  


  srcImage: string = `assets/profile/user-login-1.png`;

  indexShowForm = 1;
  
  constructor(private startService: StartService,
              private cryptoService:CryptoService,
              private modalCtrl:ModalController,
              private loadingController: LoadingController) { }

  ngOnInit() {
    this.onListenDoc();

    this.setImageLogin();
    this.setRecoveryMode();

    this.createFormPrimary();
    this.createFormSecondary();    
  }

  ngOnDestroy() {
    if (this.subListenArea) {
      this.subListenArea.unsubscribe();
    }
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
  setRecoveryMode() {

    //Recupero il Gruppo di riferimento
    this.gruppoDoc = this.startService.actualStartConfig?.gruppo;

    if (this.gruppoDoc.APPTIPOVERIFICA == TipoVerificaAccount.verificaemail || 
        this.gruppoDoc.APPTIPOVERIFICA == TipoVerificaAccount.noverifica) {
          this.recoveryMode = 'mail';
          //Queste sono le etichette
          this.labelFormRecovery = 'E-mail'; 
          this.helperFormRecovery = 'inserisci l\'email di registrazione'; 
          this.errorFormRecovery = 'controllare l\'email inserita'; 
    }
    else if (this.gruppoDoc.APPTIPOVERIFICA == TipoVerificaAccount.verificasms) {
      this.recoveryMode = 'mobile';
      //Queste sono le etichette
      this.labelFormRecovery = 'Numero Mobile'; 
      this.helperFormRecovery = 'inserisci il numero mobile utilizzato in fase di registrazione'; 
      this.errorFormRecovery = 'verificare il numero mobile inserito'; 
    }
    else {
      this.recoveryMode = 'all';
      //Queste sono le etichette
      this.labelFormRecovery = 'E-mail oppure Numero Mobile'; 
      this.helperFormRecovery = 'inserisci il numero mobile o l\'indirizzo e-mail utilizzato in fase di registrazione'; 
      this.errorFormRecovery = 'verificare il numero mobile o l\'indirizzo e-mail inserito';
    }

  }


  //#region LOGIN METHOD

  /**
   * Creazione del form di Login
   */
  createFormPrimary() {

    this.formPagePrimary = new FormGroup({
      profileEmail: new FormControl<string>('', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      profilePassword: new FormControl<string>('', {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      profileSaving: new FormControl<boolean>(true, {
        updateOn: 'change',
        validators: [Validators.required]
      })      
    });
  }  
  /**
   * Esegue l'accesso alla piattaforma 
   * @returns 
   */
  submitLogin() {

    if (!this.formPagePrimary.valid) {
      this.startService.presentToastMessage('Indicare email e password per accedere');
      return;
    }
    else {
      let username = this.formPagePrimary.value.profileEmail;
      let userpassword = this.formPagePrimary.value.profilePassword;
      let flagSave: boolean = this.formPagePrimary.value.profileSaving;

      console.log(`Il flag è ${flagSave ? 'true':'false'}`)

      //Preparo il Loading
      this.loadingController.create({
        message: 'Controllo credenziali'
      })
      .then(elLoading => {
        //Creo il Loading
        elLoading.present();

        //Chiamo il servizio per l'autorizzazione
        this.startService
            .userLogin(username,userpassword)
            .then((dataResult:PostResponse) => {

              elLoading.dismiss();

              // E' Arrivata una risposta NEGATIVA
              if (!dataResult.result) {
                    this.startService.presentAlertMessage(dataResult.message);
              }
              else {
                // LOGIN ACCETTATO



                if (flagSave) {


                  // MEMORIZZO LE CREDENZIALI PER UN SUCCESSIVO RECUPERO
                  this.startService.saveUserCredential(username,userpassword);

                }

                //Resetto la form
                this.formPagePrimary.reset();
                
                //Chiudo la modale
                this.closeModal();
              }
            })
            .catch(error => {

              //Chiudo il Loading Controller
              elLoading.dismiss();

              let myMsg = '';
              myMsg =  SupportFunc.htmlParagraph(error);
              
              //Visualizzo il messaggio
              this.startService.presentAlertMessage(myMsg, 'Ops...Si è verificato un errore');
              LogApp.consoleLog(error);     

            })

      })

    }

  }
  
  
  //#endregion

  

  //#region RECOVERY METHOD

  /**
   * Creazione del form per il ripristino password
   */
  createFormSecondary() {
    
    this.formPageSecondary = new FormGroup({
      profileEmailNumber: new FormControl<string>(
            {
              value:'', 
              disabled: false
            }, 
            {
              updateOn: 'change',
              validators: [Validators.required]
            }),
      verificationCode: new FormControl<string>({
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
   * Effettua il movimento dello Step di Recovery
   * e intanto abilita/disabilita le INPUT
   * @param nextStep 
   */
  moveStepRecovery(nextStep: 'input' | 'code' | 'password') {

    this.stepRecovery = nextStep;

    //Reimposto le Abilitazioni Form
    switch (this.stepRecovery) {
      case 'input':
        this.formPageSecondary.get('profileEmailNumber')?.enable();
        this.formPageSecondary.get('verificationCode')?.disable();
        this.formPageSecondary.get('password1')?.disable();
        this.formPageSecondary.get('password2')?.disable();

        break;

      case 'code':
        this.formPageSecondary.get('profileEmailNumber')?.disable();
        this.formPageSecondary.get('verificationCode')?.enable();
        this.formPageSecondary.get('password1')?.disable();
        this.formPageSecondary.get('password2')?.disable();

        break;

      case 'password':
        this.formPageSecondary.get('profileEmailNumber')?.disable();
        this.formPageSecondary.get('verificationCode')?.disable();
        this.formPageSecondary.get('password1')?.enable();
        this.formPageSecondary.get('password2')?.enable();

        break;        


    
      default:
        break;
    }

  }


  /**
   * Svuota i valori della form Secondary
   */
  emptyFormSecondary() {
        this.formPageSecondary.get('profileEmailNumber')?.setValue('');
        this.formPageSecondary.get('verificationCode')?.setValue('');
        this.formPageSecondary.get('password1')?.setValue('');
        this.formPageSecondary.get('password2')?.setValue('');
  }


  /**
   * Clic sul pulsante della form Recovery
   */
  onClickActionRecovery() {
    //Validiamo i dati
    let flagValidation = false;

    flagValidation = this.onValidationRecovery();

    if (flagValidation) {
      //Posso proseguire
      switch (this.stepRecovery) {
        case 'input':
              //Devo inviare il codice
              this.onSendRecoveryCode();
          break;
        case 'code':
              //Devo verificare il codice inserito
              this.onCheckRecoveryCode();
            break;

        case 'password':
              //Recovery in fase ultima con aggiornamento della password
              this.onUpdatePassword();
          break;
      
        default:
          break;
      }
    }
  }

  /**
   * Effettua la validazione dei dati inseriti per il recovery
   */
  onValidationRecovery(): boolean {
    let flagValidation = false;
    let tmpValue = '';
    let tmpValue2 = '';
    let myMessage = '';


    switch (this.stepRecovery) {
      case 'input':
          tmpValue = this.formPageSecondary.value.profileEmailNumber;

          if (tmpValue.length != 0) {
            flagValidation = true;
          }
          else {
            myMessage = 'Dato mancante per proseguire'
          }
      break;

      case 'code':
        //Devo avere il documento con i codici
        if (this.docRichiestaCodici && 
          this.docRichiestaCodici.IDREFER &&
          this.docRichiestaCodici.IDREFER.length != 0) {
  
            tmpValue = this.formPageSecondary.value.verificationCode + '';
            if (tmpValue.length == this.verificationCodeLength) {
              flagValidation = true;
            }
            else {
              myMessage = `Inserire il codice di ${this.verificationCodeLength} cifre ricevuto`;
            }
        }
        else {
          flagValidation = false;
          myMessage = 'Spiacente, qualcosa è andata storto. Dovresti richiedere nuovamente il codice di verifica';
        }
        break;

      case 'password':
        if (this.utenteRecovery) {

          tmpValue = this.formPageSecondary.value.password2;
          tmpValue2 = this.formPageSecondary.value.password1;
          if (!tmpValue || tmpValue.length == 0) {
            myMessage = 'Inserire la password desiderata'
          }
          else if (!tmpValue2 || tmpValue2.length == 0) {
            myMessage = 'Ripetere l\'inserimento della password desiderata';
          }
          else if (tmpValue != tmpValue2) {
            myMessage = 'Le password inserite non coincidono'
          }
          else {
            flagValidation = true;
          }

        }
        else {
          flagValidation = false;
          myMessage = 'Spiacente, qualcosa è andata storto. Dovresti ripetere la procedura di richiesta codici';
        }
        break;

    
      default:
          flagValidation = false;
        break;
    }

    if (!flagValidation) {
      this.startService.presentAlertMessage(myMessage);
    }

    return flagValidation;
  }


  /**
   * Vuole reinviare il codice ? 
   */
  onClickReinviaCodice() {
    let myMessage = '';
    let myButtons: AlertButton[];

    myMessage = '<p>' + 'Si desidera richiedere nuovamente <strong>l\'invio del codice</strong> di verifica ?' + '</p>';
    
    myButtons = [{
        text: 'Si, procedi',
        handler: () => {
            //Effettuo l'invio del codice
            this.onSendRecoveryCode();
        }
      },
      {
        text: 'No, aspetta',
        role: 'cancel'
      }]

    this.startService.presentAlertMessage(myMessage, 'Reinvio Codice', myButtons);
  }

  /**
   * Richiesto l'invio del Codice di Recovery
   */
  onSendRecoveryCode() {
    let valueDestinatario = '';
    this.docRichiestaCodici = new AccountRequestCode();
    let myMessage = '';

    if (!this.areaDoc) {
      //Non ho ricevuto il documento per l'area
      this.startService.presentAlertMessage('Spiacente, non riesco a contattare il centro');
    }
    else {

      //Preparo il documento da inviare
      valueDestinatario = this.formPageSecondary.value.profileEmailNumber;
  
      //Ha inserito un indirizzo email
      if (valueDestinatario.includes('@')) {
        //è una mail
        this.docRichiestaCodici.EMAIL=valueDestinatario;
        this.docRichiestaCodici.TELEPHONE = "";
        this.docRichiestaCodici.REQUESTEMAILCODE=true;
        this.docRichiestaCodici.REQUESTSMSCODE=false;
      }
      else {
        //dovrebbe essere un telefono
        this.docRichiestaCodici.TELEPHONE=valueDestinatario;
        this.docRichiestaCodici.EMAIL = "";
        this.docRichiestaCodici.REQUESTSMSCODE=true;
        this.docRichiestaCodici.REQUESTEMAILCODE=false;      
      }

      //inserisco nell'oggetto le altre info necessarie
      this.docRichiestaCodici.USE=RequestPincodeUse.forRecovery;
      this.docRichiestaCodici.IDAREA=this.areaDoc.ID;

      //creo il loading
      this.loadingController.create({
          message:'Invio codice in corso...',
          spinner:'circular',
          backdropDismiss: true,
          })
          .then(elLoading => {
              //Presento il loading
              elLoading.present();

              //Effettuo la richiesta
              this.startService.recoverySendCodice(this.docRichiestaCodici)
                               .then((risposta: AccountOperationResponse) => {
                                //Chiudo il Loading
                                elLoading.dismiss();

                                if (risposta) {
                                  if (risposta.result) {

                                    myMessage = '<p>' + risposta.message + '</p>';
                                    myMessage += '<p>Inserire il <strong>codice ricevuto</strong> e procedere con la verifica';
                                    //Codici Inviati
                                    this.startService.presentAlertMessage(myMessage, 'Codice inviato');
  
                                    //Imposto IDRefer che devo reinviare quando chiedo di verificare il codice
                                    this.docRichiestaCodici.IDREFER = risposta.idRefer
  
                                    //Passo allo STEP SUCCESSIVO
                                    this.moveStepRecovery('code');

                                  }
                                  else {
                                    myMessage = '<p>' + risposta.message + '</p>';
                                    myMessage += '<p>Ahime credo qualcosa sia andato storto<p>'
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
                                  //Chiudo il Loading
                                  elLoading.dismiss();

                                  //Mostro Errore ricevuto
                                  this.startService.presentAlertMessage(error);

                               })



          })

    }




  }

  /**
   * Devo controllare il codice inserito se è corretto
   */
  onCheckRecoveryCode() {
    //Procedo con il controllo del Codice Inserito/Ricevuto
    let valueCode: string = '';

    if (this.docRichiestaCodici && 
        this.docRichiestaCodici.IDREFER &&
        this.docRichiestaCodici.IDREFER.length != 0) {

          //valueCode = this.formPageSecondary.value.verificationCode;
          if (typeof this.formPageSecondary.value.verificationCode == 'number' || 
              typeof this.formPageSecondary.value.verificationCode == 'bigint') {

                let numValue: number = this.formPageSecondary.value.verificationCode;
                valueCode = numValue.toString();
          }
          else {
            valueCode = this.formPageSecondary.value.verificationCode;
          }

          //Preparo il documento di Verifica da inviare al server
          this.docVerifica = new AccountVerifyCode();
          this.docVerifica.IDREFER=this.docRichiestaCodici.IDREFER;
          this.docVerifica.IDAREA=this.docRichiestaCodici.IDAREA;

          if (this.docRichiestaCodici.REQUESTEMAILCODE) {
            //Il codice è stato inviato via mail
            //Lo ritorno in Email
            this.docVerifica.EMAILPINCODE = valueCode;
          }
          else {
            this.docVerifica.SMSPINCODE = valueCode;
          }

          //Procedo con il contattare il server
          this.loadingController
              .create({
                message:"Verifica in corso...",
                spinner:"circular",
                backdropDismiss: true
              })
              .then(elLoading => {
                elLoading.present();

                //Contattiamo il server
                this.startService.recoveryVerifyCodice(this.docVerifica)
                                 .then((risposta: AccountOperationResponse) => {
                                    //Chiusura del loading
                                    elLoading.dismiss();

                                    if (risposta) {
                                      if (risposta.result) {
                                        //Risposta Codici Corretta
                                        this.startService.presentAlertMessage('Complimenti, Il codice inserito è corretto, è possibile procedere con la scelta della nuova password','Verifica con successo');
                                        
                                        //Predispongo il documento Utente che sarà usato nella fase finale
                                        this.utenteRecovery = new Utente(true);
                                        this.utenteRecovery.ID = risposta.idRefer;
                                        this.utenteRecovery.NOMINATIVO = risposta.descrRefer;

                                        //Sposto alla sezione successiva
                                        this.moveStepRecovery('password');
                                      }
                                      else {
                                        this.startService.presentAlertMessage('Spiacente, Il codice inserito non risulta corretto','Verifica fallita');
                                      }
                                    }
                                    else {
                                      this.startService.presentAlertMessage('Non ho ricevuto la risposta a seguito della verifica codici','Controllo fallito');
                                    }

                                 })
                                 .catch(error => {
                                  //Chiusura del Loading
                                  elLoading.dismiss();
                                  this.startService.presentAlertMessage(error);
                                 })
              })

    }

  }

  /**
   * Effettuo l'aggiornamento della password sul server
   */
  onUpdatePassword() {
    let value = this.formPageSecondary.value.password1;
    let splitPwd:string[] = [];
    let myMessage = '';


    if (this.docRichiestaCodici && this.utenteRecovery) {
      //Splitto la Password in due porzioni
      splitPwd = this.cryptoService.mySplitPassword(value);

      if (splitPwd) {
        //Una parte come Token di Richiesta
        this.docRichiestaCodici.TOKEN = splitPwd[0];
        //Una seconda parte nell'utente
        this.utenteRecovery.INPUTPASSWORD = splitPwd[1];
        this.utenteRecovery.SHAPASSWORD = '';

        //Posso procedere con il Loading
        this.loadingController
            .create({
                  message:'Cambio password',
                  spinner:'circular',
                  backdropDismiss: true
            })
            .then(elLoading => {
              elLoading.present();

              //Effettuo la richiesta
              this.startService.recoveryUpdatePassword(this.utenteRecovery, this.docRichiestaCodici)
                               .then((risposta: AccountOperationResponse) => {

                                  elLoading.dismiss();

                                  if (risposta) {
                                    if (risposta.result) {

                                      //Svuoto la form secondaria
                                      this.emptyFormSecondary();

                                      //Mi sposto sulla pagina di Login
                                      this.indexShowForm = 1;
                                      this.moveStepRecovery('input');

                                      //Mostro il messaggio
                                      myMessage = '<p><strong>Complimenti</strong>, la password è stata aggiornata correttamente</p>'
                                      myMessage += '<p>Inserire le credenziali (email/password) ed effettuare l\'accesso</p>'
                                      
                                      this.startService.presentAlertMessage(myMessage, 'Aggiornamento Password');

                                    }
                                    else {
                                      myMessage = '<p>' + risposta.message + '</p>';
                                      myMessage += '<p>Ahime credo qualcosa sia andato storto<p>'
                                      this.startService.presentAlertMessage(myMessage, 'Aggiornamento Fallito');
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
            })        


      }
      else {
        this.startService.presentAlertMessage('Modifica la password scelta e ripeti la conferma');
      }
    }
  }
  

  //#endregion

  //#region USERINTERFACE METHOD

  /**
   * Cambia la form di Visualizzazione
   */
  changeForm():void {
    let myMessage = '';
    let myButtons: AlertButton[];

    //Cambio anche l'immagine
    this.setImageLogin();

  
    if (this.indexShowForm == 1) {
      //Passo a modalità Recovery
      this.indexShowForm = 2;
      this.moveStepRecovery('input');
    }
    else {
      //Vorrei tornare alla login
      if (this.stepRecovery != 'input') {

        myMessage = '<p>' + 'Si sta abbandonando il processo di modifica password senza aver concluso.' + '</p>';
        myMessage += '<p>Eventualmente, sarà necessario <strong>ripetere<strong> l\'intera procedura</p>';
        myMessage += '<p class="ion-text-bold ion-text-danger">Si desidera proseguire ?</p>'

        myButtons = [{
            text: 'Si, procedi',
            handler: () => {
              //Svuoto la form secondaria
              this.emptyFormSecondary();
              //Mi sposto sulla prima pagina
              this.indexShowForm = 1;
              //Porto lo step a input
              this.moveStepRecovery('input');
            }
          },
          {
            text: 'No, aspetta',
            role: 'cancel'
          }]

          //Chiediamo cosa fare
          this.startService.presentAlertMessage(myMessage, 'Torna a Login', myButtons);

      }
      else {
        //Posso andare senza chiedere nulla
        //Svuoto la form secondaria
        this.emptyFormSecondary();
        //Mi sposto sulla prima pagina
        this.indexShowForm = 1;
        //Porto lo step a input
        this.moveStepRecovery('input');
      }
    }
  }  

  
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
  closeModal(openFormRegistration: boolean = false) {

    this.modalCtrl.dismiss()
                  .then(isClosed => {
                    if (isClosed && openFormRegistration) {
                      this.startService.openFormRegistration();
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
      case 'currentpassword':
          this.showCurrentPassword = !this.showCurrentPassword;
          elementDOM.type = (this.showCurrentPassword ? 'text':'password');
        break;

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
