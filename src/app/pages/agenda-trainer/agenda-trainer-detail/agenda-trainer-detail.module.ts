import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaTrainerDetailPageRoutingModule } from './agenda-trainer-detail-routing.module';

import { AgendaTrainerDetailPage } from './agenda-trainer-detail.page';
import { TipoSocieta } from 'src/app/models/valuelist.model';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaTrainerDetailPageRoutingModule
  ],
  declarations: [AgendaTrainerDetailPage]
})
export class AgendaTrainerDetailPageModule {}
