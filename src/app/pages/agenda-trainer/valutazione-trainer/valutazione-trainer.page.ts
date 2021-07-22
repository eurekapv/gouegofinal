import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Corso } from 'src/app/models/corso.model';
import { CorsoValutazione } from 'src/app/models/corsovalutazione.model';

@Component({
  selector: 'app-valutazione-trainer',
  templateUrl: './valutazione-trainer.page.html',
  styleUrls: ['./valutazione-trainer.page.scss'],
})
export class ValutazioneTrainerPage implements OnInit {

  docSchedaValutazione: CorsoValutazione;
  docCorso: Corso;
  canUpdate: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      
      //Recupero il documento di Valutazione
      this.docSchedaValutazione = params['params']['docCorsoValutazione'];

      //Recupero il documento del Corso
      this.docCorso = params['params']['docCorso'];


      //Senza Corso e Scheda di Valutazione devo uscire
      if (!this.docSchedaValutazione || !this.docCorso) {
        //Chiudo la modale
        this.closeModal();
      }
      else {
        /* ESSENDO UNA BOZZA POSSO MODIFICARE */
        if (this.docSchedaValutazione.FLAGBOZZA == true) {
          this.canUpdate = true;
        }
      }
    })
  }


  /**
   * Conferma e salvataggio Modifiche
   */
  onConfirm() {

  }

  /**
   * Chiusura Modale
   */
  closeModal() {
    this.modalCtrl.dismiss();
  }

}
