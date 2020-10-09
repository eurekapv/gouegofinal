import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { start } from 'repl';
import { PostResponse } from 'src/app/library/models/postResult.model';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { Corso } from 'src/app/models/corso.model';
import { CorsoPresenze } from 'src/app/models/corsopresenze.model';
import { PianificazioneCorso } from 'src/app/models/pianificazionecorso.model';
import { StatoIscrizione, TipoSocieta } from 'src/app/models/valuelist.model';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-agenda-trainer-detail',
  templateUrl: './agenda-trainer-detail.page.html',
  styleUrls: ['./agenda-trainer-detail.page.scss'],
})
export class AgendaTrainerDetailPage implements OnInit {

  listPresenze : CorsoPresenze[] = [];
  listPresenzeConfermate: CorsoPresenze[] = [];
  listPresenzeInProva: CorsoPresenze[] = [];

  selectedPianificazione: PianificazioneCorso = new PianificazioneCorso();
  selectedCorso: Corso;

  gapAggiornamentoPresenze: number;

  idPianificazione: string;
  idCorso: string;

  //il tipo di società sportiva
  tipoSocieta: TipoSocieta;



  TipoSocieta: typeof TipoSocieta = TipoSocieta;

  isDesktop: boolean;

  showTabs = true;

  selectedSegment= null;
  

  

  constructor(
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private startService: StartService,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) 
    {
      //recupero il tipo di società
      this.tipoSocieta = this.startService.actualStartConfig.gruppo.TIPOGRUPPO;

      //capisco se sono su desktop
      this.isDesktop = startService.isDesktop;

      this.gapAggiornamentoPresenze = startService.areaSelectedValue.APPGAPOREPRESENZE;
      
    }

  ngOnInit() {

    //recupero l'id del corso
    this.activatedRoute.paramMap.subscribe(params => {

      //recupero id della pianificazione
      this.idPianificazione = params['params']['pianificazioneCorsoId'];
      console.log (params);

      if(this.startService.getPianificazioneTrainerById(this.idPianificazione)){
        
        //se c'è la pianificazione, la recupero tramite l'id
        this.selectedPianificazione =this.startService.getPianificazioneTrainerById(this.idPianificazione);
      }
      else{

        this.navController.navigateRoot('/home');
      }

      //Posso andare avanti

      //recupero l'id del corso
      this.idCorso = this.selectedPianificazione.IDCORSO;

      //richiedo la lista degli allievi (inserendola nel documento pianificazione) 
      this.startService.insertPresenzeIntoPianificazione(this.selectedPianificazione)
      .then(() => {


        //ora ho il documento pianificazione con anche le presenze, posso metterle anche in "listpresenze"
        this.listPresenze  = this.selectedPianificazione.CORSOPRESENZE;
        this.dividiIscrizioni();
        
      })
    })
  }

  onClickElement(elem: CorsoPresenze){
    if (elem.PRESENTE == null || elem.PRESENTE == undefined){
      elem.PRESENTE = true;
    }
    else{
      elem.PRESENTE = !elem.PRESENTE;
    }

    this.selectedSegment = null;

  }

  onSubmit(){

    if(this.selectedPianificazione.isModified(2)){
      
      this.loadingController.create({
        message: 'Caricamento',
        spinner: 'circular',
        backdropDismiss: true
      })
      .then(elLoading => {
  
        elLoading.present();
        this.startService.requestUpdatePresenze(this.selectedPianificazione)
        .then(response => {
  
          elLoading.dismiss();
          if (response.result){
            //è andato tutto bene
            this.showMessage('Presenze aggiornate')
            this.goBack();

          }
  
          else{
  
            //errore dal server
            console.log(response);
            this.showMessage(response.message);
  
          }
          
        })
        .catch((error) => {
  
          elLoading.dismiss();
          console.log(error)
          this.showMessage('Errore di connessione');
        })
      })
      
    }
    
    else{
      this.goBack();

    }

  }

    getColoreCertificato(presenza: CorsoPresenze): string{
    let today =moment(new Date())
    let color: string;
    if (presenza.DATACERTIFICATOMEDICO){
      
      let scadenza = moment(presenza.DATACERTIFICATOMEDICO);
      if (scadenza < today){
        color = 'danger';
      }
      else if (scadenza < today.add(7, 'days')) {
        color = 'warning';
      }
      else{
        color = 'primary';
      }
    }
    else{
      color = 'danger';
    }
    return color;
  }

  //separa le iscrizioni in due liste (confermate e in prova)
  dividiIscrizioni(){
    this.listPresenzeConfermate = this.listPresenze.filter(element => {
      return element.STATOISCRIZIONE == StatoIscrizione.confermata;
    });

    this.listPresenzeInProva = this.listPresenze.filter(element => {
      return element.STATOISCRIZIONE == StatoIscrizione.inProva;
    });

  }

  /**
   * Visualizza un messaggio
   */
  showMessage(messaggio: string){
    this.toastController.create({
      message: messaggio,
      duration: 3000
    })
    .then(elToast => {
      elToast.present();
    })
  }


  onGoBack(){

    if (this.selectedPianificazione.isModified(2)){
      this.alertController.create({
        header: 'Vuoi davvero uscire?',
        message: 'Se esci senza confermare, le presenze non verranno salvate',
        buttons: [
          {
            text: 'Esci',
            handler: () => {this.goBack()}
          },
          {
            text: 'Rimani',
            role: 'cancel'
          }
        ]
      })
      .then(elAlert => {
        elAlert.present();
      })
    }
    else{
      this.goBack();
    }
  }

  goBack(){
    this.navController.pop()
    .catch(() => {
      this.navController.navigateRoot('/home');
    })
  }

  onScroll(event:any){
    if(event.detail.currentY < 5){
      this.showTabs = true;
    }
    else{
      if (event['detail']['deltaY'] > 20){
        this.showTabs = false;
      }
      else if (event['detail']['deltaY'] < -20){
        this.showTabs = true;
      }
    }  
  }

  setAll(presente: boolean){
    this.listPresenze.forEach(elem => {
      elem.PRESENTE = presente;
    })
  }

  onChangeSegment(event: any){
    console.log(event);


    if(event['detail']['value'] == 'presente'){
      this.setAll(true);
    }
    else if (event['detail']['value'] == 'assente'){
      this.setAll(false);
    }
    
  }

}
