import { SettoreQrCode, ValueList } from "../valuelist.model";

export class GeneratorQrcode {

    tipo: SettoreQrCode;
    keyOne: string;
    keyTwo: string;
    qrCode: string;

    constructor() {
        this.keyOne = '';
        this.keyTwo = '';
    }

    /**
     * Crea ed imposta il valore QrCode
     * Per Corso passare keyOne = ID Iscrizione
     * Per Prenotazione passare keyOne = ID Prenotazione e KeyTwo = IDPianificazione
     * Per Evento (non c'e' ancora iscrizione)
     */
    setQrCodeFor(): boolean {
        let myQrCode = '';
        let flagCreation = false;

        switch (this.tipo) {
            case SettoreQrCode.qrCodeCorso:
                //Qui ho IDIscrizione
                if (this.keyOne && this.keyOne.length == 36) {
                    myQrCode = `${this.tipo}${this.keyOne}`;
                    flagCreation = true;
                }
                break;
            case SettoreQrCode.qrCodePrenotazione:
                if (this.keyOne && this.keyOne.length == 36 && 
                    this.keyTwo && this.keyTwo.length == 36) {

                    myQrCode = myQrCode = `${this.tipo}${this.keyOne}-${this.keyTwo}`;
                    flagCreation = true;
                }
                break;

            case SettoreQrCode.qrCodeUtente:
                //Qui ho IDUtente
                if (this.keyOne && this.keyOne.length == 36) {
                    myQrCode = `${this.tipo}${this.keyOne}`;
                    flagCreation = true;
                }
                break;

            case SettoreQrCode.qrCodeTessera:
                //Qui ho IDTessera
                if (this.keyOne && this.keyOne.length == 36) {
                    myQrCode = `${this.tipo}${this.keyOne}`;
                    flagCreation = true;
                }
                break;                

            case SettoreQrCode.qrCodeEvento:
                break;
        
            default:
                break;
        }

        this.qrCode = myQrCode;

        return flagCreation;
    }


    /**
     * Partendo dal QrCode cerca di recuperare le informazioni
     */
    splitQrCode(): boolean {
        let flagSplit = false;
        let myType: SettoreQrCode = null;
        let firstKey = '';
        let secondKey = '';
        let tmpStr = '';


        //Vediamo come siamo messi
        if (this.qrCode && this.qrCode.length != 0) {

            //Codice Utente
            if (this.qrCode.startsWith(SettoreQrCode.qrCodeUtente)) {

                tmpStr = this.qrCode.substring(SettoreQrCode.qrCodeUtente.length);
                if (tmpStr.length == 36) {
                    //Sembrerebbe corretto
                    myType = SettoreQrCode.qrCodeUtente;
                    firstKey = tmpStr;
                    flagSplit = true;
                }
            }
            else if (this.qrCode.startsWith(SettoreQrCode.qrCodeTessera)) {

                tmpStr = this.qrCode.substring(SettoreQrCode.qrCodeTessera.length);

                if (tmpStr.length == 36) {
                    //Sembrerebbe corretto
                    myType = SettoreQrCode.qrCodeTessera;
                    firstKey = tmpStr;
                    flagSplit = true;
                }
            }            
            else if (this.qrCode.startsWith(SettoreQrCode.qrCodeCorso)) {
                tmpStr = this.qrCode.substring(SettoreQrCode.qrCodeCorso.length);

                if (tmpStr.length == 36) {
                    //Sembrerebbe corretto
                    myType = SettoreQrCode.qrCodeCorso;
                    firstKey = tmpStr;
                    flagSplit = true;
                }
            }
            else if (this.qrCode.startsWith(SettoreQrCode.qrCodePrenotazione)) {
                tmpStr = this.qrCode.substring(SettoreQrCode.qrCodePrenotazione.length);

                //Sono 2 Guid e il simbolo -
                if (tmpStr.length == 36 + 36 + 1) {
                    //Sembrerebbe corretto
                    myType = SettoreQrCode.qrCodePrenotazione;
                    firstKey = tmpStr.substring(0,36);
                    secondKey = tmpStr.substring(37);
                    flagSplit = true;
                }
            }           

        }

        this.tipo = myType;
        this.keyOne = firstKey;
        this.keyTwo = secondKey;

        return flagSplit;
    }


}