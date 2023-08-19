import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetButton, ActionSheetController, LoadingController, NavController } from '@ionic/angular';
import { RequestDecode, RequestParams } from 'src/app/library/models/requestParams.model';
import { DocstructureService } from 'src/app/library/services/docstructure.service';
import { Corso } from 'src/app/models/corso.model';
import { CorsoValutazione } from 'src/app/models/corsovalutazione.model';
import { CorsoValutazioneLivello } from 'src/app/models/corsovalutazionelivello.model';
import { Livello } from 'src/app/models/livello.model';
import { LogApp } from 'src/app/models/log.model';
import { TipoCorso } from 'src/app/models/valuelist.model';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-detail-valutazione',
  templateUrl: './detail-valutazione.page.html',
  styleUrls: ['./detail-valutazione.page.scss'],
})
export class DetailValutazionePage implements OnInit {

  constructor(private navController: NavController,
              private route: ActivatedRoute,
              private startService:StartService,
              private actSheetController: ActionSheetController,
              private loadingController: LoadingController,
              private docStructureService: DocstructureService,) {

      //Imposto 0 Stelle forzando
      this.setStars(0, true);
     }

  idCorso: string;


  //Segnala un errore di caricamento dei dati
  loadingError = false;
  messageError: string = '';
  loadingComplete = false; //Caricamento dati concluso

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




  ngOnInit() {

    //Recupero idCorso
    this.route.paramMap.subscribe(data => {
      //Recupero informazioni
      LogApp.consoleLog(data);

      this.idCorso = data.get('corsoId');

      console.log(this.idCorso);
      
      //Recupero tutti i documenti necessari 
      this.requestDocs()
            .then(() => {
              this.loadingComplete = true;
                //Possiamo iniziare
                this.startService.presentToastMessage('Valutazione recuperata');
            })
            .catch(error => {
              
              this.loadingComplete = true;

              if (typeof error == 'string') {
                this.messageError = error;
              }
              else {
                this.messageError = error.message;
              }
              this.loadingError = true;
            })
    })


  }

  /**
   * Richiesta dei documenti necessari all'interfaccia
   */
  requestDocs():Promise<void> {

    return new Promise<void>((resolve, reject) => {
        if (this.idCorso && this.idCorso.length != 0) {

          let reqParam: RequestParams;
          let reqDecode: RequestDecode;
          let filterCorso = new Corso(true);

          filterCorso.ID = this.idCorso;
          reqDecode = new RequestDecode();
          reqDecode.active = true;

          reqParam = new RequestParams();
          reqParam.decode = reqDecode;

          //
          this.loadingController.create({
            message: 'Caricamento...',
            spinner: 'circular',
            backdropDismiss: true      
          })
          .then(elLoading => {
            //Mostro il loading
            elLoading.present();

            //Richiedo al server tutti i dati necesssari
            this.docStructureService.requestNew(filterCorso, reqParam)
                                    .then(listCorsi => {
                                      console.log(listCorsi);
                                      return (listCorsi && listCorsi.length != 0 ? listCorsi[0]: null);
                                    })
                                    .then(singleCorso => {
                                      //Memorizzo il corso
                                      this.myCorso = singleCorso;
                                      return singleCorso;
                                    })
                                    .then(singleCorso => this.startService.requestSchedaValutazioneCorso(singleCorso.ID))
                                    .then(singleScheda => {
                                      //Salvo la scheda di valutazione
                                      this.myCorsoValutazione = singleScheda;
                                      //Imposto i parametri operativi
                                      this.setParamsFromValutazione(singleScheda);
                                      return singleScheda;
                                    })
                                    .then(() => this.startService.requestLivelliForSport(this.myCorso.IDSPORT))
                                    .then(listLivelliSport => {
                                      //Memorizzo anche i livelli
                                      this.myListLivelli = listLivelliSport;
                                      //Senza livelli non mostro il segment Button
                                      this.setParamsFromLivelli(listLivelliSport);

                                      //Chiudo il loading
                                      elLoading.dismiss();

                                      resolve();
                                    })
                                    .catch(error => {
                                      //Chiudo il loading
                                      elLoading.dismiss();

                                      reject(error);
                                    })

          })



        }
        else {
          reject('Corso non specificato');
        }
    })
  }

  /**
   * Sistema i parametri di interfaccia per effettuare la valutazione
   * @param valutationDoc 
   */
  setParamsFromValutazione(valutationDoc: CorsoValutazione): void {
    this.canUpdate = false;

    if (valutationDoc) {

      if (valutationDoc.FLAGBOZZA) {
        this.canUpdate = true;
      }

      if (valutationDoc.VOTAZIONEFINALE != undefined) {
        this.starIndex = valutationDoc.VOTAZIONEFINALE;
        //Imposto l'array per la valutazione
        this.setStars(this.starIndex, true);
      }

      if (valutationDoc.CORSOVALUTAZIONELIVELLO) {
        if (valutationDoc.CORSOVALUTAZIONELIVELLO.length != 0) {
          
          //Questo è l'elenco delle valutazioni
          this.myListValutazioni = valutationDoc.CORSOVALUTAZIONELIVELLO;
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
  }

  /**
   * A seconda dei livelli presenti
   * @param listLivelli 
   */
  setParamsFromLivelli(listLivelli: Livello[]): void {

    if (!listLivelli || listLivelli.length == 0) {
      //Il Segment Button che crea la vista è disattivato
      this.showSegmentButton = false;
    }

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
   * Ritorna un Array con il percorso di ritorno
   */
    get backPathArray():string[] {
      let retPath = ['/','appstart-home','tab-agenda','trainer','list-valutazioni'];
  
      return retPath;
    }
  
    //Ritorna il Path Array Back in formato stringa concatenata
    get backButtonHref(): string {
      let myHref = '';
      myHref = this.backPathArray.join('/').substring(1);
  
      return myHref;
    }
  
    /**
     * Torno alla pagina del profilo
     */
    onGoToBack() {

      this.navController.navigateBack(this.backPathArray);
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
      this.onGoToBack();
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
                          this.startService.presentToastMessage('Scheda salvata correttamente');
                          this.onGoToBack();                          
                       }
                       else {
                        this.startService.presentAlertMessage(risposta.message);
                       }
                     })
                     .catch(error => {
                          this.startService.presentAlertMessage(error);
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
   * @param corsoDoc l'oggetto corso per cui si richiede l'icona
   */
   getIcon(corsoDoc:Corso): string
   {
     return (corsoDoc ? this.startService.getSportIcon(corsoDoc.IDSPORT) : '');
   }  

}
