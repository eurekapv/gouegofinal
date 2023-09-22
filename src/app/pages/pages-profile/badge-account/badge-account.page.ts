import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Utente } from 'src/app/models/utente.model';
import { StartService } from 'src/app/services/start.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-badge-account',
  templateUrl: './badge-account.page.html',
  styleUrls: ['./badge-account.page.scss'],
})
export class BadgeAccountPage implements OnInit, OnDestroy {

  actualUtente: Utente;
  docActualUtenteListen: Subscription;
  
  constructor(
          private navController: NavController,
          private startService: StartService) { 

            //Ascolto l'utente 
            this.docActualUtenteListen = this.startService.activeUtenteDoc$.subscribe(element => {
              this.actualUtente = element;
            });
          }

  
  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.docActualUtenteListen) {
      this.docActualUtenteListen.unsubscribe();
    }
  }  


  //#region GESTIONE BACK
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
   * Torno alla pagina del profilo
   */
  onGoToBack() {
    this.navController.navigateBack(this.backPathArray);
  }   

  //#endregion  

}
