import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyCourseSubscribePageRoutingModule } from './daily-course-subscribe-routing.module';

import { DailyCourseSubscribePage } from './daily-course-subscribe.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyCourseSubscribePageRoutingModule,
    PipesModule,
    SharedComponentsModule
  ],
  declarations: [DailyCourseSubscribePage]
})
export class DailyCourseSubscribePageModule {}
