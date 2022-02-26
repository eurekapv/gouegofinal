import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursePageRoutingModule } from './course-routing.module';

import { CoursePage } from './course.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { CalendarPageModule } from './calendar/calendar.module';
import { CalendarPage } from './calendar/calendar.page';
import { VerifyPageModule } from 'src/app/pages/auth/verify/verify.module';
import { VerifyPage } from 'src/app/pages/auth/verify/verify.page';
import { NewLoginPage } from 'src/app/pages/auth/new-login/new-login.page'
import { NewLoginPageModule } from 'src/app/pages/auth/new-login/new-login.module'
import { BookcoursePageModule } from '../bookcourse/bookcourse.module';
import { BookcoursePage } from '../bookcourse/bookcourse.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        CoursePageRoutingModule,
        FormsModule,
        PipesModule,
        CalendarPageModule,
        NewLoginPageModule,
        VerifyPageModule,
        BookcoursePageModule,
        SharedComponentsModule
    ],
    declarations: [CoursePage]
})
export class CoursePageModule {}
