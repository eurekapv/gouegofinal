import { IDDocument } from "src/app/library/models/iddocument.model";
import { TargetSesso } from "../zsupport/valuelist.model";
import { Descriptor, TypeDefinition } from "src/app/library/models/descriptor.model";
import { MyDateTime } from "src/app/library/models/mydatetime.model";

export class CorsoGiornaliero extends IDDocument {
    IDCORSO: string;
    IDAREAOPERATIVA: string;
    IDLOCATION: string;
    IDCAMPO: string;
    DENOMINAZIONECAMPO: string;
    DATA: Date;
    DATAORAINIZIO: Date;
    DATAORAFINE: Date;
    ORELEZIONE: number;
    DENOMINAZIONE: string;
    IDSPORT: string;
    DENOMINAZIONESPORT: string;
    IDLIVELLOENTRATA: string;
    DENOMINAZIONELIVELLO: string;
    ISCRIZIONEDAL: Date;
    ISCRIZIONEAL: Date;
    TARGETSESSO: TargetSesso;
    MAXPARTECIPANTI: number;
    LISTTRAINERS: string;
    NUMISCRITTI: number;

    constructor() {
        super(true);
    }
    
    init() {
        super.init();
    }


    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = [
            'IDCORSO',
            'IDAREAOPERATIVA',
            'IDLOCATION',
            'IDCAMPO',
            'DENOMINAZIONE',
            'IDSPORT',
            'IDLIVELLOENTRATA',
            'DENOMINAZIONELIVELLO',
            'LISTTRAINERS',
            'DENOMINAZIONECAMPO',
            'DENOMINAZIONESPORT'
        ];
        let arNumber = ['ORELEZIONE','MAXPARTECIPANTI','TARGETSESSO','NUMISCRITTI'];
        let arBoolean = [];
        let arDate = [];
        let arDateTime =['DATAORAINIZIO','DATAORAFINE','DATA','ISCRIZIONEDAL','ISCRIZIONEAL'];
        let arTime = [];
        
    
        objDescriptor.className = 'CorsoGiornaliero';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'CORSOGIORNALIERO';
        objDescriptor.describeField = 'DENOMINAZIONE';
    
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
        objDescriptor.setRelation('IDCORSO','Corso');
    
        
        return objDescriptor;
    }

    /**
     * Controlla se alla data passata (oppure adesso) è possibile iscriversi
     * @param dataValue 
     */
    getFlagOpenIscrizioni(dataValue?: Date): boolean {
        let flagIscrizione: boolean = false;

        if (!dataValue) {
            dataValue = new Date();
        }

        //E' presente un range di date
        if (this.ISCRIZIONEDAL && this.ISCRIZIONEAL) {
            flagIscrizione = MyDateTime.isBetween(dataValue, this.ISCRIZIONEDAL, this.ISCRIZIONEAL);
        }
        else if (!this.ISCRIZIONEDAL && this.ISCRIZIONEAL) {
            //C'e' solo il momento finale
            flagIscrizione = MyDateTime.isBefore(dataValue, this.ISCRIZIONEAL);
        }
        else if (this.ISCRIZIONEDAL && !this.ISCRIZIONEAL) {
            //C'e' solo il momento iniziale
            flagIscrizione = MyDateTime.isAfter(dataValue, this.ISCRIZIONEDAL);
        }
        else {
            flagIscrizione = false;
        }


        return flagIscrizione;
    }

    /**
     * Controlla se ci sono posti liberi
     */
    getHasPostiLiberi(): boolean {
        let numResidui = (this.MAXPARTECIPANTI ? this.MAXPARTECIPANTI : 0) - (this.NUMISCRITTI ? this.NUMISCRITTI : 0);
        let flagLiberi = false;
        if (numResidui > 0) {
            flagLiberi = true;
        }
        else {
            flagLiberi = false;
        }
        return flagLiberi;
    }
}

/**
 * Classe per raggruppare le informazioni per Data
 */
export class GroupedCorsiGiornalieri {
    IDLOCATION: string;
    IDAREAOPERATIVA: string;
    DATEFILTER: Date;
    LISTCORSI: CorsoGiornaliero[];
    
    ALLREQUESTED: boolean;

    constructor() {
        this.LISTCORSI = [];
        this.IDLOCATION = '';
        this.IDAREAOPERATIVA = '';
        //Specifica se le ho richieste tutte
        this.ALLREQUESTED = false;
    }

    /**
     * Aggiunta di un corso 
     * @param itemDoc 
     */
    addCorso(itemDoc: CorsoGiornaliero): void {
        if (itemDoc) {
            this.LISTCORSI.push(itemDoc);
        }
    }

    /**
     * Cerca nell'array il corso per ID
     * @param idCorso 
     * @returns 
     */
    findCorsoById(idCorso: string): CorsoGiornaliero {
        let corsoDoc = this.LISTCORSI.find(elCorso => elCorso.ID == idCorso);

        return corsoDoc;
    }

    /**
     * Ritorna la DataOraInizio più alta presente nella lista
     */
    getMaxDataOraInizio(): Date {
        let lastStartDate: Date;

        if (this.LISTCORSI.length != 0) {
            for (let index = 0; index < this.LISTCORSI.length; index++) {
                const elCorso = this.LISTCORSI[index];
                if (!lastStartDate) {
                    lastStartDate = elCorso.DATAORAINIZIO;
                }
                else if (elCorso.DATAORAINIZIO > lastStartDate) {
                    lastStartDate = elCorso.DATAORAINIZIO;
                }
            }
        }

        return lastStartDate;
    }

    /**
     * Partendo da una collection ritorna la DataOraInizio piu' elevata
     * @param collection 
     */
    static getMaxDataOraInizioIn(collection: GroupedCorsiGiornalieri[]): Date {
        let lastStartDate: Date;

        if (collection && collection.length != 0) {
            for (let index = 0; index < collection.length; index++) {
                const elItem = collection[index];
                let tmpDate: Date = elItem.getMaxDataOraInizio();
                if (!lastStartDate) {
                    lastStartDate = tmpDate;
                }
                else if (tmpDate > lastStartDate) {
                    lastStartDate = tmpDate;
                }
            }
        }

        return lastStartDate;
    }
}
