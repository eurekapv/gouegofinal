import { PianificazioneCorso } from './pianificazionecorso.model';

export class ItemCalendario{
    oraInizio: Date;
    oraFine: Date;
    riga1Text: string;
    riga2Text: string;
    riga3Text: string;
    badgeText: string;
    badgeColor: string;

    static getParamsPianificazioneCorso(pianificazioneElem: PianificazioneCorso): ItemCalendario{

        let paramsItem: ItemCalendario;

        paramsItem = new ItemCalendario();
        paramsItem.oraInizio = pianificazioneElem.DATAORAINIZIO;
        paramsItem.oraFine = pianificazioneElem.DATAORAFINE;
        paramsItem.riga1Text = pianificazioneElem['_DENOMINAZIONE_Corso'];
        paramsItem.riga2Text = pianificazioneElem['_DENOMINAZIONE_Location'];
        paramsItem.riga3Text = pianificazioneElem['_DENOMINAZIONE_Campo'];
        if(pianificazioneElem._repositoryRelDoc.length>0){

            paramsItem.badgeText = pianificazioneElem._repositoryRelDoc[0]['DENOMINAZIONE'];
        }
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

    
}