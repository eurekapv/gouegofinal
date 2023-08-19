import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LocationBookingPageRoutingModule } from './location-booking-routing.module';
import { LocationBookingPage } from './location-booking.page';
import{ LocationBookingFinalizePageModule } from '../location-booking-finalize/location-booking-finalize.module'
import { UserVerifyPageModule } from 'src/app/pages/pages-profile/authorization-account/user-verify/user-verify.module'
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { UserLoginPageModule } from '../../../pages-profile/authorization-account/user-login/user-login.module'

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        LocationBookingPageRoutingModule,
        LocationBookingFinalizePageModule,
        UserVerifyPageModule,
        SharedComponentsModule,
        UserLoginPageModule
    ],
    declarations: [LocationBookingPage]
})
export class LocationBookingPageModule {}
