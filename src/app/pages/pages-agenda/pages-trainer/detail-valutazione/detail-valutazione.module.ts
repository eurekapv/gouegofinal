import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailValutazionePageRoutingModule } from './detail-valutazione-routing.module';

import { DetailValutazionePage } from './detail-valutazione.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailValutazionePageRoutingModule,
    PipesModule,
    SharedComponentsModule
  ],
  declarations: [DetailValutazionePage]
})
export class DetailValutazionePageModule {}
