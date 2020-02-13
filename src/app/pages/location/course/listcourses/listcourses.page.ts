import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Corso } from 'src/app/models/corso.model';
import { Subscription } from 'rxjs';
import { Sport } from 'src/app/models/sport.model';
import { StartService } from 'src/app/services/start.service';
import { ValueList, Sesso } from 'src/app/models/valuelist.model';

@Component({
  selector: 'app-listcourses',
  templateUrl: './listcourses.page.html',
  styleUrls: ['./listcourses.page.scss'],
})
export class ListcoursesPage implements OnInit {

  idLocation = '';
  collCorsi: Corso[] = [];
  listenCollCorsi: Subscription;
  collSport: Sport[]=[];
  listenCollSport: Subscription;
  
  receivedSport: boolean;
  receiveCorsi: boolean;
  showFilter: boolean;
  selectedSport: Sport;

  constructor(private router: ActivatedRoute, private startService: StartService) { 
    this.receivedSport = false;
    this.receiveCorsi = false;
    this.showFilter = false;
  }

  ngOnInit() {
    
    // Leggo idLocation 
    this.router.paramMap.subscribe( param => {
      
      if (param.has('locationId')) 
      {
        this.idLocation = param.get('locationId');
        
        //Chiedo gli Sport presenti
        this.startService.requestSport();

        //Mi metto in ascolto 
        this.listenCollSport = this.startService.listSport.subscribe(element => {
          this.collSport = element;
          this.receivedSport = true;
        });
      }

    })
  }


  switchFilter() {
    this.showFilter = !this.showFilter;    
  }

}
