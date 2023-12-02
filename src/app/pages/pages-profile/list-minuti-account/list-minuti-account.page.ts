import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Area } from 'src/app/models/struttura/area.model';
import { UtenteMinuti } from 'src/app/models/utente/utente-minuti.model';
import { UtenteTotaleMinuti } from 'src/app/models/utente/utente-totale-minuti.model';
import { Utente } from 'src/app/models/utente/utente.model';
import { LogApp } from 'src/app/models/zsupport/log.model';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-list-minuti-account',
  templateUrl: './list-minuti-account.page.html',
  styleUrls: ['./list-minuti-account.page.scss'],
})
export class ListMinutiAccountPage implements OnInit, OnDestroy {

  //Utente Loggato
  utenteDoc: Utente;
  subUtenteDoc: Subscription;

  //Dati Caricati
  loadedData: boolean = false;

  //Area
  areaDoc: Area;
  subArea: Subscription;

  //Lista
  listUtenteMinuti: UtenteMinuti[] = [];

  //Valori Pacchetti Utente
  utenteTotaleMinutiDoc: UtenteTotaleMinuti = new UtenteTotaleMinuti();
  minutiValue: number = 0;
  
  constructor(private startService: StartService,
              private navController: NavController) { }

  ngOnInit() {
    this.onListenUtente()
        .then(()=> {
          return this.onListenArea();
        })
        .then(()=> {
          return this.onRequestList();
        })
        .then(() => {
          //Tutti i dati ci sono
          this.loadedData = true;
        })
        .catch(error => {
          LogApp.consoleLog(error);
        })
    
  }

  ngOnDestroy(): void {
    this.onUnscribeAll();
  }

  /**
   * Effettua la richiesta della lista
   * @returns 
   */
  onRequestList(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        this.loadedData = false;
        if (this.areaDoc && this.utenteDoc) {
          this.startService.requestUtenteMinutiList(this.utenteDoc.ID, this.areaDoc.ID)
                           .then(listData => {
                             this.listUtenteMinuti = listData;

                             return this.startService.requestUtenteTotaleMinuti(this.utenteDoc.ID, this.areaDoc.ID);
                            })
                            .then(umDoc => {
                              if (umDoc) {
                                this.minutiValue = umDoc.TOTALEMINUTI;
                              }
                              else {
                                this.minutiValue = 0;
                              }
                              this.loadedData = true;
                              resolve();
                           })
                           .catch(err => {
                            this.minutiValue = 0;
                            reject(err);
                           })
        }
        else {
          this.listUtenteMinuti = [];
        }
    })
  }

  /**
   * Esecuzione del Refresh Dati
   * @param evento 
   */
  doRefresh(evento:any) {

    //Chiedo la lista
    this.onRequestList()
        .then(() => {

          if (evento && evento.target) {
            evento.target.complete();
          }

          this.startService.presentToastMessage("Dati aggiornati");
        })
        .catch(() => {
          if (evento && evento.target) {
            evento.target.complete();
          }

          this.startService.presentToastMessage("Errore aggiornamento");
        })

  }


  /**
   * Metto in ascolto delle modifiche dell'utente
   */
  onListenUtente(): Promise<void> {

    return new Promise<void>((resolve, reject) => {
      //Sottoscrivo all'ascolto dell'Account
      this.subUtenteDoc = this.startService.activeUtenteDoc$
                          .subscribe({
                            next: (element) => {
                                //Recupero utente
                                this.utenteDoc = element;
                                resolve();
                            },
                            error: (err) => {
                              reject(err);
                            }
                          });    
      
    })

  }

  /**
   * In ascolto delle modifiche dell'area
   */
  onListenArea(): Promise<void> {

    return new Promise<void>((resolve, reject) => {
      
      this.subArea = this.startService.areaSelected.subscribe({
        next: (areaDoc) => {
          this.areaDoc = areaDoc;
          resolve();
        },
        error: (err) =>  {
          reject(err);
        }
      })
    })
  }  


  /**
 * Tolgo la sottoscrizione a tutto
 */
  onUnscribeAll(): void {
   
    if (this.subUtenteDoc) {
      this.subUtenteDoc.unsubscribe();
    }
 
    if (this.subArea) {
      this.subArea.unsubscribe();
    }
  }

  //#region PULSANTE BACK
  /**
   * Ritorna un Array con il percorso di ritorno
   */
  get backPathArray():string[] {
    let retPath = ['/','appstart-home','tab-profile'];

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

}
