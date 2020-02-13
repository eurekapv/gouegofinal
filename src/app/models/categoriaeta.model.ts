import { IDDocument } from './iddocument.model';

export class CategoriaEta extends IDDocument {
    CODICE: string;
    ETAMINIMA: number;
    ETAMASSIMA: number;
    DESCTOOLTIP: string;

    constructor() {
        super();
    }

    setJSONProperty(data: any) {
        super.setJSONProperty(data);
    }
}