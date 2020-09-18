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
import { Documentazione, InvioDocumentazione } from 'src/app/models/documentazione.model';
import { error } from 'console';
import { PostResponse } from 'src/app/library/models/postResult.model';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {

  /* DA IMPLEMENTARE L'OGGETTO, LA SUBSCRIPTION ETC */
  listDocumenti : Documentazione[]= [];
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
    this.requestTipiDocumento();
    this.requestListaDocumenti();
  }

  /**
   * Richiedo la lista dei documenti relativa all'utente
   */
  requestListaDocumenti() {

    let reqParams = new RequestParams();
    reqParams.decode.active = true;
    reqParams.decode.addForeignField('IDTIPODOCUMENTAZIONE');

    if (this.startService.actualUtente) {

        //Chiedo all'utente di caricare la collection dei documenti
        this.docStructureService.loadCollection(this.startService.actualUtente, 'DOCUMENTAZIONI', reqParams)
        .then(objUtente => {
          //Recupero la lista dei documenti
          this.listDocumenti = objUtente['DOCUMENTAZIONI'];
          console.log(this.listDocumenti);
        })
        .catch(error => {
          console.log(error);
          //Azzero la lista documenti
          this.listDocumenti = [];
        });
    }
    else {
      this.listDocumenti = [];
    }
        
  }

  /**
   * Richiedo al server quali tipi documenti 
   * sono previsti da caricare
   */
  requestTipiDocumento(){
    //creo il documento di filtro
    let filter = new TipoDocumentazione(true);
    filter.ZORDER = 0;
    filter.addFilterCondition(OperatorCondition.maggiore, 'ZORDER');

    //Faccio la richiesta
    this.docStructureService.requestNew(filter)
    .then(listaTipiDocumento => {
      this.listaTipiDocumento = listaTipiDocumento;
    });

  }
  
  
  /**
   * Richiesta di aggiungere un nuovo documento
   * Viene aperto in modale il componente, indicando se siamo su desktop o no, e la lista dei tipi documenti accettati
   */
  onAddDocument(){
    this.modalController.create({
      component: UploadComponent,
      componentProps: {
        'isDesktop': this.startService.isDesktop,
        'docTypeList': this.listaTipiDocumento
      }
    })
    .then(elModal => {

      //Mostro la videata per il caricamento
      elModal.present();

      //#region GESTIONE CHIUSURA MODALE
      elModal.onWillDismiss()
      .then(data => {
              //Controlliamo se l'utente ha inserito dati
            let docUploadDocumentazione : InvioDocumentazione = data['data'];
            
            //Passo il controllo per inviare i dati al server
            this.requestUploadToServer(docUploadDocumentazione);
      });

      //#endregion
    });
  }


  /**
   * Invia al server il documento passato nei parametri
   * Se l'invio ha esito positivo, viene eseguito un refresh dati 
   */
  requestUploadToServer(docUploadDocumentazione : InvioDocumentazione) {

    //Informazioni da inviare al server presenti
    if (docUploadDocumentazione){

      //creo un utente fittizio da passare alla post
      let fakeUtente = new Utente();

      //Imposto il token utente
      docUploadDocumentazione.TOKENUTENTE = this.startService.actualUtente.ID;

      //creo il body json
      let myJson: string = docUploadDocumentazione.exportToJSON(true, true, true, false);
      
      //ora che ho tutto, faccio la post
      this.docStructureService.requestPost(fakeUtente, 'uploadDocumentazione', myJson)
      .then(rawResponse => {
        
        //Risposta ricevuta
        let myResponse = new PostResponse();
        myResponse = rawResponse.response;
        
        if (myResponse){
          if (myResponse.result) {
            //sappiamo che tutto è andato bene
            this.showMessage('Caricamento completato');
            
            //Richiedo ancora la lista dei documenti
            this.requestListaDocumenti();

          }
          else{
            //qualcosa è andato storto sul server
            if (myResponse.message && myResponse.message.length !== 0) {
              this.showMessage(myResponse.message);
            }
            else {
              this.showMessage('Errore caricamento');
            }
          }
        }
        else{
          //non ho la risposta, c'è stato un errore
          this.showMessage('Errore di connessione');
        }
      })
      .catch(error => {

        //errore di comunicazione col server
        console.log (error);
        this.showMessage('Errore di connnessione');
      });
    }
  }

  /**
   * Eseguito un click per lo scaricamento
   */
  onClickElement(elemento: Documentazione){
    this.showMessage('Funzionalità disponibile a breve');
  }

  /**
   * Visualizza un messaggio
   */
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
