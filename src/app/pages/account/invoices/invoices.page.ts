import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { MasterDocumento } from 'src/app/models/ricevuta.model';
import { StartService } from 'src/app/services/start.service';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Utente } from 'src/app/models/utente.model';
import { PostResponse } from 'src/app/library/models/postResult.model';
import { MyDateTime } from 'src/app/library/models/mydatetime.model';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit {

  actualUtente: Utente = new Utente();

  listRicevute: MasterDocumento[] = [];

  selectedYear = new Date().toISOString();

  constructor(
    private loadingController: LoadingController,
    private startService: StartService,
    private file: File,
    private fileOpener: FileOpener,
    private toastController: ToastController,
    private navController: NavController
    


  ) {

   }


  ngOnInit() {

    //recupero l'utente
    this.actualUtente = this.startService.actualUtente;

    //se non ho l'utente devo uscire
    if (!this.actualUtente){
      this.navController.navigateRoot('/home');
    }

    else{
      //posso recuperare l'elenco delle ricevute 
      this.requestRicevute();

    }


  }


  /**
   * richiede al servizio l'utente con le ricevute, e lo inserisce in actualUtente'
   * @param event Evento opzionale da completare dopo aver eseguito l'aggiornamento (usato per il refresher)
   */
  requestRicevute(event?: any){
    
    //prima di tutto calcolo l'anno
    let myDate = new Date(this.selectedYear);
    let anno = myDate.getFullYear();

        

    if(event){
      //La funzione è stata chiamata dal refresher
      this.startService.requestInvoices(this.actualUtente, anno)
      .then((listRicevute) => {

        this.listRicevute = listRicevute;
        event.target.complete();
      })
      .catch(error => {
        console.log(error);
        this.showMessage('Errore di connessione');
        event.target.complete();
      })
    }

    else{

      //la funzione non è stata chiamata dal refresher
      this.loadingController.create()
      .then(elLoading => {

        elLoading.present();
        this.startService.requestInvoices(this.actualUtente, anno)
        .then((listRicevute) => {
          this.listRicevute = listRicevute;
          elLoading.dismiss();
        })
        .catch(error => {
          console.log(error);
          this.showMessage('Errore di connessione');
          elLoading.dismiss();
        })
      })
      
    }

   
  }

  
  onClickElement(elemento: MasterDocumento){
    //creo il loading e lo presento
    this.loadingController.create({
      message: 'Caricamento',
      spinner: 'circular',
      backdropDismiss: true
    }).then(elLoading => {
      elLoading.present();

      //ora faccio la get del file
      this.startService.downloadInvoice(elemento)
      .then((response: PostResponse) => {
        
        //risposta ricevuta
        elLoading.dismiss();

        if (response.result){

          // è andato tutto bene, converto il base64 in blob
          this.startService.base64toBlob(response.code)
          .then(blob => {

            //ora che ho il blob, lo posso aprire
            if(this.startService.isDesktop){

              //apertura per desktop
              this.openDesktop(blob);
            }
            else{

              //apertura per mobile
              this.openMobile(blob);
            }
          })
          
        }

        else{
          //la richiesta non è andata a buon fine
          this.showMessage(response.message);
        }

      })
      .catch(error => {

        //errore di connessione
        elLoading.dismiss();
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
    

        this.file.writeFile(filePath, fileName, blob, { replace:true }).then((fileEntry) => {

                  
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
