import { IDDocument } from './iddocument.model';
import { TipoPrivateImage } from './valuelist.model';
import { TypeDefinition, Descriptor} from '../models/descriptor.model';

export class PrivateImage extends IDDocument {
    TIPO: TipoPrivateImage;
    FILENAMEESTENSIONE: string; //Percorso relativo di scaricamento 


    constructor() {
        super();
    }

    /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['FILENAMEESTENSIONE'];
    let arNumber = ['TIPO'];
    let arBoolean = [];
    let arDate = [];
    let arDateTime =[];
    let arTime = [];
    let arCollection = [];

    objDescriptor.addMultiple(arString, TypeDefinition.char);
    objDescriptor.addMultiple(arNumber, TypeDefinition.number);
    objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
    objDescriptor.addMultiple(arDate, TypeDefinition.date);
    objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
    objDescriptor.addMultiple(arTime, TypeDefinition.time);
    objDescriptor.addMultiple(arCollection, TypeDefinition.collection);
    
    return objDescriptor;
} 
}