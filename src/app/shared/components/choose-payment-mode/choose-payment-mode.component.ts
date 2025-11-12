import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AreaPaymentSetting } from 'src/app/models/struttura/areapaymentsetting.model';
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

  @Output() selectedConfig= new EventEmitter<ModeIncassoConfig>();
  @Output() clickCondizioniVendita = new EventEmitter<void>();


  constructor() { }

  //3 Modalità di Incassare
  _configContanti: AreaPaymentSetting;
  _configBonifico: AreaPaymentSetting;
  _configMobile: AreaPaymentSetting;
  _selectedMode: ModeIncassoConfig;

  //Usare enum in Html
  modeIncassoConfig: typeof ModeIncassoConfig = ModeIncassoConfig;

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
    this.selectedConfig.emit(modeConfig);
  }

  /**
   * Click effettuato sulle condizioni di vendita
   */
  onClickCondizioniVendita() {
    //Avviso del click sulle condizioni di vendita
    this.clickCondizioniVendita.emit();
  }

  ngOnInit() {}

}
