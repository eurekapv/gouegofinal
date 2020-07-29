import { Component, OnInit, OnDestroy, Pipe } from '@angular/core';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { Subscription, from } from 'rxjs';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';
import { Campo } from 'src/app/models/campo.model';
import { Location } from 'src/app/models/location.model';
import { ActivatedRoute } from '@angular/router';
import { StartService } from 'src/app/services/start.service';
import { NavController, ToastController, LoadingController} from '@ionic/angular';

//per lo share mobile con immagini
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
//per lo share via browser
import { Plugins } from '@capacitor/core';
const { Share } = Plugins;

import { DocstructureService } from 'src/app/library/services/docstructure.service'
import { filter } from 'rxjs/operators';
import { Corso } from 'src/app/models/corso.model';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Area } from 'src/app/models/area.model';
import { PageType } from 'src/app/models/valuelist.model'


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


  sliderOpts={
    slidesPerView: 1,
    spaceBetween: 0,
    initialSlide: 0 
        //Dovrei farla variabile
        // Responsive breakpoints   
        //  breakpoints: {  
   
        //     // when window width is <= 320px     
        //     320: {       
        //        slidesPerView: 2.5,
        //        spaceBetween: 1     
        //     },     
        //     // when window width is <= 480px     
        //     480: {       
        //        slidesPerView: 2.5,       
        //        spaceBetween: 6     
        //     },   
        
        //     // when window width is <= 640px     
        //     640: {       
        //        slidesPerView: 2.5,       
        //        spaceBetween: 1     
        //     },

        //     1024: {
        //       slidesPerView: 2.5,       
        //       spaceBetween: 1  
        //     }


        
        //  } 
  }


  constructor(private router: ActivatedRoute,
              private navCtr: NavController,
              private startService: StartService,
              private toastCtr: ToastController,
              private socialSharing: SocialSharing,
              private docStructureService: DocstructureService,
              private loadingController: LoadingController,
              private docstructrureService: DocstructureService
              ) { }

  //In paramMap leggo IDPrenotazione
  ngOnInit() {
    let result=true; 
    this.loadingController.create({
      spinner:'circles',
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

    console.log(historyId);

    if (historyId.length !== 0) {
      idPren = historyId.substr(0,36);
      idPian = historyId.substr(37,36);

      console.log('IDPre: ' + idPren);
      console.log('IDPia: ' + idPian);

      if (idPren.length !== 36 || idPian.length !== 36) {
        result = false;
      }
      else {
        this.idPrenotazione = idPren;
        this.idPianificazione = idPian;

        //creo il filtro e richiedo la prenotazione
        let filterPrenotazione : Prenotazione=new Prenotazione(true);
        filterPrenotazione.ID=idPren;
        console.log('Qui');

        this.docStructureService.request(filterPrenotazione,5)
        .then(data =>{
          this.myPrenotazione = data[0];
          this.myPrenotazione.PRENOTAZIONEPIANIFICAZIONE.forEach(element => {
            this.docStructureService.decodeAll(element).then(()=>{
              this.docStructureService.decode(element, 'IDLOCATION',true,['INDIRIZZO','EMAIL']);
              console.log('decodificati');
              console.log(this.myPrenotazione);
              //recupero anche l'area della prenotazione (mi serve per lo share)
              //creo un filtro per richiedere l'area
              let areaFiltro= new Area(true);
              areaFiltro.ID=this.myPrenotazione.IDAREAOPERATIVA;
              this.docstructrureService.request(areaFiltro).then(listArea=>{
                this.myArea=listArea[0];
                this.loadingController.dismiss();
              }).catch(error=>{
                this.loadingController.dismiss();
                this.showMessage('Errore nel caricamento');
              })
            }).catch(error=>{
              this.loadingController.dismiss();
              this.showMessage('Errore nel caricamento');
            })
          });
        }).catch(error=>{
          this.loadingController.dismiss();
          this.showMessage('Errore nel caricamento');
        })
      

        // //Chiedo la Prenotazione
        // this.subActivePrenotazione = this.startService
        //               .requestPrenotazioneById(this.idPrenotazione, 999)
        //               .subscribe (docPrenotazione => {

        //                                           this.activePrenotazione = docPrenotazione;
        //                                           this.showSpinner = false;
        //                                           this.sliderOpts.initialSlide=this.activePrenotazione.getIndexPianificazione(this.idPianificazione);
        //                                           console.log('a');
        //                                           console.log(this.activePrenotazione);
        //                                         });
      }
    }
    else {
      result = false;
    }


    return result;

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

    
    
    for (const iterator of this.myArea.AREALINKS) {
      if (iterator.TIPOURL==PageType.home){
        url=iterator.REFERURL;
        break;
      }
      
    }
    logo=this.startConfig.getUrlLogo();
    messaggio=this.myPrenotazione.NOMINATIVO+' ha prenotato il '+docPianificazione.DATAORAINIZIO.toLocaleDateString()+' alle '
      +docPianificazione.DATAORAINIZIO.toLocaleTimeString()+' presso '+this.startConfig.companyName+' '+docPianificazione['_INDIRIZZO_Location']
      +' (Campo: '+docPianificazione['_DENOMINAZIONE_Campo']+', Attività: '+docPianificazione['_DENOMINAZIONE_Sport']+')';
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


}
