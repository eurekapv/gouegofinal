import { Injectable } from '@angular/core';
import { GetResult, Preferences } from '@capacitor/preferences';


@Injectable({
  providedIn: 'root'
})
export class KeyStorageService {

  constructor() {
      
  }


  /**
   * Memorizza una chiave con valore
   */
  public set(myKey: string, myValue: any):Promise<void> {
    return Preferences.set({key: myKey, value: myValue});
  } 
  
  /**
   * Recupera una chiave memorizzata
   * @param myKey 
   * @returns 
   */
  public get(myKey: string): Promise<GetResult> {
    return Preferences.get({key: myKey})
  }
}
