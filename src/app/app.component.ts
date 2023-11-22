import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StartConfiguration } from './models/start-configuration.model';
import { StartService } from './services/start.service';
import { Subscription } from 'rxjs';
import { register } from 'swiper/element/bundle';
import { StateApplication } from './models/zsupport/valuelist.model';
import { environment } from 'src/environments/environment';

//we need to call Swiper's register function to globally register Swiper's custom elements
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  //Stato Attuale dell'Applicazione
  actaulStateApplication: StateApplication = StateApplication.onStarting;
  //Per usare enum nell HTML
  stateApplication: typeof StateApplication = StateApplication;
  errorMessage: string = '';
  switchErrorMessage: boolean = false; //True Show / False Hide
  versioneApp: string = environment.version;

  startConfig: StartConfiguration;
  listenStartConfig: Subscription;
  listenAppReady: Subscription;

  constructor(
    private platform: Platform,
    private startService: StartService
  ) {
    this.initializeApp();  
  }

  /**
   * Ritorna la Caption da mostrare nella card di errore
   */
  get captionCardError(): string {
    let caption = '';
    caption = 'Gouego';

    if (this.startConfig) {
      if (this.startConfig.companyName && this.startConfig.companyName.length != 0) {
        caption = this.startConfig.companyName;
      }
    }

    return caption;
  }

  initializeApp() {
    
    //Piattaforma Pronta
    this.platform.ready().then(() => {

      //Mi Sottoscrivo per ricevere la configurazione
      this.listenStartConfig = this.startService.startConfig
                                        .subscribe(element => {
                                            //Non so cosa mi serva
                                              this.startConfig = element;
                                          });
      this.onStartApplication();

      
    });
  }
  
  /**
   * Innesca le procedure per inizializzare l'applicazione
   */
  onStartApplication(): void {

    //Eseguo le operazioni per la partenza
    this.startService.startApplication()
                     .then(() => {
                        //L'applicazione è partita
                        this.actaulStateApplication = StateApplication.started;
                        //Eseguo altre operazioni 
                        this.startService.onAfterStartApplication();
                     })
                     .catch(error => {
                        if (typeof error == 'string') {
                          this.errorMessage = error;
                        }
                        else if (error instanceof Error) {
                          this.errorMessage = error.message;
                        }
                        else {
                          this.errorMessage = '';
                        }
                        //Purtroppo sono in errore
                        this.actaulStateApplication = StateApplication.onError;
                     })
  }

  //#region GESTIONE ERRORI
  onClickSwitchCaptionError(): void {
    this.switchErrorMessage = !this.switchErrorMessage;
  }
  //#endregion
}
