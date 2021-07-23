import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValutazioneTrainerPageRoutingModule } from './valutazione-trainer-routing.module';

import { ValutazioneTrainerPage } from './valutazione-trainer.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValutazioneTrainerPageRoutingModule,
    PipesModule,
    SharedComponentsModule
  ],
  declarations: [ValutazioneTrainerPage],
  exports: [ValutazioneTrainerPage]
})
export class ValutazioneTrainerPageModule {}
