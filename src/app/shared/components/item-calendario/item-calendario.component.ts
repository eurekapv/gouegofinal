import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyDateTime } from 'src/app/library/models/mydatetime.model';
import { ItemCalendario } from 'src/app/models/zsupport/itemCalendario.model';


@Component({
  selector: 'app-item-calendario',
  templateUrl: './item-calendario.component.html',
  styleUrls: ['./item-calendario.component.scss'],
})
export class ItemCalendarioComponent implements OnInit {

  @Input() params : ItemCalendario = new ItemCalendario();
  @Input() showDate: boolean = false;
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

    /**
   * Ritorna il colore da applicare alla riga verticale che separa 
   * la colonna Sinistra dalla destra
   * @param elItem 
   */
  getClassColorColumn(elItem: ItemCalendario):string {
      let color = 'undef';
      let dataitem: Date;

      let today: Date = new Date(MyDateTime.formatDateISO(new Date(),"date"));

      if (elItem && elItem.oraInizio) {

          dataitem = MyDateTime.getOnlyDate(elItem.oraInizio);

        if (dataitem < today) {
          //Passata
          color='past';
        }
        else if (dataitem > today) {
          color = 'future'
        }
        else {
          color = 'today';
        }
      }
  
      return color;
    }


}

enum TipoBadge{
  onlyIcon = 0,
  onlyText = 1,
  iconAndText = 2,
  noBadge = 3
}
