import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AreaPaymentSetting } from 'src/app/models/struttura/areapaymentsetting.model';
import { Location } from 'src/app/models/struttura/location.model';
import { ModeIncassoConfig } from 'src/app/models/zsupport/valuelist.model';


@Component({
  selector: 'app-choose-payment-mode',
  templateUrl: './choose-payment-mode.component.html',
  styleUrls: ['./choose-payment-mode.component.scss'],
})
export class ChoosePaymentModeComponent  implements OnInit {

  @Input() set configContanti(value: AreaPaymentSetting) {
    this._configContanti = value;
    console.log(this._configContanti);
  }

  @Input() set configBonifico(value: AreaPaymentSetting) {
    this._configBonifico = value;
  }

  @Input() set configMobile(value: AreaPaymentSetting) {
    this._configMobile = value;
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
  _selectedMode: ModeIncassoConfig;
  _labelConfirm: string = "Conferma";
  _iconConfirm: string = "checkmark-circle-outline";

   _labelUndo: string = "Annulla";
  _iconUndo: string = "arrow-back-circle-outline"; 

  //Usare enum in Html
  modeIncassoConfig: typeof ModeIncassoConfig = ModeIncassoConfig;

  //Dall'esterno mi dicono se posso abilitare il pulsante
  _canEnableConfirm: boolean = false;

  //Indica se mostrare ik pulsante Contatta la struttura
  _showContattaButton: boolean = false;


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
  onSelectMode(modeConfig:ModeIncassoConfig) {
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
   * Specifica se il pulsante di conferma è abilitato
   */
  get isConfirmEnabled(): boolean {
    if (this._canEnableConfirm && this._selectedMode != null) {
      return true;
    }
    return false;
  }



  ngOnInit() {}

}
