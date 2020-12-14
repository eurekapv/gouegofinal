import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { timeStamp } from 'console';
import { ItemCalendario } from 'src/app/models/itemCalendario.model';
import { OccupazioneCampi } from 'src/app/models/occupazionecampi.model';
import { StartService } from 'src/app/services/start.service';
import { FilterCustodePage } from './filter-custode/filter-custode.page';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { start } from 'repl';

@Component({
  selector: 'app-agenda-custode',
  templateUrl: './agenda-custode.page.html',
  styleUrls: ['./agenda-custode.page.scss'],
})
export class AgendaCustodePage implements OnInit {

  listOccupazioni: OccupazioneCampi[] = [];

  filter:OccupazioneCampi;

  constructor(
    private loadingController: LoadingController,
    private startService: StartService,
    private toastController: ToastController,
    private modalController: ModalController,
    private navController: NavController,
    private qrScanner: QRScanner
    
  ) { 
    this.filter = new OccupazioneCampi(true);
    this.filter.IDAREA = this.startService.areaSelectedValue.ID;
    this.filter.DATAINIZIO = new Date();
  }

  ngOnInit() {

    this.request();
  }

  onScroll(){

  }


  /**
   * Richiedo nuovamente le occupazioni campi sulla base del filtro
   * @param event evento che ha scatenato la richiesta (usato per dismettere il refresher se presente)
   */
  request(event?){
    this.loadingController.create({
      message: 'Caricamento...',
      spinner: 'circular'
    })
    .then((elLoading) => {
      if (!event){
        elLoading.present();
      }

      return this.startService.requestOccupazioniByFilter(this.filter);
    })
    .then(listOccupazioni => {
      this.listOccupazioni = listOccupazioni;
      this.loadingController.dismiss();
      if(event){
        event.target.complete();
      }
    } )

    .catch(error => {
      this.loadingController.dismiss();
      if(event){
        event.target.complete();
      }
      console.log(error);
      this.showMessage('Errore di connessione');

      
    })
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


  onClickOccupazione(elOccupazione: OccupazioneCampi){
    this.goToDetail(elOccupazione.ID);
  }

  getItemCalendario(elOccupazione: OccupazioneCampi){
    return ItemCalendario.getParamsOccupazioneCampo(elOccupazione);
  }

  showFilter(){
    this.modalController.create({

      component:FilterCustodePage,
      componentProps: {
        filter: this.filter
      }

    })
    .then(elModal => {
      //modale creata
      elModal.present();
      return elModal.onDidDismiss();
    })
    .then(params => {
      //modale dismessa

      let newFilter: OccupazioneCampi = params.data;
      if(newFilter){
        this.filter = newFilter;
        this.request();
      }
      else{
        console.log('Non ci sono dati');
      }

    })
  }

  scanQr(){

    //TODO Da testare se funziona; in alternativa, barcode scanner dovrebbe funzionare
    if(!this.startService.isDesktop){
      this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if(status.authorized){
          let qrSubscription = this.qrScanner.scan()
          .subscribe((text: string) => {
            console.log(text);
            this.qrScanner.hide;
            qrSubscription.unsubscribe();
            this.goToDetail(text);
  
          });
        }
        else{
          throw new Error('Permessi fotocamera non concessi');
        }
      })
      .catch(error => {
        this.showMessage('Errore nella scansione del Qr-Code');
        console.log(error);
      })
    
    }
    else{
      console.warn('Attenzione, Scanner Qr non disponibile su desktop');
    }
  }

  goToDetail(idOccupazione: string){
    this.navController.navigateForward(`/agenda-custode/${idOccupazione}`);
  }
}
