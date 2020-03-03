import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from "moment";
import { PickerController } from '@ionic/angular';
import { PickerOptions, PickerButton, PickerColumn, PickerColumnOption } from '@ionic/core';
import { ValueList, Mesi } from 'src/app/models/valuelist.model';


@Component({
  selector: 'app-calendarscroll',
  templateUrl: './calendarscroll.component.html',
  styleUrls: ['./calendarscroll.component.scss'],
})
export class CalendarscrollComponent implements OnInit {


  @Input() activeDay = new Date();
  @Output() onChangeActiveDay = new EventEmitter<Date>();

  listDay: number[] = [];
  listMesi: ValueList[] = []; //Elenco dei mesi da visualizzare nel Picker

  sliderOpts = {
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
         slidesPerView: 6,       
         spaceBetween: 3     
      },   
  
      // when window width is <= 640px     
      640: {       
         slidesPerView: 20,       
         spaceBetween: 1     
      } 
  
   } 
  }

  constructor(private pickController:PickerController) { 
    
    this.setStartSlide();
    
    //Creo l'Array dei Mesi che utilizzero nel Picker Date
    this.listMesi = ValueList.getArray(Mesi);
  }

  /**
   * Imposta la Slide del giorno da mostrare a seconda del ActiveDay
   */
  setStartSlide() {
      //Prendo il giorno attivo -1
      let startSlide = this.activeDay.getDate() - 1;
      //Sottraggo 5 per dare più respiro
      startSlide -= 5;
      if (startSlide < 0) {
        startSlide = 0
      }

      this.sliderOpts.initialSlide = startSlide;
  }



  ngOnInit() {
    this.setListDay();
  }


  /* Ricava tutti i giorni del mese presente in activeDay */
  setListDay() {
    let endDay = 30;
    let endWrapper = moment(new Date(this.activeDay.getFullYear(), this.activeDay.getMonth(), 1)).add(1, 'M');
    endWrapper.subtract(1,'day');
    endDay = endWrapper.date();

    this.listDay = [];
    endDay += 1; //Incremento EndDay per usare la condizione <
    for (let index = 1; index < endDay; index++) {
      this.listDay.push(index);
    }
  }

  // Ritorna il colore del Button
  getFillButton(day) {
    let fill = 'outline';
    if (this.activeDay.getDate() == day) {
      fill = 'solid';
    }

    return fill;
  }

  //Bottone del giorno premuto
  onClickButton(day) {
    let anno = this.activeDay.getFullYear();
    let mese = this.activeDay.getMonth();
    let giorno = day;
    this.activeDay = new Date(anno, mese, giorno);

    //Lancio evento di cambio giorno
    this.onChangeActiveDay.emit(this.activeDay);
  }
  

  showPickerDate() {
    let _this = this;
    // Indici delle voci selezionate
    let indexActiveMese = _this.activeDay.getMonth();
    let indexActiveAnno = (_this.activeDay.getFullYear() - (new Date()).getFullYear());
    console.log(indexActiveAnno);

    let pickButtons: PickerButton[] = [{
      text: 'Conferma',
      handler: (data: any) => {
        //Recupero Mese e Anno
        let m = data.mese.value;
        let a = data.anno.value;

        //Imposto la nuova Data attiva
        _this.setNewActiveDateFromPicker(m, a);
        
      }
      },
      {
        role: 'cancel',
        text: 'Annulla'
      }];

    //Creo l'elenco sulla colonna del Mese
    let optionColMesi: PickerColumnOption[] = [];
    for (let index = 0; index < this.listMesi.length; index++) {
      const element = this.listMesi[index];

      let pickColMese: PickerColumnOption = {
        text: element.description,
        value: element.value
      }
      optionColMesi.push(pickColMese);
    }




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

    // Colonne del Picker
    let pickColumns: PickerColumn[] = [
            {
              name: 'mese',
              options: optionColMesi,
              selectedIndex: indexActiveMese
            },
            {
              name: 'anno',
              options: optionColAnni,
              selectedIndex: indexActiveAnno
            }];


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
            elPicker.present();
          });
  }

  /**
   * Imposta activeDay sulla base della scelta fatta nel picker
   * @param meseOneBasedNew Numero del Mese (da 1 a 12)
   * @param annoNew Anno scelto
   */
  setNewActiveDateFromPicker(meseOneBasedNew: number, annoNew: number ) {
    let activeM = this.activeDay.getMonth();
    let activeA = this.activeDay.getFullYear();
    let activeG = this.activeDay.getDate();
    let message = '';



    // message = `Nuovo (M-A): ${meseOneBasedNew} - ${annoNew} / Attuali (M-A): ${activeM} - ${activeA}`;
    // console.log(message);

    // Cambiato il mese o l'anno
    if ((meseOneBasedNew - 1) !== activeM || annoNew !== activeA) {
      
      //Qual'e' il giorno piu' alto nel nuovo mese scelto
      let maxDay = this.getMaxDayInMont((meseOneBasedNew - 1), annoNew);
      if (activeG > maxDay) {
        activeG = maxDay;
      }

      //Cambio il Giorno attivo
      this.activeDay = new Date(annoNew, (meseOneBasedNew - 1), activeG);

      this.setListDay();

      //Lancio evento di cambio giorno
      this.onChangeActiveDay.emit(this.activeDay);
    }
  }

  /**
   * Ritorna il numero del giorno piu' alto del mese
   * @param meseZeroBase Numero del Mese (o Based)
   * @param anno Anno
   */
  getMaxDayInMont(meseZeroBase: number, anno: number) {
    let newDate = moment(new Date(anno, meseZeroBase, 1));
    newDate.add(1,'month');
    newDate.subtract(1,'day');

    return newDate.toDate().getDate();
  }

}
