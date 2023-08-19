import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PswRecoveryPageRoutingModule } from './user-password-recovery-routing.module';

import { UserPasswordRecoveryPage } from './user-password-recovery.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PswRecoveryPageRoutingModule,
    
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [UserPasswordRecoveryPage],
  exports: [UserPasswordRecoveryPage]
})
export class UserPasswordRecoveryPageModule {}
