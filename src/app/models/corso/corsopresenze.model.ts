import { Descriptor, TypeDefinition } from '../../library/models/descriptor.model';
import { IDDocument } from '../../library/models/iddocument.model';
import { StatoIscrizione } from '../zsupport/valuelist.model';

export class CorsoPresenze extends IDDocument {

    IDPIANIFICAZIONECORSO: string;
    IDUTENTE: string;
    NOMINATIVO: string;
    PRESENTE: boolean;
    NOTES: string;
    IDUSERSETTING: string;
    DATAORASETTING: Date;
    DATACERTIFICATOMEDICO: Date;
    STATOISCRIZIONE: StatoIscrizione;
    ALERTPAGAMENTI: boolean;
    MSGUPDATEMOB: string;
    FLAGUPDATEMOB: boolean;

    /**
     * Ritorna il descrittore della Struttura Campi
     */
    getDescriptor(): Descriptor {
        let objDescriptor = new Descriptor();
        let arString = [
            'IDPIANIFICAZIONECORSO',
            'IDUTENTE',
            'NOMINATIVO',
            'NOTE',
            'IDUSERSETTING',
            'ALERTPAGAMENTI',
            'MSGUPDATEMOB'
        ];
        let arNumber = ['STATOISCRIZIONE'];
        let arBoolean = ['PRESENTE','ALERTPAGAMENTI', 'FLAGUPDATEMOB'];
        let arDate = ['DATACERTIFICATOMEDICO'];
        let arDateTime =['DATAORASETTING'];
        let arTime = [];

        objDescriptor.className = 'CorsoPresenze';
        objDescriptor.doRemote = true;
        objDescriptor.classWebApiName = 'CORSOPRESENZE';
        objDescriptor.describeField  = 'NOMINATIVO';

        objDescriptor.addMultiple(arString, TypeDefinition.char);
        objDescriptor.addMultiple(arNumber, TypeDefinition.number);
        objDescriptor.addMultiple(arBoolean, TypeDefinition.boolean);
        objDescriptor.addMultiple(arDate, TypeDefinition.date);
        objDescriptor.addMultiple(arDateTime, TypeDefinition.dateTime);
        objDescriptor.addMultiple(arTime, TypeDefinition.time);

        objDescriptor.setRelation('IDPIANIFICAZIONECORSO', 'PianificazioneCorso');
        objDescriptor.setRelation('IDUTENTE', 'Utente');
        objDescriptor.setRelation('IDUSERSETTING', 'Utente');
        
        
        return objDescriptor;
    }

    constructor(onlyInstance?: boolean){
        super(onlyInstance);
    }

    existDataCertificato(): boolean {
        let flagExist: boolean = false;
        if (this.DATACERTIFICATOMEDICO) {
            flagExist = true;
        }

        return flagExist;
    }

}