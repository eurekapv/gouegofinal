import { IDDocument } from '../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';
import {  TipoCorso } from '../models/valuelist.model';

export class Utenteiscrizione extends IDDocument {

        IDCORSO:               string; //
        IDAREAOPERATIVA:       string; //
        TIPOCORSO:             number;
        DENOMINAZIONECORSO:    string;
        DATAINIZIOCORSO:       Date;
        ORAINIZIOCORSO:        Date;
        DATAFINECORSO:         Date;
        ORELEZIONE:            number;
        GIORNIPREVISTI:        string;
        IDUTENTE:              string; //
        DATAISCRIZIONE:        Date;
        ANNOISCRIZIONE:        number;
        IDSPORT:               string;
        DENOMINAZIONESPORT:    string;
        ICONASPORT:            string;
        IDLOCATION:            string; //
        DENOMINAZIONELOCATION: string;
        INDIRIZZOLOCATION:     string;
        COMUNELOCATION:        string;
        IDCAMPO:               string;
        DENOMINAZIONECAMPO:    string;
        IDTIPOPAGAMENTO:       string;
        DESCRTIPOPAGAMENTO:    string;
        IMPORTO:               number;
        VERSATO:               number;
        RESIDUO:               number;
        CODICEALFA:            string;
        CODICEINT:             number;
        STATOISCRIZIONE:       number;

        constructor() {
            super();
        }

    /**
     * Ritorna il descrittore della Struttura Campi
     */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDCORSO',
                        'IDAREAOPERATIVA',
                        'DENOMINAZIONECORSO',
                        'IDUTENTE',
                        'IDSPORT',
                        'DENOMINAZIONESPORT',
                        'ICONASPORT',
                        'IDLOCATION',
                        'DENOMINAZIONELOCATION',
                        'INDIRIZZOLOCATION',
                        'COMUNELOCATION',
                        'IDCAMPO',
                        'DENOMINAZIONECAMPO',
                        'IDTIPOPAGAMENTO',
                        'DESCRTIPOPAGAMENTO',
                        'CODICEALFA',
                        'GIORNIPREVISTI'
                        ];
        let arNumber = ['TIPOCORSO','ANNOISCRIZIONE','CODICEINT','STATOISCRIZIONE'];
        let arNumberDecimal = ['IMPORTO','VERSATO','RESIDUO','ORELEZIONE'];
        let arBoolean = [];
        let arDate = ['DATAINIZIOCORSO','DATAFINECORSO','DATAISCRIZIONE'];
        let arDateTime =['ORAINIZIOCORSO'];
        let arTime = [];

        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arNumberDecimal, TypeDefinition.numberDecimal);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
        return objDescriptor;
    }

     /**
     * Ritorna una icona a seconda del tipo Corso
     */
    getIcon() {
        let nameIcon= 'ribbon';
  
        switch (this.TIPOCORSO) {
          case TipoCorso.corso:
            nameIcon = 'ribbon';
            break;
          
          case TipoCorso.provaGratuita: 
            nameIcon = 'trail-sign';
            break;
        
          default:
            nameIcon = 'ribbon';
            break;
        }
  
        return nameIcon;
        
      }
}
