import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {

  OTP: string[] = [];
  showOTPInput: boolean = false;
  OTPmessage: string = 'An OTP is sent to your number. You should receive it in 15 s'
  email = '';
  password = '';
  autoTab = false;

  constructor() { }

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
