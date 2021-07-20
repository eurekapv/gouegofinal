import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Settimana } from 'src/app/models/settimana.model';

@Component({
  selector: 'app-settimana-block',
  templateUrl: './settimana-block.component.html',
  styleUrls: ['./settimana-block.component.scss'],
})
export class SettimanaBlockComponent implements OnInit {

  constructor() { 

    
  }

  @Input() listDays: Settimana[] = [];
  @Input() colorSelected: string = 'primary';
  @Input() colorNotSelected: string = 'secondary';
  @Input() clickable: boolean = false;
  @Input() isDesktop: boolean = false;
  @Output() clickElement: EventEmitter<Settimana> = new EventEmitter();


  ngOnInit() {}

  /**
   * Ritorna il colore da applicare
   * @param myDay Giornata
   */
  getColorDay(myDay: Settimana): string {
    let myColor = this.colorNotSelected;

    if (myDay && myDay.selected)  {
      myColor = this.colorSelected;
    }

    return myColor;
  }

  /**
   * Ritorna il Fill da applicare
   * @param myDay Giornata
   */
  getFillDay(myDay: Settimana): string {
    let myColor = 'outline';

    if (myDay && myDay.selected)  {
      myColor = 'solid';
    }

    return myColor;
  }  

  /**
   * Ritorna la Label da applicare
   * @param myDay Giornata
   */
   getLabelDay(myDay: Settimana): string {

    let myLabel = '';

    if (this.isDesktop)  {
      myLabel = myDay.label.toUpperCase();
    }
    else {
      myLabel = myDay.xsLabel.toUpperCase();
    }

    return myLabel;
  }   


  /**
   * Evento di click sul button
   * @param giorno Giorno cliccato
   */
  onClickDay(giorno:Settimana) {
    if (this.clickable) {
      //Emetto l'evento con il giorno
      this.clickElement.emit(giorno);
    }
  }
  

}
