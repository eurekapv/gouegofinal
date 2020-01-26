import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { StartConfiguration } from './models/start-configuration.model';
import { StartService } from './services/start.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


  showSplash = true;
  startConfig: StartConfiguration;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private startService: StartService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide(); // Nasconde l'immagine statica

      //Mi Sottoscrivo per ricevere la configurazione iniziale
       this.startService.startConfig.subscribe(element => {

                      this.startConfig = element;
                      
                      // Solo se mi dicono che l'ambiente è pronto 
                      if (element.ready) {
                        console.log('Finito lo Splash');
                        this.showSplash = false;
                      }
      });

      // Richiedo l'autorizzazione
      this.startService.requestStartAuthorization();

    });
  }
}
