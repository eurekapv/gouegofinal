import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sport } from 'src/app/models/sport.model';
import { StartService } from 'src/app/services/start.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sport-scroll',
  templateUrl: './sport-scroll.component.html',
  styleUrls: ['./sport-scroll.component.scss'],
})
export class SportScrollComponent implements OnInit {

  @Input() selectedSport: Sport;
  @Output() sportChanged= new EventEmitter<Sport>();


  sportList:Sport[]=[];
  subSportList: Subscription;

  sliderOpts={
      slidesPerView: 2.5,
      spaceBetween: 10,
      initialSlide: 0, //Dovrei farla variabile
      // Responsive breakpoints   
     breakpoints: {  
     
        // when window width is <= 320px     
        320: {       
           slidesPerView: 2.5,
           spaceBetween: 1     
        },     
        // when window width is <= 480px     
        480: {       
           slidesPerView: 2.5,       
           spaceBetween: 6     
        },   
    
        // when window width is <= 640px     
        640: {       
           slidesPerView: 2.5,       
           spaceBetween: 1     
        } 
    
     } 
    }

  constructor(private startService: StartService) { }

  ngOnInit() {
    //this.initProva();
    this.subSportList=this.startService.listSport.subscribe(data=>{
      this.sportList=data;
      this.selectedSport=this.sportList[0];
    })

    this.startService.requestSport();


  }

  initProva()
  {
    let a =new Sport();
    a.DENOMINAZIONE='Calcio';
    this.sportList.push(a);
    a =new Sport();
    a.DENOMINAZIONE='Basket';
    this.sportList.push(a);
    a =new Sport();
    a.DENOMINAZIONE='Pallavolo';
    this.sportList.push(a);
    a =new Sport();
    a.DENOMINAZIONE='Beach Volley';
    this.sportList.push(a);
    
  }

  onChangeSport(newSport: Sport)
  {
    this.sportChanged.emit(newSport);
  }
 

}
