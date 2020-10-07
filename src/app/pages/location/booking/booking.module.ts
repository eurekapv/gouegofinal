import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingPageRoutingModule } from './booking-routing.module';

import { BookingPage } from './booking.page';
import { HomePageModule } from '../../home/home.module';
import { BookingsummaryPage } from './bookingsummary/bookingsummary.page';
import{ BookingsummaryPageModule } from './bookingsummary/bookingsummary.module'
import { VerifyPageModule } from 'src/app/pages/auth/verify/verify.module'
import { VerifyPage } from 'src/app/pages/auth/verify/verify.page'
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    BookingPageRoutingModule,
    
    BookingsummaryPageModule,
    VerifyPageModule,
    SharedComponentsModule,    
  ],
  declarations: [BookingPage],
  entryComponents: [BookingsummaryPage, VerifyPage]
})
export class BookingPageModule {}
