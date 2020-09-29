import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
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
  selectedPianificazione: PianificazioneCorso;
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
        this.navController.pop();
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


      //#region old
        // //creo il mio filtro per le presenze
        // let myFilterCorsoPresenze: CorsoPresenze = new CorsoPresenze(true);
        // myFilterCorsoPresenze.IDPIANIFICAZIONECORSO = params['pianificazioneCorsoId'].substring(0,35);

        // //creo il mio filtro per il corso
        // let myFilterCorso: Corso = new Corso(true);
        // myFilterCorso.ID = params['pianificazioneCorsoId'].substring(37);

        // //test
        // myFilterCorsoPresenze.IDPIANIFICAZIONECORSO = '894B1DA2-FC57-4F3E-947C-32DE203CFDBB'

        // //richiedo le presenze
        // this.docStructureService.requestNew(myFilterCorsoPresenze)
        // .then(listCorsoPresenze => {
        //   if (listCorsoPresenze && listCorsoPresenze.length != 0){

        //     this.listPresenze = listCorsoPresenze

        //     this.docStructureService.getRelDoc
        //   }
        // })

        // //richiedo anche il corso, per avere  tutte le informazioni
        // this.docStructureService.requestNew(myFilterCorso)
        // .then(myCorso => {
        //   if (myCorso[0]){
        //     this.selectedCorso = myCorso[0];
        //   }
        // })
      //#endregion

      

      

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

}
