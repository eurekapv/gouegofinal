import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorylistPageRoutingModule } from './historylist-routing.module';

import { HistorylistPage } from './historylist.page';

import { PipesModule } from 'src/app/shared/pipes/pipes.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorylistPageRoutingModule,
    
    PipesModule
  ],
  declarations: [HistorylistPage]
})
export class HistorylistPageModule {}
