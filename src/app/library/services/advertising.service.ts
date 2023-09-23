import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdvertisingConfig, IAdvertisingConfig } from '../models/advertising-config.model';
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdvertisingService {

  //Configurazione generale del cliente
  private _customerConfig$: BehaviorSubject<AdvertisingConfig> = new BehaviorSubject<AdvertisingConfig>(new AdvertisingConfig());

  public get customerConfig$() {
    return this._customerConfig$;
  }

  public get customerConfig(): AdvertisingConfig {
    return this._customerConfig$.getValue();  
  }

  //Configurazione Attiva per la piattaforma in uso
  private _activeAdvertisingConfig$: BehaviorSubject<IAdvertisingConfig> = new BehaviorSubject<IAdvertisingConfig>({})

  public get activeAdvertisingConfig$() {
    return this._activeAdvertisingConfig$;
  }

  public get activeAdvertisingConfig() {
    return this._activeAdvertisingConfig$.getValue();
  }

  


  constructor(private platform: Platform) { 
    this.initConfig();
  }

  /**
   * Inizializzo i parametri per l'advertising sulla base
   * del cliente e della piattaforma
   */
  initConfig() {

    let configDoc = new AdvertisingConfig();
    configDoc.setFor(environment.connection.activeId);

    if (this.platform.is('android')) {
      this._activeAdvertisingConfig$.next(configDoc.androidConfig);
    }
    else if (this.platform.is('ios')) {
      this._activeAdvertisingConfig$.next(configDoc.iosConfig);
    }
    else {
      this._activeAdvertisingConfig$.next(configDoc.webConfig);
    }

    this._customerConfig$.next(configDoc);

  }

  /**
   * Imposta se l'advertising è stato inizializzato
   * @param flag TRUE / FALSE
   */
  setInitialized(flag: boolean): void {
    let myAdvertis = this._activeAdvertisingConfig$.getValue();

    myAdvertis.initialized = flag;

    this._activeAdvertisingConfig$.next(myAdvertis);
  }


}
