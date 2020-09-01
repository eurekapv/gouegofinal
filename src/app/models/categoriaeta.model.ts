import { IDDocument } from '../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';

export class CategoriaEta extends IDDocument {
    CODICE: string;
    ETAMINIMA: number;
    ETAMASSIMA: number;
    DESCTOOLTIP: string;

    constructor(onlyInstance?:boolean) {
        super(onlyInstance);
    }

          /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['CODICE',
                    'DESCTOOLTIP'
                    ];
    let arNumber = ['ETAMINIMA','ETAMASSIMA'];
    let arBoolean = [];
    let arDate = [];
    let arDateTime =[];
    let arTime = [];
    let arCollection = [];

    objDescriptor.className = 'CategoriaEta';
    objDescriptor.classWebApiName = 'CATEGORIEETA';
    objDescriptor.doRemote = true;
    objDescriptor.describeField = 'DESCTOOLTIP';

    objDescriptor.addMultiple(arString, TypeDefinition.char);
    objDescriptor.addMultiple(arNumber, TypeDefinition.number);
    objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
    objDescriptor.addMultiple(arDate, TypeDefinition.date);
    objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
    objDescriptor.addMultiple(arTime, TypeDefinition.time);
    objDescriptor.addMultiple(arCollection, TypeDefinition.collection);


    
    return objDescriptor;
}

    setJSONProperty(data: any) {
        super.setJSONProperty(data);
    }


    /**
     * Verifica se l'eta rientra nel range
     * @param eta Eta da controllare
     */
    isValid(eta: number):boolean {

        let isValid = false;
        if (!this.ETAMINIMA && !this.ETAMASSIMA) {
            isValid = true;
        }
        else if (!this.ETAMASSIMA) {
            //Non c'e' eta massima solo la minima
            if (eta >= this.ETAMINIMA) {
                isValid = true;
            }
        }
        else if (!this.ETAMINIMA) {
            //Non c'e' eta minima solo la massima
            if (eta <= this.ETAMASSIMA) {
                isValid = true;
            }
        }
        else {
            //Ci sono entrambi le eta
            if (eta >= this.ETAMINIMA && eta <= this.ETAMASSIMA) {
                isValid = true;
            }
        }

        return isValid;
    }
   
}