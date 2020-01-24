import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { take, map } from 'rxjs/operators';
import { ApicallService } from './apicall.service';
import { StartService } from './start.service';

import { Area } from '../models/area.model';
import { StartConfiguration } from '../models/start-configuration.model';

@Injectable({
  providedIn: 'root'
})
export class AreeService {

  // Elenco Aree Operative
  private _listAree = new BehaviorSubject<Area[]>([]);
  private startConfig: StartConfiguration;
  
  get listAree() {
    return this._listAree.asObservable();
  }

  //Aggiunge un'area
  addArea(objArea: Area) {
    this.listAree
      .pipe(take(1))
      .subscribe( aree => {
        this._listAree.next( aree.concat(objArea))
      });
  }
  
  // Ritorno Observable di una Area
  getArea(id: string) {
    return this.listAree
            .pipe(take(1), map( aree => {
              return aree.find( ar => ar.ID == id)
            }));
  }

  constructor(private apiService: ApicallService, 
              private startService: StartService) { 

      //Sottoscrivo la ricezione 
      this.startService.startConfig.subscribe(element => {
        this.startConfig = element;
      })
  }

  // Effettua la chiamata WebAPI al Server per richiedere le Aree
  requestAree() {
    let myHeaders = new HttpHeaders({'Content-type':'text/plain'});
    const doObject = 'AREAOPERATIVA';

    // In Testata c'e' sempre l'AppId
    myHeaders = myHeaders.set('APPID',this.startConfig.appId);
    // Nei parametri imposto il gruppo Sportivo
    let myParams = new HttpParams().set('IDGRUPPOSPORTIVO',this.startConfig.gruppo.ID);
  }
}
