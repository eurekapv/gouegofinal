import { IDDocument } from './iddocument.model';

export enum TipoArea {
    areaGruppo = 10,
    areaIndipendente = 20
}

export enum SettoreAttivita {
    settoreCorso = 10,
    settorePrenotazione = 20,
    settoreTorneo = 30
}

export enum TipoCampo {
    campo = 10,
    aulaIndividuale = 100,
    aulaMultipla = 110,
    sala = 200,
    salone = 210
} 

export enum TipoCorso {
    corso = 10,
    provaGratuita = 20
}

export enum StatoCorso {
    inserito = 10,
    inValutazione = 20,
    confermato = 30,
    iscrizioniAperte = 40,
    inEsecuzione = 50,
    eseguito = 60,
    annullato = 80
  }

  export enum TipoSocieta {
    sportiva = 10,
    formazione = 20
  }

  export enum TipoSport {
    gruppo =  10,
    coppia = 20,
    individuale = 30
}

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

export enum TargetSesso {
    maschile = 10,
    femminile = 20,
    maschileFemminile = 30
}

export enum Sesso {
    maschio = 10,
    femmina = 20
}

export enum Language {
    italiano = 'ITA',
    inglese = 'ENG',
    spagnolo = 'ESP',
    francese = 'FR'
}

export enum Giorni {
    domenica = 0,
    lunedi = 1,
    martedi = 2,
    mercoledi = 3,
    giovedi = 4,
    venerdi = 5,
    sabato = 6
}




export class ValueList {

    value: any;
    description: any;

    /**
     * 
     * @param valore Valore Elemento
     * @param descrizione Descrizione
     */
    constructor(valore: any, descrizione: any) {
        this.value = valore;
        this.description = descrizione;
    }

    /**
     * Decodifica un valore da una lista valori
     * @param objEnum Lista Valori da utilizzare
     * @param value Valore da decodificare
     */
    static decode(objEnum: any, value: any): string {
        let label = '';

        // Proprietà presente
        if (objEnum.hasOwnProperty(value) ) {
            // Ricavo l'identificativo dato all'Enum
            label = objEnum[value];
            // Ora trasformo la label
            label = ValueList.convert(label);
        }
        return label;
    }

    /**
     * Esempio di utilizzo della decode
     */
    private esempioUso() {
        let label = '';
        label = ValueList.decode(SettoreAttivita, SettoreAttivita.settoreCorso);
    }

    /**
     * Preleva una etichetta senza Spazi ma in Camel Mode ed inserisce 
     * uno spazio prima di ogni maiuscola
     * @param label Etichetta da convertira
     */
    static convert(label: string) {
        let retLabel = '';
        let car = '';

        if (label) {

            for (let index = 0; index < label.length; index++) {

                car = label.substring(index, index+1);
                if (car == car.toUpperCase()) {
                    retLabel = retLabel + ' ';
                }

                if (index === 0) {
                    car = car.toUpperCase();
                }

                retLabel = retLabel + car;

            }
        }

        return retLabel;
    }

    /**
     * Dato un Enum (Lista Valori) Torna un Array con elementi
     * value - description
     * @param objEnum Nome della Lista Valori desiderata
     */
    static getArray(objEnum: any) : ValueList[] {
        let retElements: ValueList[] = [];

        Object.keys(objEnum).forEach(key => {
            if (IDDocument.isNumber(key) == false) {
                let field = key;
                let value = objEnum[field];
                let decodifica = ValueList.decode(objEnum, value);
                let element = new ValueList(value, decodifica);

                retElements.push(element);
            }
        });

        return retElements;
    }
}

//#region LISTE VALORI INTERNE
//Liste non presenti in GOUEGO

export enum Condition {
    uguale = '=',
    maggiore = '>',
    minore = '<',
    diverso = '#'
}


export enum RequestState {
    noRequest = 0,
    waitingReply = 1,
    executed = 2
}
//#endregion