import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import {  LoadingController, ToastController, ModalController, NavController } from '@ionic/angular';
import { Corso } from 'src/app/models/corso.model';
import { Subscription } from 'rxjs';
import { StartService } from 'src/app/services/start.service';
import { Location } from 'src/app/models/location.model';
import { UtenteIscrizione } from 'src/app/models/utenteiscrizione.model';
import { Utente } from 'src/app/models/utente.model';
import { StatoIscrizione, StatoPagamento } from 'src/app/models/valuelist.model'
import { CalendarPage } from 'src/app/pages/location/course/detailcourse/calendar/calendar.page';

import { AllegatilistPage } from './allegatilist/allegatilist.page';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { AreaPaymentSetting } from 'src/app/models/areapaymentsetting.model';

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

  arPayments: AreaPaymentSetting[] = [];

  isDesktop: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private startService: StartService,
              private loadingController: LoadingController,
              private toastController: ToastController,
              private navCtr: NavController,
              private modalController: ModalController,
              private docstructrureService: DocstructureService) {              }

  ngOnInit() {
    
    this.isDesktop = this.startService.isDesktop;

    //creo lo spinner e lo presento
    this.loadingController.create({
      message: 'Caricamento',
      spinner: 'circular',
      backdropDismiss: true
    }).then(loading=>{
      //Mostro il loading
      loading.present();

      //recupero l'id dell'iscrizione
      this.activatedRoute.paramMap.subscribe(route=>{
        if(route.has('historyId')) {
          //se ho l'id dell'iscrizione, faccio la richiesta al server
          let idIscrizione = route.get('historyId');
          
          //Chiedo il documento della Iscrizione
          this.requestIscrizione(idIscrizione)
          .then(docIscrizione => {
                //quando arriva la risposta, valorizzo la proprietà
                this.myIscrizione = docIscrizione;
                //Chiedo lo scaricamento del documento corso e location
                if (this.myIscrizione) {
                  
                  //Richiedo la Location (senza controllare se arriva)
                  this.requestLocation(this.myIscrizione);

                  //Richiedo anche Corso e Corso Programma verificando l'arrivo
                  this.requestCorso(this.myIscrizione)
                    .then(docCorso => {
                        //Chiudo il loading Controller
                        this.loadingController.dismiss();
                        //Corso caricato
                        if (docCorso) {
                          //Corso caricato con la collction CORSOPROGRAMMA
                          this.myCorso = docCorso;
                        }
                        else {
                          //Corso nullo
                          this.showAlert('Corso non trovato');
                          this.goBack();
                        }
                    })
                    .catch(error => {
                      //Corso non recuperato
                      this.showAlert(error);
                      this.goBack();
                    });
                }
                else {
                  //Documento Iscrizione non recuperato
                  //Chiudo il loading
                  this.loadingController.dismiss();
                  //Documento nullo
                  this.showAlert('Iscrizione non trovata');
                  //Torno alla pagina di Lista
                  this.goBack();
                }
          })
          .catch(error => {
            //Errore recupero Iscrizione
            //Chiudo il loading
            this.loadingController.dismiss();
            this.showAlert(error);
            //Torno alla pagina di Lista
            this.goBack();
          });

        }
        else {
          //Non trovo idIscrizione

          //Chiudo il loading
          loading.dismiss();
          //Mostro un messaggio
          this.showAlert('Nessuna Iscrizione trovata');
          //Torno alla lista
          this.goBack();
        }
      })
    })
  }

  /**
   * Richiede al server una Iscrizione per ID
   * @param myIdIscrizione idIscrizione richiesta
   * @returns Promise<UtenteIscrizione>
   */
  requestIscrizione(myIdIscrizione:string): Promise<UtenteIscrizione> {

    return new Promise<UtenteIscrizione>((resolve, reject) => {
      if (myIdIscrizione && myIdIscrizione.length != 0) {
        this.startService.requestIscrizioneById(myIdIscrizione)
          .then(docIscrizione => {
            resolve(docIscrizione);
          })
          .catch(error => {
            reject(error);
          });
      }
      else {
        reject('Iscrizione non trovata');
      }

    });

  }

  /**
   * Richiede un documento correlato del Corso e la collection CORSOPROGRAMMA
   * @param docIscrizione documento della Iscrizione Corso
   */
  requestCorso(docIscrizione: UtenteIscrizione): Promise<Corso> {
    return new Promise<Corso>((resolve, reject) => {
    this.docstructrureService.getRelDoc(docIscrizione, ['IDCORSO'],1)
      .then(docCorso => {
      

        if (docCorso) {
          //Scarico la collection CORSO PROGRAMMA
          this.docstructrureService.loadCollection(docCorso, 'CORSOPROGRAMMA')
                  .then(() => {
                    resolve( docCorso );
                  })
                  .catch(error => {
                    reject(error);
                  });
        }
        else {
          reject('Corso non trovato');
        }

      })
      .catch(error => {
        console.log(error);
      });
    });

  }

  /**
   * Richiede un documento correlato della Location ed imposto this.myLocation
   * @param docIscrizione documento della Iscrizione Corso
   */
  requestLocation(docIscrizione: UtenteIscrizione): void {
    this.docstructrureService.getRelDoc(docIscrizione, ['IDLOCATION'],1)
      .then(docLocation => {
        this.myLocation = docLocation;
      })
      .catch(error => {
        console.log(error);
      });
  }


  /**
   * chiama il servizio passandogli l'id dell'oggetto corso, e restituisce la stringa dell'icona
   * @param corso l'oggetto corso per cui si richiede l'icona
   */
  getIcon(corso:Corso)
  {
    let myIdSport = '';
    if (corso) {
      myIdSport = corso.IDSPORT;
    }
    return this.startService.getSportIcon(myIdSport);
  }

  /**
   * Ritorna alla pagina della lista
   */
  goBack() {
    
    this.navCtr.navigateBack(['/','historylist']);
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

  }

  onClickAllegati(){
    this.modalController.create({
      component: AllegatilistPage,
      componentProps:{
        'myCorso' : this.myCorso
      }
    })
    .then(elModal => {
      elModal.present()
    })
  }

  /**
   * Visualizza un Toast con il mssaggio
   * @param messaggio Messaggio
   */
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



  onClickPaga()
  {

  }



  //funzione che recupera i metodi di pagamento e li inserisce in un array
  setPaymentFromArea() {
    //TODO: Per impostare l'array dei pagamenti bisogna scaricare 
    //dal server l'Area perchè potrebbe essere diversa dall'attuale
  }


}


