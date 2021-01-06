import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { ItemCalendario } from 'src/app/models/itemCalendario.model';
import { OccupazioneCampi } from 'src/app/models/occupazionecampi.model';
import { StartService } from 'src/app/services/start.service';
import { FilterCustodePage } from './filter-custode/filter-custode.page';
import { SettoreAttivita } from 'src/app/models/valuelist.model';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-agenda-custode',
  templateUrl: './agenda-custode.page.html',
  styleUrls: ['./agenda-custode.page.scss'],
})
export class AgendaCustodePage implements OnInit {

  listOccupazioni: OccupazioneCampi[] = [];

  filter:OccupazioneCampi;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private loadingController: LoadingController,
    private startService: StartService,
    private toastController: ToastController,
    private modalController: ModalController,
    private navController: NavController,
    
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
    this.goToReservationDetail(null, elOccupazione);
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
    if(!this.startService.isDesktop){
      this.barcodeScanner
      .scan()
      
      .then(data => {
        let myId = data.text;
        console.log('dati: ');
        console.log(data);
        this.goToReservationDetail(myId);
      })

      .catch(error => {
        console.log(error);
        this.showMessage('Errore nella lettura del codice')

      })
    }
  }

  // startScan = async () => {
  //   const { BarcodeScanner } = Plugins;
  
  //   BarcodeScanner.hideBackground(); // make background of WebView transparent
  
  //   const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
  
  //   // if the result has content
  //   if (result.hasContent) {
  //     console.log(result.content); // log the raw scanned content
  //   }
  // };

  // newScanQr(){
  //   console.log('ci provo');
  //   if(!this.startService.isDesktop){
  //     console.log('sono su mobile');
  //     const {BarcodeScanner} = Plugins;
  //     console.log(BarcodeScanner);
  //     BarcodeScanner.hideBackground();
  //     BarcodeScanner.startScan()
  //     .then(result => {
  //       console.log('scannerizzato');
  //       if(result && result.hasContent){
  //         console.log('risultato:');
  //         console.log(result.content);
  //       }
  //     })
  //   }
  // }

  // scanQr(){
  //   console.log('ci provo');

  //   //TODO Da testare se funziona; in alternativa, barcode scanner dovrebbe funzionare
  //   if(!this.startService.isDesktop){
  //     console.log('non sono su desktop');
  //     this.qrScanner.prepare()
  //     .then((status: QRScannerStatus) => {
  //       console.log('preparato');
  //       if(status.authorized){
  //       console.log('autorizzato');

  //         let qrSubscription = this.qrScanner.scan()
  //         .subscribe((text: string) => {
  //           console.log('scannerizzato');

  //           console.log(text);
  //           this.qrScanner.hide;
  //           qrSubscription.unsubscribe();
  //           this.goToReservationDetail(text);
  
  //         });
  //       }
  //       else{
  //         throw new Error('Permessi fotocamera non concessi');
  //       }
  //     })
  //     .catch(error => {
  //       this.showMessage('Errore nella scansione del Qr-Code');
  //       console.log(error);
  //     })
    
  //   }
  //   else{
  //     console.warn('Attenzione, Scanner Qr non disponibile su desktop');
  //   }
  // }

  /**
   * Naviga alla pagina di dettaglio dell'occupazione specificata (SOLO PER PRENOTAZIONI)
   * @param idOccupazione id del docOccupazione
   * @param docOccupazione 
   */
  goToReservationDetail(idOccupazione: string = undefined, docOccupazione: OccupazioneCampi = undefined){

    //se mi passano il doc, basta controllare il tipo e posso passare direttamente
    if(docOccupazione){
      if(docOccupazione.TIPO == SettoreAttivita.settorePrenotazione){
        this.navController.navigateForward(`/agenda-custode/${docOccupazione.ID}`);
      }
      else{
        this.showMessage('Puoi visualizzare solo il dettaglio delle prenotazioni')
      }
    }

    //se mi danno solo l'id, devo recuperare l'occupazione, controllare il tipo, e solo a quel punto posso spostarmi
    else if(idOccupazione && idOccupazione.length > 0){
      this.startService.requestOccupazioneById(idOccupazione)
      .then(elOccupazione => {
        if(elOccupazione){
          //ho trovato un'occupazione, l'id era valido
          if(elOccupazione.TIPO == SettoreAttivita.settorePrenotazione){
            //è una prenotazione, procedo
            this.navController.navigateForward(`/agenda-custode/${elOccupazione.ID}`);
          }
          else{
            //non è una prenotazione, non la mostro
            this.showMessage('Puoi visualizzare solo il dettaglio delle prenotazioni')
          }
        }
        else{
          //non ho trovato nessuna occupazione, il codice non era valido
          this.showMessage('Codice non valido');
        }
      })
      .catch(error => {
        this.showMessage('Errore di connessione');
        console.log(error);
      })
    }

  }

  
}
