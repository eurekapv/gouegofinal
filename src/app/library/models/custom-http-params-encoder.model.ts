import { HttpParameterCodec } from '@angular/common/http';

export class CustomHttpParamEncoder implements HttpParameterCodec {


    encodeKey(key: string): string {
        return encodeURIComponent(key);
    }

    /**
     * Questa funzione viene utilizzata quando si deve inviare i parametri sulla Query String
     * per la precisione i VALORI
     * Se il primo simbolo è > o < non lo encodo e lo faccio passare
     * @deprecated NON FUNZIONA
     * @param value 
     * @returns 
     */
    encodeValue(value: string): string {
        return encodeURIComponent(value);
    }
    decodeKey(key: string): string {
            return decodeURIComponent(key);
    }
    decodeValue(value: string): string {
            return decodeURIComponent(value);
    }
}
