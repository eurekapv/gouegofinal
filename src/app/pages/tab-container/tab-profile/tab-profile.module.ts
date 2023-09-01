import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabProfilePageRoutingModule } from './tab-profile-routing.module';

import { TabProfilePage } from './tab-profile.page';
import { QRCodeModule } from 'angularx-qrcode';
import { EditLoginPageModule } from '../../pages-profile/edit-login/edit-login.module';
import { UserLoginAuthorizationPageModule } from '../../pages-profile/authorization-account/user-login-authorization/user-login-authorization.module';
import { UserRegistrationPageModule } from '../../pages-profile/authorization-account/user-registration/user-registration.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabProfilePageRoutingModule,
    QRCodeModule,    
    EditLoginPageModule,
    UserLoginAuthorizationPageModule,
    UserRegistrationPageModule
  ],
  declarations: [TabProfilePage]
})
export class TabProfilePageModule {}
