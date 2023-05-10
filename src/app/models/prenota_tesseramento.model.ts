import { IDDocument } from '../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';
import { PrenotaTesseramentoAzione } from './valuelist.model';

export class PrenotaTesseramento extends IDDocument {

    IDPRENOTAZIONE: string;
    AZIONE: PrenotaTesseramentoAzione;
    IDPRIMARY: string;
    IDARTICOLO: string;
    IDCODICEIMPOSTA: string;
    DESCR: string;
    PREZZO: number;
    PREZZONETTO: number;
    IMPONIBILE: number;
    ALIQUOTA: number;
    GRATUITA: boolean;
    SCONTOTEXT: string;
    SCONTORIGA: number;
    PREZZOSCONTATO: number;
    IMPOSTA: number;
    DURATAMESI: number;
    IDTIPOTESSERA: string;

    constructor(onlyInstance?:boolean) {
        super(onlyInstance);

        if (!onlyInstance) {
            this.PREZZO = 0;
            this.PREZZONETTO = 0;
            this.IMPONIBILE = 0;
            this.ALIQUOTA = 0;
            this.GRATUITA = false;
            this.SCONTORIGA = 0;
            this.PREZZOSCONTATO = 0;
            this.IMPOSTA = 0;
            this.DURATAMESI = 0;
        }
        
    }


    setJSONProperty(data: any) {
        super.setJSONProperty(data);
        //Imposto che il documento è originale
        this.setOriginal();
    }


    /**
     * Ritorna il descrittore della Prenotazione
     */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDPRENOTAZIONE',
                        'IDPRIMARY',
                        'IDARTICOLO',
                        'IDCODICEIMPOSTA',
                        'DESCR',
                        'SCONTOTEXT',
                        'IDTIPOTESSERA',
                        ];
        let arNumber = ['AZIONE','DURATAMESI'];
        let arNumberDecimal = ['PREZZO','PREZZONETTO','IMPONIBILE','ALIQUOTA','SCONTORIGA','PREZZOSCONTATO','IMPOSTA'];
        let arBoolean = ['GRATUITA'];
        let arDate = [];
        let arDateTime =[];
        let arTime = [];

        objDescriptor.className = 'PrenotaTesseramento';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'PRENOTATESSERAMENTO';
        objDescriptor.describeField = 'DESCR';

        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arNumberDecimal, TypeDefinition.numberDecimal);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);

        objDescriptor.setRelation('IDAREAOPERATIVA','Area');
        objDescriptor.setRelation('IDUTENTE','Utente');
        
        
        return objDescriptor;
    }



    /**
     * Converte il JSON ricevuto e ritorna un PrenotaTesseramento
     * @param JsonData Dati JSON ricevuti
     */
    static getFromJson(JsonData: string): PrenotaTesseramento {
        let document = new PrenotaTesseramento();
        document.setJSONProperty(JsonData);
  
        return document;
      }




      
    
}