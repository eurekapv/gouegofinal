import { Component, OnInit } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { Chooser } from '@ionic-native/chooser/ngx';
import { ToastController, ModalController, LoadingController, Platform } from '@ionic/angular';
import { UploadComponent } from 'src/app/shared/components/upload/upload.component';
import { TipoDocumentazione, ClasseDocumento } from 'src/app/models/tipodocumentazione.model';
import { PostParams, RequestParams } from 'src/app/library/models/requestParams.model';
import { OperatorCondition, ParamsExport } from 'src/app/library/models/iddocument.model';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { Utente } from 'src/app/models/utente.model';
import { Documentazione, InvioDocumentazione } from 'src/app/models/documentazione.model';
import { error } from 'console';
import { PostResponse } from 'src/app/library/models/postResult.model';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';



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
              private docStructureService: DocstructureService,
              private loadingController: LoadingController,
              private platform: Platform,
              private file: File,
              private fileOpener: FileOpener
              ) { }

  ngOnInit() {
    this.inRichiesta = false;
    this.requestTipiDocumento();
    this.requestListaDocumenti();
  }

  /**
   * Richiedo la lista dei documenti relativa all'utente
   * @param event usato per chiudere il refresher (se la funzione è stata chiamata da esso)
   */
  requestListaDocumenti(event?: any) {

    let reqParams = new RequestParams();
    reqParams.decode.active = true;
    reqParams.decode.addForeignField('IDTIPODOCUMENTAZIONE');

    if (this.startService.actualUtente) {

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
        this.docStructureService.loadCollection(this.startService.actualUtente, 'DOCUMENTAZIONI', reqParams)
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
          console.log(this.listDocumenti);
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

          console.log(error);
          this.showMessage('Errore di connessione')
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
      
      this.loadingController.create({
        message: 'Caricamento',
        spinner: 'circular',
        backdropDismiss: true
      })
      .then(elLoading => {

        elLoading.present();
        
        //creo un utente fittizio da passare alla post
        let fakeUtente = new Utente();
  
        //Imposto il token utente
        docUploadDocumentazione.TOKENUTENTE = this.startService.actualUtente.ID;
  
        //creo il body json
        //Questi sono i parametri per l'esportazione
        let paramExport = new ParamsExport();
        paramExport.clearDOProperty = true;
        paramExport.clearPKProperty = true;
        paramExport.clearPrivateProperty = true;
        paramExport.onlyModified = false;
        //Qui Creo il JSON
        let myJson: string = docUploadDocumentazione.exportToJSON(paramExport);
        
        //ora che ho tutto, faccio la post
        this.docStructureService.requestForFunction(fakeUtente, 'uploadDocumentazione', myJson)
        .then(rawResponse => {
          
          elLoading.dismiss();

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
  
          elLoading.dismiss();

          //errore di comunicazione col server
          console.log (error);
          this.showMessage('Errore di connnessione');
        });
      })
    }
  }

  /**
   * Eseguito un click per lo scaricamento
   */
  onClickElement(elemento: Documentazione){
    //creo il loading e lo presento
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
        console.log(blob);

        if(this.startService.isDesktop){
          //sono su Desktop
          this.openDesktop(blob);
        }
        else{
          //sono su mobile
          this.openMobile(blob);
        }
      })
      .catch(error => {
        
        //qualcosa non ha funzionato
        console.log(error);
        this.showMessage('Errore di connessione');
      })

    })
  }

  openDesktop(blob: Blob){


    //per scaricare il file creo via javascript un link fittizio agganciando il percorso del blob, e ne scateno l'evento click
    let name='File'
    let url  = window.URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.download = name;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);


  }

  openMobile(blob: Blob){
    let fileName='Documento';         
    let filePath= this.file.cacheDirectory;      
    console.log('percorso: '+filePath);  

        this.file.writeFile(filePath, fileName, blob, { replace:true }).then((fileEntry) => {

          console.log("File created!");          
          this.fileOpener.open(fileEntry.toURL(), blob.type)
            .then(() => console.log('File is opened'))
            .catch(err => console.error('Error openening file: ' + err));
        })
          .catch((err) => {
            console.error("Error creating file: ");
            console.log(err);
            throw err;  
          });
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
