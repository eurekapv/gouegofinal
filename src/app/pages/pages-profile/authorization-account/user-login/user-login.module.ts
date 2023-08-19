import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewLoginPageRoutingModule } from './user-login-routing.module';
import { UserLoginPage } from './user-login.page'
import { UserPasswordRecoveryPageModule } from '../user-password-recovery/user-password-recovery.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NewLoginPageRoutingModule,
        UserPasswordRecoveryPageModule,
        ReactiveFormsModule,
    ],
    declarations: [UserLoginPage],
    exports: [UserLoginPage]
})
export class UserLoginPageModule {}
