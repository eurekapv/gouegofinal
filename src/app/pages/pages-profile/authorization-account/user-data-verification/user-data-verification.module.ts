import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDataVerificationPageRoutingModule } from './user-data-verification-routing.module';

import { UserDataVerificationPage } from './user-data-verification.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDataVerificationPageRoutingModule,
    ReactiveFormsModule,
    PipesModule,
    SharedComponentsModule
  ],
  declarations: [UserDataVerificationPage]
})
export class UserDataVerificationPageModule {}
