import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InvoicesPageRoutingModule } from './list-invoices-account-routing.module';
import { ListInvoicesAccountPage } from './list-invoices-account.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoicesPageRoutingModule,
    PipesModule,
    SharedComponentsModule
  ],
  declarations: [ListInvoicesAccountPage],
  providers: [],

})
export class ListInvoicesAccountPageModule {}
