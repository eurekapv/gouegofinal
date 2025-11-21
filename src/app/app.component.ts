import { Component } from '@angular/core';
import { Platform, ModalController } from '@ionic/angular';
import { StartConfiguration } from './models/start-configuration.model';
import { StartService } from './services/start.service';
import { Subscription } from 'rxjs';
import { register } from 'swiper/element/bundle';
import { StateApplication } from './models/zsupport/valuelist.model';
import { environment } from 'src/environments/environment';
import { OnboardingService } from './services/onboarding/onboarding.service';
import { WelcomeModalComponent } from './shared/components/welcome-modal/welcome-modal.component';


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
    private startService: StartService,
    private modalController: ModalController,
    private onboardingService: OnboardingService
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
                     .then(async () => {

                        //L'applicazione è partita
                        this.actaulStateApplication = StateApplication.started;
                        //Eseguo altre operazioni
                        this.startService.onAfterStartApplication();

                        //Mostro la welcome modal se è la prima volta
                        await this.showWelcomeModalIfNeeded();
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

  /**
   * Mostra la welcome modal se è la prima volta che l'utente apre l'app dopo il redesign
   */
  async showWelcomeModalIfNeeded(): Promise<void> {
    try {
      const hasSeenRedesign = this.onboardingService.hasSeenRedesign();

      if (!hasSeenRedesign) {
        const modal = await this.modalController.create({
          component: WelcomeModalComponent,
          cssClass: 'welcome-modal-full',
          backdropDismiss: false
        });

        await modal.present();
        await modal.onDidDismiss();
        this.onboardingService.markRedesignAsSeen();
      }
    } catch (error) {
      console.error('Errore nella welcome modal:', error);
    }
  }

  //#region GESTIONE ERRORI
  onClickSwitchCaptionError(): void {
    this.switchErrorMessage = !this.switchErrorMessage;
  }
  //#endregion
}
