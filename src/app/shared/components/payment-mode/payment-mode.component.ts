import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AreaPaymentSetting } from 'src/app/models/struttura/areapaymentsetting.model';
import { PaymentChannel, PaymentMode, ValueList } from 'src/app/models/zsupport/valuelist.model';
import { Platform, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-payment-mode',
  templateUrl: './payment-mode.component.html',
  styleUrls: ['./payment-mode.component.scss'],
})
export class PaymentModeComponent implements OnInit {

  _arPayment: AreaPaymentSetting[] = [];
  @Input() set arPayment(value: AreaPaymentSetting[]) {
    if (value) {
      this._arPayment = value;
      this._arPaymentModeList = AreaPaymentSetting.prepareArPaymentMode(this._arPayment);
      this.chooseStartPayment();
    }
  }
  //Modalità ad Icone e non con Alert Popup
  @Input() set iconMode(value:boolean) {
    this._iconMode = value;
  }
  @Output() onPaymentModeChoosed = new EventEmitter<PaymentMode>();
  selectedPaymentMode: ValueList;
  
  _arPaymentModeList: ValueList[] = []; //Il contenuto dell'array è al max 3 record (Paga struttura, adesso, bonifico)
  _iconMode: boolean = false;

  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {
    //Creo una lista con le possibilità
    //this._arPaymentModeList = AreaPaymentSetting.prepareArPaymentMode(this._arPayment);
    //this.chooseStartPayment();
  }

  /**
   * Scegli un pagamento da proporre
   * Se presente il metodo elettronico sceglie quello, altrimenti onSite o in ultimo il Bonifico
   */
  chooseStartPayment() {
    
    if (this._arPaymentModeList) {
            
      if (this._arPaymentModeList.length != 0) {
        //Metto in ordine decrescente
        this._arPaymentModeList.sort((a,b) => b.value - a.value);

        //Se non ho un paga Adesso giro nuovamente in ordine crescente
        if (this._arPaymentModeList[0].value != PaymentMode.pagaAdesso) {
         
          this._arPaymentModeList.sort((a,b) => a.value - b.value);
        }
        //In prima posizione ho il pagamenti che cercavo
        this._arPaymentModeList[0].selected = true;
        //Emetto un evento di modifica e imposto il pagamento selezionato
        this.onChangePaymentSelection(this._arPaymentModeList[0]);
        
      }
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
   * Dimensione delle colonne in modalità Icone
   */
  get modeIconSizeColumn(): number {
    let lunghezza = 0;
    let size = 12;

    if (this._arPaymentModeList) {
      lunghezza = this._arPaymentModeList.length;
    }

    if (lunghezza != 0) {
      size = Math.trunc(12 / lunghezza);
      if (size < 3) {
        size = 3;
      }
    }

    return size;
  }

  /**
   * Ritorna la classe da applicare (in versione Icon) alla colonna identificata dall'item
   */
  getModeIconClassColumn(item: ValueList): string {
    let myClass = 'col-mode-payment';
    if (item && this.selectedPaymentMode) {
      if (item.value == this.selectedPaymentMode.value) {
        myClass = `${myClass} selected`;
      }
    }

    return myClass;
  }


  /**
   * Apertura delle voci di scelta
   * Mobile: ActionSheet
   * Desktop: 
   */
   onOpenChoose() {
    let buttonsArray: any[]=[];
    let singleButton: any;

    if (this._arPaymentModeList) {
      if (this._arPaymentModeList.length !== 0) {

        //Popolo i Bottoni
        for (const iterator of this._arPaymentModeList) {
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
