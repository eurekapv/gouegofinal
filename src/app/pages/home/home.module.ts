import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { CentriComponent } from '../../shared/components/centri/centri.component'
import { ImpegniComponent } from 'src/app/shared/components/impegni/impegni.component';

import { NewsEventiComponent } from 'src/app/shared/components/news-eventi/news-eventi.component';
import { ButtonCardComponent } from 'src/app/shared/components/button-card/button-card.component';
import { SlottimeComponent } from 'src/app/shared/components/slottime/slottime.component';
import { CalendarscrollComponent } from 'src/app/shared/components/calendarscroll/calendarscroll.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, 
                 CentriComponent, 
                 ImpegniComponent, 
                 NewsEventiComponent,
                 ButtonCardComponent,
                 SlottimeComponent,
                 CalendarscrollComponent
                 ],
  exports: [NewsEventiComponent, ButtonCardComponent, SlottimeComponent, CalendarscrollComponent]
  
})
export class HomePageModule {}
