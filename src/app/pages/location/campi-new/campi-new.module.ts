import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampiNewPageRoutingModule } from './campi-new-routing.module';

import { CampiNewPage } from './campi-new.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampiNewPageRoutingModule,
    PipesModule
  ],
  declarations: [CampiNewPage]
})
export class CampiNewPageModule {}
