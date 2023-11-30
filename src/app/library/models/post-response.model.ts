import { Utente } from "src/app/models/utente/utente.model";
import { IDDocument } from "./iddocument.model";
import { DynamicClass } from "./structure.model";
import { ErrorDoc } from "./error-doc.model";

export class PostResponse {

    result: boolean;
    message: string; 
    developerMessage: string;
    code: string; //Eventuale codice ritornato dal server
    listDocuments: any[]; //Eventuali documenti di ritorno
    listMessages: ErrorDoc[]; //Eventuali messaggi di ritorno

    constructor() {
        this.listDocuments = [];
    }
    
    //Risposta ottenuta dal server 
    private _document: string;
    public set document(value:string) {
        this._document = value;
    }

    public get document(): string {
        return this._document;
    }

    /**
     * Converte l'informazione data in un oggetto tipizzato
     * @param data Data che rappresenta PostResponse
     * @param instanceClass Istanza del Documento presente nella listDocuments
     */
    static toPostResponse(data: any, instanceClass?:IDDocument): Promise<PostResponse> {

        return new Promise<PostResponse>((resolve) => {
            let ptResponse: PostResponse = new PostResponse();
            if (typeof data == "object") {
                ptResponse.setFromResponse(data, instanceClass);
            }
            
            resolve(ptResponse);
        })
    }


    /**
     *  Imposta i dati dal valore del response ricevuto
     * @param response Dati ricevuti
     */
    setFromResponse(response: any, instanceClass?:IDDocument) {
        let prop = [];
        
        if(response) {
            console.log('Qua imposto il Doc')
            console.log(response);
            

            prop = Object.keys(response);
            
            //Ciclo le proprietà dell'oggetto in arrivo
            prop.forEach(nameField => {
                if (response.hasOwnProperty(nameField)) {

                    if (nameField == 'document') {

                        if (response[nameField] && 
                            response[nameField].length != 0) {
                            try {

                                let newClass: any = new DynamicClass(instanceClass.getDescriptor().className);
                                newClass.setJSONProperty(response[nameField]);
                                this.listDocuments.push(newClass);

                            } catch (error) {
                                
                            }
                        }

                    }
                    else if (nameField == 'listDocuments') {
                        //E' una array di documenti
                        let listDoc: any[] = response[nameField];
                        listDoc.forEach(elDoc => {
                            try {
                                let newClass: any = new DynamicClass(instanceClass.getDescriptor().className);
                                newClass.setJSONProperty(elDoc);
                                this.listDocuments.push(newClass);
                            } catch (error) {
                                console.log(error);
                            }                            
                        })
                    }
                    else if (nameField == 'listMessages') {
                        //E' una array di ErrorDoc
                        let listErrorDoc: any[] = response[nameField];
                        this.listMessages = ErrorDoc.convertListFrom(listErrorDoc);
                    }                    
                    else {
                        this[nameField] = response[nameField];
                    }
                }
            })

        }
    }

    /**
     * Analizza il documento e invia un reject se result = false
     */
    analizeResultFlag(): Promise<PostResponse> {
        return new Promise<PostResponse>((resolve, reject) => {
            if (this.result) {
                resolve(this);
            }
            else {
                reject(this.message);
            }
        })
    }

    /**
     * Estrae dalla lista dei documenti, il documento definito alla posizione position
     * @param position Zero Based Posizione richiesta
     * @returns 
     */
    getDocFromList<T>(position :number = 0): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            if (this.listDocuments && this.listDocuments.length > position) {
                resolve(this.listDocuments[position]);
            }
            else {
                reject('Document not found');
            }
        })
    }




   /**
   * Crea un documento tipizzato
   * @param c 
   * @returns 
   */
    static createTypedDoc<T extends IDDocument>(c: { new (): T }): T {
        return new c();
    }
    
}