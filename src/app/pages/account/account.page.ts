import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/models/utente.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  docUtente= new Utente();

  constructor() { }

  ngOnInit() {
  }

}
