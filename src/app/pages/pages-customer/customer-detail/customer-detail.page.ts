import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ButtonCard } from 'src/app/models/buttoncard.model';
import { LogApp } from 'src/app/models/log.model';
import { Tesseramento } from 'src/app/models/tesseramento';
import { TipoTessera } from 'src/app/models/tipo-tessera';
import { Utente } from 'src/app/models/utente.model';
import { StartService } from 'src/app/services/start.service';


@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.page.html',
  styleUrls: ['./customer-detail.page.scss'],
})
export class CustomerDetailPage implements OnInit, OnDestroy {

  //Segnala un errore di caricamento dei dati
  loadingError = false;
  messageError: string = '';
  loadingComplete = false; //Caricamento dati concluso

  idCustomer: string = '';
  subParaMap: Subscription;

  utenteDoc: Utente = new Utente(true);
  listTesseramenti: Tesseramento[] = [];

  noTesseramentiCard: ButtonCard = new ButtonCard();
  nameFieldDenominazioneTessera: string = '_Denominazione_TipoTessera';
  objEvent: any;


  constructor(private activatedRoute: ActivatedRoute,
              private navController: NavController,
              private startService: StartService,
              ) {
                this.createCardInfo();
               }

  ngOnInit() {
    let paramKey = 'customerId';
    this.loadingError = false;
    this.loadingComplete = false;
    this.messageError = '';

    //Recupero il parametro
    this.subParaMap = this.activatedRoute.paramMap.subscribe(paramsData => {

      if (paramsData.has(paramKey)) {

        //Recupero idCustomer
        this.idCustomer = paramsData.get(paramKey);

        this.startService.showLoadingMessage('Attendere caricamento')
                         .then(elLoading => {
                            //Presento il loading
                            elLoading.present();

                            //Richiedo i documenti
                            this.requestDocs()
                                .then(() => {

                                  //Fermo il loading
                                  elLoading.dismiss();
                                  this.loadingComplete = true;
                                  this.loadingError = false;
                                  this.messageError = '';
      
                                  //Caricato tutto
                                  this.startService.presentToastMessage('Dati caricati');

                                })
                                .catch(error => {
                                    LogApp.consoleLog(error);
                
                                    //Fermo il loading
                                    elLoading.dismiss();
                
                                    this.loadingComplete = true;
                                    this.loadingError = true;
                
                                    if (typeof error == 'string') {
                                      this.messageError = error
                                    }
                                    else {
                                      try {
                                        this.messageError = error.message;
                                      } catch (error) {
                                        this.messageError = 'Errore nel recupero dei dati'
                                      }
                                    }
                                })                                


                         })
      
      }
      else{
        this.loadingError = true;
        this.loadingComplete = true;
        this.messageError = 'Cliente non definito'
      }
    });

  }

  ngOnDestroy(): void {
    if (this.subParaMap) {
      this.subParaMap.unsubscribe();
    }
  } 


  /**
   * Crea una card da mostrare quando non ci sono tessere
   */
  createCardInfo(): void {

    this.noTesseramentiCard = new ButtonCard();
    this.noTesseramentiCard.title = 'Nessuna tessera';
    this.noTesseramentiCard.subtitle = 'Non sono presenti tessere intestate al cliente';
    this.noTesseramentiCard.nameicon = 'id-card-outline';
    this.noTesseramentiCard.sloticon = 'start';
    this.noTesseramentiCard.color = 'danger'

  }

  /**
   * Effettuo la richiesta dei documenti da mostrare
   * @returns 
   */
  requestDocs(): Promise<void> {
    return new Promise<void>((resolve, reject) => {

        if (this.idCustomer && this.idCustomer.length != 0) {
            this.startService.requestUtenteBy(this.idCustomer, 0, false)
                             .then(elDoc => {
                                //Questo è l'utente
                                this.utenteDoc = elDoc;

                                //Chiedo il caricamento dei tesseramenti
                                return this.startService.requestListTessereFor(this.utenteDoc.ID);
                             })
                             .then(elListTesseramenti => {

                              //Questa è la collection Tesseramenti
                              this.listTesseramenti = elListTesseramenti;
                              console.log(this.listTesseramenti);

                              //Richiedo l'elenco delle Tipologie Tessere
                              return this.startService.requestListTipoTessere();
                              
                             })
                             .then(elListTipologie => {

                                return this.fillRelationField(elListTipologie)
                                //Sistemo la Lista Tesseramenti
                              })
                              .then(() => {
                               resolve();
                             })
                             .catch(error => {
                              reject(error);
                             })
        }
        else {
          reject('idCustomer undefined');
        }
    })
  }

  /**
   * Eseguo un fill dei campi di relazione
   * @returns 
   */
  fillRelationField(listTipoTessere: TipoTessera[]): Promise<void> {

    return new Promise<void>((resolve) => {

      if (this.listTesseramenti && listTipoTessere) {
        
        //Ciclo ed eseguo la ricerca e impostazione
        this.listTesseramenti.forEach(itemTessera => {
          
          if (itemTessera.IDTIPOTESSERA && itemTessera.IDTIPOTESSERA.length != 0) {
            let myTipo = listTipoTessere.find(itemTipo => {
              return itemTipo.ID == itemTessera.IDTIPOTESSERA;
            })

            if (myTipo) {
              itemTessera[this.nameFieldDenominazioneTessera] = myTipo.DENOMINAZIONE;
            }
            else {
              itemTessera[this.nameFieldDenominazioneTessera] = '';
            }
          }
        })
      }

      resolve();
    })
  }

  /**
  * Esecuzione del Refresh Dati
  * @param event 
  */
  doRefresh(event:any) {

  
        //Richiedo i documenti
        this.requestDocs()
            .then(() => {

              if (event && event.target) {
               event.target.complete();
              }

              this.loadingComplete = true;
              this.loadingError = false;
              this.messageError = '';

              //Caricato tutto
              this.startService.presentToastMessage('Dati caricati');

            })
            .catch(error => {
                LogApp.consoleLog(error);

                if (event && event.target) {
                 event.target.complete();
                }                 

                this.loadingComplete = true;
                this.loadingError = true;

                if (typeof error == 'string') {
                  this.messageError = error
                }
                else {
                  try {
                    this.messageError = error.message;
                  } catch (error) {
                    this.messageError = 'Errore nel recupero dei dati'
                  }
                }
            })                                
   }



  //#region PULSANTE BACK
  /**
   * Ritorna un Array con il percorso di ritorno
   */
  get backPathArray():string[] {
    let retPath = this.startService.getUrlPageCustomer('list');

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
  onGoToBack(message?: string) {
        this.navController.navigateBack(this.backPathArray)
                          .then(isFinish => {
                            if (isFinish) {

                              if (message && message.length != 0) {
                                this.startService.presentAlertMessage(message);
                              }

                            }
                          });
  }
  
  //#endregion

  

}
