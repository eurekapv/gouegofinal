import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { element } from 'protractor';
import { RequestDecode, RequestParams } from 'src/app/library/models/requestParams.model';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { Corso } from 'src/app/models/corso.model';
import { CorsoAllegato } from 'src/app/models/corsoallegato.model';
import { FileService } from 'src/app/services/file.service';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-allegatilist',
  templateUrl: './allegatilist.page.html',
  styleUrls: ['./allegatilist.page.scss'],
})
export class AllegatilistPage implements OnInit {
  
  @Input() myCorso:Corso
  listAllegati: CorsoAllegato[] = [];


  constructor(
    private loadingController: LoadingController,
    private modalController: ModalController,
    private docStructureService: DocstructureService,
    private toastController: ToastController,
    private startService: StartService,
    private fileService: FileService
    
  ) { }

  ngOnInit() {

    this.requestListAllegati();    
  }


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
      return this.startService.requestListAllegatiByIdCorso(this.myCorso.ID);
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
      this.showMessage('Errore di connessione')
      console.error(error);
    })
  }



  onClose(){
    this.modalController.dismiss();
  }




  showMessage (messaggio : string){
    this.toastController.create({
      message: messaggio,
      duration: 3000

    }).then (elModal => {
      elModal.present();
    })
  }

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

        console.log(elBlob);
        if(elBlob){
          this.fileService.open(elBlob);
        }
        else{
          throw new Error();
        }
      })
      .catch(error => {
        console.log(error);
        this.showMessage('Impossibile scaricare il file');
      })
    }


  }

}
