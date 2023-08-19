import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryBookingPageRoutingModule } from './history-booking-routing.module';

import { HistoryBookingPage } from './history-booking.page';
import { QRCodeModule } from 'angularx-qrcode';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryBookingPageRoutingModule,
    QRCodeModule,
    SharedComponentsModule,
    PipesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HistoryBookingPage],
  
})
export class HistoryBookingPageModule {}
