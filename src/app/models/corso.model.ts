import { IDDocument } from './iddocument.model';
import {  TipoCorso, StatoCorso} from '../models/valuelist.model';

// export enum TipoCorso {
//     corso = 10,
//     provaGratuita = 20
// }

// export enum StatoCorso {
//   inserito = 10,
//   inValutazione = 20,
//   confermato = 30,
//   iscrizioniAperte = 40,
//   inEsecuzione = 50,
//   eseguito = 60,
//   annullato = 80
// }



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




    /*
    agginte da A.C.
    ORARIOINIZIO: Time;
    DURATA: number;
    NUMLEZIONI: number;
    */




    constructor() {
      super();
    }
}