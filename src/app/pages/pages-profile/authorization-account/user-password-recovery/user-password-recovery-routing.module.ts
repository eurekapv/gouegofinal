import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPasswordRecoveryPage } from './user-password-recovery.page';

const routes: Routes = [
  {
    path: '',
    component: UserPasswordRecoveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PswRecoveryPageRoutingModule {}
