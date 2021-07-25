import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ModalController, ToastController } from '@ionic/angular';
import { Corso } from 'src/app/models/corso.model';
import { CorsoValutazione } from 'src/app/models/corsovalutazione.model';
import { CorsoValutazioneLivello } from 'src/app/models/corsovalutazionelivello.model';
import { Livello } from 'src/app/models/livello.model';
import { TipoCorso } from 'src/app/models/valuelist.model';
import { StartService } from 'src/app/services/start.service';
import {ActionSheetButton} from "@ionic/core";

@Component({
  selector: 'app-valutazione-trainer',
  templateUrl: './valutazione-trainer.page.html',
  styleUrls: ['./valutazione-trainer.page.scss'],
})
export class ValutazioneTrainerPage implements OnInit {


  @Input() set docCorsoValutazione(value: CorsoValutazione) {

        this.myCorsoValutazione = value;
        this.canUpdate = false;
        
        if (value) {
          
          /* ESSENDO UNA BOZZA POSSO MODIFICARE */
          if (value.FLAGBOZZA) {
            this.canUpdate = true;
          }
          if (value.VOTAZIONEFINALE != undefined) {
            this.starIndex = value.VOTAZIONEFINALE;
          }

          if (value.CORSOVALUTAZIONELIVELLO) {
            if (value.CORSOVALUTAZIONELIVELLO.length != 0) {
              
              //Questo è l'elenco delle valutazioni
              this.myListValutazioni = value.CORSOVALUTAZIONELIVELLO;
            }
            else {
              this.myListValutazioni = [];
            }
          }
          else {
            this.myListValutazioni = [];
          }

          //Decido se devo mostrare la lista Iscritti
          this.setShowListaIscritti();
        }

        //Imposto l'array per la valutazione
        this.setStars(this.starIndex, true);
  }

  @Input() set docCorso(value:Corso) {
    this.myCorso = value;
  }

  /**
   * Senza un elenco di Livelli non mostro nulla
   */
  @Input() set collLivelli(value : Livello[]) {
    this.myListLivelli = value;
    if (value.length == 0) {
      //Il Segment Button che crea la vista è disattivato
      this.showSegmentButton = false;
    }
  }


  canUpdate: boolean = false;
  cardCollapsed: boolean = true;

  //Oggetti interni alla pagina da utilizzare in HTML
  myCorsoValutazione:CorsoValutazione;
  myCorso: Corso;
  myListLivelli: Livello[] = [];
  myListValutazioni: CorsoValutazioneLivello[]=[];

  //Segmento visualizzato
  selectedView: number = 1;

  //Flag per la visualizzazione de Segment Button (Valutazione / Livello)
  //Se non arrivano Livelli non ha senso mostrare
  showSegmentButton: boolean = true;

  //Mostra un Alert quando non ci sono iscritti al corso
  showAlertNoIscritti: boolean = false;
  
  //Mostra la lista Iscritti con i livelli
  showListIscritti: boolean = false;

  //Stelle Valutazione
  collStars: boolean[] = [];
  starIndex = 0;


  //Numero massime di star
  maxNumberStars: number = 5;


  constructor(private modalCtrl: ModalController,
              private startService:StartService,
              private actSheetController: ActionSheetController,
              private toastController: ToastController,
              private alertController: AlertController) {

                //Imposto 0 Stelle forzando
                this.setStars(0, true);
               }

  ngOnInit() {
  }


  /**
   * Imposta il boolean per mostrare la Lista Iscritti
   */
  setShowListaIscritti() {
    let value: boolean = false;
    if (this.myListValutazioni) {
      if (this.myListValutazioni.length != 0) {
          value = true;
      }
    }

    this.showListIscritti = value;
    this.showAlertNoIscritti = !value;
  }

  /**
   * Imposta l'array per la valutazione del corso
   * @param chooseValue Valore 
   * @param force L'impostazione viene effettuata anche se la scheda è bloccata
   */
  setStars(chooseValue: number, force:boolean = false ) {
    if (this.canUpdate || force) {

      //Valore Massimo Valutazione 
      if (this.collStars.length == 0) {
        //Devo creare l'array
        for (let index = 0; index < this.maxNumberStars; index++) {
          if (index + 1 <= chooseValue) {
            this.collStars.push(true);
          }
          else {
            this.collStars.push(false);
          }
          
        }
      }
      else {
        for (let index = 0; index < this.collStars.length; index++) {
          if (index + 1 <= chooseValue) {
              this.collStars[index]=true;
          }
          else {
              this.collStars[index]=false;
          }
          
        }
      }
  
      //Valore delle stelle 
      this.starIndex = chooseValue;

    }

    
  }


  /**
   * L'utente vuole applicare lo stesso Livello Finale a tutti
   */
  chooseLivelloFinale() {
    let buttonsArray: any[]=[];
    let singleButton: any;

    if (this.canUpdate) {

      if (this.myListLivelli && this.myListLivelli.length != 0) {
  
          //Popolo i Bottoni
          for (const iterator of this.myListLivelli) {
            singleButton = {
              text: iterator.DENOMINAZIONE,
              handler: ()=>{
                //Applico lo stesso livello a tutti
                this.applyLivelloFinaleForAll(iterator);
              }
            }
      
            buttonsArray.push(singleButton);
          }
  
          //Pulsante Annulla
          singleButton = {
            text:'Annulla',
            icon:'arrow-undo-sharp',
            role: 'cancel'
          }
          buttonsArray.push(singleButton);
          
          this.actSheetController.create({
            header: 'Quale livello applichi a tutti i partecipanti ?',
            buttons: buttonsArray
          })
          .then(elAction => {
            elAction.present();
          });
  
      }

    }
  }

  /**
   * Applica a tutti i partecipanti lo stesso livello finale
   * @param idLivello 
   */
  applyLivelloFinaleForAll(myLivello: Livello) {
    if (myLivello && this.myListValutazioni) {

      this.myListValutazioni.forEach(element => {
        element.IDLIVELLOFINALE = myLivello.ID  
      });
    }
  }


  /**
   * Click per effettuare l'Accordion 
   */
  onClickCollapsed() {
    if (this.cardCollapsed) {
      this.cardCollapsed = false;
    }
    else {
      this.cardCollapsed = true;
    }
  }


  /**
   * Modificato il livello in una persona
   * @param event 
   */
  onChangeLivello(event:any) {
    //Non ho bisogno di aggiornare nulla credo
    console.log(this.myCorsoValutazione);
  }


  /**
   * Conferma e salvataggio Modifiche
   */
  onConfirm() {

    let buttonsArray: ActionSheetButton[]=[];
    let singleButton: ActionSheetButton;

    //Posso aggiornare 
    if (this.canUpdate) {

      //Bottone Bozza
      singleButton = {
        text: 'Per modificarla in seguito', 
        icon: 'save-outline',
        handler: () => {
          this.confirmSavingAs(true);
        }
      }
      buttonsArray.push(singleButton);

      //Bottone Definitivo
      singleButton = {
        text: 'In modo definitivo', 
        icon: 'document-lock-outline',
        handler: () => {
          this.confirmSavingAs(false);
        }
      }
      buttonsArray.push(singleButton);

      //Pulsante Annulla
      singleButton = {
        text:'Annulla',
        icon:'arrow-undo-sharp',
        role: 'cancel'
      }
      buttonsArray.push(singleButton);      

      this.actSheetController.create({
        header: 'Come stai salvando la Scheda di Valutazione',
        buttons: buttonsArray
      })
      .then(elAction => {
        elAction.present();
      });

    }
    else {
      //Chiudo la videata normalmente
      this.modalCtrl.dismiss();
    }


  }

  /**
   * 
   * @param flagBozza Salva il modalità Bozza o definitiva
   */
  confirmSavingAs(flagBozza:boolean) {
    //Handler di conferma salvataggio

    if (flagBozza) {
      this.myCorsoValutazione.FLAGBOZZA = true;
    }
    else {
      this.myCorsoValutazione.FLAGBOZZA = false;
    }

    this.myCorsoValutazione.IDUTENTE = this.startService.actualUtente.ID;
    this.myCorsoValutazione.NOMINATIVO = this.startService.actualUtente.NOMINATIVO;
    this.myCorsoValutazione.VOTAZIONEFINALE = this.starIndex;

    this.startService.requestForSaveSchedaValutazioneCorso(this.myCorsoValutazione)
                     .then(risposta => {

                       if (risposta.result) {

                          this.showMessage('Scheda salvata correttamente','toast');

                          this.modalCtrl.dismiss();
                       }
                       else {
                          //Mostro un messaggio di errore
                          this.showMessage(risposta.message);
                       }
                     })
                     .catch(error => {
                          this.showMessage(error);
                     })
  }

  /**
   * Evento scatenato al cambio di Segmento
   * Il valore selectedView è legato con ngModel
   * @param $event 
   */
  onChangeSegment($event) {

  }

  /**
   * Chiusura Modale
   */
  closeModal() {
    this.modalCtrl.dismiss();
  }


  /**
   * Indica se mostrare o no il Bollino Prova
   * @returns TRUE/FALSE
   */
   showFabProva():boolean {
    let show:boolean = false; 
    if (this.myCorso && this.myCorso.TIPO == TipoCorso.prova) {
      show = true;
    }

    return show;

  }   

  /**
   * Visualizza un messaggio
   */
  showMessage(messaggio: string, type?:'toast'|'alert') {

    if (type == 'alert') {

      let alertOptions = {
        message: messaggio,
        buttons: ['OK']
      }


      this.alertController.create(alertOptions)
            .then(elAlert => {
                    elAlert.present();
            });

    }
    else {

      this.toastController.create({
        message: messaggio,
        duration: 3000
      })
      .then(elToast => {
        elToast.present();
      })

    }
  }  


  /**
   * Chiama il servizio passandogli l'id dell'oggetto corso, 
   * e restituisce la stringa dell'icona
   * @param corso l'oggetto corso per cui si richiede l'icona
   */
   getIcon(corso:Corso)
   {
     return this.startService.getSportIcon(corso.IDSPORT);
   }  
}
