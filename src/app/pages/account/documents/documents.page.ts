import { Component, OnInit } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { Chooser } from '@ionic-native/chooser/ngx';
import { ToastController, ModalController } from '@ionic/angular';
import { UploadComponent } from 'src/app/shared/components/upload/upload.component';
import { TipoDocumentazione, ClasseDocumento } from 'src/app/models/tipodocumentazione.model';
import { PostParams, RequestParams } from 'src/app/library/models/requestParams.model';
import { OperatorCondition } from 'src/app/library/models/iddocument.model';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { Utente } from 'src/app/models/utente.model';
import { InvioDocumentazione } from 'src/app/models/documentazione.model';
import { error } from 'console';

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
       let docUploadDocumentazione : InvioDocumentazione= data['data'];
       if (docUploadDocumentazione){

        //creo un utente fittizio da passare alla post
        let fakeUtente = new Utente;

        //creo i parametri
        let myPostParam = new PostParams;
        myPostParam.key = 'tokenUtente';
        myPostParam.value = this.startService.actualUtente.ID;
        let myPostParams : PostParams[] = [];
        myPostParams.push(myPostParam);

        //creo il body json
        let myJson: string = docUploadDocumentazione.exportToJSON(true, true, true, false);

        //ora che ho tutto, faccio la post
        this.docStructureService.requestPost(fakeUtente, 'uploadDocumentazione', myJson,myPostParams)
        .then(response => {
          console.log(response);
          this.showMessage('Caricamento completato')
        })
        .catch(error => {
          console.log (error);
          this.showMessage('Purtroppo c\'è stato un errore');
        })
       }
      })
    })
  }

  upload(){
  }

  showMessage(messaggio: string){
    this.toastController.create({
      message: messaggio,
      duration: 3000
    })
    .then(elToast => {
      elToast.present();
    })
  }

}
