import { Descriptor, TypeDefinition } from '../library/models/descriptor.model';
import { IDDocument } from '../library/models/iddocument.model';
import { ArticoloColore } from './articolocolore.model';
import { ArticoloTaglieMisura } from './articolotagliemisura.model';
import { TipoArticolo, TipoPrezzo } from './valuelist.model';

export class Articolo extends IDDocument{
    TIPOARTICOLO: TipoArticolo;
    CODICE: string;
    CODICEBARRE: string;
    DESCR: string;
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
    ARTICOLITAGLIEMISURE: ArticoloTaglieMisura[];
    ARTICOLICOLORI: ArticoloColore[];


    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = [
            'CODICE',
            'CODICEBARRE',
            'DESCR',
            'IDUNTAMISURA',
            'SCONTOTEXT',
            'CATEGORIA',
            'DESCRHTML',
            'IDVALUTA',
        ];
        let arNumber = ['PREZZONETTO', 'PREZZOLORDO', 'TIPOARTICOLO', 'TIPOPREZZO'];
        let arBoolean = ['FLAGTAGLIEMISURE', 'FLAGCOLORI', 'FLAGSHOPONLINE'];
        let arDate = [];
        let arDateTime =['VALIDOFINO'];
        let arTime = [];
        
    
        objDescriptor.className = 'Articolo';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'ARTICOLO';
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
    
    
        objDescriptor.setRelation('IDUNITAMISURA','UnitaMisura');
        objDescriptor.setRelation('IDVALUTA','Valuta');
    
        
        return objDescriptor;
    }






}