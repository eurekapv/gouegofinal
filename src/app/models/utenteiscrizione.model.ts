import { IDDocument } from '../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';
import {  StatoPagamento, TipoCorso } from '../models/valuelist.model';

export class UtenteIscrizione extends IDDocument {

        IDCORSO:               string; //
        IDAREAOPERATIVA:       string; //
        TIPOCORSO:             number;
        DENOMINAZIONECORSO:    string;
        DATAINIZIO:            Date;
        ORAINIZIO:             Date;
        DATAFINE:              Date;
        ORELEZIONE:            number;
        GIORNIPREVISTI:        string;
        IDUTENTE:              string; //
        DATAISCRIZIONE:        Date;
        ANNOISCRIZIONE:        number;
        IDSPORT:               string;
        DENOMINAZIONESPORT:    string;
        ICONASPORT:            string;
        IDLOCATION:            string; //
        DENOMINAZIONELOCATION: string;
        INDIRIZZOLOCATION:     string;
        COMUNELOCATION:        string;
        IDCAMPO:               string;
        DENOMINAZIONECAMPO:    string;
        IDTIPOPAGAMENTO:       string;
        DESCRTIPOPAGAMENTO:    string;
        IMPORTO:               number;
        VERSATO:               number;
        RESIDUO:               number;
        CODICEALFA:            string;
        CODICEINT:             number;
        STATOISCRIZIONE:       number;

        constructor(onlyInstance?:boolean) {
            super(onlyInstance);
        }

    /**
     * Ritorna il descrittore della Struttura Campi
     */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDCORSO',
                        'IDAREAOPERATIVA',
                        'DENOMINAZIONECORSO',
                        'IDUTENTE',
                        'IDSPORT',
                        'DENOMINAZIONESPORT',
                        'ICONASPORT',
                        'IDLOCATION',
                        'DENOMINAZIONELOCATION',
                        'INDIRIZZOLOCATION',
                        'COMUNELOCATION',
                        'IDCAMPO',
                        'DENOMINAZIONECAMPO',
                        'IDTIPOPAGAMENTO',
                        'DESCRTIPOPAGAMENTO',
                        'CODICEALFA',
                        'GIORNIPREVISTI'
                        ];
        let arNumber = ['TIPOCORSO','ANNOISCRIZIONE','CODICEINT','STATOISCRIZIONE'];
        let arNumberDecimal = ['IMPORTO','VERSATO','RESIDUO','ORELEZIONE'];
        let arBoolean = [];
        let arDate = ['DATAINIZIO','DATAFINE','DATAISCRIZIONE'];
        let arDateTime =['ORAINIZIO'];
        let arTime = [];

        objDescriptor.className = 'UtenteIscrizione';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'UTENTEISCRIZIONE';
        objDescriptor.describeField = 'DENOMINAZIONECORSO';


        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arNumberDecimal, TypeDefinition.numberDecimal);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);

        objDescriptor.setRelation('IDCORSO','Corso');
        objDescriptor.setRelation('IDAREAOPERATIVA','Area');
        objDescriptor.setRelation('IDLOCATION','Location');
        objDescriptor.setRelation('IDSPORT','Sport');
        objDescriptor.setRelation('IDUTENTE','Utente');
        
        return objDescriptor;
    }

     /**
     * Ritorna una icona a seconda del tipo Corso
     */
    getIcon() {
        let nameIcon= 'ribbon';
  
        switch (this.TIPOCORSO) {
          case TipoCorso.corso:
            nameIcon = 'ribbon';
            break;
          
          case TipoCorso.provaGratuita: 
            nameIcon = 'trail-sign';
            break;
        
          default:
            nameIcon = 'ribbon';
            break;
        }
  
        return nameIcon;
        
      }

     /**
     * Ritorna il valore che è necessario pagare
     */
     get amountPayment(): number {

        let myAmount: number = 0;
        
        myAmount = this.RESIDUO;

        return myAmount;
     }
  
  
      /**
       * Stato del pagamento in formato testo
       * @param showForPay: se TRUE verrà restituito un messaggio per effettuare il pagamento
       */
      getCaptionStatePayment(showForPay: boolean = false): string {
        let caption = '';

        if (this.amountPayment != 0) {
            if (showForPay) {
                caption = 'Paga Ora';
            }
            else {
                caption = 'Corso da pagare';
            }
        }
        else {

            caption = 'Corso pagato';
        }
        return caption;
      }

      /**
       * Ritorna lo Stato del pagamento Iscrizione
       */
      getStatoPagamento(): StatoPagamento {
        let myStato = StatoPagamento.daPagare;

        if (this.RESIDUO == 0 ) {
          myStato = StatoPagamento.pagato;
        }
        else if (this.RESIDUO != 0 && this.RESIDUO != this.IMPORTO) {
          myStato = StatoPagamento.pagatoInParte;
        }

        return myStato;
      }
}
