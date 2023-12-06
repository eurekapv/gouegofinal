import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyCourseListPageRoutingModule } from './daily-course-list-routing.module';

import { DailyCourseListPage } from './daily-course-list.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyCourseListPageRoutingModule,
    PipesModule,
    SharedComponentsModule
  ],
  declarations: [DailyCourseListPage]
})
export class DailyCourseListPageModule {}
