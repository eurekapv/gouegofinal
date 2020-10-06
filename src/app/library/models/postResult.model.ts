export class PostResponse {
    //Risposta ottenuta dal server 
    private _document: string;
    result: boolean;
    message: string; 
    code: string; //Eventuale codice ritornato dal server

    public set document(value:string) {
        this._document = value;
    }

    public get document(): string {
        return this._document;
    }



    getDocument(): any {
        let doc: any;

        if (this._document && this._document.length != 0) {
            doc = JSON.parse(this._document);
        }

        return doc;
    }
    
}