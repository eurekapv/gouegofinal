import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Platform, ActionSheetController } from '@ionic/angular';
import { AreaPaymentSetting } from 'src/app/models/areapaymentsetting.model';

@Component({
  selector: 'app-payment-choose',
  templateUrl: './payment-choose.component.html',
  styleUrls: ['./payment-choose.component.scss'],
})
export class PaymentChooseComponent implements OnInit {

  //Elenco dei pagamenti accettati
  @Input() arPayment: AreaPaymentSetting[] = [];
  @Output() onPaymentChoosed = new EventEmitter<AreaPaymentSetting>();
  @Input() selectedPayment: AreaPaymentSetting;

  isMobile = false;

  constructor(private platform: Platform,
              private actionSheetController: ActionSheetController) { 

    if (platform.is('hybrid')) {
      this.isMobile = true;
    }
    else {
      this.isMobile = false;
    }
  }

  get itemIcon() {
    let nameIcon = 'cart-outline';

    if (this.selectedPayment) {
      nameIcon = this.selectedPayment.icon;
    }

    return nameIcon;
  }



  ngOnInit() {

  }

  /**
   * Apertura delle voci di scelta
   * Mobile: ActionSheet
   * Desktop: 
   */
  onOpenChoose() {
    let buttonsArray: any[]=[];
    let singleButton: any;

    if (this.arPayment) {
      if (this.arPayment.length !== 0) {

        //Popolo i Bottoni
        for (const iterator of this.arPayment) {
          singleButton = {
            text: iterator.label,
            icon: iterator.icon,
            handler: ()=>{
              //Cambio metodo pagamento
              this.onChangePaymentSelection(iterator);
            }
          }
    
          buttonsArray.push(singleButton);
        }
    
        //Pulsante Annulla
        singleButton = {
          text:'Annulla',
          icon:'arrow-undo-sharp',
          role: 'cancel'
        }
        buttonsArray.push(singleButton);
    
        this.actionSheetController.create({
          header: 'Come desideri pagare ?',
          buttons: buttonsArray
        })
        .then(elAction => {
          elAction.present();
        });

      }
    }


  }

   


  /**
   * Cambio di selezione nel pagamento
   * @param value Nuova selezione
   */
  onChangePaymentSelection(value:AreaPaymentSetting) {
    //Memorizzo il pagamento
    this.selectedPayment = value;

    //Invio l'informazione al padre
    this.onPaymentChoosed.emit(value);
  }

}
