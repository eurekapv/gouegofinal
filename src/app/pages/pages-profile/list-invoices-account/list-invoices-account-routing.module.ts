import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListInvoicesAccountPage } from './list-invoices-account.page';

const routes: Routes = [
  {
    path: '',
    component: ListInvoicesAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoicesPageRoutingModule {}
