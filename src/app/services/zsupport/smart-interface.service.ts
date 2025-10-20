import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AlertButton, SpinnerTypes, ToastOptions } from "@ionic/core";
import { CustomAlertClass } from 'src/app/models/zsupport/valuelist.model';

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
  *  cssClass: 'custom-alert subtitle-success' // Per telefono verde
  // oppure 'custom-alert subtitle-danger' per errori
  // oppure 'custom-alert subtitle-warning' per warning
  // oppure 'custom-alert' senza classe per grigio default
  * @param message Messaggio
  * @param myTitle: Titolo
  * @param myButtons: Button da mostrare
  * @param subTitle: Sottotitolo
  * @param customCssClass: Eventuale classe aggiuntiva
  */
  showMessage(myMessage: string | ErrorEvent | Error, 
              myTitle?: string, 
              myButtons?: (AlertButton | string)[],
              subTitle?: string,
              customCssClass?: CustomAlertClass): Promise<HTMLIonAlertElement> {

    let finalMessage = '';

    if (!myButtons) {
      myButtons = ['Conferma'];
    }

    if (myMessage instanceof ErrorEvent) {
      finalMessage = myMessage.message;
    }
    if (myMessage instanceof Error) {
      finalMessage = myMessage.message;
    }    
    else if (typeof myMessage == 'object') {
      finalMessage = JSON.stringify(myMessage);
    }
    else if (typeof myMessage == 'string') {
      finalMessage = myMessage;
    }


    return this.alertController.create({
      header: myTitle,
      subHeader: subTitle ? subTitle:'',
      message: finalMessage,
      buttons: myButtons,
      cssClass: 'custom-alert' + (customCssClass && customCssClass.length != 0 ? ` ${customCssClass}` : '')
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
