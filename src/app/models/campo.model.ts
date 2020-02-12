import { IDDocument } from './iddocument.model';
import { TipoCampo } from '../models/valuelist.model';

// export enum TipoCampo {
//     campo = 10,
//     aulaIndividuale = 100,
//     aulaMultipla = 110,
//     sala = 200,
//     salone = 210
// } 

export class Campo extends IDDocument {
    
  IDAREAOPERATIVA: string;
  IDLOCATION: string;
  IDSPORT: string;
  DENOMINAZIONE: string;
  TIPOLOGIA: TipoCampo;
  DIMENSIONI: string;



  constructor() {
    super();

  }
}