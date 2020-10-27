import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { resolve } from 'url';
import { OperatorCondition } from '../library/models/iddocument.model';
import { RequestParams } from '../library/models/requestParams.model';
import { DocstructureService } from '../library/services/docstructure.service';
import { DataChiusura } from '../models/datachiusura.model';
import { Gruppo } from '../models/gruppo.model';
import { AttivitaChiusura } from '../models/valuelist.model';

@Injectable({
  providedIn: 'root'
})
export class DataChiusuraService {

  private _listChiusure: DataChiusura[] = [];

  listChiusure: BehaviorSubject<DataChiusura[]> = new BehaviorSubject<DataChiusura[]>([]);

  constructor(
    private docStructureService: DocstructureService,
  ) { }

  /**
   * aggiuge un elemento alla lista
   * @param element l'elemento da aggiungere
   */
  private addElementToList(element: DataChiusura){
    this._listChiusure.push(element);
    this.listChiusure.next(this._listChiusure);

  }

  /**
   * Richiede l'elenco completo di tutte le chiusure del gruppo sportivo SOLO PER GLI AFFITTI
   */
  request(){

    return new Promise ((resolve, reject) => {
      //TODO ERRORE, ALLA RICHIESTA (CHE SEMBRA GIUSTA) IL SERVER RISPONDE OK, MA NON ARRIVA NULLA... 
      //TRA L'ALTRO, MI CHIEDO: NEL MODELLO "DATACHIUSURA", NON C'E' L'ID GRUPPO... COME FA IL SERVER A SAPRE QUALI CHIUSURE MANDARE??

      //ALTRA DOMANDA: COME MAI CON L'API TESTER, SE PROVO A FARE UNA CHIAMATA MI DICE "PRIMARY KEY UNDEFINED"? APPID, AUTHCODE E AUTHUSERCODE LI HO MESSI...
      //creo il filtro
      let filterDocument = new DataChiusura(true);

  
      //aggiungo le due condizioni in or (chiusure per affitti e per affitti/corsi)
      filterDocument.addFilterCondition(OperatorCondition.uguale, 'ATTIVITACHIUSURA', [AttivitaChiusura.affittoStrutture, AttivitaChiusura.tutte]);
  
      //ora faccio la richiesta
      this.docStructureService.requestNew(filterDocument)
      .then(rawListChiusure => {
  
        //salvo la lista ed emetto l'observable
        this._listChiusure = rawListChiusure;
        this.listChiusure.next(this._listChiusure);
  
        //risolvo la lista
        // console.log('LISTA CHIUSURE');
        // console.log(this._listChiusure);
        resolve(this._listChiusure);
      })
    })


  }
}
