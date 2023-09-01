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

}
