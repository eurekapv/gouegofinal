import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StartConfiguration } from './models/start-configuration.model';
import { StartService } from './services/start.service';
import { Subscription } from 'rxjs';
import { register } from 'swiper/element/bundle';

//we need to call Swiper's register function to globally register Swiper's custom elements
register();

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
    private startService: StartService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    // this.splashScreen.hide(); // Nasconde l'immagine statica
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();

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
