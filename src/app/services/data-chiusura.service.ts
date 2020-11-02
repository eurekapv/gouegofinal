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

  /**
   * dati un'area, una location e un campo, mi dice se il giorno indicato, il campo risulta chiuso secondo le chiusure impostate nel calendario
   * @param area L'area
   * @param location la location
   * @param campo il campo
   * @param data la data da controllare
   */
  isOpenForDateChiusura(area: Area, location: Location, campo: Campo, data: Date): boolean{
    let aperto = true;

    if (this._listChiusure && this._listChiusure != []){
      

      //se ho le chiusure, le scorro
      this._listChiusure.forEach(elemChiusura => {

        if(
          (elemChiusura.IDAREA == area.ID) && 
          (elemChiusura.IDLOCATION == undefined || elemChiusura.IDLOCATION == location.ID) && 
          (elemChiusura.IDCAMPO == undefined || elemChiusura.IDCAMPO == campo.ID )
        ){

          //la chiusura riguarda il campo che devo controllare
          if (elemChiusura.TIPOCHIUSURA == MyDateTime.getFesta(data)){

            //nel giorno  c'è una festa in cui il centro chiude
            aperto = false;
          }
  
          if (elemChiusura.TIPOCHIUSURA == TipoChiusura.rangeDate && elemChiusura.DATADAL <= data && data <= elemChiusura.DATAAL){

            //il giorno  ricade in un range di date di chiusura
            aperto = false;
          }
          
        }
        
        
      })

    }
        
    return aperto;
  }

  
}
