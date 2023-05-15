import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorybookPageRoutingModule } from './historybook-routing.module';

import { HistorybookPage } from './historybook.page';

import { QRCodeModule } from 'angularx-qrcode'
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorybookPageRoutingModule,
    QRCodeModule,
    SharedComponentsModule
      
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  declarations: [HistorybookPage]
})
export class HistorybookPageModule {}
