import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ValueList, Mesi } from 'src/app/models/zsupport/valuelist.model';
import { Swiper, SwiperOptions, Navigation } from 'swiper';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { MyDateTime, TypePeriod } from 'src/app/library/models/mydatetime.model';
Swiper.use([Navigation]);

@Component({
  selector: 'app-calendarscroll',
  templateUrl: './calendarscroll.component.html',
  styleUrls: ['./calendarscroll.component.scss']
})
export class CalendarscrollComponent implements OnInit {

  //Giorno selezionato nello scroller
  _activeDay: Date = new Date();

  //Numero Mese - Anno dell'ActiveDay (utilizzato per il picker Mese Anno)
  _activeMonth: number = -1;
  _activeYear: number = 0;

  //Rispetto al ActiveDay è il Mese Prima e Dopo
  _monthBeforeDay: Date = new Date();
  _monthAfterDay: Date = new Date();


  swiper?: Swiper;

  listDay: CalendarScrollItem[] = [];

  listMesi: ValueList[] = []; //Elenco dei mesi da visualizzare nel Picker
  listAnni: Number[] = []; //Elenco dei mesi da visualizzare  


  @Input() set activeDay(value:Date) {
    this._activeDay = value;

    //Imposto le altre due proprietà
    this.setMonthYearFromActiveDay();

    //Mese prima e mese dopo
    this.setPastFurtherDay();
  }

  @Output() onChangeActiveDay = new EventEmitter<Date>();
  @ViewChild('swiperDays') swiperRef: ElementRef | undefined;




  public sliderOpts: SwiperOptions = { 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },      
    slidesPerView: 15,
    spaceBetween: 3,
    initialSlide: 1, //Dovrei farla variabile
    centeredSlides: true,
    centeredSlidesBounds: true, // evita che l'ultimo rimanga "mezzo vuoto"
    watchOverflow: true,
    // Responsive breakpoints   
   breakpoints: {  
   
       // valido da 320px in su  
      320: {       
         slidesPerView: 5,
         spaceBetween: 1     
      },     
       // valido da 480px in su
      480: {       
         slidesPerView: 5,       
         spaceBetween: 3     
      },   
       // valido da 640px in su
      640: {       
         slidesPerView: 5,       
         spaceBetween: 3
      },
       // valido da 1000px in su
      1000: {       
        slidesPerView: 8,       
        spaceBetween: 3    
     },
     // valido da 1600px in su
     1600: {       
        slidesPerView: 15,       
        spaceBetween: 3    
     } 
  
   } 
  }

  constructor() { 
    
    //Creo l'Array dei Mesi che utilizzero nel Picker Date
    this.listMesi = ValueList.getArray(Mesi);
    //Lista Mesi devo cambiarla in ZeroBased
    this.listMesi = this.listMesi.map((item) => {
                                        item.value = item.value - 1;
                                        return item;
                                      });

    //Creo l'array degli anni da mostrare nel Picker
    for (let index = 0; index < 3; index++) {
      this.listAnni.push(new Date().getFullYear() + index);
    }

    //Imposto le altre due proprietà
    this.setMonthYearFromActiveDay();

  }

  ngOnInit() {
    //Imposto la lista dei giorni da mostrare
    this.prepareListDays();
  }

  /**
   * Imposta i campi del mese attivo e Anno attivo
   * partendo da _activeDay
   */
  setMonthYearFromActiveDay() {

    if (this._activeDay) {

      this._activeMonth = this._activeDay.getMonth();
      this._activeYear = this._activeDay.getFullYear();      
    }

  }

    /**
   * Imposta _activeDay sulla base della scelta fatta nel picker
   * @param meseOneBasedNew Numero del Mese (da 1 a 12)
   * @param annoNew Anno scelto
   * @param dayNew Giorno
   */
  setNewActiveDateFrom(annoNew: number, 
                             meseOneBasedNew: number,  
                             dayNew:number = 0 ) {

    let activeM = this._activeDay.getMonth();
    let activeA = this._activeDay.getFullYear();
    let activeG = this._activeDay.getDate();

    let oggi = new Date();



    // Cambiato il mese o l'anno
    if ((meseOneBasedNew - 1) !== activeM || annoNew !== activeA) {
      
      //Ci siamo spostati sul mese/anno di oggi
      if ((meseOneBasedNew - 1) == oggi.getMonth() && annoNew == oggi.getFullYear()) {
        
        //Allora spostiamo il giorno scelto a oggi
        activeG = oggi.getDate();

      }
      else {
        //Lo portiamo al primo del mese
        activeG = 1;

        // //Qual'e' il giorno piu' alto nel nuovo mese scelto
        // let maxDay = this.getMaxDayInMont((meseOneBasedNew - 1), annoNew);
        // if (activeG > maxDay) {
        //   activeG = maxDay;
        // }

      }

      //Siccome mi ha passato anche il giorno mi posiziono
      if (dayNew != 0) {
        activeG = dayNew;
      }


      //Cambio il Giorno attivo
      this._activeDay = new Date(annoNew, (meseOneBasedNew - 1), activeG);
      
      //Reimposto Mese e Anno attivo
      this.setMonthYearFromActiveDay();

      //Ripreparo la lista dei giorni
      this.prepareListDays();

      //Si posiziona sulla Slide
      this.goToSlide(this._activeDay.getDate() -1);

      //Lancio evento di cambio giorno
      this.onChangeActiveDay.emit(this._activeDay);
    }
  }

  /**
   * Sulla base del giorno scelto, imposta anche il mese prima e dopo
   */
  setPastFurtherDay() {
    let endMonth: Date;
    let startMonth: Date;

    endMonth = MyDateTime.getStartEndDate(this._activeDay, "month", "end");
    startMonth = MyDateTime.getStartEndDate(this._activeDay, "month", "start");
    
    this._monthBeforeDay = MyDateTime.calcola(startMonth, -1, TypePeriod.days);
    this._monthAfterDay = MyDateTime.calcola(endMonth, 1, TypePeriod.days);
  }  

  
  /**
   * Ricava tutti i giorni del mese presente in _activeDay
   * Per essere utilizzati nella visualizzazione dei Button di Calendar Scroll
   */
  prepareListDays() {
    let totMonthDays: number = 30; //Numero di giorni del mese

    let dtFineMese: Date; 

    dtFineMese = MyDateTime.getStartEndDate(this._activeDay, "month", "end");


    //Numero di giorni del mese
    totMonthDays = dtFineMese.getDate();

    this.listDay = [];
    
    for (let index = 0; index < totMonthDays; index++) {

      let myDt = new Date(this._activeDay.getFullYear(), this._activeDay.getMonth(), index + 1);
      let dataScroll: CalendarScrollItem = {
        type: 'day',
        dateValue: myDt, 
        numValue: index + 1
      }

      this.listDay.push(dataScroll);
    }

    if (this.swiper) {
      //Conclusa la creazione dei dati
      this.swiper.update();
    }

  }  


  //#region EVENTI INTERFACCIA

  /**
   * Chiusura della Modale per il Picker di MeseAnno
   * @param event 
   */
  onDidDismissPickerDate(event: CustomEvent) {
    //Se conferma allora imposto la nuova data nel Picker
    if (event.detail['role'] == 'confirm') {
      this.setNewActiveDateFrom(this._activeYear, this._activeMonth + 1, 1);
    }
    else if (event.detail['role'] == 'cancel') {
      //Ha cancellato la richiesta
      //Quindi è corretta la proprietà _activeDay devo solo risistemare
      //le due proprietà _activeMonth _activeYear
      this.setMonthYearFromActiveDay();
    }
    
  }

  
  /**
   * Click sullo Scroll per la selezione di un giorno
   * @param objDay 
   */
  onClickDayButton(objDay: CalendarScrollItem) {
    let nextDate: Date;

    if (objDay) {

      if (objDay.type == 'day') {
        //Cambio il giorno attivo
        this._activeDay = objDay.dateValue;

        //Reimposto Mese e Anno Attivo
        this.setMonthYearFromActiveDay();
    
        //Lancio evento di cambio giorno
        this.onChangeActiveDay.emit(this._activeDay);
      }
      else {
        //Cambiamento al mese successivo o prossimo
        switch (objDay.type) {

          case 'next':
            //Imposto il primo del mese
            nextDate = new Date(this._activeDay.getFullYear(), this._activeDay.getMonth(), 1);
            //e poi vado al giorno 1 del mese successivo
            nextDate = MyDateTime.calcola(nextDate, 1, TypePeriod.months);
            //Uso il metodo del Picker
            this.setNewActiveDateFrom(nextDate.getFullYear(), nextDate.getMonth() + 1, nextDate.getDate() );
            break;

          case 'prev':
            //Vado al giorno ultimo del mese precedente
            nextDate = new Date(this._activeDay.getFullYear(), this._activeDay.getMonth(), 1);
            nextDate = MyDateTime.calcola(nextDate, -1, TypePeriod.days);
            //Uso il metodo del Picker
            this.setNewActiveDateFrom(nextDate.getFullYear(), nextDate.getMonth() + 1, nextDate.getDate() );
            break;
        }

        
      }
    }
  }  

  /**
   * Spostamento al mese successivo/precedente
   * @param direction 
   */
  onClickMonthButton(direction: 'next'|'prev') {
    let nextDate: Date;

    //Cambiamento al mese successivo o prossimo
      switch (direction) {

        case 'next':
          //Vado al giorno 1 del mese successivo
          nextDate = new Date(this._activeDay.getFullYear(), this._activeDay.getMonth(), 1);
          nextDate = MyDateTime.calcola(nextDate, 1, TypePeriod.months);

          this.setNewActiveDateFrom(nextDate.getFullYear(), nextDate.getMonth() + 1, nextDate.getDate() );
          break;

        case 'prev':
          //Vado al giorno ultimo del mese precedente
          nextDate = new Date(this._activeDay.getFullYear(), this._activeDay.getMonth(), 1);
          nextDate = MyDateTime.calcola(nextDate, -1, TypePeriod.days);

          this.setNewActiveDateFrom(nextDate.getFullYear(), nextDate.getMonth() + 1, nextDate.getDate() );
          break;
      }
  }

  //#endregion

  //#region METODI INTERFACCIA
  
  /**
   * Ritorna il Colore Fill da abbinare al pulsante Giornata
   * @param objDay 
   * @returns 
   */
  getFillDayButton(objDay: CalendarScrollItem) {
    let fill = 'outline';

    if (objDay) {

      if (this._activeDay.getDate() == objDay.numValue) {
        fill = 'solid';
      }

    }

    return fill;
  }
  //#endregion


  //#region METHOD SWIPPER
  /**
   * Lo Slider è stato creato nel DOM
   */
  swiperReady() {
    LogApp.consoleLog('Swiper Ready','warn');

    //Memorizzo lo swiper presente
    this.swiper = this.swiperRef?.nativeElement.swiper;

    //Applico la posizione iniziale
    this.setStartSlide();
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


  /**
   * Imposta la Slide del giorno da mostrare a seconda del _activeDay
   */
  setStartSlide() {

      //Prendo il giorno attivo -1
      let startSlide = this._activeDay.getDate() - 1;

      //Sottraggo 5 per dare più respiro
      startSlide -= 5;

      if (startSlide < 0) {
        startSlide = 0
      }
      //startSlide = 0


      setTimeout(()=> {
        this.goToSlide(startSlide);
      },300)
      
      
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

  //#endregion









  


  /**
   * Ritorna il numero del giorno piu' alto del mese
   * @param meseZeroBase Numero del Mese (0 Based)
   * @param anno Anno
   */
  getMaxDayInMonth(meseZeroBase: number, anno: number): number {

    let temporaryDate = new Date(anno, meseZeroBase, 1);
    let lastDay = 1;
    if (meseZeroBase >= 0 && meseZeroBase <= 11 && anno > 1900) {
      //Creo una Data al 1 del Mese
      temporaryDate = new Date(anno, meseZeroBase, 1);
      temporaryDate = MyDateTime.calcola(temporaryDate, 1, TypePeriod.months);
      temporaryDate = MyDateTime.calcola(temporaryDate, -1, TypePeriod.days);
      lastDay = temporaryDate.getDate();
    }


    return lastDay;
  }

}

//Rappresenta un Item presente in listDay
export type CalendarScrollItem = {
  type: 'prev' | 'next' | 'day'
  numValue?: number,
  dateValue?: Date
}
