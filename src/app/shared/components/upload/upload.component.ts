import { Component, OnInit, Input } from '@angular/core';
import { SorgenteFile, TipoDocumentazione } from 'src/app/models/archivi/tipodocumentazione.model';
import { ToastController, ModalController, AlertController, AlertButton } from '@ionic/angular';
import { InvioDocumentazione } from 'src/app/models/utente/documentazione.model';
import {Camera, CameraResultType, Photo, CameraSource } from '@capacitor/camera';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { Chooser, ChooserResult } from '@awesome-cordova-plugins/chooser';



@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {

  @Input() isDesktop : boolean;
  @Input() docTypeList : TipoDocumentazione[];

  //file caricati (sono tipi diversi a seconda se caricati da mobile o desktop)
  loadedMobileFile : ChooserResult;
  loadedDesktopFile : File;
  loadedMobilePhoto: Photo;

  //File caricato
  fileLoaded: boolean = false;
  //Nome File da mostrare
  fileNameShow: string = '';

  //Id Tipo Documento selezionato
  idDocTypeSelected: string = '';

  //Sorgente da cui caricare il file
  sorgenteFile: SorgenteFile = SorgenteFile.fromgallery;

  //Descrizione opzionale del documento
  docDescription = '';
  //Documento con scadenza-senza scadenza
  flagDocScadenza = false;

  
  //Scadenza opzionale del documento
  docScadenza: Date = new Date();

 

  constructor(
    private toastController : ToastController,
    private modalController : ModalController,
    private alertController: AlertController
    
  ) { }

  ngOnInit() {

  }

  //#region EVENTI DI SEARCH FILE

  /**
   * Evento Click per la scelta di un file in versione Mobile
   */
  onMobileSearch(){

    //Sorgente FileSystem uso il Chooser
    if (this.sorgenteFile == SorgenteFile.filesystem) {

      //Caricamento con il metodo File
      Chooser.getFile()      
              .then(file => {

                //Questo è il file caricato
                this.loadedMobileFile = file;
                this.fileLoaded = true;
                this.fileNameShow = this.loadedMobileFile.name;

              })
              .catch((error: any) => {

                this.loadedMobileFile = null;
                this.fileLoaded = false;
                this.fileNameShow = '';
                

                LogApp.consoleLog(error,'error');
              });

    }
    else if (this.sorgenteFile == SorgenteFile.fromgallery) {

      //Utilizzo la Gallery
      Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos,
        quality: 100
      })
      .then((data:Photo) => {

         //Questo è il file caricato
        this.loadedMobilePhoto = data;
        this.fileLoaded = true;
        this.fileNameShow = 'Immagine ' + this.loadedMobilePhoto.format;
      })
      .catch(error => {
          //Questo è il file caricato
          this.loadedMobilePhoto = null;
          this.fileLoaded = false;
          this.fileNameShow = '';
          this.showAlertMessage('Errore apertura Photo Gallery');
      })
    }    
    else if (this.sorgenteFile == SorgenteFile.takephoto) {

      //Utilizzo la Gallery/Fotocamera
      //Devo aprire la fotocamera sulla gallery
      Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        quality: 100
      })
      .then((data:Photo) => {

         //Questo è il file caricato
        this.loadedMobilePhoto = data;
        this.fileLoaded = true;
        this.fileNameShow = 'Immagine ' + this.loadedMobilePhoto.format;
      })
      .catch(error => {
          //Questo è il file caricato
          this.loadedMobilePhoto = null;
          this.fileLoaded = false;
          this.fileNameShow = '';
          this.showAlertMessage('Errore apertura Photo Gallery');
      })
    }
  }

  /**
   * Evento Click dell'Item riferito alla ricerca File Desktop
   */
  onDesktopSearch(){

    let myInput = document.getElementById('myInput');

    myInput.click();
    
  }


  /**
   * Evento generato dal TAG INPUT al cambio di File
   * @param event 
   */
  onChangedDesktopFile(event : any) {
    let myFile : File;

    if (event.target.files && event.target.files.length != 0) {
      myFile = event.target.files[0];

      this.loadedDesktopFile=myFile;
      this.fileLoaded = true;
      this.fileNameShow = this.loadedDesktopFile.name;
    }
    else {
      this.loadedDesktopFile=null;
      this.fileLoaded = false;
      this.fileNameShow = '';
    }
    
  } 


  
  //#endregion

  //#region VISUALIZZAZIONE MESSAGGI / PICKER

  /**
   * Mostra un Message Toast
   * @param message Messaggio
   */
  showToastMessage(message : string) {

      this.toastController.create({
        message: message,
        duration: 3000
      })
      .then(elToast => {
        elToast.present();
      });
  }

  /**
   * Mostra un messaggio di Alert
   * @param message 
   */
  showAlertMessage(message : string, title:string = '') {
    
    this.alertController.create({
      message: message,
      header: title,
      buttons: [{
        text:'Chiudi',
        role: 'cancel'
      }]
    })
    .then(elAlert => {
      elAlert.present();
    });
}  

  //#endregion


  

  /**
   * Converte un Blob in un dataUrl string
   * @param blob Blob da convertire
   * @returns 
   */
  convertBlobToDataUrl(blob: Blob):Promise<string> {

   return new Promise<string>((resolve, reject) => {

      const reader = new FileReader;
      reader.onerror = reject;
      reader.onload = () => {
          resolve(reader.result.toString());
      };
      reader.readAsDataURL(blob);
    });
   
  }  


  //#region EVENTI DI INVIO
  
  /**
   * Evento Click di Interfaccia per il caricamento
   */
  onClickCarica():void {

    //File non caricato
    if (!this.fileLoaded) {
      this.showAlertMessage('per continuare devi scegliere il documento che vuoi inviarci','Scegli il documento');
    }
    else if (!this.idDocTypeSelected || this.idDocTypeSelected.length == 0) {
        //Tipologia non selezionata
        this.showAlertMessage('per continuare seleziona il tipo del documento che stai caricando','Cosa stai caricando ?');
    }
    else {
      //Possiamo procedere al caricamento
      this.askConfirmSend();
    }
        
  }

  /**
   * Richiesta conferma per l'invio reale
   */
  askConfirmSend(): void {
    let myButtons: AlertButton[];
    const requestBody: string = `Procedo con l'invio del documento ?`;
    
    myButtons = [{
          text: 'Invia',
          role: 'confirm',
          handler: ()=> {
            this.SendFileDocumentToParent();
          }
        },
        {
          text: 'Annulla',
          role: 'cancel'
        }];


        //Preparo e mostro la richiesta
        this.alertController.create({
                              header: 'Invio documento',
                              message: requestBody,
                              buttons: myButtons
                            })
                            .then(elAlert => {
                              elAlert.present();
                            })
  }



  /**
   * Crea e ritorna il DataUrl da inviare al server
   */
  prepareDataUrl():Promise<string> {
    let myDataUrl: string;

    return new Promise<string>((resolve, reject) => {

      //File Desktop
      if (this.loadedDesktopFile) {

        //Effettuo la conversione 
        this.convertBlobToDataUrl(this.loadedDesktopFile)
              .then(strDataUrl => {
  
                myDataUrl = strDataUrl as string;
                resolve(myDataUrl);

              })
              .catch(error => {
                reject(error);
              });
      }
      else if (this.loadedMobilePhoto) {
        myDataUrl = this.loadedMobilePhoto.dataUrl;

        if (myDataUrl.length != 0) {
          resolve(myDataUrl);
        }
        else {
          reject('No base 64 founded');
        }
      }
      else if (this.loadedMobileFile) {
        
        resolve(this.loadedMobileFile.path);

      }
    })


  }

  /**
   * Prepara un documento InvioDocumentazione e 
   * lo ritorna alla pagina chiamante
   * Dentro alla descrizione inserisco la data di scadenza con il simbolo #data#
   */
  SendFileDocumentToParent() {
    
    //Prepariamo il dataUrl da spedire
    this.prepareDataUrl()
        .then(dataUrl => {

          //abbiamo tutto, posso creare l'oggetto da ritornare, e chiudere
          let myDocument = new InvioDocumentazione;
          myDocument.FILE = dataUrl;
          myDocument.IDTIPODOCUMENTAZIONE = this.idDocTypeSelected;
          myDocument.DESCRIZIONE = this.docDescription;
          myDocument.FLAGSCADENZA = this.flagDocScadenza;
          myDocument.DATASCADENZA = this.docScadenza;

          this.modalController.dismiss(myDocument);

        })
        .catch(error => {
            const myMessage = 'Ops, qualcosa è andato storto e non siamo riusciti a preparare il file da inviare' + '<br/>' + 'Ti invitiamo a riprovare o contattare la struttura'
            this.showAlertMessage(myMessage,'Caricamento fallito');
            LogApp.consoleLog(error,'error');
        } )



  }



  /**
   * Chiusura modale senza parametri
   */
  close(){
    this.modalController.dismiss();
  }
}

  
