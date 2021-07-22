import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValutazioneTrainerPageRoutingModule } from './valutazione-trainer-routing.module';

import { ValutazioneTrainerPage } from './valutazione-trainer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValutazioneTrainerPageRoutingModule
  ],
  declarations: [ValutazioneTrainerPage],
  exports: [ValutazioneTrainerPage]
})
export class ValutazioneTrainerPageModule {}
