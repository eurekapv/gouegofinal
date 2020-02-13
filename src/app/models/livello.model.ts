import { IDDocument } from './iddocument.model';

export class Livello extends IDDocument {
    IDSPORT: string;
    DENOMINAZIONE: string;
    PROGRESSIONE: number;
    ETAMINIMA: number;
    ETAMASSIMA: number;

    constructor() {
        super();
    }

    setJSONProperty(data: any) {
        super.setJSONProperty(data);
    }
}