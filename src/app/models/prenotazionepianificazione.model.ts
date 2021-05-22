import { IDDocument } from '../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';
import { PaymentChannel, StatoPrenotazione } from './valuelist.model';
import { RequestForeign } from '../library/models/requestParams.model';

export class PrenotazionePianificazione extends IDDocument {
    IDPRENOTAZIONE: string;
    IDAREAOPERATIVA: string;
    IDLOCATION: string;
    IDSPORT: string;
    _DESCRSPORT: string;
    IDCAMPO: string;
    _DESCRCAMPO: string;
    DATAORAINIZIO: Date;
    ANNO: number;
    DATAORAFINE: Date;
    DURATAORE: number; 
    IMPONIBILE: number;
    IMPOSTA: number;
    INCASSATO: number;
    RESIDUO: number;
    STATO: StatoPrenotazione;
    NUMPARTECIPANTI: number;
    TOTALE: number;
    GUIDSERIE: string;
    PROGRESSIVO: string;
    IDTRANSACTION: string;
    CHANNELPAYMENT: PaymentChannel;

    _INCASSOCUSTODE: number;

    constructor(onlyInstance?:boolean) {
        super(onlyInstance);

        if (!onlyInstance) {
            this.NUMPARTECIPANTI = 1;
            this._DESCRCAMPO = '';
            this._DESCRSPORT = '';
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
                        'IDLOCATION',
                        'IDSPORT',
                        'IDCAMPO',
                        'GUIDSERIE',
                        'PROGRESSIVO',
                        'IDTRANSACTION'];
        let arNumber = ['ANNO','NUMPARTECIPANTI','CHANNELPAYMENT'];
        let arNumberDecimal = ['DURATAORE',
                               'IMPONIBILE',
                               'INCASSATO',
                               'RESIDUO',
                               'IMPOSTA',
                               'TOTALE',
                               'STATO'];
        let arBoolean = [];
        let arDate = [];
        let arDateTime =['DATAORAINIZIO','DATAORAFINE'];
        let arTime = [];

        objDescriptor.className = 'PrenotazionePianificazione';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'PRENOTAZIONEPIANIFICAZIONE';
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
        objDescriptor.setRelation('IDCAMPO','Campo');
        
        return objDescriptor;
    }


    static getReqForeignKeys(): RequestForeign[] {
        let arRequest: RequestForeign[] = [];
        let objForeign: RequestForeign;

        objForeign = new RequestForeign('IDAREAOPERATIVA');
        arRequest.push(objForeign);

        objForeign = new RequestForeign('IDSPORT');
        arRequest.push(objForeign);

        objForeign = new RequestForeign('IDCAMPO');
        arRequest.push(objForeign);

        objForeign = new RequestForeign('IDLOCATION');
        objForeign.addDescribeField('DENOMINAZIONE');
        objForeign.addDescribeField('INDIRIZZO');
        objForeign.addDescribeField('COMUNE');
        objForeign.addDescribeField('EMAIL');

        arRequest.push(objForeign);

        return arRequest;
    }
}