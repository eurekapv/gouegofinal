import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Area } from 'src/app/models/area.model';
import { Location } from 'src/app/models/location.model';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { TipoSocieta } from 'src/app/models/valuelist.model';

@Component({
  selector: 'app-centri',
  templateUrl: './centri.component.html',
  styleUrls: ['./centri.component.scss'],
})
export class CentriComponent implements OnInit {

  //Mostra / Nasconde i pulsanti di azione
  _showActionButton = false;
  //Posizione dove vengono mostrati i pulsanti
  _buttonActionPosition: PositionActionButton = PositionActionButton.middle;
  //per usare enum nell'Html
  positionActionButton: typeof PositionActionButton = PositionActionButton;
  _actualLocation: Location = new Location();
  _actualArea: Area = new Area();
  _centerCard: boolean = false;


  //Area di riferimento
  @Input() set area(value: Area) {
    this._actualArea = value;
    //Se c'e' un valore imposto anche la posizione
    if(this._actualArea) {

      if (this._actualArea.APPBUTTONHOME == PositionActionButton.top ||
        this._actualArea.APPBUTTONHOME == PositionActionButton.middle ||
        this._actualArea.APPBUTTONHOME == PositionActionButton.footer )  {
          this._buttonActionPosition = this._actualArea.APPBUTTONHOME;
        }
    }
  }

  //Location di riferimento
  @Input() set location(value: Location) {
    this._actualLocation = value;
  }

  //Centratura della Card
  @Input() set centerCard(value:boolean) {
    this._centerCard = value;
  }
  @Output() clickPrenota = new EventEmitter<Location>();
  @Output() clickCorsi = new EventEmitter<Location>();
  @Output() clickLocation = new EventEmitter<Location>();
  @Input() myStartConfig: StartConfiguration = new StartConfiguration();

  @Input() set showActionButton(value: boolean) {
    this._showActionButton = value;
  }

  @Input() set buttonActionPosition(value: PositionActionButton) {
    this._buttonActionPosition = value;
  }

  constructor() {
    
    
   }

  ngOnInit() {}


  onClickFavorite()
  {
    this._actualLocation.FAVORITE = !this._actualLocation.FAVORITE;
  }

  // Lancio l'evento di Click di Prenotazione
  onClickPrenota() {
    this.clickPrenota.emit(this._actualLocation);
  }

  // Lancio l'evento di Click di Prenotazione
  onClickCorsi() {
    this.clickCorsi.emit(this._actualLocation);
  }  

  /**
   * Lancio l'evento di Click per la scheda Location
   */
  onClickLocation(event:any) {
    this.clickLocation.emit(this._actualLocation);
  }

  //#region PROPRIETA GENERATE

  /**
   * Titolo da assegnare alla card
   */
  get cardTitle(): string {
    let testo = 'Centro Sportivo';

    if (this._actualLocation) {
      if (this._actualLocation.DENOMINAZIONE && this._actualLocation.DENOMINAZIONE.length != 0) {
        testo = this._actualLocation.DENOMINAZIONE;
      }
    }

    return testo;
  }


  /**
   * Specifica se è necessaria l'area con i pulsanti
   * @param position 
   */
  showButtonsArea(position: PositionActionButton): boolean {
    let flagShow = false;

    //La posizione è quella richiesta
    if (this._buttonActionPosition == position) {

          //Vediamo se devo mostrare dei pulsanti
          //Ho la location
          if (this._actualLocation) {
            //Dentro ho solo il pulsante di Prenota
            if (this._actualLocation.ENABLEPRENOTAZIONI == true) {
              flagShow = true;
            }
          }
          
          //Ho l'area
          if (this._actualArea) {
            //Dentro ho solo il pulsante di Corsi
            if (this._actualArea.APPISCRIZIONI == true) {
              flagShow = true;
            }
          }
    }

    return flagShow;
  }

  /**
   * Specifica se bisogna mostrare il pulsante
   * @param type Tipo pulsante
   * @returns 
   */
  showButtonFor(type: 'prenotazioni'|'corsi'): boolean {
    let flagShow: boolean = false;

    switch (type) {
      case 'prenotazioni':
        if (this._actualLocation) {
          //Dentro ho solo il pulsante di Prenota
          if (this._actualLocation.ENABLEPRENOTAZIONI == true) {
            flagShow = true;
          }
        }
        break;

      case 'corsi':
            //Ho l'area
            if (this._actualArea) {
              //Dentro ho solo il pulsante di Corsi
              if (this._actualArea.APPISCRIZIONI == true) {
                flagShow = true;
              }
            }        
        break;
    
      default:
        break;
    }

    return flagShow;
  }

  /**
   * Ritorna il testo dell'indirizzo, in caso non fosse presente 
   * ritorna l'etichetta del tipo di società
   */
  get cardSubtitle() {
    let testo = 'Centro'
    let setStandard = false;

    //Imposto la frase standard
    setStandard = true;

    if (this._actualLocation && this._actualLocation.INDIRIZZO) {

        if (this._actualLocation.INDIRIZZO.length !== 0) {
          setStandard = false;
          testo = this._actualLocation.INDIRIZZO;  
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

  /**
   * 
   * @returns Path dell'immagine da mostrare
   */
  get urlCoverCard() {
    let tipoSocieta: TipoSocieta = TipoSocieta.sportiva;
    let urlImage = '';

    if (this._actualLocation) {

      if (this.myStartConfig && this.myStartConfig.gruppo) {
        tipoSocieta = this.myStartConfig.gruppo.TIPOGRUPPO;
      }
  
      urlImage = this._actualLocation.getUrlImage(tipoSocieta);

    }
    else {
      urlImage = `assets/cardhome_ss.png`;
    }


    return urlImage;
  }

  //#endregion


}


export enum PositionActionButton {
  top = 10,
  middle = 20,
  footer = 30
}