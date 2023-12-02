import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMinutiAccountPage } from './list-minuti-account.page';

const routes: Routes = [
  {
    path: '',
    component: ListMinutiAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListMinutiAccountPageRoutingModule {}
