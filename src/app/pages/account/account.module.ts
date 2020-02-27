import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPageRoutingModule } from './account-routing.module';

import { AccountPage } from './account.page';
import { EditLoginPage } from './edit-login/edit-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule,
   ReactiveFormsModule
  ],
  declarations: [AccountPage, EditLoginPage],
  entryComponents: [EditLoginPage]
  
})
export class AccountPageModule {}
