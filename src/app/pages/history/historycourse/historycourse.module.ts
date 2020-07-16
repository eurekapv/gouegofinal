import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorycoursePageRoutingModule } from './historycourse-routing.module';

import { HistorycoursePage } from './historycourse.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorycoursePageRoutingModule,
    PipesModule
  ],
  declarations: [HistorycoursePage]
})
export class HistorycoursePageModule {}
