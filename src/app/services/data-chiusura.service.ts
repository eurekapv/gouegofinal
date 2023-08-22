import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { resolve } from 'url';
import { OperatorCondition } from '../library/models/iddocument.model';
import { MyDateTime } from '../library/models/mydatetime.model';
import { RequestParams } from '../library/models/requestParams.model';
import { DocstructureService } from '../library/services/docstructure.service';
import { Area } from '../models/area.model';
import { Campo } from '../models/campo.model';
import { DataChiusura } from '../models/datachiusura.model';
import { Gruppo } from '../models/gruppo.model';
import { Location } from '../models/location.model';
import { AttivitaChiusura, TipoChiusura } from '../models/valuelist.model';
import { LogApp } from '../models/log.model';

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
  request(): Promise<DataChiusura[]>{

    return new Promise<DataChiusura[]>((resolve, reject) => {

      
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
                                resolve(this._listChiusure);
                              })
                              .catch(error => {
                                LogApp.consoleLog(error,"error");
                                reject(error);
                              })
    })

    
    
  }

  /**
   * Ritorna se la Data passata è una festività di chiusura
   * @param idArea L'area
   * @param idLocation la location
   * @param idCampo il campo
   * @param data la data da controllare
   */
  idFestivita(idArea: string, idLocation: string, idCampo: string, data: Date): boolean{
    let aperto = true;

    if (this._listChiusure){
      

      for (let index = 0; index < this._listChiusure.length; index++) {
        const elemChiusura = this._listChiusure[index];

        if( elemChiusura.IDAREA == idArea && 
            (elemChiusura.IDLOCATION == undefined || elemChiusura.IDLOCATION == idLocation) && 
            (elemChiusura.IDCAMPO == undefined || elemChiusura.IDCAMPO == idCampo )) {
        
              //REGOLA VALIDA DA CONTROLLARE - IN QUESTO GIORNO SIAMO CHIUSI
              if (elemChiusura.TIPOCHIUSURA == TipoChiusura.rangeDate && elemChiusura.DATADAL <= data && data <= elemChiusura.DATAAL){
        
                //il giorno  ricade in un range di date di chiusura
                aperto = false;
                break;
              }
              else if (elemChiusura.TIPOCHIUSURA == MyDateTime.getFesta(data)){
                    //nel giorno  c'è una festa in cui il centro chiude
                    aperto = false;
                    break;
              }
              
        }
        
      }
                

    }
        
    return (!aperto);
  }

  
}
