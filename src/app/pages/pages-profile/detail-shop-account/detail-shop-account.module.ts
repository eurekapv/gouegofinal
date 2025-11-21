import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailShopAccountPageRoutingModule } from './detail-shop-account-routing.module';

import { DetailShopAccountPage } from './detail-shop-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailShopAccountPageRoutingModule
  ],
  declarations: [DetailShopAccountPage]
})
export class DetailShopAccountPageModule {}
