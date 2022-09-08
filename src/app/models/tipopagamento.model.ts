import { IDDocument } from '../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';
import { TipoScadenza } from './valuelist.model';

export class TipoPagamento extends IDDocument {

    DESCR: string;
    PREDEFINITACORSI: boolean;
    PREDEFINITAPRENOTAZIONI: boolean;
    MODALITA: number;
    TIPOSCADENZA: TipoScadenza;
    GIORNISCADENZA: string

    constructor(onlyInstance?:boolean) {
        super(onlyInstance);
    }

          /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['DESCR',
                    'GIORNISCADENZA'
                    ];
    let arNumber = ['MODALITA', 'TIPOSCADENZA'];
    let arBoolean = ['PREDEFINITACORSI', 'PREDEFINITAPRENOTAZIONI'];
    let arDate = [];
    let arDateTime =[];
    let arTime = [];
    let arCollection = [];

    objDescriptor.className = 'TipoPagamento';
    objDescriptor.classWebApiName = 'TIPOPAGAMENTO';
    objDescriptor.doRemote = true;
    objDescriptor.describeField = 'DESCR';

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

        this.setOriginal();
    }

    /**
     * Imposta il documento come Tipo Pagamento Immediato
     */
    setStandardImmediato(): void {
        this.DESCR = "Rata Unica";
        this.PREDEFINITACORSI = true;
        this.PREDEFINITAPRENOTAZIONI = false;
        this.TIPOSCADENZA = TipoScadenza.scadenzaImmediata;
    }
    
    /**
     * Crea un documento fittizio con la modalità Standard Immediato
     */
    static getDocStandardImmediato(): TipoPagamento {

        let myDoc = new TipoPagamento();
        myDoc.setStandardImmediato();
        myDoc.setOriginal();

        return myDoc;
    }
   
    /**
     * Torna se il documento prevede un pagamento rateale
     */
    isRateale():boolean {
        let flagRateale = true;
        if (this.TIPOSCADENZA == TipoScadenza.scadenzaImmediata) {
            flagRateale = false;
        }

        return flagRateale;
    }
}