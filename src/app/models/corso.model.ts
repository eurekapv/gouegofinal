import { IDDocument } from './iddocument.model';


export enum TipoCorso {
    corso = 10,
    provaGratuita = 20
}

export class Corso extends IDDocument {

    DENOMINAZIONE: string;
    SIGLACALENDARIO: string;
    TIPO: TipoCorso;


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