import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/models/utente.model';
import { Subscription } from 'rxjs';
import { UtenteService } from 'src/app/services/utente.service';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-sportlevels',
  templateUrl: './sportlevels.page.html',
  styleUrls: ['./sportlevels.page.scss'],
})
export class SportlevelsPage implements OnInit {

  utente:Utente
  utenteListener: Subscription;

  constructor(private startService: StartService)  {
    this.utenteListener=this.startService.utente.subscribe(data=>{
      this.utente=data;
    })
   }

  ngOnInit() {
    
  }

}
