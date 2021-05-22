import { IDDocument } from '../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';
import { PageType } from './valuelist.model';

export class AreaLink extends IDDocument {
    IDAREAOPERATIVA: string;
    TIPOURL: PageType;
    REFERURL: string;

    constructor(onlyInstance?:boolean) {
        super(onlyInstance);
    }


    /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['IDAREAOPERATIVA',
                    'REFERURL'];
    let arNumber = ['TIPOURL'];
    let arBoolean = [];
    let arDate = [];
    let arDateTime =[];
    let arTime = [];
    let arCollection = [];

    objDescriptor.className = 'AreaLink';
    objDescriptor.doRemote = true;
    objDescriptor.classWebApiName = 'AREALINK';
    objDescriptor.describeField = 'REFERURL';

    objDescriptor.addMultiple(arString, TypeDefinition.char);
    objDescriptor.addMultiple(arNumber, TypeDefinition.number);
    objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
    objDescriptor.addMultiple(arDate, TypeDefinition.date);
    objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
    objDescriptor.addMultiple(arTime, TypeDefinition.time);
    objDescriptor.addMultiple(arCollection, TypeDefinition.collection);
    
    //Aggiungo le relazioni
    objDescriptor.setRelation('IDAREAOPERATIVA', 'Area');
    
    return objDescriptor;
    }

    /**
     * Sovrascrive il metodo IDDOcument, lo richiama e sistema le collection
     * @param data JSON Received
     */
    setJSONProperty(data: any) {
        super.setJSONProperty(data);

        this.setOriginal();
    }

}