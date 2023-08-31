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

  @Input() set listDays(value: Settimana[]) {
    this._listDays = value;
    //Calcolo i selezionati
    if (this._listDays) {
      let countSupport = this._listDays.filter(elItem => {
        return elItem.selected
      });
      this._numSelected = countSupport.length;
      this.listText = this._listDays.filter(elItem => {return elItem.selected}).map(elItem => {return elItem.label}).join(', ');
    }
  };
  @Input() colorSelected: string = 'primary';
  @Input() colorNotSelected: string = 'secondary';
  @Input() clickable: boolean = false;
  @Input() isDesktop: boolean = false;
  @Input() set showOnlySelected(value: boolean) {
    this._showOnlySelected = value;
  }
  //Modalità Solo testo dei giorni selezionati separati da ,
  @Input() set asText(value: boolean) {
    this._asText = value;
  }

  @Input() set size(value: 'sm' | 'md' | 'lg') {
    this._size = value;
  }
  @Output() clickElement: EventEmitter<Settimana> = new EventEmitter();

  _size: 'sm' | 'md' | 'lg' | 'auto' = 'sm'; //Auto ridimensiona a seconda di quanti da mostrare
  _showOnlySelected = false; //Mostra solo i giorni selezionati
  _listDays: Settimana[] = []; 
  _numSelected = 0; //Numero di elementi selezionati
  _asText = false;
  listText = '';

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

    switch (this._size) {

      case 'lg':
        myLabel = myDay.label.toUpperCase();
        break;

      case 'md':
        myLabel = myDay.smallLabel.toUpperCase();
        break;

      case 'sm':
        myLabel = myDay.xsLabel.toUpperCase();
        break;
      
      case 'auto': 
        if (this._showOnlySelected) {
          if (this._numSelected <= 3) {
            //Lg Version
            myLabel = myDay.label.toUpperCase();
          }
          else if (this._numSelected <= 5) {
            //Medium
            myLabel = myDay.smallLabel.toUpperCase();
          }
          else {
            //Small Version
            myLabel = myDay.xsLabel.toUpperCase();
          }
        }
        else {
          //Siccome ci sono tutti metto la versione stretta
          myLabel = myDay.xsLabel.toUpperCase();
        }
      break;
    
      default:
        myLabel = myDay.xsLabel.toUpperCase();
        break;
    }

    return myLabel;
  }   

  /**
   * Controlla se devo mostrare il bottone 
   * @param myDay 
   */
  getFlagCanShowDay(myDay: Settimana): boolean {
    let flagShow = true;

    if (this._showOnlySelected == true) {
      if (myDay.selected == true) {
        flagShow = true;
      }
      else {
        flagShow = false;
      }
    }
    else {
      flagShow = true;
    }

    return flagShow;
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
