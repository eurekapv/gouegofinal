import { IDDocument } from './iddocument.model';
import { Mansione, Ruolo } from './valuelist.model';



export class Account extends IDDocument {

    IDREF: string;
    COGNOME: string;
    NOME: string;
    NOMINATIVO: string;
    EMAIL: string;
    WEBLOGIN: string;
    SHAPASSWORD: string;
    INPUTPASSWORD: string;
    MOBILENUMBER: string;
    IDAREAOPERATIVA: string;
    IDLOCATION: string;
    RUOLO: number;
    MANSIONE: Mansione;

    constructor() {
        super();
    }

    setJSONProperty(data: any) {
        super.setJSONProperty(data);
    }
}