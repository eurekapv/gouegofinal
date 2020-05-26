import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Corso } from '../../../models/corso.model'
import { ValueList, TargetSesso, Sesso } from 'src/app/models/valuelist.model';


@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss'],
})
export class CardCourseComponent implements OnInit {

  constructor() { }

  @Input() myCorso = new Corso();
  @Output() clickCalendar = new EventEmitter<Corso>();
  @Output() clickDetail = new EventEmitter<Corso>();
  iconColor = 'primary';

  ngOnInit() {}

  getLabelTargetSesso() {
    let toDecode = TargetSesso.maschileFemminile;
    let label = '';
    
    if (this.myCorso.TARGETSESSO) {
      toDecode = this.myCorso.TARGETSESSO;
    }

    label = ValueList.decode(TargetSesso, toDecode);

    return label;
  }

  goToCalendar() {
    //Emetto l'evento per andare al calendario giornate
    this.clickCalendar.emit(this.myCorso);
  }

  goToDetail() {
    //Emetto l'evento per andare al dettaglio corso
    this.clickDetail.emit(this.myCorso);
  }
}
