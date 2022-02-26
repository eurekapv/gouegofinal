import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VerifyPage } from 'src/app/pages/auth/verify/verify.page'
import { VerifyPageModule } from 'src/app/pages/auth/verify/verify.module'


import { IonicModule } from '@ionic/angular';

import { TestPageRoutingModule } from './test-routing.module';

import { TestPage } from './test.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TestPageRoutingModule,
        VerifyPageModule
    ],
    declarations: [TestPage]
})
export class TestPageModule {}
