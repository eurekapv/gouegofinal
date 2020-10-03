import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { Corso } from 'src/app/models/corso.model';
import { CorsoPresenze } from 'src/app/models/corsopresenze.model';
import { PianificazioneCorso } from 'src/app/models/pianificazionecorso.model';
import { StatoIscrizione } from 'src/app/models/valuelist.model';
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

  idPianificazione: string;
  idCorso: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private startService: StartService,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) { }

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
        
        console.log('Lista prima: ')
        console.log(this.listPresenze);
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
  }

  onSubmit(){
    
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
        console.log(response);
      })
      .catch(error => {

        elLoading.dismiss();
        console.log(error)
        this.showMessage('Errore di connessione');
      })
    })
    
    // this.navController.pop();


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

  //FIXME
  /*
  Cosa modificherei:
    1) Non è chiara l'icona ? io imposterei l'icona user-circle se non c'e' la presensa
    2) In alto prima sopra la lista io metterei una label di info tipo: Usa l'icona user-circle per segnare la presenza assenza di un partecipante
    3) La parola PRESENTE e ASSENTE bisogna metterla in un badge a destra (rosso Assente/verde Presente) un badge di tipo small va bene
    4) L'etichetta 'Scad. c. medico' non è ne bella ne chiara io fare cosi (faccio 3 esempi)
          Certificato Medico: non consegnato
          Certificato Medico: fino al 15/09/2020 (Verde)  
          Certificato Medico: scaduto (rosso) 
                              Io non riporterei date intanto chissenefrega è scaduto e devi portarlo
       Questa riga pero' deve essere messa sotto ngIf GruppoSportivo.TIPO = SocietaSportiva (xche alle scuole di lingue ad esempio frega na pippa)
    
    

  */

}
