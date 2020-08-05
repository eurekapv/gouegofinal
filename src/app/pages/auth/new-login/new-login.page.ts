import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ModalController, LoadingController, ToastController, NavController } from '@ionic/angular';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Subscription } from 'rxjs';
import { StartService } from 'src/app/services/start.service';
import { Utente } from 'src/app/models/utente.model';
import { Plugins } from '@capacitor/core';
import { Gruppo } from 'src/app/models/gruppo.model';
import { TipoVerificaAccount, PageType } from 'src/app/models/valuelist.model';
import { Area } from 'src/app/models/area.model';
import { AreaLink } from 'src/app/models/arealink.model';
import { AccountRegistrationRequestCode, AccountRegistrationResponse } from 'src/app/models/accountregistration.model';
import { skip } from 'rxjs/operators';
const { Browser } = Plugins;


@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.page.html',
  styleUrls: ['./new-login.page.scss'],
})
export class NewLoginPage implements OnInit {

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
  docRichiestaCodici: AccountRegistrationRequestCode = new AccountRegistrationRequestCode();


  //Registrazione possibile in app
  registrationInApp: boolean = false; 


  //varibili formGroup (per usare i reactive forms)
  formRegister: FormGroup;
  formVeriryTel: FormGroup;
  formVeriryMail: FormGroup;
  formLogin: FormGroup;
  formContact: FormGroup;

  //Dati
  startConfig:StartConfiguration;
  startListen: Subscription;
  docGruppo: Gruppo;
  docArea: Area;

  //Utente
  docUtente= new Utente;

  //Restituisce true se l'app sta girando su Desktop
  isDesktop:boolean;

  //Verifiche
  emailVerificationYES: boolean = false;
  smsVerificationYES: boolean = false;
  emailVerificata: string = ''; //Email verificata
  telVerificato: string = ''; //Numero telefono Verificato

  //#region questi servono per accedere ai corrispettivi elementi in HTML
  @ViewChild('c1',{static:false}) c1;
  @ViewChild('c2',{static:false}) c2;
  @ViewChild('c3',{static:false}) c3;
  @ViewChild('c4',{static:false}) c4;
  @ViewChild('c5',{static:false}) c5;
  @ViewChild('c6',{static:false}) c6;
  @ViewChild('c7',{static:false}) c7;
  @ViewChild('c8',{static:false}) c8;
  @ViewChild('c9',{static:false}) c9;
  @ViewChild('c10',{static:false}) c10;

  //#endregion


  constructor(
    private modalCtrl:ModalController,
    private startService:StartService,
    private loadingCtrl:LoadingController,
    private toastCtrl:ToastController
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
    this.createVeriryForm();
    this.createContactForm();
    this.isDesktop=this.startService.isDesktop
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
  




  closeModal(){
    this.modalCtrl.dismiss();
  }


  /**
   * Pulsante Indietro nel footer (ove presente)
   */
  onClickFooterIndietro() {

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


  //#region BOTTONI AVANZAMENTO REGISTRAZIONE

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

    console.log('Qui inizio');

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
        this.showMessage(message);

      }



    }


  }


  /**
   * Chiede al server di inviare i codici pin necessari
   * Se tutto va a buon fine si sposta nella pagina di verifica, altrimenti segnala l'errore
   */
  sendServerRichiestaCodici() {

    this.loadingCtrl
      .create({
          message: 'Invio Codici'
      })
      .then(element => {

        //Creo il loading
        element.present();

        //Ora chiedo al server di inviare i codici

        //Il documento contiene le informazioni necessarie
        //Aggiungo l'area nel caso non ci fosse
        this.docRichiestaCodici.IDAREA = this.docArea.ID;

        //Chiamo il servizio
        this.startService
              .registrationSendCodici(this.docRichiestaCodici)
              .then((responseServer:AccountRegistrationResponse) => {

                //Chiudo il Loading Controller
                element.dismiss();

                //Qui in teoria i codici sono stati inviati
                //Memorizzo IDREFER per le chiamate successive
                this.docRichiestaCodici.IDREFER = responseServer.idRefer;

                //Devo spostarmi alla pagina di verifica
                const skipPageVerifica = false;
                this.nextStepRegistration(skipPageVerifica);

              })
              .catch(err => {
                  //Chiudo il Loading Controller
                  element.dismiss();
                  //Visualizzo il messaggio
                  this.showMessage(err);
              })

      
    });
    
  }


  //#endregion

  /**
   * evento scatenato quando l'utente clicca "registrati" 
   * sulla pagina di inserimento dati
   */
  onClickRegistrati()
  {
    if (!this.formRegister.valid)
    {
      return;
    }
    else{
      this.docUtente.NOME=this.formRegister.value.name;
      this.docUtente.COGNOME=this.formRegister.value.surname;
      this.docUtente.WEBPASSWORD=this.formRegister.value.psw;
      this.docUtente.CODICEFISCALE=this.formRegister.value.codFisc;

      this.loadingCtrl
        .create({
          message: 'Registrazione'
        })
        .then(element => {

          // //Creo il loading
          // element.present();


            this.actualStatePage=PageState.WELCOME;
        })
    }
  }

  /**
   * evento scatenato quando l'utente clicca sul pulsante conferma della videata di verifica
   * dei recapiti
   */
  onClickVerifica()
  {
    if(this.formVeriryTel.valid&&this.formVeriryMail.valid)
    {
      //TODO qui manca la richiesta di registrazione a gouego
      this.actualStatePage=PageState.REGISTRATION;
    }
  }

  /**
   * evento scatenato quando l'utente clicca sul pulsante verifica nella videata di inserimento dei contatti
   */
  onClickContinua(){
    //TODO qui bisogna inserire l'invio di sms ed email
    this.actualStatePage=PageState.VERIFY
    
  }

  /**
   * procedura che sposta il focus sulla casella di input successiva
   * @param evento parametri $event dell'eveno "ion-input", necessari a identificare
   * in quale casella c'è stato l'input
   */
  changeFocus(evento)
  {
    let id=evento['target']['id'];
        switch (id) {
        case '1':
          this.c2.setFocus();
          break;
        case '2':
          this.c3.setFocus();
          break;
        case '3':
          this.c4.setFocus();
          break;
        case '4':
          this.c5.setFocus();
          break;
        case '6':
          this.c7.setFocus();
          break;
        case '7':
          this.c8.setFocus();
          break;
        case '8':
          this.c9.setFocus();
          break;
        case '9': 
          this.c10.setFocus();
          break;
      
        default:
          break;
      }
    
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

  /**
   * evento scatenato quando l'utente clicca su inizia
   */
  onClickInizia(){
    //TODO da decidere cosa fare
    this.modalCtrl.dismiss();
  }
  

//#region funzioni per la creazioe dei form

  createContactForm(){
    let pattTelefono = '^[+]*[0-9]*';
    //Spiegazione pattern 
    //Per altre spiegazioni guardare qui https://regexr.com/3c53v

    // ^ Il match parte dall'inizio della stringa
    // [+] Qualsiasi elemento contenuto nelle quadre (quindi il +)
    // * la regola precedente è opzionale
    // [0-9] Qualsiasi elemento delle quadre
    // * la regola precedente è opzionale


    //form dei contatti (mail e telefono)
    this.formContact=new FormGroup({
      email: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.email]
      }),
      telephone: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.pattern(pattTelefono)]
      })
    });

  }
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
      psw: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      verifyPsw: new FormControl(null, {
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
  createVeriryForm(){
    this.formVeriryMail=new FormGroup({
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

    this.formVeriryTel=new FormGroup({
      c6: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.maxLength(1),Validators.minLength(1)]
      }),
      c7: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.maxLength(1),Validators.minLength(1)]
      }),
      c8: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.maxLength(1),Validators.minLength(1)]
      }),
      c9: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.maxLength(1),Validators.minLength(1)]
      }),
      c10: new FormControl(null, {
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
        this.openLink(link.REFERURL);
      }
    }

    
  }

  //Apre un link in un'altra pagina
  openLink(url:string)
  {
    Browser.open({url:url});
  }

  //#endregion

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

}


enum PageState
{
  LOGIN = 100,
  CONTACT = 210,
  REGISTRATION = 220,
  VERIFY = 230,
  WELCOME = 300
}

