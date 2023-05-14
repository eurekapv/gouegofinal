import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationPage } from './location.page';

const routes: Routes = [
  {
    path: '',
    component: LocationPage
  },  
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'listcourses',
    loadChildren: () => import('./course/listcourses/listcourses.module').then( m => m.ListcoursesPageModule)
  },
  {
    path: 'campi-new',
    loadChildren: () => import('./campi-new/campi-new.module').then( m => m.CampiNewPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationPageRoutingModule {}
