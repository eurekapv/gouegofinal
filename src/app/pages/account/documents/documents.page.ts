import { Component, OnInit } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { Chooser } from '@ionic-native/chooser/ngx';
import { ToastController, ModalController } from '@ionic/angular';
import { UploadComponent } from 'src/app/shared/components/upload/upload.component';
import { TipoDocumentazione, ClasseDocumento } from 'src/app/models/tipodocumentazione.model';
import { RequestParams } from 'src/app/library/models/requestParams.model';
import { OperatorCondition } from 'src/app/library/models/iddocument.model';
import { DocstructureService } from 'src/app/library/services/docstructure.service';

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
              private modalController: ModalController,
              private docStructureService: DocstructureService
              ) { }

  ngOnInit() {
    this.inRichiesta = false;
    this.initTipiDocumento();

  }

  initTipiDocumento(){
    //creo il documento di filtro
    let filter = new TipoDocumentazione(true);
    filter.ZORDER = 0;
    filter.addFilterCondition(OperatorCondition.maggiore, 'ZORDER');

    //Faccio la richiesta
    this.docStructureService.requestNew(filter)
    .then(listaTipiDocumento => {
      this.listaTipiDocumento = listaTipiDocumento;
    })

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
