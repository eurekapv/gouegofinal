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
import { NewLoginPage } from 'src/app/pages/auth/new-login/new-login.page'
import { NewsdetailPage } from 'src/app/pages/newsdetail/newsdetail.page'
import { PswRecoveryPage } from '../auth/psw-recovery/psw-recovery.page'



//questi 3 da rimuovere perchè inutili
import { AdvertisingComponent } from 'src/app/shared/components/advertising/advertising.component'
import { CircularComponent } from 'src/app/shared/components/circular/circular.component'


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
    ]),
    //NewLoginPageModule
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
                 SportScrollComponent,
                 NewLoginPage,
                 NewsdetailPage,
                 //questi 3 da rimuovere perchè inutili
                 AdvertisingComponent,
                 CircularComponent,
                 PswRecoveryPage
                 
                 ],
  exports: [NewsEventiComponent,
            ButtonCardComponent,
            SlottimeComponent, 
            CalendarscrollComponent, 
            FootbookedComponent,
            PlayerNumberComponent,
            SportScrollComponent,
            NewsdetailPage,
            PswRecoveryPage
          ],
  entryComponents: [NewLoginPage, PswRecoveryPage, NewsdetailPage]
  
})
export class HomePageModule {}
