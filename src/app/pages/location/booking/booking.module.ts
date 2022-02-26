import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { BookingPageRoutingModule } from './booking-routing.module';

import { BookingPage } from './booking.page';

import { BookingsummaryPage } from './bookingsummary/bookingsummary.page';
import{ BookingsummaryPageModule } from './bookingsummary/bookingsummary.module'
import { VerifyPageModule } from 'src/app/pages/auth/verify/verify.module'
import { VerifyPage } from 'src/app/pages/auth/verify/verify.page'
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NewLoginPage } from '../../auth/new-login/new-login.page'
import { NewLoginPageModule } from '../../auth/new-login/new-login.module'

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        BookingPageRoutingModule,
        BookingsummaryPageModule,
        VerifyPageModule,
        SharedComponentsModule,
        NewLoginPageModule
    ],
    declarations: [BookingPage]
})
export class BookingPageModule {}
