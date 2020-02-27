import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditLoginPageRoutingModule } from './edit-login-routing.module';

import { EditLoginPage } from './edit-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditLoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditLoginPage]
})
export class EditLoginPageModule {}
