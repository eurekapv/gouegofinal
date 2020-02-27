import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
            FormsModule,
            HttpClientModule,
            IonicModule.forRoot(), 
            IonicStorageModule.forRoot(),
            AppRoutingModule
            
            ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/**
 * AGGIORNATI I MODULI A IONIC 5
 * 
 * Usare i due comandi:
 * 
 * npm update
 * 
 * npm install @ionic/angular@latest @ionic/angular-toolkit@latest --save
 * 
 * e poi ho installato lo Storage con
 * 
 * npm install --save @ionic/storage
 */
