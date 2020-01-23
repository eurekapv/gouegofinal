import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorylistPageRoutingModule } from './historylist-routing.module';

import { HistorylistPage } from './historylist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorylistPageRoutingModule
  ],
  declarations: [HistorylistPage]
})
export class HistorylistPageModule {}
