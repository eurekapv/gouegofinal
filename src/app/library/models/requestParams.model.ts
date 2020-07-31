//Classe con parametri da impostare nelle Request
  export class RequestParams {

    child_level?: number; //Profondita Richiesta
    top?: number; //Numero massimo di elementi ritornati
    orderBy?: string; //Ordinamento asc || desc
    decode:RequestDecode; //Oggetto per la richiesta di decodifica automatica dei dati ricevuti

    constructor() {
        this.decode = new RequestDecode();
    }
  }

  /**
   * Classe con la definizione dei parametri di decodifica se richiesta
   */
  export class RequestDecode {
    active?: boolean;   //TRUE: si richiede la decodifica alla ricezione degli elementi
    foreignFields?: RequestForeign[]; 
    //Se non passato vengono decodificati tutti i campi di foreign key con le describeRowFiels,
    //altrimenti è possibile specificare le foreignKey da decodificare
   
    constructor() {
        this.active = false;
        this.foreignFields = [];
    }

    /**
     * Aggiunge una ForeignKey tra quelle da decodificare
     * Ritorna l'oggetto RequestForeign
     * @param nameField Nome del campo di Foreign Key
     */
    addForeignField(nameField:string ): RequestForeign {

        let docForeign: RequestForeign;
        if (nameField && nameField.length !== 0) {
            docForeign = new RequestForeign(nameField);
            this.foreignFields.push(docForeign);
        }

        return docForeign;
    }

  }
 
  /**
   * Classe con le foreignKey usate per la decodifica, e se presenti i campi di describe da usare
   */
  export class RequestForeign {
    nameField: string;
    describeFields?: string[];

    constructor(nameField: string) {

        this.nameField = nameField;
        this.describeFields = [];
    }

    addDescribeField(nameField: string) {
        if (nameField && nameField.length !== 0) {
            this.describeFields.push(nameField);
        }
    }
  }

  

