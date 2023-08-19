import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursePageRoutingModule } from './course-routing.module';

import { CoursePage } from './course.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { CalendarPageModule } from './calendar/calendar.module';

import { UserVerifyPageModule } from 'src/app/pages/pages-profile/authorization-account/user-verify/user-verify.module';
import { UserLoginPageModule } from 'src/app/pages/pages-profile/authorization-account/user-login/user-login.module'
import { BookcoursePageModule } from '../bookcourse/bookcourse.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        CoursePageRoutingModule,
        FormsModule,
        PipesModule,
        CalendarPageModule,
        UserLoginPageModule,
        UserVerifyPageModule,
        BookcoursePageModule,
        SharedComponentsModule
    ],
    declarations: [CoursePage]
})
export class CoursePageModule {}
