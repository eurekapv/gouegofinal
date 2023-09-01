import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginAuthorizationPage } from './user-login-authorization.page';

const routes: Routes = [
  {
    path: '',
    component: UserLoginAuthorizationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserLoginAuthorizationPageRoutingModule {}
