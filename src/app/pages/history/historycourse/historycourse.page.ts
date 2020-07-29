import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { NavParams, LoadingController, ToastController, ModalController } from '@ionic/angular';
import { Corso } from 'src/app/models/corso.model';
import { Subscription } from 'rxjs';
import { StartService } from 'src/app/services/start.service';
import { Location } from 'src/app/models/location.model';
import { UtenteIscrizione } from 'src/app/models/utenteiscrizione.model';
import { Utente } from 'src/app/models/utente.model';
import { StatoIscrizione } from 'src/app/models/valuelist.model'
import { CalendarPage } from 'src/app/pages/location/course/detailcourse/calendar/calendar.page';
@Component({
  selector: 'app-historycourse',
  templateUrl: './historycourse.page.html',
  styleUrls: ['./historycourse.page.scss'],
})
export class HistorycoursePage implements OnInit {

  StatoPagamento : typeof StatoPagamento=StatoPagamento
  docUtente: Utente;
  subDocUtente: Subscription;

  myIscrizione: UtenteIscrizione = new  UtenteIscrizione(); //il documento iscrizione NON OBSERVABLE

  myCorso:Corso= new Corso();

  myLocation: Location= new Location();

  selectedLocation: Location = new Location(); //il documento location NON OBSERVABLE 


  constructor(private activatedRoute: ActivatedRoute,
              private startService: StartService,
              private loadingController: LoadingController,
              private toastController: ToastController,
              private modalController: ModalController) {              }

  ngOnInit() {
    //creo lo spinner e lo presento
    this.loadingController.create({
      message: 'Caricamento',
      spinner: 'circular',
      backdropDismiss: true
    }).then(loading=>{
      loading.present();
      //recupero l'id dell'iscrizione
      this.activatedRoute.paramMap.subscribe(route=>{
        if(route.has('historyId')){
          //se ho l'id dell'iscrizione, faccio la riciesta al server
          let idIscrizione=route.get('historyId');
          this.startService.requestIscrizioneById(idIscrizione).then(docIscrizione=>{
            //quando arriva la risposta, valorizzo la proprietà
            this.myIscrizione=docIscrizione;

            //#FIXME quando la subscribe va in errore, le promise non vengono rigettate
            
            //questo risolve la promise (e quindi dismette il loading) solo quando entrambe le promise
            //passate sono risolte
            Promise.all([this.startService.requestCorsoById(this.myIscrizione.IDCORSO),
                          this.startService.requestLocationByID(this.myIscrizione.IDLOCATION)])
                          .then(results=>{
                            //quando entrambe le richieste sono andate a buon fine, valorizzo le proprietà
                            this.myCorso=results[0];
                            this.myLocation=results[1];
                            //e chiudo il loading
                            loading.dismiss();
                            this.debug();
                          },).catch((error)=>{
                            //se invece almeno una richiesta non va a buon fine dismetto il loading
                            loading.dismiss();
                            //e stampo un messaggio di errore
                            this.showAlert('Errore nel caricamento');
                            console.log(error);

                          })
          })
        }
      })
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



  /* ****** CALENDAR ******** */
  onClickCalendar() {
    /* Apro in modale il calendario */
    this.modalController
    .create({
      component: CalendarPage,
      componentProps: {
        'myCorso': this.myCorso
      }
    })
    .then(formModal => {
      formModal.present();
    });

  }

  debug(){
    console.log('iscr');
    console.log(this.myIscrizione);
    console.log('corso');
    console.log(this.myCorso);
    console.log('location');
    console.log(this.myLocation);
  }

  showAlert(messaggio: string)
  {
    this.toastController.create({
      message:messaggio,
      duration:2000
    }).then(loading=>{
      loading.present();
    })
  }

  iscrizioneConfermata(){
    return this.myIscrizione.STATOISCRIZIONE==StatoIscrizione.confermata? true: false;
  }

  statoPagamento(): StatoPagamento{
    let statoPagamento: StatoPagamento;
    if (this.myIscrizione.RESIDUO!=0 && this.myIscrizione.VERSATO==0)
      statoPagamento=StatoPagamento.daPagare;
    else if (this.myIscrizione.RESIDUO!=0 && this.myIscrizione.VERSATO!=0)
      statoPagamento=StatoPagamento.pagatoInParte;
    else
      statoPagamento=StatoPagamento.pagato;

    return statoPagamento;
  }

  onClickPaga()
  {

  }

}

enum StatoPagamento{
  daPagare=0,
  pagatoInParte=10,
  pagato=20

}
