import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { StartConfiguration } from './models/start-configuration.model';
import { StartService } from './services/start.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


  showSplash = true;
  startConfig: StartConfiguration;
  listenStartConfig: Subscription;
  listenAppReady: Subscription;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private startService: StartService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.splashScreen.hide(); // Nasconde l'immagine statica
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();

      this.listenAppReady = this.startService.appReady
                                  .subscribe(valueReady => {
                                    if (valueReady) {
                                      //Ambiente pronto
                                      //Termino lo Splash
                                      this.showSplash = false;

                                      //Tolgo la sottoscrizione
                                      if (this.listenAppReady) {
                                        this.listenAppReady.unsubscribe();
                                      }
                                    }
                                  });

      //Mi Sottoscrivo per ricevere la configurazione
       this.listenStartConfig = this.startService.startConfig
                      .subscribe(element => {
                            //Memorizzo per la visualizzazione del Menu
                            this.startConfig = element;
                        });

      // Richiedo l'autorizzazione
      //this.startService.requestStartAuthorization();
      this.startService.settingStartStepOne();

    });
  }
}
