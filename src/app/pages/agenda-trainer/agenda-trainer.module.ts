import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaTrainerPageRoutingModule } from './agenda-trainer-routing.module';

import { AgendaTrainerPage } from './agenda-trainer.page';
import { ItemCalendarioComponent } from 'src/app/shared/components/item-calendario/item-calendario.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaTrainerPageRoutingModule,
    SharedComponentsModule,
    PipesModule
  ],
  declarations: [AgendaTrainerPage]
})
export class AgendaTrainerPageModule {}
