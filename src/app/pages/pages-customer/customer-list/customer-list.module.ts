import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerListPageRoutingModule } from './customer-list-routing.module';

import { CustomerListPage } from './customer-list.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerListPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [CustomerListPage]
})
export class CustomerListPageModule {}
