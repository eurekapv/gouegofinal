import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationDetailPage } from './location-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LocationDetailPage
  },  
  // {
  //   path: 'booking',
  //   loadChildren: () => import('../location-booking/location-booking/location-booking.module').then( m => m.LocationBookingPageModule)
  // },
  // {
  //   path: 'listcourses',
  //   loadChildren: () => import('../../location/course/listcourses/listcourses.module').then( m => m.ListcoursesPageModule)
  // },
  // {
  //   path: 'campi-new',
  //   loadChildren: () => import('../location-campi-list/location-campi-list.module').then( m => m.LocationCampiListPageModule)
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationDetailPageRoutingModule {}
