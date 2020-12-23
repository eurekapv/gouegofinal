import { Descriptor, TypeDefinition } from '../library/models/descriptor.model';
import { IDDocument } from '../library/models/iddocument.model';
import { FileType } from './valuelist.model';

export class CorsoAllegato extends IDDocument{
    IDCORSO: string;
    IDTIPODOCUMENTAZIONE: string;
    DESCRIZIONE: string;
    FILENAMEESTENSIONE: string;
    FILETYPE: FileType;
    

    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = [
            'IDCORSO',
            'IDTIPODOCUMENTAZIONE',
            'DESCRIZIONE',
            'FILENAMEESTENSIONE',
            'FILETYPE',
        ];
        let arNumber = [];
        let arBoolean = [];
        let arDate = [];
        let arDateTime =[];
        let arTime = [];
        
    
        objDescriptor.className = 'CorsoAllegato';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'CORSOALLEGATO';
        objDescriptor.describeField = 'DESCRIZIONE';
    
    
        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);
        
        
    
    
        objDescriptor.setRelation('IDTIPODOCUMENTAZIONE','TipoDocumentazione');
        objDescriptor.setRelation('IDCORSO','Corso');
    
        
        return objDescriptor;
    }


    get fileTypeIconName(){
        let iconName = '';

        switch (this.FILETYPE){
            case FileType.audio:
                iconName = 'musical-notes-outline';
            break;
            case FileType.excel:
                iconName = 'document-text-outline';
            break;
            case FileType.immagini:
                iconName = 'image-outline';
            break;
            case FileType.indefinito:
                iconName = 'document-outline';
            break;
            case FileType.pdf:
                iconName = 'document-text-outline';
            break;
            case FileType.powerpoint:
                iconName = 'document-text-outline';
            break;
            case FileType.text:
                iconName = 'document-text-outline';
            break;
            case FileType.video:
                iconName = 'film-outline';
            break;
            case FileType.word:
                iconName = 'document-text-outline';
            break;
            case FileType.zip:
                iconName = 'library-outline';
            break;

        }

        return iconName
    }


}