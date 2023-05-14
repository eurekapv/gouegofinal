import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Campo } from 'src/app/models/campo.model';
import { Location } from 'src/app/models/location.model';
import { Swiper } from 'swiper';



@Component({
  selector: 'app-campi-scroll',
  templateUrl: './campi-scroll.component.html',
  styleUrls: ['./campi-scroll.component.scss'],
})
export class CampiScrollComponent implements OnInit {

  @Input() selectedCampo: Campo;
  @Output() campoChanged= new EventEmitter<Campo>();
  @Input() set campiList(value:Campo[]) {
    //Imposto la property
    this._listAvailableCampi = value;

    if (this._listAvailableCampi) {
      this._flagAvailableCampi = (this._listAvailableCampi?.length != 0);
    }
    else {
      this._flagAvailableCampi = false;
    }

    //Se è pronto lo Swiper configuro i parametri
    this.setSwiperParams();

  }
  @Input() selectedLocation: Location;
  @Input() canChoose: boolean; //Indica se è possibile modificare la scelta con i pulsanti


  _listAvailableCampi: Campo[]; //Lista dei campi disponibili
  _flagAvailableCampi = false; //Indica la presenza di campi
  @ViewChild('sliderCampi') swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  
  styleInfoMessage: number = 2; //Stile del messaggio visualizzato

  constructor() {
  }

  ngOnInit() {

  }

  /**
   * Indica se è possibile mostrare il messaggio informativo
   */
  get showInfoField():boolean {
    let flag:boolean = false;
    if (this.selectedCampo && this.selectedLocation) {
      flag = true;
    }

    return flag;
  }


  /**
   * Indica il numero di Slide da mostrare 
   */
  get numSlidesPerView(): number {
    let value:number = 2.5;

    switch (this._listAvailableCampi.length) {
      case 1:
        value = 1;
        break;

      case 2:
          value = 2;
        break;

      case 3:
          value = 2.5;
        break;
    
      default:
        value = 2.5;
        break;
    }
    
    return value;
  }


    /**
   * Si posiziona sulla Slide richiesta
   * @param indexSlideZeroBased Indice della Slide
   */
     goToSlide(indexSlideZeroBased: number) {
      if (this.swiper) {
        this.swiper?.slideTo(indexSlideZeroBased);
      }
    }
  
  //#region Swiper Set
  
  /**
   * Lo Slider è stato creato nel DOM
   */
  swiperReady() {
    //Memorizzo lo swiper presente
    this.swiper = this.swiperRef?.nativeElement.swiper;
    //Reimposto la configurazione
    this.setSwiperParams();
  }

  /**
   * Reimposta i parametri sullo Swiper
   */
  setSwiperParams() {
    /*
    La variazione dei parametri nel DOM con variabili non funziona
    Funziona impostando valori fissi
    Per modificare tali valori uso un timeout che mi da il tempo di avere l'elemento nel DOM
    */
    setTimeout(()=>{
      this.setSwiperProp('slides-per-view', this.numSlidesPerView)
    }, 400)
  }

  /**
   * Reimposta il valore di un parametro dello SWiper
   * @param nameProp 
   * @param value 
   */
  setSwiperProp(nameProp: string, value: number) {
    let element = this.swiperRef?.nativeElement;

    if (element) {
      element.setAttribute(nameProp, value);
    }
  }
  //#endregion


  /**
   * Scelta di un nuovo campo inviata al chiamante
   * @param newCampo 
   */
  onChangeCampo(newCampo: Campo): void
  {
    let indexCampo = this.getIndexCampo(newCampo);
    
    //Posizionamento della Slide sul bottone premuto
    if (indexCampo != -1) {
      
      this.goToSlide(indexCampo);
    }
    //Emissione evento di cambio campo
    this.campoChanged.emit(newCampo);
  }

  /**
   * Ricerca un campo nell'Array e ne torna l'indice
   * @param myCampo Campo da cercare
   */
  getIndexCampo(myCampo: Campo):number {
    let myPos = -1;

    if (myCampo) {
      myPos = this._listAvailableCampi.findIndex(el => {
        return el.ID == myCampo.ID
      });
    }

    return myPos;
  }

  /**
   * Ritorna il colore da applicare a seconda del campo selezionato
   * @param myCampo Campo da analizzare
   * @returns Colore da applicare al bottone/card
   */
  getColor(myCampo: Campo) {
    let myColor = 'primary';
    
    if (this.selectedCampo && myCampo) {
      if (this.selectedCampo.ID == myCampo.ID) {
        myColor = 'tertiary';
      }
    }

    return myColor;
  }

  /**
   * Ritorna il valore di Fill da applicare a seconda del campo selezionato
   * @param myCampo Campo da analizzare
   * @returns Fill da applicare al bottone/card
   */
   getFill(myCampo: Campo) {
    let myFill = 'outline';
    if (this.selectedCampo && myCampo) {
      if (this.selectedCampo.ID == myCampo.ID) {
        myFill = 'solid';
      }
    }

    return myFill;
  }


  /**
   * Ritorna se il campo è selezionato oppure no
   * @param myCampo Campo da controllare
   * @returns TRUE/FALSE
   */
  isSelected(myCampo: Campo) {
    let isSel = false;
    
    if (this.selectedCampo && myCampo) {
      if (this.selectedCampo.ID == myCampo.ID) {
        isSel = true;
      }
    }

    return isSel;
  }


  /**
   * Cambia la modalità del messaggio informativo
   */
  onChangeInfoStyle() {
    if (this.styleInfoMessage == 1) {
      this.styleInfoMessage = 2;
    }
    else {
      this.styleInfoMessage = 1;
    }
  }
}
