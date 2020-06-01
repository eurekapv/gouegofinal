import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingsummaryPage } from './bookingsummary.page';

const routes: Routes = [
  {
    path: '',
    component: BookingsummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingsummaryPageRoutingModule {}
