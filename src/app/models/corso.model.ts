import { IDDocument } from './iddocument.model';
import {  TipoCorso, StatoCorso, TargetSesso } from '../models/valuelist.model';
import { FilterCorsi } from './filtercorsi.model';
import { HttpParams } from '@angular/common/http';

export class Corso extends IDDocument {

    DENOMINAZIONE: string;
    SIGLACALENDARIO: string;
    TIPO: TipoCorso;
    IDLIVELLOENTRATA: string;
    IDLIVELLOFINALE: string;
    IDSPORT: string;
    NUMEROLEZIONI: number;
    NUMPARTECIPANTI: number;
    MAXPARTECIPANTI: number;
    DATAINIZIO: Date;
    DATAFINE: Date;
    ORELEZIONE: number;
    ORAINIZIO: Date;
    STATO: StatoCorso;
    IDAREAOPERATIVA: string;
    IDLOCATION: string;
    IDCAMPO: string;
    GIORNIPREVISTI: string;
    ISCRIZIONEDAL: Date;
    ISCRIZIONEAL: Date;
    TARGETSESSO: TargetSesso;




    /*
    agginte da A.C.
    ORARIOINIZIO: Time;
    DURATA: number;
    NUMLEZIONI: number;
    */

    constructor() {
      super();
    }

    /**
     * Imposta le proprietà nell'oggetto
     * @param data JSON Received
     */
    setJSONProperty(data: any) {
      super.setJSONProperty(data);
    }

    /**
     * Ritorna un oggetto HttpParams con i parametri
     * @param filter Filtro impostato
     */
    static getHttpParams(filter: FilterCorsi): HttpParams {
      let myParams: HttpParams;

      return myParams;
    }




}