import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingPageRoutingModule } from './booking-routing.module';

import { BookingPage } from './booking.page';
import { HomePageModule } from '../../home/home.module';
import { BookingsummaryPage } from './bookingsummary/bookingsummary.page';
import { PaymentChooseComponent } from 'src/app/shared/components/payment-choose/payment-choose.component';
import { PaypalPage } from '../../paypal/paypal.page';
import { AuthComponent } from 'src/app/shared/components/auth/auth.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BookingPageRoutingModule,
    HomePageModule,
    
  ],
  declarations: [BookingPage,  BookingsummaryPage, PaymentChooseComponent, PaypalPage],
  entryComponents: [BookingsummaryPage, AuthComponent, PaymentChooseComponent, PaypalPage]
})
export class BookingPageModule {}
