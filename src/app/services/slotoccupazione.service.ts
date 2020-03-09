import { Injectable } from '@angular/core';
import * as moment from "moment";
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import { ApicallService } from './apicall.service';

import { SlotDay } from '../models/imdb/slotday.model';
import { StartConfiguration } from '../models/start-configuration.model';
import { Location } from '../models/location.model';
import { Campo } from '../models/campo.model';
import { DateSlotLock, TimeLock } from '../models/dateslotlock.model';
import { SlotTime } from '../models/imdb/slottime.model';
import { StatoSlot } from '../models/valuelist.model';
import { MyDateTime } from '../models/mydatetime.model';

@Injectable({
  providedIn: 'root'
})
export class SlotoccupazioneService {

  _docOccupazione = new BehaviorSubject<SlotDay>(new SlotDay());

  get docOccupazione() {
    return this._docOccupazione.asObservable();
  }

  constructor(private apiCall: ApicallService) { }

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
          dataGiorno: Date) {

  console.log('Richiesta dati occupazione');
  

  const myHeaders = new HttpHeaders({'Content-type':'application/json', 
                                       'X-HTTP-Method-Override':'GETDATESLOTLOCK', 
                                       'APPID':config.appId
                                      });

    const doObject = 'CAMPO';
    const strData = moment(dataGiorno).format('YYYY-MM-DD');
    let myParams = new HttpParams().set('guidArea', docLocation.IDAREAOPERATIVA);
    myParams = myParams.append('guidLocation', docLocation.ID);
    myParams = myParams.append('guidCampo', docCampo.ID);
    myParams = myParams.append('dataGiorno',strData);

    let myUrl = config.urlBase + '/' + doObject;

    this.apiCall
        .httpGet(myUrl,myHeaders,myParams)
        .subscribe(resultData => {

          
          //Ora cerco di sincronizzare il template del giorno con le occupazioni arrivate
          this.syncResult(resultData, templateSlotDay);
        });

  } 
  
  /**
   * 
   * @param resultDataServer Result in arrivo dal server
   * @param templateSlot Template Slot in arrivo dalla videata
   */
  private syncResult(resultDataServer: any, templateSlot: SlotDay) {
    //Converto il risultato in un oggetto reale
    let srvResult = new DateSlotLock();
    srvResult.setJSONProperty(resultDataServer);

    console.log('Server JSON');
    console.log(resultDataServer);
    console.log('Object Transformation');
    console.log(srvResult);

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
              let inSlot = this.slotInServerSlotLock(elSlotTime, srvResult);

            
              if (inSlot) {
                //E' tra gli slot occupati
                elSlotTime.STATO = StatoSlot.occupato;
              }
            }
          }
        })

      
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

          console.log(result);
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
