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


onChangeSport(newSport: Sport) {
  // Emetti l'evento
  this.sportChanged.emit(newSport);
  
  // Scroll automatico alla chip selezionata
  this.scrollToSelectedChip(newSport);
}

private scrollToSelectedChip(sport: Sport) {
  setTimeout(() => {
    const index = this.getIndexSport(sport);
    const wrapper = document.querySelector('.chips-wrapper');
    const chips = document.querySelectorAll('.sport-chip');
    
    if (wrapper && chips[index]) {
      const chip = chips[index] as HTMLElement;
      const chipOffset = chip.offsetLeft;
      const chipWidth = chip.offsetWidth;
      const wrapperWidth = wrapper.clientWidth;
      
      // Centra la chip
      const scrollPosition = chipOffset - (wrapperWidth / 2) + (chipWidth / 2);
      
      wrapper.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, 100);
}


  // Helper: verifica se sport è selezionato
  isSelected(sport: Sport): boolean {
    return this.selectedSport && sport && this.selectedSport.ID === sport.ID;
  }

  getIndexSport(mySport: Sport): number {
    let myPos = -1;
    if (mySport) {
      myPos = this._listAvailableSports.findIndex(el => el.ID === mySport.ID);
    }
    return myPos;
  }
}