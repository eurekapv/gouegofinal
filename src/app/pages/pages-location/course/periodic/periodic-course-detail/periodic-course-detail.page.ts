import { Component, OnInit, OnDestroy } from '@angular/core';
import { Corso } from 'src/app/models/corso/corso.model';
import { Subscription } from 'rxjs';
import { StartService } from 'src/app/services/start.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController, LoadingController } from '@ionic/angular';
import { Location } from 'src/app/models/struttura/location.model';
import { PeriodicCourseDetailCalendarPage } from '../periodic-course-detail-calendar/periodic-course-detail-calendar.page';
import { Area } from 'src/app/models/struttura/area.model';
import { Utente } from 'src/app/models/utente/utente.model';
import { Tempistica, TipoCorso } from 'src/app/models/zsupport/valuelist.model';
import { AllegatilistPage } from 'src/app/pages/pages-history/allegatilist/allegatilist.page';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { PeriodicCourseSubscribePage } from '../periodic-course-subscribe/periodic-course-subscribe.page';
import { IscrizioneCorso } from 'src/app/models/corso/iscrizione-corso.model';

@Component({
  selector: 'app-periodic-course-detail',
  templateUrl: './periodic-course-detail.page.html',
  styleUrls: ['./periodic-course-detail.page.scss'],
})
export class PeriodicCourseDetailPage implements OnInit, OnDestroy {

  myCorso: Corso = new Corso(true);
  subMyCorso: Subscription;
  myLocation: Location = new Location(); 
  iconColor = 'primary';
  groupColor = 'tertiary';
  userLogged = false;
  subUserLogged: Subscription;
  activeIscrizione: IscrizioneCorso; // Se presente indica che l'utente è già Iscritto

  docUser: Utente;
  subUser: Subscription;

  // Gestione Abilitazione Iscrizioni
  listenSelectedArea: Subscription;
  selectedArea: Area;
  areaEnableIscrizioni: boolean = false;  // Nell'area è possibile iscriversi ai corsi
  tempoCorso: typeof Tempistica = Tempistica;
  tipoCorso: typeof TipoCorso = TipoCorso;
  _labelNumeroGiorni = ''; // Etichetta con il numero dei giorni corso per settimana

  constructor(
    private startService: StartService,
    private actRouter: ActivatedRoute,
    private navController: NavController,
    private mdlController: ModalController,
    private loadingController: LoadingController
  ) {
    // Sottoscrizione per l'area selezionata
    this.listenSelectedArea = this.startService.areaSelected$.subscribe(element => {
      this.selectedArea = element;
      if (this.selectedArea) {
        this.areaEnableIscrizioni = this.selectedArea.APPISCRIZIONI;
      }
    });

    // Sottoscrizione per verificare se l'utente è loggato
    this.subUserLogged = this.startService.flagUtenteIsLoggato$.subscribe(element => {
      this.userLogged = element;
    });

    // Sottoscrizione per i dati dell'utente
    this.subUser = this.startService.activeUtenteDoc$.subscribe(elUser => {
      this.docUser = elUser;
      // Recupero una eventuale Iscrizione Corso
      this.retrieveIscrizioneCorso();
    });
  }

  ngOnInit() {
    let idCorso = '';
    let myElLoading: HTMLIonLoadingElement;

    this.actRouter.paramMap.subscribe(param => {
      // Ricerco il parametro courseId
      if (param.has('courseId')) {
        
        // ID Corso
        idCorso = param.get('courseId');

        // Creazione del Loading di Caricamento
        this.loadingController.create({
          spinner: "circular",
          message: 'Caricamento',
          backdropDismiss: true
        })
        .then(elLoading => {
          // Mostro il loading
          myElLoading = elLoading;
          elLoading.present();
          
          // Effettuo la richiesta del corso
          return this.startService.requestCorsoById(idCorso);
        })
        .then((itemCorso: Corso) => {
          // Se ho trovato un corso, lo memorizzo
          this.myCorso = itemCorso;
          // Imposto l'etichetta per il numero di giornate
          this._labelNumeroGiorni = this.myCorso.getLabelNumeroGiornateSettimanali();

          // Ora richiedo la location
          return this.requestLocationById(this.myCorso.IDLOCATION);
        })
        .then((itemLocation: Location) => {
          // Spengo il loading
          myElLoading.dismiss();
          // Ho tutti i dati necessari
          this.myLocation = itemLocation;

          // Recupero una eventuale Iscrizione Corso
          this.retrieveIscrizioneCorso();
        })
        .catch(error => {
          // Si è verificato un errore
          // Spengo il loading
          myElLoading.dismiss();

          this.startService.presentAlertMessage('Errore nel caricamento delle informazioni del corso');
          LogApp.consoleLog(error, 'error');
        });

      } else {
        // Non c'è il parametro
        this.onGoToBack();
      }
    });
  }

  ngOnDestroy() {
    if (this.subMyCorso) {
      this.subMyCorso.unsubscribe();
    }

    if (this.subUserLogged) {
      this.subUserLogged.unsubscribe();
    }

    if (this.listenSelectedArea) {
      this.listenSelectedArea.unsubscribe();
    }

    if (this.subUser) {
      this.subUser.unsubscribe();
    }
  }

  /**
   * Ritorna un Array con il percorso di ritorno
   */
  get backPathArray(): string[] {
    let retPath = ['/', 'appstart-home', 'tab-home'];
    return retPath;
  }

  /**
   * Ritorna il Path Array Back in formato stringa concatenata
   */
  get backButtonHref(): string {
    let myHref = '';
    myHref = this.backPathArray.join('/').substring(1);
    return myHref;
  }

  /**
   * Torna alla pagina home
   */
  onGoToBack() {
    this.navController.navigateBack(this.backPathArray);
  }

  /**
   * Torna indietro (per il bottone nell'header)
   */
  goBack() {
    this.navController.back();
  }

  /**
   * Effettuo la richiesta delle informazioni di una location
   * @param idLocation 
   */
  requestLocationById(idLocation: string): Promise<Location> {
    return new Promise<Location>((resolve, reject) => {
      if (idLocation && idLocation.length != 0) {
        // Effettuo la chiamata
        this.startService.requestLocationByID(idLocation)
          .then(elLocation => {
            resolve(elLocation);
          })
          .catch(error => {
            reject(error);
          });
      } else {
        reject('Location non impostata');
      }
    });
  }

  /**
   * Tenta il caricamento di una iscrizione corso se presente
   */
  retrieveIscrizioneCorso(): void {
    // Recupero anche una eventuale Iscrizione a questo corso
    let filterDoc: IscrizioneCorso;
    
    // Se ho il corso e l'utente provo a chiedere
    if (this.myCorso && this.docUser) {
      filterDoc = new IscrizioneCorso(true);
      filterDoc.IDCORSO = this.myCorso.ID;
      filterDoc.IDUTENTE = this.docUser.ID;

      this.startService.requestIscrizioneCorsoByFilter(filterDoc)
        .then(listReceived => {
          if (listReceived && listReceived.length != 0) {
            this.activeIscrizione = listReceived[0];
          } else {
            this.activeIscrizione = null;
          }
        })
        .catch(error => {
          this.activeIscrizione = null;
          LogApp.consoleLog(error, 'error');
        });
    }
  }

  /**
   * Apre il modal con il calendario del corso
   */
  async onClickCalendario() {
    const modal = await this.mdlController.create({
      component: PeriodicCourseDetailCalendarPage,
      componentProps: {
        myCorso: this.myCorso
      }
    });

    await modal.present();
  }

  /**
   * Apre la lista degli allegati del corso
   */
  async onClickAllegati() {
    
    const modal = await this.mdlController.create({
      component: AllegatilistPage,
      componentProps: {
        myCorso: this.myCorso
      }
    });

    await modal.present();
  }

  /**
   * Apre il modal per l'iscrizione al corso
   */
  async onClickIscrizione() {
    if (!this.userLogged) {
      this.startService.presentToastMessage('Devi effettuare il login per iscriverti');
      return;
    }

    const modal = await this.mdlController.create({
      component: PeriodicCourseSubscribePage,
      componentProps: {
        idCorso: this.myCorso.ID
      }
    });

    await modal.present();

    // Quando il modal si chiude, ricarica i dati per verificare se l'iscrizione è avvenuta
    const { data } = await modal.onWillDismiss();
    if (data && data.success) {
      this.retrieveIscrizioneCorso();
    }
  }

  /**
   * Visualizza i dettagli dell'iscrizione attiva
   */
  onClickVisualizzaIscrizione() {
    if (this.activeIscrizione) {
      this.navController.navigateForward(`/iscrizione/${this.activeIscrizione.ID}`);
    }
  }

  /**
   * Apre la mappa con la location
   */
  onClickLocation() {
    if (this.myLocation && (this.myLocation.INDIRIZZO || this.myLocation.COMUNE)) {
      let addressParts: string[] = [];
      
      if (this.myLocation.INDIRIZZO) {
        addressParts.push(this.myLocation.INDIRIZZO);
      }
      if (this.myLocation.CAP) {
        addressParts.push(this.myLocation.CAP);
      }
      if (this.myLocation.COMUNE) {
        addressParts.push(this.myLocation.COMUNE);
      }
      
      const address = encodeURIComponent(addressParts.join(' '));
      window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
    } else {
      this.startService.presentToastMessage('Indirizzo non disponibile');
    }
  }

    /**
   * Dato un oggetto corso, ritorna la stringa dell'icona corrispondente
   * @param corso L'oggetto corso
   */
    getSportIcon (corso: Corso)
    {
      if (corso){
        return this.startService.getSportIcon(corso.IDSPORT);
      }
    }
}