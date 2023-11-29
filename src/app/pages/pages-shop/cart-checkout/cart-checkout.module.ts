import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartCheckoutPageRoutingModule } from './cart-checkout-routing.module';

import { CartCheckoutPage } from './cart-checkout.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartCheckoutPageRoutingModule,
    SharedComponentsModule,
    PipesModule
  ],
  declarations: [CartCheckoutPage]
})
export class CartCheckoutPageModule {}
