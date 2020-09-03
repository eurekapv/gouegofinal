import { IDDocument } from './iddocument.model';

export class PostResponse {
    //Risposta ottenuta dal server 
    private _document: string;
    result: boolean;
    message: string;

    public set document(value:string) {
        this._document = value;
    }



    getDocument(): any {
        let doc: any;

        if (this._document && this._document.length != 0) {
            doc = JSON.parse(this._document);
        }

        return doc;
    }
    
}