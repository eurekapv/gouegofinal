import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertButton, IonInput, LoadingController, ModalController, NavParams } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { MyDateTime } from 'src/app/library/models/mydatetime.model';
import { CryptoService } from 'src/app/library/services/crypto.service';
import { AccountOperationResponse, AccountRequestCode, AccountVerifyCode } from 'src/app/models/accountregistration.model';
import { Area } from 'src/app/models/area.model';
import { AreaLink } from 'src/app/models/arealink.model';
import { Gruppo } from 'src/app/models/gruppo.model';
import { LogApp } from 'src/app/models/log.model';
import { ParamsVerificaAccount } from 'src/app/models/params-verifica-account.model';
import { Utente } from 'src/app/models/utente.model';
import { PageType, Sesso, TipoVerificaAccount, ValueList } from 'src/app/models/valuelist.model';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-user-data-verification',
  templateUrl: './user-data-verification.page.html',
  styleUrls: ['./user-data-verification.page.scss'],
})
export class UserDataVerificationPage implements OnInit, OnDestroy {

  formPagePrimary: FormGroup;

  informationText: string = 'Prima di continuare ti chiediamo di controllare i tuoi dati, inserire i mancanti e confermare';
  linkPolicy: string = '';

  srcImage: string = `assets/profile/user-login-1.png`;

  gruppoDoc: Gruppo;
  areaDoc: Area;
  subListenArea: Subscription;  
  
  utenteVerification: Utente;
  subListenUtente: Subscription;  

  //Documento per la richiesta codici
  docRichiestaCodici: AccountRequestCode;
  docVerificaCodici: AccountVerifyCode;

  //Lunghezza del codice di verifica
  verificationCodeLength: number = 5;  
  flagShowMailCode = false;
  flagShowSmsCode = false;

  

  //Step della registrazione
  stepRegistration: 'input' | 'code' | 'final'  = 'input';

  //Modalità prevista per effettuare la registrazione
  registrationMode: 'none' | 'mail' | 'mobile' | 'all' = 'all'; 

  //lista delle decodifiche del sesso
  listSesso : ValueList[]=[];
  //Oggi in formato ISO
  todayISO: string;  

  showInputCodeMail = false;
  showInputCodeMobile = false;

  //Specifica cosa dovrei fare
  paramsVerification: ParamsVerificaAccount = new ParamsVerificaAccount();

  colorItemGroup = 'success'; 

  constructor(private startService: StartService,
              private cryptoService:CryptoService,
              private modalCtrl:ModalController,
              private navParams: NavParams,
              private loadingController: LoadingController) {
                    
                //recupero le decodifiche della lista sesso
                this.listSesso= ValueList.getArray(Sesso);

                //il giorno attuale per filtrare la data di nascita in input
                this.todayISO=MyDateTime.formatDateISO(new Date(), "date");

                //Preparo un eventuale documento per la richiesta codici
                this.docRichiestaCodici = new AccountRequestCode();
                
               }

  ngOnInit() {
    this.stepRegistration = 'input';

    //Qui imposto la modalita
    this.setRegistrationMode();

    this.onListenDoc();

    
    this.setImageLogin();
    this.setInformationText();
  }


  ngOnDestroy() {
    if (this.subListenArea) {
      this.subListenArea.unsubscribe();
    }

    if (this.subListenUtente) {
      this.subListenUtente.unsubscribe();
    }    
  } 

  //#region RECUPERO DOCUMENTI

  /**
   * In attesa di alcuni documenti
   */
  onListenDoc() {

    this.subListenUtente = this.startService.activeUtenteDoc$
                                            .subscribe({
                                              next: (dataUser) => {
                                                //Con l'arrivo utente posso eseguire il fill
                                                //dei dati
                                                this.utenteVerification = dataUser;
                                                //Compilo la form
                                                this.createFormPagePrimary();

                                              }
                                              ,error: (dataError) => {
                                                LogApp.consoleLog(dataError, 'error');
                                              }
                                            })

    this.subListenArea = this.startService.areaSelected
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

    if (this.gruppoDoc) {

      switch (this.gruppoDoc.APPTIPOVERIFICA) {
        case TipoVerificaAccount.noverifica:
              this.registrationMode = 'none';
          break;
        case TipoVerificaAccount.verificaemail:
          this.registrationMode = 'mail';
          break;

        case TipoVerificaAccount.verificasms: 
          this.registrationMode = 'mobile'
          break;
        
        case TipoVerificaAccount.verificaemailsms:
            this.registrationMode = 'all';
          break;
      
        default:
          this.registrationMode = 'none';
          break;
      }
    }
    else {
      this.registrationMode = 'none';
    }

  }    

  /**
   * Passando una tipologia semplice, controlla il registrationMode e dice se è da attivare
   * @param type 
   */
  registrationModeCheckFor(type: 'mail' | 'mobile') : boolean {
    let flagValue = false;

    if (this.registrationMode == 'all') {
      flagValue = true;
    }
    else {
      flagValue = (this.registrationMode == type);
    }

    return flagValue;
  }
  //#endregion

  //#region FORM DATA VERIFICATION

  createFormPagePrimary() {
    let patternCodiceFiscale = '^[A-Za-z]{6}[0-9]{2}[A-Za-z]{1}[0-9]{2}[A-Za-z]{1}[0-9]{3}[A-Za-z]{1}';
    let pattTelefono = '^[+]*[0-9]{7,}';
    //Spiegazione pattern 
    //Per altre spiegazioni guardare qui https://regexr.com/3c53v

    // ^ Il match parte dall'inizio della stringa
    // [+] Qualsiasi elemento contenuto nelle quadre (quindi il +)
    // * la regola precedente è opzionale
    // [0-9] Qualsiasi elemento delle quadre
    // {7,} i valori [0,9] almeno per 7 caratteri o piu
    // * la regola precedente è opzionale    

    if (this.utenteVerification) {

      this.formPagePrimary=new FormGroup({
        profileName:new FormControl<string>(
            {
              value:this.utenteVerification.NOME,
              disabled: false,
            }, {
          updateOn:'change',
          validators: [Validators.required]
        }),
        profileSurname:new FormControl<string>(
          {
            value: this.utenteVerification.COGNOME,
            disabled: false
          }, 
          {
          updateOn:'change',
          validators: [Validators.required]
        }),
        profileEmail: new FormControl<string>(
          {
            value:this.utenteVerification.EMAIL, 
            disabled: false
          }, 
          {
            updateOn: 'change',
            validators: [Validators.required]
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
        profileMobile: new FormControl<string>(
            {
              value:this.utenteVerification.MOBILENUMBER, 
              disabled: false
            }, 
            {
              updateOn: 'change',
              validators: [Validators.required,  Validators.pattern(pattTelefono)]
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
        codiceFiscale:new FormControl<string>({
              value: this.utenteVerification.CODICEFISCALE,
              disabled: false}
              , {
              updateOn:'change',
              validators: [Validators.pattern(patternCodiceFiscale)]
            }),
        sesso:new FormControl<number>({
          value: this.utenteVerification.SESSO,
          disabled: false
          }, {
          updateOn:'change',
          validators: []
        }),
        indResidenza:new FormControl<string>({
          value: this.utenteVerification.INDIRIZZO,
          disabled: false
        },{
          updateOn:'change',
          validators: []
        }),
        capResidenza:new FormControl<string>({
          value: this.utenteVerification.CAP,
          disabled: false
        },{
          updateOn:'change',
          validators: []
        }),
        comResidenza: new FormControl<string|null>({
          value: this.utenteVerification.COMUNE,
          disabled: false
        }, {
          updateOn:'change',
          validators: [Validators.required]
        }),
        provResidenza:new FormControl<string>({
          value: this.utenteVerification.PROVINCIA,
          disabled: false
        }, {
          updateOn:'change',
          validators: []
        }),
        statoResidenza:new FormControl<string>({
          value: this.utenteVerification.ISOSTATO,
          disabled: false}
          , {
          updateOn:'change',
          validators: []
        }),      

      })

      //Valore Email Modificato
      this.formPagePrimary.get('profileEmail').valueChanges.subscribe({
        next: (value: string) => {
          console.log(value);
          //Modificato il campo EMAIL
          this.onChangeFlagShowMailCode(false, value);
        }
      })

      //Valore Mobile Modificato
      this.formPagePrimary.get('profileMobile').valueChanges.subscribe({
        next: (value: string) => {
          console.log(value);
          //Modificato il campo Mobile, passo il valore del campo
          this.onChangeFlagShowSmsCode(false, value);
        }
      })

      //Prima impostazione Disable/Enable
      this.onChangeFlagShowMailCode();
      this.onChangeFlagShowSmsCode();


    }
  }

  /**
   * Imposta il flag flagShowSmsCode e imposta il campo form verificationMailCode enable/disable di conseguenza
   * per evitare errori ngIf
   * @param useFormValue TRUE = Usa il valore contenuto nel campo formPagePrimary.profileEmail / FALSE = il parametro passato
   * @param alternativeText Viene effettuato il controllo con questo campo
   */
  onChangeFlagShowMailCode(useFormValue: boolean = true, alternativeText?: string): void {
    let flagShow = false;
    let valueCompare = '';

    valueCompare = useFormValue ? this.formPagePrimary.value.profileMobile : alternativeText;    
    
    //Qui mi dice che per impostazione dovrei avere una mail verificata
    let toVerify = this.registrationModeCheckFor('mail');

    //Dovrei avere la MAIL verificata
    if (toVerify) {
      if (this.utenteVerification && this.formPagePrimary) {
        if (this.utenteVerification.EMAIL != valueCompare) {
          //Devo verificare
          flagShow = true;
        }
        else if (this.utenteVerification.VERIFICATAMAIL == false) {
          //La mail non è verificata
          flagShow = true;
        }
      }
    }

    if (flagShow) {
      this.formPagePrimary.get('verificationMailCode').enable();
    }
    else {
      this.formPagePrimary.get('verificationMailCode').disable();
    }

    this.flagShowMailCode = flagShow;    
  }

  
  /**
   * Imposta il flag flagShowSmsCode e imposta il campo form verificationSmsCode enable/disable di conseguenza
   * per evitare errori ngIf
   * @param useFormValue TRUE = Usa il valore contenuto nel campo formPagePrimary.profileMobile / FALSE = il parametro passato
   * @param alternativeText Viene effettuato il controllo con questo campo
   */
  onChangeFlagShowSmsCode(useFormValue: boolean = true, alternativeText?: string): void {
    let flagShow = false;
    let valueCompare = '';

    valueCompare = useFormValue ? this.formPagePrimary.value.profileMobile : alternativeText;

    console.log(this.formPagePrimary.value.profileMobile)
    
    //Qui mi dice che per impostazione dovrei avere un NUMERO MOBILE VERIFICATO
    let toVerify = this.registrationModeCheckFor('mobile');

    //Dovrei avere la MOBILE verificata
    if (toVerify) {
      if (this.utenteVerification && this.formPagePrimary) {
        if (this.utenteVerification.MOBILENUMBER != valueCompare) {
          //Il numero Mobile presente nella form è diversa da quella precedente
          //Devo verificare
          flagShow = true;
        }
        else if (this.utenteVerification.VERIFICATAMOBILE == false) {
          //Numero Mobile non è verificata
          flagShow = true;
        }
      }
    }

    if (flagShow) {
      this.formPagePrimary.get('verificationSmsCode').enable();
    }
    else {
      this.formPagePrimary.get('verificationSmsCode').disable();
    }

    this.flagShowSmsCode = flagShow;
  } 

  /**
  * Cambiamento del Codice Fiscale
  */
  onCfChange(){

      //se il cf cambia, quando l'utente esce dalla casella, provo a validarlo e riempire gli altri campi
      let codFiscString: string = this.formPagePrimary.value.codiceFiscale;
  
      if (codFiscString!=null && codFiscString!=undefined){
        
        if (codFiscString.length != 0){
    
          //chiamo il servizio per decodificare il codice fiscale
          this.startService.checkCodiceFiscale(codFiscString, true).then(codFiscObj => {
            
            //inserisco tutto quello che ho decodificato nel utente
            this.utenteVerification.NATOISOSTATO='ITA';
            this.utenteVerification.NATOA=codFiscObj.comune;
            this.utenteVerification.NATOPROV=codFiscObj.provincia;
            this.utenteVerification.NATOIL=codFiscObj.dataNascita;
            this.utenteVerification.SESSO=codFiscObj.sesso;
            this.utenteVerification.NATOCAP=codFiscObj.cap;
            
  
            //aggiorno i campi del form
            this.formPagePrimary.get('sesso').setValue(this.utenteVerification.SESSO);

  
            //setto il campo cf come valido
            this.formPagePrimary.controls['codiceFiscale'].setErrors(null);
  
    
          }).catch(err => {
  
            //qui in teoria il cf non ha passato neppure il check base, segno il campo come non valido
            this.formPagePrimary.controls['codiceFiscale'].setErrors({'incorrect':true});
            LogApp.consoleLog(err,'error');
          })
        }
      }
    }

    //#endregion

  //#region METODI ACTION

    /**
   * Attenzione il documento deve essere istanziato esternamente
   * @param requestFor E' possibile anche fare compilare 1 solo campo (mail o mobile)
   */
    prepareRichiestaCodiciDoc(requestFor: 'mail' | 'mobile') {

      this.docRichiestaCodici.IDUTENTE = this.utenteVerification.ID;
      this.docRichiestaCodici.IDAREA = this.areaDoc.ID;


      //La registrazione non prevede l'invio di codici
      if (this.registrationMode == 'none') {
        //Non imposto nulla
        this.docRichiestaCodici.REQUESTEMAILCODE = false;
        this.docRichiestaCodici.REQUESTSMSCODE = false;
      }
  
      //Preparo il documento per la modalita Mail
      if (this.registrationMode == 'mail' || this.registrationMode == 'all'){
        if (requestFor == 'mail') {
  
          //Popolo il documento per la richiesta Mail
          this.docRichiestaCodici.REQUESTEMAILCODE = true;
          this.docRichiestaCodici.EMAIL = this.formPagePrimary.value.profileEmail;
        }
      }
  
      //Preparo il documento per la modalita Mobile
      if (this.registrationMode == 'mobile' || this.registrationMode == 'all') {
  
        if (requestFor == 'mobile') {
  
          //Popolo il documento per la richiesta SMS
          this.docRichiestaCodici.REQUESTSMSCODE = true;
          this.docRichiestaCodici.TELEPHONE = this.formPagePrimary.value.profileMobile;
        }
      }    
  
    }

  /**
   * Handler Pulsante Interfaccia per il reinvio codice
   * @param type 
   */
  onRequestReinvioCode(type: 'mail' | 'mobile') {
    let myMessage: string = '';
    let arButtons: AlertButton[] = [];
    let valueContact = '';

    //Per inviare devo avere la mail o il mobile number
    valueContact = (type == 'mail' ? this.formPagePrimary.value.profileEmail : this.formPagePrimary.value.profileMobile);

    if (!valueContact || valueContact.length == 0) {

        myMessage = (type == 'mail' ? 'Specificare una e-mail valida' : 'Specificare un numero mobile valido');
        this.startService.presentAlertMessage(myMessage);
    }
    else {
      //Posso chiedere se vuole inviare
      if (type == 'mail') {
  
        myMessage = '<p>Desideri che venga inviato un nuovo codice tramite un </p>'
        myMessage += `<p>messaggio E-mail a <strong>${this.formPagePrimary.value.profileEmail}</strong> ?</p>`;
  
      }
      else if (type == 'mobile') {
  
        myMessage = '<p>Desideri che venga inviato un nuovo codice tramite un </p>'
        myMessage += `<p>Messaggio SMS al numero <strong>${this.formPagePrimary.value.profileMobile}</strong> ?</p>`;
  
      }
      
  
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
      this.startService.presentAlertMessage(myMessage, 'Invio Codice', arButtons);
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
                .verificationSendCodici(this.docRichiestaCodici)
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


  onSubmitData() {
    let flagValidation = false;

    flagValidation = this.onValidationData();


  }
  
  /**
   * Valida le Informazioni dell'Utente
   */
  onValidationData(): boolean {
    let flagValidation = false;
    let codeValue = '';
    let arMessage: string[] = [];
    let myMessage = '';

    //I dati sono validi
    if (this.formPagePrimary.valid) {
      flagValidation = true;

      //Serve il Codice Mail
      if (this.flagShowMailCode) {
        codeValue = this.formPagePrimary.value.verificationMailCode;
        //Non l'ha impostato
        if (!codeValue || codeValue.length == 0) {
          flagValidation = false;
          arMessage.push('Indicare il Codice ricevuto <strong>via mail</strong>');
        }
      }

      //Serve il Codice SMS
      if (this.flagShowSmsCode) {
        codeValue = this.formPagePrimary.value.verificationSmsCode;
        //Non l'ha impostato
        if (!codeValue || codeValue.length == 0) {
          flagValidation = false;
          arMessage.push('Indicare il Codice ricevuto <strong>via SMS</strong>');
        }
      }      

      if (!flagValidation) {

        if (arMessage.length == 0) {
          myMessage = '<p>Controllare il seguente errore:<p>';
          myMessage += `<p>${arMessage[0]}<p>`;
        }
        else {
          myMessage = '<p>Controllare i seguenti errori:<p>';
          for (let index = 0; index < arMessage.length; index++) {
            const elMessage = arMessage[index];
            myMessage += `<p>${elMessage}<p>`;
          }
        }
      }

    }
    else {
      //Form non valida
      flagValidation = false;
      myMessage = 'Controllare le informazioni mancanti o errate';
      let nameFields = ['profileName', 'profileSurname', 'profileEmail', 'profileMobile', 'comResidenza'];

      nameFields.forEach(elField => {

        if (this.formPagePrimary.get(elField).hasError) {
  
          this.formPagePrimary.get(elField).markAsTouched();
        }
      })

    }

    if (!flagValidation) {
      this.startService.presentAlertMessage(myMessage);
    }

    return flagValidation;

  }
    //#endregion


    
    
    //#region INTERFACE METHOD

    /**
   * Imposta il messaggio informativo superiore sulla base dello stepRegistrazione e la Modalità
   */
  setInformationText() {
      let myText = '';
  
      myText = 'Prima di continuare ti chiediamo di controllare i tuoi dati, inserire i mancanti e confermare';

  
      this.informationText = myText;
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


   //Apre il link delle Policy se presente
   openPolicyLink() {
    
    if (this.linkPolicy && this.linkPolicy.length != 0) {
       this.startService.openLink(this.linkPolicy);
    }

    
  }

  //#endregion  
}
