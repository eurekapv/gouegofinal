import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Corso } from '../../../../models/corso/corso.model'
import { ValueList, TargetSesso, TipoCorso, Tempistica } from 'src/app/models/zsupport/valuelist.model';
import { StartService } from 'src/app/services/start.service'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

//https://ionicthemes.com/templates/ionic5-full-starter-app/screenshots

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss'],
})
export class CardCourseComponent implements OnInit {

  constructor(private startService: StartService, private http: HttpClient) { }
  _myCorso: Corso = new Corso(true);
  _myTempoCorso: Tempistica = Tempistica.IN_CORSO;
  _myTempoIscrizioni: Tempistica = Tempistica.PASSATO;
  _flagIscrizioni: boolean = false;
  _useIscrizioniColor: boolean = false;
  _labelSettimanaCorso: string = '';
  _showAdditionalFields: boolean = true;
  sportImageUrl: string = '';

  _version: 'card'|'short' = 'card'; //Versione 1 o 2 del componente


  @Input() set version(value: 'card'|'short') {
    this._version = value;
  }

  @Input() set myCorso(value: Corso) {
    this._myCorso = value;
    if (value) {
      this._myTempoCorso = this._myCorso.tempoCorso();
      this._myTempoIscrizioni = this._myCorso.tempoIscrizioni();
      this._labelSettimanaCorso = this._myCorso.getLabelNumeroGiornateSettimanali();
      // Carica l'immagine dello sport
      this.getSportImageUrl();
    }
    else {
      this._myTempoCorso = Tempistica.IN_CORSO;
      this._myTempoIscrizioni = Tempistica.PASSATO;
      this._labelSettimanaCorso = '';
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

  //Se impostato a TRUE mostra i dettagli estesi del corso nella card
  @Input() set showDetails(value: boolean) {
    this._showAdditionalFields = value;
  }







  @Output() clickDetail = new EventEmitter<Corso>();
  @Output() clickIscrizione = new EventEmitter<Corso>();
  
  iconColor = 'primary';
  _footerColor = 'success';

  //per usare enum nell'Html
  tempoCorso: typeof Tempistica = Tempistica;
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
        case Tempistica.FUTURO:
          colorFooter = 'success';
          break;
        case Tempistica.IN_CORSO:
          colorFooter = 'light';
          break;
        case Tempistica.PASSATO:
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

  /**
   * Carica l'immagine dello sport da Pexels
   */
  getSportImageUrl() {
    if (!this._myCorso || !this._myCorso['_DENOMINAZIONE_Sport']) {
      return;
    }

    const sportName = this._myCorso['_DENOMINAZIONE_Sport'];
    const searchQuery = this.mapSportToSearchQuery(sportName);

    const pexelsUrl = `https://api.pexels.com/v1/search?query=${encodeURIComponent(searchQuery)}&per_page=1&orientation=landscape`;

    this.http.get(pexelsUrl, {
      headers: {
        'Authorization': environment.additionalConfig.pexelsApiKey
      }
    }).subscribe({
      next: (response: any) => {
        if (response.photos && response.photos.length > 0) {
          this.sportImageUrl = response.photos[0].src.large;
        }
      },
      error: (error) => {
        console.error('Errore nel caricamento immagine Pexels:', error);
      }
    });
  }

  /**
   * Mappa il nome dello sport in italiano a una query di ricerca in inglese
   */
  mapSportToSearchQuery(sportName: string): string {
    const sportMap: { [key: string]: string } = {
      'Calcio': 'soccer football',
      'Pallavolo': 'volleyball',
      'Beach Volley': 'beach volleyball',
      'Tennis': 'tennis',
      'Padel': 'padel tennis',
      'Basket': 'basketball',
      'Nuoto': 'swimming',
      'Ginnastica': 'gymnastics',
      'Danza': 'dance',
      'Yoga': 'yoga',
      'Pilates': 'pilates',
      'Fitness': 'fitness gym',
      'CrossFit': 'crossfit',
      'Arti Marziali': 'martial arts',
      'Karate': 'karate',
      'Judo': 'judo',
      'Boxe': 'boxing',
      'Rugby': 'rugby',
      'Atletica': 'athletics running',
      'Ciclismo': 'cycling',
      'Equitazione': 'horse riding',
      'Golf': 'golf',
      'Sci': 'skiing',
      'Snowboard': 'snowboarding',
      'Pattinaggio': 'ice skating',
      'Arrampicata': 'rock climbing',
      'Vela': 'sailing',
      'Surf': 'surfing',
      'Scherma': 'fencing'
    };

    return sportMap[sportName] || `${sportName} sport`;
  }
}
