import { IDDocument } from '../../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../../library/models/descriptor.model';

export class CorsoProgramma extends IDDocument {
    IDCORSO: string;
    TESTOHTML: string;

    constructor(onlyInstance?:boolean) {
        super(onlyInstance);
    }

    /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDCORSO',
                        'TESTOHTML'
                        ];
        let arNumber = [];
        let arDecimal = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime =[];
        let arTime = [];
        let arCollection = [];

        objDescriptor.className = 'CorsoProgramma';
        objDescriptor.classWebApiName = 'CORSOPROGRAMMA';
        objDescriptor.doRemote = true;

        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arDecimal, TypeDefinition.numberDecimal);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        objDescriptor.addMultiple(arCollection, TypeDefinition.collection);

        objDescriptor.setRelation('IDCORSO','Corso');
        
        return objDescriptor;
    }
}