import { Descriptor, TypeDefinition } from '../../library/models/descriptor.model';
import { IDDocument } from '../../library/models/iddocument.model';
import { ArticoloImages } from './articolo-images.model';
import { ArticoloColore } from './articolocolore.model';
import { ArticoloTaglieMisura } from './articolotagliemisura.model';
import { TipoArticolo, TipoPrezzo } from '../zsupport/valuelist.model';

export class Articolo extends IDDocument{
    IDAREAOPERATIVA: string;
    TIPOARTICOLO: TipoArticolo;
    CODICE: string;
    CODICEBARRE: string;
    DESCR: string;
    DESCRADDITIONAL: string;
    IDUNITAMISURA: string;
    VALIDOFINO: Date;
    PREZZONETTO: number;
    PREZZOLORDO: number;
    SCONTOTEXT: string;
    CATEGORIA: string;
    DESCRHTML: string;
    TIPOPREZZO: TipoPrezzo;
    FLAGTAGLIEMISURE: boolean;
    FLAGCOLORI: boolean;
    FLAGSHOPONLINE: boolean;
    IDVALUTA: string;
    TOTMINUTI: number;
    ARTICOLITAGLIEMISURE: ArticoloTaglieMisura[];
    ARTICOLICOLORI: ArticoloColore[];
    ARTICOLIIMAGES: ArticoloImages[];
    PATHCOVERIMAGE: string;

    constructor(onlyInstace?:boolean) {
        super(onlyInstace);
        this.ARTICOLITAGLIEMISURE = [];
        this.ARTICOLICOLORI = [];
        this.ARTICOLIIMAGES = [];
    }

    /**
     * 
     * @returns Descrittore del modello
     */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = [
            'IDAREAOPERATIVA',
            'CODICE',
            'CODICEBARRE',
            'DESCR',
            'IDUNTAMISURA',
            'SCONTOTEXT',
            'CATEGORIA',
            'DESCRHTML',
            'IDVALUTA',
            'PATHCOVERIMAGE',
            'DESCRADDITIONAL'
        ];
        let arNumber = ['PREZZONETTO', 'PREZZOLORDO', 'TIPOARTICOLO', 'TIPOPREZZO'];
        let arBoolean = ['FLAGTAGLIEMISURE', 'FLAGCOLORI', 'FLAGSHOPONLINE'];
        let arDate = [];
        let arDateTime =['VALIDOFINO'];
        let arTime = [];
        
        //Utilizzo la classe Estesa Articolo
        objDescriptor.className = 'Articolo';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'ARTICOLOEXTENDED';
        objDescriptor.describeField = 'DESCR';
    
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
                    
        //Aggiungo le collection
        objDescriptor.addCollection('ARTICOLITAGLIEMISURE','ArticoloTaglieMisura','IDARTICOLO');
        objDescriptor.addCollection('ARTICOLICOLORI','ArticoloColore','IDARTICOLO');
        objDescriptor.addCollection('ARTICOLIIMAGES','ArticoloImages','IDARTICOLO');
        
    
        objDescriptor.setRelation('IDUNITAMISURA','UnitaMisura');
        objDescriptor.setRelation('IDVALUTA','Valuta');
    
        
        return objDescriptor;
    }


    
    /**
     * Sovrascrivo il metodo per aggiungere le collection
     * @param data 
     */
    setJSONProperty(data: any) {
            //Chiamo il metodo IDDocument
            super.setJSONProperty(data);
      
            //Chiamo il metodo per le collection
            this.setCollection(data);
      
            //Imposto che il documento è originale
            this.setOriginal();
    }


    /**
     * Reimposto le collection se presenti
     * @param data 
     */
    setCollection(data: any) {
        let nameCollection = '';
        
        //Gestione Articolo Taglia Misura
        nameCollection = 'ARTICOLOTAGLIAMISURA';
        if (data[nameCollection]) {
            this.ARTICOLITAGLIEMISURE = [];
            let collection = data[nameCollection];
            collection.forEach(elItem => {
                let itemDoc = new ArticoloTaglieMisura();
                itemDoc.setJSONProperty(elItem);
                this.ARTICOLITAGLIEMISURE.push(itemDoc);
            })
        }

        //Gestione Articolo Colore
        nameCollection = 'ARTICOLOCOLORE';
        if (data[nameCollection]) {
            this.ARTICOLICOLORI = [];
            let collection = data[nameCollection];
            collection.forEach(elItem => {
                let itemDoc = new ArticoloColore();
                itemDoc.setJSONProperty(elItem);
                this.ARTICOLICOLORI.push(itemDoc);
            })
        }        

        //Gestione Articolo Images
        nameCollection = 'ARTICOLOIMAGES';
        if (data[nameCollection]) {
            this.ARTICOLIIMAGES = [];
            let collection = data[nameCollection];
            collection.forEach(elItem => {
                let itemDoc = new ArticoloImages();
                itemDoc.setJSONProperty(elItem);
                this.ARTICOLIIMAGES.push(itemDoc);
            })
        }              
    }

    /**
     * Ritorna URL della Immagine da mostrare
     * In assenza di immagine torna url immagine standard
     */
    getSrcImg(): string {
        let myUrl = '/assets/commercial/item_placeholder.png';

        if (this.PATHCOVERIMAGE && this.PATHCOVERIMAGE.length != 0) {
            myUrl = this.PATHCOVERIMAGE;
        }

        return myUrl;
    }
}