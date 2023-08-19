import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabHomePage } from './tab-home.page';

const routes: Routes = [
  {
    path: '',
    component: TabHomePage
  },
  {
    path: 'location/detail/:locationId',
    loadChildren: () => import('../../pages-location/location-detail/location-detail.module').then( m => m.LocationDetailPageModule)
  },
  {
    path: 'location/booking/:locationId',
    loadChildren: () => import('../../pages-location/location-booking/location-booking/location-booking.module').then( m => m.LocationBookingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabHomePageRoutingModule {}
