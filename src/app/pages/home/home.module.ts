import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { CentriComponent } from '../../shared/components/centri/centri.component'
import { ImpegniComponent } from 'src/app/shared/components/impegni/impegni.component';
import { CircularComponent } from 'src/app/shared/components/circular/circular.component';
import { NewsEventiComponent } from 'src/app/shared/components/news-eventi/news-eventi.component';


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
                 CircularComponent],
  exports: [NewsEventiComponent]
  
})
export class HomePageModule {}
