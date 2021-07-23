import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Corso } from 'src/app/models/corso.model';
import { CorsoValutazione } from 'src/app/models/corsovalutazione.model';
import { CorsoValutazioneLivello } from 'src/app/models/corsovalutazionelivello.model';
import { Livello } from 'src/app/models/livello.model';
import { TipoCorso } from 'src/app/models/valuelist.model';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-valutazione-trainer',
  templateUrl: './valutazione-trainer.page.html',
  styleUrls: ['./valutazione-trainer.page.scss'],
})
export class ValutazioneTrainerPage implements OnInit {


  @Input() set docCorsoValutazione(value: CorsoValutazione) {

        let starIndex = 0;

        this.myCorsoValutazione = value;
        this.canUpdate = false;
        
        if (value) {
          
          /* ESSENDO UNA BOZZA POSSO MODIFICARE */
          if (value.FLAGBOZZA) {
            this.canUpdate = true;
          }
          if (value.VOTAZIONEFINALE != undefined) {
            starIndex = value.VOTAZIONEFINALE;
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
        this.setStars(starIndex);
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

  //Numero massime di star
  maxNumberStars: number = 5;


  constructor(private modalCtrl: ModalController,
              private startService:StartService,
              private actSheetController: ActionSheetController) {

                this.setStars(0);
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
    console.log('List =>' + this.showListIscritti);
    console.log('Alert =>' + this.showAlertNoIscritti);
  }

  /**
   * Imposta l'array per la valutazione del corso
   * @param chooseValue Valore 
   */
  setStars(chooseValue: number) {
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
   * Chiama il servizio passandogli l'id dell'oggetto corso, 
   * e restituisce la stringa dell'icona
   * @param corso l'oggetto corso per cui si richiede l'icona
   */
   getIcon(corso:Corso)
   {
     return this.startService.getSportIcon(corso.IDSPORT);
   }  
}
