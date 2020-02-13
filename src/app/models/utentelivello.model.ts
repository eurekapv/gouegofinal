import { IDDocument } from './iddocument.model';

export class UtenteLivello extends IDDocument {
    IDSPORT: string;
    IDLIVELLO: string;
    DESCRSPORT: string;
    DESCRLIVELLO: string;


    constructor() {
        super();
    }

    /**
     * Imposta le proprietà
     * @param data JSON Ricevere
     */
    setJSONProperty(data: any) {
        super.setJSONProperty(data);
    }


}