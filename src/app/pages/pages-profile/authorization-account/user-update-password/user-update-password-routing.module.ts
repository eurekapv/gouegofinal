import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserUpdatePassword } from './user-update-password.page';

const routes: Routes = [
  {
    path: '',
    component: UserUpdatePassword
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserUpdatePasswordPageRoutingModule {}
