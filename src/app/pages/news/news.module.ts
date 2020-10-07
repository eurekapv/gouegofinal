import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPageRoutingModule } from './news-routing.module';

import { NewsPage } from './news.page';

import { NewsdetailPage } from 'src/app/pages/newsdetail/newsdetail.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NewsdetailPageModule } from '../newsdetail/newsdetail.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsPageRoutingModule,
    
    NewsdetailPageModule,
    SharedComponentsModule
  ],
  declarations: [NewsPage],
  entryComponents:[NewsdetailPage]

  
})
export class NewsPageModule {}
