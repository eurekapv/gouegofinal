import { Component, OnInit, OnDestroy } from '@angular/core';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { Subscription } from 'rxjs';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';
import { ActivatedRoute } from '@angular/router';
import { StartService } from 'src/app/services/start.service';
import { NavController, ToastController, LoadingController, AlertController} from '@ionic/angular';

//per lo share mobile con immagini
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
//per lo share via browser
import { Plugins } from '@capacitor/core';
const { Share } = Plugins;

import { DocstructureService } from 'src/app/library/services/docstructure.service'

import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Area } from 'src/app/models/area.model';
import { PageType } from 'src/app/models/valuelist.model'
import { RequestParams } from 'src/app/library/models/requestParams.model';
import { AreaPaymentSetting } from 'src/app/models/areapaymentsetting.model';


@Component({
  selector: 'app-historybook',
  templateUrl: './historybook.page.html',
  styleUrls: ['./historybook.page.scss'],
})
export class HistorybookPage implements OnInit, OnDestroy {

  myPrenotazione: Prenotazione= new Prenotazione;

  startConfig:StartConfiguration;
  subStartConfig:Subscription;
  
  idPrenotazione: string;
  idPianificazione: string;
  historyId: string;
  myArea:Area;



  //i metodi di pagamento possibili
  arPayments : AreaPaymentSetting[] = [];

  sliderOpts={
    slidesPerView: 1,
    spaceBetween: 0,
    initialSlide: 0 
  }


  constructor(private router: ActivatedRoute,
              private navCtr: NavController,
              private startService: StartService,
              private toastCtr: ToastController,
              private socialSharing: SocialSharing,
              private docStructureService: DocstructureService,
              private loadingController: LoadingController,
              private docstructrureService: DocstructureService,
              private alertController: AlertController
              ) { }

  //In paramMap leggo IDPrenotazione
  ngOnInit() {


    let result=true; 
    this.loadingController.create({
      spinner:'circular',
      message:'Caricamento',
      backdropDismiss:true
    }).then(loading=>{
      loading.present();
      this.subStartConfig=this.startService.startConfig.subscribe(config=>{
        this.startConfig=config;
      })
      this.router.paramMap.subscribe(param => {
        if (param.has('historyId')) {
  
          //HistoryID è formato da IDPrenotazione + '-' + IDPianificazione
          this.historyId = param.get('historyId');
  
          if (this.historyId.length !== 0) {
            result = this.requestByHistoryId(this.historyId);
          }
          else {
            result = false;
          }
        }
        else {
          result = false;
        }
  
        if (!result) {
          this.loadingController.dismiss();
          this.goBack();
        }
      });
    })

  }

  /**
   * Richiedo le informazioni con historyID
   * @param historyId HistoryId
   */
  requestByHistoryId(historyId: string) {
    let result = true;
    let idPren = '';
    let idPian = '';

    

    if (historyId.length !== 0) {
      idPren = historyId.substr(0,36);
      idPian = historyId.substr(37,36);

      

      if (idPren.length !== 36 || idPian.length !== 36) {
        result = false;
      }
      else {
        this.idPrenotazione = idPren;
        this.idPianificazione = idPian;

        //creo il filtro e richiedo la prenotazione
        let filterPrenotazione : Prenotazione=new Prenotazione(true);
        filterPrenotazione.ID=idPren;
        //Parametri richiesta
        let reqParams = new RequestParams();
        reqParams.child_level = 2;

        //Lancio la richiesta per la Prenotazione
        this.docStructureService.requestNew(filterPrenotazione,reqParams)
        .then(data =>{
            //Recupero la Prenotazione
            this.myPrenotazione = data[0];

            //Voglio decodificare una collection di PRENOTAZIONEPIANIFICAZIONE e recuperare il doc Area

            
            
            if (this.myPrenotazione.PRENOTAZIONEPIANIFICAZIONE && this.myPrenotazione.PRENOTAZIONEPIANIFICAZIONE.length !== 0 ) {
              
              //Mi faccio tornare i campi di foreing key e di describe che mi servono ora
              let reqForeign = PrenotazionePianificazione.getReqForeignKeys();

              //Chiedo la decodifica della collection e successivamente chiedo il documento Area
              this.docStructureService.decodeCollection(this.myPrenotazione.PRENOTAZIONEPIANIFICAZIONE, reqForeign)
                                      .then(() => {

                                        //CHIEDO L'AREA
                                        //Chiedo il recupero del documento Area
                                        this.docstructrureService.getRelDoc(this.myPrenotazione, ['IDAREAOPERATIVA'])
                                                                  .then(docArea => {
                                                                      this.myArea = docArea;

                                                                      //Imposto i dati per i pagamenti
                                                                      this.setPaymentFromArea();

                                                                      
                                                                      //Qui è arrivato tutto esattamente
                                                                      this.loadingController.dismiss();
                                                                  })
                                                                  .catch(err => {

                                                                        //Dismetto il loading
                                                                        this.loadingController.dismiss();
                                                                        this.showMessage('Errore nel caricamento Area');
                                                                        console.log(err);                                                                    
                                                                  });

                                      })
                                      .catch(err => {
                                        //Dismetto il loading
                                        this.loadingController.dismiss();

                                        this.showMessage('Errore nel caricamento Elenco');
                                        console.log(err);
                                      });
            }
            else {

                //SE NON PRENOTAZIONI PIANIFICAZIONE
                //CHIEDO L'AREA
                //Chiedo il recupero del documento Area
                this.docstructrureService.getRelDoc(this.myPrenotazione, ['IDAREAOPERATIVA'], 3)
                                          .then(docArea => {

                                              this.myArea = docArea;
                                              this.setPaymentFromArea();

                                              //Qui è arrivato tutto esattamente
                                              this.loadingController.dismiss();
                                          })
                                          .catch(err => {
                                                //Dismetto il loading
                                                this.loadingController.dismiss();
                                                this.showMessage('Errore nel caricamento Area');
                                                console.log(err);                                                                    
                                          });

            }


        }).catch(error=>{
          this.loadingController.dismiss();
          this.showMessage('Errore nel caricamento Prenotazione');
          console.log(error);
        })
      
      }
    }
    else {
      result = false;
    }


    return result;

  }

  /**
   * Imposta i pagamenti a seconda dell'area
   */
  setPaymentFromArea() {
    //TODO: Per impostare l'array dei pagamenti bisogna scaricare 
    //dal server l'Area perchè potrebbe essere diversa dall'attuale
  }
  

  ngOnDestroy() {
    
  }


  goBack() {
    this.showMessage('Informazioni prenotazioni errate');
    this.navCtr.navigateBack(['/','historylist']);
  }


   /**
   * Visualizza un messaggio come Toast
   * @param message Messaggio da mostrare
   */
  showMessage(message: string) {

    //Creo un messaggio
    this.toastCtr.create({
      message: message,
      duration: 3000
    })
    .then(tstMsg => {
      tstMsg.present();
    });

  }

  getIcon (idSport){
    return this.startService.getSportIcon(idSport);
  }

  onShare(docPianificazione:PrenotazionePianificazione){
    let url:string;
    let messaggio:string;
    let logo: string;
    let oggetto: string;
    
    

    if (this.myPrenotazione && docPianificazione){

      for (const iterator of this.myArea.AREALINKS) {
        if (iterator.TIPOURL==PageType.home){
          url=iterator.REFERURL;
          break;
        }      
      }
      if(!url){
        url='';
      }
      logo=this.startConfig.getUrlLogo();
      messaggio=this.myPrenotazione.NOMINATIVO+' ha prenotato il '+docPianificazione.DATAORAINIZIO.toLocaleDateString()+' alle '+docPianificazione.DATAORAINIZIO.toLocaleTimeString();
      
      if (this.startConfig.companyName){
        messaggio += ' presso '+this.startConfig.companyName;
      }
  
      if (docPianificazione['_INDIRIZZO_Location']){
        messaggio += ' '+docPianificazione['_INDIRIZZO_Location'];
      }
  
      if (docPianificazione['_DENOMINAZIONE_Campo']){
        messaggio += ' (Campo: '+docPianificazione['_DENOMINAZIONE_Campo'];
      }
  
      if (docPianificazione['_DENOMINAZIONE_Sport']){
        messaggio += ', Attività: '+docPianificazione['_DENOMINAZIONE_Sport']+')';
      }
  
  
      oggetto='Prenotazione '+docPianificazione.PROGRESSIVO;
  
      if(this.startService.isDesktop){
        //share via mail su desktop
        window.open('mailto:?subject='+oggetto+'&body='+messaggio);
      }
      else{
        //share su mobile
        this.socialSharing.share(messaggio,'',logo,url);
      }
    }

    else{
      this.showMessage('Errore nella condivisione');
    }

  }



  onClickTrash(idPianificazione: string){

    this.loadingController.create({
      message: 'Cancellazione...',
      spinner: 'circular',
      backdropDismiss: true
    })
    .then(loading => {
      return loading.present();
    })
    .then(() => {
      //faccio richiesta cancellazione 
      return this.startService.requestDeletePianificazione(idPianificazione)
    })
    .then(resp => {
      this.loadingController.dismiss();
      this.showMessage(resp.message);

      if(resp.result == true){
        //è andato tutto bene
        this.navCtr.pop()
      }

    })
    .catch(resp => {
      this.loadingController.dismiss();
      this.showMessage(resp.message);
    })
    




    // this.alertController.create({
    //   header: 'Cancellazione',
    //   message: 'Contattaci direttamente per cancellare questa prenotazione',
    //   backdropDismiss: true,
    //   buttons: [
    //     {
    //       text: 'Ok',
    //       handler: ()=>{this.alertController.dismiss()}
    //     }
    //   ]
      
    // })
    // .then(elAlert => {
    //   elAlert.present();
    // })
  }

}
