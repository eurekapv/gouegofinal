import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AlertButton, SpinnerTypes, ToastOptions } from "@ionic/core";

@Injectable({
  providedIn: 'root'
})
export class SmartInterfaceService {

  constructor(private alertController: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController) { }

  /**
  * Crea un semplice messaggio con l'uso dell'AlertController
  * La presentazione del messaggio è a carico del chiamante
  * @param message Messaggio
  */
  showMessage(myMessage: string, myTitle?: string, myButtons?: (AlertButton | string)[]): Promise<HTMLIonAlertElement> {


    if (!myButtons) {
      myButtons = ['Ok'];
    }

    return this.alertController.create({
      header: myTitle,
      message: myMessage,
      buttons: myButtons
    });

  }

  /**
  * Crea un semplice loading con l'uso del LoadingController
  * La presentazione del Loader e relativo Dismiss è a carico del chiamante
  * @param myMessage Messaggio
  * @param mySpinner Tipo Spinner (defualt = bubbles)
  * @returns Promise<LoadingController>
  */
  showLoading(myMessage: string, mySpinner: SpinnerTypes = 'circular', backdropDismiss: boolean = false): Promise<HTMLIonLoadingElement> {
    return this.loadingController.create({
      spinner: (!!mySpinner && mySpinner.length > 0) ? mySpinner : 'circular',
      message: myMessage,
      backdropDismiss: backdropDismiss
    });
  }

  /**
  *
  * @param myMessage Messaggio da mostrare
  * @param myTitle Titolo
  * @param myPosition Posizione del Toast
  * @param myDuration Tempo di scomparsa in millisecondi (Default = 2000)
  * @returns Promise<HTMLIonToastElement>
  */
  showToastingMessage(myMessage: string,
    myTitle?: string,
    myPosition?: 'top' | 'bottom' | 'middle',
    myDuration: number = 2000): Promise<HTMLIonToastElement> {

    if (!myPosition || myPosition.length == 0) {
      myPosition = 'bottom';
    }

    return this.toastController.create({
      header: myTitle,
      message: myMessage,
      position: myPosition,
      duration: myDuration
    });
  }
}
