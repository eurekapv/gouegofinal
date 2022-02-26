import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListcoursesPageRoutingModule } from './listcourses-routing.module';

import { ListcoursesPage } from './listcourses.page';
import { FilterPage } from './filter/filter.page';
import { FilterPageModule } from './filter/filter.module';

import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { BookcoursePageModule } from '../bookcourse/bookcourse.module';
import { BookcoursePage } from '../bookcourse/bookcourse.page';
import { NewLoginPageModule } from 'src/app/pages/auth/new-login/new-login.module';
import { VerifyPageModule } from 'src/app/pages/auth/verify/verify.module';
import { NewLoginPage } from 'src/app/pages/auth/new-login/new-login.page';
import { VerifyPage } from 'src/app/pages/auth/verify/verify.page';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ListcoursesPageRoutingModule,
        BookcoursePageModule,
        FilterPageModule,
        SharedComponentsModule,
        NewLoginPageModule,
        VerifyPageModule
    ],
    declarations: [ListcoursesPage],
    exports: [NewLoginPage, VerifyPage]
})
export class ListcoursesPageModule {}
