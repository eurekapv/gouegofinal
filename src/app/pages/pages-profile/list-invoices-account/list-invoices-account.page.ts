import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { MasterDocumento } from 'src/app/models/utente/master-documento.model';
import { StartService } from 'src/app/services/start.service';
import { Utente } from 'src/app/models/utente/utente.model';
import { PostResponse } from 'src/app/library/models/post-response.model';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { FileService } from 'src/app/services/zsupport/file.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './list-invoices-account.page.html',
  styleUrls: ['./list-invoices-account.page.scss'],
})
export class ListInvoicesAccountPage implements OnInit {

  actualUtente: Utente = new Utente();

  listRicevute: MasterDocumento[] = [];  

  //Data con l'anno selezionato
  yearSelected = new Date();


  constructor(
    private loadingController: LoadingController,
    private startService: StartService,
    private navController: NavController,
    private fileService: FileService
    ) {

    }


  ngOnInit() {

    //recupero l'utente
    this.actualUtente = this.startService.activeUtenteDoc;
    if (this.actualUtente) {
        //posso recuperare l'elenco delle ricevute 
        this.requestRicevute();
    }
    else {
      this.onGoToBack();
    }
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
   * Torno alla pagina del profilo
   */
  onGoToBack() {
    //Torno alla tab profilo
    this.navController.navigateBack(this.backPathArray);
  }


  /**
   * richiede al servizio l'utente con le ricevute, e lo inserisce in actualUtente'
   * @param event Evento opzionale da completare dopo aver eseguito l'aggiornamento (usato per il refresher)
   */
  requestRicevute(event?: any){
    let anno:number;

    if (this.yearSelected) {

      anno = this.yearSelected.getFullYear();
      
      if(event){
        //La funzione è stata chiamata dal refresher
        this.startService.requestInvoices(this.actualUtente, anno)
        .then((listRicevute) => {
      
          this.listRicevute = listRicevute;
          event.target.complete();
        })
        .catch(error => {
          LogApp.consoleLog(error,'error');
          this.startService.presentAlertMessage(error.message,'Errore di connessione');
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
            LogApp.consoleLog(error,'error');
            this.startService.presentAlertMessage(error.message, 'Errore di connessione');
            elLoading.dismiss();
          })
        })
        
      }

    }
    


   
  }

  /**
   * Click Elemento della Lista
   * @param elemento 
   */
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
                    this.fileService.openDesktop(blob);
                    
                  }
                  else{

                    //apertura per mobile
                    this.fileService.openMobile(blob);
                  }
                })
          
        }
        else{
          //la richiesta non è andata a buon fine
          this.startService.presentAlertMessage(response.message, 'Scaricamento fallito');
        }

      })
      .catch(error => {

        //errore di connessione
        elLoading.dismiss();
        LogApp.consoleLog(error,'error');
        this.startService.presentAlertMessage(error.message,'Errore di connessione');

      })
    })
  }

}
