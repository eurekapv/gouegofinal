import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { CentriComponent } from '../../shared/components/centri/centri.component'
import { ImpegniComponent } from 'src/app/shared/components/impegni/impegni.component';

import { NewsEventiComponent } from 'src/app/shared/components/news-eventi/news-eventi.component';
import { ButtonCardComponent } from 'src/app/shared/components/button-card/button-card.component';
import { SlottimeComponent } from 'src/app/shared/components/slottime/slottime.component';
import { CalendarscrollComponent } from 'src/app/shared/components/calendarscroll/calendarscroll.component';
import { FootbookedComponent } from 'src/app/shared/components/footbooked/footbooked.component';
import { PlayerNumberComponent } from 'src/app/shared/components/player-number/player-number.component';
import { SportScrollComponent } from 'src/app/shared/components/sport-scroll/sport-scroll.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
                 CalendarscrollComponent,
                 FootbookedComponent,
                 PlayerNumberComponent,
                 SportScrollComponent
                 ],
  exports: [NewsEventiComponent,
            ButtonCardComponent,
            SlottimeComponent, 
            CalendarscrollComponent, 
            FootbookedComponent,
            PlayerNumberComponent,
            SportScrollComponent]
  
})
export class HomePageModule {}
