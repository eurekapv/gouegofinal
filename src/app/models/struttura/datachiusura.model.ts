import { Descriptor, TypeDefinition } from '../../library/models/descriptor.model';
import { IDDocument } from '../../library/models/iddocument.model';
import { AttivitaChiusura, TipoChiusura } from '../zsupport/valuelist.model';

export class DataChiusura extends IDDocument{

    TIPOCHIUSURA: TipoChiusura;
    ATTIVITACHIUSURA: AttivitaChiusura;
    DATADAL: Date;
    DATAAL: Date;
    IDAREA: string;
    IDLOCATION: string;
    IDCAMPO: string;
    NOTES:  string;
    MOTIVAZIONE: string;



      /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDAREA',
                        'IDLOCATION',
                        'IDCAMPO',
                        'NOTES',
                        'MOTIVAZIONE'
                        ];
        let arNumber = ['TIPOCHIUSURA','ATTIVITACHIUSURA'];
        let arBoolean = [];
        let arDate = ['DATADAL','DATAAL'];
        let arDateTime =[];
        let arTime = [];
        

        objDescriptor.className = 'DataChiusura';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'DATACHIUSURA';
        objDescriptor.describeField = 'MOTIVAZIONE';

        
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
        objDescriptor.setRelation('IDAREAOPERATIVA','Area');
        objDescriptor.setRelation('IDLOCATION','Location');
        objDescriptor.setRelation('IDCAMPO','Campo');


        return objDescriptor;
    }    

    constructor(onlyInstance: boolean = false){
        super(onlyInstance);
    }

}