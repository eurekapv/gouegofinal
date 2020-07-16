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

  myIscrizione: Utenteiscrizione; //il documento iscrizione NON OBSERVABLE

  myCorso:Corso= new Corso();
  subMyCorso: Subscription;

  selectedLocation: Location = new Location(); //il documento location NON OBSERVABLE 

  userLogged: boolean;
  subUserLogged: Subscription;


  //TODO da finire e controllare ("myIscrizione viene recuperato in mod. non observable, capire se va bene")

  constructor(private activatedRoute: ActivatedRoute,
              private startService: StartService) {

                this.myIscrizione=new Utenteiscrizione();
              }

  ngOnInit() {
    //mi sottoscrivo al corso
    this.subMyCorso=this.startService.selectedCorso.subscribe(corso=>{
      this.myCorso=corso;
    });
    
    this.subUserLogged=this.startService.utenteLogged.subscribe(data=>{
      this.userLogged=data;
      if(this.userLogged){
        //recupero l'utente
        this.subDocUtente=this.startService.utente.subscribe(utente=>{
          this.docUtente=utente
          //recupero l'id dell'iscrizione
          this.activatedRoute.paramMap.subscribe(route=>{
            if(route.has('historyId')){
              //se ho l'id dell'iscrizione, faccio la riciesta al server
              let idIscrizione=route.get('historyId');
              this.startService.requestUtenteIscrizioni(this.docUtente.ID).then(()=>{
                //poi recupero l'iscrizione tramite l'id
                this.myIscrizione=this.startService.getIscrizioneById(idIscrizione);
                //ruchiedo la location
                this.selectedLocation=this.startService.findLocationByID(this.myIscrizione.IDLOCATION);
                console.log(this.myIscrizione);
                this.startService.requestCorsi().then(()=>{
                  //faccio la richiesta per ottenere il corso (la sottoscrizione è stata fatta all'inizio)
                  this.startService.requestCorsoProgramma(this.myIscrizione.IDCORSO).then(()=>{
                    console.log(this.myCorso);
                  })
                })
              })
            }
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
