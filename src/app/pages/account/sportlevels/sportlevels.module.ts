import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportlevelsPageRoutingModule } from './sportlevels-routing.module';

import { SportlevelsPage } from './sportlevels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportlevelsPageRoutingModule
  ],
  declarations: [SportlevelsPage]
})
export class SportlevelsPageModule {}
