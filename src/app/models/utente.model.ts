import { IDDocument } from './iddocument.model';
import { Mansione, Ruolo } from '../models/valuelist.model';



export class Utente extends IDDocument {

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
}