import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { Corso } from 'src/app/models/corso.model';
import { Subscription } from 'rxjs';
import { StartService } from 'src/app/services/start.service';
import { Location } from 'src/app/models/location.model';
import { Utenteiscrizione } from 'src/app/models/utenteiscrizione.model';
import { Utente } from 'src/app/models/utente.model';
import { start } from 'repl';

@Component({
  selector: 'app-historycourse',
  templateUrl: './historycourse.page.html',
  styleUrls: ['./historycourse.page.scss'],
})
export class HistorycoursePage implements OnInit {

  docUtente: Utente;
  subDocUtente: Subscription;

  myIscrizione: Utenteiscrizione = new  Utenteiscrizione(); //il documento iscrizione NON OBSERVABLE

  myCorso:Corso= new Corso();

  myLocation: Location= new Location();

  selectedLocation: Location = new Location(); //il documento location NON OBSERVABLE 


  constructor(private activatedRoute: ActivatedRoute,
              private startService: StartService) {              }

  ngOnInit() {
  
          this.activatedRoute.paramMap.subscribe(route=>{
            if(route.has('historyId')){
              //se ho l'id dell'iscrizione, faccio la riciesta al server
              let idIscrizione=route.get('historyId');
              this.startService.requestIscrizioneById(idIscrizione).then(docIscrizione=>{
                this.myIscrizione=docIscrizione;
                console.log('iscr');
                console.log(this.myIscrizione);
                
                //quando è arrivata l'iscrizione, richiedo al server il corso usando l'IDCORSO
                this.startService.requestCorsoById(this.myIscrizione.IDCORSO).then(docCorso=>{
                  this.myCorso=docCorso;
                  console.log('corso');
                  console.log(this.myCorso);
                })
                //poi chiedo anche la location
                this.startService.requestLocationByID(this.myIscrizione.IDLOCATION).then(docLocation=>{
                  this.myLocation= docLocation;
                  console.log('location');
                  console.log(this.myLocation);
                })
              })
              
          }
        })

      }
  /**
   * chiama il servizio passandogli l'id dell'oggetto corso, e restituisce la stringa dell'icona
   * @param corso l'oggetto corso per cui si richiede l'icona
   */
  getIcon(corso:Corso)
  {
    return this.startService.getSportIcon(corso.IDSPORT);
  }

  onClickCalendar(){

  }

}
