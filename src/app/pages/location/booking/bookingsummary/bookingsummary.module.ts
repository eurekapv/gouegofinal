import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingsummaryPageRoutingModule } from './bookingsummary-routing.module';

import { BookingsummaryPage } from './bookingsummary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingsummaryPageRoutingModule
  ],
  declarations: [BookingsummaryPage]
})
export class BookingsummaryPageModule {}
