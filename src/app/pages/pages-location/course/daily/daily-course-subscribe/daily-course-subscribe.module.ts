import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyCourseSubscribePageRoutingModule } from './daily-course-subscribe-routing.module';

import { DailyCourseSubscribePage } from './daily-course-subscribe.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { UserLoginAuthorizationPageModule } from 'src/app/pages/pages-profile/authorization-account/user-login-authorization/user-login-authorization.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyCourseSubscribePageRoutingModule,
    PipesModule,
    SharedComponentsModule,
    UserLoginAuthorizationPageModule
  ],
  declarations: [DailyCourseSubscribePage]
})
export class DailyCourseSubscribePageModule {}
