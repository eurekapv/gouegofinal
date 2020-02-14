import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Corso } from '../../../../models/corso.model';
import { StartService } from '../../../../services/start.service';


@Component({
  selector: 'app-listcourses',
  templateUrl: './listcourses.page.html',
  styleUrls: ['./listcourses.page.scss'],
})
export class ListcoursesPage implements OnInit {

  idLocation = '';
  listCorsi: Corso[] = [];
  corsiListen: Subscription;
    
  //Spinner di ricezione corsi
  spinnerCorsi = true;
  

  constructor(private router: ActivatedRoute, 
              private startService: StartService
              ) { 
    
    //Attivazione Spinner Ricezione corsi
    this.spinnerCorsi = true;

  }

  ngOnInit() {
    
    // Leggo idLocation 
    this.router.paramMap.subscribe( param => {
      
      if (param.has('locationId')) 
      {
        //Recupero del Location ID
        this.idLocation = param.get('locationId');
        
        //Impostazione della Location come filtro        
        this.startService.initFilterCorsi(this.idLocation);

        //Richiedo i corsi
        this.startService.requestCorsi();

        //Mi sottoscrivo alla ricezione
        this.corsiListen = this.startService.listCorsi.subscribe (element => {
          this.spinnerCorsi = false;
          this.listCorsi = element;
        })


      }

    })
  }




}
