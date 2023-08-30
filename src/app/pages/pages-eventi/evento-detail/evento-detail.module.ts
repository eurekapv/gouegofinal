import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventoDetailPageRoutingModule } from './evento-detail-routing.module';

import { EventoDetailPage } from './evento-detail.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventoDetailPageRoutingModule,
    PipesModule
  ],
  declarations: [EventoDetailPage]
})
export class EventoDetailPageModule {}
