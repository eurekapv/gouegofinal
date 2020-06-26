import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingPageRoutingModule } from './booking-routing.module';

import { BookingPage } from './booking.page';
import { HomePageModule } from '../../home/home.module';
import { BookingsummaryPage } from './bookingsummary/bookingsummary.page';
import { PaymentChooseComponent } from 'src/app/shared/components/payment-choose/payment-choose.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingPageRoutingModule,
    HomePageModule
  ],
  declarations: [BookingPage, BookingsummaryPage, PaymentChooseComponent],
  entryComponents: [BookingsummaryPage, PaymentChooseComponent]
})
export class BookingPageModule {}
