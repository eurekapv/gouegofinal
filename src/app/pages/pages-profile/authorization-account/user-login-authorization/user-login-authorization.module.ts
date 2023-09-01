import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserLoginAuthorizationPageRoutingModule } from './user-login-authorization-routing.module';

import { UserLoginAuthorizationPage } from './user-login-authorization.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserLoginAuthorizationPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [UserLoginAuthorizationPage]
})
export class UserLoginAuthorizationPageModule {}
