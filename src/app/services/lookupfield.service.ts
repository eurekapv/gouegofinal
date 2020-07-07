import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Sport } from '../models/sport.model';

@Injectable({
  providedIn: 'root'
})
export class LookupfieldService {

  private _listSport = new BehaviorSubject<Sport[]>([]);

  constructor() { }


  decodeFields() {
    
  }

  requestSport() {

  }
}
