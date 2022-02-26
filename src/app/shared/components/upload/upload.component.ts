import { Component, OnInit, Input } from '@angular/core';
import { SorgenteFile, TipoDocumentazione } from 'src/app/models/tipodocumentazione.model';
import { Chooser, ChooserResult } from '@ionic-native/chooser/ngx';
import { ToastController, PickerController, ModalController } from '@ionic/angular';
import { PickerColumnOption } from '@ionic/core';
import { InvioDocumentazione } from 'src/app/models/documentazione.model';
import {Camera, CameraResultType, Photo, CameraSource } from '@capacitor/camera';



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

  //Tipo di documento che si desidera caricare
  selectedDocType: TipoDocumentazione;

  //Sorgente da cui caricare il file
  sorgenteFile: SorgenteFile = SorgenteFile.photoGallery;

  //Descrizione opzionale del documento
  docDescription = '';

 

  constructor(
    private chooser : Chooser,
    private toastController : ToastController,
    private pickerController : PickerController,
    private modalController : ModalController
    
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
      this.chooser.getFile()
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
        

        console.error(error)
      });

    }
    else if (this.sorgenteFile == SorgenteFile.photoGallery) {

      //Utilizzo la Gallery/Fotocamera
      //Devo aprire la fotocamera sulla gallery
      Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt,
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
          this.showMessage('Errore apertura Photo Gallery');
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
  showMessage(message : string){
    this.toastController.create({
      message: message,
      duration: 3000
    })
    .then(elToast => {
      elToast.present();
    })
  }

  /**
   * Mostra il Picker per la scelta della tipologia documento
   */
  showPicker(){
    
    let pickerOptions : PickerColumnOption[]=[];

    this.docTypeList.forEach(docType => {
      let option : PickerColumnOption = {
        text: docType.DENOMINAZIONE,
        value: docType
      }

      pickerOptions.push(option);
    });



    this.pickerController.create({
      columns : [
        {
          name : 'tipo',
          options : pickerOptions

        }
      ],
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel',
        },
        {
          text: 'Conferma',
          handler: (data)=>{
            this.selectedDocType= data.tipo.value;
          }
        }
      ]
    })
    .then(elPicker => {
      elPicker.present();
    })
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


    //ALTRO ESEMPIO CHE FORSE USAVO PRIMA  
    //@ts-ignore 
      // this.loadedDesktopFile.arrayBuffer().then(blob => {
      //   console.log(blob);

      //   //IMPORTANTE! QUESTO CONVERTE UN ARRAYBUFFER (BLOB) IN BASE64

      //   //TEST 1
      //   //let base64 = btoa(String.fromCharCode(...new Uint8Array(blob)));
      //   //FINE TEST 1

      //   //TEST 2
      //   //const uint8Array = new Uint8Array(blob);
      //   //const base64 = uint8Array.reduce((acc, i) => acc += String.fromCharCode.apply(null, [i]), '');
      //   //console.log(base64);
      //   // FINE TEST 2
        

        
      // })    
  }  


  //#region EVENTI DI INVIO
  
  /**
   * Evento Click di Interfaccia per il caricamento
   */
  onClickCarica(){

    //File non caricato
    if (!this.fileLoaded) {
      this.showMessage('Prima scegli il documento');
    }
    else if (!this.selectedDocType) {
        //Tipologia non selezionata
        this.showMessage('Scegli una tipologia di documento');
    }
    else {
      //Possiamo procedere al caricamento
      this.SendFileDocumentToParent()
    }
        
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

        resolve(this.loadedMobileFile.dataURI);

      }
    })


  }

  /**
   * Prepara un documento InvioDocumentazione e 
   * lo ritorna alla pagina chiamante
   */
  SendFileDocumentToParent() {
    
    this.prepareDataUrl()
        .then(dataUrl => {
          
          //abbiamo tutto, posso creare l'oggetto da ritornare, e chiudere
          let myDocument = new InvioDocumentazione;
          myDocument.FILE = dataUrl;
          myDocument.IDTIPODOCUMENTAZIONE = this.selectedDocType.ID;
          myDocument.DESCRIZIONE = this.docDescription;

          this.modalController.dismiss(myDocument);

        })
        .catch(error => {
          this.showMessage('Si sono verificati errori');
        } )



  }



  /**
   * Chiusura modale senza parametri
   */
  close(){
    this.modalController.dismiss();
  }
}

  
