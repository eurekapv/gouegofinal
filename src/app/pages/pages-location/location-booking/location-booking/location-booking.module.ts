import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LocationBookingPageRoutingModule } from './location-booking-routing.module';
import { LocationBookingPage } from './location-booking.page';
import{ LocationBookingFinalizePageModule } from '../location-booking-finalize/location-booking-finalize.module'
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { UserDataVerificationPageModule } from 'src/app/pages/pages-profile/authorization-account/user-data-verification/user-data-verification.module';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        LocationBookingPageRoutingModule,
        LocationBookingFinalizePageModule,
        UserDataVerificationPageModule,
        SharedComponentsModule,
        
    ],
    declarations: [LocationBookingPage]
})
export class LocationBookingPageModule {}
