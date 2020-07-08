import { Injectable } from '@angular/core';
import { Sport } from '../models/sport.model';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { ApicallService } from './apicall.service';
import { StartService } from './start.service';
import { StartConfiguration } from '../models/start-configuration.model';
import { IDDocument } from '../models/iddocument.model';

@Injectable({
  providedIn: 'root'
})
export class LookupfieldService {

  private _listSport = new BehaviorSubject<Sport[]>([]);
  private actualConf: StartConfiguration;


  constructor(private apiService: ApicallService, 
              private startService: StartService) {

    //Recupero della configurazione
    this.startService.startConfig.subscribe(elConfig => {
      this.actualConf = elConfig;
    });
  }


  //Documento contenente campi da decodificare
  decodeFields(document: IDDocument) {
    
  }

  requestSport() {

  }
}
