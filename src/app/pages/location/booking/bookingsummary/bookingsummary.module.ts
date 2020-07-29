import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingsummaryPageRoutingModule } from './bookingsummary-routing.module';
import { PaymentChooseComponent } from 'src/app/shared/components/payment-choose/payment-choose.component';


import { BookingsummaryPage } from './bookingsummary.page';
import { HomePageModule } from 'src/app/pages/home/home.module';
import { PaypalPageModule } from '../../../paypal/paypal.module';
import { PaypalPage } from '../../../paypal/paypal.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingsummaryPageRoutingModule,
    HomePageModule,
    PaypalPageModule
  ],
  declarations: [BookingsummaryPage, PaymentChooseComponent],
  entryComponents:[PaymentChooseComponent, PaypalPage],
  exports:[BookingsummaryPage]
})
export class BookingsummaryPageModule {}
