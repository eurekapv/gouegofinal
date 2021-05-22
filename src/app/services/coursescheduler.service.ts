import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpHeaders, HttpParams, JsonpInterceptor } from '@angular/common/http';

import { PianificazioneCorso } from '../models/pianificazionecorso.model';
import { ApicallService } from './apicall.service';
import { StartConfiguration } from '../models/start-configuration.model';
import { LogApp } from '../models/log.model';
import { DocstructureService } from '../library/services/docstructure.service';
import { IDDocument, ParamsExport } from '../library/models/iddocument.model';
import { MyDateTime } from '../library/models/mydatetime.model';
import { resolve } from 'url';
import { promise } from 'protractor';
import { PostResponse } from '../library/models/postResult.model';
import { PostParams } from '../library/models/requestParams.model';


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
   * recupero la lista degli impegni del trainer (observable)
   */
  get listImpegniTrainer(){
    return this._listImpegniTrainer.asObservable();
  }



    /**
   * Effettua una chiamata al server per il recupero dei corsi
   * Utilizzare il documento di Filtro per richiedere dati filtrati
   * @param config Parametri di configurazione
   * @param idCorso Corso Richiesto
   */
  requestCalendario(config: StartConfiguration, idCorso: string) {
    return new Promise<void>((resolve, reject)=>{
      let myHeaders = config.getHttpHeaders();
      
      const doObject = 'PIANIFICAZIONECORSO';
       
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
   * Aggiunge una pianificazione alla lista Trainer
   * @param docPianificazione Documento di Pianificazione
   */
  addImpegnotrainer(docPianificazione: PianificazioneCorso) {
    this.listImpegniTrainer
      .pipe(take(1))
      .subscribe( collListImpegni => {
        this._listImpegniTrainer.next( collListImpegni.concat(docPianificazione));
      });
  }


  /**
   * Svuota il calendario presente
   */
  emptyCalendario() {
    this._calendarioCorso.next([]);
  }

  /**
   * Svuotare la lista degli impegni del trainer
   */
  emptyListImpegniTrainer() {
    this._listImpegniTrainer.next([]);
  }

  /**
   * richiede al server gli impegni del trainer con id specificato. ritorna la lista tramite Promise. sulla lista vengono anche effettuate le decodifiche
   * 
   * @param idRef l'id del trainer
   * @param dataInizio data di inizio  
   * @param dataFine data di fine
   */
  requestImpegniTrainer(idRef: string, dataInizio: Date, dataFine?: Date){
    return new Promise<PianificazioneCorso[]> ((resolve, reject) => {
      
      const methodName = 'getPianificazioniTrainer'
      const document = new PianificazioneCorso(true);

      if (!dataFine && !dataInizio) {
        dataInizio = new Date();
        dataFine = new Date();
      }
      else if (!dataInizio && dataFine) {
        dataInizio = dataFine;
      }
      else if (dataInizio && !dataFine) {
        dataFine = dataInizio;
      }
  
      let params = {
        'idRef': idRef,
        'dataInizio': MyDateTime.formatDateISO(dataInizio),
        'dataFine': MyDateTime.formatDateISO(dataFine)
      }
  
      this.docStructureService.requestForFunction(document, methodName, JSON.stringify(params))
      .then(response => {

        let requestDecode = false;

        //Svuotiamo la lista attuale
        this.emptyListImpegniTrainer();
        if (response.PIANIFICAZIONECORSO) {
          if (Array.isArray(response.PIANIFICAZIONECORSO)) {

            /* Ciclo sull'Array ricevuto */
            for (let index = 0; index < response.PIANIFICAZIONECORSO.length; index++) {
              requestDecode = true;
              const element = response.PIANIFICAZIONECORSO[index];
              let docPianificazioneCorso = new PianificazioneCorso();
              docPianificazioneCorso.setJSONProperty(element);

              
              //qui reupero anche il documento livello e me lo salvo nel repository
              const addToRepository = false;

              //Chiedo altri dati
              this.docStructureService.getRelDoc(docPianificazioneCorso, ['IDCORSO', 'IDLIVELLOENTRATA'],1,docPianificazioneCorso);
                            
              this.addImpegnotrainer(docPianificazioneCorso);
              
            }

            if (requestDecode) {
              //Recupero la lista Impegni
              let listPianificazioni:PianificazioneCorso[] = this._listImpegniTrainer.getValue();

              //Chiamo la decodifica collection della lista
              this.docStructureService.decodeCollection(listPianificazioni)
                .then(() => {
                  //Riemetto Observable
                  this._listImpegniTrainer.next(listPianificazioni);
                  //Riemetto la resolve
                  resolve(this._listImpegniTrainer.getValue());
                })
                .catch(error => {
                  console.log(error);
                  reject(error);
                });

            }
            else {
              //Risolvere con la lista attuale (che sarà vuota)
              resolve(this._listImpegniTrainer.getValue());
            }
          }
          else {
              //Risolvere con la lista attuale (che sarà vuota)
              resolve(this._listImpegniTrainer.getValue());
          }
        }
        else {
          //Risolvere con la lista attuale (che sarà vuota)
          resolve(this._listImpegniTrainer.getValue());
        }

      })
      .catch(error => {
        console.log(error);
        reject(error);
      })
    })
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

  /**
   * Richiede al server le presenze della pianificazione passata e le inserisce all'interno della stessa
   * @param docPianificazione IL documento in cui inserire le presenze
   */
  insertPresenze(docPianificazione: PianificazioneCorso){
    
    return new Promise<PianificazioneCorso>((resolve, reject) => {

      const collName = 'CORSOPRESENZE';

      this.docStructureService.loadCollection(docPianificazione, collName)
      .then(() => {
        resolve(docPianificazione);
      })
      .catch(error => {
        reject(error);
      })
    })
  }

  updatePresenze(docPianificazione: PianificazioneCorso): Promise<PostResponse>{
    return new Promise ((res, rej) => {

      let myPostParams : PostParams = new PostParams();

      myPostParams.key = 'docPianificazione';
      myPostParams.value = docPianificazione;
      myPostParams.exportOnlyPropertyModified = true;
      myPostParams.exportOnlyDocModified = true;
      
      
      this.docStructureService.requestForFunction(docPianificazione, 'updatePresenze', null, myPostParams)
      .then((response:PostResponse) => {
        res(response);
      })
      .catch(error => {
        rej(error);
      })
    })
  }
}
