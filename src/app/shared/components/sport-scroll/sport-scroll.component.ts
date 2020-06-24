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
  @Input() sportList:Sport[];
  

  sliderOpts={
      slidesPerView: 2.5,
      spaceBetween: 0,
      initialSlide: 0, //Dovrei farla variabile
      // Responsive breakpoints   
    //  breakpoints: {  
     
    //     // when window width is <= 320px     
    //     320: {       
    //        slidesPerView: 2.5,
    //        spaceBetween: 1     
    //     },     
    //     // when window width is <= 480px     
    //     480: {       
    //        slidesPerView: 2.5,       
    //        spaceBetween: 6     
    //     },   
    
    //     // when window width is <= 640px     
    //     640: {       
    //        slidesPerView: 2.5,       
    //        spaceBetween: 1     
    //     },

    //     1024: {
    //       slidesPerView: 2.5,       
    //       spaceBetween: 1  
    //     }


    
    //  } 
    }

  constructor(private startService: StartService) { }

  ngOnInit() {

  }

  ionViewDidEnter()
  {

  }

  onChangeSport(newSport: Sport)
  {
    this.sportChanged.emit(newSport);
  }
 

}
