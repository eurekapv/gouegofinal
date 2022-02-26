import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookcoursePageRoutingModule } from './bookcourse-routing.module';

import { BookcoursePage } from './bookcourse.page';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { PaymentPage } from '../../../payment/payment.page';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { PaymentChooseComponent } from 'src/app/shared/components/payment-choose/payment-choose.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BookcoursePageRoutingModule,
        PipesModule,
        SharedComponentsModule
    ],
    declarations: [BookcoursePage],
    exports: [BookcoursePage]
})
export class BookcoursePageModule {}
