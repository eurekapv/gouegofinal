import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingsummaryPageRoutingModule } from './bookingsummary-routing.module';

import { BookingsummaryPage } from './bookingsummary.page';
import { HomePageModule } from 'src/app/pages/home/home.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingsummaryPageRoutingModule,
    HomePageModule
  ],
  declarations: [BookingsummaryPage]
})
export class BookingsummaryPageModule {}
