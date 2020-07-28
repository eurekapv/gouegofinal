import { IDDocument } from '../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';


export class CampoSport extends IDDocument {
    IDCAMPO: string;
    IDSPORT: string;
    _DESCRSPORT: string;

    constructor(onlyInstance?:boolean) {
        super(onlyInstance);

        if (!onlyInstance) {
            this._DESCRSPORT = '';
        }
    }

    

    /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDCAMPO',
                        'IDSPORT',
                        '_DESCRSPORT'];
        let arNumber = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime =[];
        let arTime = [];
        let arCollection = [];

        objDescriptor.className = 'CampoSport';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'CAMPOSPORT';
        
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        objDescriptor.addMultiple(arCollection, TypeDefinition.collection);
        
        objDescriptor.setRelation('IDSPORT','Sport');
        objDescriptor.setRelation('ICAMPO','Campo');
        
        return objDescriptor;
    }


}