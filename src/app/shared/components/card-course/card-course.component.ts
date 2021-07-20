import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Corso } from '../../../models/corso.model'
import { ValueList, TargetSesso, Sesso, TipoCorso } from 'src/app/models/valuelist.model';
import { StartService } from 'src/app/services/start.service'
import { Sport } from 'src/app/models/sport.model';


@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss'],
})
export class CardCourseComponent implements OnInit {

  constructor(private startService: StartService) { }

  @Input() myCorso = new Corso();
  //Se impostato a TRUE significa che nell'area sono abilitate le iscrizioni con l'app
  //e quindi controllare se è possibile iscriversi con le date ed
  //enfatizzare la scheda con un colore speciale
  @Input() useIscrizioniColor = false;
  @Output() clickDetail = new EventEmitter<Corso>();
  @Output() clickIscrizione = new EventEmitter<Corso>();
  
  iconColor = 'primary';

  

  ngOnInit() {
    
  }

  /**
   * Indica se mostrare il pulsante delle Iscrizioni
   */
   showIscrizioniButton():boolean {
    let show = false;
    if (this.myCorso) {
      if (this.useIscrizioniColor && this.myCorso.flagIscrizioniAperte()) {
        show = true;
      }
    }

    return show;
  }  

  /**
  * Emetto un evento per il pulsante di Iscrizione
   */
  onClickIscrizione() {
    //Emetto l'evento per segnalare la richiesta di Iscrizione
    this.clickIscrizione.emit(this.myCorso);
  }

  /**
   * Torna l'eventuale classe speciale da applicare
   */
  getClassHeader(): string {
    let myClass = '';
    if (this.myCorso) {

      if (this.useIscrizioniColor && this.myCorso.flagIscrizioniAperte()) {
        myClass = 'special';
      }
    }
    
    return myClass;
  }


  /**
   * Indica se mostrare o no il Bollino Prova
   * @returns TRUE/FALSE
   */
  showFabProva():boolean {
    let show:boolean = false; 
    if (this.myCorso && this.myCorso.TIPO == TipoCorso.prova) {
      show = true;
    }

    return show;

  }

  getLabelTargetSesso() {
    let toDecode = TargetSesso.maschileFemminile;
    let label = '';
    
    if (this.myCorso.TARGETSESSO) {
      toDecode = this.myCorso.TARGETSESSO;
    }

    label = ValueList.decode(TargetSesso, toDecode);

    return label;
  }


  goToDetail() {
    //Emetto l'evento per andare al dettaglio corso
    this.clickDetail.emit(this.myCorso);
  }

  
  /**
   * Dato un oggetto corso, ritorna la stringa dell'icona corrispondente
   * @param corso L'oggetto corso
   */
  getSportIcon (corso: Corso)
  {
    if (corso){
      return this.startService.getSportIcon(corso.IDSPORT);
    }
  }
}
