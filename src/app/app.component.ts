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
       this.listenStartConfig = this.startService.startConfig
                      .subscribe(element => {
                          // Solo se mi dicono che l'ambiente è pronto
                          if (element.ready) {
                                //Memorizzo per la visualizzazione del Menu
                                this.startConfig = element;
                                //Termino lo Splash
                                this.showSplash = false;

                                //Tolgo la sottoscrizione
                                this.listenStartConfig.unsubscribe();
                          }
                        });

      // Richiedo l'autorizzazione
      this.startService.requestStartAuthorization();

    });
  }
}
