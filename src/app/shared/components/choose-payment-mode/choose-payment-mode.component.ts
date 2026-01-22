import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AreaPaymentSetting } from 'src/app/models/struttura/areapaymentsetting.model';
import { ModeIncassoConfig } from 'src/app/models/zsupport/valuelist.model';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-choose-payment-mode',
  templateUrl: './choose-payment-mode.component.html',
  styleUrls: ['./choose-payment-mode.component.scss'],
})
export class ChoosePaymentModeComponent  implements OnInit {

  //TODO: Quando si entra ed esce dall'ordine potrebbe succedere che se la spedizione 
  //è impostata non viene fatta la selezione corretta del metodo pagamento
  //rimane contanti quando anche è invisibile.....
  //ps. se voglio eliminare il carrello ????
  @Input() set configContanti(value: AreaPaymentSetting) {
    this._configContanti = value;
    if (!this._selectedMode && value) {
        this._selectedMode = ModeIncassoConfig.incassoContanti;
        this.syncEnableButton();
    }
  }

  @Input() set configBonifico(value: AreaPaymentSetting) {
    this._configBonifico = value;
    if (!this._selectedMode && value) {
        this._selectedMode = ModeIncassoConfig.incassoBonifico;
        this.syncEnableButton();
    }
  }

  @Input() set configMobile(value: AreaPaymentSetting) {
    this._configMobile = value;
    if (!this._selectedMode && value) {
        this._selectedMode = ModeIncassoConfig.incassoCreditCard;
        this.syncEnableButton();
    }
  }

  @Input() set canEnableConfirm(value: boolean) {
    this._canEnableConfirm = value;
  }

  @Input() set showContattaButton(value: boolean) {
    this._showContattaButton = value;
  }



  @Input() set labelConfirm(value: string) {
    this._labelConfirm = value;
  }

  @Input() set iconConfirm(value: string) {
    this._iconConfirm = value;
  }

  @Input() set labelUndo(value: string) {
    this._labelUndo = value;
  }

  @Input() set iconUndo(value: string) {
    this._iconUndo = value;
  }
  
  @Input() set deliveryMode(value: 'pickup' | 'shipping') {
    this._deliveryMode = value;
    this.syncEnableButton();
  }



  @Output() selectedConfig= new EventEmitter<ModeIncassoConfig>();
  @Output() clickCondizioniVendita = new EventEmitter<void>();
  @Output() clickButtonConfirm = new EventEmitter<void>();
  @Output() clickButtonUndo = new EventEmitter<void>();
  @Output() clickContattaStruttura = new EventEmitter<void>();

  constructor() { }

  //3 Modalità di Incassare
  _configContanti: AreaPaymentSetting;
  _configBonifico: AreaPaymentSetting;
  _configMobile: AreaPaymentSetting;
  _enableContanti: boolean = true;
  _enableBonifico: boolean = true;
  _enableMobile: boolean = true;

  _selectedMode: ModeIncassoConfig;
  _labelConfirm: string = "Conferma";
  _iconConfirm: string = "checkmark-circle-outline";

   _labelUndo: string = "Annulla";
  _iconUndo: string = "arrow-back-circle-outline"; 
  _deliveryMode: 'pickup' | 'shipping' = 'pickup';

  //Usare enum in Html
  modeIncassoConfig: typeof ModeIncassoConfig = ModeIncassoConfig;

  //Dall'esterno mi dicono se posso abilitare il pulsante
  _canEnableConfirm: boolean = false;

  //Indica se mostrare ik pulsante Contatta la struttura
  _showContattaButton: boolean = false;

  //Flag per accettazione condizioni di vendita
  termsAccepted: boolean = false;

  //Stripe Live Mode
  stripeLiveMode: boolean = environment.additionalConfig.stripeLiveMode;

  /**
   * Ritorna la label della conferma
   * Se la scelta è pagare subito torna Para ora
   * @returns 
   */
  getLabelConfirm():string {
    let value = this._labelConfirm;

    if (this._selectedMode == ModeIncassoConfig.incassoCreditCard) {
      value = 'Paga ora'
    }

    return value;
  }


  /**
   * Torna TRUE se esiste la modalità passata o se ne esistesse almeno una
   * @param modeConfig 
   */
  existConfiguration(modeConfig?:ModeIncassoConfig) {
    let flagResult: boolean = false;

    if (modeConfig) {
      if (this._configContanti && modeConfig == ModeIncassoConfig.incassoContanti) {
            flagResult = true;
      }
      else if (this._configBonifico && modeConfig == ModeIncassoConfig.incassoBonifico) {
            flagResult = true;
      } 
      else if (this._configMobile && modeConfig == ModeIncassoConfig.incassoCreditCard) {
            flagResult = true;
      } 

    }
    else if (this._configContanti || this._configBonifico || this._configMobile) {
        flagResult = true;        
    }

    return flagResult;
  }

  /**
   * Invio il metodo scelto
   * @param modeConfig 
   */
  onSelectMode(modeConfig?:ModeIncassoConfig) {
    this._selectedMode = modeConfig;
    this.selectedConfig.emit(modeConfig);
  }

  /**
   * Click effettuato sulle condizioni di vendita
   */
  onClickCondizioniVendita() {
    //Avviso del click sulle condizioni di vendita
    this.clickCondizioniVendita.emit();
  }

  onClickContattaStruttura() {
    this.clickContattaStruttura.emit();
  }

  /** utente ha fatto clic sul pulsante di conferma */
  onConfirm() {
    this.clickButtonConfirm.emit();
  }

  /** utente ha fatto clic sul pulsante di annulla */
  onUndo() {
    this.clickButtonUndo.emit();
  }

  /**
   * Sistema le variabili di enable a seconda del delivery Mode
   */
  syncEnableButton() {
    //Come sta pagando ora (Apple, Contanti)
    let actualPayment = this._selectedMode;

    //Se ritiro in sede allora paga come vuoi
    if (this._deliveryMode == 'pickup') {
      this._enableBonifico = true;
      this._enableContanti = true;
      this._enableMobile = true;
    }
    else {
      //Spedizione (Puoi pagare solo in Mobile)
      this._enableBonifico = false;
      this._enableContanti = false;
      this._enableMobile = true;

      if (this._selectedMode !== ModeIncassoConfig.incassoCreditCard) {
        if (this._configMobile) {
          this.onSelectMode(ModeIncassoConfig.incassoCreditCard);
          console.log('Carta di credito')
        }
        else {
          this.onSelectMode();
          console.log('NULL')
        }
      }
    }

  }



  /**
   * Specifica se il pulsante di conferma è abilitato
   */
  get isConfirmEnabled(): boolean {
    if (this._canEnableConfirm && this._selectedMode != null && this.termsAccepted) {
      return true;
    }
    return false;
  }



  ngOnInit() {}

}
