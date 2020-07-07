import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { Corso } from '../models/corso.model';
import { ApicallService } from './apicall.service';
import { StartConfiguration } from '../models/start-configuration.model';
import { FilterCorsi } from '../models/filtercorsi.model';
import { Sport } from '../models/sport.model';
import { Livello } from '../models/livello.model';
import { CategoriaEta } from '../models/categoriaeta.model';
import { Utente } from '../models/utente.model';
import { LogApp } from '../models/log.model';
import { LoadingController } from '@ionic/angular';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private _listCorsi = new BehaviorSubject<Corso[]>([]);
  private _filterCorsi: FilterCorsi;
  private _decodeListSport: Sport[];
  private _decodeListLivelli: Livello[];
  private _decodeListEta: CategoriaEta[];
  private _selectedCorso = new BehaviorSubject<Corso>(new Corso());



  get listCorsi() {
    return this._listCorsi.asObservable();
  }

  get selectedCorso() {
    return this._selectedCorso.asObservable();
  }

  get filterCorsi() {
    return this.filterCorsi;
  }

  set filterCorsi(value: FilterCorsi) {
    this._filterCorsi = value;
  }

  set decodeListSport(value: Sport[]) {
    this._decodeListSport = value;
  }

  set decodeListLivelli(value: Livello[]) {
    this._decodeListLivelli = value;
  }

  set decodeListEta(value: CategoriaEta[]) {
    this._decodeListEta = value;
  }



  /**
   * Inizializza e ritorna una copia del filtro dei corsi
   * @param idLocation Location da utilizzare
   */
  newFilterCorsi(idLocation: string) {
    this._filterCorsi = new FilterCorsi(idLocation);

    return this._filterCorsi;
  }

  constructor(private apiService: ApicallService,
              private loadingCtrl: LoadingController) { }

  /**
   * Effettua una chiamata al server per il recupero dei corsi
   * Utilizzare il documento di Filtro per richiedere dati filtrati
   * @param config Parametri di configurazione
   * @param docUser Documento Utente loggato. Se presente i corsi vengono proposti solo quelli validi all'utente
   */

  request (config: StartConfiguration, docUser?:Utente) {
    return new Promise ((resolve, reject)=>{

      let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
      const doObject = 'CORSO';
      
  
      //In Testata c'e' sempre l'AppId
      myHeaders = myHeaders.set('appid',config.appId);
      let myUrl = config.urlBase + '/' + doObject;  
  
      let myParams = this.getHttpParamsFilter(this._filterCorsi);
      
      //Elimino i corsi presenti
      this.emptyCorsi();
      //Effettuo la chiamata
      this.apiService
          .httpGet(myUrl, myHeaders, myParams)
          .pipe(map(data => {
            return data.CORSO
          }))
          .subscribe( resultData => {
  
            if (resultData) {
              resultData.forEach(element => {
      
                let newCorso = new Corso();
                newCorso.setJSONProperty(element);
                //Decodifico i campi chiave
                newCorso.lookup('IDSPORT', this._decodeListSport, 'DENOMINAZIONE');
      
                //Decodifico i campi chiave
                newCorso.lookup('IDCATEGORIEETA', this._decodeListEta, 'DESCTOOLTIP');
      
                //Decodifico i campi chiave
                newCorso.lookup('IDLIVELLOENTRATA', this._decodeListLivelli, 'DENOMINAZIONE');
      
                this.addCorso(newCorso); 
                resolve();     
              });
            }
          }, error=>{
            reject(error);
          })
    })
  }


  /**
   * Ritorna un oggetto HttpParams con i parametri impostati
   * @param filter Oggetto co i filtri da applicare e passare come HttpParams
   */
  getHttpParamsFilter(filter: FilterCorsi): HttpParams {
    let myParams = new HttpParams().set('IDLOCATION', filter.IDLOCATION);
    let arProperty = Object.keys(filter); //Prendo tutte le proprieta

    // CIclo le proprieta dell'oggetto filter
    arProperty.forEach(element => {
      let nameProperty = element;

      //Se non inizia con _ è una proprieta da includere
      if (!nameProperty.startsWith('_')) {
        //Se c'è un valore
        if (filter[nameProperty]) {
          let value = filter[nameProperty];

          /* Per la DATAFINE applico la condizione se è presente*/
          if (value == 'DATAFINE') {

            if (filter._CONDITIONDATAFINE) {
              value = filter._CONDITIONDATAFINE + value;
            }
            
          }

          //Aggiungo il parametro
          myParams = myParams.append(nameProperty, value);
        }
      }
      else if (nameProperty = '_CHECKISCRIZIONEAPERTA') {
        if (filter[nameProperty]) {
          //devo includere la ricerca 
          //per avere solo i corsi con iscrizione aperta
          
        }
      }
    });


    return myParams;
  }

  /**
   * Aggiunge un corso all'elenco dei corsi
   * @param objCorso Corso da Aggiungere
   */
  addCorso(objCorso: Corso) {
    this.listCorsi
      .pipe(take(1))
      .subscribe( collCorsi => {
        this._listCorsi.next( collCorsi.concat(objCorso));
      })
  }

  /**
   * Elimina tutti i corsi presenti
   */
  emptyCorsi() {
    this._listCorsi.next([]);
  }

  /**
   * Chiama il server per il recupero del programma di corso, alla ricezione emette le modifiche
   * su selectedCorso di tipo Observable
   * @param config Configurazione Call
   * @param idCorso idCorso di cui far richiesta
   */
  requestCorsoProgramma(config: StartConfiguration, idCorso: string) {
    return new Promise ((resolve,reject)=>{
      let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
      const doObject = 'CORSOPROGRAMMA';
      
      //In Testata c'e' sempre l'AppId
      myHeaders = myHeaders.set('appid',config.appId);
      let myUrl = config.urlBase + '/' + doObject; 
      let myParams = new HttpParams().set('IDCORSO', idCorso);
  
      this.apiService
          .httpGet(myUrl, myHeaders, myParams)
          .pipe(map(data => {
              return data.CORSOPROGRAMMA
          }))
          .subscribe(returnData => {
              let myCorso = this._listCorsi.getValue().find(element => {
                return (element.ID == idCorso)
              });
              if (myCorso) {
                //Imposto la collection
                myCorso.setCollectionCorsoProgramma(returnData);
                this._selectedCorso.next(myCorso);
                resolve();
              }
          },
          error=>{
            reject(error);
          })
    })
  }
}
