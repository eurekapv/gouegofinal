import { IDDocument } from '../library/models/iddocument.model';
import { Descriptor, TypeDefinition } from '../library/models/descriptor.model';
import { AutomatismoApplicazioneTessera, TipoAutomatismoTessera } from './valuelist.model';
import { TipoTesseraTemplate } from './tipo-tessera-template';

export class TipoTessera extends IDDocument{
    IDAREAOPERATIVA: string;
    DENOMINAZIONE: string;
    EMESSADA:string;
    FLAGCLUB: boolean;
    DURATAMESI: number;
    IDARTICOLOEMISSIONE: string;
    IDARTICOLORINNOVO: string;
    TIPOAUTOMATISMO: TipoAutomatismoTessera;
    AUTOMATISMOAPPLICAZIONE: AutomatismoApplicazioneTessera;
    TIPITESSERETEMPLATE: TipoTesseraTemplate[];
    LivelloAutorizzazione: number;


    constructor(onlyInstance?: boolean){
        super(onlyInstance);
        this.TIPITESSERETEMPLATE = [];
    }
    
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['IDAREAOPERATIVA', 'DENOMINAZIONE', 'EMESSADA', 'IDARTICOLOEMISSIONE','IDARTICOLORINNOVO'];
        let arNumber = ['DURATAMESI','TIPOAUTOMATISMO','AUTOMATISMOAPPLICAZIONE','LivelloAutorizzazione'];
        let arBoolean = ['FLAGCLUB'];
        let arDate = [];
        let arDateTime =[];
        let arTime = [];
        
    
        objDescriptor.className = 'TipoTessera';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'TIPOTESSERA';
        objDescriptor.describeField = 'DENOMINAZIONE';
    
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
                            
        return objDescriptor;
    }  


    /**
     * Importazioni da dati JSON
     * @param data 
     */
    setJSONProperty(data: any) {
        super.setJSONProperty(data);

        this.setCollection(data);

        //Imposto che il documento è originale
        this.setOriginal();
    }

    /**
     * Imposta i dati delle collection 
     * @param data 
     */
    setCollection(data: any) {

    
        this.TIPITESSERETEMPLATE = [];

        if (data && data.TIPOTESSERATEMPLATE) {
            this.setCollectionTemplates(data);
        }

    }

    /**
     * Importa la collection dei Template
     * @param data 
     */
    setCollectionTemplates(data: any) {
        
        data.TIPOTESSERATEMPLATE.forEach(element => {

            let itemDoc = new TipoTesseraTemplate();

            //Importo i dati
            itemDoc.setJSONProperty(element);
            this.TIPITESSERETEMPLATE.push(itemDoc);
            
        })
    }    


}
