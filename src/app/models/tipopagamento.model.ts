import { IDDocument } from '../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';
import { TipoScadenza } from './valuelist.model';
import { TipoPagamentoScadenza } from './tipo-pagamento-scadenza.model';

export class TipoPagamento extends IDDocument {

    DESCR: string;
    MODALITA: number;
    SCADENZA: TipoScadenza;
    GIORNISCADENZA: string;
    TIPIPAGAMENTISCADENZE: TipoPagamentoScadenza[];
    PREDEFINITACORSI: boolean;
    PREDEFINITAPRENOTAZIONI: boolean;
    PREDEFINITAEVENTI: boolean;
    PREDEFINITASHOP: boolean;
    APPENABLE: boolean;


    constructor(onlyInstance?:boolean) {
        super(onlyInstance);

        if (!onlyInstance) {
            this.TIPIPAGAMENTISCADENZE = [];
        }
    }

    /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['DESCR',
                        'GIORNISCADENZA'
                        ];
        let arNumber = ['MODALITA', 'SCADENZA'];
        let arBoolean = ['PREDEFINITACORSI', 'PREDEFINITAPRENOTAZIONI','PREDEFINITAEVENTI','PREDEFINITASHOP','APPENABLE'];
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

        objDescriptor.addCollection('TIPIPAGAMENTISCADENZE','TipoPagamentoScadenza','IDTIPOPAGAMENTO');
        
        return objDescriptor;
    }

    setJSONProperty(data: any) {
        //Richiamo il metodo per l'oggetto
        super.setJSONProperty(data);

        //Chiamo il metodo per le collection
        this.setCollection(data);

        this.setOriginal();
    }

    /**
     * Reimposto le collection se presenti
     * @param data 
     */
    setCollection(data: any) {
        let nameCollection = '';
        
        //Gestione Articolo Taglia Misura
        nameCollection = 'TIPOPAGAMENTOSCADENZA';
        if (data[nameCollection]) {
            this.TIPIPAGAMENTISCADENZE = [];
            let collection = data[nameCollection];
            collection.forEach(elItem => {
                let itemDoc = new TipoPagamentoScadenza();
                itemDoc.setJSONProperty(elItem);
                this.TIPIPAGAMENTISCADENZE.push(itemDoc);
            })
        }

                  
    }    

    /**
     * Crea una etichetta per indicare la modalità espressa 
     * dalla voce Scadenza
     */
    getLabelForScadenza(): string {
        let myLabel = '';

        switch (this.SCADENZA) {

            case TipoScadenza.scadenzaImmediata:
              myLabel = 'Rata Unica';
              break;
      
            case TipoScadenza.aGiorniDallaData:
              myLabel = this.GIORNISCADENZA + ' gg.'
              break;
      
            case TipoScadenza.scadeenzeDefinite:
              if (this.TIPIPAGAMENTISCADENZE.length != 0) {

                for (let index = 0; index < this.TIPIPAGAMENTISCADENZE.length; index++) {
                    const elScadenza = this.TIPIPAGAMENTISCADENZE[index];
                    if (myLabel.length != 0) {
                        myLabel += '/';
                    }
                    myLabel += `${elScadenza.GIORNI}`;
                }

                myLabel += ' gg.'
              }
              else {
                myLabel = 'Rateale';
              }
              break;
          
            default:
              break;
          }

          return myLabel;
    }

    /**
     * Imposta il documento come Tipo Pagamento Immediato
     */
    setStandardImmediato(): void {
        this.DESCR = "Rata Unica";
        this.PREDEFINITACORSI = true;
        this.PREDEFINITAPRENOTAZIONI = false;
        this.SCADENZA = TipoScadenza.scadenzaImmediata;
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
        if (this.SCADENZA == TipoScadenza.scadenzaImmediata) {
            flagRateale = false;
        }

        return flagRateale;
    }
}