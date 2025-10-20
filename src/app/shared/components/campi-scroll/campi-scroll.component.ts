import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Campo } from 'src/app/models/struttura/campo.model';
import { Location } from 'src/app/models/struttura/location.model';

@Component({
  selector: 'app-campi-scroll',
  templateUrl: './campi-scroll.component.html',
  styleUrls: ['./campi-scroll.component.scss'],
})
export class CampiScrollComponent implements OnInit {

  @Input() selectedCampo: Campo;
  @Output() campoChanged = new EventEmitter<Campo>();
  
  @Input() set campiList(value: Campo[]) {
    this._listAvailableCampi = value;
    this._flagAvailableCampi = (this._listAvailableCampi?.length != 0);
  }
  
  @Input() selectedLocation: Location;
  @Input() canChoose: boolean;

  _listAvailableCampi: Campo[];
  _flagAvailableCampi = false;

  constructor() {}

  ngOnInit() {}

  /**
   * Scelta di un nuovo campo inviata al chiamante
   * @param newCampo Campo selezionato
   */
  onChangeCampo(newCampo: Campo): void {
    if (!this.canChoose) return;

    // Emissione evento di cambio campo
    this.campoChanged.emit(newCampo);

    // Auto-scroll al campo selezionato
    this.scrollToCampo(newCampo);
  }

  /**
   * Scrolla automaticamente al campo selezionato
   * @param campo Campo da centrare
   */
  private scrollToCampo(campo: Campo): void {
    setTimeout(() => {
      const index = this.getIndexCampo(campo);
      
      if (index !== -1) {
        // Trova tutti i bottoni campo
        const buttons = document.querySelectorAll('.campo-btn');
        
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
   * Ricerca un campo nell'Array e ne torna l'indice
   * @param myCampo Campo da cercare
   */
  getIndexCampo(myCampo: Campo): number {
    let myPos = -1;

    if (myCampo && this._listAvailableCampi) {
      myPos = this._listAvailableCampi.findIndex(el => {
        return el.ID == myCampo.ID;
      });
    }

    return myPos;
  }

  /**
   * Ritorna se il campo è selezionato oppure no
   * @param myCampo Campo da controllare
   * @returns TRUE/FALSE
   */
  isSelected(myCampo: Campo): boolean {
    let isSel = false;
    
    if (this.selectedCampo && myCampo) {
      if (this.selectedCampo.ID == myCampo.ID) {
        isSel = true;
      }
    }

    return isSel;
  }
}