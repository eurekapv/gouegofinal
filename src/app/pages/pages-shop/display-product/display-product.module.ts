import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayProductPageRoutingModule } from './display-product-routing.module';
import { DisplayProductPage } from './display-product.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { ImageModalPageModule } from '../../image-modal/image-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayProductPageRoutingModule,
    SharedComponentsModule,
    PipesModule,
    ImageModalPageModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [DisplayProductPage]
})
export class DisplayProductPageModule {}
