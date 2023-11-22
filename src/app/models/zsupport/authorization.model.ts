import { Descriptor, TypeDefinition } from "../../library/models/descriptor.model";
import { IDDocument } from "../../library/models/iddocument.model";

export class Authorization extends IDDocument{
    IDREF: string;
    DATAORAEMISSIONE: Date;
    AUTHTOKEN: string;

    /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['IDREF',
                    'AUTHTOKEN'];
    let arNumber = [];
    let arBoolean = [];
    let arDate = [];
    let arDateTime =['DATAORAEMISSIONE'];
    let arTime = [];
    let arCollection = [];

    objDescriptor.className = 'Authorization';
    objDescriptor.doRemote = true;
    objDescriptor.classWebApiName = 'AUTHORIZATION';
    objDescriptor.describeField = 'AUTHTOKEN';

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
