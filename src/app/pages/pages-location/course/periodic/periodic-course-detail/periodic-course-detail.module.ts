import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeriodicCourseDetailPageRoutingModule } from './periodic-course-detail-routing.module';

import { PeriodicCourseDetailPage } from './periodic-course-detail.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { PeriodicCourseDetailCalendarPageModule } from '../periodic-course-detail-calendar/periodic-course-detail-calendar.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { PeriodicCourseSubscribePageModule } from '../periodic-course-subscribe/periodic-course-subscribe.module';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        PeriodicCourseDetailPageRoutingModule,
        FormsModule,
        PipesModule,
        PeriodicCourseDetailCalendarPageModule,
        PeriodicCourseSubscribePageModule,
        SharedComponentsModule
    ],
    declarations: [PeriodicCourseDetailPage]
})
export class PeriodicCourseDetailPageModule {}
