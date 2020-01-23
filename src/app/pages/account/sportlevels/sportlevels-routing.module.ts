import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportlevelsPage } from './sportlevels.page';

const routes: Routes = [
  {
    path: '',
    component: SportlevelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportlevelsPageRoutingModule {}
