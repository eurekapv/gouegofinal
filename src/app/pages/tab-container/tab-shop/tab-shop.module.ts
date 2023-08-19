import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabShopPageRoutingModule } from './tab-shop-routing.module';

import { TabShopPage } from './tab-shop.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabShopPageRoutingModule,
    SharedComponentsModule,
  ],
  declarations: [TabShopPage]
})
export class TabShopPageModule {}
