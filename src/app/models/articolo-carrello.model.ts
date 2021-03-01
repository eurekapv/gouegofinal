import { Articolo } from "./articolo.model";

export class ArticoloCarrello {

    articolo: Articolo
    quantità: number


    get idArticolo(){
        return this.articolo.ID
    }
}
