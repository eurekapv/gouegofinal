import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPageRoutingModule } from './news-routing.module';

import { NewsPage } from './news.page';
import { HomePageModule } from '../home/home.module';

import { NewsdetailPage } from 'src/app/pages/newsdetail/newsdetail.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsPageRoutingModule,
    HomePageModule,
  ],
  declarations: [NewsPage],
  entryComponents:[NewsdetailPage]

  
})
export class NewsPageModule {}
