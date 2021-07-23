import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CorsoValutazioneLivello } from 'src/app/models/corsovalutazionelivello.model';
import { Livello } from 'src/app/models/livello.model';

@Component({
  selector: 'app-level-setter',
  templateUrl: './level-setter.component.html',
  styleUrls: ['./level-setter.component.scss'],
})
export class LevelSetterComponent implements OnInit {

  @Input() readOnly: boolean = false;
  @Input() listLivelli: Livello[] = [];
  @Input() set valutazione(value: CorsoValutazioneLivello) {

      this.myValutazione = value;

      if (this.myValutazione) {
        if (this.myValutazione.IDLIVELLOFINALE) {
          this.idSelectedLevel = this.myValutazione.IDLIVELLOFINALE;
        }
        else {
          this.idSelectedLevel = this.myValutazione.IDLIVELLOENTRATA;
        }
      }

      //Controllo la situazione Livello Finale
      this.setFlagComplete();

  };
  
  
  @Output() onChoose = new EventEmitter<CorsoValutazioneLivello>();

  
  //ID Livello Selezionato
  idSelectedLevel: string;

  //Elemento collassato
  collapsed: boolean = true;

  //Record della Valutazione
  myValutazione: CorsoValutazioneLivello;

  //Indica se è stato impostato un livello Finale
  flagComplete: boolean = false;

  /**
   * Costruisce un elemento stile Accordion per la scelta del Livello
   * 
   */
  constructor() { }

  /**
   * Apre o Chiude la lista dei Livelli
   */
  onChangeCollapse() {
    //Se non sono in Sola lettura
    if (!this.readOnly) {

      if (this.collapsed) {
        this.collapsed = false;
      }
      else {
        this.collapsed = true;
      }

    }
  }

  ngOnInit() {}


  /**
   * Imposta il flag che indica che è stato completato con 
   * il livello finale l'elemento
   */
  setFlagComplete() {
    let value: boolean = false;
    if (this.myValutazione && this.myValutazione.IDLIVELLOFINALE && this.myValutazione.IDLIVELLOFINALE.length != 0) {
      value = true;
    }

    this.flagComplete = value;
  }

  /**
   * Ritorna una stringa che rappresenta idSelectedLevel
   */
  getLabelLevel(idLevel: string): string {
    let label: string = 'non definito';
    let myLevel: Livello;
    if (idLevel) {

      myLevel = this.listLivelli.find(element => {
        return element.ID == idLevel
      });
      if (myLevel) {
        label = myLevel.DENOMINAZIONE;
      }
    }

    return label;
  }

  /**
   * Modificato il valore nel Radio Group
   * @param value Valore Cambiato
   */
  onChangeRadioGroup() {
    this.setFlagComplete();

    //Segnalo la modifica del valore
    this.onChoose.emit(this.myValutazione);
  }

}
