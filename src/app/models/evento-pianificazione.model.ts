import { Descriptor, TypeDefinition } from "../library/models/descriptor.model";
import { IDDocument } from "../library/models/iddocument.model";

export class EventoPianificazione extends IDDocument{
    IDEVENTO:           string;
    IDAREAOPERATIVA:    string;
    IDLOCATION:         string;
    IDCAMPO:            string;
    VALUEGIORNO:        number;
    DATAINIZIO:         Date;
    ORAINIZIO:          Date;
    ORAFINE:            Date;
    DATAORAINIZIO:      Date;
    DATAORAFINE:        Date;

    

    /**
     * Descrittore del modello
     * @returns 
     */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDAREAOPERATIVA','IDEVENTO','IDLOCATION','IDCAMPO'];
        let arNumber = ['VALUEGIORNO'];
        let arBoolean = [];
        let arDate = ['DATAINIZIO'];
        let arDateTime =['DATAORAINIZIO','DATAORAFINE'];
        let arTime = ['ORAINIZIO','ORAFINE'];
        
    
        objDescriptor.className = 'EventoPianificazione';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'EVENTOPIANIFICAZIONE';
        objDescriptor.describeField = '';
    
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);

                
        objDescriptor.setRelation('IDAREAOPERATIVA','Area');
        objDescriptor.setRelation('IDLOCATION','Location');
        objDescriptor.setRelation('IDCAMPO','Campo');
        objDescriptor.setRelation('IDEVENTO','Evento');
        
                            
        return objDescriptor;
    }
}
