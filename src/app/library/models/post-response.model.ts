import { IDDocument } from "./iddocument.model";
import { DynamicClass } from "./structure.model";

export class PostResponse {
    //Risposta ottenuta dal server 
    private _document: string;
    result: boolean;
    message: string; 
    developerMessage: string;
    code: string; //Eventuale codice ritornato dal server

    public set document(value:string) {
        this._document = value;
    }

    public get document(): string {
        return this._document;
    }


    setFromResponse(response) {

        if(response){
            this.result = response['result'];
            this.message = response['message'];
            this.code = response['code'];
            this.developerMessage = response['developerMessage'];
        }
    }

    /**
     * Ritorna il documento Tipizzato
     * @returns 
     */
    getTipizedDocument<T extends IDDocument>(): T {

        let single;
        let newClass = this.createDoc<T>(single);

        if (this._document && this._document.length != 0) {
            newClass.setJSONProperty(this._document);
        }
        else {
            newClass = null;
        }
        
        return newClass;
    }

    getDocument(): any {
        let doc: any;

        if (this._document && this._document.length != 0) {
            doc = JSON.parse(this._document);
        }

        return doc;
    }


   /**
   * 
   * @param c 
   * @returns 
   */
    createDoc<Type>(c: { new (): Type }): Type {
        return new c();
    }
    
}