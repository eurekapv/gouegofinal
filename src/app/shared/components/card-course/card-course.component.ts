import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Corso } from '../../../models/corso.model'
import { ValueList, TargetSesso, TipoCorso, TempoCorso } from 'src/app/models/valuelist.model';
import { StartService } from 'src/app/services/start.service'

//https://ionicthemes.com/templates/ionic5-full-starter-app/screenshots

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss'],
})
export class CardCourseComponent implements OnInit {

  constructor(private startService: StartService) { }

  @Input() set version(value: number) {
    this._version = value;
  }

  @Input() set myCorso(value: Corso) {
    this._myCorso = value;
    if (value) {
      this._myTempoCorso = this._myCorso.tempoCorso();
      this._myTempoIscrizioni = this._myCorso.tempoIscrizioni();
    }
    else {
      this._myTempoCorso = TempoCorso.IN_CORSO;
      this._myTempoIscrizioni = TempoCorso.PASSATO;
    }
    //Reimposto il flag Iscrizioni
    this.setAdditionalPropUI();
  }

  //Se impostato a TRUE significa che nell'area sono abilitate le iscrizioni con l'app
  //e quindi controllare se è possibile iscriversi con le date ed
  //enfatizzare la scheda con un colore speciale
  @Input() set useIscrizioniColor(value:boolean) {
    this._useIscrizioniColor = value;
    //Reimposto il flag Iscrizioni
    this.setAdditionalPropUI();
  }




  _myCorso: Corso = new Corso(true);
  _myTempoCorso: TempoCorso = TempoCorso.IN_CORSO;
  _myTempoIscrizioni: TempoCorso = TempoCorso.PASSATO;
  _flagIscrizioni: boolean = false;
  _useIscrizioniColor: boolean = false;

  _version: number = 1; //Versione 1 o 2 del componente


  @Output() clickDetail = new EventEmitter<Corso>();
  @Output() clickIscrizione = new EventEmitter<Corso>();
  
  iconColor = 'primary';
  _footerColor = 'success';

  //per usare enum nell'Html
  tempoCorso: typeof TempoCorso = TempoCorso;
  tipoCorso: typeof TipoCorso = TipoCorso;



  ngOnInit() {
    
  }

  /**
   * Imposta il valore del Falg Iscrizioni a seconda delle richieste
   */
   setAdditionalPropUI(): void {

    let enableIscrizioni = false;
    let colorFooter = 'success';
    
    if (this._myCorso) {

      if (this._useIscrizioniColor && this._myCorso.flagIscrizioniAperte()) {
        enableIscrizioni = true;
      }
 
      //Controllo il tempo del corso
      switch (this._myTempoCorso) {
        case TempoCorso.FUTURO:
          colorFooter = 'success';
          break;
        case TempoCorso.IN_CORSO:
          colorFooter = 'light';
          break;
        case TempoCorso.PASSATO:
          colorFooter = 'danger';
          break;
  
      
        default:
          break;
      }      
    }

    this._flagIscrizioni = enableIscrizioni;
    this._footerColor = colorFooter;

  }  

  /**
  * Emetto un evento per il pulsante di Iscrizione
   */
  onClickIscrizione() {
    //Emetto l'evento per segnalare la richiesta di Iscrizione
    this.clickIscrizione.emit(this._myCorso);
  }

  /**
   * Torna l'eventuale classe speciale da applicare
   */
  getClassHeader(): string {
    let myClass = '';
    if (this._myCorso) {

      if (this.useIscrizioniColor && this._myCorso.flagIscrizioniAperte()) {
        myClass = 'special';
      }
    }
    
    return myClass;
  }


  /**
   * Indica se mostrare o no il Bollino Prova
   * @returns TRUE/FALSE
   */
  showFabProva():boolean {
    let show:boolean = false; 
    if (this._myCorso && this._myCorso.TIPO == TipoCorso.prova) {
      show = true;
    }

    return show;

  }

  getLabelTargetSesso() {
    let toDecode = TargetSesso.maschileFemminile;
    let label = '';
    
    if (this._myCorso.TARGETSESSO) {
      toDecode = this._myCorso.TARGETSESSO;
    }

    label = ValueList.decode(TargetSesso, toDecode);

    return label;
  }

  /**
   * Ritorna una etichetta per la proprietà specificata
   * @param prop 
   */
  getLabelFor(prop: string): string {
    let label = '';
    let tmpLabel = '';
    let nameProp = '';

    //Etichetta per il livello
    if (prop == 'livello') {
      label = 'tutti i livelli';
      nameProp = '_DENOMINAZIONE_Livello';
      tmpLabel = this._myCorso[nameProp];
      if (tmpLabel && tmpLabel.length != 0) {
        label = tmpLabel;
      }
    }
    else if (prop == 'eta') {
      label = 'di qualsiasi età';
      nameProp = '_DESCTOOLTIP_CategoriaEta';
      tmpLabel = this._myCorso[nameProp];
      if (tmpLabel && tmpLabel.length != 0) {
        label = `con età ${tmpLabel}`;
      }
    }
    else if (prop == 'sesso') {
      label = this.getLabelTargetSesso();
    }

    return label;
  }


  goToDetail() {
    //Emetto l'evento per andare al dettaglio corso
    this.clickDetail.emit(this._myCorso);
  }

  
  /**
   * Dato un oggetto corso, ritorna la stringa dell'icona corrispondente
   * @param corso L'oggetto corso
   */
  getSportIcon (corso: Corso)
  {
    if (corso){
      return this.startService.getSportIcon(corso.IDSPORT);
    }
  }
}
