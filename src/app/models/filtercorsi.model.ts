import { TargetSesso, TipoCorso, Condition } from './valuelist.model';
import { HttpParams } from '@angular/common/http';

// Proprietà per Filtraggio Corsi
export class FilterCorsi {
    ID: string;
    IDLOCATION: string;
    DATAFINE: Date;
    _CONDITIONDATAFINE: Condition;
    TARGETSESSO: TargetSesso;
    IDCATEGORIAETA: string;
    IDSPORT: string;
    TIPO: TipoCorso;
    _ISCRIZIONIAPERTE: boolean;


    constructor(idLoc: string) {
        this.IDLOCATION = idLoc;
    }



}