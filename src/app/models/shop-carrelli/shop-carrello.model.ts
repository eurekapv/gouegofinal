import { Descriptor, TypeDefinition } from "../../library/models/descriptor.model";
import { IDDocument } from "../../library/models/iddocument.model";
import { StatoCarrello, TipoPrezzo } from "../valuelist.model";
import { DetailCarrello } from "./detail-carrello.model";
import { RiepilogoCarrello } from "./riepilogo-carrello.model";

export class ShopCarrello extends IDDocument {

    IDAREAOPERATIVA: string;
    IDVALUTA: string;
    DECIMALIDOC: number;
    STATOCARRELLO: StatoCarrello;
    TIPOLOGIA: number; //Fisso a 20 = Ordine
    TIPOPREZZI: TipoPrezzo;
    DATADOCUMENTO: Date;
    NUMERODOCUMENTO: number;
    NUMEROSTAMPA: string;
    ANNO: number;
    IDANAGRAFICA: string;
    NOMINATIVO: string;
    INDIRIZZO: string;
    COMUNE: string;
    CAP: string;
    PROVINCIA: string;
    ISOSTATO: string;
    CODICEFISCALE: string;
    PARTITAIVA: string;
    CODDESTINATARIOPEC: string;
    EMAIL: string;
    NOTESDESTINAZIONE: string;
    INDIRIZZODESTINAZIONE: string;
    COMUNEDESTINAZIONE: string;
    CAPDESTINAZIONE: string;
    PROVINCIADESTINAZIONE: string;
    STATODESTINAZIONE: string;
    RITIROINSEDE: boolean;
    TOTIMPONIBILE: number;
    TOTIMPOSTA: number;
    TOTINTERMEDIO: number;
    TOTARROTONDAMENTO: number;
    SCONTOFINALE: number;
    SPESETRASPORTO: number;
    TOTDOCUMENTO: number;
    IDPAGAMENTO: string;
    TOTSALDATO: number;
    TOTRESIDUO: number;
    NOTESSTAMPA: string;
    NOTESINTERNE: string;
    DETAILCARRELLO: DetailCarrello[];
    RIEPILOGOCARRELLO: RiepilogoCarrello[];

    constructor(onlyInstance?:boolean) {
        super(onlyInstance);

        this.DETAILCARRELLO = [];
        this.RIEPILOGOCARRELLO = [];

    }    

    /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDAREAOPERATIVA',
                        'IDVALUTA',
                        'NUMEROSTAMPA',
                        'IDANAGRAFICA',
                        'NOMINATIVO',
                        'INDIRIZZO',
                        'COMUNE',
                        'CAP',
                        'PROVINCIA',
                        'ISOSTATO',
                        'CODICEFISCALE',
                        'PARTITAIVA',
                        'CODDESTINATARIOPEC',
                        'EMAIL',
                        'NOTESDESTINAZIONE',
                        'INDIRIZZODESTINAZIONE',
                        'COMUNEDESTINAZIONE',
                        'CAPDESTINAZIONE',
                        'PROVINCIADESTINAZIONE',
                        'STATODESTINAZIONE',
                        'IDPAGAMENTO',
                        'NOTESSTAMPA',
                        'NOTESINTERNE'
                        ];
        let arNumber = ['DECIMALIDOC',
                        'STATOCARRELLO',
                        'TIPOLOGIA',
                        'TIPOPREZZI',
                        'NUMERODOCUMENTO',
                        'ANNO',
                        'TOTIMPONIBILE',
                        'TOTIMPOSTA',
                        'TOTINTERMEDIO',
                        'TOTARROTONDAMENTO',
                        'SCONTOFINALE',
                        'SPESETRASPORTO',
                        'TOTDOCUMENTO',
                        'TOTSALDATO',
                        'TOTRESIDUO'];
        let arBoolean = ['RITIROINSEDE'];
        let arDate = ['DATADOCUMENTO'];
        let arDateTime =[];
        let arTime = [];
    
        objDescriptor.className = 'ShopCarrello';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'SHOPCARRELLO';
        objDescriptor.describeField = 'NOMINATIVO';
    
        
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);

        objDescriptor.addCollection('DETAILCARRELLO',
                                    'DetailCarrello', 
                                    'IDSHOPCARRELLO');

        objDescriptor.addCollection('RIEPILOGOCARRELLO',
                                    'RiepilogoCarrello', 
                                    'IDSHOPCARRELLO');                                    
        
        return objDescriptor;
    } 
    
    /**
     * Impostazione dei dati in Arrivo
     * @param data 
     */
    setJSONProperty(data: any) {
        //Imposto i campi di primo livello
        super.setJSONProperty(data);

        //Imposto le collection di Secondo Livello
        this.setCollection(data);

        //Imposto che il documento è originale
        this.setOriginal();
    }
    
    /**
     * Imposta le collection
     * @param data JSON Received
     */
    setCollection(data:any) {
        
        this.DETAILCARRELLO = [];
        this.RIEPILOGOCARRELLO = [];

        if (data.hasOwnProperty('DETAILCARRELLO')) {
            //Creo i record di riferimento
            this.setCollectionDetail(data['DETAILCARRELLO']);
        }

        if (data.hasOwnProperty('RIEPILOGOCARRELLO')) {
            //Creo i record di riferimento
            this.setCollectionRiepilogo(data['RIEPILOGOCARRELLO']);
        }        
        
    }  
    
    
    /**
     * Converte i dati per la collection Detail
     * @param listData 
     */
    setCollectionDetail(listData: any) {

        this.DETAILCARRELLO = [];

        if (listData) {
        
            //Ciclo sui dati
            listData.forEach(itemData => {
                let itemDoc = new DetailCarrello();
                itemDoc.setJSONProperty(itemData);
                itemDoc.setOriginal();
                this.DETAILCARRELLO.push(itemDoc);
            })
        }
    }

    /**
     * Converte i dati per la collection Riepilogo
     * @param listData 
     */
    setCollectionRiepilogo(listData: any) {

        this.RIEPILOGOCARRELLO = [];

        if (listData) {
        
            //Ciclo sui dati
            listData.forEach(itemData => {
                let itemDoc = new RiepilogoCarrello();
                itemDoc.setJSONProperty(itemData);
                itemDoc.setOriginal();
                this.RIEPILOGOCARRELLO.push(itemDoc);
            })
        }
    }    
}
