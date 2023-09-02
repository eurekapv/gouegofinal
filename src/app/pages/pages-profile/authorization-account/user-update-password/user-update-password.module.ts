import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserUpdatePasswordPageRoutingModule } from './user-update-password-routing.module';

import { UserUpdatePassword } from './user-update-password.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserUpdatePasswordPageRoutingModule,
    ReactiveFormsModule,
    PipesModule
  ],
  declarations: [UserUpdatePassword],
  exports:[
    UserUpdatePassword
  ]
})
export class UserUpdatePasswordModule {}
