import { Component, OnInit } from '@angular/core';
import { SlotTime } from 'src/app/models/imdb/slottime.model';
import { LogApp } from 'src/app/models/log.model';


@Component({
  selector: 'app-smstest',
  templateUrl: './smstest.page.html',
  styleUrls: ['./smstest.page.scss'],
})
export class SmstestPage implements OnInit {

  OTP: string[] = [];
  showOTPInput: boolean = false;
  OTPmessage: string = 'An OTP is sent to your number. You should receive it in 15 s'
  email = '';
  password = '';
  autoTab = false;
  
  timeSlots: SlotTime[]; //Slot Tempo


  constructor() {
    this.createSlotTime();
   }


  createSlotTime() {
    this.timeSlots = SlotTime.getArrayStandardSlot({anno:2020, mese: 3, giorno: 2}, 
                                  {ore:10, minuti:0}, 
                                  {ore:15, minuti:0},
                                  30);
    
  }

  ngOnInit() {
  }

  next() {
    this.showOTPInput = true;
    this.autoTab = true;
  }

  register() {

  }

  onChange(evento: any) {
    let valore = '';
    valore = evento.target.value;

    console.log('Valore: ' + evento.target.value);
    console.log('Elemento: ' + evento.target.id)
    
    if (valore.length === 0) {
      console.log('Vuoto')
    }
    else {
      console.log('Pieno');
    }

    console.log('Valore complessivo ' + this.OTP);

    console.log(evento);
  }

}
