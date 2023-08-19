import { IDDocument } from '../library/models/iddocument.model';
import { Mansione, SettoreAttivita } from './valuelist.model';
import { TypeDefinition, Descriptor} from '../library/models/descriptor.model';
import { ButtonCard } from './buttoncard.model';
import { Settimana } from './settimana.model';
import { MyDateTime } from '../library/models/mydatetime.model';

export class ImpegnoCollaboratore extends IDDocument {

    IDREFER:                      string; //ID Riferimento
    SETTORE:                      SettoreAttivita;
    IDCOLLABORATORE:              string;
    MANSIONE:                     Mansione;
    DENOMINAZIONE:                string;
    IDAREAOPERATIVA:              string;
    IDLOCATION:                   string;
    DENOMINAZIONELOCATION:        string;
    IDSPORT:                      string; //Sport - Attività di riferimento
    DENOMINAZIONESPORT:           string;
    DATAORAINIZIO:                Date;
    DATAORAFINE:                  Date;
    

    constructor(onlyInstance?:boolean) {
        super(onlyInstance);
    }

      /**
    * Ritorna il descrittore della Struttura Campi
    */
   getDescriptor(): Descriptor {
    let objDescriptor = new Descriptor();
    let arString = ['IDREFER',
                    'IDCOLLABORATORE',
                    'DENOMINAZIONE',
                    'IDAREAOPERATIVA',
                    'IDLOCATION',
                    'DENOMINAZIONELOCATION',
                    'IDSPORT',
                    'DENOMINAZIONESPORT'
                    ];
    let arNumber = ['SETTORE','MANSIONE'];
    let arBoolean = [];
    let arDate = [];
    let arDateTime =['DATAORAINIZIO','DATAORAFINE'];
    let arTime = [];
    let arCollection = [];

    objDescriptor.className = 'ImpegnoCollaboratore';
    objDescriptor.classWebApiName = 'IMPEGNOCOLLABORATORE';
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
    objDescriptor.setRelation('IDSPORT','Sport');
    objDescriptor.setRelation('IDCOLLABORATORE','Utente');
    
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
            newBtn.title = this.DENOMINAZIONELOCATION;
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
            newBtn.settore = SettoreAttivita.settoreEvento;
                        
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
        myButtonCard.subtitle = 'non sono presenti corsi/prenotazioni/eventi';
    }

    myButtonCard.nameicon = 'calendar-outline';
    myButtonCard.sloticon = "start";
    myButtonCard.color = "primary";
    myButtonCard.iconLink = false;
    myButtonCard.functionCod = 'noevents';

    return myButtonCard;
}

}
