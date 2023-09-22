import { Descriptor, TypeDefinition } from '../library/models/descriptor.model';
import { IDDocument } from '../library/models/iddocument.model';
import { GeneratorQrcode } from './imdb/generator-qrcode.model';
import { AreaApplicazioneTessera, SettoreQrCode, ValueList } from './valuelist.model';

export class Tesseramento extends IDDocument{

    IDUTENTE: string;
    IDTIPOTESSERA: string;
    IDAREAOPERATIVA: string;
    FLAGCLUB: boolean;
    CODICE: string;
    NUMERO: number;
    DATAEMISSIONE: Date;
    DURATAMESI: number;
    DATASCADENZA: Date;
    IDMASTERDOCUMENTO: string;
    ANNULLATA: number;
    LISTAREAAPPLICAZIONE: string;

    constructor(onlyInstance?: boolean){
        super(onlyInstance);
    }

    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDUTENTE', 'IDTIPOTESSERA', 'IDAREAOPERATIVA', 'CODICE','IDMASTERDOCUMENTO', 'LISTAREAAPPLICAZIONE'];
        let arNumber = ['NUMERO','DURATAMESI'];
        let arBoolean = ['FLAGCLUB','ANNULLATA'];
        let arDate = ['DATAEMISSIONE','DATASCADENZA'];
        let arDateTime =[];
        let arTime = [];
        
    
        objDescriptor.className = 'Tesseramento';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'TESSERAMENTO';
        objDescriptor.describeField = 'CODICE';
    
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
                            
        return objDescriptor;
    }  
    
    /**
     * Indica se la tessera è valida
     * @returns 
     */
    isValid():boolean {
        let valid = false;
        if (this.DATASCADENZA && this.DATASCADENZA >= new Date()) {
            valid = true;
        }

        return valid;
    }

    /**
     * Decodifica la list Area Applicazione
     * @param prefixText
     */
    decodeListAreaApplicazione(prefixText?: string): string {
        let valueStr : string = '';

        if (!this.LISTAREAAPPLICAZIONE || this.LISTAREAAPPLICAZIONE.length == 0) {
            valueStr = 'qualsiasi attività';
        }
        else {

            if (this.LISTAREAAPPLICAZIONE.includes(AreaApplicazioneTessera.tesseraCorsi.toString())) {
                valueStr = 'Corsi';
            }
    
            if (this.LISTAREAAPPLICAZIONE.includes(AreaApplicazioneTessera.tesseraPrenotazioni.toString())) {
                if (valueStr.length != 0) {
                    valueStr += ', '
                }
    
                valueStr += 'Prenotazioni';
            }
    
            if (this.LISTAREAAPPLICAZIONE.includes(AreaApplicazioneTessera.tesseraEventi.toString())) {
                if (valueStr.length != 0) {
                    valueStr += ', '
                }
    
                valueStr += 'Eventi';
            }        
        }

        if (prefixText && prefixText.length != 0) {
            valueStr = `${prefixText} ${valueStr}`;
        }

        return valueStr;
    }

    /**
    * Ritorna il QRCODE della Tessera
    */
    getQrCode(): string {
        let myQrCode: string = '';
        let flagCreation: boolean;
        let objQrCode: GeneratorQrcode;

        objQrCode = new GeneratorQrcode();
        objQrCode.tipo = SettoreQrCode.qrCodeTessera;
        objQrCode.keyOne = this.ID;

        flagCreation = objQrCode.setQrCodeFor();

        myQrCode = objQrCode.qrCode;

        return myQrCode;
      }    
}

