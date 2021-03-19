import { Component, OnInit, ViewChild} from '@angular/core';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { StartService } from 'src/app/services/start.service';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Subscription } from 'rxjs';
import { FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { AccountRequestCode, AccountOperationResponse, AccountVerifyCode } from 'src/app/models/accountregistration.model';
import { RequestPincodeUse, TipoVerificaAccount } from 'src/app/models/valuelist.model';
import { Utente } from 'src/app/models/utente.model';
import { CryptoService } from 'src/app/library/services/crypto.service';

@Component({
  selector: 'app-psw-recovery',
  templateUrl: './psw-recovery.page.html',
  styleUrls: ['./psw-recovery.page.scss'],
})
export class PswRecoveryPage implements OnInit {


  canUseMail = false;
  canUseMobile = false;


  //questo è per usare l'enum PageState nell'html
  PageState : typeof PageState =PageState;

  //Lo stato della pagina (inizialmente Richiesta codice)
  stato: PageState= PageState.richiestaCodice;

  //La startConfig
  startConfig : StartConfiguration;

  //I 3 formGroups (Mail/telefono, codice di verifica, nuova password)
  formContact : FormGroup;
  formVerify : FormGroup;
  formPsw : FormGroup;

  //oggetti per richiedere e verificare i codici
  docRichiestaCodici : AccountRequestCode= new AccountRequestCode;
  docVerifica: AccountVerifyCode = new AccountVerifyCode;

  //l'id dell'utente che vuole cambiare la psw
  idUtente: string='';
  //la weblogin dell'utente
  descrUtente: string='';


   //#region questi servono per accedere ai corrispettivi elementi in HTML
   @ViewChild('c1',{static:false}) c1;
   @ViewChild('c2',{static:false}) c2;
   @ViewChild('c3',{static:false}) c3;
   @ViewChild('c4',{static:false}) c4;
   @ViewChild('c5',{static:false}) c5; 
   //#endregion

  constructor(
    private modalController:ModalController,
    private startService:StartService,
    private loadingController:LoadingController,
    private toastController:ToastController,
    private cryptoService:CryptoService
  )
   {
      //SETUP INIZIALE      
      //creo i formGroups
      this.createVerifyForm();
      this.createContactForm();
      this.createPswForm();
      
   }

  ngOnInit() {

    //recupero la startconfig
    this.startConfig=this.startService.actualStartConfig;

    this.canUseMail = (
      this.startConfig.gruppo.APPTIPOVERIFICA == TipoVerificaAccount.noverifica ||
      this.startConfig.gruppo.APPTIPOVERIFICA == TipoVerificaAccount.verificaemail ||
      this.startConfig.gruppo.APPTIPOVERIFICA == TipoVerificaAccount.verificaemailsms
      )

    this.canUseMobile = (
      this.startConfig.gruppo.APPTIPOVERIFICA == TipoVerificaAccount.verificaemailsms ||
      this.startConfig.gruppo.APPTIPOVERIFICA == TipoVerificaAccount.verificasms
    )

  }

  close(){
    this.modalController.dismiss();
  }

  //ritorna true se siamo su Browser desktop
  get isDesktop(){
    return this.startService.isDesktop;
  }

  /**
   * Crea un placeHolder per ion-input
   */
  getPlaceHolder() {
    let placeH = '';
    if (this.canUseMail && this.canUseMobile) {
      placeH = 'Email o Cellulare';
    }
    else if (this.canUseMail && !this.canUseMobile) {
      placeH = 'Email';
    }
    else if (!this.canUseMail && this.canUseMobile) {
      placeH = 'Cellulare';
    }

    return placeH;
  }

  //creazione del ReactiveForm di inserimento del codice
  createVerifyForm(){
    this.formVerify=new FormGroup({
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
  }
  //creazione del ReactiveForm di inserimento del telefono/mail
  createContactForm(){
    this.formContact=new FormGroup({
      contatto: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      })
    })
  }
  //creazione del form di inserimento nuova psw
  createPswForm(){
    this.formPsw=new FormGroup({
      psw: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      confirmPsw: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      })
    },this.pswValidator)
  }
  /**
   * funzione di controllo uguaglianza delle psw, per la validazione del PswFormGroup
   * @param c 
   */
  pswValidator(c:AbstractControl):{invalid:boolean}
  {

    if ((c.get('confirmPsw').value==c.get('psw').value))
    {
      return
    }
    else
    {
      return {invalid: true};
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
        default:
          break;
      }
    
  }

  /**
   * Evento click per la richiesta da effettuare al server dei codici
   */
  onClickInviaCodice() {
    this.sendServerRichiestaCodici();
  }

  /**
   * evento che si attiva quando l'utente clicca "verifica" dopo aver inserito il codice
   * Preparo il documento docVerifica che sarà usato nell'invio dei codici
   */
  onClickVerifica(){

    let prosegui = true;
    let message = "";
   
    //Per poter proseguire devo avere il documento di Richiesta codice con IDREFER popolato
    if (this.docRichiestaCodici && this.docRichiestaCodici.IDREFER) {

      if (this.docRichiestaCodici.IDREFER.length != 0) {

        //Preparo il documento di Verifica da inviare al server
        this.docVerifica = new AccountVerifyCode();
        this.docVerifica.IDREFER=this.docRichiestaCodici.IDREFER;
        this.docVerifica.IDAREA=this.docRichiestaCodici.IDAREA;

        //Invio il pincode ricevuto in mail
        if (this.docRichiestaCodici.REQUESTEMAILCODE) {

            //mi ha richiesto il codice tramite mail
            this.docVerifica.EMAILPINCODE=this.getInputPin();


        }
        else if (this.docRichiestaCodici.REQUESTSMSCODE) {
          //mi ha richiesto il codice via sms
          this.docVerifica.SMSPINCODE=this.getInputPin();
          
        }
        else{
          //ci sono stati casini
          prosegui =false;
          message = "C'è stato un problema, richiedi un nuovo codice";
        }
      }
      else{
        //ci sono stati casini
        prosegui =false;
        message = "C'è stato un problema, richiedi un nuovo codice";
      }
    }
    else{
      //ci sono stati casini
      prosegui =false;
      message = "C'è stato un problema, richiedi un nuovo codice";
    }

    //Sembra corretto, invio il pincode al server
    if (prosegui ) {
      //faccio la richiesta al server
      //il metodo invia il documento docVerifica
      this.sendServerVerificaCodici();
    }
    else {
      //Ci sono errori
      this.showMessage(message);
    }



  }

  /**
   * evento attivato quando l'utente conferma il cambiamento della password
   */
  onClickCambia(){
    
    //ora, devo crearmi il documento utente, e inserire il token nel documento docrichiesta
    let sendDocRichiestaCodici = this.docRichiestaCodici;
    let sendDocUtente = new Utente();
    
    //variabili necessarie per il giochino delle psw
    let pwd = '';
    let pwdToSend = '';
    let splitPwd:string[] = [];
    let useCrypter: boolean = false; //per ora, useCrypter non va, quindi è false

    //Metto nell'ID l'utente
    sendDocUtente.ID = this.idUtente;
    

    //recupero la psw
    pwd = this.formPsw.value.psw;
    if (useCrypter){
      pwdToSend=this.cryptoService.getBCrypt(pwd);
    }
    else{
      pwdToSend=pwd;
    }
    //ora splitto la psw in due
    splitPwd=this.cryptoService.mySplitPassword(pwdToSend);
    
    if (splitPwd){
      //la prima parte va nel token
      sendDocRichiestaCodici.TOKEN=splitPwd[0];
      if (useCrypter) {
        //La seconda parte dentro a SHAPASSWORD
        //nel caso di criptata
        sendDocUtente.SHAPASSWORD = splitPwd[1];
        sendDocUtente.INPUTPASSWORD = '';
      }
      else {
        sendDocUtente.INPUTPASSWORD = splitPwd[1];
        sendDocUtente.SHAPASSWORD = '';
      }
      //ora che è tutto pronto, posso fare la richiesta di cambio psw al server
      this.sendServerFinalize(sendDocUtente,sendDocRichiestaCodici)
    }
    else{
      this.showMessage('Password non utilizzabile');
    }


  }



  /**
   * qui richiedo al server l'invio di un codice di verifica
   */
  sendServerRichiestaCodici(){
    //creo il loading
    this.loadingController.create({
          message:'Invio codice in corso...',
          spinner:'circular',
          backdropDismiss: true,
    }).then(elLoading => {

        elLoading.present();
        let contatto:string;
        //recupero il contatto inserito dall'utente
        contatto=this.formContact.value.contatto;

      //devo capire se l'utente ha inserito una mail o un telefono (se è presente @, presumo sia una mail) e valorizzare
      //l'oggetto "docRichiestaCodici" di conseguenza
      if (contatto.includes('@')){
        //è una mail
        this.docRichiestaCodici.EMAIL=contatto;
        this.docRichiestaCodici.TELEPHONE = "";
        this.docRichiestaCodici.REQUESTEMAILCODE=true;
        this.docRichiestaCodici.REQUESTSMSCODE=false;
      }
      else{
        //è un telefono
        this.docRichiestaCodici.TELEPHONE=contatto;
        this.docRichiestaCodici.EMAIL = "";
        this.docRichiestaCodici.REQUESTSMSCODE=true;
        this.docRichiestaCodici.REQUESTEMAILCODE=false;
      }

      
      //inserisco nell'oggetto le altre info necessarie
      this.docRichiestaCodici.USE=RequestPincodeUse.forRecovery;
      this.docRichiestaCodici.IDAREA=this.startService.areaSelectedValue.ID;

      //ora che l'oggetto è pronto, faccio la richiesta
      this.startService.recoverySendCodici(this.docRichiestaCodici)
                .then((risposta:AccountOperationResponse)=>{
                          //quando arriva la risposta chiudo il loading
                          elLoading.dismiss();

                          

                          if (risposta.result) {
                            //se è andato tutto bene
                            this.showMessage(risposta.message);

                            //Imposto IDRefer che devo reinviare quando chiedo di verificare il codice
                            this.docRichiestaCodici.IDREFER = risposta.idRefer;
                          }
                          else{
                            //se la richiesta è andata a buon fine, ma il server non è riuscito ad inviare il messaggio, presumo che 
                            //l'utente non esista
                            this.showMessage(risposta.message);
                            this.docRichiestaCodici.IDREFER = "";
                            console.log(risposta.message);
                          }
                })
                .catch(error => {
                    //Se la richiesta non è andata a buon fine, dismetto il loading, lo stampo in console e scrivo all'utente "errore di connessione"
                    elLoading.dismiss();
                    console.log(error);
                    this.showMessage("Errore di connessione");
                    this.docRichiestaCodici.IDREFER = "";
                });
    });
  }

  /**
   * qui richiedo al server la verifica del codice (in risposta, riceverò l'id utente)
   *     //alla fine, se tutto è andato bene, passo alla pagina successiva
    //this.stato=PageState.cambioPsw;
   */
  sendServerVerificaCodici() {

    if (this.docVerifica) {
      //mostro il loading
      this.loadingController
      .create({
        message:"Verifica in corso...",
        spinner:"circular",
        backdropDismiss: true
      })
      .then(elLoading=>{

        //Mostro il loding
        elLoading.present();
        
        //ora faccio la richiesta
        this.startService.recoveryVerifyCodici(this.docVerifica)
            .then(risposta=>{

                  //Il server ha risposto, nascondo il loading
                  elLoading.dismiss();

                  if (risposta.result) {

                    //La verifica è andata a buon fine, recupero l'utente su cui bisogna cambiare la psw, poi posso procedere
                    this.idUtente=risposta.idRefer;
                    this.descrUtente = risposta.descrRefer;

                    

                    //Cambio lo stato della pagina
                    this.stato=PageState.cambioPsw;

                    this.showMessage('Codice di verifica valido');
                  }
                  else {
                    //Nessun utente è stato trovato
                    this.idUtente = '';
                    //Altrimenti, se il server ha risposto, ma ha risposto negativamente, presumo che il codice sia errato
                    this.showMessage('Codice di verifica non valido');
                  }

            })
            .catch(error => {
                //se la richiesta non è andata a buon fine
                //Nascondo il loading
                elLoading.dismiss();

                //Nessun utente è stato trovato
                this.idUtente = '';

                console.log(error);
                this.showMessage('Errore di connessione');
            });
      });
    }
  }

  /**
   * qui faccio la richiesta effettiva di cambio password
   */
  sendServerFinalize(docUtente: Utente, docRichiestaCodici: AccountRequestCode) {
    
    //creo il loading
    this.loadingController
      .create({
            message:'Cambio password',
            spinner:'circular',
            backdropDismiss: true
      })
      .then(elLoading => {

          //Mostro il loading
          elLoading.present();
      
          //ora faccio la richiesta
          this.startService.recoveryFinalize(docUtente, docRichiestaCodici)
              .then(risposta => {

                  //Chiudo il loading
                  elLoading.dismiss();


                  if (risposta.result) {
                    //la modifica della psw è andata a buon fine, posso dire ok, e chiudere la videata
                    this.showMessage("Modifica della password confermata");

                    //Chiudo la videata modale
                    this.modalController.dismiss();
                  }
                  else {
                    
                    //la richiesta non è andata in errore, ma la modifica non è riuscita... stampo un errore generico
                    this.showMessage(risposta.message);

                    console.log(risposta.message);
                  }
              })
              .catch(error => {
                    //la richiesta è andata in errore

                    //Chiudo il loading
                    elLoading.dismiss();

                    console.log (error);
                    this.showMessage('Errore di connessione');
              });
      });
  }

   /**
   * Procedura che visualizza un toast con il messaggio passato
   * @param myMessage Il messaggio da visualizzare
   */
  async showMessage(myMessage: string) {
    const toast = await this.toastController
      .create({
        message: myMessage,
        duration: 3000
      });

      toast.present();
  }


  /**
   * restituisce il pin inserito nella form
   */
  getInputPin(): string{
    return (
      this.formVerify.value.c1+
      this.formVerify.value.c2+
      this.formVerify.value.c3+
      this.formVerify.value.c4+
      this.formVerify.value.c5
      )
  }
  
}


enum PageState{
  richiestaCodice  = 10,
  cambioPsw = 20
}