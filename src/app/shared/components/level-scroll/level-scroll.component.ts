import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Livello } from 'src/app/models/archivi/livello.model';

@Component({
  selector: 'app-level-scroll',
  templateUrl: './level-scroll.component.html',
  styleUrls: ['./level-scroll.component.scss'],
})
export class LevelScrollComponent  implements OnInit {

  @Input() set selectedLivello(value: Livello) {
    let levelSel : Livello;

    if (!value) {
      //Creo un valore per All
      levelSel = new Livello(true);
      levelSel.ID = 'all';
      levelSel.DENOMINAZIONE = 'Qualsiasi Livello';

      this._selectedLivello = levelSel;
    }
    else {
      this._selectedLivello = value;
    }

  }

  /**Aggunge il Tutti i livelli */
  @Input() set addAllLevelItem(value: boolean) {
    this._addAllLevelItem = value;
    //Sistemo la voce All
    this.syncListAvailable();
  }
  
  @Input() set livelliList(value: Livello[]) {
    //Faccio una copia del Array
    this._listAvailableLivelli = [...value];
    
    //Sistemo la voce All
    this.syncListAvailable();
  }
  
  @Input() set canChoose(value: boolean) {
    this._canChoose = value;
  }

  @Output() livelloChanged = new EventEmitter<Livello>();

  _listAvailableLivelli: Livello[];
  _flagAvailableLivelli = false;
  _selectedLivello: Livello;
  _addAllLevelItem = true;
  _canChoose: boolean = true;

  constructor() {
    //Sistemo la voce All
    this.syncListAvailable();
  }

  /**
   * A seconda della presenza o meno del flag addAllLevelItem 
   * Aggiunge o toglie come primo elemento della lista la voce Qualsiasi Livello
   */
  syncListAvailable() {
    let allItem: Livello;

    if (this._listAvailableLivelli) {
      //Cerco se presente la voce
      allItem = this._listAvailableLivelli.find(elItem => elItem.ID == 'all');
  
      //Vuole la voce
      if (this._addAllLevelItem) {
  
        if (!allItem) {
          //Non c'e' lo aggiungo
          allItem = new Livello(true);
          allItem.ID = 'all';
          allItem.DENOMINAZIONE = 'Qualsiasi Livello';
          this._listAvailableLivelli.unshift(allItem);
        }
      }
      else {
        //Non vuole la voce
        this._listAvailableLivelli = this._listAvailableLivelli.filter(elItem => {
          return (elItem.ID && elItem.ID != 'all')
        });
      }
  
      //Ecco se sono disponibili i livelli
      this._flagAvailableLivelli = (this._listAvailableLivelli?.length != 0);
    }
    
    
  }

  ngOnInit() {}

  /**
   * Scelta di un nuovo livello inviata al chiamante
   * @param newLivello Livello selezionato
   */
  onChangeLivello(newLivello: Livello): void {
    if (!this._canChoose) return;

    this._selectedLivello = newLivello;
    

    if (newLivello && newLivello.ID == 'all') {
      this.livelloChanged.emit(null);  
    }
    else {

      // Emissione evento di cambio livello
      this.livelloChanged.emit(newLivello);
    }


    // Auto-scroll al livello selezionato
    this.scrollToLivello(newLivello);
  }

  /**
   * Scrolla automaticamente al livello selezionato
   * @param livello Livello da centrare
   */
  private scrollToLivello(livello: Livello): void {
    setTimeout(() => {
      const index = this.getIndexLivello(livello);
      
      if (index !== -1) {
        // Trova tutti i bottoni livello
        const buttons = document.querySelectorAll('.livello-btn');
        
        if (buttons && buttons[index]) {
          const button = buttons[index] as HTMLElement;
          
          // Scrolla il bottone in vista (centrato)
          button.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });
        }
      }
    }, 100); // Piccolo delay per assicurarsi che il DOM sia aggiornato
  }

  /**
   * Ricerca un livello nell'Array e ne torna l'indice
   * @param myLivello Livello da cercare
   */
  getIndexLivello(myLivello: Livello): number {
    let myPos = -1;

    if (myLivello && this._listAvailableLivelli) {
      myPos = this._listAvailableLivelli.findIndex(el => {
        return el.ID == myLivello.ID;
      });
    }

    return myPos;
  }

  /**
   * Ritorna se il livello è selezionato oppure no
   * @param myLivello Livello da controllare
   * @returns TRUE/FALSE
   */
  isSelected(myLivello: Livello): boolean {
    let isSel = false;
    
    if (this._selectedLivello && myLivello) {
      if (this._selectedLivello.ID == myLivello.ID) {
        isSel = true;
      }
    }

    return isSel;
  }

}
