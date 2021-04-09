import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingsummaryPageRoutingModule } from './bookingsummary-routing.module';
import { PaymentChooseComponent } from 'src/app/shared/components/payment-choose/payment-choose.component';


import { BookingsummaryPage } from './bookingsummary.page';
import { HomePageModule } from 'src/app/pages/home/home.module';
import { PaypalPageModule } from '../../../payment/payment.module';
import { PaymentPage } from '../../../payment/payment.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingsummaryPageRoutingModule,
    
    PaypalPageModule,
    SharedComponentsModule
  ],
  declarations: [BookingsummaryPage],
  entryComponents:[PaymentChooseComponent, PaymentPage],
  exports:[BookingsummaryPage]
})
export class BookingsummaryPageModule {}
