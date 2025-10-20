import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Corso } from 'src/app/models/corso/corso.model';
import { CorsoAllegato } from 'src/app/models/corso/corsoallegato.model';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { FileService } from 'src/app/services/zsupport/file.service';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-allegatilist',
  templateUrl: './allegatilist.page.html',
  styleUrls: ['./allegatilist.page.scss'],
})
export class AllegatilistPage implements OnInit {
  
  @Input() set myCorso(value:Corso) {
    this._corsoDoc = value;
    if (value) {
      //Richiedo il caricamento dei dati
      this.requestListAllegati();
    }
  }

  listAllegati: CorsoAllegato[] = [];

  _corsoDoc: Corso;



  constructor(
    private loadingController: LoadingController,
    private modalController: ModalController,
    private startService: StartService,
    private fileService: FileService
    
  ) { }

  ngOnInit() {
 
  }


  /**
   * Effettua la richiesta degli allegati
   * @param event 
   */
  requestListAllegati(event?: any){

    
    this.loadingController.create({
      message: 'Caricamento...',
      spinner: "circular",
      backdropDismiss: true
    })
    .then(elLoading => {
      
      //il loading è pronto
      if(!event){
        elLoading.present();
      }
      return this.startService.requestListAllegatiByIdCorso(this._corsoDoc.ID);
    })
    .then(listAllegati => {

      //i dati sono arrivati
      if(event){
        event.target.complete();
      }
      else{
        this.loadingController.dismiss();
      }
      this.listAllegati = listAllegati;
    })
    .catch(error => {

      //i dati non sono arrivati
      if(event){
        event.target.complete();
      }
      else{
        this.loadingController.dismiss();
      }
      
      this.startService.presentAlertMessage('Spiacente, errore di connessione');
      LogApp.consoleLog(error,'error');
    })
  }



  onClose(){
    this.modalController.dismiss();
  }


  /**
   * Richiesto scaricamento Allegato
   * @param elemento 
   */
  downloadAllegato(elemento: CorsoAllegato){
    if(elemento && elemento.FILENAMEESTENSIONE && elemento.FILENAMEESTENSIONE.length > 0){
      //ho il percorso per scaricare il file
      
      this.loadingController.create({
        message: 'Caricamento',
        spinner: 'circular',
        backdropDismiss: true
      })
      .then(elLoading => {
        elLoading.present();

        return this.startService.requestDocumento(elemento.FILENAMEESTENSIONE);
      })
      .then(elBlob => {
        this.loadingController.dismiss();        
        LogApp.consoleLog(elBlob);
        if(elBlob){
          this.fileService.open(elBlob);
        }
        else{
          throw new Error();
        }
      })
      .catch(error => {
        LogApp.consoleLog(error,'error');
        this.startService.presentAlertMessage('Impossibile scaricare il file');
      })
    }


  }

}
