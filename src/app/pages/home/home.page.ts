import { Component, OnDestroy, OnInit } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Subscription } from 'rxjs';

import { Area } from 'src/app/models/area.model';
import { Location } from 'src/app/models/location.model';

import { ActionSheetController, NavController, ModalController } from '@ionic/angular';
import { Impegni  } from 'src/app/models/impegni.model';
import { SettoreAttivita, TipoCorso } from '../../models/valuelist.model';

import { Utente } from 'src/app/models/utente.model';
import { ButtonCard } from 'src/app/models/buttoncard.model';
import { NewsEvento } from 'src/app/models/newsevento.model';
import { NewLoginPage } from 'src/app/pages/auth/new-login/new-login.page'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{

  // Parametri Iniziali di Configurazione
  startConfig: StartConfiguration;
  startConfigListen: Subscription;

  //Identificativo Utente Loggato
  userLogged: boolean;
  userLoggedListen : Subscription;

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
  listImpegni: Impegni[]=[];

  // L'area viene recuperata dal subscribe
  selectedArea: Area;
  selectedAreaListen: Subscription;

  idAreaFav: string;
  listenIdAreaFav: Subscription;

  listButtonNoEvents: ButtonCard[] = []; //Bottoni da mostrare in assenza di eventi

  //Oggetti per le News
  noNewsCard: NewsEvento;
  listNews: NewsEvento[] = [];
  listNewsListen: Subscription;

  

  constructor(private startService: StartService,
              private actionSheetController: ActionSheetController,
              private navController: NavController,
              private modalCtrl:ModalController
              ) {

    //Recupero la card che dice che non ci sono eventi
    this.noNewsCard = NewsEvento.getNoNews();
 
    // Parametri di Configurazione Iniziale Applicazione
    this.startConfigListen = this.startService.startConfig
      .subscribe(element => {
        this.startConfig = element;
      });
    
    // Sottoscrivo alla ricezione delle Aree
    this.listAreeListen = this.startService.listAree
       .subscribe(aree => {
          this.listAree = aree;
    });

    //Mi sottoscrivo alla ricezione della Area Selezionata
    this.selectedAreaListen = this.startService.areaSelected
        .subscribe( areaSel => {
            //Cambio Area Selezionata
            this.selectedArea = areaSel;
            //Richiesta nuove News
            if (this.selectedArea) {
              this.startService.requestNews(this.selectedArea.ID, 3);
            }

    });

    // Sottoscrivo alla ricezione delle Locations
    this.listLocationListen = this.startService.listLocation
        .subscribe(locations => {
          this.listLocation = locations;
    })

    //Sottoscrivo all'ascolto di un utente loggato
    this.userLoggedListen = this.startService.utenteLogged.subscribe( element => {
      this.userLogged = element;

      //Reimposto i Bottoni NoEvents poichè dipende se loggato o no
      this.setButtonNoEvents();
    });

    //Sottoscrivo all'ascolto dell'Account
    this.docUtenteListen = this.startService.utente.subscribe(element => {
      this.docUtente = element;
    });

    /** Sottoscrizione alle news, qui copio sempre al massimo 3 News */
    this.listNewsListen = this.startService.listNews.subscribe(listNews => {
      this.listNews = listNews.filter((news,index) => {
          return (index < 3);
      })
    });

    
    //Impostazione Iniziale dei Bottoni relativi a NoEvents
    this.setButtonNoEvents();
  }

  ionViewDidEnter() {
    if (this.selectedArea) {
      if (!this.selectedArea.do_inserted) {
        //Richiesta delle News
        this.startService.requestNews(this.selectedArea.ID, 3);
      }
    }
  }

  //#region EVENTI PERSONALI

  /** Imposta i bottoni in caso di mancanza eventi */
  setButtonNoEvents() {
    //Recupero i bottoni da mostrare, a seconda sia loggato o no
    this.listButtonNoEvents = ButtonCard.getButtonHomeNoEvents(this.userLogged);
  }

  /**
   * Evento click su bottone No Events
   * @param btn Bottone cliccato
   */
  onClickButtonNoEvents(btn: ButtonCard) {
    if (btn) {
      switch (btn.functionCod) {
        case 'register':
            // Apro il Login
            this.openLogin();
          break;
      
        default:
          break;
      }
    }
  }

  //#endregion

  //#region NEWS ED EVENTI AZIENDA

  onClickShowAllNews() {
    this.navController.navigateForward(['/','news']);
  }

  /**
   * Evento Click sulla News
   * @param news News selezionata
   */
  onClickNews(news: NewsEvento) {
    if (news) {
      //Le News insert non sono vere, non posso aprirle
      if (!news.do_inserted) {
        this.navController.navigateForward(['/','news',news.ID]);
      }
    }
    
  }

  //#endregion

  _testAddImpegni() {
    //visto che il vettore di impegni ancora non è popolato, lo popolo manualmente per provare
    let prossimoImpegno=new Impegni();
    prossimoImpegno.DATAORAINIZIO=new Date(2020, 2, 12, 21,15, 0);
    prossimoImpegno.DESCRIZIONE="wash"
    prossimoImpegno.SETTORE=SettoreAttivita.settoreCorso;
    this.listImpegni.push(prossimoImpegno);

    prossimoImpegno=new Impegni();
    prossimoImpegno.DATAORAINIZIO=new Date(2020, 2, 12, 21,15, 0);
    prossimoImpegno.DESCRIZIONE="lore"
    prossimoImpegno.SETTORE=SettoreAttivita.settorePrenotazione;
    this.listImpegni.push(prossimoImpegno);
  }

  ngOnInit() {
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


    if (this.listNewsListen) {
      this.listNewsListen.unsubscribe();
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
    this.navController.navigateForward(['/','location',location.ID,'booking']);
  }

  /**
   * Scheda Location
   * @param location Location selezionata
   */
  onClickLocation(location: Location) {
    this.navController.navigateForward(['/','location',location.ID]);
  }



  /** Apertura Videata Login */
  async openLogin() {
    //this.navController.navigateForward(['/','auth','new-login']);
    const modal = await this.modalCtrl.create({
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
  showSceltaCentro(ev:any) {
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
  async presentActionSheet()
  {
    let buttonsArray: any[]=[];
    let singleButton: any;
    //popolo l'array di bottoni con i nomi delle aree operative
    for (const iterator of this.listAree) {
      singleButton={
        text: iterator.DENOMINAZIONE,
        icon: 'location-outline',
        handler: ()=>{
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
 btnFooterColor() {

   let color = 'primary';
  
    if (this.userLogged) {
      color = 'success'
    }
    else {
      color = 'primary'
    }
    
    return color;
 }

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
        retIcon = this.docUtente.NOMINATIVO ? 'list-circle-outline' : iconAccedi      
    }
  }

  return retIcon;
 }
 //#endregion

}
