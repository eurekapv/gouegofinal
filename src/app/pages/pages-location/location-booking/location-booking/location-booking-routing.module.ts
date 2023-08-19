import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationBookingPage } from './location-booking.page';

const routes: Routes = [
  {
    path: '',
    component: LocationBookingPage
  },
  {
    path: 'bookingsummary/:bookId',
    loadChildren: () => import('../location-booking-finalize/location-booking-finalize.module').then( m => m.LocationBookingFinalizePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationBookingPageRoutingModule {}
