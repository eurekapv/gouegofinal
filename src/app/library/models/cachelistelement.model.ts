import { IDDocument } from './iddocument.model';

export class CacheListElement {
    className: string;
    list: IDDocument[];

    constructor(className: string) {

        //Nome della classe
        this.className = className;
        //Lista elementi
        this.list = [];
        
    }

    /**
     * Elemento
     * @param element Elemento da aggiungere
     * @param updateExist Prima di aggiungere controlla se presente e in caso aggiorna
     */
    addElement(element: IDDocument, updateExist=true) {

        let findEl: IDDocument;
        let actionAdd = false;

        if (element) {
            //Prima di aggiungerlo controllo se è presente
            if (updateExist) {
                findEl = this.findElementById(element['ID']);
                if (!findEl) {
                    actionAdd = true;
                }
                else {
                    //Aggiornare le proprietà
                    findEl = element;
                }

            }
            else {
                //Non devo guardare se esiste aggiungi e taci
                actionAdd = true;
            }

            if (actionAdd) {
                this.list.push(element);
            }
    }
    }

    /**
     * Ricerca un elemento
     * @param id Chiave primaria
     */
    findElementById(id: string) {
        
        return this.list.find(el => {
            return el.ID == id;
        });
    }

    /**
     * Ricerca un elemento nella lista per nome campo <-> valore
     * @param fieldName Nome del campo
     * @param value Valore cercato
     */
    findElementByFieldName(fieldName: string, value: any) {
        return this.list.find(el => {
            return el[fieldName] == value;
        });
    }


}