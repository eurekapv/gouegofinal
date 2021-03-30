import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Campo } from 'src/app/models/campo.model';
import { Location } from 'src/app/models/location.model';




@Component({
  selector: 'app-campi-scroll',
  templateUrl: './campi-scroll.component.html',
  styleUrls: ['./campi-scroll.component.scss'],
})
export class CampiScrollComponent implements OnInit {

  @Input() selectedCampo: Campo;
  @Output() campoChanged= new EventEmitter<Campo>();
  @Input() campiList:Campo[];
  @Input() selectedLocation: Location;
  @Input() canChoose: boolean; //Indica se è possibile modificare la scelta con i pulsanti
  @ViewChild('sliderCampi', {static:false})sliderCampi: IonSlides;
  
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
  
  constructor() {
  }


  /**
   * A seconda del numero di campi presenti, ritorna le opzioni da impostare
   * @returns 
   */
  getSliderOptions():any {
    let slidOpt: any;
    if (this.campiList.length == 1) {
      slidOpt = this.sliderOpts1;
    }
    else if (this.campiList.length == 2) {
      slidOpt = this.sliderOpts2;
    }
    else if (this.campiList.length == 3) {
      slidOpt = this.sliderOpts3;
    }
    else {
      slidOpt = this.sliderOpts3;
    }

    return slidOpt;
  }

    /**
   * Si posiziona sulla Slide richiesta
   * @param indexSlideZeroBased Indice della Slide
   */
     goToSlide(indexSlideZeroBased: number) {
      if (this.sliderCampi) {
        this.sliderCampi.slideTo(indexSlideZeroBased);
      }
    }
  
  ngOnInit() {

  }

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
      myPos = this.campiList.findIndex(el => {
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
        //myColor = 'danger';
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
}
