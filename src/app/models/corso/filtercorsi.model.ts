import { TargetSesso, TipoCorso, Condition } from '../zsupport/valuelist.model';


// Proprietà per Filtraggio Corsi
export class FilterCorsi {
    ID: string;
    IDLOCATION: string;
    DATAFINE: Date;
    _CONDITIONDATAFINE: Condition;
    TARGETSESSO: TargetSesso;
    IDCATEGORIEETA: string;
    IDSPORT: string;
    _DESCRSPORT: string;
    TIPO: TipoCorso;
    _CHECKISCRIZIONEAPERTA: boolean;


    constructor(idLoc: string) {
        this.IDLOCATION = idLoc;
        this._CHECKISCRIZIONEAPERTA = false;
    }



}