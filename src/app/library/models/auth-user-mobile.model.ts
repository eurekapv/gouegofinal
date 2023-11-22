import { OperationAuthUserMobile } from "src/app/models/zsupport/valuelist.model";
import { IDDocument } from "./iddocument.model";
import { Descriptor, TypeDefinition } from "./descriptor.model";

//Nuovo documento usato per le comunicazioni con il server
//riguardanti operazioni su un profilo
export class AuthUserMobile extends IDDocument {

    OPERATION       : OperationAuthUserMobile;
    GUIDUTENTE      : string;
    USERNAME        : string;
    PASSWORDACTUAL  : string;
    PASSWORDNEXT    : string;
    CRYPTED         : boolean;

    init() {
        this.CRYPTED = false;
    }

          /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['GUIDUTENTE',
                    'USERNAME',
                    'PASSWORDACTUAL',
                    'PASSWORDNEXT',
                    ];
    let arNumber = ['OPERATION',];
    let arNumberDecimal = [];
    let arBoolean = ['CRYPTED'];
    let arDate = [];
    let arDateTime =[];
    let arTime = [];
    let arCollection = [''];

    objDescriptor.className = 'AuthUserMobile';
    objDescriptor.doRemote = true;
    objDescriptor.classWebApiName = 'AUTHUSERMOBILE';
    objDescriptor.describeField = 'MESSAGE'

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
