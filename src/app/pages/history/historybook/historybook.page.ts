import { Component, OnInit, OnDestroy } from '@angular/core';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { Subscription, from } from 'rxjs';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';
import { Campo } from 'src/app/models/campo.model';
import { Location } from 'src/app/models/location.model';
import { ActivatedRoute } from '@angular/router';
import { StartService } from 'src/app/services/start.service';
import { NavController, ToastController} from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DocstructureService } from 'src/app/library/services/docstructure.service'


@Component({
  selector: 'app-historybook',
  templateUrl: './historybook.page.html',
  styleUrls: ['./historybook.page.scss'],
})
export class HistorybookPage implements OnInit, OnDestroy {

  activePrenotazione: Prenotazione= new Prenotazione;
  subActivePrenotazione: Subscription;

  listLocation:Location[]=[];
  subListLocation: Subscription;

  listCampi:Campo[]=[];
  subListCampi:Subscription;
  
  //Campo in versione normale
  idPrenotazione: string;
  idPianificazione: string;
  historyId: string;

  showSpinner = true;

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
              private docStructureService: DocstructureService
              ) { }

  //In paramMap leggo IDPrenotazione
  ngOnInit() {
    
    this.prova();
    let result = true;

    this.showSpinner = true;
    this.subListCampi=this.startService.listLocation.subscribe(data=>{
      this.listLocation=data;
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
        this.goBack();
      }
    });

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

        //Chiedo la Prenotazione
        this.subActivePrenotazione = this.startService
                      .requestPrenotazioneById(this.idPrenotazione, 999)
                      .subscribe (docPrenotazione => {

                                                  this.activePrenotazione = docPrenotazione;
                                                  this.showSpinner = false;
                                                  this.sliderOpts.initialSlide=this.activePrenotazione.getIndexPianificazione(this.idPianificazione);
                                                  console.log('a');
                                                  console.log(this.activePrenotazione);
                                                });
      }
    }
    else {
      result = false;
    }


    return result;

  }

  

  ngOnDestroy() {
    if (this.subActivePrenotazione) {
      this.subActivePrenotazione.unsubscribe();
    }
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

    if(this.startService.isDesktop){
      //share via mail su desktop
    }
    else{
      //share su mobile
      this.socialSharing.share(messaggio,'',logo,url);
    }

  }

  prova(){
    let objCampo=new  Campo();
    objCampo.ID='prova';
    this.docStructureService.request(objCampo).then(data=>{
      console.log(data);
    })
  }

}
