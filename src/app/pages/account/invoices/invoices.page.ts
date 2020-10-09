import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Ricevuta } from 'src/app/models/ricevuta.model';
import { StartService } from 'src/app/services/start.service';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Utente } from 'src/app/models/utente.model';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit {

  actualUtente: Utente = new Utente();

  listRicevute: Ricevuta[] = [];

  constructor(
    private loadingController: LoadingController,
    private startService: StartService,
    private file: File,
    private fileOpener: FileOpener,
    private toastController: ToastController,
    private navController: NavController
    


  ) { }


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

    if(event){
      //La funzione è stata chiamata dal refresher
      this.startService.insertInvoicesIntoUtente(this.actualUtente)
      .then((docUtente:Utente) => {
        this.actualUtente = docUtente;
        this.listRicevute = this.actualUtente.RICEVUTE;
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
        this.startService.insertInvoicesIntoUtente(this.actualUtente)
        .then((docUtente:Utente) => {
          this.actualUtente = docUtente;
          this.listRicevute = this.actualUtente.RICEVUTE;
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

  
  onClickElement(elemento: Ricevuta){
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
