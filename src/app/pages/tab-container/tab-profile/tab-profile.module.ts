import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabProfilePageRoutingModule } from './tab-profile-routing.module';

import { TabProfilePage } from './tab-profile.page';
import { QRCodeModule } from 'angularx-qrcode';
import { UserUpdatePasswordModule } from '../../pages-profile/authorization-account/user-update-password/user-update-password.module';
import { UserLoginAuthorizationPageModule } from '../../pages-profile/authorization-account/user-login-authorization/user-login-authorization.module';
import { UserRegistrationPageModule } from '../../pages-profile/authorization-account/user-registration/user-registration.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabProfilePageRoutingModule,
    QRCodeModule,    
    UserUpdatePasswordModule,
    UserLoginAuthorizationPageModule,
    UserRegistrationPageModule
  ],
  declarations: [TabProfilePage]
})
export class TabProfilePageModule {}
