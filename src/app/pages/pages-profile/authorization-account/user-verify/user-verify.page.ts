import { Component, OnInit} from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ModalController, LoadingController, ToastController, AlertController, NavParams } from '@ionic/angular';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { StartService } from 'src/app/services/start.service';
import { Utente } from 'src/app/models/utente/utente.model';
import { Gruppo } from 'src/app/models/struttura/gruppo.model';
import { TipoVerificaAccount, PageType, RequestPincodeUse, ValueList, Sesso } from 'src/app/models/zsupport/valuelist.model';
import { Area } from 'src/app/models/struttura/area.model';
import { AreaLink } from 'src/app/models/struttura/arealink.model';
import { AccountRequestCode, AccountOperationResponse, AccountVerifyCode } from 'src/app/models/utente/accountregistration.model';

import { CryptoService } from 'src/app/library/services/crypto.service';
import { MyDateTime } from 'src/app/library/models/mydatetime.model';
import { PostResponse } from 'src/app/library/models/post-response.model';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { ParamsVerificaAccount } from 'src/app/models/utente/params-verifica-account.model';


@Component({
  selector: 'app-user-verify',
  templateUrl: './user-verify.page.html',
  styleUrls: ['./user-verify.page.scss'],
})
export class UserVerifyPage implements OnInit {

    //se mostrare l'input cap nascita
    showInputCapNascita = false
    //l'oggetto ricevuto come parametro all'apertura della videata in modale
    params : ParamsVerificaAccount = new ParamsVerificaAccount();

   //per utilizzare l'enum nell'html
   pageState: typeof PageState=PageState;
   enumTipoVerifica: typeof TipoVerificaAccount = TipoVerificaAccount;
 
   //variabile che indica lo stato della pagina
   //Se posizionato su  Register, Verifiy o Welcome
   actualStatePage:PageState;
 
 
   //Array con gli step possibili in registrazione
   stepRegistration: PageState[] = [];
   indexStepRegistration: number = 0;
 
   //Documento per la richiesta invio codici al server
   docRichiestaCodici: AccountRequestCode = new AccountRequestCode();
  
 
   //varibili formGroup (per usare i reactive forms)
   formRegister: UntypedFormGroup;
   formVerifyTel: UntypedFormGroup;
   formVerifyMail: UntypedFormGroup;
   formContact: UntypedFormGroup;
 
   //Dati
   startConfig:StartConfiguration;
   docGruppo: Gruppo;
   docArea: Area;
   
   //Utente
   docUtente: Utente;
   
   //Restituisce true se l'app sta girando su Desktop
   isDesktop:boolean;
   
   //Verifiche
   emailVerifyNeeded: boolean;
   smsVerifyNeeded: boolean;

  //Codici di verifica
  codeVerificationMail: string = '';
  codeVerificationSms: string = '';

  //Lunghezza del codice di verifica
  codeLength: number = 5;
   
   //lista delle decodifiche del sesso
   listSesso : ValueList[]=[];
   //
   todayISO: string;


    /**
    * Messaggio visualizzato in fase di registrazione verifica
      nella parte Header
    */
    get labelHeaderRegistrazione():string {
        let valueReturn = '';
    
        if (this.emailVerifyNeeded && this.smsVerifyNeeded) {
          valueReturn = 'Indica una email valida ed un numero mobile per effettuare la verifica'
        }
        else if (this.emailVerifyNeeded) {
          valueReturn = 'Indica una email valida per effettuare la verifica'
        }
        else if (this.smsVerifyNeeded) {
          valueReturn = 'Indica un numero mobile a cui inviare un SMS per effettuare la verifica'
        }
    
        return valueReturn;
       }   
   
   /**
    * Messaggio visualizzato in fase di registrazione verifica
      nella parte Footer
    */
   get labelFooterRegistrazione():string {
    let valueReturn = '';

    if (this.emailVerifyNeeded && this.smsVerifyNeeded) {
      valueReturn = 'sarà inviata una email ed un SMS contenente un codice di convalida da inserire per poter accedere al proprio account'
    }
    else if (this.emailVerifyNeeded) {
      valueReturn = 'sarà inviata una email contenente un codice di convalida da inserire per poter accedere al proprio account'
    }
    else if (this.smsVerifyNeeded) {
      valueReturn = 'sarà inviata un SMS contenente un codice di convalida da inserire per poter accedere al proprio account'
    }

    return valueReturn;
   }

   /**
    * A seconda della pagina dove ci si trova ho una label diversa
    */
   get labelButtonFooter(): string {
    let label = '';

    switch (this.actualStatePage) {

      case PageState.CONTACT:
        label = 'Avanti';
        break;

      case PageState.VERIFY:
        label = 'Verifica';
        break;

      case PageState.REGISTRATION:
        label = 'Aggiorna';
        break;
    
      default:
        break;
    }

    return label;
   }
 
   //#region questi servono per accedere ai corrispettivi elementi in HTML
  //  @ViewChild('c1') c1;
  //  @ViewChild('c2') c2;
  //  @ViewChild('c3') c3;
  //  @ViewChild('c4') c4;
  //  @ViewChild('c5') c5;
  //  @ViewChild('c6') c6;
  //  @ViewChild('c7') c7;
  //  @ViewChild('c8') c8;
  //  @ViewChild('c9') c9;
  //  @ViewChild('c10') c10;
   
   //#endregion
 
 
   constructor(
     private modalCtrl:ModalController,
     private startService:StartService,
     private loadingController:LoadingController,
     private toastCtrl:ToastController,
     private alertCtrl: AlertController,
     private cryptoService: CryptoService,
     private navParams: NavParams
   ) {
    
    //per il momento, imposto che non devo verificare niente
    this.emailVerifyNeeded = false;
    this.smsVerifyNeeded = false;
    

     //Stato Pagina registrazione
     this.indexStepRegistration = 0;
 
     //Posizionato sulla pagina di login
     this.actualStatePage = PageState.REGISTRATION;
    
 
     //Richiedo lo startConfig
      this.startConfig = startService.actualStartConfig;

      if (this.startConfig && this.startConfig.gruppo) {
        //Memorizzo il Gruppo con le sue Opzioni
        this.docGruppo = this.startConfig.gruppo;
      }

     //Prelevo l'area selezionata 
     this.docArea = this.startService.areaSelected;
     LogApp.consoleLog('Area di riferimento: ' + this.docArea.ID);

     //recupero l'utente
     this.docUtente=this.startService.activeUtenteDoc;

    //recupero il parametro
    this.params = this.navParams.get('params');

    if (this.params==null||this.params==undefined){
      //se non ho i parametri, esco
      this.startService.presentAlertMessage("Errore");
      this.closeModal();
    }
     
    


    //recupero le decodifiche della lista sesso
    this.listSesso= ValueList.getArray(Sesso);

    //il giorno attuale per filtrare la data di nascita in input
    this.todayISO=MyDateTime.formatDateISO(new Date(), "date");

  }
 
   ngOnInit() {
     this.createArrayStepRegistration();
     this.createRegisterForm();
     this.createContactForm();
     this.createVerifyForm();
     
     this.isDesktop=this.startService.isDesktop
   }
 

 
 
   /**
    * Crea un array con i passaggi disponibili in registrazione
    * 
    * Se non si vogliono verifiche, si passa subito ai dati
    */
    createArrayStepRegistration() {
     this.stepRegistration = [];
    
      switch (this.params.tipoVerifica){
        
        //se mi passano "verificaemail", devo verificare solo la mail
        case TipoVerificaAccount.verificaemail:
          this.emailVerifyNeeded=true;
          this.smsVerifyNeeded=false;
        break;
        
        //se mi passano "verificasms", devo verificare solo l'sms
        case TipoVerificaAccount.verificasms:
          this.emailVerifyNeeded=false;
          this.smsVerifyNeeded=true;
        break;
        
        //se mi passano verificaemailsms, devo verificare entrambi
        case TipoVerificaAccount.verificaemailsms:
          this.emailVerifyNeeded=true;
          this.smsVerifyNeeded=true;
        break;
        
        //in tutti gli altri casi, non devo verificare niente
        default:
          this.smsVerifyNeeded=false;
          this.emailVerifyNeeded=false;
        break;
      }

      //se devo verificare email, sms, o entrambi, aggiungo pagina contact e verify all'array di pagine
      if (this.emailVerifyNeeded||this.smsVerifyNeeded){

        this.stepRegistration.push(PageState.CONTACT);
        this.stepRegistration.push(PageState.VERIFY);
      }

      //se mi è stato detto di fare anche l'aggiornamento dell'anagrafica, aggiungo lo step necessario
      if (this.params.updateDocUtente){
        this.stepRegistration.push(this.pageState.REGISTRATION);
      }

      //Mi posiziono sul primo step
      if (this.stepRegistration[0]){
        this.actualStatePage=this.stepRegistration[0];
      }
   }
 
   /**
    * Effettua l'avanzamento di pagina nello Step Registrazione
    */
   nextStepRegistration() {
     
     if (this.indexStepRegistration + 1 < this.stepRegistration.length) {
       this.indexStepRegistration++;
       this.actualStatePage=this.stepRegistration[this.indexStepRegistration];
       
     }
     else{
       this.closeModal();
     }
   }
 
   /**
    * Torna indietro negli Step di Registrazione
    */
   backStepRegistration() {
 
     if (this.indexStepRegistration - 1 >= 0) {
       this.indexStepRegistration--;
       this.actualStatePage=this.stepRegistration[this.indexStepRegistration];
  
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
         this.onClickAggiornaDati();
       
       default:
         break;
 
     }
   }
  
   //#region GESTIONE PAGINA CONTATTI E CODICI
 
   /*
   L'intera fase di registrazione è gestita con un array this.stepRegistration
   Dentro ci sono i passaggi richiesti (che sono variabili a seconda delle verifiche richieste)
 
   this.indexStepRegistration è l'indice dell'array su cui siamo posizionati
   this.actualStatePage è lo Stato Attuale (recuperato dall'array)
 
   */
 
   /**
    * Validazione della Form Contatti
    */
   validationFormContact(): boolean {
    let validation: boolean = true;
    let myEmail = '';
    let myMobile = '';
    let arMessage = [];
    let myMessage = '';

    myEmail = this.formContact.value.email;
    myMobile = this.formContact.value.telephone;

    //Email da verificare 
    if (this.emailVerifyNeeded) {
      if (!myEmail || myEmail.length == 0) {
        validation = false;
        arMessage.push('Indicare una email valida');
      }
    }

    //SMS da verificare 
    if (this.smsVerifyNeeded) {
      if (!myMobile || myMobile.length == 0) {
        validation = false;
        arMessage.push('Indicare una numero mobile valido');
      }
    }    

    if (!validation) {
      //Mostro un messaggio a video
      myMessage = 'Per proseguire è necessario: '
      arMessage.forEach(element => {
        myMessage += '\n';
        myMessage += element;
      });

      this.startService.presentAlertMessage(myMessage);
    }

    return validation;
   }
   /**
    * Click di Avanti sulla pagina con i contatti
    */
   onClickAvantiContact() {

    //Effettuo la validazione della Form
    let validation = this.validationFormContact();  

    if (validation) {
        
        //azzero il documento di richiesta
        this.docRichiestaCodici = new AccountRequestCode();
        this.docRichiestaCodici.REQUESTEMAILCODE=false;
        this.docRichiestaCodici.REQUESTSMSCODE=false;

        //inserisco i dati generali 
         this.docRichiestaCodici.IDAREA = this.docArea.ID;
         this.docRichiestaCodici.USE = RequestPincodeUse.forValidation; 

        //se devo verificare la mail, inserisco i dati nel documento
        if (this.emailVerifyNeeded){
          this.docRichiestaCodici.REQUESTEMAILCODE=true;
          this.docRichiestaCodici.EMAIL=this.formContact.value.email;
        }

        //se devo verificare il tel, inserisco i dati nel documento
        if (this.smsVerifyNeeded){
          this.docRichiestaCodici.REQUESTSMSCODE=true;
          this.docRichiestaCodici.TELEPHONE=this.formContact.value.telephone;
        }

        //ora posso fare la richiesta al server
        this.sendServerRichiestaCodici(true);

      }
    }


  
 
   /**
    * Chiede al server di inviare i codici pin necessari
    * Se tutto va a buon fine si sposta nella pagina di verifica, altrimenti segnala l'errore
    * @param onSuccessChangePage Se l'operazione ha successo passa alla pagina successiva
    * @param customSuccessMessage Se presente viene mostrato in caso di richiesta a buon fine
    */
   sendServerRichiestaCodici(onSuccessChangePage:boolean = true, customSuccessMessage='Codice inviato con successo!', customErrorMessage='Errore nell\'invio del codice, riprova') {
 
     this.loadingController
       .create({
           message: 'Invio Codici in corso...'
       })
       .then(element => {
 
         //Creo il loading
         element.present();
 
         //Ora chiedo al server di inviare i codici
 
         //Chiamo il servizio

         
         this.startService
               .validationSendCodici(this.docRichiestaCodici, this.docUtente)
               .then((responseServer:AccountOperationResponse) => {
 
                 //Chiudo il Loading Controller
                 element.dismiss();
 
                 if (responseServer.result){

                  //Qui in teoria i codici sono stati inviati
                  //Memorizzo IDREFER per le chiamate successive
                  this.docRichiestaCodici.IDREFER = responseServer.idRefer;
  
                  //Azzero i flag che servono a richiedere i codici
                  this.docRichiestaCodici.REQUESTSMSCODE = false;
                  this.docRichiestaCodici.REQUESTEMAILCODE = false;
                  
                  this.startService.presentAlertMessage(customSuccessMessage);
                  //Mi sposto alla pagina successiva (di verifica)
                  if (onSuccessChangePage) {

                    //Cancello gli input code presenti nelle formTel e Mail
                    this.clearInputPinCode();
                    
                    //Devo spostarmi alla pagina di verifica
                    this.nextStepRegistration();
                  }
                }
                else{
                  //se il server ha risposto, ma non è riuscito ad inviare
                  
                  this.startService.presentAlertMessage(customErrorMessage);
                }
               })
               .catch(err => {
                   //Chiudo il Loading Controller
                   element.dismiss();
                   //Visualizzo il messaggio
                   LogApp.consoleLog(err);
                   this.startService.presentAlertMessage("Errore di connessione");
               })

     });
     
   }
 
 
   //#endregion
 
 
   //#region GESTIONE PAGINA VERIFICA
 
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
   * evento scatenato quando l'utente clicca sul pulsante conferma 
   * della videata di verifica
   * 
   */
   onClickAvantiVerifica()
   {
     //Devo inviare al server i dati inseriti dall'utente
     let altMessage = '';
     let docVerify: AccountVerifyCode;
     let validation = false;
 
     //Valido gli inserimenti
     validation = this.validationFormVerify();

     if (validation) {
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
             altMessage = 'Errore: Richiedere il reinvio';
           }
 
       }
       else {
         altMessage = 'Errore: Richiedere il reinvio';
       }
     }
 
 
     //Nel caso mostro un messaggio di errore
     if (altMessage.length!=0) {
       this.startService.presentAlertMessage(altMessage);
     }
   }
 
 
 
   /**
    * Invio al server i pincode inseriti dall'utente
    * Se tutto va a buon fine, le informazioni saranno rese VERIFICATE
    * @param docVerifica Documento per la verifica dei codici
    */
   sendServerVerificaCodici(docVerifica: AccountVerifyCode) {
 
     if (docVerifica) {
 
       this.loadingController
       .create({
           message: 'Verifica Codici...'
       })
       .then(elLoading => {
 
         //Creo il loading
         elLoading.present();
 
         //Faccio la richiesta al server
         this.startService
           .validationVerifyCodici(docVerifica)
           .then((response:AccountOperationResponse) => {
 
             //Chiudo il Loading 
             elLoading.dismiss();
 
             //Verifica codici passata
             if (response.result) {
 
               //se nella richiesta (andata a buon fine), ho verificato la mail, lo segno nel docutente
               if (this.docRichiestaCodici.REQUESTEMAILCODE) {
                 this.docUtente.VERIFICATAMAIL=true;
                 this.docUtente.EMAIL = this.docRichiestaCodici.EMAIL;
               }

               //se nella richiesta (andata a buon fine), ho verificato il cell, lo segno nel docutente
               if (this.docRichiestaCodici.REQUESTSMSCODE){

                 this.docUtente.VERIFICATAMOBILE=true;
                 this.docUtente.MOBILENUMBER = this.docRichiestaCodici.TELEPHONE;
               }
               
              
                this.startService.presentAlertMessage("Verifica completata con successo");
                //Posso spostarmi alla pagina successiva
                this.nextStepRegistration();
 
             }
             else {
 
               //Il server ha risposto, ma la verifica non è andata a buon fine (presumo codice errato)
               this.startService.presentAlertMessage(response.message);
             }
           })
           .catch(err => {
             //Qui qualcosa è andato storto
 
             //Chiudo il Loading
             elLoading.dismiss();
 
             //Mostro il messaggio
             this.startService.presentAlertMessage("Errore di connessione");
           });
       });
     }
     else{
       this.startService.presentAlertMessage('Errore, richiedere un nuovo codice');
     }
   }
 
 
   //#endregion
 
   
 
   /**
    * evento scatenato quando l'utente clicca "aggiorna" 
    * sulla pagina di inserimento dati
    */
   onClickAggiornaDati()
   {
     this.execAggiornaDati();
   }



   /**
    * Invia al server i dati di registrazione
    */
   execAggiornaDati() {


    //recupero tutti i dati dal form
    if (this.formRegister.valid && this.docUtente.NATOIL)
    {
      
      this.docUtente.NOMINATIVO='';
      this.docUtente.NOME=this.formRegister.value.nome;
      this.docUtente.COGNOME=this.formRegister.value.cognome;
      this.docUtente.SESSO=this.formRegister.value.sesso;
      this.docUtente.CODICEFISCALE=this.formRegister.value.cf;

      this.docUtente.INDIRIZZO=this.formRegister.value.indResidenza;
      this.docUtente.COMUNE=this.formRegister.value.comResidenza;
      this.docUtente.CAP=this.formRegister.value.capResidenza;
      this.docUtente.PROVINCIA=this.formRegister.value.provResidenza;
      this.docUtente.ISOSTATO=this.formRegister.value.statoResidenza;


      this.docUtente.NATOA=this.formRegister.value.comNascita;
      this.docUtente.NATOCAP=this.formRegister.value.capNascita;
      this.docUtente.NATOPROV=this.formRegister.value.provNascita;
      this.docUtente.NATOISOSTATO=this.formRegister.value.statoNascita;
      
      //EMAIL E NUMERO DI TELEFONO NON LI MODIFICO MAI

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
                  .updateUtente(this.docUtente)
                  .then(result => {

                      //visto che siamo nel then, l'operazione è sicuramente andata a buon fine
                      elLoading.dismiss();
                        this.startService.presentAlertMessage('Info Aggiornate');
                        this.closeModal();

                  })
                  .catch(error => {
                    elLoading.dismiss();
                    this.startService.presentAlertMessage(error);                    
                    LogApp.consoleLog(error);
                  });
           });

    }
    else {
      this.startService.presentAlertMessage('Controllare alcuni dati mancanti o inesatti');
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
    * procedura che sposta il focus sulla casella di input successiva
    * @param evento parametri $event dell'eveno "ion-input", necessari a identificare
    * in quale casella c'è stato l'input
    */
   changeFocus(evento)
   {
    //  let id=evento['target']['id'];
    //      switch (id) {
    //      case '1':
    //        this.c2.setFocus();
    //        break;
    //      case '2':
    //        this.c3.setFocus();
    //        break;
    //      case '3':
    //        this.c4.setFocus();
    //        break;
    //      case '4':
    //        this.c5.setFocus();
    //        break;
    //      case '6':
    //        this.c7.setFocus();
    //        break;
    //      case '7':
    //        this.c8.setFocus();
    //        break;
    //      case '8':
    //        this.c9.setFocus();
    //        break;
    //      case '9': 
    //        this.c10.setFocus();
    //        break;
       
    //      default:
    //        break;
    //    }
     
   }
    
 
 //#region CREAZIONI FORM
 
   /**
    * Form con i dati account di registrazione
    */
   createRegisterForm(){
     let patternCodice = '^[A-Za-z]{6}[0-9]{2}[A-Za-z]{1}[0-9]{2}[A-Za-z]{1}[0-9]{3}[A-Za-z]{1}';
     //form di registrazione
     this.formRegister=new UntypedFormGroup({
      nome:new UntypedFormControl(this.docUtente.NOME, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      cognome:new UntypedFormControl(this.docUtente.COGNOME, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      sesso:new UntypedFormControl(this.docUtente.SESSO, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      provNascita:new UntypedFormControl(this.docUtente.NATOPROV, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      comNascita:new UntypedFormControl(this.docUtente.NATOA, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      statoNascita:new UntypedFormControl(this.docUtente.NATOISOSTATO, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      capNascita:new UntypedFormControl(this.docUtente.NATOCAP, {
        updateOn:'change',
        validators: [
          
        ]
      }),
      provResidenza:new UntypedFormControl(this.docUtente.PROVINCIA, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      comResidenza:new UntypedFormControl(this.docUtente.COMUNE, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      indResidenza:new UntypedFormControl(this.docUtente.INDIRIZZO, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      capResidenza:new UntypedFormControl(this.docUtente.CAP, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      statoResidenza:new UntypedFormControl(this.docUtente.ISOSTATO, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      cf:new UntypedFormControl(this.docUtente.CODICEFISCALE, {
        updateOn:'change',
        validators: [Validators.required, Validators.pattern(patternCodice)]
      })
    })
   }
  

   /**
    *E' stato modificato il codice fiscale
    */
   onCfChange(){

    //se il cf cambia, quando l'utente esce dalla casella, provo a validarlo e riempire gli altri campi
    let codFiscString: string = this.formRegister.value.cf;

    if (codFiscString!=null&&codFiscString!=undefined){
      
      if (codFiscString.length != 0){
  
        //chiamo il servizio per decodificare il codice fiscale
        this.startService.checkCodiceFiscale(codFiscString, true).then(codFiscObj => {
          
          //inserisco tutto quello che ho decodificato nel docutente
          this.docUtente.NATOISOSTATO='Italia';
          this.docUtente.NATOA=codFiscObj.comune;
          this.docUtente.NATOPROV=codFiscObj.provincia;
          this.docUtente.NATOIL=codFiscObj.dataNascita;
          this.docUtente.SESSO=codFiscObj.sesso;
          this.docUtente.NATOCAP=codFiscObj.cap;
          

          //aggiorno i campi del form

          this.formRegister.get('comNascita').setValue(this.docUtente.NATOA);
          this.formRegister.get('provNascita').setValue(this.docUtente.NATOPROV);
          this.formRegister.get('sesso').setValue(this.docUtente.SESSO);
          this.formRegister.get('statoNascita').setValue(this.docUtente.NATOISOSTATO);
          this.formRegister.get('capNascita').setValue(this.docUtente.NATOCAP);

          //setto il campo cf come valido
          this.formRegister.controls['cf'].setErrors(null);

  
        }).catch(err => {

          //qui in teoria il cf non ha passato neppure il check base, segno il campo come non valido
          this.formRegister.controls['cf'].setErrors({'incorrect':true});
          LogApp.consoleLog(err);
        })
      }
    }
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
          validators: [Validators.email]
        }),
        telephone: new UntypedFormControl(null, {
          updateOn: 'change',
          validators: [Validators.pattern(pattTelefono)]
        })
      });
  
    }
  
 
   /**
    * Funzione per la creazione del FORM relativo alla Verifica Pincode Email e SMS
    */
   createVerifyForm(){

    //Verifica Mail
    //  this.formVerifyMail=new FormGroup({
    //    c1: new FormControl(null, {
    //      updateOn: 'change',
    //      validators: [Validators.required, Validators.maxLength(1),Validators.minLength(1)]
    //    }),
    //    c2: new FormControl(null, {
    //      updateOn: 'change',
    //      validators: [Validators.required, Validators.maxLength(1),Validators.minLength(1)]
    //    }),
    //    c3: new FormControl(null, {
    //      updateOn: 'change',
    //      validators: [Validators.required, Validators.maxLength(1),Validators.minLength(1)]
    //    }),
    //    c4: new FormControl(null, {
    //      updateOn: 'change',
    //      validators: [Validators.required, Validators.maxLength(1),Validators.minLength(1)]
    //    }),
    //    c5: new FormControl(null, {
    //      updateOn: 'change',
    //      validators: [Validators.required, Validators.maxLength(1),Validators.minLength(1)]
    //    })
    //  });
 
    //  //Verifica Telefono
    //  this.formVerifyTel=new FormGroup({
    //    c6: new FormControl(null, {
    //      updateOn: 'change',
    //      validators: [Validators.required, Validators.maxLength(1),Validators.minLength(1)]
    //    }),
    //    c7: new FormControl(null, {
    //      updateOn: 'change',
    //      validators: [Validators.required, Validators.maxLength(1),Validators.minLength(1)]
    //    }),
    //    c8: new FormControl(null, {
    //      updateOn: 'change',
    //      validators: [Validators.required, Validators.maxLength(1),Validators.minLength(1)]
    //    }),
    //    c9: new FormControl(null, {
    //      updateOn: 'change',
    //      validators: [Validators.required, Validators.maxLength(1),Validators.minLength(1)]
    //    }),
    //    c10: new FormControl(null, {
    //      updateOn: 'change',
    //      validators: [Validators.required, Validators.maxLength(1),Validators.minLength(1)]
    //    })
    //  });
 
   }

   /**
    * Cancella i valori nelle caselle di input del form
    * formVerifyMail e formVerifyTel
    */
   clearInputPinCode() {
      this.codeVerificationMail = '';
      this.codeVerificationSms = '';
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
   validationFormVerify() :boolean {

     let validation = true;
     let arMessage = [];
     let myMessage = '';     
 
     switch (this.params.tipoVerifica) {

       case TipoVerificaAccount.verificaemail:

        if (this.codeVerificationMail && this.codeVerificationMail.length == this.codeLength) {
          validation = true;
        }
        else {
          validation = false;
          arMessage.push('Inserire il codice ricevuto in email');
        }

        break;
       case TipoVerificaAccount.verificasms:

        if (this.codeVerificationSms && this.codeVerificationSms.length == this.codeLength) {
          validation = true;
        }
        else {
          validation = false;
          arMessage.push('Inserire il codice ricevuto in SMS');
        }
         break;

       case TipoVerificaAccount.verificaemailsms:
            validation = true;

            if (!this.codeVerificationMail || this.codeVerificationMail.length != this.codeLength) {
              validation = false;
              arMessage.push('Inserire il codice ricevuto in email');
            }
            
            if (!this.codeVerificationSms || this.codeVerificationSms.length != this.codeLength) {
              validation = false;
              arMessage.push('Inserire il codice ricevuto in SMS');
            }           
         break;
     
       default:
            validation = true;
         break;
     }

     if (!validation) {
      //Mostro un messaggio a video
      myMessage = 'Per proseguire è necessario: '
      arMessage.forEach(element => {
        myMessage += '\n';
        myMessage += element;
      });

      this.startService.presentAlertMessage(myMessage);
    }     
     
     
     return validation;
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
   CONTACT = 210,
   REGISTRATION = 220,
   VERIFY = 230,
   WELCOME = 300
 }
 