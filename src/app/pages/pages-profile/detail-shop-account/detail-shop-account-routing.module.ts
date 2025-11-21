import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailShopAccountPage } from './detail-shop-account.page';

const routes: Routes = [
  {
    path: '',
    component: DetailShopAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailShopAccountPageRoutingModule {}
