import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsdetailPageRoutingModule } from './news-detail-routing.module';

import { NewsDetailPage } from './news-detail.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsdetailPageRoutingModule
  ],
  declarations: [NewsDetailPage],
  exports: [NewsDetailPage]
})
export class NewsdetailPageModule {}
