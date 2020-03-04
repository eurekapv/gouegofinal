export class ButtonCard {
    title: string;
    subtitle: string;
    nameicon: string;
    sloticon: string;
    color: string;
    iconLink: boolean;
    functionCod: string;


    /**
     * Ritorna i Botton Action per la location
     * @param canBooking E' possibile prenotare ?
     */
    static getButtonActionLocation(canBooking?:boolean): ButtonCard[] {
        let arButton: ButtonCard[] = [];
        let newBtn: ButtonCard;

        if (canBooking) {
            newBtn = new ButtonCard();
            newBtn.title = 'Prenota un campo';
            newBtn.subtitle = 'organizza un incontro e invita i tuoi amici';
            newBtn.nameicon = 'chatbubbles-outline';
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
     * @param userLogged Utente è loggato
     */
    static getButtonHomeNoEvents(userLogged: boolean): ButtonCard[] {
        let arButton: ButtonCard[] = [];
        let newBtn: ButtonCard;

        /** UTENTE LOGGATO, SENZA EVENTI */
        if (userLogged) {
            newBtn = new ButtonCard();
            newBtn.title = 'Nessun evento in programma';
            newBtn.subtitle = 'organizza un incontro con i tuoi amici';
            newBtn.nameicon = 'calendar-outline';
            newBtn.sloticon = "start";
            newBtn.color = "primary";
            newBtn.iconLink = false;
            newBtn.functionCod = 'noevents';
    
            arButton.push(newBtn);
        }
        else {
            newBtn = new ButtonCard();
            newBtn.title = 'Registrati o accedi';
            newBtn.subtitle = 'crea il tuo account o accedi';
            newBtn.nameicon = 'person-add-outline';
            newBtn.sloticon = "start";
            newBtn.color = "primary";
            newBtn.iconLink = true;
            newBtn.functionCod = 'register';
    
            arButton.push(newBtn);
        }

        return arButton;
    }
}