import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaTrainerPageRoutingModule } from './agenda-trainer-routing.module';

import { AgendaTrainerPage } from './agenda-trainer.page';
import { ItemCalendarioComponent } from 'src/app/shared/components/item-calendario/item-calendario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaTrainerPageRoutingModule
  ],
  declarations: [AgendaTrainerPage, ItemCalendarioComponent]
})
export class AgendaTrainerPageModule {}
