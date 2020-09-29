import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpHeaders, HttpParams, JsonpInterceptor } from '@angular/common/http';

import { PianificazioneCorso } from '../models/pianificazionecorso.model';
import { ApicallService } from './apicall.service';
import { StartConfiguration } from '../models/start-configuration.model';
import { LogApp } from '../models/log.model';
import { DocstructureService } from '../library/services/docstructure.service';
import { IDDocument } from '../library/models/iddocument.model';
import { MyDateTime } from '../library/models/mydatetime.model';
import { resolve } from 'url';


@Injectable({
  providedIn: 'root'
})
export class CourseschedulerService {

  _calendarioCorso = new BehaviorSubject<PianificazioneCorso[]>([]);

  _listImpegniTrainer = new BehaviorSubject<PianificazioneCorso[]>([]);

  constructor(
    private apiService: ApicallService,
    private docStructureService: DocstructureService
    ) { }



  get calendarioCorso() {
    return this._calendarioCorso.asObservable();
  }

    /**
   * Effettua una chiamata al server per il recupero dei corsi
   * Utilizzare il documento di Filtro per richiedere dati filtrati
   * @param config Parametri di configurazione
   * @param idCorso Corso Richiesto
   */
  requestCalendario(config: StartConfiguration, idCorso: string) {
    return new Promise ((resolve, reject)=>{
      let myHeaders = config.getHttpHeaders();
      //new HttpHeaders({'Content-type':'text/plain'});
      const doObject = 'PIANIFICAZIONECORSO';
  
      //FIXME: ELIMINARE
      //In Testata c'e' sempre l'AppId
      //myHeaders = myHeaders.set('appid',config.appId);
      
      let myUrl = config.urlBase + '/' + doObject;  
  
      //Nei Parametri imposto il corso richiesto
      let myParams = new HttpParams().set('IDCORSO',idCorso);
  
      
      //Elimino le schedulazioni presenti
      this.emptyCalendario();
  
      this.apiService
        .httpGet(myUrl, myHeaders, myParams)
        .pipe(map(data => {
          return data.PIANIFICAZIONECORSO
        }))
        .subscribe( resultData => {
  
          LogApp.consoleLog(resultData);
          
          if (resultData) {
            resultData.forEach(element => {
    
              let newCorsoCalendario = new PianificazioneCorso();
              newCorsoCalendario.setJSONProperty(element);
              LogApp.consoleLog(newCorsoCalendario);
              this.addCorsoCalendario(newCorsoCalendario);
              resolve();
            },
            error=>{
              reject(error);
            });
          }
        })

    })
  }

  /**
   * Aggiunge una schedulazione
   * @param objCorsoScheduler Schedulazione Corso
   */
  addCorsoCalendario(objCorsoScheduler: PianificazioneCorso) {
    this.calendarioCorso
      .pipe(take(1))
      .subscribe( collCalendario => {
        this._calendarioCorso.next( collCalendario.concat(objCorsoScheduler));
      })
  }


  /**
   * Svuota il calendario presente
   */
  emptyCalendario() {
    this._calendarioCorso.next([]);
  }

  /**
   * richiede al server gli impegni del trainer con id specificato. ritorna la lista tramite Promise. sulla lista vengono anche effettuate le decodifiche
   * 
   * @param idRef l'id del trainer
   * @param dataInizio data di inizio  
   * @param dataFine data di fine
   */
  requestImpegniTrainer(idRef: string, dataInizio: Date, dataFine: Date){
    return new Promise<PianificazioneCorso[]> ((resolve, reject) => {
      
      const methodName = 'getPianificazioniTrainer'
      const document = new PianificazioneCorso(true);
  
      let params = {
        'idRef': idRef,
        'dataInizio': MyDateTime.formatDateISO(dataInizio),
        'dataFine': MyDateTime.formatDateISO(dataFine)
      }
  
      this.docStructureService.requestPost(document, methodName, JSON.stringify(params))
      .then(response => {
        let listPianificazioni:PianificazioneCorso[] = response.PIANIFICAZIONECORSO;
        this.docStructureService.decodeCollection(listPianificazioni, PianificazioneCorso.getReqForeignKeys())
          .then(() =>{
            console.log(listPianificazioni);
            this._listImpegniTrainer.next(listPianificazioni);
            resolve(listPianificazioni);
          })
          .catch(error => {
            reject(error);
          })
      })
      .catch(error => {
        console.log(error);
        reject(error);
      })
    })
  }

  /**
   * recupero la lista degli impegni del trainer (observable)
   */
  get listImpegniTrainer(){
    return this._listImpegniTrainer.asObservable();
  }

  /**
   * Recupera un elemento "impegno del trainer" con l'id specificato. ATTENZIONE: devo prima aver eseguito il metodo requestImpegniTrainer
   * @param idPianificazione l'id della pianificazione da recuperare
   */
  getPianificazioneTrainerById(idPianificazione): PianificazioneCorso{
    let elem: PianificazioneCorso = this._listImpegniTrainer
      .getValue()
        .find((elem:PianificazioneCorso) => {
          return elem.ID == idPianificazione;
        })

    return elem;
  }
}
