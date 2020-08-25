import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PswRecoveryPage } from './psw-recovery.page';

const routes: Routes = [
  {
    path: '',
    component: PswRecoveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PswRecoveryPageRoutingModule {}
