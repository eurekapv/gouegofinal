import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Utente } from 'src/app/models/utente/utente.model';
import { ValueList, Sesso } from 'src/app/models/zsupport/valuelist.model';
import { StartService } from 'src/app/services/start.service';
import { Subscription } from 'rxjs';
import { NavController, LoadingController, ModalController } from '@ionic/angular';
import { MyDateTime } from 'src/app/library/models/mydatetime.model';
import { Gruppo } from 'src/app/models/struttura/gruppo.model';
import { LogApp } from 'src/app/models/zsupport/log.model';



@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
})
export class EditAccountPage implements OnInit, OnDestroy {

  formPagePrimary: FormGroup; 

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
    

    this.formPagePrimary=new FormGroup({
      nome:new FormControl<string>(
          {
            value:this.utente.NOME,
            disabled: false}, {
        updateOn:'change',
        validators: [Validators.required]
      }),
      cognome:new FormControl<string>(
        {
          value: this.utente.COGNOME,
          disabled: false
        }, 
        {
        updateOn:'change',
        validators: [Validators.required]
      }),
      sesso:new FormControl<number>({
        value: this.utente.SESSO,
        disabled: false
        }, {
        updateOn:'change',
        validators: []
      }),
      provNascita:new FormControl<string>({
        value: this.utente.NATOPROV,
        disabled: false
        }, {
        updateOn:'change',
        validators: []
      }),
      comNascita:new FormControl<string>({
        value: this.utente.NATOA,
        disabled: false
        }, {
        updateOn:'change',
        validators: []
      }),
      statoNascita:new FormControl<string>({
        value: this.utente.NATOISOSTATO,
        disabled: false}
        , {
        updateOn:'change',
        validators: []
      }),
      capNascita:new FormControl<string>({
        value: this.utente.NATOCAP,
        disabled: false
        }, {
        updateOn:'change',
        validators: []
      }),
      provResidenza:new FormControl<string>({
        value: this.utente.PROVINCIA,
        disabled: false
      }, {
        updateOn:'change',
        validators: []
      }),
      comResidenza:new FormControl<string>({
        value: this.utente.COMUNE,
        disabled: false
      }, {
        updateOn:'change',
        validators: []
      }),
      indResidenza:new FormControl<string>({
        value: this.utente.INDIRIZZO,
        disabled: false
      },{
        updateOn:'change',
        validators: []
      }),
      capResidenza:new FormControl<string>({
        value: this.utente.CAP,
        disabled: false
      },{
        updateOn:'change',
        validators: []
      }),
      statoResidenza:new FormControl<string>({
        value: this.utente.ISOSTATO,
        disabled: false}
        , {
        updateOn:'change',
        validators: []
      }),
      cf:new FormControl<string>({
        value: this.utente.CODICEFISCALE,
        disabled: false}
        , {
        updateOn:'change',
        validators: [Validators.pattern(patternCodice)]
      })
    })
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

    if (codFiscString!=null && codFiscString!=undefined){
      
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
  
}


