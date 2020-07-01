import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewLoginPageRoutingModule } from './new-login-routing.module';


import { NewLoginPage } from './new-login.page';
import { HomePageModule } from 'src/app/pages/home/home.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewLoginPageRoutingModule,
    HomePageModule
  ],
  declarations: [NewLoginPage]
})
export class NewLoginPageModule {}
