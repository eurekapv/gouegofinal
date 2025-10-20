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
  @Output() sportChanged = new EventEmitter<Sport>();

  @Input() set sportList(value: Sport[]) {
    this._listAvailableSports = value;
    this._flagAvailableSports = (this._listAvailableSports?.length != 0);
    this.setSwiperParams();
  }

  @Input() set direction(value: 'horizontal' | 'vertical') {
    this._direction = value;
    this.setSwiperParams();
  }

  _listAvailableSports: Sport[];
  _flagAvailableSports: boolean = false;
  _direction: 'horizontal' | 'vertical' = 'horizontal';

  @ViewChild('sliderSport') swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  get numSlidesPerView(): number {
    // Per layout orizzontale
    if (this._direction === 'horizontal') {
      switch (this._listAvailableSports?.length) {
        case 1: return 1;
        case 2: return 2;
        case 3: return 2.5;
        default: return 2.5;
      }
    }
    
    // Per layout verticale
    return 1;
  }

  constructor() {}

  ngOnInit() {}

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
    this.setSwiperParams();
  }

  setSwiperParams() {
    setTimeout(() => {
      this.setSwiperProp('slides-per-view', this.numSlidesPerView);
      this.setSwiperProp('direction', this._direction);
      this.setSwiperProp('space-between', 12);
    }, 300);
  }

  setSwiperProp(nameProp: string, value: number | string) {
    let element = this.swiperRef?.nativeElement;
    if (element) {
      element.setAttribute(nameProp, value);
    }
  }

  goToSlide(indexSlideZeroBased: number) {
    this.swiper?.slideTo(indexSlideZeroBased);
  }

  /**
   * Evento cambio sport con scroll automatico
   * @param newSport Nuovo sport selezionato
   */
  onChangeSport(newSport: Sport) {
    // Emetti l'evento
    this.sportChanged.emit(newSport);
    
    // Scroll automatico al bottone selezionato
    this.scrollToSelectedSport(newSport);
  }

  /**
   * Scrolla automaticamente al bottone sport selezionato
   * @param sport Sport da centrare
   */
  private scrollToSelectedSport(sport: Sport): void {
    setTimeout(() => {
      const index = this.getIndexSport(sport);
      
      if (index !== -1) {
        // Trova tutti i bottoni sport
        const buttons = document.querySelectorAll('.sport-btn');
        
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
   * Helper: verifica se sport è selezionato
   */
  isSelected(sport: Sport): boolean {
    return this.selectedSport && sport && this.selectedSport.ID === sport.ID;
  }

  /**
   * Ricerca uno sport nell'Array e ne torna l'indice
   * @param mySport Sport da cercare
   */
  getIndexSport(mySport: Sport): number {
    let myPos = -1;
    if (mySport && this._listAvailableSports) {
      myPos = this._listAvailableSports.findIndex(el => el.ID === mySport.ID);
    }
    return myPos;
  }
}