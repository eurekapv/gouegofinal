import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationCourseDetailPageRoutingModule } from './location-course-detail-routing.module';

import { LocationCourseDetailPage } from './location-course-detail.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { CourseDetailCalendarPageModule } from './course-detail-calendar/course-detail-calendar.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { LocationCourseSubscribePageModule } from '../location-course-subscribe/location-course-subscribe.module';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        LocationCourseDetailPageRoutingModule,
        FormsModule,
        PipesModule,
        CourseDetailCalendarPageModule,
        LocationCourseSubscribePageModule,
        SharedComponentsModule
    ],
    declarations: [LocationCourseDetailPage]
})
export class LocationCourseDetailPageModule {}
