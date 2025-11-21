import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListShopAccountPageRoutingModule } from './list-shop-account-routing.module';

import { ListShopAccountPage } from './list-shop-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListShopAccountPageRoutingModule
  ],
  declarations: [ListShopAccountPage]
})
export class ListShopAccountPageModule {}
