import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HomePage } from './home.page';

import { NewLoginPage } from 'src/app/pages/auth/new-login/new-login.page'
import { NewsdetailPage } from 'src/app/pages/newsdetail/newsdetail.page'
import { PswRecoveryPage } from '../auth/psw-recovery/psw-recovery.page'

import { NewLoginPageModule } from '../auth/new-login/new-login.module';
import { NewsdetailPageModule } from '../newsdetail/newsdetail.module'
import { HomePageRoutingModule } from './home-routing.module'
import { PswRecoveryPageModule } from '../auth/psw-recovery/psw-recovery.module';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';


@NgModule({
  imports: [

    CommonModule,
    IonicModule,
    HomePageRoutingModule,
    
    NewsdetailPageModule,
    NewLoginPageModule,
    PswRecoveryPageModule,
    SharedComponentsModule
    
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: HomePage
    //   }
    // ]),

  ],
  declarations: [
    HomePage,   
  ],
  exports: [
  ],
  entryComponents: [
    NewLoginPage,
    PswRecoveryPage,
    NewsdetailPage,
  ]
})
export class HomePageModule {}
