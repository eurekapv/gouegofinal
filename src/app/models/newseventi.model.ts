import { IDDocument } from './iddocument.model';
import { AmbitoNews } from './valuelist.model';
import { TypeDefinition, Descriptor} from '../models/descriptor.model';

export class NewsEventi extends IDDocument {
    AMBITO: AmbitoNews;
    TITLE: string;
    SUBTITLE: string;
    SHORTTEXT: string;
    PUBBLICATADAL: Date;
    LINKNEWS: string;
    LINKIMAGE: string;
    IDLOCATION: string;
    IDAREAOPERATIVA: string;
    _NAMEICON: string;
    _COLOR: string;

    constructor() {

        super();

        this._NAMEICON = 'newspaper-outline';
        this._COLOR = 'secondary';
    }

    /**
     * Imposta le proprietà della classe
     * @param data JSON Data
     */
    setJSONProperty(data: any) {        
        super.setJSONProperty(data);
    } 

    /**
     * Ritorna il descrittore della Struttura Campi
     */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = ['TITLE',
                        'SUBTITLE',
                        'SHORTTEXT',
                        'LINKNEWS',
                        'LINKIMAGE',
                        'IDLOCATION',
                        'IDAREAOPERATIVA'];
        let arNumber = ['AMBITO'];
        let arNumberDecimal = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime =['PUBBLICATADAL'];
        let arTime = [];

        objDescriptor.className = 'NEWSEVENTI';
        objDescriptor.doRemote = true;
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arNumberDecimal, TypeDefinition.numberDecimal);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
        return objDescriptor;
    } 
    
    /**
     * Torna un oggetto News per indicare che non ci sono News
     */
    static getNoNews(): NewsEventi {
        let objNews = new NewsEventi();

        objNews.TITLE = 'Nessun evento in programma';
        objNews.SUBTITLE = 'Torna a trovarci per scoprire le prossime novità';
        objNews.do_loaded = false;
        objNews.do_deleted = false;

        return objNews;
    }
}