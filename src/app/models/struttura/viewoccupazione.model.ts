import { IDDocument } from '../../library/models/iddocument.model';
import { TypeDefinition, Descriptor} from '../../library/models/descriptor.model';
import { ViewOreOccupazione } from './vieworeoccupazione.model';

export class ViewOccupazione extends IDDocument {
    IDAREAOPERATIVA: string;
    IDLOCATION: string;
    IDCAMPO: string;
    DENOMINAZIONECAMPO: string;
    DATA: Date;
    VIEWOREOCCUPAZIONE: ViewOreOccupazione[];

    constructor(onlyInstance?:boolean) {
        super(onlyInstance);

        this.VIEWOREOCCUPAZIONE = [];

    }

    setJSONProperty(data: any) {
        
        //Chiamo il padre per impostare le proprietà
        super.setJSONProperty(data);

        //Sistemo le collection
        this.setCollection(data);

        //Imposto che il documento è originale
        this.setOriginal();
    }

    setCollection(data: any)  {
        this.VIEWOREOCCUPAZIONE = [];

        if (data.VIEWOREOCCUPAZIONE) {
            this.setCollectionViewOre(data.VIEWOREOCCUPAZIONE);
        }
    }

    setCollectionViewOre(arCollection: any) {

        arCollection.forEach(elViewOre => {
            let newViewOre = new ViewOreOccupazione();
            newViewOre.setJSONProperty(elViewOre);

            this.VIEWOREOCCUPAZIONE.push(newViewOre);
        });
        
    }


    
    /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['IDAREAOPERATIVA',
                    'IDLOCATION',
                    'IDCAMPO',
                    'DENOMINAZIONECAMPO'
                    ];
    let arNumber = [];
    let arBoolean = [];
    let arDate = ['DATA'];
    let arDateTime =[];
    let arTime = [];
    let arCollection = ['VIEWOREOCCUPAZIONE'];

    objDescriptor.className = 'ViewOccupazione';
    objDescriptor.doRemote = false;
    objDescriptor.classWebApiName = '';


    objDescriptor.addMultiple(arString, TypeDefinition.char);
    objDescriptor.addMultiple(arNumber, TypeDefinition.number);
    objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
    objDescriptor.addMultiple(arDate, TypeDefinition.date);
    objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
    objDescriptor.addMultiple(arTime, TypeDefinition.time);
    objDescriptor.addMultiple(arCollection, TypeDefinition.collection);

    objDescriptor.setRelation('IDAREAOPERATIVA','Area');
    objDescriptor.setRelation('IDLOCATION','Location');
    objDescriptor.setRelation('IDCAMPO','Campo');

    
    return objDescriptor;
}
    
}