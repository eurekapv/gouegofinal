import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayActiveCartPageRoutingModule } from './display-active-cart-routing.module';

import { DisplayActiveCartPage } from './display-active-cart.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { UserDataVerificationPageModule } from '../../pages-profile/authorization-account/user-data-verification/user-data-verification.module';
import { CartCheckoutPageModule } from '../cart-checkout/cart-checkout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayActiveCartPageRoutingModule,
    PipesModule,
    SharedComponentsModule,
    UserDataVerificationPageModule,
    CartCheckoutPageModule
  ],
  declarations: [DisplayActiveCartPage]
})
export class DisplayActiveCartPageModule {}
