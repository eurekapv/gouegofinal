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



    getDocument(): any {
        let doc: any;

        if (this._document && this._document.length != 0) {
            doc = JSON.parse(this._document);
        }

        return doc;
    }
    
}