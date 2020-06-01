import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingPage } from './booking.page';

const routes: Routes = [
  {
    path: '',
    component: BookingPage
  },
  {
    path: 'bookingsummary/:bookId',
    loadChildren: () => import('./bookingsummary/bookingsummary.module').then( m => m.BookingsummaryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingPageRoutingModule {}
