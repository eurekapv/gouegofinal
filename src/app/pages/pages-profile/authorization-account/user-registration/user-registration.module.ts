import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserRegistrationPageRoutingModule } from './user-registration-routing.module';

import { UserRegistrationPage } from './user-registration.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserRegistrationPageRoutingModule,
    ReactiveFormsModule,
    PipesModule
  ],
  declarations: [UserRegistrationPage]
})
export class UserRegistrationPageModule {}
