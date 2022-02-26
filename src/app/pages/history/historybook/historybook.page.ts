import { Component, OnInit, OnDestroy } from '@angular/core';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { Subscription } from 'rxjs';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';
import { ActivatedRoute } from '@angular/router';
import { StartService } from 'src/app/services/start.service';
import { NavController, ToastController, LoadingController, AlertController} from '@ionic/angular';

//per lo share via browser
import { Share } from '@capacitor/share';

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

  /**
   * Effettuo lo Sharing della Prenotazione
   * @param docPianificazione 
   */
  onShare(docPianificazione:PrenotazionePianificazione){

    let webUrlArea:string = ''; //Link di riferimento dell'area
    let webUrlLogo: string; //Link con il Logo dell'Area
    let messaggio:string;
    let oggetto: string;
    
    

    if (this.myPrenotazione && docPianificazione){

      //Cerco URL della mia Area
      for (const iterator of this.myArea.AREALINKS) {
        if (iterator.TIPOURL==PageType.home) {
          webUrlArea=iterator.REFERURL;
          break;
        }      
      }

      if(!webUrlArea){
        webUrlArea = '';
      }

      //Chiedo il logo per l'area
      webUrlLogo=this.startConfig.getUrlLogo();

      //Compongo il messaggio
      messaggio=this.myPrenotazione.NOMINATIVO + '  ha prenotato il ' + docPianificazione.DATAORAINIZIO.toLocaleDateString()+' alle '+docPianificazione.DATAORAINIZIO.toLocaleTimeString();
      
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
  
      //Compongo l'oggetto
      oggetto='Prenotazione ' + docPianificazione.PROGRESSIVO;
  
      //Se posso condividere
      Share.canShare()
          .then(result => {
            if (result.value) {
              //Effettuo la condivisione
              Share.share({
                title: oggetto,
                text: messaggio,
                url: webUrlArea
              });
              
            }
          });
    }

    else{
      this.showMessage('Errore nella condivisione');
    }

  }



  /**
   * Richiesta cancellazione prenotazione al server
   * @param idPianificazione Prenotazione Pianificazione
   */
  onClickTrash(idPianificazione: string) {
    this.alertController.create({
      header:"Sei sicuro?",
      message:"Continuando, cancellerai questa prenotazione",
      buttons: [
        {
          text: 'Conferma',
          handler: () => {this.deletePianificazione(idPianificazione)}
        },
        {
          text: 'Annulla',
          role: 'cancel'
        }
      ]

    })
    .then(alert => {
      alert.present();
    })
  }


  deletePianificazione(idPianificazione: string){

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
      //Chiudo il Loading Controller
      this.loadingController.dismiss();
      
      //Visualizzo il messaggio
      this.showMessage(resp.message);

      //Se è andato tutto bene
      if(resp.result) {
        
        //è andato tutto bene
        this.navCtr.navigateBack('/historylist');
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
