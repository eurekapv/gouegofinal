import { IDDocument } from '../../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../../library/models/descriptor.model';
import { MyDateTime } from 'src/app/library/models/mydatetime.model';


export class UtentePrenotazione extends IDDocument {
    IDPRENOTAZIONE: string;
    IDAREAOPERATIVA: string;
    IDUTENTE: string;

    IDLOCATION: string;
    INDIRIZZOLOCATION: string;
    COMUNELOCATION: string;

    IDSPORT: string;
    DENOMINAZIONESPORT: string;

    IDCAMPO: string;
    DENOMINAZIONECAMPO: string;

    DATAORAINIZIO: Date;
    DATAORAFINE: Date;

    
    DURATAORE: number; 
    NUMPARTECIPANTI: number;
    
    

    constructor(onlyInstance?:boolean) {
        
        super(onlyInstance);

        if (!onlyInstance) {
            this.NUMPARTECIPANTI = 1;
        }
    }

    setJSONProperty(data: any) {
        super.setJSONProperty(data);

        this.setCollection(data);

        //Imposto che il documento è originale
        this.setOriginal();
    }

    setCollection(data: any) {

    }

    /**
     * Ritorna il descrittore della Struttura Campi
     */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDPRENOTAZIONE',
                        'IDAREAOPERATIVA',
                        'IDUTENTE',
                        'IDLOCATION',
                        'INDIRIZZOLOCATION',
                        'COMUNELOCATION',
                        'IDSPORT',
                        'DENOMINAZIONESPORT',
                        'IDCAMPO',
                        'DENOMINAZIONECAMPO'
                        ];
        let arNumber = ['NUMPARTECIPANTI'];
        let arNumberDecimal = ['DURATAORE'];
        let arBoolean = [];
        let arDate = [];
        let arDateTime =['DATAORAINIZIO','DATAORAFINE'];
        let arTime = [];

        objDescriptor.className = 'UtentePrenotazione';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'UTENTEPRENOTAZIONE';
        objDescriptor.describeField = 'DATAORAINIZIO';


        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arNumberDecimal, TypeDefinition.numberDecimal);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);

        objDescriptor.setRelation('IDPRENOTAZIONE','Prenotazione');
        objDescriptor.setRelation('IDAREAOPERATIVA','Area');
        objDescriptor.setRelation('IDLOCATION','Location');
        objDescriptor.setRelation('IDSPORT','Sport');
        objDescriptor.setRelation('IDUTENTE','Utente');
        objDescriptor.setRelation('IDCAMPO','Campo');
        
        return objDescriptor;
    }



    /**
     * Specifica se la lezione è prevista nel futuro
     */
    isInFuture(): boolean {
        let flagResult: boolean = false;
        flagResult = MyDateTime.isSameOrAfter(this.DATAORAFINE,new Date(), "minute");
        return flagResult;
    }

    /**
     * Ritorna una icona sulla base del periodo
     */
    getIconForPeriod(): string {
        let iconName: string = '';
        //Non iniziato: enter-outline
        //In corso: code-download-outline
        //Terminato: exit-otline
        //Non iniziato
        if (MyDateTime.isBefore(new Date(), this.DATAORAINIZIO)) {
        iconName = 'enter-outline';
        }
        else if (MyDateTime.isAfter(new Date(), this.DATAORAFINE)) {
        iconName = 'exit-outline';
        }
        else {
        iconName = 'code-download-oultine';
        }

        return iconName;
    }

    /**
     * Ritorna un testo sulla base del periodo
     */
    getTextForPeriod(): string {
        let textPeriod: string = '';
        //Non iniziato
        //In corso
        //Terminato
        //Non iniziato
        if (MyDateTime.isBefore(new Date(), this.DATAORAINIZIO)) {
        textPeriod = 'In programma';
        }
        else if (MyDateTime.isAfter(new Date(), this.DATAORAFINE)) {
        textPeriod = 'Completata';
        }
        else {
        textPeriod = 'In corso';
        }

        return textPeriod;
    }  
}

