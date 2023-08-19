import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditLoginPage } from './edit-login.page';

const routes: Routes = [
  {
    path: '',
    component: EditLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditLoginPageRoutingModule {}
