import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportLevelsAccountPage } from './sport-levels-account.page';

const routes: Routes = [
  {
    path: '',
    component: SportLevelsAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportlevelsPageRoutingModule {}
