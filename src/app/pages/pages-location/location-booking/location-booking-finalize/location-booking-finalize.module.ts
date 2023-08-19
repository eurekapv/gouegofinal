import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LocationBookingFinalizePageRoutingModule } from './location-booking-finalize-routing.module';
import { LocationBookingFinalizePage } from './location-booking-finalize.page';
import { PaypalPageModule } from '../../../payment/payment.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LocationBookingFinalizePageRoutingModule,
        PaypalPageModule,
        SharedComponentsModule
    ],
    declarations: [LocationBookingFinalizePage],
    exports: [LocationBookingFinalizePage]
})
export class LocationBookingFinalizePageModule {}
