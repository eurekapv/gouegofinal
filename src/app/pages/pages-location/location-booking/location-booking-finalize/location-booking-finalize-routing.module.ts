import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationBookingFinalizePage } from './location-booking-finalize.page';

const routes: Routes = [
  {
    path: '',
    component: LocationBookingFinalizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationBookingFinalizePageRoutingModule {}
