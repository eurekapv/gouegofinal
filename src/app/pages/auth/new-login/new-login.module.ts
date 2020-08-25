import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewLoginPageRoutingModule } from './new-login-routing.module';

import { HomePageModule } from 'src/app/pages/home/home.module'
import { NewLoginPage } from './new-login.page'
import { PswRecoveryPage } from '../psw-recovery/psw-recovery.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewLoginPageRoutingModule,
    HomePageModule
  ],
  declarations: [],
  exports: [],
  entryComponents: [PswRecoveryPage]
})
export class NewLoginPageModule {}
