import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampiPageRoutingModule } from './campi-routing.module';

import { CampiPage } from './campi.page';
import { PipesModule } from '../../../shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampiPageRoutingModule,
    PipesModule
  ],
  declarations: [CampiPage],
  exports:[CampiPage]
})
export class CampiPageModule {}
