import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LocationCourseListPageRoutingModule } from './location-course-list-routing.module';
import { LocationCourseListPage } from './location-course-list.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { UserLoginPageModule } from 'src/app/pages/pages-profile/authorization-account/user-login/user-login.module';
import { UserVerifyPageModule } from 'src/app/pages/pages-profile/authorization-account/user-verify/user-verify.module';
import { UserLoginPage } from 'src/app/pages/pages-profile/authorization-account/user-login/user-login.page';
import { UserVerifyPage } from 'src/app/pages/pages-profile/authorization-account/user-verify/user-verify.page';
import { CourseListFilterPageModule } from './course-list-filter/course-list-filter.module';
import { LocationCourseSubscribePageModule } from '../location-course-subscribe/location-course-subscribe.module';





@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LocationCourseListPageRoutingModule,
        LocationCourseSubscribePageModule,
        CourseListFilterPageModule,
        SharedComponentsModule,
        UserLoginPageModule,
        UserVerifyPageModule
    ],
    declarations: [LocationCourseListPage],
    exports: [UserLoginPage, UserVerifyPage]
})
export class LocationCourseListPageModule {}
