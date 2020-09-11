import { Component, OnInit } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { Chooser } from '@ionic-native/chooser/ngx';
import { ToastController, ModalController } from '@ionic/angular';
import { UploadComponent } from 'src/app/shared/components/upload/upload.component';
import { TipoDocumentazione } from 'src/app/models/tipodocumentazione.model';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {

  /* DA IMPLEMENTARE L'OGGETTO, LA SUBSCRIPTION ETC */
  listDocumenti = [];
  inRichiesta = true;

  listaTipiDocumento : TipoDocumentazione[] = [];

  constructor(private startService: StartService,
              private chooser: Chooser,
              private toastController: ToastController,
              private modalController: ModalController
              ) { 
    this.inRichiesta = true;
  }

  ngOnInit() {
    this.inRichiesta = false;
  }
  
  onClickUpload(){
    this.modalController.create({
      component: UploadComponent,
      componentProps: {
        'isDesktop': this.startService.isDesktop,
        'docTypeList': this.listaTipiDocumento
      }
    })
    .then(elModal => {
      elModal.present();
      elModal.onWillDismiss()
      .then(data => {
        //se mi ha restituito dei parametri, devo fare la richiesta al server
        if (data){

        }
      })
    })
  }

  upload(){
  }

}
