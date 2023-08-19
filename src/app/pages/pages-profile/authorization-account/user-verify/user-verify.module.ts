import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyPageRoutingModule } from './user-verify-routing.module';

import { UserVerifyPage } from './user-verify.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyPageRoutingModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ],
  declarations: [UserVerifyPage],
  exports: [UserVerifyPage]
})
export class UserVerifyPageModule {}
