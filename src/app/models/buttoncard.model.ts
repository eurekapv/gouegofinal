import { Impegno } from './impegno.model';
import { SettoreAttivita, TipoSocieta } from './valuelist.model';
import { Settimana } from './settimana.model';
import { MyDateTime } from '../library/models/mydatetime.model';
import { OccupazioneCampi } from './occupazionecampi.model';
import { PianificazioneCorso } from './pianificazionecorso.model';
import { pipe } from 'rxjs';
import { DatePipe } from '@angular/common';

export class ButtonHomeParams {
    utenteLoggato?: boolean; //Utente loggato
    registrazioneInApp?: boolean; //Indica se è possibile effettuare la registrazione nell'App
    listImpegni?: Impegno[]; //Lista degli impegni utente
}

export class ButtonCard {
    title: string;
    subtitle: string;
    nameicon: string;
    sloticon: string;
    color: string;
    iconLink: boolean;
    functionCod: string;
    settore: SettoreAttivita;
    id: string;
    idRefer: string;
    disabled: boolean;

    constructor() {
        this.settore = 0;
        this.id = '';
        this.idRefer = '';
        this.disabled = false;
    }



    /**
     * Ritorna i Botton Action per la location
     * @param canBooking E' possibile prenotare ?
     */
    static getButtonActionLocation(canBooking?:boolean, tipoSocieta?:TipoSocieta): ButtonCard[] {
        let arButton: ButtonCard[] = [];
        let newBtn: ButtonCard;

        if (canBooking) {
            newBtn = new ButtonCard();

            if (tipoSocieta == undefined) {
                newBtn.title = 'Prenota';
                newBtn.subtitle = 'organizza un evento in questa location';
            }
            else if (tipoSocieta == TipoSocieta.formazione) {
                newBtn.title = 'Prenota un\'aula';
                newBtn.subtitle = 'organizza un corso per il tuo team';
            }
            else if (tipoSocieta == TipoSocieta.sportiva) {
                newBtn.title = 'Prenota un campo';
                newBtn.subtitle = 'organizza un incontro con i tuoi amici';
            }
            
            newBtn.nameicon = 'calendar';
            newBtn.sloticon = "start";
            newBtn.color = "primary";
            newBtn.iconLink = true;
            newBtn.functionCod = 'book';
    
            arButton.push(newBtn);
        }

        newBtn = new ButtonCard();
        newBtn.title = 'Impara con noi';
        newBtn.subtitle = 'guarda i corsi che abbiamo preparato per te';
        newBtn.nameicon = 'library-outline';
        newBtn.sloticon = "start";
        newBtn.color = "primary";
        newBtn.iconLink = true;
        newBtn.functionCod = 'course';

        arButton.push(newBtn);

        return arButton;
    }

    /**
     * Ritorna i Buttoni da mostrare nella Home 
     * nella parte dedicata agli Eventi in programma, 
     * quando non sono presenti eventi
     * @param params Informazioni per la creazione dei Bottoni
     */
    static getButtonHomeImpegni(params?:ButtonHomeParams): ButtonCard[] {
        let arButton: ButtonCard[] = [];
        let newBtn: ButtonCard;
        let numImpegni = 0;

        let registrationInApp: boolean = false; 
        let userLogged: boolean = false;
        let listImpegni:Impegno[] = [];

        //Recupero dei parametri
        if (params) {
            userLogged = params.utenteLoggato;
            listImpegni = params.listImpegni;
            registrationInApp = params.registrazioneInApp;
        }

        /** UTENTE LOGGATO */
        if (userLogged) {
            //Determino il numero degli impegni
            if (listImpegni && listImpegni.length !== 0) {
                numImpegni = listImpegni.length;
            }

            //Non ci sono impegni 
            if (numImpegni == 0) {

                newBtn = new ButtonCard();
                newBtn.title = 'Nessun appuntamento previsto';
                newBtn.subtitle = 'Organizza un incontro con i tuoi amici';
                newBtn.nameicon = 'calendar-outline';
                newBtn.sloticon = "start";
                newBtn.color = "primary";
                newBtn.iconLink = false;
                newBtn.functionCod = 'noevents';
        
                arButton.push(newBtn);

            }
            else {
                //Ci sono impegni e creo le varie card
                listImpegni.forEach(element => {

                    newBtn = new ButtonCard();
                    if (element.SETTORE == SettoreAttivita.settoreCorso) {

                        newBtn.title = element.DENOMINAZIONE;
                        newBtn.subtitle = Settimana.getLabel(element.DATAORAINIZIO.getDay()) + ' ' + MyDateTime.formatDate(element.DATAORAINIZIO,'DD/MM') + ' alle ' + MyDateTime.formatTime(element.DATAORAINIZIO);

                        newBtn.nameicon = 'school-outline';
                        newBtn.sloticon = "start";
                        newBtn.color = "primary";
                        newBtn.iconLink = true;
                        newBtn.functionCod =  "show";
                        newBtn.id = element.IDREFER;
                        newBtn.settore = SettoreAttivita.settoreCorso;
                        
                        arButton.push(newBtn);
                    }
                    else if (element.SETTORE == SettoreAttivita.settorePrenotazione){

                        
                        newBtn.title = element['_DENOMINAZIONE_Location'];
                        newBtn.subtitle = Settimana.getLabel(element.DATAORAINIZIO.getDay()) + ' ' + MyDateTime.formatDate(element.DATAORAINIZIO,'DD/MM') + ' alle ' + MyDateTime.formatTime(element.DATAORAINIZIO);

                        newBtn.nameicon = 'calendar-outline';
                        newBtn.sloticon = "start";
                        newBtn.color = "primary";
                        newBtn.iconLink = true;

                        newBtn.functionCod =  "show";
                        newBtn.id =  element.IDREFER + '-' + element.ID;
                        newBtn.settore = SettoreAttivita.settorePrenotazione;

                        
                
                        arButton.push(newBtn);                        
                    }

                })
            }


        }
        else {
            //Non loggato
            newBtn = new ButtonCard();
            if (registrationInApp) {

                newBtn.title = 'Registrati o accedi';
                newBtn.subtitle = 'crea il tuo account o accedi';
                newBtn.nameicon = 'person-add-outline';
                newBtn.sloticon = "start";
                newBtn.color = "primary";
                newBtn.iconLink = true;
                newBtn.functionCod = 'register';
        
                arButton.push(newBtn);
            }
            else {
                newBtn.title = 'Inizia ed accedi';
                newBtn.subtitle = 'accedi al tuo account';
                newBtn.nameicon = 'person-add-outline';
                newBtn.sloticon = "start";
                newBtn.color = "primary";
                newBtn.iconLink = true;
                newBtn.functionCod = 'login';
        
                arButton.push(newBtn);
            }
        }

        return arButton;
    }

    /**
     * Ritorna i Buttoni da mostrare nella Home 
     * nella parte dedicata agli Eventi in programma, 
     * quando non sono presenti eventi
     * @param params Informazioni per la creazione dei Bottoni
     */
    static getButtonAgendaFromOccupazioni(collOccupazioni: OccupazioneCampi[]): ButtonCard[] {
        let arButton: ButtonCard[] = [];
        let newBtn: ButtonCard;
        

        if (collOccupazioni) {
            // Occupazioni presenti
            if (collOccupazioni.length != 0) {
                collOccupazioni.forEach(element => {

                    newBtn = new ButtonCard();
                    newBtn.title = element['_DENOMINAZIONE_Location'];
                    newBtn.subtitle = Settimana.getLabel(element.DATAORAINIZIO.getDay()) + ' ' + MyDateTime.formatDate(element.DATAORAINIZIO,'DD/MM') + ' alle ' + MyDateTime.formatTime(element.DATAORAINIZIO);

                    newBtn.nameicon = 'calendar-outline';
                    newBtn.sloticon = "start";
                    newBtn.color = "primary";
                    newBtn.iconLink = true;

                    newBtn.functionCod =  "show";
                    newBtn.id =  element.ID;
                    newBtn.idRefer = element.IDREF;
                    newBtn.settore = element.TIPO;
                    if (newBtn.settore == SettoreAttivita.settoreCorso) {
                        newBtn.nameicon = 'calendar-outline';
                    }
                    else {
                        newBtn.nameicon = 'school-outline';
                    }
                    arButton.push(newBtn);

                });
            }
        }

        if (arButton.length == 0) {

            newBtn = new ButtonCard();
            newBtn.title = 'Nessuna programmazione per la giornata';
            newBtn.subtitle = 'nessun corso o prenotazione';
            newBtn.nameicon = 'calendar-outline';
            newBtn.sloticon = "start";
            newBtn.color = "primary";
            newBtn.iconLink = false;
            newBtn.functionCod = 'noevents';
    
            arButton.push(newBtn);
        }

        return arButton;
    }

    static getButtonAgendaFromPianificazioneCorso(pianificazioneElem: PianificazioneCorso): ButtonCard{
        let buttonElem: ButtonCard = new ButtonCard();
        let datePipe = new DatePipe('it');

        let strSubtitle = datePipe.transform(pianificazioneElem.DATAORAINIZIO, 'HH:mm') + ' - ' + datePipe.transform(pianificazioneElem.DATAORAFINE, 'HH:mm')

        buttonElem.title = pianificazioneElem['_DENOMINAZIONE_Corso'];
        buttonElem.subtitle = strSubtitle;
        buttonElem.nameicon = 'school-outline';
        buttonElem.sloticon = 'start';
        buttonElem.iconLink = true;
        buttonElem.color = 'primary'


        return buttonElem;
    }
    
}