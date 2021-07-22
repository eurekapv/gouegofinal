import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaTrainerPageRoutingModule } from './agenda-trainer-routing.module';

import { AgendaTrainerPage } from './agenda-trainer.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { ValutazioneTrainerPageModule } from './valutazione-trainer/valutazione-trainer.module';
import { ValutazioneTrainerPage } from './valutazione-trainer/valutazione-trainer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaTrainerPageRoutingModule,
    SharedComponentsModule,
    PipesModule,
    ValutazioneTrainerPageModule
  ],
  declarations: [AgendaTrainerPage],
  exports: [ValutazioneTrainerPage]

})
export class AgendaTrainerPageModule {}
