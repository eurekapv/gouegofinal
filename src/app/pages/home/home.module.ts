import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CentriComponent } from '../../shared/components/centri/centri.component'


import { HomePage } from './home.page';
import { ImpegniComponent } from 'src/app/shared/components/impegni/impegni.component';

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
  declarations: [HomePage, CentriComponent, ImpegniComponent]
})
export class HomePageModule {}
