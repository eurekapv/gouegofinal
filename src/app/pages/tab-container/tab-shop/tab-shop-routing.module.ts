import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabShopPage } from './tab-shop.page';

const routes: Routes = [
  {
    path: '',
    component: TabShopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabShopPageRoutingModule {}
