import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDataVerificationPage } from './user-data-verification.page';

const routes: Routes = [
  {
    path: '',
    component: UserDataVerificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDataVerificationPageRoutingModule {}
