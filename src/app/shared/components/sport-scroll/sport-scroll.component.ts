import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Sport } from 'src/app/models/archivi/sport.model';
import { Swiper } from 'swiper';


@Component({
  selector: 'app-sport-scroll',
  templateUrl: './sport-scroll.component.html',
  styleUrls: ['./sport-scroll.component.scss'],
})
export class SportScrollComponent implements OnInit {

  @Input() selectedSport: Sport;
  @Output() sportChanged= new EventEmitter<Sport>();

  //Ricevo gli Sport da utilizzare
  @Input() set sportList(value:Sport[]) {

    //Memorizzo gli Sport disponibili
    this._listAvailableSports = value;

    //Flag se ci sono sport
    this._flagAvailableSports = (this._listAvailableSports.length != 0)
    
    //Se è pronto lo Swiper configuro i parametri
    this.setSwiperParams();
  }

  @Input() set direction(value: 'horizontal' | 'vertical') {
    this._direction = value;
    //Se è pronto lo Swiper configuro i parametri
    this.setSwiperParams();
  }


  _listAvailableSports: Sport[]; //Elenco degli Sport Disponibili
  _flagAvailableSports: boolean = false;
  _direction: 'horizontal' | 'vertical' = 'horizontal';

  @ViewChild('sliderSport') swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  /**
   * Indica il numero di Slide da mostrare 
   */
  get numSlidesPerView(): number {
    let value:number = 2.5;

    switch (this._listAvailableSports.length) {
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

  
  
  constructor() {
  }
  
  ngOnInit() {
    
  }

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
      this.setSwiperProp('slides-per-view', this.numSlidesPerView);
      this.setSwiperProp('direction', this._direction);
    }, 300)
  }

  /**
   * Reimposta il valore di un parametro dello SWiper
   * @param nameProp 
   * @param value 
   */
  setSwiperProp(nameProp: string, value: number | string) {
    let element = this.swiperRef?.nativeElement;
    

    if (element) {
      element.setAttribute(nameProp, value);
    }
  }

  /**
   * Questo è il reale Oggetto Swiper su cui è possibile chiamare i metodi 
   * https://swiperjs.com/swiper-api#methods--properties
   * @returns 
   */
  getSwiperObject(): any {
    let element = this.swiperRef?.nativeElement;
    let objSwiper = null;
    if (element) {
      try {
        objSwiper = element.swiper;
      } catch (error) {
        objSwiper = null;
      }
    }

    return objSwiper;
  }
  
/**
 * Si posiziona sulla Slide richiesta
 * @param indexSlideZeroBased Indice della Slide
 */
  goToSlide(indexSlideZeroBased: number) {
    //Avavnzo alla Slide  
    this.swiper?.slideTo(indexSlideZeroBased);
  }
  /**
   * Scelta di un nuovo sport
   * @param newSport Nuovo Sport da applicare
   */
  onChangeSport(newSport: Sport)
  {
    let indexSport = this.getIndexSport(newSport);
    
    //Posizionamento della Slide sul bottone premuto
    if (indexSport != -1) {
      
      this.goToSlide(indexSport);
    }

    //Emissione evento di cambio campo
    this.sportChanged.emit(newSport);
  }
 

  /**
   * Ritorna il colore da applicare a seconda dello sport selezionato
   * @param mySport Sport da analizzare
   * @returns Colore da applicare al bottone/card
   */
  getColor(mySport: Sport) {
    let myColor = 'light';
    
    if (this.selectedSport && mySport) {
      if (this.selectedSport.ID == mySport.ID) {
        
        myColor = 'secondary';
      }
    }

    return myColor;
  }

    /**
   * Ricerca un campo nell'Array e ne torna l'indice
   * @param mySport Campo da cercare
   */
     getIndexSport(mySport: Sport):number {
      let myPos = -1;
  
      if (mySport) {
        myPos = this._listAvailableSports.findIndex(el => {
          return el.ID == mySport.ID
        });
      }
  
      return myPos;
    }

}
