import { Component, OnInit, Input } from '@angular/core';
import { TipoDocumentazione } from 'src/app/models/tipodocumentazione.model';
import { Chooser, ChooserResult } from '@ionic-native/chooser/ngx';
import { ToastController, PickerController, ModalController } from '@ionic/angular';
import { PickerOptions, PickerButton, PickerColumn, PickerColumnOption } from '@ionic/core';
import { InvioDocumentazione } from 'src/app/models/documentazione.model';


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

  //Tipo di documento che si desidera caricare
  selectedDocType: TipoDocumentazione;

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

  

  onMobileUpload(){

    //caricamento da mobile
    this.chooser.getFile()
    .then(file => {
      this.loadedMobileFile = file;
    })
    .catch((error: any) => {
      this.showMessage('Errore nell\'apertura del file');
      console.error(error)
    });
  }

  showMessage(message : string){
    this.toastController.create({
      message: message,
      duration: 3000
    })
    .then(elToast => {
      elToast.present();
    })
  }

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

  onChangedDesktopFile(event : any){
    let file : File = event.target.files[0];
    
    this.loadedDesktopFile=file;
  }

  onDesktopUpload(){

    let myInput = document.getElementById('myInput');

    myInput.click();

    
  }
  

  onSubmitMobile(){

    if (this.selectedDocType && this.loadedMobileFile){
      this.submit(this.loadedMobileFile.dataURI);
    }
    else if (!this.loadedMobileFile){
      this.showMessage('Scegli un file da caricare');
    }
    else{
      this.showMessage('Seleziona il tipo di documento da caricare');
    }
  }



  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

  onSubmitDesktop(){

    //Abbiamo tutto, prendo l'array buffer del file, lo converto in B64, e dismetto
    if (this.selectedDocType && this.loadedDesktopFile){


      let base64 = '';
      this.convertBlobToBase64(this.loadedDesktopFile).then(strBase64 => {
        base64 = strBase64 as string;
        console.log(base64);
        this.submit(base64);
      });

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
    else if (!this.loadedDesktopFile){
      this.showMessage('Scegli un file da caricare');
    }
    else{
      this.showMessage('Seleziona il tipo di documento da caricare');
    }
  }
 


 
  onSubmit(){
    if(this.isDesktop){
      this.onSubmitDesktop();
    }
    else{
      this.onSubmitMobile();
    }

    
  }

  // convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
  //   const reader = new FileReader;
  //   reader.onerror = reject;
  //   reader.onload = () => {
  //       resolve(reader.result);
  //   };
  //   reader.readAsDataURL(blob);
  // });

  submit(base64){
    //abbiamo tutto, posso creare l'oggetto da ritornare, e chiudere
    let myDocument = new InvioDocumentazione;
    myDocument.FILE = base64;
    myDocument.IDTIPODOCUMENTAZIONE = this.selectedDocType.ID;
    myDocument.DESCRIZIONE = this.docDescription;

    this.modalController.dismiss(myDocument);
  }

  close(){
    this.modalController.dismiss();
  }
}

  
