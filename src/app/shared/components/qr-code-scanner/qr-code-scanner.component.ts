import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-qr-code-scanner',
  templateUrl: './qr-code-scanner.component.html',
  styleUrls: ['./qr-code-scanner.component.scss'],
})
export class QrCodeScannerComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private mdlController: ModalController, 
              private srvAgora: StartService) { }

  scanActive = false;
  readResult = ''; //Risultato della lettura
  readErrorMessage = ''  ; //Eventuale errore di lettura


  ngOnInit() {
    this.readResult = '';
  }

  ngAfterViewInit() {
    BarcodeScanner.prepare();
    //Inizio il processo 
    this.initScannerOperation();
  }

  ngOnDestroy(): void {
    BarcodeScanner.stopScan();
    //Nascondo il Background
    this.showHideHTMLBackground(true);
  }


  //#region SCANSIONE QRCODE

  /**
   * Controlla la presenza dei permessi della camera, e in caso negativo apre 
   * le impostazioni
   * @deprecated Per ora usiamo barcodeGrantPermission
   * @returns TRUE/FALSE
   */
  async checkPermission():Promise<boolean> {

    return new Promise<boolean>(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });

      if (status.granted) {
        resolve(true);
      }
      else if (status.denied) {

        //Porto l'utente alle impostazioni
        let idTitle = 'Permesso non impostato';
        let idMessage = `Consentire l'utilizzo della fotocamera nelle impostazioni`;
        this.srvAgora.presentAlertMessage(idMessage, idTitle,
                          [{
                            text: 'No',
                            role: 'cancel'
                          }, 
                          {
                            text: 'Vai a Impostazioni',
                            handler: () => {

                              BarcodeScanner.openAppSettings();
                              resolve(false);
                            }
                          }]);

      }
      else {
        resolve(false);
      }
    })

  }


  /**
   * Controllo permessi Barcode (ALTRO METODO)
   * In caso chiede all'utente se è possibile usare la fotocamera
   * 
   * @returns 
   */
  async barcodeGrantPermission():Promise<boolean> {

    // check if user already granted permission
    const status = await BarcodeScanner.checkPermission({ force: false });
  
    if (status.granted) {
      // user granted permission
      return true;
    }
  
    if (status.denied) {
      // user denied permission
      // redirect user to app settings if they want to grant it anyway
      const c = confirm(
        `Per consentire l'uso della fotocamera è necessario abilitarla nelle impostazioni.`      
      );

      if (c) {
          BarcodeScanner.openAppSettings();
      }

      return false;
    }
  
    if (status.asked) {
      // system requested the user for permission during this call
      // only possible when force set to true

    }
  
    if (status.neverAsked) {
      // user has not been requested this permission before
      // it is advised to show the user some sort of prompt
      // this way you will not waste your only chance to ask for the permission
      const c = confirm(
        `E' necessario autorizzare l'utilizzo della fotocamera per effettuare la scansione barcode`
      );
      if (!c) {
        return false;
      }
    }
  
    if (status.restricted || status.unknown) {
      // ios only
      // probably means the permission has been denied
      return false;
    }
  
    // user has not denied permission
    // but the user also has not yet granted the permission
    // so request it
    const statusRequest = await BarcodeScanner.checkPermission({ force: true });
  
    if (statusRequest.asked) {
      // system requested the user for permission during this call
      // only possible when force set to true
    }
  
    if (statusRequest.granted) {
      // the user did grant the permission now
      return true;
    }
  
    // user did not grant the permission, so he must have declined the request
    return false;
  };

  /**
   * Mostrao nasconde il background classico
   * @param show TRUE = Mostra il background classico, FALSE = Nasconde il Background per mostrare il QrCodeScanner
   */
  showHideHTMLBackground(show: boolean):void {

    const ionRouter: HTMLIonRouterOutletElement = document.querySelector('ion-router-outlet');

    let nameClass = 'qrscanner';
    if (!show) {

      document?.body?.classList?.add(nameClass);  

      ionRouter?.classList?.add(nameClass);
    }
    else {
      document.body.classList.remove(nameClass);  
      ionRouter.classList.remove(nameClass);
    }
  }

  /**
   * Esegue l'operazione di avvio scansione
   */
  initScannerOperation() {

    //Nascondo il Background
    this.showHideHTMLBackground(false);

    this.startScanner()
        .then(resultScan => {

          this.readResult = resultScan;
          //Chiudo il componente
          this.closeScanner();

        })
        .catch(error => {
          this.readErrorMessage = error;
          this.closeScanner();
        })
  }

  //Apre la fotocamera per la lettura del QRCode
  startScanner(): Promise<string> {

    return new Promise<string>((resolve, reject) => {
      
      //Controlliamo i permessi prima di proseguire 
      this.barcodeGrantPermission()
          .then(resultPermission => {
            //Permesso concesso
            if (resultPermission) {
  
              this.scanActive = true;

              BarcodeScanner.hideBackground(); // make background of WebView transparent
          
              // start scanning and wait for a result
              BarcodeScanner.startScan()
                            .then(result => {
                              
                              this.scanActive = false;

                              // if the result has content
                              if (result.hasContent) {
                                  
                                  resolve(result.content);
                              }
                              else {
                                reject('No barcode read');
                              }
  
                            })
                            .catch(error => {
                              reject(error);
                            }); 
          
  
            }
            else {
              this.scanActive = false;
              reject('Permessi Fotocamera non concessi');
            }
          })
          .catch(error => {
              reject(error);
          })

    })

  }

  /**
   * Interrompe lo scan barcode
   */
  stopScanner() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
    this.closeScanner();
  }

  /**
   * Chiusura dello scanner
   */
  closeScanner() {
    this.mdlController.dismiss({
      'qrcodeData' : this.readResult,
      'error' : this.readErrorMessage
    })
  }

}
