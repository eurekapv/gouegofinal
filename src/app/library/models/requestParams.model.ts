import { isDate } from 'util';
import { TypeDefinition } from './descriptor.model';
import { IDLibrary } from './idlibrary.model';

//Classe con parametri Request POST
export class PostParams {
  key: string;
  value: any;
  exportOnlyDocModified: boolean; //Se Value è un documento, indica se esportare solo i documenti modificati
  exportOnlyPropertyModified: boolean; //Se Value è un documento, indica se esportare solo le proprietà modificate o tutte

  constructor() {
    this.exportOnlyPropertyModified = false;
    this.exportOnlyDocModified = false;
  }

  /**
   * Controlla se il value contenuto è di tipo basico
   */
  isBasicType(): boolean {
    let basic = false;
    let typeVar: TypeDefinition;
    let arBasicType: TypeDefinition[] = [];

    typeVar = IDLibrary.getValueType(this.value);
    arBasicType.push(TypeDefinition.boolean);
    arBasicType.push(TypeDefinition.char);
    arBasicType.push(TypeDefinition.date);
    arBasicType.push(TypeDefinition.dateTime);
    arBasicType.push(TypeDefinition.number);
    arBasicType.push(TypeDefinition.numberDecimal);
    arBasicType.push(TypeDefinition.time);
    
    if (arBasicType.includes(typeVar)) {
      basic = true;
    }

    return basic;
  }

  

  /**
   * Esporta l'insieme chiave valore come
   * "chiave": valore
   * in formato JSON
   */
  exportJSON(): string {
    let jsonReturn = '';
    let jsonValue = IDLibrary.exportJSONValue(this.value, this.exportOnlyPropertyModified, this.exportOnlyDocModified);

    jsonReturn = `\"${this.key}\":` + jsonValue;

    return jsonReturn;
  }


  /**
   * Dato un oggetto PostParams o un ArrayPostParams controlla 
   * che gli elementi siano di tipo basico
   */
  static getBasicTypeFrom(myParams: PostParams | PostParams[]): boolean {
    let basic = false;
    if (myParams) {
      if (Array.isArray(myParams)) {
        basic = true;

        for (let index = 0; index < myParams.length; index++) {
          const element = myParams[index];
          if (element.isBasicType() == false) {
            basic = false;
            break;
          }
        }
        
      }
      else {
        basic = myParams.isBasicType();
      }
    }
    

    return basic;
  }


  /**
   * Viene creato un oggetto JSON con gli elementi presenti in myParams
   * @param myParams Singolo oggetto PostParams o Array di PostParams
   */
  static getJsonFrom(myParams: PostParams | PostParams[]): string {
    let jsonReturn = '';
    if (myParams) {

      if (Array.isArray(myParams)) {
        for (let index = 0; index < myParams.length; index++) {
          const element = myParams[index];
          let jsonSingle = element.exportJSON();
          if (jsonReturn.length !== 0) {
              jsonReturn += ', ';
          }

          jsonReturn += jsonSingle;
          
        }
      }
      else {
        jsonReturn = myParams.exportJSON();
      }
    }

    jsonReturn = '{' + jsonReturn + '}';

    return jsonReturn;
  }
}


//Classe con parametri da impostare nelle Request di tipo Get
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

  

