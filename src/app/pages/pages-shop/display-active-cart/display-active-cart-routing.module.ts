import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayActiveCartPage } from './display-active-cart.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayActiveCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayActiveCartPageRoutingModule {}
