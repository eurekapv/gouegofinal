import { CacheListElement } from './cachelistelement.model';
import { IDDocument } from './iddocument.model';
import { Descriptor } from './descriptor.model';

export class Cache {
    list: CacheListElement[]

    constructor() {
        this.list = [];
    }


    /**
     * Cerca nell'Array list se è presente un oggetto della stessa className
     * @param className Nome della classe cercato
     */
    findByClassName(className:string): CacheListElement {

        return this.list.find(el => {
            return el.className == className;
        });
    }


    /**
     * Aggiunge alla cache un documento
     * @param doc Documento da aggiungere alla cache
     */
    addTo(doc: IDDocument) {
        //Step 1: Cercare nella lista il CacheListElement corretto con il nome classe 
        let objDescriptor: Descriptor;
        let elCacheList: CacheListElement;
        let updateIfExist = false;

        if (doc) {
            objDescriptor = doc.getDescriptor();

            if (objDescriptor) {
                //Mi son fatto restituire l'elemento cache
                elCacheList = this.findByClassName(objDescriptor.className);

                //Non ho nessuna cache lista dell'oggetto specificato
                if (!elCacheList) {
                    //Non ce l'abbiamo ancora in cache
                    elCacheList = new CacheListElement(objDescriptor.className);
                    this.list.push(elCacheList);

                    updateIfExist = false;
                    elCacheList.addElement(doc, updateIfExist);

                }
                else {

                    //L'oggetto specificato possiede gia una lista di cache
                    updateIfExist = true;
                    elCacheList.addElement(doc, updateIfExist );
                }
            }
        }
        
    }
}