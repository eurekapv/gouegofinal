import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions, PickerButton, PickerColumn, PickerColumnOption } from '@ionic/core';
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


  _activeDay: Date = new Date();
  _monthBeforeDay: Date = new Date();
  _monthAfterDay: Date = new Date();

  @Input() set activeDay(value:Date) {
    this._activeDay = value;
    this.setPastFurtherDay();
  }

  @Output() onChangeActiveDay = new EventEmitter<Date>();
  @ViewChild('swiperDays') swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  listDay: CalendarScrollItem[] = [];
  listMesi: ValueList[] = []; //Elenco dei mesi da visualizzare nel Picker

  public sliderOpts: SwiperOptions = { 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },      
    slidesPerView: 15,
    spaceBetween: 3,
    initialSlide: 1, //Dovrei farla variabile
    // Responsive breakpoints   
   breakpoints: {  
   
      // when window width is <= 320px     
      320: {       
         slidesPerView: 5,
         spaceBetween: 1     
      },     
      // when window width is <= 480px     
      480: {       
         slidesPerView: 5,       
         spaceBetween: 3     
      },   
  
      // when window width is <= 640px     
      640: {       
         slidesPerView: 5,       
         spaceBetween: 1     
      },
      1000: {       
        slidesPerView: 8,       
        spaceBetween: 1     
     } 
  
   } 
  }

  constructor(private pickController:PickerController) { 
    
    //Creo l'Array dei Mesi che utilizzero nel Picker Date
    this.listMesi = ValueList.getArray(Mesi);
  }

  ngOnInit() {
    //Imposto la lista dei giorni da mostrare
    this.setListDay();
  }

  //#region Swiper Method
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
      console.log('Spostamento verso ' + indexSlideZeroBased)
      this.swiper?.slideTo(indexSlideZeroBased);
    }
  }

  //#endregion

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
  


  /* Ricava tutti i giorni del mese presente in _activeDay */
  setListDay() {
    let totMonthDays: number = 30; //Numero di giorni del mese

    let dtFineMese: Date; 

    dtFineMese = MyDateTime.getStartEndDate(this._activeDay, "month", "end");

    //Imposto il 1 / Mese / Anno
    //dtFineMese = new Date(this._activeDay.getFullYear(), this._activeDay.getMonth(), 1);
    //Aggiungo 1 mese 
    //dtFineMese = MyDateTime.calcola(dtFineMese, 1, TypePeriod.months);
    //Sottraggo 1 Giorno per andare alla fine Mese precedente
    //dtFineMese = MyDateTime.calcola(dtFineMese, -1, TypePeriod.days);

    //Numero di giorni del mese
    totMonthDays = dtFineMese.getDate();

    this.listDay = [];
    totMonthDays += 1; //Incremento EndDay per usare la condizione <

    //Aggiungo pulsante per andare indietro
    //this.listDay.push({type:'prev'});

    for (let index = 1; index < totMonthDays; index++) {

      let myDt = new Date(this._activeDay.getFullYear(), this._activeDay.getMonth(), index);
      this.listDay.push({type:'day', 
                         dateValue: myDt, 
                         numValue: index});
    }

    //Aggiungo pulsante per andare avanti
    //this.listDay.push({type:'next'});
  }

  // Ritorna il colore del Button
  getFillButton(objDay: CalendarScrollItem) {
    let fill = 'outline';

    if (objDay) {

      if (this._activeDay.getDate() == objDay.numValue) {
        fill = 'solid';
      }

    }

    return fill;
  }

  //Bottone del giorno premuto
  onClickButton(objDay: CalendarScrollItem) {
    let nextDate: Date;

    if (objDay) {

      if (objDay.type == 'day') {
        //Cambio il giorno attivo
        this._activeDay = objDay.dateValue
    
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
            
            this.setNewActiveDateFromPicker(nextDate.getFullYear(), nextDate.getMonth() + 1, nextDate.getDate() );
            break;

          case 'prev':
            //Vado al giorno ultimo del mese precedente
            nextDate = new Date(this._activeDay.getFullYear(), this._activeDay.getMonth(), 1);
            nextDate = MyDateTime.calcola(nextDate, -1, TypePeriod.days);
            
            this.setNewActiveDateFromPicker(nextDate.getFullYear(), nextDate.getMonth() + 1, nextDate.getDate() );
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

          this.setNewActiveDateFromPicker(nextDate.getFullYear(), nextDate.getMonth() + 1, nextDate.getDate() );
          break;

        case 'prev':
          //Vado al giorno ultimo del mese precedente
          nextDate = new Date(this._activeDay.getFullYear(), this._activeDay.getMonth(), 1);
          nextDate = MyDateTime.calcola(nextDate, -1, TypePeriod.days);

          this.setNewActiveDateFromPicker(nextDate.getFullYear(), nextDate.getMonth() + 1, nextDate.getDate() );
          break;
      }
  }


  /**
   * Usato per creare la colonna del mese del ion picker
   * @param meseZeroBased è il numero del Mese Zero Base (0 = Gennaio)
   */
  initColumnMesi(meseZeroBased: number): PickerColumnOption[] {
    let optionColMesi: PickerColumnOption[] = [];
    for (let index = 0; index < this.listMesi.length; index++) {
      const element = this.listMesi[index];
      let isDisabled = (index >= meseZeroBased ? false:true);

      let pickColMese: PickerColumnOption = {
        text: element.description,
        value: element.value,
        disabled: isDisabled
        
      }
      optionColMesi.push(pickColMese);
    }    

    return optionColMesi;
  }

  /**
   * Crea la colonna degli anni
   */
  initColumnAnni(): PickerColumnOption[] {
    //Creo l'elenco sulla colonna dell'Anno
    let optionColAnni: PickerColumnOption[] = [];
    let startAnno = (new Date()).getFullYear();
    for (let index = startAnno; index < startAnno + 5 ; index++) {


      let pickColAnno: PickerColumnOption = {
        text: index + '',
        value: index
      }

      optionColAnni.push(pickColAnno);
      
      
    }

    return optionColAnni;
  }

  /**
   * Crea l'insieme delle colonne da passare al Picker
   * @param optColMesi       Colonna del Mese
   * @param indexActiveMese  Index Selezionato Mese
   * @param optColAnni       Colonna degli Anni
   * @param indexActiveAnno  Index Selezionato Anno
   */
  initColumnsPicker(optColMesi: PickerColumnOption[], indexActiveMese: number, optColAnni: PickerColumnOption[], indexActiveAnno:number): PickerColumn[] {
        // Colonne del Picker
        let pickColumns: PickerColumn[] = [
          {
            name: 'mese',
            options: optColMesi,
            selectedIndex: indexActiveMese
          },
          {
            name: 'anno',
            options: optColAnni,
            selectedIndex: indexActiveAnno
          }];

      return pickColumns;
  }
  
  /**
   * Visualizza il Picker Date
   */
  showPickerDate(): void {
    let _this = this;
    // Indici delle voci selezionate
    let indexActiveMese = 0;
    let indexActiveAnno = (_this._activeDay.getFullYear() - (new Date()).getFullYear());
    const myMese = (new Date()).getMonth();

    let pickButtons: PickerButton[] = [{
      text: 'Conferma',
      handler: (data: any) => {
        //Recupero Mese e Anno
        let selMonth = data.mese.value;
        let selYear = data.anno.value;

        //Imposto la nuova Data attiva
        _this.setNewActiveDateFromPicker(selYear, selMonth );
        
      }
      },
      {
        role: 'cancel',
        text: 'Annulla'
      }];

    //Creo l'elenco sulla colonna del Mese
    let optionColMesi: PickerColumnOption[] = this.initColumnMesi(myMese);
    
    //Creo l'elenco sulla colonna dell'Anno
    let optionColAnni: PickerColumnOption[] = [];
    optionColAnni = this.initColumnAnni();

    
    // Colonne del Picker
    let pickColumns = this.initColumnsPicker(optionColMesi, indexActiveMese, optionColAnni, indexActiveAnno);


    //Opzioni del Picker
    let pickOptions: PickerOptions = {
      columns: pickColumns,
      buttons: pickButtons,
      keyboardClose: true
    }

    //Mostro il Picker
    this.pickController
          .create(pickOptions)
          .then(elPicker => {
            elPicker.addEventListener('ionPickerColChange', async (event:any) => {
              const data = event.detail;
              
              //Cambiare la colonna dei Mesi a seconda dell'anno
              if (data.name == 'anno') {
                    const myAnno = (new Date()).getFullYear();
                    const myMese = (new Date()).getMonth();
                    let optionColMesi: PickerColumnOption[] = [];
                    let optionColAnni: PickerColumnOption[] = [];
                    let pickColumns: PickerColumn[] = [];

                    //Indice di posizione dell'array
                    const colSelectedIndex = data.selectedIndex;
                    //Tutto il contenuto della colonna 
                    const colOptions = data.options;
                    //Vediamo quale anno ha scelto
                    const chooseAnno = colOptions[colSelectedIndex].value;

                    //Creo la Colonna dell'Anno
                    optionColAnni = this.initColumnAnni();

                    //Stesso Anno attuale devo filtrare i mesi
                    if (chooseAnno == myAnno) {
                      //Devo filtrare i mesi visualizzando solo i mancanti
                      optionColMesi = this.initColumnMesi(myMese);
                    }
                    else {
                      //Tutti i mesi
                      optionColMesi = this.initColumnMesi(0);
                    }

                    //Unisco le colonne
                    pickColumns = this.initColumnsPicker(optionColMesi, 0, optionColAnni, colSelectedIndex);
                    

                    //Applico le nuove colonne
                    elPicker.columns = pickColumns;

                    //Il metodo ForceUpdate non esiste più
                    //elPicker.forceUpdate();

              }

            });
            elPicker.present();
          });
  }

  /**
   * Imposta _activeDay sulla base della scelta fatta nel picker
   * @param meseOneBasedNew Numero del Mese (da 1 a 12)
   * @param annoNew Anno scelto
   */
  setNewActiveDateFromPicker(annoNew: number, meseOneBasedNew: number,  dayNew:number = 0 ) {
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

      //Ripreparo la lista dei giorni
      this.setListDay();

      //Si posiziona sulla Slide
      this.goToSlide(this._activeDay.getDate() -1);

      //Lancio evento di cambio giorno
      this.onChangeActiveDay.emit(this._activeDay);
    }
  }

  /**
   * Ritorna il numero del giorno piu' alto del mese
   * @param meseZeroBase Numero del Mese (0 Based)
   * @param anno Anno
   */
  getMaxDayInMont(meseZeroBase: number, anno: number): number {

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
