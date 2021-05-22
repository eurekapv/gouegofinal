import { IDDocument } from '../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';



export class CorsoCampo extends IDDocument {
    
    ID:             string;
    IDCORSO:        string;
    IDCAMPO:        string;
    DENOMINAZIONE:  string;


    constructor(onlyInstance?:boolean) {
        super(onlyInstance);
    }

    /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['ID','IDCORSO','IDCAMPO','DENOMINAZIONE'];
        let arNumber = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime =[];
        let arTime = [];
        let arCollection = [];

        objDescriptor.className = 'CorsoCampo';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'CORSOCAMPO';
        objDescriptor.describeField = 'DENOMINAZIONE';

        
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        objDescriptor.addMultiple(arCollection, TypeDefinition.collection);

        objDescriptor.setRelation('IDCORSO', 'Corso');
        objDescriptor.setRelation('IDCAMPO','Campo');
        
        return objDescriptor;
    }    

    setJSONProperty(data: any) {
        super.setJSONProperty(data);

        this.setOriginal();
    }
    
}

