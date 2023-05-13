import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgeAccountPage } from './badge-account.page';

const routes: Routes = [
  {
    path: '',
    component: BadgeAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgeAccountPageRoutingModule {}
