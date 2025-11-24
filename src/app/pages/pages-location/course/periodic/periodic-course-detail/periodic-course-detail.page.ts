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
import { ModalPageCSS, Tempistica, TipoCorso } from 'src/app/models/zsupport/valuelist.model';
import { AllegatilistPage } from 'src/app/pages/pages-history/allegatilist/allegatilist.page';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { PeriodicCourseSubscribePage } from '../periodic-course-subscribe/periodic-course-subscribe.page';
import { IscrizioneCorso } from 'src/app/models/corso/iscrizione-corso.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
  sportImageUrl = ''; // URL immagine dinamica dello sport

  constructor(
    private startService: StartService,
    private actRouter: ActivatedRoute,
    private navController: NavController,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private http: HttpClient
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

          // Imposto l'URL dell'immagine dello sport
          this.sportImageUrl = this.getSportImageUrl(this.myCorso['_DENOMINAZIONE_Sport']);

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
    const modal = await this.modalController.create({
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
    
    const modal = await this.modalController.create({
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

    const modalIscrizione = await this.modalController.create({
      component: PeriodicCourseSubscribePage,
      cssClass: ModalPageCSS.modalFullScreen,
      componentProps: {
        idCorso: this.myCorso.ID
      }
    });

    await modalIscrizione.present();

    // Quando il modal si chiude, ricarica i dati per verificare se l'iscrizione è avvenuta
    const { data } = await modalIscrizione.onWillDismiss();
    if (data && data.success) {
      this.retrieveIscrizioneCorso();
    }
  }

  /**
   * Visualizza i dettagli dell'iscrizione attiva
   */
  onClickVisualizzaIscrizione() {

    if (this.activeIscrizione) {
      let historyId = this.activeIscrizione.ID;
      let urlPath = [];
      urlPath = this.startService.getUrlPageHistoryPersonal('course', historyId);
      this.navController.navigateForward(urlPath);
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
  getSportIcon(corso: Corso) {
    if (corso) {
      return this.startService.getSportIcon(corso.IDSPORT);
    }
  }

  /**
   * Ritorna l'URL di un'immagine da Pexels in base al nome dello sport
   * Usa Pexels API per ottenere immagini reali e pertinenti
   * @param sportName Nome dello sport
   */
  getSportImageUrl(sportName: string): string {
    // Mappa delle query di ricerca per ogni sport
    const sportQueries: { [key: string]: string } = {
      'calcio': 'soccer field',
      'tennis': 'tennis court',
      'pallavolo': 'volleyball',
      'basket': 'basketball court',
      'nuoto': 'swimming pool',
      'yoga': 'yoga class',
      'pilates': 'pilates',
      'fitness': 'gym fitness',
      'running': 'running track',
      'danza': 'dance studio',
      'karate': 'karate martial arts',
      'judo': 'judo',
      'boxe': 'boxing',
      'palestra': 'gym',
      'spinning': 'spinning bike',
      'crossfit': 'crossfit',
      'arrampicata': 'rock climbing',
      'golf': 'golf course',
      'sci': 'skiing snow',
      'snowboard': 'snowboarding',
      'pattinaggio': 'ice skating',
      'equitazione': 'horse riding',
      'scherma': 'fencing',
      'atletica': 'athletics track',
      'ciclismo': 'cycling',
      'ginnastica': 'gymnastics',
      'rugby': 'rugby',
      'hockey': 'hockey',
      'baseball': 'baseball',
      'badminton': 'badminton',
      'squash': 'squash',
      'padel': 'padel',
      'pingpong': 'table tennis',
      'tennistavolo': 'table tennis',
      'beachvolley': 'beach volleyball'
    };

    // Fallback image generica
    const defaultImage = 'https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop';

    let query = 'sports';

    if (sportName) {
      const sportLower = sportName.toLowerCase().replace(/\s/g, '');

      // Cerca corrispondenza esatta
      if (sportQueries[sportLower]) {
        query = sportQueries[sportLower];
      } else {
        // Cerca per parola chiave parziale
        for (const key in sportQueries) {
          if (sportLower.includes(key) || key.includes(sportLower)) {
            query = sportQueries[key];
            break;
          }
        }
      }
    }

    // Chiamata API Pexels per ottenere immagine dinamica
    const apiKey = environment.additionalConfig.pexelsApiKey;

    if (!apiKey || apiKey === 'TUA_API_KEY_QUI') {
      console.warn('Pexels API key non configurata. Usando immagine di fallback.');
      return defaultImage;
    }

    const headers = new HttpHeaders({
      'Authorization': apiKey
    });

    // Effettua la chiamata API
    this.http.get(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`, { headers })
      .subscribe({
        next: (response: any) => {
          if (response.photos && response.photos.length > 0) {
            const photo = response.photos[0];
            // Usa l'immagine large con dimensioni 1200x600
            this.sportImageUrl = photo.src.large2x || photo.src.large;
          }
        },
        error: (error) => {
          console.error('Errore nel caricamento immagine Pexels:', error);
        }
      });

    // Ritorna temporaneamente l'immagine di default mentre carica
    return defaultImage;
  }
}