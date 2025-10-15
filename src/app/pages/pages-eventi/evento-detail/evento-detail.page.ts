import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { Area } from 'src/app/models/struttura/area.model';
import { EventoPianificazione } from 'src/app/models/evento/evento-pianificazione.model';
import { Evento } from 'src/app/models/evento/evento.model';
import { Tempistica } from 'src/app/models/zsupport/valuelist.model';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.page.html',
  styleUrls: ['./evento-detail.page.scss'],
})
export class EventoDetailPage implements OnInit, OnDestroy {

  constructor(private router: ActivatedRoute,
              private startService: StartService,
              private loadingController: LoadingController,
              private docStructureSrv: DocstructureService,
              private navController: NavController) { }

  idPrimaryKey: string = '';
  eventoDoc: Evento = new Evento(true);
  iconColor = 'primary';
  groupColor = 'tertiary';
  areaEnableIscrizioni:boolean = false;  //Nell'area è possibile iscriversi
  subListenArea: Subscription;
  areaSelected: Area; 

  //Usare enum in Html
  tempoEvento: typeof Tempistica = Tempistica;
  

  ngOnInit() {

    //Mi metto in ascolto dell'area selezionata
    this.onListenAreaSelected();

    this.router.paramMap.subscribe( param => {
        if (param.has('id')) {
          this.idPrimaryKey = param.get('id');

          //C'e' una Chiave per effettuare la richiesta
          if (this.idPrimaryKey.length != 0) {
              this.onRequestData();
          }
          else {
            this.onGoToBack();
          }
        }
    })
  }

  ngOnDestroy() {
    if (this.subListenArea) {
      this.subListenArea.unsubscribe();
    }
  }

  /**
   * Metto in ascolto dell'area selezionata
   */
  onListenAreaSelected() {

    //Recupero l'area attiva
    this.subListenArea = this.startService.areaSelected$.subscribe(elArea => {
          this.areaSelected = elArea;
          this.areaEnableIscrizioni = false;

          if (elArea) {
            if (elArea.APPISCRIZIONIEVENTI) {
              this.areaEnableIscrizioni = true;
            }
          }
    })
  }

  /**
   * Viene effettuata la richiesta
   * @param event 
   */
  onRequestData(event?: any) {

    if (event) {
      event.target.complete();
    }

    this.loadingController.create({
      message: 'Caricamento...',
      spinner: "circular",
      backdropDismiss: true
    })
    .then(elLoading => {
      elLoading.present();
      
      //Faccio la chiamata
      this.startService.requestEventoById(this.idPrimaryKey,2,true)
                        .then(dataReceived => {

                          //Dati ricevuti
                          this.eventoDoc = dataReceived;

                          //Decodifico anche la collection Eventi Pianificazione (solo queste chiavi)
                          let reqForeign = EventoPianificazione.getReqForeignKeys();

                          return this.docStructureSrv.decodeCollection(this.eventoDoc.EVENTOPIANIFICAZIONE, reqForeign, true);

                        })
                        .then(() => {
                          //Chiudo il Loading
                          elLoading.dismiss();
                        })
                        .catch(error => {
                          elLoading.dismiss();

                          //Si è verificato un errore
                          this.startService.presentToastMessage('Scheda Evento non recuperata');

                          this.onGoToBack();
                        })

    })
  }


  //#region PULSANTE BACK
  /**
   * Ritorna un Array con il percorso di ritorno
   */
  get backPathArray():string[] {
    let retPath = ['/','appstart-home','tab-eventi'];

    return retPath;
  }
    
  //Ritorna il Path Array Back in formato stringa concatenata
  get backButtonHref(): string {
      let myHref = '';
      myHref = this.backPathArray.join('/').substring(1);
  
      return myHref;
  }
    
  /**
   * Torno alla pagina del home
   */
  onGoToBack() {
        this.navController.navigateBack(this.backPathArray);
  }
  
  //#endregion

  //#region INTERFACCIA
   /**
   * @returns Colore da applicare all'item che forma la testata
   */
   getColorHeader(): string {
      let myClass = 'light';

      myClass = 'success';
      
      return myClass;
    }  

  /**
   * Indica se mostrare il pulsante delle Iscrizioni
   */
  showIscrizioniButton():boolean {

    let showButton = false;

    if (this.eventoDoc) {
      if (this.areaEnableIscrizioni && this.eventoDoc.flagIscrizioniAperte()) {
        showButton = true;
      }
    }

    

    return showButton;
  }  
  
  /**
   * Richiesta l'iscrizione all'evento
   */
  onClickIscrizione(): void {
    this.startService.presentAlertMessage('A breve sarà disponibile l\'iscrizione Online','Ancora un attimo');
  }
  //endregion
// =====================================================
// METODO DA AGGIUNGERE alla classe EventoDetailPage
// nel file: evento-detail.page.ts
// =====================================================

/**
 * Ritorna l'icona appropriata in base allo stato delle iscrizioni
 * Utilizzato nella sezione iscrizioni per mostrare l'icona corretta
 */
getSubscriptionIcon(): string {
  const stato = this.eventoDoc.tempoIscrizioni();
  
  switch(stato) {
    case Tempistica.FUTURO:
      // Iscrizioni future - icona clessidra
      return 'hourglass-outline';
    
    case Tempistica.IN_CORSO:
      // Iscrizioni aperte - icona checkmark
      return 'checkmark-circle-outline';
    
    case Tempistica.PASSATO:
      // Iscrizioni chiuse - icona close
      return 'close-circle-outline';
    
    case Tempistica.NULL:
      // Iscrizioni non disponibili - icona info
      return 'information-circle-outline';
    
    default:
      // Fallback
      return 'help-circle-outline';
  }
}

// =====================================================
// OPZIONALE: Metodo per icona sport dinamica nel hero
// =====================================================

/**
 * Ritorna l'icona appropriata per lo sport dell'evento
 * Da usare nel hero header al posto di "sunny" statico
 */
getSportIcon(): string {
  const sport = this.eventoDoc['_DENOMINAZIONE_Sport'];
  
  if (!sport) {
    return 'trophy'; // Icona default
  }
  
  const sportLower = sport.toLowerCase();
  
  // Beach / Spiaggia
  if (sportLower.includes('beach') || sportLower.includes('spiaggia')) {
    return 'sunny';
  }
  
  // Tennis
  if (sportLower.includes('tennis')) {
    return 'tennisball';
  }
  
  // Calcio / Football
  if (sportLower.includes('calcio') || sportLower.includes('football')) {
    return 'football';
  }
  
  // Basket / Basketball
  if (sportLower.includes('basket')) {
    return 'basketball';
  }
  
  // Pallavolo / Volley
  if (sportLower.includes('pallavolo') || sportLower.includes('volley')) {
    return 'tennisball'; // Ionic non ha icona volley, usiamo tennis
  }
  
  // Nuoto
  if (sportLower.includes('nuoto') || sportLower.includes('swim')) {
    return 'water';
  }
  
  // Fitness / Gym
  if (sportLower.includes('fitness') || sportLower.includes('gym')) {
    return 'barbell';
  }
  
  // Yoga
  if (sportLower.includes('yoga')) {
    return 'body';
  }
  
  // Running / Corsa
  if (sportLower.includes('running') || sportLower.includes('corsa')) {
    return 'walk';
  }
  
  // Default - icona trofeo
  return 'trophy';
}

// =====================================================
// ESEMPIO DI UTILIZZO NEI TEMPLATE
// =====================================================

/*
  Nel file HTML, sostituisci:

  PRIMA (statico):
  <ion-icon name="sunny"></ion-icon>

  DOPO (dinamico):
  <ion-icon [name]="getSportIcon()"></ion-icon>


  E per lo stato iscrizioni (già implementato):
  <ion-icon [name]="getSubscriptionIcon()"></ion-icon>
*/
}
