import { MyDateTime } from '../library/models/mydatetime.model';
import { Livello } from './livello.model';
import { OccupazioneCampi } from './occupazionecampi.model';
import { PianificazioneCorso } from './pianificazionecorso.model';
import { SettoreAttivita } from './valuelist.model';

export class ItemCalendario{
    oraInizio: Date;
    oraFine: Date;
    riga1Text: string;
    riga2Text: string;
    riga3Text: string;
    badgeText: string;
    badgeColor: string;

    badgeIcon: string;

    static getParamsPianificazioneCorso(pianificazioneElem: PianificazioneCorso): ItemCalendario{

        let paramsItem: ItemCalendario;


        paramsItem = new ItemCalendario();
        paramsItem.oraInizio = pianificazioneElem.DATAORAINIZIO;
        paramsItem.oraFine = pianificazioneElem.DATAORAFINE;
        paramsItem.riga1Text = pianificazioneElem['_DENOMINAZIONE_Corso'];
        paramsItem.riga2Text = pianificazioneElem['_DENOMINAZIONE_Location'];
        paramsItem.riga3Text = pianificazioneElem['_DENOMINAZIONE_Campo'];

        
        paramsItem.badgeText = pianificazioneElem.getDocPropertyInRepository(['IDCORSO','IDLIVELLOENTRATA'],'DENOMINAZIONE');
        
        
        paramsItem.badgeColor = "primary";
        return paramsItem;
    }

    //mi dice se l'impegno a cui si riferisce l'item è già finito
    get isPast(): boolean{
        let now = new Date;
        if (this.oraFine < now){
        return true;
        }
        else{
        return false
        }
    }


    static getParamsOccupazioneCampo(occupazioneElem: OccupazioneCampi): ItemCalendario{
        let paramsItem: ItemCalendario = new ItemCalendario();
        paramsItem.oraInizio = occupazioneElem.DATAORAINIZIO;
        paramsItem.oraFine = occupazioneElem.DATAORAFINE;
        if(occupazioneElem.TIPO == SettoreAttivita.settoreCorso){
            paramsItem.riga1Text = occupazioneElem.getDocPropertyInRepository(['IDREF'], 'DENOMINAZIONE');
            paramsItem.badgeIcon = "school-outline";
        }
        else if(occupazioneElem.TIPO == SettoreAttivita.settorePrenotazione){
            paramsItem.riga1Text = occupazioneElem.getDocPropertyInRepository(['IDREF'], 'NOMINATIVO');
            paramsItem.badgeIcon = "calendar-outline"
        }
        paramsItem.riga2Text = `${occupazioneElem['_DENOMINAZIONE_Location']} - ${occupazioneElem['_DENOMINAZIONE_Campo']}`;
        paramsItem.riga3Text = MyDateTime.formatDate(occupazioneElem.DATAINIZIO, 'DD/MM/YYYY');

        paramsItem.badgeColor = "primary";

        return paramsItem;
    }

    
}