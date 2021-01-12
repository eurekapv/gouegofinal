import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ModalController, LoadingController, ToastController, NavController, AlertController, NavParams } from '@ionic/angular';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { StartService } from 'src/app/services/start.service';
import { Utente, ParamsVerifica } from 'src/app/models/utente.model';
import { Plugins } from '@capacitor/core';
import { Gruppo } from 'src/app/models/gruppo.model';
import { TipoVerificaAccount, PageType, RequestPincodeUse, ValueList, Sesso } from 'src/app/models/valuelist.model';
import { Area } from 'src/app/models/area.model';
import { AreaLink } from 'src/app/models/arealink.model';
import { AccountRequestCode, AccountOperationResponse, AccountVerifyCode } from 'src/app/models/accountregistration.model';

import { CryptoService } from 'src/app/library/services/crypto.service';
import { CodiceFiscale } from 'src/app/models/codicefiscale.model';
const { Browser } = Plugins;
import { MyDateTime } from 'src/app/library/models/mydatetime.model';
import { PostResponse } from 'src/app/library/models/postResult.model';


@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {

    //l'oggetto ricevuto come parametro all'apertura della videata in modale
    params : ParamsVerifica = new ParamsVerifica

   //per utilizzare l'enum nell'html
   pageState: typeof PageState=PageState;
   tipoVerifica: typeof TipoVerificaAccount = TipoVerificaAccount;
 
   //variabile che indica lo stato della pagina
   //Se posizionato su  Register, Verifiy o Welcome
   actualStatePage:PageState;
 
 
   //Array con gli step possibili in registrazione
   stepRegistration: PageState[] = [];
   indexStepRegistration: number = 0;
 
   //Documento per la richiesta invio codici al server
   docRichiestaCodici: AccountRequestCode = new AccountRequestCode();
  
 
   //varibili formGroup (per usare i reactive forms)
   formRegister: FormGroup;
   formVerifyTel: FormGroup;
   formVerifyMail: FormGroup;
   formContact: FormGroup;
 
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
   
   //lista delle decodifiche del sesso
   listSesso : ValueList[]=[];
   //
   today: string;
 
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
     private loadingController:LoadingController,
     private toastCtrl:ToastController,
     private alertCtrl: AlertController,
     private cryptoService: CryptoService,
     private navParams: NavParams
   ) {
    
    //per il momento, imposto che non devo verificare niente
    this.emailVerifyNeeded = false;
    this.smsVerifyNeeded = false 

     //Stato Pagina registrazione
     this.indexStepRegistration = 0;
 
     //Posizionato sulla pagina di login
     this.actualStatePage = PageState.REGISTRATION;
    
 
     //Richiedo lo startConfig
      this.startConfig = startService.actualStartConfig
      if (this.startConfig && this.startConfig.gruppo) {


        //Memorizzo il Gruppo con le sue Opzioni
        this.docGruppo = this.startConfig.gruppo;
      }

     //Prelevo l'area selezionata 
     this.docArea = this.startService.areaSelectedValue;

     //recupero l'utente
     this.docUtente=this.startService.actualUtente;

    //recupero il parametro
    
    this.params = this.navParams.get('params');
    if (this.params==null||this.params==undefined){
      //se non ho i parametri, esco
      this.showMessage("Errore");
      this.closeModal();
    }
     
    


    //recupero le decodifiche della lista sesso
    this.listSesso= ValueList.getArray(Sesso);

    //il giorno attuale per filtrare la data di nascita in input
    this.today=this.today=MyDateTime.formatDateISO(new Date);

  }
 
   ngOnInit() {
     this.createArrayStepRegistration(this.docGruppo);
     this.createRegisterForm();
     this.createVerifyForm();
     this.createContactForm();
     this.isDesktop=this.startService.isDesktop
   }
 

 
 
   /**
    * Crea un array con i passaggi disponibili in registrazione
    * a seconda delle richieste del gruppo
    * Se il gruppo non vuole verifiche, si passa subito ai dati
    */
    createArrayStepRegistration(docGruppo: Gruppo) {
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
    * Click di Avanti sulla pagina con i contatti
    */
   onClickAvantiContact() {

      if (this.formContact.valid){
        
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

      //se il form non è valido, non faccio niente
      else {
        return;
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
                  
                  this.showMessage(customSuccessMessage);
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
                  
                  this.showMessage(customErrorMessage);
                }
               })
               .catch(err => {
                   //Chiudo il Loading Controller
                   element.dismiss();
                   //Visualizzo il messaggio
                   console.log(err);
                   this.showMessage("Errore di connessione");
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
   * evento scatenato quando l'utente clicca sul pulsante conferma della videata di verifica
   * dei recapiti
   */
   onClickAvantiVerifica()
   {
     //Devo inviare al server i dati inseriti dall'utente
     let altMessage = '';
     let docVerify: AccountVerifyCode;
 
     if (!this.isEnableAvantiOnVerify()) {
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
             altMessage = 'Errore: Richiedere il reinvio';
           }
 
       }
       else {
         altMessage = 'Errore: Richiedere il reinvio';
       }
     }
 
 
     //Nel caso mostro un messaggio di errore
     if (altMessage.length!=0) {
       this.showMessage(altMessage);
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
               
              
                this.showMessage("Verifica completata con successo");
                //Posso spostarmi alla pagina successiva
                this.nextStepRegistration();
 
             }
             else {
 
               //Il server ha risposto, ma la verifica non è andata a buon fine (presumo codice errato)
               this.showMessage(response.message);
             }
           })
           .catch(err => {
             //Qui qualcosa è andato storto
 
             //Chiudo il Loading
             elLoading.dismiss();
 
             //Mostro il messaggio
             this.showMessage("Errore di connessione");
           });
       });
     }
     else{
       this.showMessage('Errore, richiedere un nuovo codice');
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
    if (this.formRegister.valid)
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

      
      if (this.formRegister.value.nascita) {
        this.docUtente.NATOIL = new Date(this.formRegister.value.nascita);
      }

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
                        this.showMessage('Info Aggiornate');
                        this.closeModal();

                  })
                  .catch(error => {
                    elLoading.dismiss();
                    this.showMessage(error);
                    console.log(error);
                  });
           });

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
 
             this.showMessage(dataResult.message);
           }
           else {
             //LOGIN ACCETTATO
             
             // MEMORIZZO LE CREDENZIALI PER UN SUCCESSIVO RECUPERO
             this.startService.saveStorageUtente(username,password);
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
    
 
 //#region CREAZIONI FORM
 
 
   /**
    * Funzione di creazione della Form Contatti, usata come prima pagina 
    * nello StepRegistrazione
    */
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
         validators: [this.emailVerifyNeeded? Validators.required : Validators.nullValidator, Validators.email]
       }),
       telephone: new FormControl(null, {
         updateOn: 'change',
         validators: [this.smsVerifyNeeded? Validators.required : Validators.nullValidator, Validators.pattern(pattTelefono)]
       })
     });
 
   }
 
 
 
 
   createRegisterForm(){
     let patternCodice = '^[A-Za-z]{6}[0-9]{2}[A-Za-z]{1}[0-9]{2}[A-Za-z]{1}[0-9]{3}[A-Za-z]{1}';
     //form di registrazione
     this.formRegister=new FormGroup({
      nome:new FormControl(this.docUtente.NOME, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      cognome:new FormControl(this.docUtente.COGNOME, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      sesso:new FormControl(this.docUtente.SESSO, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      nascita:new FormControl((this.docUtente.NATOIL ? this.docUtente.NATOIL.toISOString(): this.docUtente.NATOIL), {
        updateOn:'change',
        validators: [Validators.required]
      }),
      provNascita:new FormControl(this.docUtente.NATOPROV, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      comNascita:new FormControl(this.docUtente.NATOA, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      statoNascita:new FormControl(this.docUtente.NATOISOSTATO, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      capNascita:new FormControl(this.docUtente.NATOCAP, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      provResidenza:new FormControl(this.docUtente.PROVINCIA, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      comResidenza:new FormControl(this.docUtente.COMUNE, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      indResidenza:new FormControl(this.docUtente.INDIRIZZO, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      capResidenza:new FormControl(this.docUtente.CAP, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      statoResidenza:new FormControl(this.docUtente.ISOSTATO, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      cf:new FormControl(this.docUtente.CODICEFISCALE, {
        updateOn:'change',
        validators: [Validators.required, Validators.pattern(patternCodice)]
      })
    })
   }
  

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
          this.formRegister.get('nascita').setValue(this.docUtente.NATOIL.toISOString());
          this.formRegister.get('sesso').setValue(this.docUtente.SESSO);
          this.formRegister.get('statoNascita').setValue(this.docUtente.NATOISOSTATO);
          this.formRegister.get('capNascita').setValue(this.docUtente.NATOCAP);

          //setto il campo cf come valido
          this.formRegister.controls['cf'].setErrors(null);

  
        }).catch(err => {

          //qui in teoria il cf non ha passato neppure il check base, segno il campo come non valido
          this.formRegister.controls['cf'].setErrors({'incorrect':true});
          console.log(err);
        })
      }
    }
  }
  
 
   /**
    * Funzione per la creazione del FORM relativo alla Verifica Pincode Email e SMS
    */
   createVerifyForm(){
     this.formVerifyMail=new FormGroup({
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
     });
 
     this.formVerifyTel=new FormGroup({
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
     });
 
   }

   /**
    * Cancella i valori nelle caselle di input del form
    * formVerifyMail e formVerifyTel
    */
   clearInputPinCode() {
     for (let index = 1; index <= 5; index++) {
       
       this.formVerifyMail.get('c' + index).setValue("");
    
     }

     for (let index = 6; index <= 10; index++) {
       
      this.formVerifyTel.get('c' + index).setValue("");
   
    }
   }
 
 
   /**
    * 
    * @param tipo Tipo del codice richiesto
    */
   getInputVerifyCode(tipo: TipoVerificaAccount): string {
     let strReturn: string = '';
 
     if (tipo == TipoVerificaAccount.verificaemail) {
       strReturn = this.formVerifyMail.value.c1 + 
                   this.formVerifyMail.value.c2 + 
                   this.formVerifyMail.value.c3 + 
                   this.formVerifyMail.value.c4 + 
                   this.formVerifyMail.value.c5;
     }
     else if (tipo == TipoVerificaAccount.verificasms) {
       strReturn = this.formVerifyTel.value.c6 + 
                   this.formVerifyTel.value.c7 + 
                   this.formVerifyTel.value.c8 + 
                   this.formVerifyTel.value.c9 + 
                   this.formVerifyTel.value.c10;
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
 
         switch (this.params.tipoVerifica) {
           case TipoVerificaAccount.verificaemail:
               enable = this.formVerifyMail.valid;
             break;
           case TipoVerificaAccount.verificasms:
               enable = this.formVerifyTel.valid;
             break;
 
           case TipoVerificaAccount.verificaemailsms:
             enable = this.formVerifyTel.valid && this.formVerifyMail.valid;
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
   CONTACT = 210,
   REGISTRATION = 220,
   VERIFY = 230,
   WELCOME = 300
 }
 