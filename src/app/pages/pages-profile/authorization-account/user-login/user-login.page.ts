import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, AbstractControl } from '@angular/forms';
import { ModalController, LoadingController, ToastController, NavController, AlertController, IonInput } from '@ionic/angular';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Subscription } from 'rxjs';
import { StartService } from 'src/app/services/start.service';
import { Utente } from 'src/app/models/utente.model';
import { Gruppo } from 'src/app/models/gruppo.model';
import { TipoVerificaAccount, PageType, RequestPincodeUse } from 'src/app/models/valuelist.model';
import { Area } from 'src/app/models/area.model';
import { AreaLink } from 'src/app/models/arealink.model';
import { AccountRequestCode, AccountOperationResponse, AccountVerifyCode } from 'src/app/models/accountregistration.model';

import { CryptoService } from 'src/app/library/services/crypto.service';
import { CodiceFiscale } from 'src/app/models/codicefiscale.model';
import { UserPasswordRecoveryPage } from '../user-password-recovery/user-password-recovery.page';
import { PostResponse } from 'src/app/library/models/postResult.model';
import { LogApp } from 'src/app/models/log.model';
import { SupportFunc } from 'src/app/library/models/support-func.model';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
})
export class UserLoginPage implements OnInit {

  /**
   * E' possibile passare un valore 'login' o 'register'
   */
  @Input() set startSection(value: 'login' | 'register')  {
    if (value == 'login') {

      //Pagina di login
      this.actualStatePage = PageState.LOGIN;

      //Segment Option puo' essere solo Login/Registration
      this.actualStateSegment = PageState.LOGIN;
    }
    else if (value == 'register') {

      //Segment Option puo' essere solo Login/Registration
      this.actualStateSegment = PageState.REGISTRATION;      

      this.actualStatePage = this.stepRegistration[this.indexStepRegistration];

    }
  }

  //per utilizzare l'enum nell'html
  pageState: typeof PageState=PageState;
  tipoVerifica: typeof TipoVerificaAccount = TipoVerificaAccount;

  //variabile che indica lo stato della pagina
  //Se posizionato su Login, Register, Verifiy o Welcome
  actualStatePage:PageState = PageState.LOGIN;
  
  //Situazione del Segment (Login o Register)
  actualStateSegment: PageState = PageState.LOGIN;

  //Nel caso di registrazione indica a che punto ci si trova
  registrationStep: PageState;

  //Array con gli step possibili in registrazione
  stepRegistration: PageState[] = [];
  indexStepRegistration: number = 0;

  //Documento per la richiesta invio codici al server
  docRichiestaCodici: AccountRequestCode = new AccountRequestCode();


  //Registrazione possibile in app
  registrationInApp: boolean = false; 

  //Codici di verifica
  codeVerificationMail: string = '';
  codeVerificationSms: string = '';

  //Lunghezza del codice di verifica
  codeLength: number = 5;


  //varibili formGroup (per usare i reactive forms)
  formRegister: UntypedFormGroup; 
  formLogin: UntypedFormGroup;
  formContact: UntypedFormGroup;
  //Immagine del gruppo sportivo (Icona o Logo)
  urlImage: string = '';

  //Boolean per mostrare nascondere password
  showCurrentPassword: boolean = false;
  showPassword1: boolean = false;
  showPassword2: boolean = false;

  

  //Dati
  startConfig:StartConfiguration;
  startListen: Subscription;
  docGruppo: Gruppo;
  docArea: Area;
  

  //Utente
  docUtente= new Utente();

  //Restituisce true se l'app sta girando su Desktop
  isDesktop:boolean;

  //Verifiche
  emailVerificationYES: boolean = false;
  smsVerificationYES: boolean = false;
  emailVerificata: string = ''; //Email verificata
  telVerificato: string = ''; //Numero telefono Verificato
  colorButton = 'tertiary'; //Colore dei bottoni di login



  constructor(
    private modalCtrl:ModalController,
    private startService:StartService,
    private loadingCtrl:LoadingController,
    private alertCtrl: AlertController,
    private cryptoService: CryptoService
  ) {

    
    //Stato Pagina registrazione
    this.indexStepRegistration = 0;
    

    //Posizionato sulla pagina di login
    this.actualStatePage = PageState.LOGIN;


    //Segment Option puo' essere solo Login/Registration
    this.actualStateSegment = PageState.LOGIN;
   


    //Richiedo lo startConfig
    this.startListen = startService.startConfig.subscribe(data=>{
                
                //Memorizzo lo StartConfig
                this.startConfig=data;

                //Imposto l'immagine aziendale da mostrare 
                this.setUrlImageLogo();

                //Nel gruppo è specificato se è possibile effettuare 
                //registrazioni con l'app
                if (this.startConfig && this.startConfig.gruppo) {

                  //Memorizzo il Gruppo con le sue Opzioni
                  this.docGruppo = this.startConfig.gruppo;

                  //Abilitazione / Disabilitazione registrazione in App
                  this.registrationInApp = this.startConfig.gruppo.APPFLAGREGISTRAZIONE;

                  //Creo un Array con gli step di registrazione
                  this.createArrayStepRegistration(this.docGruppo);
                }
    });

    //Prelevo l'area selezionata 
    this.docArea = this.startService.areaSelectedValue;
  

   }

  ngOnInit() {
    this.createLoginForm();
    this.createRegisterForm();
    this.createContactForm();
    
    this.isDesktop=this.startService.isDesktop;
  }

  /**
   * Titolo da applicare alla videata
   */
  getCaptionTitle(): string {
    let strTitle: string;

    if (this.actualStateSegment == PageState.LOGIN) {
      strTitle = 'Login';
    }
    else {
      strTitle = 'Nuovo Account';
    }

    return strTitle;
  }

  /**
   * Ritorna il nome del Gruppo
   */
  get nameGruppoSportivo(): string {
    let myName: string = '';

    if (this.docGruppo) {
      myName = this.docGruppo.DENOMINAZIONE;
    }

    return myName;
  }

  /**
   * Indica se bisogna mostrare la parte superiore con del testo
   */
  get showHeaderText(): boolean {
    let showHeader = true;

    if (this.isDesktop == false) {
      
      switch (this.actualStatePage) {
        case PageState.WELCOME:
          showHeader = false;
          break;
        
        case PageState.LOGIN:
            showHeader = true;
            break;

        case PageState.CONTACT:
          showHeader = true;
          break;    
          
        case PageState.VERIFY:
          showHeader = true;
          break;         

        case PageState.REGISTRATION:
          showHeader = false;
          break;          
      
        default:
          break;
      }
    }
    else {
      showHeader = false;
    }

    return showHeader;
  }

  /**
   * Indica se bisogna mostrare una immagine nella parte inferiore
   */
   get showFooterImage(): boolean {
    let showImage = true;

    //Mostro solo in mobile l'immagine per riempire
    if (this.isDesktop == false) {

      switch (this.actualStatePage) {
        case PageState.WELCOME:
          showImage = false;
          break;
        
        case PageState.LOGIN:
            showImage = true;
            break;
  
        case PageState.CONTACT:
          showImage = true;
          break;    
          
        case PageState.VERIFY:
          showImage = true;
          break;         
  
        case PageState.REGISTRATION:
          showImage = false;
          break;          
      
        default:
          break;
      }
      
    }
    else {
      showImage = false;
    }

    return showImage;
  }  

  /**
   * Recupera l'icona quadrata del centro sportivo, oppure quella rettangolare
   */
  setUrlImageLogo():void {
    let myUrl = '';

    if (this.startConfig) {
      //Prima chiedo l'icona quadrata
      myUrl = this.startConfig.getUrlIcon();

      if (!myUrl || myUrl.length == 0) {
        //Chiedo quella rettangolare
        myUrl = this.startConfig.getUrlLogo();
      }
    }

    this.urlImage = myUrl;
  }

  /**
   * Ritorna TRUE se siamo nel segmento del Login
   */
  get isSegmentLogin(): boolean {
    let isLogin = false;

    isLogin = (this.actualStateSegment == PageState.LOGIN);

    return isLogin;
  }

  /**
   * Etichetta mostrata nella pagina di registrazione
   * sotto agli input
   */
  get labelFooterRegistrazione(): string {
    let myLabel: string = '';

    if (this.docGruppo) {
      switch (this.docGruppo.APPTIPOVERIFICA) {
        case TipoVerificaAccount.noverifica:
            myLabel = 'al termine della registrazione utilizzare l\'indirizzo email per accedere al proprio account';
          break;

        case TipoVerificaAccount.verificaemail:
          myLabel = 'sarà inviata una email contenente un codice di convalida da inserire per poter accedere al proprio account';
        break;

        case TipoVerificaAccount.verificaemailsms:
          myLabel = 'sarà inviata una email ed un SMS contenente i codici di convalida da inserire per poter accedere al proprio account';
        break;        

        case TipoVerificaAccount.verificasms:
          myLabel = 'sarà inviato un SMS contenente il codice di convalida da inserire per poter accedere al proprio account';
        break;                
      
        default:
          break;
      }
    }
    return myLabel;
  }

  /**
   * Modifica dello stato del segment
   */
  onSegmentChanged(ev:any) {
    //Vuole tornare al login
    if (ev.detail.value == PageState.LOGIN) {
      this.actualStatePage = PageState.LOGIN;
    }
    else {
      //Lo stato della pagina
      this.actualStatePage = this.stepRegistration[this.indexStepRegistration];
    }
  }


  /**
   * Crea un array con i passaggi disponibili in registrazione
   * a seconda delle richieste del gruppo
   * Se il gruppo non vuole verifiche, si passa subito ai dati
   */
  createArrayStepRegistration(docGruppo: Gruppo) {
    this.stepRegistration = [];

    

    if (docGruppo.APPFLAGREGISTRAZIONE == true) {

      //Pagina dei contatti Email/SMS
      this.stepRegistration.push(PageState.CONTACT);

      if (docGruppo.APPTIPOVERIFICA !== TipoVerificaAccount.noverifica) {
        //La pagina di Verifica è necessaria alla registrazione
        this.stepRegistration.push(PageState.VERIFY);
      }

      //Dati di registrazione
      this.stepRegistration.push(PageState.REGISTRATION);
      //Fase Finale
      this.stepRegistration.push(PageState.WELCOME);

    }
  }

  /**
   * Effettua l'avanzamento di pagina nello Step Registrazione
   * @param skipVerifica Nel caso fosse la pagina di verifica salta a quella successiva
   */
  nextStepRegistration(skipVerifica: boolean = false) {
    
    
    if (this.indexStepRegistration + 1 < this.stepRegistration.length) {
      
      for (let index = this.indexStepRegistration + 1; index < this.stepRegistration.length; index++) {
        let find = true;
        const element = this.stepRegistration[index];
        
        if (skipVerifica && element == PageState.VERIFY) {
          //Fingo di non aver trovato cosi sto dentro
          find = false;
        }
        
        if (find) {
          this.indexStepRegistration = index;
          this.actualStatePage = element;
          break;
        }
      }
    }
  }

  /**
   * Torna indietro negli Step di Registrazione
   */
  backStepRegistration() {

    if (this.indexStepRegistration - 1 >= 0) {
      
      for (let index = this.indexStepRegistration -1; index >= 0; index--) {
        
        const element = this.stepRegistration[index];
        this.indexStepRegistration = index;
        this.actualStatePage = element;
        break;
        }
      }
    }    
  




  /**
   * Chiusura della videata
   */  
  closeModal(){
    this.modalCtrl.dismiss();
  }



  /**
   * Pulsante Avanti o Acced presente nel footer
   */
  onClickFooterAvanti() {
    
    switch(this.actualStatePage) {
      case PageState.LOGIN:
          //Siamo sul Login e quindi gestisco la fase di login
          this.onClickLogin();
        break;

      case PageState.CONTACT:
          //Siamo sulla pagina dei Contatti e dobbiamo gestirne la fase
          this.onClickAvantiContact();
        break;

      case PageState.VERIFY:
        //Siamo sulla pagina di inserimento codici da verificare
        this.onClickAvantiVerifica();
        break;

      case PageState.REGISTRATION:
        //Siamo nella parte finale della registrazione con i dati 
        //e l'invio dei dati al server
        this.onClickRegistrati();
      
      default:
        break;

    }
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
      //Apro il loading Controller per verificare
      this.loadingCtrl
        .create({
          message: 'Controllo credenziali'
        })
        .then((element) => {

          //Creo il loading
          element.present();

          // Chiamo il Servizio per eseguire l'autorizzazione
          this.startService
            .userLogin(this.formLogin.value.username, this.formLogin.value.password)
            .then((dataResult:PostResponse) => {

                //Chiudo lo Spinner
                element.dismiss();

                // E' Arrivata una risposta NEGATIVA
                if (!dataResult.result) {
                  this.startService.presentAlertMessage(dataResult.message);
                }
                else {
                  //LOGIN ACCETTATO
                  
                  // MEMORIZZO LE CREDENZIALI PER UN SUCCESSIVO RECUPERO
                  this.startService.saveUserCredential(this.formLogin.value.username,this.formLogin.value.password);

                  //Resetto la form
                  this.formLogin.reset();
                  
                  //Chiudo la modale
                  this.closeModal();
                }
            })
            .catch(error => {
              let myMsg = '';
              myMsg =  SupportFunc.htmlParagraph(error);
              
                //Chiudo il Loading Controller
                element.dismiss();
                //Visualizzo il messaggio
                this.startService.presentAlertMessage(myMsg, 'Ops...Si è verificato un errore');
                LogApp.consoleLog(error);
            })
        })
    }

  }
  
  /**
   * evento scatenato quando l'utente clicca su "reimposta password"
   */
  onClickReimpostaPsw(){
    this.modalCtrl.create({
      component:UserPasswordRecoveryPage
    }).then(elModal=>{
      elModal.present();
      this.modalCtrl.dismiss();
    })
  }

  //#region GESTIONE PAGINA CONTATTI E CODICI

  /*
  L'intera fase di registrazione è gestita con un array this.stepRegistration
  Dentro ci sono i passaggi richiesti (che sono variabili a seconda delle verifiche richieste)

  this.indexStepRegistration è l'indice dell'array su cui siamo posizionati
  this.actualStatePage è lo Stato Attuale (recuperato dall'array)

  */

  /**
   * Click di Avanti sulla pagina con i contatti
   */
  onClickAvantiContact() {
    //Ci sono diversi stati da gestire per andare avanti da questa pagina
    //La variabile docGruppo.APPTIPOVERIFICA indica le verifiche richieste
    let inpEmail = this.formContact.value.email;
    let inpTel = this.formContact.value.telephone;
    let needPageVerify: boolean = true;
    let prosegui: boolean = false;
    let message: string = '';


    //Le due variabili
    //this.smsVerificationYES
    //this.emailVerificationYES
    //indicano cosa bisogna ancora verificare

    //Stato 1: Le verifiche sono già effettuate e 
    //nessun campo è stato modificato dopo la verifica
    //Stato 2: Non sono richieste verifiche


    //Nessuna verifica da apportare
    if (this.docGruppo.APPTIPOVERIFICA == TipoVerificaAccount.noverifica) {
      
      //Imposto email e sms verificati
      this.emailVerificationYES = true;
      this.smsVerificationYES = true;

      //Non serve la pagina di verifica
      needPageVerify = false;
      prosegui = true;

      //Nessuna richiesta codici da effettuare
      this.docRichiestaCodici.REQUESTSMSCODE = false;
      this.docRichiestaCodici.REQUESTEMAILCODE = false;

    }
    else {

      //Bisogna verificare qualcosa
      switch(this.docGruppo.APPTIPOVERIFICA) {

        case TipoVerificaAccount.verificaemail:

          if (this.emailVerificationYES && this.emailVerificata == inpEmail) {
            //Tutto rimasto invariato, email è verificata si puo' bypassare la verifica

            //Non serve la pagina di verifica
            needPageVerify = false;
            prosegui = true;

            //non serve richiedere ancora il codice email
            this.docRichiestaCodici.REQUESTEMAILCODE = false;


          }
          else {
            //Email non verificata, oppure modificata
            //devo verificare

            //Serve la pagina di verifica
            needPageVerify = true;
            prosegui = true;

            //Bisogna richiedere ancora il codice email
            this.docRichiestaCodici.REQUESTEMAILCODE = true;
            this.docRichiestaCodici.EMAIL = inpEmail;

          }
          break;

        case TipoVerificaAccount.verificaemailsms:

          if ((this.emailVerificationYES && this.emailVerificata == inpEmail) && 
              (this.smsVerificationYES && this.telVerificato == inpTel)) {
            //Tutto rimasto invariato, email e Telefono verificati si puo' bypassare la verifica

            //Non serve la pagina di verifica
            needPageVerify = false;
            prosegui = true;

            //Nessuna richiesta ulteriore da effettuare
            this.docRichiestaCodici.REQUESTEMAILCODE = false;
            this.docRichiestaCodici.REQUESTSMSCODE = false;

          }
          else {
            //Email o Telefono non verificato, oppure modificato
            //devo verificare

            //Serve la pagina di verifica
            needPageVerify = true;
            prosegui = true;

            if (this.emailVerificationYES == false || this.emailVerificata !== inpEmail) {
              //Ha cambiato la mail dopo la verifica oppure non l ha mai verificato

              //Bisogna richiedere ancora il codice email
              this.docRichiestaCodici.REQUESTEMAILCODE = true;
              this.docRichiestaCodici.EMAIL = inpEmail;
            }

            if (this.smsVerificationYES == false || this.telVerificato !== inpTel) {
              //Ha cambiato il telefono dopo la verifica oppure non l ha mai verificato

              //Bisogna richiedere ancora il codice SMS
              this.docRichiestaCodici.REQUESTSMSCODE = true;
              this.docRichiestaCodici.TELEPHONE = inpTel;

            }


          }
          break;


          
        case TipoVerificaAccount.verificasms:

          if (this.smsVerificationYES && this.telVerificato == inpTel) {
            //Tutto rimasto invariato, Telefono è verificato si puo' bypassare la verifica

            //Non serve la pagina di verifica
            needPageVerify = false;
            prosegui = true;

            //Nessuna richiesta SMS da effettuare
            this.docRichiestaCodici.REQUESTSMSCODE = false;

          }
          else {
            //Telefono non verificato, oppure modificato
            //devo verificare

            //Serve la pagina di verifica
            needPageVerify = true;
            prosegui = true;

            //Bisogna richiedere ancora il codice SMS
            this.docRichiestaCodici.REQUESTSMSCODE = true;
            this.docRichiestaCodici.TELEPHONE = inpTel;


          }

          break;

        default:
          prosegui = false;
          message = 'Ops..qualcosa è andato storto';
          break;
      }
      
    }

    if (prosegui) {
      //Serve la pagina di verifica
      //Allora devo chiamare il server per inviare i codici
      if (needPageVerify) {

        //Chiamo il server, e se tutto va a buon fine andro alla verifica
        this.sendServerRichiestaCodici();
        
      }
      else {
        //Devo andare alla pagina successiva alla verifica
        const skipPageVerifica = true;
        this.nextStepRegistration(skipPageVerifica);
      }
    }
    else {

      //Visualizzo il messaggio
      this.startService.presentAlertMessage(message);


    }


  }

  /**
   * Chiede al server di inviare i codici pin necessari
   * Se tutto va a buon fine si sposta nella pagina di verifica, altrimenti segnala l'errore
   * @param onSuccessChangePage Se l'operazione ha successo passa alla pagina successiva
   * @param customMessage Se presente viene mostrato in caso di richiesta a buon fine
   */
  sendServerRichiestaCodici(onSuccessChangePage:boolean = true, customMessage?: string) {

    this.loadingCtrl
      .create({
          message: 'Invio Codici in corso...'
      })
      .then(element => {

        //Creo il loading
        element.present();

        //Ora chiedo al server di inviare i codici

        //Il documento contiene le informazioni necessarie
        //Aggiungo l'area nel caso non ci fosse
        this.docRichiestaCodici.IDAREA = this.docArea.ID;
        this.docRichiestaCodici.USE = RequestPincodeUse.forRegistration;

        //Chiamo il servizio
        this.startService
              .registrationSendCodici(this.docRichiestaCodici)
              .then((responseServer:AccountOperationResponse) => {

                //Chiudo il Loading Controller
                element.dismiss();

                //Qui in teoria i codici sono stati inviati
                //Memorizzo IDREFER per le chiamate successive
                this.docRichiestaCodici.IDREFER = responseServer.idRefer;

                //Azzero i flag che servono a richiedere i codici
                this.docRichiestaCodici.REQUESTSMSCODE = false;
                this.docRichiestaCodici.REQUESTEMAILCODE = false;

                //Mi sposto alla pagina successiva (di verifica)
                if (onSuccessChangePage) {
                  //Devo spostarmi alla pagina di verifica
                  const skipPageVerifica = false;
                  this.nextStepRegistration(skipPageVerifica);
                }

                //Se ho un messaggio da visualizzare lo mostro
                if (customMessage && customMessage.length!== 0) {
                    //Visualizzo il messaggio
                    this.startService.presentToastMessage(customMessage);
                }

              })
              .catch(err => {
                let myMsg = '';
                myMsg =  SupportFunc.htmlParagraph(err);
                //Chiudo il Loading Controller
                element.dismiss();
                //Visualizzo il messaggio
                this.startService.presentAlertMessage(myMsg, 'Ops...Si è verificato un errore');
                LogApp.consoleLog(err);
              })

      
    });
    
  }


  //#endregion


  //#region GESTIONE PAGINA VERIFICA

  /**
   * Controlla se è necessaria una verifica
   * In caso venga valorizzato tipo ritorna se necessaria quel tipo di verifica
   * @param tipo Tipo di verifica
   */
  canVerify(tipo?: TipoVerificaAccount):boolean {
    let result: boolean;

    if (this.docGruppo) {
      //Mi ha passato una tipologia
      if(tipo) {

        switch (tipo) {
          case TipoVerificaAccount.verificaemail:
              //Devo effttuare una verifica email ?
              result = [TipoVerificaAccount.verificaemail, TipoVerificaAccount.verificaemailsms].includes(this.docGruppo.APPTIPOVERIFICA)
            break;

            case TipoVerificaAccount.verificasms:
              //Devo effttuare una verifica SMS ?
              result = [TipoVerificaAccount.verificasms, TipoVerificaAccount.verificaemailsms].includes(this.docGruppo.APPTIPOVERIFICA)
            break;        
          default:
            break;
        }
      }
      else {
        result = [TipoVerificaAccount.verificaemail, TipoVerificaAccount.verificaemailsms, TipoVerificaAccount.verificasms].includes(this.docGruppo.APPTIPOVERIFICA)
      }
    }

    return result;
  }

  /**
   * evento scatenato quando l'utente tappa su "reinvia codice"
   * Eì possibile richiedere il reinvio di 1 solo codice alla volta
   * @param tipo Reinvio Codice Email oppure Sms
   */
  onClickReinviaCodice(tipo: TipoVerificaAccount){
    let askMessage = '';
    let askEmail = false;
    let askTel = false;

    if (this.docRichiestaCodici) {

      askMessage = 'Verrà inviato un nuovo codice a ';

      switch (tipo) {
        case TipoVerificaAccount.verificaemail:
            askMessage += this.docRichiestaCodici.EMAIL;
            //Uso le variabili temporanee per indicare che vorrebbe il codice in email
            askEmail = true;

          break;

        case TipoVerificaAccount.verificasms:
            askMessage += this.docRichiestaCodici.TELEPHONE;
            //Uso le variabili temporanee per indicare che vorrebbe il codice su telefono
            askTel= true;
          break;
      
        default:
          break;
      }

      //Faccio la richiesta se desidera un reinvio codici
      this.alertCtrl.create({
        header: 'Reinvio pincode',
        message: askMessage,
        buttons: [
          {
            text: 'Annulla',
            role: 'cancel',
          },
          {
            text: 'Reinvia',
            handler: () => {
              
              //Reimposto il documenti di Richiesta con quello che vuole
              this.docRichiestaCodici.REQUESTEMAILCODE = askEmail;
              this.docRichiestaCodici.REQUESTSMSCODE = askTel;

              const msg = 'Codice reinviato con successo';
              //Faccio la richiesta al server e indico di non cambiare
              //pagina al termine della richiesta
              this.sendServerRichiestaCodici(false, msg);
            }
          }
        ]
      })
      .then (element => {
        element.present();
      })

      
    }

  }

  
  /**
  * evento scatenato quando l'utente clicca sul pulsante conferma della videata di verifica
  * dei recapiti
  */
  onClickAvantiVerifica()
  {
    //Devo inviare al server i dati inseriti dall'utente
    let enable = this.isEnableAvantiOnVerify();
    let altMessage = '';
    let docVerify: AccountVerifyCode;

    if (!enable) {
      altMessage = 'Controllare i dati inseriti';
    }
    else {
      //I codici sono stati richiesti e dovrei avere l'IDREFER
      if (this.docRichiestaCodici && this.docRichiestaCodici.IDREFER) {
        
          if (this.docRichiestaCodici.IDREFER.length !== 0) {
            //Posso preparare il documento per la verifica
            docVerify = new AccountVerifyCode();
            docVerify.IDAREA = this.docRichiestaCodici.IDAREA;
            docVerify.IDREFER = this.docRichiestaCodici.IDREFER;
            
            //Devo passare il pincode Email
            if (this.docGruppo.APPTIPOVERIFICA == TipoVerificaAccount.verificaemail || 
              this.docGruppo.APPTIPOVERIFICA == TipoVerificaAccount.verificaemailsms
               ) 
               {
                 docVerify.EMAILPINCODE = this.getInputVerifyCode(TipoVerificaAccount.verificaemail);
               }


            //Devo passare il pincode SMS
            if (this.docGruppo.APPTIPOVERIFICA == TipoVerificaAccount.verificasms || 
              this.docGruppo.APPTIPOVERIFICA == TipoVerificaAccount.verificaemailsms
               ) 
               {
                 docVerify.SMSPINCODE = this.getInputVerifyCode(TipoVerificaAccount.verificasms);
               }

            
            //Tutto pronto per effettuare la richiesta di verifica pincode
            this.sendServerVerificaCodici(docVerify);


          }
          else {
            enable = false;
            altMessage = 'Errore: Richiedere il reinvio';
          }

      }
      else {
        enable = false;
        altMessage = 'Errore: Richiedere il reinvio';
      }


      
    }


    //Nel caso mostro un messaggio di errore
    if (!enable) {
      this.startService.presentAlertMessage(altMessage);
    }
  }



  /**
   * Richiedo al server se i dati sono corretti
   * @param docVerifica Documento per la verifica dei codici
   */
  sendServerVerificaCodici(docVerifica: AccountVerifyCode) {

    if (docVerifica) {

      this.loadingCtrl
      .create({
          message: 'Verifica Codici'
      })
      .then(elLoading => {

        //Creo il loading
        elLoading.present();

        //Faccio la richiesta al server
        this.startService
          .registrationVerifyCodici(docVerifica)
          .then((response:AccountOperationResponse) => {

            //Chiudo il Loading 
            elLoading.dismiss();

            //Verifica codici passata
            if (response.result) {

              //Memorizzo nelle variabili che la verifica ha avuto esito positivo
              this.emailVerificationYES = true;
              this.emailVerificata = this.docRichiestaCodici.EMAIL;

              this.smsVerificationYES = true;
              this.telVerificato = this.docRichiestaCodici.TELEPHONE;

              //Posso spostarmi alla pagina successiva
              this.nextStepRegistration();

            }
            else {

              //Segno che ha fallito tutto 
              this.emailVerificationYES = false;
              this.emailVerificata = '';

              this.smsVerificationYES = false;
              this.telVerificato = '';
            }
          })
          .catch(err => {
            let myMsg = '';
            myMsg =  SupportFunc.htmlParagraph(err);
            //Chiudo il Loading Controller
            elLoading.dismiss();
            //Visualizzo il messaggio
            this.startService.presentAlertMessage(myMsg, 'Ops...Si è verificato un errore');
            LogApp.consoleLog(err);

          });
      });
    }

  }


  //#endregion

  /**
   * evento scatenato quando l'utente clicca "registrati" 
   * sulla pagina di inserimento dati
   */
  onClickRegistrati()
  {
    
    let codfisc: string;
    
    if (!this.formRegister.valid)
    {

      this.startService.presentAlertMessage('Controlla i dati inseriti per procedere');
    }
    else {

      //Prima vediamo il codice fiscale
      codfisc = this.formRegister.value.codFisc;
      codfisc = codfisc.toUpperCase();

      this.loadingCtrl.create({
        message: 'Check Codice Fiscale'
      })
      .then(elLoading => {
        elLoading.present();

        //Chiamo il servizio del codice fiscale
        this.startService
          .checkCodiceFiscale(codfisc, true, true)
          .then(elCodFisc => {
            //Dovrei ottenere il codice fiscale con i dati
            
            elLoading.dismiss();

            if (!elCodFisc.checkValidate) {
              //Codice fiscale non accettato
              this.startService.presentAlertMessage(elCodFisc.msgValidate);
            }
            else {

              //Passo alla registrazione reale
              this.execRegistrati(elCodFisc);
            }

  
          })
          .catch(objError => {

            elLoading.dismiss();
            this.startService.presentAlertMessage(objError.msgValidate);
          });

      });
      
    }
  }


  /**
   * Invia al server i dati di registrazione
   */
  execRegistrati(myCodiceFiscale: CodiceFiscale) {
    let pwd = '';
    let pwdToSend = '';
    let splitPwd:string[] = [];
    let useCrypter: boolean = false;

      //Imposto il nome e cognome
      this.docUtente.NOME=this.formRegister.value.name;
      this.docUtente.COGNOME=this.formRegister.value.surname;

      //Sarebbe meglio criptare la password con BCrypt ma per ora confidiamo nel https
      //e quindi non la cripto
      useCrypter = false;

      pwd = this.formRegister.value.psw;

      if (useCrypter) {
        pwdToSend = this.cryptoService.getBCrypt(pwd);
      }
      else {
        pwdToSend = pwd;
      }

      //Splitto la stringa in 2 stringhe che verrà ricostruita dal server
      splitPwd = this.cryptoService.mySplitPassword(pwdToSend);

      if (splitPwd) {
        //Metto la prima parte della password dentro al docRichiesta
        this.docRichiestaCodici.TOKEN = splitPwd[0];

        //Metto Area se non fosse presente
        if (!this.docRichiestaCodici.IDAREA || this.docRichiestaCodici.IDAREA.length == 0) {
          this.docRichiestaCodici.IDAREA = this.docArea.ID;
        }

        if (useCrypter) {
          //La seconda parte dentro a SHAPASSWORD
          //nel caso di criptata
          this.docUtente.SHAPASSWORD = splitPwd[1];
          this.docUtente.INPUTPASSWORD = '';
        }
        else {
          this.docUtente.INPUTPASSWORD = splitPwd[1];
          this.docUtente.SHAPASSWORD = '';
        }

        //Inserisco il codice fiscale
        this.docUtente.CODICEFISCALE = myCodiceFiscale.codiceFiscale;
        this.docUtente.SESSO = myCodiceFiscale.sesso;
        this.docUtente.NATOIL = myCodiceFiscale.dataNascita;
        this.docUtente.NATOA = myCodiceFiscale.comune;
        this.docUtente.NATOCAP = myCodiceFiscale.cap;
        this.docUtente.NATOPROV = myCodiceFiscale.provincia;
        this.docUtente.NATOISOSTATO = myCodiceFiscale.stato;


        this.docUtente.WEBLOGIN = this.formContact.value.email;
        this.docUtente.EMAIL = this.formContact.value.email;
        this.docUtente.MOBILENUMBER = this.formContact.value.telephone;
  
        if (this.formRegister.value.chkNewsletter == true) {
          this.docUtente.NEWSLETTER = true;
        }
        else {
          this.docUtente.NEWSLETTER = false;
        }
  
        //Attivo il loading e invio i dati al server
        this.loadingCtrl
          .create({
            message: 'Registrazione'
          })
          .then(elLoading => {
  
            //Creo il loading
            elLoading.present();
  
            this.startService
                .registrationFinalize(this.docUtente, this.docRichiestaCodici)
                .then((response:AccountOperationResponse) => {
  
                    //Chiudo il Loading
                    elLoading.dismiss();
  
                    //Wow registrazione conclusa
  
                    //Posso spostarmi alla pagina successiva
                    this.nextStepRegistration();
  
                    //Dentro a IDREFER c'e' il GUID dell'Utente

                    //Faccio un accesso automatico dell'utente
                    this.loginAfterRegister(this.docUtente.WEBLOGIN, pwd);
  
                })
                .catch(error => {

                  let myMsg = '';
                  myMsg = SupportFunc.htmlParagraph(error);
                  //Chiudo il Loading Controller
                  elLoading.dismiss();
                  //Visualizzo il messaggio
                  
                  this.startService.presentAlertMessage(myMsg, 'Ops...Si è verificato un errore');
                  LogApp.consoleLog(error);

                });
  
              
          });

      }
      else {
        this.startService.presentToastMessage('Dati non corretti');
        
      }
      

    

  }

  /**
   * Al termine della registrazione se tutto va a buon fine, procedo con il login automatico
   */
  loginAfterRegister(username: string, password: string)
  {

    if (username && password) {

      // Chiamo il Servizio per eseguire l'autorizzazione
      this.startService
      .userLogin(username, password)
      .then((dataResult:PostResponse) => {

          // E' Arrivata una risposta NEGATIVA
          if (!dataResult.result) {

            this.startService.presentAlertMessage(dataResult.message);

          }
          else {
            //LOGIN ACCETTATO
            
            // MEMORIZZO LE CREDENZIALI PER UN SUCCESSIVO RECUPERO
            this.startService.saveUserCredential(username,password);
          }
      });
    }


    
  }



  /**
   * evento scatenato quando l'utente clicca su inizia
   */
  onClickInizia(){
    //Chiudo la modale
    this.modalCtrl.dismiss();
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

      case 'newPassword2':
          this.showPassword2 = !this.showPassword2;
          elementDOM.type = (this.showPassword2 ? 'text':'password');
        break;

      default:
        break;
    }

    
  }    
  

//#region CREAZIONI FORM

  /**
   * Funzione di creazione della Form di Login
   */
  createLoginForm(){
    this.formLogin = new UntypedFormGroup({
      username: new UntypedFormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      password: new UntypedFormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      })
    });
  }

  /**
   * Funzione di creazione della Form Contatti, usata come prima pagina 
   * nello StepRegistrazione
   */
  createContactForm(){
    let pattTelefono = '^[+]*[0-9]{7,}';
    //Spiegazione pattern 
    //Per altre spiegazioni guardare qui https://regexr.com/3c53v

    // ^ Il match parte dall'inizio della stringa
    // [+] Qualsiasi elemento contenuto nelle quadre (quindi il +)
    // * la regola precedente è opzionale
    // [0-9] Qualsiasi elemento delle quadre
    // {7,} i valori [0,9] almeno per 7 caratteri o piu
    // * la regola precedente è opzionale


    //form dei contatti (mail e telefono)
    this.formContact=new UntypedFormGroup({
      email: new UntypedFormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.email]
      }),
      telephone: new UntypedFormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.pattern(pattTelefono)]
      })
    });

  }




  createRegisterForm(){
    let patternCodice = '^[A-Za-z]{6}[0-9]{2}[A-Za-z]{1}[0-9]{2}[A-Za-z]{1}[0-9]{3}[A-Za-z]{1}';
    //form di registrazione
    this.formRegister=new UntypedFormGroup({
      name: new UntypedFormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      surname: new UntypedFormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      psw: new UntypedFormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      verifyPsw: new UntypedFormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),      
      codFisc: new UntypedFormControl(null,{
        updateOn: 'change',
        validators: [Validators.required, Validators.pattern(patternCodice)]
      }),
      chkPrivacy: new UntypedFormControl(false, {
        updateOn: 'change',
        validators: [this.isPolicyLink() ? Validators.requiredTrue: Validators.nullValidator]
      }),
      chkNewsletter: new UntypedFormControl(true, {
        updateOn: 'change',
        validators: []
      })      
    }, [this.pswValidator]);

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




  /**
   * 
   * @param tipo Tipo del codice richiesto
   */
  getInputVerifyCode(tipo: TipoVerificaAccount): string {
    let strReturn: string = '';

    if (tipo == TipoVerificaAccount.verificaemail) {
      strReturn = this.codeVerificationMail
    }
    else if (tipo == TipoVerificaAccount.verificasms) {
      strReturn = this.codeVerificationSms
    }

    return strReturn;
  }

  /**
   * Il pulsante Avanti previsto nella form di Verifica
   * deve tenere conto 
   * 1) Quanti sono i pincode da inserire 
   * 2) Quali ha inserito
   */
  isEnableAvantiOnVerify():boolean {
    let enable = true;

    if (this.docGruppo) {
      if (this.docGruppo.APPTIPOVERIFICA !== TipoVerificaAccount.noverifica) {

        switch (this.docGruppo.APPTIPOVERIFICA) {

          case TipoVerificaAccount.verificaemail:
              if (this.codeVerificationMail && this.codeVerificationMail.length == this.codeLength) {
                enable = true;
              }
              else {
                enable = false;
              }
            break;
          case TipoVerificaAccount.verificasms:
            if (this.codeVerificationSms && this.codeVerificationSms.length == this.codeLength) {
              enable = true;
            }
            else {
              enable = false;
            }
            break;

          case TipoVerificaAccount.verificaemailsms:

            if (this.codeVerificationMail && this.codeVerificationMail.length == this.codeLength && 
                this.codeVerificationSms && this.codeVerificationSms.length == this.codeLength) {

                enable = true;

            }
            else {

              enable = false;
            }  

            break;
        
          default:
            break;
        }

      }
    }
    else {
      enable = false;
    }
    return enable;
  }


//#endregion


  //#region LINK ESTERNI

  /**
   * Controlla che nell'area ci sia il link della policy
   */
  isPolicyLink(): boolean {
    let link: AreaLink;
    let ready: boolean = false;

    if (this.docArea) {
      
      link = this.docArea.findAreaLinkByPageType(PageType.policyPrivacy);
  
      if (link && link.REFERURL) {
        ready = true;
      }
    }

    return ready;
  }

  //Apre il link delle Policy se presente
  openPolicyLink() {
    let link: AreaLink;
    

    if (this.docArea) {

      link = this.docArea.findAreaLinkByPageType(PageType.policyPrivacy);
  
      if (link && link.REFERURL) {
        this.startService.openLink(link.REFERURL);
      }
    }    
  }
  
  //#endregion


}


enum PageState
{
  LOGIN = 100,
  CONTACT = 210,
  REGISTRATION = 220,
  VERIFY = 230,
  WELCOME = 300
}

