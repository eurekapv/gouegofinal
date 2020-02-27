import { IDDocument } from './iddocument.model';
import { TypeDefinition, Descriptor} from '../models/descriptor.model';
import { PrenotazionePianificazione } from './prenotazionepianificazione.model';

export class Prenotazione extends IDDocument {
    DATA: Date; 
    IDAREAOPERATIVA: string;
    IDUTENTE: string;
    NOMINATIVO: string;
    MOBILENUMBER: string;
    IDTIPOPAGAMENTO: string;
    IMPORTO: number;
    INCASSATO: number;
    RESIDUO: number;
    IMPOSTA: number;
    TOTALE: number;
    PRENOTAZIONEPIANIFICAZIONE: PrenotazionePianificazione[];

    constructor() {
        super();

        this.PRENOTAZIONEPIANIFICAZIONE = [];
    }

    setJSONProperty(data: any) {
        super.setJSONProperty(data);

        this.setCollection(data);
    }

    setCollection(data: any) {

        this.PRENOTAZIONEPIANIFICAZIONE = [];

        if (data.PRENOTAZIONEPIANIFICAZIONE) {
            this.setCollectionPianificazioni(data);
        }
    }

    setCollectionPianificazioni(data: any) {
        data.PRENOTAZIONEPIANIFICAZIONE.forEach(element => {
            let newPianificazione = new PrenotazionePianificazione();

            newPianificazione.setJSONProperty(element);
            this.PRENOTAZIONEPIANIFICAZIONE.push(newPianificazione);
            
        })
    }

    /**
     * Ritorna il descrittore della Struttura Campi
     */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDAREAOPERATIVA',
                        'IDUTENTE',
                        'NOMINATIVO',
                        'MOBILENUMBER',
                        'IDTIPOPAGAMENTO'];
        let arNumber = [];
        let arNumberDecimal = ['IMPORTO','INCASSATO','RESIDUO','IMPOSTA','TOTALE'];
        let arBoolean = [];
        let arDate = ['DATA'];
        let arDateTime =[];
        let arTime = [];

        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arNumberDecimal, TypeDefinition.numberDecimal);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
        return objDescriptor;
    }
}