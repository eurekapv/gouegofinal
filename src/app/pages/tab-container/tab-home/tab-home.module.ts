import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabHomePage } from './tab-home.page';

import { UserLoginPageModule } from '../../pages-profile/authorization-account/user-login/user-login.module';
import { NewsdetailPageModule } from '../../pages-eventi/news-detail/news-detail.module'
import { TabHomePageRoutingModule } from './tab-home-routing.module'
import { UserPasswordRecoveryPageModule } from '../../pages-profile/authorization-account/user-password-recovery/user-password-recovery.module';
import { SharedComponentsModule } from '../../../shared/components/shared-components.module';
import { AllegatilistPageModule } from '../../history/historycourse/allegatilist/allegatilist.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        TabHomePageRoutingModule,
        SharedComponentsModule,
        NewsdetailPageModule,
        UserLoginPageModule,
        UserPasswordRecoveryPageModule,
        AllegatilistPageModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA], 
    declarations: [
        TabHomePage,
    ],
    exports: []
})
export class TabHomePageModule {}
