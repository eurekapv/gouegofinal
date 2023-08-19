import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListcoursesPageRoutingModule } from './listcourses-routing.module';

import { ListcoursesPage } from './listcourses.page';

import { FilterPageModule } from './filter/filter.module';

import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { BookcoursePageModule } from '../bookcourse/bookcourse.module';

import { UserLoginPageModule } from 'src/app/pages/pages-profile/authorization-account/user-login/user-login.module';
import { UserVerifyPageModule } from 'src/app/pages/pages-profile/authorization-account/user-verify/user-verify.module';
import { UserLoginPage } from 'src/app/pages/pages-profile/authorization-account/user-login/user-login.page';
import { UserVerifyPage } from 'src/app/pages/pages-profile/authorization-account/user-verify/user-verify.page';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ListcoursesPageRoutingModule,
        BookcoursePageModule,
        FilterPageModule,
        SharedComponentsModule,
        UserLoginPageModule,
        UserVerifyPageModule
    ],
    declarations: [ListcoursesPage],
    exports: [UserLoginPage, UserVerifyPage]
})
export class ListcoursesPageModule {}
