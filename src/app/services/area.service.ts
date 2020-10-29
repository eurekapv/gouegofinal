import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { Area } from '../models/area.model';
import { ApicallService } from './apicall.service';
import { StartConfiguration } from '../models/start-configuration.model';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  //Elenco Aree
  private _listAree = new BehaviorSubject<Area[]>([]);
  private _areaSelected = new BehaviorSubject<Area>(new Area);

  get listAree() {
    return this._listAree.asObservable();
  }

  get areaSelected() {
    return this._areaSelected.asObservable();
  }

  /** Ritorna il valore attuale dell'area selezionata */
  get areaSelectedValue() {
    return this._areaSelected.getValue();
  }

  constructor(private apiService: ApicallService) { }


  /**
   * Richiede le Aree legate al Gruppo, ed imposta 
   * sia la Lista delle Aree che un Area Selezionata
   * 
   * @param config Parametri di configurazione
   */
  request(config: StartConfiguration, _childLevel?:number) {
    return new Promise((resolve, reject)=>{
        let myHeaders = config.getHttpHeaders();
        //new HttpHeaders({'Content-type':'text/plain'});

        const doObject = 'AREAOPERATIVA';
        
        if (!_childLevel){
          _childLevel=2;
        }
        myHeaders=myHeaders.set('child-level',_childLevel+'');

        // Nei parametri imposto il gruppo Sportivo
        let myParams = new HttpParams().set('IDGRUPPOSPORTIVO',config.gruppo.ID);
    
        let myUrl = config.urlBase + '/' + doObject;
    
        this.apiService
          .httpGet(myUrl, myHeaders, myParams)
          .pipe(map(fullData => {
            
            return fullData.AREAOPERATIVA;
          }))
          .subscribe(resultData => {
              
              //Ricreo l'array di Aree
              this._listAree.next([]);
    
              //Aggiungo i valori
              this._addMultipleAree(resultData, true);
              resolve();
          },
          error=>{
            reject(error);
          });
    })

  }

  /**
   * Aggiunge un insieme di elementi all'array delle aree
   * @param dataJSON JSON Received
   * @param firstSelect Seleziona il primo elemento e rendilo come Area Selezionata
   */
  private _addMultipleAree(dataJSON: any, firstSelect: boolean) {
    let count = 0;

    if (dataJSON) {
      dataJSON.forEach(element => {
        let newArea = new Area();
        newArea.setJSONProperty(element);

        //Primo Giro e mi richiede di selezionare
        if (firstSelect && count == 0) {
          this._areaSelected.next(newArea);
        }

        this.listAree
          .pipe(take(1))
          .subscribe( collAree => {
            this._listAree.next( collAree.concat(newArea));
          });

        count++;
      });
    }
  }

  /**
   * Seleziona l'area richiesta per ID
   * @param idArea ID Area da Selezionare
   */
  selectAreaByID(idArea: string) {
    let arElement = this._listAree.getValue();

    let elSelected = arElement.find(element => {
      return element.ID == idArea;
    });

    if (elSelected) {
      //Ememtto la modifica
      this._areaSelected.next(elSelected);
    }
  }

}
