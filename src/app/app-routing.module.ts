import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./pages/appstart-home/appstart-home.module').then( m => m.AppstartHomePageModule)
  },   {
    path: 'user-registration',
    loadChildren: () => import('./pages/pages-profile/authorization-account/user-registration/user-registration.module').then( m => m.UserRegistrationPageModule)
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
