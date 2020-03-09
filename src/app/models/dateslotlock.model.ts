import { IDDocument } from './iddocument.model';
import { TypeDefinition, Descriptor} from '../models/descriptor.model';

export class DateSlotLock extends IDDocument {
    RESULT: boolean;
    MESSAGE: string;
    DATA: Date;
    APERTOCHIUSO: boolean;
    TIMELOCK: TimeLock[];

    constructor() {
        super();
        this.RESULT = false;
        this.APERTOCHIUSO = false;
        this.TIMELOCK = [];
    }


    setJSONProperty(data: any) {
        super.setJSONProperty(data);

        this.setCollection(data);
    }

    /**
     * Imposta le collection
     */
    setCollection(data: any) {
        this.TIMELOCK = [];

        if (data) {
            if (data.TIMELOCK) {

                data.TIMELOCK.forEach(element => {

                    let newTl = new TimeLock();
                    newTl.setJSONProperty(element);
                    this.TIMELOCK.push(newTl);
                });
            }
        }
    }
    
    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['MESSAGE'];
        let arNumber = [];
        let arNumberDecimal = [];
        let arBoolean = ['APERTOCHIUSO','RESULT'];
        let arDate = ['DATA'];
        let arDateTime =[];
        let arTime = [];
        let arCollection = ['TIMELOCK'];
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arNumberDecimal, TypeDefinition.numberDecimal);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        objDescriptor.addMultiple(arCollection, TypeDefinition.collection);
        
        return objDescriptor;
    }
}

export class TimeLock extends IDDocument {
    START: Date;
    END: Date;

    constructor() {
        super();
      }
    
    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = [];
        let arNumber = [];
        let arNumberDecimal = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime =['START','END'];
        let arTime = [];
        let arCollection = [];
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arNumberDecimal, TypeDefinition.numberDecimal);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        objDescriptor.addMultiple(arCollection, TypeDefinition.collection);
        
        return objDescriptor;
    }

}