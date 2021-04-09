import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AreaPaymentSetting } from 'src/app/models/areapaymentsetting.model';
import { PaymentChannel, PaymentMode, ValueList } from 'src/app/models/valuelist.model';
import { Platform, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-payment-mode',
  templateUrl: './payment-mode.component.html',
  styleUrls: ['./payment-mode.component.scss'],
})
export class PaymentModeComponent implements OnInit {

  @Input() arPayment: AreaPaymentSetting[] = [];
  @Output() onPaymentModeChoosed = new EventEmitter<PaymentMode>();
  selectedPaymentMode: ValueList;
  
  arPaymentModeList: ValueList[] = []; //Il contenuto dell'array è al max 3 record (Paga struttura, adesso, bonifico)
  
  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {
    //Creo una lista con le possibilità
    this.arPaymentModeList = AreaPaymentSetting.prepareArPaymentMode(this.arPayment);

    //Seleziono il primo disponibile
    if (this.arPaymentModeList.length != 0) {
      this.arPaymentModeList[0].selected = true;
      this.selectedPaymentMode = this.arPaymentModeList[0];
    }
  }

  get itemIcon() {
    let nameIcon = 'cart-outline';

    if (this.selectedPaymentMode) {
      nameIcon = this.selectedPaymentMode.itemIcon;
    }

    return nameIcon;
  }


  /**
   * Apertura delle voci di scelta
   * Mobile: ActionSheet
   * Desktop: 
   */
   onOpenChoose() {
    let buttonsArray: any[]=[];
    let singleButton: any;

    if (this.arPaymentModeList) {
      if (this.arPaymentModeList.length !== 0) {

        //Popolo i Bottoni
        for (const iterator of this.arPaymentModeList) {
          singleButton = {
            text: iterator.description,
            icon: iterator.itemIcon,
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
  onChangePaymentSelection(mySelection: ValueList) {
    //Memorizzo il pagamento
    this.selectedPaymentMode = mySelection;

    //Invio l'informazione al padre
    this.onPaymentModeChoosed.emit(mySelection.value);
  }

}
