import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Corso } from '../../../../models/corso.model';
import { StartService } from '../../../../services/start.service';
import { Utente } from 'src/app/models/utente.model';
import { SegmentCorsi } from 'src/app/models/valuelist.model';
import { FilterCorsi } from 'src/app/models/filtercorsi.model';


@Component({
  selector: 'app-listcourses',
  templateUrl: './listcourses.page.html',
  styleUrls: ['./listcourses.page.scss'],
})
export class ListcoursesPage implements OnInit {

  idLocation = '';
  listCorsi: Corso[] = [];
  corsiListen: Subscription;
  userLogged = false; //Utente loggato ricavato dal servizio
  listenUserLogged: Subscription; 
  docUser: Utente; //Informazioni utente loggato

  listenDocUser: Subscription;
  filtriCorsi: FilterCorsi;

  preferList: SegmentCorsi; 

  //Spinner di ricezione corsi
  spinnerCorsi = true;
  

  constructor(private router: ActivatedRoute, 
              private startService: StartService
              ) { 
    
    //Attivazione Spinner Ricezione corsi
    this.spinnerCorsi = true;

    //Richiedo l'utente e se è loggato
    this.listenUserLogged = this.startService.utenteLogged.subscribe(value => {
      this.userLogged = value;
      
    });

    //Richiedo lo User
    this.listenDocUser = this.startService.utente.subscribe(element => {
      this.docUser = element;
    })

    //Mostro tutti i corsi
    this.preferList = SegmentCorsi.tutti;

  }

  ngOnInit() {
    
    // Leggo idLocation 
    this.router.paramMap.subscribe( param => {
      
      if (param.has('locationId')) 
      {
        //Recupero del Location ID
        this.idLocation = param.get('locationId');
        
        //Inizializzazione dei Filtri
        this.filtriCorsi = this.startService
                                  .newFilterCorsi(this.idLocation);
        
        //Effettuo la richiesta dei corsi
        this.requestCorsi();

        //Mi sottoscrivo alla ricezione
        this.corsiListen = this.startService.listCorsi.subscribe (element => {
          this.spinnerCorsi = false;
          this.listCorsi = element;
        })


      }

    })
  }

  /**
   * Richiesta dei corsi
   */
  requestCorsi() {
    switch (this.preferList) {
      case SegmentCorsi.tutti:
          //Richiedo i corsi
          this.spinnerCorsi = true;
          this.startService.requestCorsi();
          break;
      case SegmentCorsi.mioLivello:
          //Richiedo i corsi con il documento utente per effettuare i filtri
          this.spinnerCorsi = true;
          this.startService.requestCorsi(this.docUser);
          break;

      default:
        break;
    }


    
  }

  /**
   * Modifica del Segment per la scelta dei corsi
   */
  onChangeSegmentCorsi(event: any) {

    if (event.target.value == 'corsiall')  {
      this.preferList = SegmentCorsi.tutti
      this.requestCorsi();
    }
    else if (event.target.value == 'corsiforme') {
      this.preferList = SegmentCorsi.mioLivello
      this.requestCorsi();
    }
    
  }


}
