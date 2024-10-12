import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Area } from 'src/app/models/struttura/area.model';
import { Location } from 'src/app/models/struttura/location.model';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { TipoSocieta } from 'src/app/models/zsupport/valuelist.model';
import { LogApp } from 'src/app/models/zsupport/log.model';

@Component({
  selector: 'app-centri',
  templateUrl: './centri.component.html',
  styleUrls: ['./centri.component.scss'],
})
export class CentriComponent implements OnInit {

  _cardTitle = 'Centro Sportivo';
  _cardSubtitle = '';
  _cardContent = '';
  _urlCoverCard: string = `assets/img/cardhome_ss.png`;

  //Mostra / Nasconde i pulsanti di azione
  _showActionButton = false;

  _locationDoc: Location = new Location();
  _showFullDescription: boolean = false; //Mostra o nasconde la descrizione della locazion
  _areaDoc: Area = new Area();
  _centerCard: boolean = false;
  _cardClass: string = "ion-margin-vertical"; 

  //Questo è un valore calcolato per sapere
  //se devo mostrare i button
  _buttonVisible: boolean = false; 
  _prenotaButtonVisible: boolean = false;
  _corsiGiornataButtonVisible: boolean = false;
  _corsiPeriodoButtonVisible: boolean = false;

  //Lo mantengo per decidere se mostrare le label sotto ai button
  _showLabelButton: boolean = false; 


  _configStartDoc: StartConfiguration = new StartConfiguration();

  //#region VALORI INPUT

  //Area di riferimento
  @Input() set area(value: Area) {
    this._areaDoc = value;
    //Imposto la visibilità dei pulsanti
    this.setFlagButtonVisibility();    
  }

  //Location di riferimento
  @Input() set location(value: Location) {
    this._locationDoc = value;

    if (value) {
      if (value.DENOMINAZIONE && value.DENOMINAZIONE.length != 0) {
        this._cardTitle = value.DENOMINAZIONE;
      }

      if (value.INDIRIZZO && value.INDIRIZZO.length !== 0) {
        this._cardSubtitle = value.INDIRIZZO;  
      } 
      
      if (value.DESCRIZIONEMOB && value.DESCRIZIONEMOB.length != 0) {

        this._cardContent = value.DESCRIZIONEMOB;

      }
    }
    //Imposto la visibilità dei pulsanti
    this.setFlagButtonVisibility();
    //Imposto URL della cover
    this.setUrlCoverCard();

    LogApp.consoleLog(this._locationDoc.DENOMINAZIONE)
    LogApp.consoleLog(this._locationDoc)
  }

  /**
   * Mostra o nasconde le caratteristiche della location (se presenti)
   * Default FALSE
   */
  @Input() set showFullDescription(value: boolean) {
    this._showFullDescription = value;
  }

  //Centratura della Card
  @Input() set centerCard(value:boolean) {
    this._centerCard = value;

    if (value) {
      this._cardClass = 'centerCard' + ' ' + 'ion-margin-vertical';
    }
  }

  @Input() set myStartConfig(value: StartConfiguration) {
    this._configStartDoc = value;
    this.setUrlCoverCard();
  }

  @Input() set showActionButton(value: boolean) {
    this._showActionButton = value;
    this.setFlagButtonVisibility();
  }

  @Input() set showLabelButton(value: boolean) {
    this._showLabelButton = value;
  }
  //#endregion

  @Output() clickPrenota = new EventEmitter<Location>();
  @Output() clickCorsiAnnuali = new EventEmitter<Location>();
  @Output() clickLezioniGiornata = new EventEmitter<Location>();
  @Output() clickLocation = new EventEmitter<Location>();


  constructor() {}

  ngOnInit() {}

  /**
   * Imposta la visibilità dei Button
   */
  setFlagButtonVisibility(): void {  

    if (this._locationDoc && this._areaDoc) {
      this._prenotaButtonVisible = (this._locationDoc.ENABLEPRENOTAZIONI == true && this._areaDoc.APPPRENOTAZIONI == true);
      this._corsiPeriodoButtonVisible = this._areaDoc.APPSHOWCORSIPERIODI;
      this._corsiGiornataButtonVisible = this._areaDoc.APPSHOWCORSIGIORNATA;
    }
    else {
      this._prenotaButtonVisible = false;
      this._corsiPeriodoButtonVisible = false;
      this._corsiGiornataButtonVisible = false;
    }

    this._buttonVisible = (this._showActionButton && 
                          (this._prenotaButtonVisible || this._corsiPeriodoButtonVisible || this._corsiGiornataButtonVisible))
  }

  /**
   * Imposta URL della immagine
   */
  setUrlCoverCard() {
    let tipoSocieta: TipoSocieta;
    
    if (this._locationDoc && this._configStartDoc) {

      if (this._configStartDoc.gruppo) {
        //Recupero il tipo di Gruppo
        tipoSocieta = this._configStartDoc.gruppo.TIPOGRUPPO;
      }
      else {
        tipoSocieta = TipoSocieta.sportiva;
      }
  
      //Imposto Url Cover
      this._urlCoverCard = this._locationDoc.getUrlImage(tipoSocieta);

    }
    else {
      this._urlCoverCard = `assets/img/cardhome_ss.png`;
    }
  }  


  onClickFavorite()
  {
    this._locationDoc.FAVORITE = !this._locationDoc.FAVORITE;
  }

  // Lancio l'evento di Click di Prenotazione
  onClickPrenota() {
    this.clickPrenota.emit(this._locationDoc);
  }

  // Lancio l'evento di Click di Prenotazione
  onClickCorsiPeriodo() {
    this.clickCorsiAnnuali.emit(this._locationDoc);
  }  

  // Lancio l'evento di Lezione Singola
  onClickCorsoGiornata() {
    this.clickLezioniGiornata.emit(this._locationDoc);
  }    

  /**
   * Lancio l'evento di Click per la scheda Location
   */
  onClickLocation(event:any) {
    this.clickLocation.emit(this._locationDoc);
  }

  //#region PROPRIETA GENERATE




  //#endregion


}

