import { IDDocument } from '../../library/models/iddocument.model';
import { TipoPrivateImage } from '../zsupport/valuelist.model';
import { TypeDefinition, Descriptor} from '../../library/models/descriptor.model';

export class PrivateImage extends IDDocument {
    TIPO: TipoPrivateImage;
    FILENAMEESTENSIONE: string; //Percorso relativo di scaricamento 


    constructor(onlyInstance?:boolean) {
        super(onlyInstance);
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

    objDescriptor.className = 'PrivateImage';
    objDescriptor.doRemote = false;
    objDescriptor.classWebApiName = '';


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