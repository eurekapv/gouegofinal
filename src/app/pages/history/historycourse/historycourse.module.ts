import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorycoursePageRoutingModule } from './historycourse-routing.module';

import { HistorycoursePage } from './historycourse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorycoursePageRoutingModule
  ],
  declarations: [HistorycoursePage]
})
export class HistorycoursePageModule {}
