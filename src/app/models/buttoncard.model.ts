export class ButtonCard {
    title: string;
    subtitle: string;
    nameicon: string;
    sloticon: string;
    color: string;
    iconLink: boolean;
    functionCod: string; 

    static getButtonActionLocation(): ButtonCard[] {
        let arButton: ButtonCard[] = [];
        let newBtn: ButtonCard;

        newBtn = new ButtonCard();
        newBtn.title = 'Prenota un campo';
        newBtn.subtitle = 'organizza un incontro e invita i tuoi amici';
        newBtn.nameicon = 'chatbubbles-outline';
        newBtn.sloticon = "start";
        newBtn.color = "primary";
        newBtn.iconLink = true;
        newBtn.functionCod = 'book';

        arButton.push(newBtn);

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

    
}