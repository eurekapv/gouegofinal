import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Corso } from '../../../models/corso.model'
import { ValueList, TargetSesso, Sesso } from 'src/app/models/valuelist.model';
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
  @Output() clickDetail = new EventEmitter<Corso>();
  iconColor = 'primary';

  

  ngOnInit() {
    
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
    console.log(this.myCorso);
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
