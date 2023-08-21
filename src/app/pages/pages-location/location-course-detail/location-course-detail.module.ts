import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationCourseDetailPageRoutingModule } from './location-course-detail-routing.module';

import { LocationCourseDetailPage } from './location-course-detail.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { CourseDetailCalendarPageModule } from './course-detail-calendar/course-detail-calendar.module';

import { UserVerifyPageModule } from 'src/app/pages/pages-profile/authorization-account/user-verify/user-verify.module';
import { UserLoginPageModule } from 'src/app/pages/pages-profile/authorization-account/user-login/user-login.module'
import { BookcoursePageModule } from '../../location/course/bookcourse/bookcourse.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        LocationCourseDetailPageRoutingModule,
        FormsModule,
        PipesModule,
        CourseDetailCalendarPageModule,
        UserLoginPageModule,
        UserVerifyPageModule,
        BookcoursePageModule,
        SharedComponentsModule
    ],
    declarations: [LocationCourseDetailPage]
})
export class LocationCourseDetailPageModule {}
