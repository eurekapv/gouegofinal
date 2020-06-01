import { Component, OnInit } from '@angular/core';
import { StartService } from 'src/app/services/start.service';
import { PrenotazionePianificazione } from 'src/app/models/prenotazionepianificazione.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { not } from '@angular/compiler/src/output/output_ast';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookingsummary',
  templateUrl: './bookingsummary.page.html',
  styleUrls: ['./bookingsummary.page.scss'],
})
export class BookingsummaryPage implements OnInit {

  actualPrenotazione: PrenotazionePianificazione;
  
  constructor(private startService:StartService,
              private router: ActivatedRoute,
              private navCtrl: NavController) {

  }

  ngOnInit() {
    let idBook = '';
    let idLocation = '';
    let result = true;

    this.router.paramMap.subscribe( param => {
      
      if (param.has('locationId')) {
        idLocation = param.get('locationId');
        console.log('Location: ' + idLocation);
      }

      if (param.has('bookId')) 
      {
        idBook = param.get('bookId');

        this.actualPrenotazione = this.startService.actualPrenotazione;

        console.log('Attuale');
        console.log(this.actualPrenotazione);

        //Id Book è diverso da quello in arrivo dalla prenotazione
        if (idBook !== this.actualPrenotazione.ID) {
          result = false;
        }
        
      }
      else {
        result = false;
      }
      
      if (!result) {
        if (idLocation.length !== 0) {
          this.navCtrl.navigateForward(['/','location',idLocation,'booking']);
        }
        else {
          this.navCtrl.navigateForward(['/']);
        }
      }

    });
  }

}
