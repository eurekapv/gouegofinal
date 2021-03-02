import { Component, OnDestroy, OnInit, ɵConsole } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Subscription } from 'rxjs';

import { Area } from 'src/app/models/area.model';
import { Location } from 'src/app/models/location.model';

import { ActionSheetController, NavController, ModalController, ToastController } from '@ionic/angular';
import { Impegno } from 'src/app/models/impegno.model';
import { SettoreAttivita, Ruolo, Mansione } from '../../models/valuelist.model';

import { Utente } from 'src/app/models/utente.model';
import { ButtonCard, ButtonHomeParams } from 'src/app/models/buttoncard.model';
import { NewsEvento } from 'src/app/models/newsevento.model';
import { NewLoginPage } from 'src/app/pages/auth/new-login/new-login.page';
import { NewsdetailPage } from 'src/app/pages/newsdetail/newsdetail.page';
import { DocstructureService } from 'src/app/library/services/docstructure.service';

import { RequestDecode, RequestParams } from 'src/app/library/models/requestParams.model';

import { OperatorCondition } from 'src/app/library/models/iddocument.model';

import { Plugins } from '@capacitor/core';
import { PianificazioneCorso } from 'src/app/models/pianificazionecorso.model';
import { LogApp } from 'src/app/models/log.model';
import { AllegatilistPage } from '../history/historycourse/allegatilist/allegatilist.page';
import { OccupazioneCampi } from 'src/app/models/occupazionecampi.model';
import { Button } from 'protractor';

const { Geolocation } = Plugins;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  // Parametri Iniziali di Configurazione
  startConfig: StartConfiguration;
  startConfigListen: Subscription;

  //Identificativo Utente Loggato
  userLogged: boolean;
  userLoggedListen: Subscription;

  //Utente Loggato
  docUtente: Utente;
  docUtenteListen: Subscription;

  // Elenco delle Aree
  listAree: Area[] = [];
  listAreeListen: Subscription;

  // Elenco delle Location da mostrare
  listLocation: Location[] = [];

  listLocationListen: Subscription;

  //Elenco delle prossime attività
  myListImpegni: Impegno[] = [];

  myListImpegniTrainer: PianificazioneCorso[] = [];

  // L'area viene recuperata dal subscribe
  selectedArea: Area;
  selectedAreaListen: Subscription;

  idAreaFav: string;
  listenIdAreaFav: Subscription;

  listButtonImpegni: ButtonCard[] = []; //Bottoni da mostrare nell'area impegni

  //Oggetti per le News
  noNewsCard: NewsEvento;
  listNews: NewsEvento[] = [];

  //Bottoni da mostrare nella porzione Agenda
  agendaCards: ButtonCard[] = [];

  listOccupazioni: any[]= []; //array di array di occupazioni, divise per locations


  //Mostra o nasconde Area Agenda
  showAgenda = false;

  get showTrainer(): boolean {
    return (this.userLogged && (this.docUtente.isAssistenteTrainer || this.docUtente.isTrainer))
  }

  get showCustode(): boolean {
    return (this.userLogged && this.docUtente.isCustode)
  }


  //Guarda qui
  //https://swiperjs.com/demos/#responsive_breakpoints
  sliderOpts = {
    slidesPerView: 1.2,
    spaceBetween: 0,
    initialSlide: 0,
    // Dovrei farla variabile
    // Responsive breakpoints   
    breakpoints: {

      // when window width is <= 320px     
      320: {
        slidesPerView: 1.2,
        spaceBetween: 0
      },
      // when window width is <= 480px     
      480: {
        slidesPerView: 1.2,
        spaceBetween: 0
      },

      // when window width is <= 640px     
      640: {
        slidesPerView: 1.2,
        spaceBetween: 0
      },

      1024: {
        slidesPerView: 2.5,
        spaceBetween: 1
      },

      1440: {
        slidesPerView: 4,
        spaceBetween: 1
      },

      1920: {
        slidesPerView: 6,
        spaceBetween: 1
      }



    }


  }


  constructor(private startService: StartService,
    private actionSheetController: ActionSheetController,
    private navController: NavController,
    private modalController: ModalController,
    private docStructureService: DocstructureService,
    private toastController: ToastController
  ) {

    //Recupero la card che dice che non ci sono news
    this.noNewsCard = NewsEvento.getNoNews();

    // Parametri di Configurazione Iniziale Applicazione
    this.startConfigListen = this.startService.startConfig
      .subscribe(element => {
        this.startConfig = element;
      });

    // Sottoscrivo alla ricezione delle Aree
    this.listAreeListen = this.startService.listAree
      .subscribe(aree => {
        this.listAree = aree.filter(objArea => {
          return objArea.APPSHOW;
        });

        //quando le aree sono arrivate, se non sono loggato seleziono la più vicina
        if (!this.userLogged) {
          this.startService.getNearestArea(this.listAree)
            .then(nearestArea => {

              //trovata l'area, posso passarne l'id al metodo selectarea
              this.startService.selectAreaByID(nearestArea.ID);
            })
        }
      });


    //QUESTO E' IMPORTANTE, QUI POSSO AGGANCIARE EVENTI A SEGUITO DEL CAMBIO DI AREA
    //Mi sottoscrivo alla ricezione della Area Selezionata
    this.selectedAreaListen = this.startService.areaSelected
      .subscribe(areaSel => {
        //controllo se nell'array di aree è presente quella selezionata
        if (this.listAree.includes(areaSel)) {
          //Cambio Area Selezionata
          this.selectedArea = areaSel;
        }
        //altrimenti setto come area selezionata la prima disponibile
        else {
          this.selectedArea = this.listAree[0];
        }
        //richiedo le location sulla base della nuova area selezionata
        startService.requestLocation(this.selectedArea.ID)
       

        //Richiesta nuove News
        this.requestNews();

        //Aggiorno l'agenda
        this.updateAgenda();

        // this.richiediAgendaOccupazione();


      });

    
    // QUI POSSO AGGANCIARE EVENTI ALL'ARRIVO DELLE LOCATIONS
    // Sottoscrivo alla ricezione delle Locations
    this.listLocationListen = this.startService.listLocation
      .subscribe(locations => {
        this.listLocation = locations;
        if(this.listLocation && this.listLocation.length > 0){
          
          this.richiediAgendaOccupazione()

        }
      })

    //Sottoscrivo all'ascolto di un utente loggato
    this.userLoggedListen = this.startService.utenteLogged.subscribe(element => {

      //Recupero l'utente
      this.userLogged = element;

      //Aggiorno lista impegni e cerco di visualizzare le card superiori
      this.updateListImpegni();

      //Aggiorno l'agenda
      // this.updateAgenda();
      // this.richiediAgendaOccupazione();


    });


    //Sottoscrivo all'ascolto dell'Account
    this.docUtenteListen = this.startService.utente.subscribe(element => {

      this.docUtente = element;

      //Aggiorno lista impegni e cerco di visualizzare le card superiori
      this.updateListImpegni();

      //Aggiorno l'agenda
      // this.updateAgenda(); 
      // this.richiediAgendaOccupazione();
    });


    //Impostazione Iniziale dei Bottoni relativi gli impegni
    this.createButtonCardImpegni();
  }


  /**
   * Effettua la richiesta delle News
   */
  requestNews() {

    if (this.selectedArea) {

      //Chiedo al servizio le News
      this.startService.requestNews(this.selectedArea.ID, 3).then(listNews => {
        this.listNews = listNews;
      });

    }
  }



  ionViewDidEnter() {

    //Aggiorniamo gli impegni
    this.updateListImpegni();
    this.requestNews();

  }

  //#region IMPEGNI

  /**
   * Crea l'array dei BottoniCard degli impegni, a seconda dell'utente loggato e la lista impegni
   */
  createButtonCardImpegni() {
    let params: ButtonHomeParams = new ButtonHomeParams();

    //Preparo i parametri
    params.utenteLoggato = this.userLogged;
    params.listImpegni = this.myListImpegni;
    params.registrazioneInApp = false;
    if (this.startConfig && this.startConfig.gruppo) {
      params.registrazioneInApp = this.startConfig.gruppo.APPFLAGREGISTRAZIONE;
    }


    //Recupero i bottoni da mostrare, a seconda sia loggato o no
    this.listButtonImpegni = ButtonCard.getButtonHomeImpegni(params);
  }

  /**
   * Evento click su bottone della card
   * @param btn Bottone cliccato
   */
  onClickButtonCardImpegni(btn: ButtonCard) {


    if (btn) {
      switch (btn.functionCod) {
        case 'register':
          // Apro il Login
          this.openLogin();
          break;

        case 'login':
          // Apro il Login
          this.openLogin();
          break;

        case 'show':
          this.redirectFromButtonCard(btn);
          break;

        default:
          break;
      }
    }
  }

  /**
   * Apre la pagina relativa dal Bottone passato
   * @param btn Bottone
   */
  redirectFromButtonCard(btn: ButtonCard) {
    if (btn.id && btn.id.length !== 0) {
      switch (btn.settore) {
        case SettoreAttivita.settoreCorso:
          this.navController.navigateForward(['/', 'historylist', 'course', btn.id]);
          break;

        case SettoreAttivita.settorePrenotazione:
          this.navController.navigateForward(['/', 'historylist', 'booking', btn.id]);
          break;

        default:
          break;
      }
    }
  }

  //#endregion

  //#region NEWS ED EVENTI AZIENDA

  onClickShowAllNews() {
    this.navController.navigateForward(['/', 'news']);
  }

  /**
   * Apre in modalità modale la news
   * @param news News da leggere
   */
  onClickNews(news: NewsEvento, event: any) {

    this.modalController.create({
      component: NewsdetailPage,
      componentProps: { myNews: news }
    }).then(modal => {
      modal.present();
    })
  }

  //#endregion

  //#region TRAINER
  // updateTrainer(){
  //   if (this.docUtente.isTrainer){
  //     this.showTrainer = true;

  //     //creo il filtro e recupero tutti i corsi dell'istruttore loggato
  //     let filterCorso : Corso = new Corso;


  //   }
  //   else{
  //     this.showTrainer = false;
  //   }
  // }

  //#endregion

  ngOnInit() {
    //prova localizzazione
    // Geolocation.getCurrentPosition().then(posizione => {
    //   console.log (posizione);
    // })
  }

  ngOnDestroy() {
    if (this.startConfigListen) {
      this.startConfigListen.unsubscribe();
    }

    if (this.listAreeListen) {
      this.listAreeListen.unsubscribe();
    }

    if (this.listLocation) {
      this.listLocationListen.unsubscribe();
    }

    if (this.selectedAreaListen) {
      this.selectedAreaListen.unsubscribe();
    }

    if (this.userLoggedListen) {
      this.userLoggedListen.unsubscribe();
    }

    if (this.docUtenteListen) {
      this.docUtenteListen.unsubscribe();
    }



  }


  /** Gestisce il Click del pulsante di footer */
  onClickfooterButton() {
    if (this.userLogged) {
      // Apro lo Storico
      this.openHistory();
    }
    else {
      // Apro il Login
      this.openLogin();

    }
  }

  /**
   * Prenotazione
   * @param location Location Selezionata
   */
  onClickPrenota(location: Location) {
    this.navController.navigateForward(['/', 'location', location.ID, 'booking']);
  }

  /**
   * Scheda Location
   * @param location Location selezionata
   */
  onClickLocation(location: Location) {
    this.navController.navigateForward(['/', 'location', location.ID]);
  }



  /** Apertura Videata Login */
  async openLogin() {

    //**Apro in versione moale la NewLogin
    const modal = await this.modalController.create({
      component: NewLoginPage
    });

    modal.present();
  }

  /**
   * Apre la pagina di History
   */
  openHistory() {
    this.navController.navigateForward(['/', 'historylist']);
  }

  /**
   * Visualizza le form per la scelta del centro
   */
  showSceltaCentro(ev: any) {
    //Per ora faccio uguale, vediamo poi se vale la pena 
    //cambiare per il desktop
    if (this.startService.isDesktop) {
      this.presentActionSheet();
    }
    else {
      this.presentActionSheet();
    }
  }



  /** funzione per mostrare il popup di scelta campo */
  async presentActionSheet() {
    let buttonsArray: any[] = [];
    let singleButton: any;
    //popolo l'array di bottoni con i nomi delle aree operative
    for (const iterator of this.listAree) {
      singleButton = {
        text: iterator.DENOMINAZIONE,
        icon: 'location-outline',
        handler: () => {
          //Chiedo al servizio di cambiare l'Area Selezionata
          this.startService.selectAreaByID(iterator.ID);
        }
      }

      buttonsArray.push(singleButton);
    }
    const actionSheet = await this.actionSheetController.create
      ({
        header: 'Scegli la Sede',
        buttons: buttonsArray
      });
    await actionSheet.present();
  }


  //#region GESTIONE INTERFACCIA
  /** Ritorna il color a seconda dello stato di Login */
  // btnFooterColor() {

  //   let color = 'primary';

  //   if (this.userLogged) {
  //     color = 'warning'
  //   }
  //   else {
  //     color = 'primary'
  //   }

  //   return color;
  // }

  btnFooterCaption() {
    let retCaption = '';
    const captionAccedi = 'Accedi';

    retCaption = captionAccedi;
    //Utente Loggato
    if (this.userLogged) {
      // Account Presente
      if (this.docUtente) {
        retCaption = this.docUtente.NOMINATIVO ? this.docUtente.NOMINATIVO : captionAccedi
      }
    }

    return retCaption;
  }

  btnFooterIcon() {
    let retIcon = '';
    const iconAccedi = 'log-in-outline';

    retIcon = iconAccedi;
    //Utente Loggato
    if (this.userLogged) {
      // Account Presente
      if (this.docUtente) {
        retIcon = this.docUtente.NOMINATIVO ? 'person-outline' : iconAccedi
      }
    }

    return retIcon;
  }
  //#endregion

  /**
   * Richiede gli impegni dell'utente
   * e successivamente prepara la listButtonImpegni
   */
  updateListImpegni() {
    let reqParam = new RequestParams();

    reqParam.top = 10;
    reqParam.child_level = 1;
    reqParam.decode.active = true;
    reqParam.orderBy = 'asc';

    reqParam.decode.foreignFields = Impegno.getReqForeignKeys();


    if (this.userLogged) {

      if (this.docUtente) {
        //Devo richiedere gli impegni

        //Imposto nel filtro l'Utente
        let filterImpegno = new Impegno(true);
        filterImpegno.IDUTENTE = this.docUtente.ID;

        filterImpegno.DATAORAINIZIO = new Date();
        //Applico una condizione per la dataorainizio
        filterImpegno.addFilterCondition(OperatorCondition.maggiore, 'DATAORAINIZIO');


        this.docStructureService.requestNew(filterImpegno, reqParam)
          .then(listImpegni => {

            this.myListImpegni = listImpegni;

            //Reimposto l'area impegni
            this.createButtonCardImpegni();

          })
          .catch(error => {
            this.myListImpegni = [];
            console.log(error);
          });
      }
      else {
        this.myListImpegni = [];
        //Reimposto l'area impegni
        this.createButtonCardImpegni();
      }
    }
    else {
      this.myListImpegni = [];
      //Reimposto l'area impegni
      this.createButtonCardImpegni();
    }


  }


  //#region AGENDA

  /**
   * Passa alla pagina dell'agenda
   */
  onClickShowAgenda() {
    this.navController.navigateForward('/agenda');
  }

  /**
   * Aggiornamento dell'agenda
   * Utente non loggato, utente Cliente -> NESSUNA AGENDA VISUALIZZATA
   */
  updateAgenda() {

    let richiediOccupazioni = false;
    let richiediMieiCorsi = false;

    if (this.selectedArea && this.selectedArea.ID) {
      //Utente Loggato
      if (this.userLogged) {
        // Account Presente
        if (this.docUtente) {

          if (this.docUtente.RUOLO == Ruolo.admin || this.docUtente.RUOLO == Ruolo.super) {
            richiediOccupazioni = true;
          }
          if (this.docUtente.isTrainer || this.docUtente.isAssistenteTrainer) {
            richiediMieiCorsi = true;
          }
          // else if (this.docUtente.RUOLO == Ruolo.collaboratore ) {
          //   switch(this.docUtente.MANSIONE) {
          //     case Mansione.assistenteTrainer:
          //       richiediMieiCorsi = true;
          //       break;
          //     case Mansione.trainer:
          //       richiediMieiCorsi = true;
          //       break;
          //     case Mansione.custode:
          //       richiediOccupazioni = true;
          //       break;
          //   }
          // }
        }
      }

      if (richiediMieiCorsi) {
        this.richiediAgendaTrainer();
      }
      else if (richiediOccupazioni) {
        // this.richiediAgendaOccupazione();
      }
      else {

        //Nascono l'agenda che non serve
        this.showAgenda = false;

        //Elimino l'agenda
        this.agendaCards = [];

      }

    }

  }

  /**
   * Richiesta Agenda Occupazioni
   */
  private richiediAgendaOccupazione() {

    if(this.listLocation && this.listLocation.length > 0){
      let idArea = this.selectedArea.ID;
      // this.showAgenda = true;

      this.listLocation.forEach(elLocation => {

        this.startService.requestOccupazioni(idArea, elLocation.ID, 4, undefined, new Date())
          .then(listOccupazioni => {
            elLocation._LISTOCCUPAZIONI = listOccupazioni;
          })
          .catch(error => {
            console.log(error);
    
          });
      })

    }

  }

  private richiediAgendaTrainer() {
    //qui stò richiedendo gli impegni che riguardano l'utente in quanto "collaboratore"
    this.startService.requestImpegniTrainer(this.docUtente.ID, new Date())
      .then(result => {

        this.myListImpegniTrainer = result;

      })
      .catch(error => {
        console.log(error);
      });
  }

  //#endregion
  getButtonCardTrainer(pianificazioneElem?: PianificazioneCorso) {
    if (pianificazioneElem) {
      return ButtonCard.getButtonAgendaFromPianificazioneCorso(pianificazioneElem);
    }
    else {
      let btnCard = new ButtonCard();

      btnCard.title = 'Nessun corso previsto per oggi';
      btnCard.nameicon = 'school-outline';
      btnCard.sloticon = "start";
      btnCard.color = "primary";
      btnCard.disabled = true;


      return btnCard
    }
  }

  getButtonEmptyOccupazione(){
    let btnCard = new ButtonCard();
    btnCard.title = 'Nessun evento presente oggi nella struttura';
    btnCard.subtitle = 'controlla domani';
    btnCard.nameicon ='calendar-outline';
    btnCard.sloticon = 'start';
    btnCard.color = 'primary';
    btnCard.disabled = true;
  

    return btnCard;
  }

  onClickImpegnoTrainer(pianificazioneElem: PianificazioneCorso) {
    this.navController.navigateForward('/agenda-trainer/' + pianificazioneElem.ID);
  }


  /**
   * se viene dato un valore a "componente", apre in modale quel componente, altrimenti apre la pagina di test
   */
  onTest() {

    const componente = undefined;
    const componentProps = undefined;

    let idArea = this.startService.areaSelectedValue.ID;

    const path:string = '/agenda-custode/' + idArea;


    if (componente) {
      this.modalController.create({
        component: componente,
        componentProps: componentProps
      })
        .then(elModal => {
          elModal.present();
        })

    }

    else if (path){
      this.navController.navigateForward(path)
    }

    else {
      this.navController.navigateForward('/test');
    }


  }

  goToPianificazioneDetail(docOccupazione: OccupazioneCampi){
    if(docOccupazione && docOccupazione.TIPO == SettoreAttivita.settorePrenotazione){
      this.navController.navigateForward(`/agenda-custode/${docOccupazione.ID}`)
    }
    else{
      this.showMessage('Puoi visualizzare solo il dettaglio delle prenotazioni');
    }
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


}
