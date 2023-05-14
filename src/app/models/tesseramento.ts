import { Descriptor, TypeDefinition } from '../library/models/descriptor.model';
import { IDDocument } from '../library/models/iddocument.model';

export class Tesseramento extends IDDocument{

    IDUTENTE: string;
    IDTIPOTESSERA: string;
    IDAREAOPERATIVA: string;
    FLAGCLUB: boolean;
    CODICE: string;
    NUMERO: number;
    DATAEMISSIONE: Date;
    DURATAMESI: number;
    DATASCADENZA: Date;
    IDMASTERDOCUMENTO: string;
    ANNULLATA: number;

    constructor(onlyInstance?: boolean){
        super(onlyInstance);
    }

    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDUTENTE', 'IDTIPOTESSERA', 'IDAREAOPERATIVA', 'CODICE','IDMASTERDOCUMENTO'];
        let arNumber = ['NUMERO','DURATAMESI'];
        let arBoolean = ['FLAGCLUB','ANNULLATA'];
        let arDate = ['DATAEMISSIONE','DATASCADENZA'];
        let arDateTime =[];
        let arTime = [];
        
    
        objDescriptor.className = 'Tesseramento';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'TESSERAMENTO';
        objDescriptor.describeField = 'CODICE';
    
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
                            
        return objDescriptor;
    }  
    
    /**
     * Indica se la tessera è valida
     * @returns 
     */
    isValid():boolean {
        let valid = false;
        if (this.DATASCADENZA && this.DATASCADENZA >= new Date()) {
            valid = true;
        }

        return valid;
    }
}

