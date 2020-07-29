import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingPageRoutingModule } from './booking-routing.module';

import { BookingPage } from './booking.page';
import { HomePageModule } from '../../home/home.module';
import { BookingsummaryPage } from './bookingsummary/bookingsummary.page';
import{ BookingsummaryPageModule } from './bookingsummary/bookingsummary.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BookingPageRoutingModule,
    HomePageModule,
    BookingsummaryPageModule
    
  ],
  declarations: [BookingPage],
  entryComponents: [BookingsummaryPage]
})
export class BookingPageModule {}
