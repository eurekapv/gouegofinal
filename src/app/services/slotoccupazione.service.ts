import { Injectable } from '@angular/core';
import * as moment from "moment";
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import { ApicallService } from './apicall.service';

import { SlotDay } from '../models/imdb/slotday.model';
import { StartConfiguration } from '../models/start-configuration.model';
import { Location } from '../models/location.model';
import { Campo } from '../models/campo.model';
import { DateSlotLock } from '../models/dateslotlock.model';
import { SlotTime } from '../models/imdb/slottime.model';
import { StatoSlot } from '../models/valuelist.model';
import { MyDateTime } from '../library/models/mydatetime.model';
import { LogApp } from '../models/log.model';


@Injectable({
  providedIn: 'root'
})
export class SlotoccupazioneService {

  gapHour: number; //Se lo slot e l'ora attuale hanno una differenza inferiore al gapHour non è prenotabile
  gapMinutes: number; //Minuti in arrivo dalla location
  _docOccupazione = new BehaviorSubject<SlotDay>(new SlotDay());

  get docOccupazione() {
    return this._docOccupazione.asObservable();
  }

  constructor(private apiCall: ApicallService) {
    this.gapHour = 0;
    this.gapMinutes = 0;
   }

   /**
    * Passando un tempo in minuti imposta il Gap da utilizzare
    * @param minuti Minuti da impostare
    */
   setGapMinutes(minuti: number) {
    if (minuti && minuti !== 0) {
      this.gapMinutes = minuti;
      this.gapHour = (minuti/60);
    }
    else {
      this.gapMinutes = 0;
      this.gapHour = 0;
    }
   }

  /**
   * Prende in ingresso il template Slot Day, richiede al server i soli dati di occupazione di un determinato campo per un determinato giorno,
   * sistema il template con le occupazioni e lo riporta come risultato Observable
   * 
   * 
   * @param config Dati configurazione
   * @param docLocation Location richiesta
   * @param docCampo Campo richiesto
   * @param dataGiorno Giorno richiesto
   */
  request(config: StartConfiguration,
          templateSlotDay: SlotDay,
          docLocation: Location, 
          docCampo: Campo, 
          dataGiorno: Date): Promise<void> {
    return new Promise<void>((resolve, reject)=>{

      let myHeaders = config.getHttpHeaders();
      const doObject = 'CAMPO';
      const strData = moment(dataGiorno).format('YYYY-MM-DD');
      myHeaders = myHeaders.append('X-HTTP-Method-Override','GETDATESLOTLOCK');
      
      if (docLocation && docCampo)  {
        
        let myParams = new HttpParams().set('guidArea', docLocation.IDAREAOPERATIVA);
        myParams = myParams.append('guidLocation', docLocation.ID);
        myParams = myParams.append('guidCampo', docCampo.ID);
        myParams = myParams.append('dataGiorno',strData);
    
        let myUrl = config.urlBase + '/' + doObject;
    
        this.apiCall
            .httpGet(myUrl,myHeaders,myParams)
            .subscribe(resultData => {
  
              //Reimposto il Gap dei minuti
              this.setGapMinutes(docLocation.MINUTIPREAVVISOPRENOTAZIONE);
              
              //Ora cerco di sincronizzare il template del giorno con le occupazioni arrivate
              this.syncResult(resultData, templateSlotDay);
              resolve();
              
            }, error=>{
              reject(error);
            });
      }
      else {
  
        //Reimposto lo stesso Slot che mi era stato passato
        this._docOccupazione.next(templateSlotDay);
        
        LogApp.consoleLog('Dati Occupazione: RICHIESTA FAILED');
        LogApp.consoleLog('Manca' + (!docLocation?'Location':'') + ' ' + (!docCampo?'Campo':''));
        
        reject('Richiesta non effettuata');
        
      }
    })

  
  } 
  
  /**
   * 
   * @param resultDataServer Result in arrivo dal server
   * @param templateSlot Template Slot in arrivo dalla videata
   */
  private syncResult(resultDataServer: any, templateSlot: SlotDay) {
    //Converto il risultato in un oggetto reale
    let srvResult = new DateSlotLock();
    let nowMoment: any;
    let isSlotOccupato: boolean;

    srvResult.setJSONProperty(resultDataServer);


    /**Informazioni occupazioni ricevute */
    if (srvResult.RESULT) {
      templateSlot._TEMPLATELOCK = false; //Sblocco il template in quanto son arrivati i risultati
      templateSlot.APERTOCHIUSO = srvResult.APERTOCHIUSO;


        /** Ciclo sugli Slot Orari */
        templateSlot.SLOTTIMES.forEach(elSlotTime => {
          //TUTTO CHIUSO
          if (!templateSlot.APERTOCHIUSO) {
            //Giornata Chiusa
            elSlotTime.STATO = StatoSlot.chiuso;
          }
          else {

            //Giornata Aperta
            //Lo Slot ha già una impostazione da Template
            //Nel caso da template sia CHIUSO non lo cambio

            if (elSlotTime.STATO !== StatoSlot.chiuso) {

              //Ora Attuale
              nowMoment = moment();

              //Lo Slot è nel passato - lo imposto a chiuso
              if (moment(elSlotTime.START).isSameOrBefore(nowMoment)) {
                  
                //Lo Slot non è disponibile
                elSlotTime.STATO = StatoSlot.chiuso;
              }
              else {
                //Slot è nel futuro
                
                //Controllo se lo Slot è occupato
                isSlotOccupato = this.slotInServerSlotLock(elSlotTime, srvResult);

                if (isSlotOccupato) {
                  //E' tra gli slot occupati
                  elSlotTime.STATO = StatoSlot.occupato;
                }
                else {
                  //Sembra libero lo SLOT ma controlliamo se c'e' un GAP di Preavviso
                  if (this.gapHour != 0) {

                    let disponibileDa = nowMoment.add(this.gapHour, 'hours');

                    //Essendo dopo il preavviso lo segno come libero
                    if (moment(elSlotTime.START).isAfter(disponibileDa)) {
                      elSlotTime.STATO = StatoSlot.libero;
                    }
                    else {
                      //Contattare in sede per la disponibilità
                      elSlotTime.STATO = StatoSlot.contattare;
                    }

                  }
                  else {
                    //Non ci sono Gap di preavviso
                    elSlotTime.STATO = StatoSlot.libero;
                  }
                }
              }

            }
          }
        });

      
    }

    //Emetto l'evento di cambio
    this._docOccupazione.next(templateSlot);

  }
 
    /**
   * 
   * @param resultDataServer Result in arrivo dal server
   * @param templateSlot Template Slot in arrivo dalla videata
   */
     private syncResultOriginale(resultDataServer: any, templateSlot: SlotDay) {
      //Converto il risultato in un oggetto reale
      let srvResult = new DateSlotLock();
      srvResult.setJSONProperty(resultDataServer);
  
  
      /**Informazioni occupazioni ricevute */
      if (srvResult.RESULT) {
        templateSlot._TEMPLATELOCK = false; //Sblocco il template in quanto son arrivati i risultati
        templateSlot.APERTOCHIUSO = srvResult.APERTOCHIUSO;
  
  
          /** Ciclo sugli Slot Orari */
          templateSlot.SLOTTIMES.forEach(elSlotTime => {
            //TUTTO CHIUSO
            if (!templateSlot.APERTOCHIUSO) {
              //Giornata Chiusa
              elSlotTime.STATO = StatoSlot.chiuso;
            }
            else {
              //Giornata Aperta
              //Lo Slot ha già una impostazione da Template
              //Nel caso da template sia CHIUSO non lo cambio
  
              if (elSlotTime.STATO !== StatoSlot.chiuso) {
  
                //ad Adesso applico un gap di Ore
                //GAP ORE E' un preavviso
                let adesso = moment().add(this.gapHour, 'hours');
                 
                //Se l'inizio dello Slot è superiore ad adesso
                if (moment(elSlotTime.START).isAfter(adesso))  {
  
                  let inSlot = this.slotInServerSlotLock(elSlotTime, srvResult);
    
                
                  if (inSlot) {
                    //E' tra gli slot occupati
                    elSlotTime.STATO = StatoSlot.occupato;
                  }
                }
                else {
                  //Lo Slot non è disponibile
                  elSlotTime.STATO = StatoSlot.chiuso;
                }
  
              }
            }
          });
  
        
      }
  
      //Emetto l'evento di cambio
      this._docOccupazione.next(templateSlot);
  
    }

  /**
   * Controlla se lo Slot è dentro a quelli Lock arrivati dal server
   * @param docSlot Slot da controllare 
   * @param serverSlotLock Slot Bloccati a livello server
   */
  private slotInServerSlotLock(docSlot: SlotTime, serverSlotLock: DateSlotLock): boolean {
    let findInSlotLock = false;
    let result: boolean;

    if (serverSlotLock) {
      if (serverSlotLock.TIMELOCK) {

        //Ciclo sugli orari bloccati
        for (let index = 0; index < serverSlotLock.TIMELOCK.length; index++) {
          const elLock = serverSlotLock.TIMELOCK[index];

          result = MyDateTime.dateTimeInside(docSlot.START, docSlot.END, elLock.START, elLock.END);

          
          if (result) {
            //SLOT OCCUPATO
            findInSlotLock = true;
            break;
          }
          
        }
      }
    }
    
    return findInSlotLock;

  }
  
}
