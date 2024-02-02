import { Component, OnInit, ViewChild } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { Subscription } from 'rxjs';
import { Area } from 'src/app/models/struttura/area.model';

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

  //Area
  areaDoc: Area;
  subArea: Subscription;  
  flagShowShop: boolean = false;


  ngOnInit(): void {
    this.onListenUtente();
    this.onListenArea();
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
   * In ascolto delle modifiche dell'area
   */
  onListenArea(): void {
    this.subArea = this.startService.areaSelected$.subscribe({
      next: (areaDoc) => {
        this.areaDoc = areaDoc;
        if (this.areaDoc && this.areaDoc.APPSHOPONLINE == true) {

          this.flagShowShop = true;          
        }
        else {
          this.flagShowShop = false;
        }
      },
      error: (err) =>  {
        this.areaDoc = null;
        this.flagShowShop = false;
      }
    })
  }  


  /**
   * Tolgo la sottoscrizione a tutto
   */
  onUnscribeAll(): void {
    if (this.subFlagUserLogged) {
      this.subFlagUserLogged.unsubscribe();
    }  
    
    if (this.subArea) {
      this.subArea.unsubscribe();
    }    
  }

}
