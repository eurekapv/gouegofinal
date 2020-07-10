export enum TypeDefinition {
    undefined = 'undefined',
    char = 'String',
    date = 'Date',
    dateTime = 'DateTime',
    time = 'Time',
    number = 'Number',
    numberDecimal = 'Float',
    boolean = 'boolean',
    collection = 'collection'
}

/**
 * Classe di associazione NomeCampo -> Tipologia
 */
export class TypeReflector {
    fieldName: string;
    fieldType: TypeDefinition;

    constructor(campoName: string, campoType: TypeDefinition) {
        this.fieldName = campoName;
        this.fieldType = campoType;

    }

    /**
     * Ritorna TRUE se il campo è parte di un servizio Documentale
     * ID, do_deleted etc...
     */
    serviceField(): boolean {
        let value = false;
        let arServizi = ['ID','do_updated','do_loaded','do_inserted','do_deleted'];
        if (arServizi.includes(this.fieldName)) {
            value = true;
        }
        return value;
    }

    /**
     * Ritorna TRUE se il campo è un campo presente anche sul server
     */
    nativeField(): boolean {
        let value = true;
        if (this.fieldName.substr(0,1) == '_') {
            // I campi che iniziano con _ sono privati di solito di Lookup
            value = false;
        }

        return value;
    }
}

/**
 * Classe per Tipizzare intere classi
 */
export class  Descriptor{
    fields: TypeReflector[] = [];

    //Nome della classe
    private _className: string;         
    //Indica se la classe viene gestita in remoto
    private _doRemote: boolean;
    //Nome da utilizzare nelle chiamate webapi
    private _classWebApiName: string;
    
    get className() {
        return this._className;
    }

    set className(value:string) {
        this._className = value;
        
        if (!this._classWebApiName || this._classWebApiName.length == 0) {
            this._classWebApiName = value;
        }
    }

    get classWebApiName() {
        return this._classWebApiName;
    }

    set classWebApiName(value: string) {
        this._classWebApiName = value;
    }

    get doRemote() {
        return this._doRemote;
    }

    set doRemote(value: boolean) {
        this._doRemote = value;
    }

    constructor() {
        this._doRemote = false;

        this.add('ID',TypeDefinition.char);
        this.add('do_updated', TypeDefinition.boolean);
        this.add('do_loaded', TypeDefinition.boolean);
        this.add('do_inserted', TypeDefinition.boolean);
        this.add('do_deleted', TypeDefinition.boolean);
    }
    /**
     * Aggiunge un Campo/Tipo all'insieme
     * @param campoName Nome Campo
     * @param campoType Tipo Campo
     */
    add(campoName: string, campoType: TypeDefinition) {
        let typeR = new TypeReflector(campoName, campoType);
        this.fields.push(typeR);
    }

    /**
     * Aggiunge un array di NomiCampo alla stessa tipologia
     * @param arrayCampoName Array con tutti nomi dei campi
     * @param campoType Tipologia da associare
     */
    addMultiple(arrayCampoName:string[], campoType: TypeDefinition) {
        if (arrayCampoName) {
            arrayCampoName.forEach(element => {
                this.add(element, campoType);
            });
        }
    }

    /**
     * Con un nome campo torna la tipologia associata
     * @param campoName Nome del Campo
     */
    getType(campoName: string): TypeDefinition {
        let retType = TypeDefinition.undefined;

        let elType = this.fields.find(element => {
            return element.fieldName == campoName;
        });

        if (elType) {
            retType = elType.fieldType;
        }

        return retType;
    }

    
}