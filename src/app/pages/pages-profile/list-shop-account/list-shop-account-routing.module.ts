import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListShopAccountPage } from './list-shop-account.page';

const routes: Routes = [
  {
    path: '',
    component: ListShopAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListShopAccountPageRoutingModule {}
