import { Component, OnInit, Input } from '@angular/core';
import { Corso } from '../../../models/corso.model'
import { Utente } from 'src/app/models/utente.model';
import { ValueList, TargetSesso, Sesso } from 'src/app/models/valuelist.model';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.scss'],
})
export class CardCourseComponent implements OnInit {

  constructor() { }

  @Input() myCorso = new Corso();


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

}
