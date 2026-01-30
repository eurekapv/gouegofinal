import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Area } from '../../models/struttura/area.model';
import { StartConfiguration } from '../../models/start-configuration.model';
import { DocstructureService } from '../../library/services/docstructure.service';
import { RequestParams } from '../../library/models/requestParams.model';
import { PaymentChannel, PaymentEnvironment } from 'src/app/models/zsupport/valuelist.model';
import { AreaPaymentSetting } from 'src/app/models/struttura/areapaymentsetting.model';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  //Elenco Aree
  private _listAree = new BehaviorSubject<Area[]>([]);
  private _areaSelected = new BehaviorSubject<Area>(new Area);

  //Creo delle variabili per scoprire i pagamenti mobile
  private _stripeEnabled = new BehaviorSubject<boolean>(true);
  private _stripeMode = new BehaviorSubject<PaymentEnvironment>(PaymentEnvironment.production);
  private _stripeIdAccount = new BehaviorSubject<string>('');

  get listAree$() {
    return this._listAree.asObservable();
  }

  get areaSelected$() {
    return this._areaSelected.asObservable();
  }

  /** Ritorna il valore attuale dell'area selezionata */
  get areaSelected() {
    return this._areaSelected.getValue();
  }


  //#region PARAMETRI STRIPE
  get stripeEnabled$() {
    return this._stripeEnabled.asObservable();
  }

  get stripeEnabled() {
    return this._stripeEnabled.getValue();
  }  

  get stripeMode$() {
    return this._stripeMode.asObservable();
  }

  get stripeMode() {
    return this._stripeMode.getValue();
  }  

  get stripeIdAccount$() {
    return this._stripeIdAccount.asObservable();
  }

  get stripeIdAccount() {
    return this._stripeIdAccount.getValue();
  }    

  //#endregion 

  constructor(private docStructure: DocstructureService) { }


  /**
   * Richiede le Aree legate al Gruppo, ed imposta 
   * sia la Lista delle Aree che un Area Selezionata
   * 
   * @param dataConfig Parametri di configurazione
   */
  request(dataConfig: StartConfiguration, childLevel:number = 2): Promise<Area[]> {

    return new Promise<Area[]>((resolve, reject)=>{

        let reqParams: RequestParams;
        let docToCall: Area;

        //Preparo il documento della chiamata
        docToCall = new Area(true);
        docToCall.IDGRUPPOSPORTIVO = dataConfig.gruppo.ID;

        reqParams = new RequestParams();
        reqParams.child_level = childLevel;

        this.docStructure.requestNew(docToCall, reqParams)
                         .then(listReceived => {
                                                            
                              //Non ho ricevuto nulla
                              if (listReceived.length == 0) {

                                //Svuoto le Aree
                                this._listAree.next([]);

                                reject('List Aree not received');

                              }
                              else {
                                this._listAree.next(listReceived);
                                resolve(listReceived);
                              }

                         })
                         .catch(error => {
                          reject(error);
                         })
    })

  }


  /**
   * Sulla lista passata recupera la prima area operativa
   * @param listAree 
   */
  findFirstDoc(listAree: Area[]): Promise<Area> {
    return new Promise<Area>((resolve, reject) => {
      let myArea: Area;

      if (listAree && listAree.length != 0) {

        myArea = listAree[0];

        if (myArea) {
          resolve(myArea);
        }
        else {
          reject('Area not found');
        }
      }
    })
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
      //Sincronizzo le proprietà Stripe
      this.syncStripeProperty(elSelected);

      //Emetto la modifica
      this._areaSelected.next(elSelected);
    }
  }

  /**
   * Imposta le proprietà per Stripe
   * @param area 
   */
  syncStripeProperty(areaSelected: Area) {
    let objAreaStripe: AreaPaymentSetting = null;

    if (areaSelected && areaSelected) {
      if (areaSelected.AREAPAYMENTSETTINGS) {
        //Recupero l'elemento di Stripe
        objAreaStripe = areaSelected.AREAPAYMENTSETTINGS.find(elItem => elItem.TIPOPAYMENT == PaymentChannel.stripe)
      }
    }

    if (objAreaStripe) {
      console.log(objAreaStripe);

      //Questa è la modalita Stripe
      this._stripeMode.next(objAreaStripe.STENVIRONMENT);

      switch(objAreaStripe.STENVIRONMENT) {
        case PaymentEnvironment.production:
          this._stripeEnabled.next(objAreaStripe.STFLAGSTATUS);
          this._stripeIdAccount.next(objAreaStripe.STIDACCOUNT || '');
          break;

        case PaymentEnvironment.test:
          this._stripeEnabled.next(objAreaStripe.STFLAGSTATUSTEST);
          this._stripeIdAccount.next(objAreaStripe.STIDACCOUNTTEST || '');
          break;

      }
    }
    else {
      this._stripeEnabled.next(false);
      this._stripeIdAccount.next('');
    }

    console.log('Stripe Abilitato: ' + this.stripeEnabled$);
    console.log('Stripe Account: ' + this.stripeIdAccount$);
    if (this.stripeMode == PaymentEnvironment.production) {
      console.log('Stripe Mode Production ');
    }
    else {
      console.log('Stripe Mode Test');
    }
  }

  /**
   * Effettua la richiesta dei dati di un'area
   * @param idArea 
   * @param numChild 
   * @returns 
   */
  requestAreaById(idArea: string, numChild: number = 0): Promise<Area> {
    return new Promise<Area>((resolve, reject) => {

      if (idArea && idArea.length != 0) {

        let reqParams: RequestParams = new RequestParams();
        reqParams.child_level = numChild;

        let filterAreaDoc = new Area(true);
        filterAreaDoc.ID = idArea;

        this.docStructure.requestNew(filterAreaDoc, reqParams)
                         .then(listReceived => {
                            if (listReceived && listReceived.length != 0) {
                              resolve(listReceived[0]);
                            }
                            else {
                              resolve(null);
                            }
                         })
                         .catch(error => {
                          reject(error);
                         })

      }
      else {
        reject('Area non specificata')
      }
    })
  }

}
