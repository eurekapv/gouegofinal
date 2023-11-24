import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabShopPage } from './tab-shop.page';

const routes: Routes = [
  {
    path: '',
    component: TabShopPage
  },
  {
    path: 'display-product/:id',
    loadChildren: () => import('../../pages-shop/display-product/display-product.module').then( m => m.DisplayProductPageModule)
  },
  {
    path: 'display-active-cart',
    loadChildren: () => import('../../pages-shop/display-active-cart/display-active-cart.module').then( m => m.DisplayActiveCartPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabShopPageRoutingModule {}
