import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryListPageRoutingModule } from './history-list-routing.module';

import { HistoryListPage } from './history-list.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryListPageRoutingModule,
    PipesModule,
    SharedComponentsModule
  ],
  declarations: [HistoryListPage]
})
export class HistoryListPageModule {}
