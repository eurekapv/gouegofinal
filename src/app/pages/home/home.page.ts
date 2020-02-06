import { Component, OnDestroy, OnInit } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { StartConfiguration } from 'src/app/models/start-configuration.model';
import { Subscription } from 'rxjs';

import { Area } from 'src/app/models/area.model';
import { Location } from 'src/app/models/location.model';

import { ActionSheetController } from '@ionic/angular';
import { Attivita, SettoreAttivita } from 'src/app/models/attivita.model';
import { Router } from '@angular/router';
import { Utente } from 'src/app/models/utente.model';

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

  //Account Loggato
  account: Utente;
  accountListen: Subscription;

  // Elenco delle Aree
  listAree: Area[] = [];
  listAreeListen: Subscription;

  // Elenco delle Location da mostrare
  listLocation: Location[] = [];
  listLocationListen: Subscription;

  //Elenco delle prossime attività
  listImpegni: Attivita[]=[];

  // L'area viene recuperata dal subscribe
  selectedArea: Area;

  constructor(private startService: StartService,
              private actionSheetController: ActionSheetController,
              private router: Router
              ) {
 
    // Parametri di Configurazione Iniziale Applicazione
    this.startConfigListen = this.startService.startConfig
      .subscribe(element => {

        this.startConfig = element;

        //C'è un'area selezionata
        if (element.idAreaSelected) {
          
          console.log('Area arrivata');

          //Chiedo al servizio il documento dell'Area Selezionata
          this.startService.getArea(element.idAreaSelected).subscribe(elArea => {
            this.selectedArea = elArea;
          });
        } 
      });
    
    // Sottoscrivo alla ricezione delle Aree
    this.listAreeListen = this.startService.listAree.subscribe(aree => {
      this.listAree = aree;
      
    });

    // Sottoscrivo alla ricezione delle Locations
    this.listLocationListen = this.startService.listLocation.subscribe(locations => {
      this.listLocation = locations;
      
    })

    //Sottoscrivo all'ascolto di un utente loggato
    this.userLoggedListen = this.startService.userLogged.subscribe( element => {
      this.userLogged = element;
    });

    //Sottoscrivo all'ascolto dell'Account
    this.accountListen = this.startService.account.subscribe(element => {
      this.account = element;
    })

    

  }

  _testAddImpegni() {
    //visto che il vettore di impegni ancora non è popolato, lo popolo manualmente per provare
    let prossimoImpegno=new Attivita();
    prossimoImpegno.DATAORAINIZIO=new Date(2020, 2, 12, 21,15, 0);
    prossimoImpegno.DESCRIZIONE="wash"
    prossimoImpegno.SETTORE=SettoreAttivita.settoreCorso;
    this.listImpegni.push(prossimoImpegno);

    prossimoImpegno=new Attivita();
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
  }


  /** Gestisce il Click del pulsante di footer */
  onClickfooterButton() {
    if (this.userLogged) {
      // Apro lo Storico
    }
    else {
      // Apro il Login
      this.openLogin();
    }
  }

  /** Apertura Videata Login */
  openLogin() {
    this.router.navigate(['/','auth','login']);
  }

  /** funzione per mostrare il popup di scelta campo */
  async presentActionSheet()
  {
    let buttonsArray: any[]=[]
    let singleButton: any;
    //popolo l'array di bottoni con i nomi delle aree operative
    for (const iterator of this.listAree) {
      singleButton={
        text: iterator.DENOMINAZIONE,
        icon: 'pin',
        handler: ()=>{
        
          //Chiedo al servizio di cambiare l'Area Selezionata
          this.startService.changeIdAreaSelected(iterator.ID);
          // Non devo fare niente altro, il servizio emette l'evento di cambio e aggiorna tutto

        }
      }

      buttonsArray.push(singleButton);
    }
    const actionSheet = await this.actionSheetController.create
    ({
      header: 'Scegli il Centro',
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
      color = 'secondary'
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
    if (this.account) {
        retCaption = this.account.NOMINATIVO ? this.account.NOMINATIVO : captionAccedi      
    }
  }

  return retCaption;
 }

 btnFooterIcon() {
  let retIcon = '';
  const iconAccedi = 'log-in';

  retIcon = iconAccedi;
  //Utente Loggato
  if (this.userLogged) {
    // Account Presente
    if (this.account) {
        retIcon = this.account.NOMINATIVO ? 'list-box' : iconAccedi      
    }
  }

  return retIcon;
 }
 //#endregion

}
