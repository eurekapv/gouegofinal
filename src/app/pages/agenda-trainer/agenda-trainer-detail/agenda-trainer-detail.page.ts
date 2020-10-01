import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { Corso } from 'src/app/models/corso.model';
import { CorsoPresenze } from 'src/app/models/corsopresenze.model';
import { PianificazioneCorso } from 'src/app/models/pianificazionecorso.model';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-agenda-trainer-detail',
  templateUrl: './agenda-trainer-detail.page.html',
  styleUrls: ['./agenda-trainer-detail.page.scss'],
})
export class AgendaTrainerDetailPage implements OnInit {


  listPresenze : CorsoPresenze[] = [];
  selectedPianificazione: PianificazioneCorso = new PianificazioneCorso();
  selectedCorso: Corso;

  idPianificazione: string;
  idCorso: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private startService: StartService
  ) { }

  ngOnInit() {

    //recupero l'id del corso
    this.activatedRoute.paramMap.subscribe(params => {

      //recupero id della pianificazione
      this.idPianificazione = params['params']['pianificazioneCorsoId'];
      console.log (params);
      //recupero la pianificazione tramite l'id
      this.selectedPianificazione =this.startService.getPianificazioneTrainerById(this.idPianificazione);

      if (!this.selectedPianificazione){
        this.navController.navigateBack('/agenda-trainer');
      }
      else{
        //Posso andare avanti

        //recupero l'id del corso
        this.idCorso = this.selectedPianificazione.IDCORSO;

        //richiedo la lista degli allievi (inserendola nel documento pianificazione) 
        this.startService.insertPresenzeIntoPianificazione(this.selectedPianificazione)
        .then(() => {

          //ora ho il documento pianificazione con anche le presenze, posso metterle anche in "listpresenze"
          this.listPresenze  = this.selectedPianificazione.CORSOPRESENZE;
          
        })

        console.log(this.listPresenze);
      }   

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
    //richiesta di aggiornamento al server

    this.navController.pop();
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

}
