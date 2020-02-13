import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmstestPage } from './smstest.page';

const routes: Routes = [
  {
    path: '',
    component: SmstestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmstestPageRoutingModule {}
