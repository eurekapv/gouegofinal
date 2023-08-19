import { IDDocument } from '../library/models/iddocument.model';
import { SettoreAttivita, StatoCorso } from './valuelist.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';
import { RequestForeign } from '../library/models/requestParams.model';
import { ButtonCard } from './buttoncard.model';
import { Settimana } from './settimana.model';
import { MyDateTime } from '../library/models/mydatetime.model';

export class Impegno extends IDDocument {

    IDREFER:        string; //ID Riferimento
    SETTORE:        SettoreAttivita;
    DENOMINAZIONE:  string;
    IDAREAOPERATIVA:string;
    IDLOCATION:     string;
    IDCAMPO:        string;
    IDSPORT:        string; //Sport - Attività di riferimento
    DATAORAINIZIO:  Date;
    DATAORAFINE:    Date;
    IDUTENTE:       string;
    STATO:          StatoCorso;

    constructor(onlyInstance?:boolean) {
        super(onlyInstance);
    }

      /**
    * Ritorna il descrittore della Struttura Campi
    */
    getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['IDREFER',
                    'DENOMINAZIONE',
                    'IDAREAOPERATIVA',
                    'IDLOCATION',
                    'IDCAMPO',
                    'IDSPORT',
                    'IDUTENTE'];
    let arNumber = ['SETTORE'];
    let arBoolean = [];
    let arDate = [];
    let arDateTime =['DATAORAINIZIO','DATAORAFINE'];
    let arTime = [];
    let arCollection = [];

    objDescriptor.className = 'Impegno';
    objDescriptor.classWebApiName = 'IMPEGNO';
    objDescriptor.doRemote = true;
    objDescriptor.describeField = 'DENOMINAZIONE';

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
    objDescriptor.setRelation('IDSPORT','Sport');
    objDescriptor.setRelation('IDUTENTE','Utente');
    
    return objDescriptor;
    }

    /**
     * Ritorna un Identificatore Univoco del record unendo eventuale campi
     */
    getIdentifier(): string {
        let identifier = '';

        switch (this.SETTORE) {
            case SettoreAttivita.settoreCorso:
                identifier = this.IDREFER + '-' + this.ID;
                break;

            case SettoreAttivita.settorePrenotazione:
                identifier = this.IDREFER + '-' + this.ID;
                break;
        
            default:
                break;
        }

        return identifier;
    }

static getReqForeignKeys(): RequestForeign[] {
    let arRequest: RequestForeign[] = [];
    let objForeign: RequestForeign;

    objForeign = new RequestForeign('IDAREAOPERATIVA');
    arRequest.push(objForeign);

    objForeign = new RequestForeign('IDSPORT');
    arRequest.push(objForeign);

    objForeign = new RequestForeign('IDCAMPO');
    arRequest.push(objForeign);

    objForeign = new RequestForeign('IDLOCATION');
    objForeign.addDescribeField('DENOMINAZIONE');
    objForeign.addDescribeField('INDIRIZZO');
    

    arRequest.push(objForeign);

    return arRequest;
}

/**
 * Verifica se il documento contiene la stessa DATA (non ora) nelle due date presenti
 */
compareEqualDate(): boolean {
    return MyDateTime.compareEqualDate(this.DATAORAINIZIO, this.DATAORAFINE);
}

/**
 * Converte in Card il documento
 */
asButtonCard(): ButtonCard {

    let newBtn = new ButtonCard();

    switch (this.SETTORE) {
        case SettoreAttivita.settoreCorso:
            newBtn.title = this.DENOMINAZIONE;
            newBtn.subtitle = Settimana.getLabel(this.DATAORAINIZIO.getDay()) + ' ' + MyDateTime.formatDate(this.DATAORAINIZIO,'DD/MM') + ' alle ' + MyDateTime.formatTime(this.DATAORAINIZIO);

            newBtn.nameicon = 'school-outline';
            newBtn.sloticon = "start";
            newBtn.color = "primary";
            newBtn.iconLink = true;
            newBtn.functionCod =  "show";
            newBtn.id = this.IDREFER;
            newBtn.settore = SettoreAttivita.settoreCorso;
            break;

        case SettoreAttivita.settorePrenotazione:
            newBtn.title = this['_DENOMINAZIONE_Location'];
            newBtn.subtitle = Settimana.getLabel(this.DATAORAINIZIO.getDay()) + ' ' + MyDateTime.formatDate(this.DATAORAINIZIO,'DD/MM') + ' alle ' + MyDateTime.formatTime(this.DATAORAINIZIO);

            newBtn.nameicon = 'calendar-outline';
            newBtn.sloticon = "start";
            newBtn.color = "primary";
            newBtn.iconLink = true;

            newBtn.functionCod =  "show";
            newBtn.id =  this.IDREFER + '-' + this.ID;
            newBtn.settore = SettoreAttivita.settorePrenotazione;            
            break;

        case SettoreAttivita.settoreEvento:
        
            newBtn.title = this.DENOMINAZIONE;
            newBtn.subtitle = Settimana.getLabel(this.DATAORAINIZIO.getDay()) + ' ' + MyDateTime.formatDate(this.DATAORAINIZIO,'DD/MM') + ' alle ' + MyDateTime.formatTime(this.DATAORAINIZIO);

            newBtn.nameicon = 'sparkles-outline';
            newBtn.sloticon = "start";
            newBtn.color = "primary";
            newBtn.iconLink = true;
            newBtn.functionCod =  "show";
            newBtn.id = this.IDREFER;
            newBtn.settore = SettoreAttivita.settoreCorso;
                        
            break;

    
        default:
            break;
    }

    return newBtn;

}
   
/**
 * Crea una Card per informare che non sono presenti prossimi impegni
 * @param {string} customSubtitle Sottotitolo da utilizzare al posto del default
 */
static asEmptyButtonCard(customSubtitle?: string): ButtonCard {
    let myButtonCard = new ButtonCard();
    myButtonCard.title = 'Nessun appuntamento previsto';

    if (customSubtitle && customSubtitle.length != 0) {
        myButtonCard.subtitle = customSubtitle;
    }
    else {
        myButtonCard.subtitle = 'Organizza un incontro con i tuoi amici o iscriviti a un corso';
    }

    myButtonCard.nameicon = 'calendar-outline';
    myButtonCard.sloticon = "start";
    myButtonCard.color = "primary";
    myButtonCard.iconLink = false;
    myButtonCard.functionCod = 'noevents';

    return myButtonCard;
}
}