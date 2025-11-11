import { Component, Input, OnInit } from '@angular/core';
import { AreaPaymentSetting } from 'src/app/models/struttura/areapaymentsetting.model';

@Component({
  selector: 'app-choose-payment-mode',
  templateUrl: './choose-payment-mode.component.html',
  styleUrls: ['./choose-payment-mode.component.scss'],
})
export class ChoosePaymentModeComponent  implements OnInit {

  @Input() set configContanti(value: AreaPaymentSetting) {
    this._configContanti = value;
  }

  @Input() set configBonifico(value: AreaPaymentSetting) {
    this._configBonifico = value;
  }

  @Input() set configMobile(value: AreaPaymentSetting) {
    this._configMobile = value;
  }

  constructor() { }

  //3 Modalità di Incassare
  _configContanti: AreaPaymentSetting;
  _configBonifico: AreaPaymentSetting;
  _configMobile: AreaPaymentSetting;

  

  ngOnInit() {}

}
