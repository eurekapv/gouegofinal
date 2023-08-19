

export enum TipoArea {
    areaGruppo = 10,
    areaIndipendente = 20
}

export enum SettoreAttivita {
    settoreCorso = 10,
    settorePrenotazione = 20,
    settoreEvento = 30
}

export enum SettorePagamentiAttivita {
    settorePagamentoCorso = 10,
    settorePagamentoPrenotazione = 20,
    settorePagamentoEvento = 30,
    settorePagamentoShop = 40
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
    prova = 20
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

export enum StrutturaCampo {
    coperto = 10,
    scoperto = 20,
    copertoScoperto = 30
}

export enum StatoSlot {
    libero = 0,
    occupato = 10,
    chiuso = 20,
    contattare = 21
}

export enum TipoPrivateImage {
    logo = 10,
    icon = 20
}

export enum StatoPrenotazione {
    confermata = 10,
    daConfermare = 20,
    disdetta = 30
}

export enum AmbitoNews {
    corso = 10,
    prenotazione = 20,
    torneo = 30
}

export enum PageType {
    home = 10,
    policyPrivacy = 20,
    condizioniVenditaPrenotazioni = 100,
    condizioniVenditaIscrizioni = 110,
    facebook = 200,
    twitter = 210,
    instagram = 220,
    tikTok = 230
}

//Questa lista non è presente in Inde ma memorizzata sul db nelle opzioni
export enum TipoVerificaAccount {
    noverifica = 0,
    verificaemail = 10,
    verificasms = 20,
    verificaemailsms = 30
}

export enum RequestPincodeUse {
    forRegistration = 10,
    forRecovery = 20,
    forValidation = 30,
}

export enum TipoArticolo {
    prodotto = 10,
    servizio = 20,
    pacchettoOre = 30
}

export enum TipoPrezzo {
    alNettoDiImposta = 10,
    comprensiviDiImposta = 20
}


export enum TipoMasterDocumento{
    preventivo = 10,
    fattura = 500,
    notaDiCredito = 510,
    ricevuta = 530
}

export enum TipoChiusura {
    nofesta = 0,
    rangeDate = 10,
    natale = 20,
    santoStefano = 30,
    pasquaCattolica = 40,
    lunediDellAngelo = 50,
    ferragosto = 60,
    aprile25 = 70,
    maggio1 = 80,
    dicembre8 = 90, 
    giugno2 = 100 
}

export enum AttivitaChiusura{
    tutte = -1,
    affittoStrutture = 10,
    svolgimentoCorsi = 20
}

export enum StatoPagamento {
    daPagare=0,
    pagatoInParte=10,
    pagato=20
  
}

export enum TipoRigoIncasso {
    incassato = 10,
    scadenza = 20,
    abbuono = 30,
    perdita = 40
}

export enum ZOrderIncasso {
    incassato = 10,
    daIncassare = 20
}

//Canali dove effettuare il pagamento, compreso onSite in contanti
export enum PaymentChannel {
    onSite = 10,
    bonifico = 50,
    applePay = 200,
    googlePay = 210,
    paypal = 220,
    stripe = 240
}

export enum PaymentEnvironment {
    test = 10,
    production = 20
}

//Si puo' pagare in struttura, pagare subito, o con un bonifico
export enum PaymentMode {
    pagaStruttura = 10,
    pagaBonifico = 50,
    pagaAdesso = 200
}

export enum TipoScadenza {
    scadenzaImmediata = 10,
    rateIdentiche = 20,
    ratePercentuali = 30
}

export enum AzioneTesseramento {
    emissioneNuovaTessera = 10,
    rinnovoTessera = 20,
    upgradeTessera = 100
}


export enum TipoAutomatismoTessera {
    manuale = 0,
    automatico = -1
}

export enum AutomatismoApplicazioneTessera {
    pagamento = 1,
    gratuita = -1
}

//Stati possibili a seguito di una richiesta pagamento Paypal
/*
The possible values are:

CREATED. The order was created with the specified context.
SAVED. The order was saved and persisted. The order status continues to be in progress until a capture is made with final_capture = true for all purchase units within the order.
APPROVED. The customer approved the payment through the PayPal wallet or another form of guest or unbranded payment. For example, a card, bank account, or so on.
VOIDED. All purchase units in the order are voided.
COMPLETED. The payment was authorized or the authorized payment was captured for the order.
PAYER_ACTION_REQUIRED. The order requires an action from the payer (e.g. 3DS authentication). Redirect the payer to the "rel":"payer-action" HATEOAS link returned as part of the response prior to authorizing or capturing the order.
*/
export enum PaypalStatus {
    created = 'CREATED',
    saved = 'SAVED',
    approved = 'APPROVED',
    voided = 'VOIDED',
    completed = 'COMPLETED',
    payer_action_required = 'PAYER_ACTION_REQUIRED'
}


export enum FileType{
    immagini = "file-photo-o",
    video = "file-movie-o",
    audio = "file-audio-o",
    zip = "file-archive-o",
    text = "file-text-o",
    indefinito = "file-o",
    word = "file-word-o",
    excel = "file-excel-o",
    powerpoint = "file-powerpoint-o",
    pdf = "file-pdf-o",
}

//Indica chi puo' visualizzare la location nell'app
//Tutti, Nessuno (Location nascosta), Utenti Specifici (quando la location ha un IDAZIENDACLIENTE, solo gli Utenti legati alla azienda)
export enum LocationAppVisibility {
    tutti = -1,
    nessuno = 0,
    utentiSpecifici = -2
}

export enum ModalitaFruizione{
    inPresenza = 10,
    inRemoto = 20
}

/**
 * Indica se il corso è previsto nel futuro, in corso o già concluso
 */
export enum TempoCorso {
    FUTURO   = 'futuro',
    IN_CORSO = 'incorso',
    PASSATO = 'passato'
}



export class ValueList {

    value: any;
    description: any;
    selected: boolean;
    itemIcon: string;

    /**
     * 
     * @param valore Valore Elemento
     * @param descrizione Descrizione
     */
    constructor(valore: any, descrizione: any) {
        this.value = valore;
        this.description = descrizione;
        this.selected = false;
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
            if (ValueList.isNumber(key) == false) {
                let field = key;
                let value = objEnum[field];
                let decodifica = ValueList.decode(objEnum, value);
                let element = new ValueList(value, decodifica);

                retElements.push(element);
            }
        });

        return retElements;
    }

    /**
     * Ritorna TRUE / FALSE a seconda se un elemento è Numerico o No
     * @param value Valore da controllare
     */
    static isNumber(value: string | number): boolean
    {
      return ((value != null) &&
              (value !== '') &&
              !isNaN(Number(value.toString())));
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

export enum SegmentCorsi {
    tutti = 10,
    mioLivello = 20
}

export enum StatoIscrizione{
    confermata = -1,
    inProva = 0
}

export enum Mesi {
    gennaio = 1,
    febbraio = 2,
    marzo = 3,
    aprile = 4,
    maggio = 5,
    giugno = 6,
    luglio = 7,
    agosto = 8,
    settembre = 9,
    ottobre = 10,
    novembre = 11,
    dicembre = 12

}

//Identifica un corso rispett ad oggi
export enum TimeTrainerCourse {
    attivi = 0,
    passati = -1,
    futuri = 1
  
  }

export enum RangeSearch {
    giorno = 10,
    settimana = 20,
    mese = 30
}  






//#endregion