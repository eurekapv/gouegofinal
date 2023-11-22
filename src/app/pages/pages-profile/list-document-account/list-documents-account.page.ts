import { Component, OnInit } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { ModalController, LoadingController } from '@ionic/angular';
import { UploadComponent } from 'src/app/shared/components/upload/upload.component';
import { TipoDocumentazione } from 'src/app/models/tipodocumentazione.model';
import { RequestParams } from 'src/app/library/models/requestParams.model';
import { OperatorCondition, ParamsExport } from 'src/app/library/models/iddocument.model';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { Utente } from 'src/app/models/utente.model';
import { Documentazione, InvioDocumentazione } from 'src/app/models/documentazione.model';
import { PostResponse } from 'src/app/library/models/post-response.model';
import { FileService } from 'src/app/services/zsupport/file.service';
import { LogApp } from 'src/app/models/log.model';



@Component({
  selector: 'app-list-documents-account',
  templateUrl: './list-documents-account.page.html',
  styleUrls: ['./list-documents-account.page.scss'],
})
export class ListDocumentsAccountPage implements OnInit {

  /* DA IMPLEMENTARE L'OGGETTO, LA SUBSCRIPTION ETC */
  listDocumenti : Documentazione[]= [];
  inRichiesta = true;

  listaTipiDocumento : TipoDocumentazione[] = [];

  constructor(private startService: StartService,
              private modalController: ModalController,
              private docStructureService: DocstructureService,
              private loadingController: LoadingController,
              private fileService: FileService
              ) { }

  ngOnInit() {
    this.inRichiesta = false;
    this.requestTipiDocumento();
    this.requestListaDocumenti();
  }

  /**
   * Ritorna un Array con il percorso di ritorno
   */
  get backPathArray():string[] {
    let retPath = ['/','appstart-home','tab-profile'];

    return retPath;
  }

  //Ritorna il Path Array Back in formato stringa concatenata
  get backButtonHref(): string {
    let myHref = '';
    myHref = this.backPathArray.join('/').substring(1);

    return myHref;
  }    

  /**
   * Richiedo la lista dei documenti relativa all'utente
   * @param event usato per chiudere il refresher (se la funzione è stata chiamata da esso)
   */
  requestListaDocumenti(event?: any) {

    let reqParams = new RequestParams();
    reqParams.decode.active = true;
    reqParams.decode.addForeignField('IDTIPODOCUMENTAZIONE');

    if (this.startService.activeUtenteDoc) {

      this.loadingController.create({
        message: 'Caricamento',
        spinner: 'circular',
        backdropDismiss: true
      })
      .then(elLoading => {
        if (!event){
          //se la funzione non è stata chiamata dal refresher, mostro il loading
          elLoading.present();
        }

        //Chiedo all'utente di caricare la collection dei documenti
        this.docStructureService.loadCollection(this.startService.activeUtenteDoc, 'DOCUMENTAZIONI', reqParams)
        .then(objUtente => {

          if (!event){
            //se la funzione non è stata chiamata dal refresher, chiudo il loadingcontroller
            elLoading.dismiss();
          }
          else{
            //se la funzione è stata chiamata dal refresher, lo chiudo
            event.target.complete();
          }

          //Recupero la lista dei documenti
          this.listDocumenti = objUtente['DOCUMENTAZIONI'];
          
        })
        .catch(error => {

          if (!event){
            //se la funzione non è stata chiamata dal refresher, chiudo il loadingcontroller
            elLoading.dismiss();
          }
          else{
            //se la funzione è stata chiamata dal refresher, lo chiudo
            event.target.complete();
          }

          LogApp.consoleLog(error,'error');
          this.startService.presentToastMessage('Errore di connessione');

          //Azzero la lista documenti
          this.listDocumenti = [];
        });
      })
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
                  //Recuperiamo i dati da inviare
                  let docUploadDocumentazione : InvioDocumentazione = data['data'];

                  if (docUploadDocumentazione) {
                    //Passo il controllo per inviare i dati al server
                    this.requestUploadToServer(docUploadDocumentazione);
                  }
            });

      //#endregion
    });
  }


  /**
   * Invia al server il documento passato nei parametri
   * Se l'invio ha esito positivo, viene eseguito un refresh dati 
   */
  requestUploadToServer(docToSend : InvioDocumentazione) {

    let nameFunction = 'uploadDocumentiAllegati';
    let nameParams = 'docDettagli'; //Parametro richiesto dalla funzione
    //Informazioni da inviare al server presenti
    if (docToSend) {
      
      this.loadingController.create({
        message: 'Caricamento',
        spinner: 'circular',
        backdropDismiss: true
      })
      .then(elLoading => {

        elLoading.present();
        
  
        //Imposto il token utente
        docToSend.TOKENUTENTE = this.startService.activeUtenteDoc.ID;
  
        //creo il body json
        //Questi sono i parametri per l'esportazione
        let paramExport = new ParamsExport();
        paramExport.clearDOProperty = true;
        paramExport.clearPKProperty = true;
        paramExport.clearPrivateProperty = true;
        paramExport.onlyPropertyModified = false;
        paramExport.onlyDocModified = false;
        
        //Qui Creo il JSON
        let myJson: string = docToSend.exportToJSON(paramExport, nameParams);
        
        
        //ora che ho tutto, faccio la post
        this.docStructureService.requestForFunction(new Utente(), nameFunction, myJson)
                    .then(rawResponse => {
                      
                      elLoading.dismiss();

                      //Risposta ricevuta
                      let myResponse = new PostResponse();
                      myResponse = rawResponse.response;
                      
                      if (myResponse){
                        if (myResponse.result) {
                          //sappiamo che tutto è andato bene
                          this.startService.presentAlertMessage('Grazie, Il tuo documento è stato ricevuto e verrà controllato quanto prima', 'Caricamento completato');
                          
                          //Richiedo ancora la lista dei documenti
                          this.requestListaDocumenti();
              
                        }
                        else{
                          //qualcosa è andato storto sul server
                          if (myResponse.message && myResponse.message.length !== 0) {

                              const myMessage = 'Ops, siamo spiacenti ma si è verificato un errore ' + '<br>' + myResponse.message + '<br>' + 'Ti invitiamo a riprovare o contattare il centro';
                              this.startService.presentAlertMessage(myMessage, 'Caricamento fallito');
                              LogApp.consoleLog(myMessage,'error');
                          }
                          else {
                            const myMessage = 'Ops, siamo spiacenti ma si è verificato un errore inaspettato' + '<br>' + 'Ti invitiamo a riprovare o contattare il centro';
                            this.startService.presentAlertMessage(myMessage, 'Caricamento fallito');
                            LogApp.consoleLog(myMessage,'error');
                          }
                        }
                      }
                      else{
                        //non ho la risposta, c'è stato un errore
                        const myMessage = 'Ops, siamo spiacenti ma si è verificato un errore inaspettato' + '<br/>' + 'la connessione con il server si è interrotta' + '<br>' + 'Ti invitiamo a riprovare o contattare il centro';
                        this.startService.presentAlertMessage(myMessage, 'Caricamento fallito');
                        LogApp.consoleLog(myMessage,'error');
                      }
                    })
                    .catch(error => {
                      let myMessage = '';

                      elLoading.dismiss();

                      if (typeof error == 'string') {
                        myMessage = 'Ops, siamo spiacenti ma si è verificato un errore ' + '<br>' + error + '<br>' + 'Ti invitiamo a riprovare o contattare il centro';
                      }
                      else {
                        myMessage = 'Ops, siamo spiacenti ma si è verificato un errore inatteso' + '<br>' + 'Ti invitiamo a riprovare o contattare il centro';
                      }

                      this.startService.presentAlertMessage(myMessage, 'Caricamento fallito');
                      LogApp.consoleLog(myMessage,'error');                     
                      LogApp.consoleLog(error, 'error');
                    });
      })
    }
  }

  /**
   * Eseguito un click per lo scaricamento
   */
  onClickElement(elemento: Documentazione){
    //creo il loading e lo presento
    if(elemento && elemento.FILENAMEESTENSIONE && elemento.FILENAMEESTENSIONE.length > 0){

      this.loadingController.create({
        message: 'Caricamento',
        spinner: 'circular',
        backdropDismiss: true
      }).then(elLoading => {

          elLoading.present();
  
        //ora faccio la get del file
        this.startService.requestDocumento(elemento.FILENAMEESTENSIONE)
        .then(blob => {
          //E' andato tutto bene, ho il blob
          elLoading.dismiss();
          
          if(blob){
            //Effettuo l'apertura del file ricevuto
            this.fileService.open(blob)
          }
          else{
            this.startService.presentToastMessage('File non visualizzabile');
          }
        })
        .catch(error => {

          elLoading.dismiss();
          //qualcosa non ha funzionato
          LogApp.consoleLog(error,'error');
          this.startService.presentToastMessage('Impossibile scaricare il file');
        })
  
      })
    }
    else{
      this.startService.presentToastMessage('Errore, file non presente in archivio');
    }
  }
  
}
