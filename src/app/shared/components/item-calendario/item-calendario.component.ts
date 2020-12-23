import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { stringify } from 'querystring';
import { ItemCalendario } from 'src/app/models/itemCalendario.model';
import { PianificazioneCorso } from 'src/app/models/pianificazionecorso.model';

@Component({
  selector: 'app-item-calendario',
  templateUrl: './item-calendario.component.html',
  styleUrls: ['./item-calendario.component.scss'],
})
export class ItemCalendarioComponent implements OnInit {

  @Input() params : ItemCalendario = new ItemCalendario()

  @Output() click: EventEmitter<any> = new EventEmitter<any>()

  TipoBadge: typeof TipoBadge = TipoBadge


  constructor() { }

  ngOnInit() {}

  onClick(){
    this.click.emit();
  }


  get tipoBadge():TipoBadge{
    let tipo: TipoBadge;

    if (this.params.badgeText && this.params.badgeText.length > 0){
      if(this.params.badgeIcon && this.params.badgeIcon.length > 0){
        //abbiamo entrambi 
        tipo = TipoBadge.iconAndText;
      }
      else{
        // abbiamo solo il testo
        tipo = TipoBadge.onlyText;
      }
    }
    else if(this.params.badgeIcon && this.params.badgeIcon.length > 0){
      //abbiamo solo l'icona
      tipo = TipoBadge.onlyIcon;
    }

    else{
      //non abbiamo nulla
      tipo = TipoBadge.noBadge;
    }


    return tipo
  }

  get badgeClass():string{
    let myCssClass: string = '';

    if(this.tipoBadge == TipoBadge.onlyIcon){
      myCssClass = 'badge-icon-only';
    }
    else if(this.tipoBadge == TipoBadge.iconAndText){
      myCssClass = 'badge-icon-text';
    }

    return myCssClass;
  }


}

enum TipoBadge{
  onlyIcon = 0,
  onlyText = 1,
  iconAndText = 2,
  noBadge = 3
}
