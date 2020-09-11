import { Component, OnInit, Input } from '@angular/core';
import { TipoDocumentazione } from 'src/app/models/tipodocumentazione.model';
import { Chooser, ChooserResult } from '@ionic-native/chooser/ngx';
import { ToastController, PickerController, ModalController } from '@ionic/angular';
import { PickerOptions, PickerButton, PickerColumn, PickerColumnOption } from '@ionic/core';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {

  @Input() isDesktop : boolean;
  @Input() docTypeList : TipoDocumentazione[];

  loadedFile : ChooserResult;

  selectedDocType: TipoDocumentazione;

 

  constructor(
    private chooser : Chooser,
    private toastController : ToastController,
    private pickerController : PickerController,
    private modalController : ModalController
  ) { }

  ngOnInit() {

  }

  onMobileUpload(){
    this.chooser.getFile()
    .then(file => {
      this.loadedFile = file;
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
            console.log(this.selectedDocType)
          }
        }
      ]
    })
    .then(elPicker => {
      elPicker.present();
    })
  }

  onSubmit(){

    console.log(this.loadedFile);
    if (this.loadedFile && this.selectedDocType){
      //abbiamo tutto, posso chiudere
      this.modalController.dismiss({
        'loadedFile': this.loadedFile,
        'selectedDocType' : this.selectedDocType
      })
    }
    else if (!this.loadedFile){
      this.showMessage('Scegli un documento da caricare');
    }
    else{
      this.showMessage('Indica il tipo di documento che vuoi caricare');
    }
  }

  close(){
    this.modalController.dismiss();
  }
}

  
