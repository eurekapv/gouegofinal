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
    

    constructor(campoName: string, 
                campoType: TypeDefinition,
                relDoc?: string,
                relName?: string) {
        this.fieldName = campoName;
        this.fieldType = campoType;
        this._relFieldDoc = relDoc;
        this._relFieldName = relName;

        
    }

    private _relFieldDoc: string;
    private _relFieldName: string;

    get relFieldDoc(): string {
        return this._relFieldDoc;
    }

    set relFieldDoc(value:string) {
        this._relFieldDoc = value;
    }

    get relFieldName(): string {
        let strReturn = '';
        if (this._relFieldDoc && this._relFieldDoc.length !== 0) {
            if (this._relFieldName && this._relFieldName) {
                strReturn = this._relFieldName;
            }
            else {
                strReturn = 'ID';
            }
        }

        return strReturn;
    }

    set relFieldName(value:string) {
        this._relFieldName = value;
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


    /**
     * Controlla e indica se ha una relazione il campo
     */
    get isForeignKey():boolean {
        let result = false;

        if (this.relFieldDoc) {
            result = true;
        }

        return result;
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

    //Campo che descrive la riga (usato di default per le decodifiche)
    private _describeField: string;

    
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

    get describeField() {
        return this._describeField;
    }

    set describeField(value: string) {
        this._describeField = value;
    }    

    get doRemote() {
        return this._doRemote;
    }

    set doRemote(value: boolean) {
        this._doRemote = value;
    }

    /**
     * Ritorna un array con i campi foreignkey
     */
    get foreignKeys():TypeReflector[] {

        let arForeign: TypeReflector[] = [];

        if (this.fields) {
            for (let index = 0; index < this.fields.length; index++) {
                const element = this.fields[index];
                const isForeign = element.isForeignKey;
                if (isForeign) {
                    arForeign.push(element);
                }
                
            }
        }

        return arForeign;
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
    add(campoName: string, campoType: TypeDefinition, relDoc?:string, relField?:string) {
        let typeR = new TypeReflector(campoName, campoType, relDoc, relField);
        this.fields.push(typeR);
    }


    /**
     * Ricerca tra i campi quello denominato fieldName e ne setta una relazione con
     * relDoc grazie a relFieldName
     * @param fieldName 
     * @param relDoc 
     * @param relFieldName 
     */
    setRelation(fieldName: string, relDoc:string, relFieldName?: string) {
        
        let findField = this.fields.find(el => {
            return el.fieldName == fieldName;
        });

        if (findField) {
            findField.relFieldName = relFieldName;
            findField.relFieldDoc = relDoc;
        }
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

    /**
     * Cerca e ritorna il campo per fieldName
     * @param fieldName Nome del campo
     */
    getByFieldName(fieldName: string) : TypeReflector {
        return this.fields.find(el => {
            return el.fieldName == fieldName;
        });
    }
}