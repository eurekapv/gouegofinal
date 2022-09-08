import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from 'src/app/models/location.model';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { TipoSocieta } from 'src/app/models/valuelist.model';

@Component({
  selector: 'app-centri',
  templateUrl: './centri.component.html',
  styleUrls: ['./centri.component.scss'],
})
export class CentriComponent implements OnInit {

  @Input() location: Location = new Location();
  @Input() center: boolean = false;
  @Output() clickPrenota = new EventEmitter<Location>();
  @Output() clickLocation = new EventEmitter<Location>();
  @Input() myStartConfig: StartConfiguration = new StartConfiguration();

  constructor() {
    
    
   }

  ngOnInit() {}

  onClickFavorite()
  {
    this.location.FAVORITE=!this.location.FAVORITE;
  }

  // Lancio l'evento di Click di Prenotazione
  onClickPrenota() {
    this.clickPrenota.emit(this.location);
  }

  /**
   * Lancio l'evento di Click per la scheda Location
   */
  onClickLocation(event:any) {
    this.clickLocation.emit(this.location);
  }

  /**
   * Ritorna il testo dell'indirizzo, in caso non fosse presente 
   * ritorna l'etichetta del tipo di società
   */
  getTextIndirizzo() {
    let testo = 'Centro'
    let setStandard = false;

    //Imposto la frase standard
    setStandard = true;

    if (this.location && this.location.INDIRIZZO) {
      if (this.location.INDIRIZZO.length !== 0) {
        setStandard = false;
        testo = this.location.INDIRIZZO;  
      }  
    }


    if (setStandard) {
      if (this.myStartConfig && this.myStartConfig.gruppo) {

        if (this.myStartConfig.gruppo) {
  
          switch (this.myStartConfig.gruppo.TIPOGRUPPO) {
            case TipoSocieta.sportiva:
              testo = 'Centro Sportivo';
              break;
  
            case TipoSocieta.formazione:
                testo = 'Centro di Formazione';
                break;
          
            default:
              break;
          }
  
        }
      }
    }

    return testo;
  }

  getUrlCoverImage() {
    let tipoSocieta: TipoSocieta;
    let urlImage = '';
    if (this.myStartConfig && this.myStartConfig.gruppo) {
      tipoSocieta = this.myStartConfig.gruppo.TIPOGRUPPO;
    }

    urlImage = this.location.getUrlImage(tipoSocieta);

    return urlImage;
  }


}
