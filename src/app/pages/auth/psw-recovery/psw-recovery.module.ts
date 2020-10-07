import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PswRecoveryPageRoutingModule } from './psw-recovery-routing.module';

import { PswRecoveryPage } from './psw-recovery.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PswRecoveryPageRoutingModule,
    
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [PswRecoveryPage],
  exports: [PswRecoveryPage]
})
export class PswRecoveryPageModule {}
