import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewLoginPageRoutingModule } from './new-login-routing.module';

import { NewLoginPage } from './new-login.page'
import { PswRecoveryPage } from '../psw-recovery/psw-recovery.page'
import { PswRecoveryPageModule } from '../psw-recovery/psw-recovery.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NewLoginPageRoutingModule,
        PswRecoveryPageModule,
        ReactiveFormsModule,
    ],
    declarations: [NewLoginPage],
    exports: [NewLoginPage]
})
export class NewLoginPageModule {}
