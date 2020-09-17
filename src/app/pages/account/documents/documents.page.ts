import { Component, OnInit } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { Chooser } from '@ionic-native/chooser/ngx';
import { ToastController, ModalController } from '@ionic/angular';
import { UploadComponent } from 'src/app/shared/components/upload/upload.component';
import { TipoDocumentazione, ClasseDocumento } from 'src/app/models/tipodocumentazione.model';

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

    let tipo1 = new TipoDocumentazione;
    tipo1.ID = 'dkfjlakrjlak';
    tipo1.DENOMINAZIONE = 'Certificato Medico';
    tipo1.CLASSE = ClasseDocumento.certificatoMedico;

    let tipo2 = new TipoDocumentazione;
    tipo2.ID = 'drere34343ffd';
    tipo2.DENOMINAZIONE = 'Tessera Fipav';
    tipo2.CLASSE = ClasseDocumento.documento;

    this.listaTipiDocumento.push(tipo1);
    this.listaTipiDocumento.push(tipo2);
  }

  ngOnInit() {
    this.inRichiesta = false;

    //TODO: RICHIEDERE AL SERVER I TIPI DI DOCUMENTO POSSIBILIS
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
        if (data){
          //se mi ha restituito dei parametri, devo fare la richiesta al server
          console.log('ho dismesso la modale');
          console.log(data);
        }
      })
    })
  }

  upload(){
  }

}
