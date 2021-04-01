import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Sport } from 'src/app/models/sport.model';
import { StartService } from 'src/app/services/start.service';


@Component({
  selector: 'app-sport-scroll',
  templateUrl: './sport-scroll.component.html',
  styleUrls: ['./sport-scroll.component.scss'],
})
export class SportScrollComponent implements OnInit {

  @Input() selectedSport: Sport;
  @Output() sportChanged= new EventEmitter<Sport>();
  @Input() sportList:Sport[];
  @ViewChild('sliderSport')sliderSport: IonSlides;

  
  sliderOpts1={
    slidesPerView: 1,
    spaceBetween: 0,
    initialSlide: 0,
  }

  sliderOpts2={
    slidesPerView: 2,
    spaceBetween: 0,
    initialSlide: 0,
  }
  
  sliderOpts3={
    slidesPerView: 2.5,
    spaceBetween: 0,
    initialSlide: 0, //Dovrei farla variabile
    // Responsive breakpoints   
  //  breakpoints: {  
   
  //     // when window width is <= 320px     
  //     320: {       
  //        slidesPerView: 2.5,
  //        spaceBetween: 1     
  //     },     
  //     // when window width is <= 480px     
  //     480: {       
  //        slidesPerView: 2.5,       
  //        spaceBetween: 6     
  //     },   
  
  //     // when window width is <= 640px     
  //     640: {       
  //        slidesPerView: 2.5,       
  //        spaceBetween: 1     
  //     },

  //     1024: {
  //       slidesPerView: 2.5,       
  //       spaceBetween: 1  
  //     }


  
  //  } 
  }

  sliderOpts4={
    slidesPerView: 3.5,
    spaceBetween: 0,
    initialSlide: 0
  }
  
  constructor(private startService: StartService) {
  }
  
  ngOnInit() {
    
    
    
  }
  
  ngOnChanges() {   
    
    
  }
  
  ionViewDidEnter()
  {
    

  }

/**
 * Si posiziona sulla Slide richiesta
 * @param indexSlideZeroBased Indice della Slide
 */
  goToSlide(indexSlideZeroBased: number) {
    if (this.sliderSport) {
      this.sliderSport.slideTo(indexSlideZeroBased);
    }
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
   * A seconda del numero di sport presenti, ritorna le opzioni da impostare
   * @returns 
   */
     getSliderOptions():any {
      let slidOpt: any;
      if (this.sportList.length == 1) {
        slidOpt = this.sliderOpts1;
      }
      else if (this.sportList.length == 2) {
        slidOpt = this.sliderOpts2;
      }
      else if (this.sportList.length == 3) {
        slidOpt = this.sliderOpts3;
      }
      else {
        slidOpt = this.sliderOpts3;
      }
  
      return slidOpt;
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
        myPos = this.sportList.findIndex(el => {
          return el.ID == mySport.ID
        });
      }
  
      return myPos;
    }

}
