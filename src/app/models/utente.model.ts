import { IDDocument } from './iddocument.model';

export enum Mansione {
    trainer = 10,
    assistenteTrainer = 20,
    segreteria = 200,
    contabile = 210,
    social = 220,
    custode = 230
} 

export enum Ruolo {
    admin = 1,
    super = 20,
    collaboratore = 30,
    cliente = 50
}

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
    ACTIVATIONCODE: string; //5 Cifre

    constructor() {
        super();
    }
}