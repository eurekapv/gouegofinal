import { Component, OnInit } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appstart-home',
  templateUrl: './appstart-home.page.html',
  styleUrls: ['./appstart-home.page.scss'],
})
export class AppstartHomePage implements OnInit {

  constructor(private startService: StartService, ) { }

  //Identificativo Utente Loggato
  flagUserLogged: boolean = false;
  subFlagUserLogged: Subscription;

  ngOnInit(): void {
    this.onListenUtente();
  }

  ngOnDestroy(): void {
    this.onUnscribeAll();
  }

  /**
   * Metto in ascolto delle modifiche dell'utente
   */
  onListenUtente(): void {

    //Sottoscrivo all'ascolto di un utente loggato
    this.subFlagUserLogged = this.startService.flagUtenteIsLoggato$
          .subscribe(element => {
              //Recupero l'utente
              this.flagUserLogged = element;    
          });
  }  


  /**
   * Tolgo la sottoscrizione a tutto
   */
  onUnscribeAll(): void {
    if (this.subFlagUserLogged) {
      this.subFlagUserLogged.unsubscribe();
    }   
  }

}
