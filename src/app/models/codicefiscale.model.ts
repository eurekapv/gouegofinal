import { Sesso } from './valuelist.model';

export class CodiceFiscale {

    codiceFiscale: string;
    dataNascita: Date;
    sesso: Sesso;
    codiceControllo: string;

    codiceCatastale: string;
    comune: string;
    provincia: string;
    regione: string;
    codice: string;
    cap: string;
    checkValidate: boolean;
    msgValidate: string;

    constructor() {
        this.checkValidate = false;
        this.msgValidate = '';
    }

    /**
	 * Normalizes a CF by removing white spaces and converting to upper-case.
	 * @param string cf Raw CF, possibly with spaces.
	 * @return string Normalized CF.
	 */
	private normalize(cf: string): string
	{
		return cf.replace(/\s/g, "").toUpperCase();
    }
  
  /**
	 * Returns the formatted CF. Currently does nothing but normalization.
	 * @param string cf Raw CF, possibly with spaces.
	 * @return string Formatted CF.
	 */
	private format(cf: string): string
	{
		return this.normalize(cf);
    }
  
  /**
	 * Validates a regular CF.
	 * @param string cf Normalized, 16 characters CF.
	 * @return string Null if valid, or string describing why this CF must be
	 * rejected.
	 */
	private PRIVATE_validate_regular(cf: string): string
	{
		if( ! /^[0-9A-Z]{16}$/.test(cf) )
			return "Invalid characters.";
		var s = 0;
		var even_map = "BAFHJNPRTVCESULDGIMOQKWZYX";
		for(var i = 0; i < 15; i++){
			var c = cf[i];
			var n = 0;
			if( "0" <= c && c <= "9" )
				n = c.charCodeAt(0) - "0".charCodeAt(0);
			else
				n = c.charCodeAt(0) - "A".charCodeAt(0);
			if( (i & 1) === 0 )
				n = even_map.charCodeAt(n) - "A".charCodeAt(0);
			s += n;
		}
		if( s%26 + "A".charCodeAt(0) !== cf.charCodeAt(15) )
			return "Invalid checksum.";
		return null;
    }
  
  /**
	 * Validates a temporary CF.
	 * @param string cf Normalized, 11 characters CF.
	 * @return string Null if valid, or string describing why this CF must be
	 * rejected.
	 */
	private PRIVATE_validate_temporary(cf: string): string
	{
		if( ! /^[0-9]{11}$/.test(cf) )
			return "Invalid characters.";
		var s = 0;
		for(var i = 0; i < 11; i++ ){
			var n = cf.charCodeAt(i) - "0".charCodeAt(0);
			if( (i & 1) === 1 ){
				n *= 2;
				if( n > 9 )
					n -= 9;
			}
			s += n;
		}
		if( s % 10 !== 0 )
			return "Invalid checksum.";
		return null;
    }
  
  /**
	 * Verifies the basic syntax, length and control code of the given CF.
	 * @param string cf Raw CF, possibly with spaces.
	 * @return string Null if valid, or string describing why this CF must be
	 * rejected.
	 */
	validate(): boolean	{
        let check = false;
        let msg = '';

        if (this.codiceFiscale.length !==0) {
            this.codiceFiscale = this.normalize(this.codiceFiscale);

            if( this.codiceFiscale.length === 0 ) {
                msg = 'Empty'
            }
            else if( this.codiceFiscale.length === 16 ) {
                msg = this.PRIVATE_validate_regular(this.codiceFiscale);
            }
            else if( this.codiceFiscale.length === 11 ) {
    
                msg = this.PRIVATE_validate_temporary(this.codiceFiscale);
            }
            else {
                msg = "Invalid length.";
            }
        }
        else {
            msg = "Invalid length.";
        }

        //Se c'e' un messaggio, check non passato
        if (msg) {
            check=false;
        }
        else {
            check = true;
        }

        this.msgValidate = msg;
        this.checkValidate = check;
        return check;
    }

    /**
     * Decodifica il codice fiscale nelle sue parti
     */
    basicDecode(): boolean {
        let result = false;

        if (this.codiceFiscale.length == 16) {
            result = this.basicDecode16();
        }

        return result;
    }
    
    /**
     * Effettua una prima e semplice decodifica dei dati contenuti nel codice fiscale
     */
    private basicDecode16(): boolean {
        let chDay = '';
        let chMonth = '';
        let chYear = '';
        let day = 0;
        let month = 0;
        let year = 0;
        let secolo = 2000;
        let result = true;
        let adesso = new Date();

        //0123456789  10 11 12 13 14 15
        //CVLPTR72P0  9  G  3  8  8   D
        

        //CODICE CONTROLLO
        this.codiceControllo = this.codiceFiscale.substr(15,1);
        
        //CODICE CATASTALE
        this.codiceCatastale = this.codiceFiscale.substr(11,4);

        chDay = this.codiceFiscale.substr(9,2);
        chMonth = this.codiceFiscale.substr(8,1);
        chYear = this.codiceFiscale.substr(6,2);

        try {
            day = parseInt(chDay,10);
            year = parseInt(chYear, 10);

        } catch (error) {
            result = false;
        }
        
        if (result) {

            //Determino il mese
            month = this.getMonthFromLetter(chMonth);
            if (month == -1) {
                //errore
                result = false;
            }
        }

        //Sistemazione Year
        if (result) {
            secolo = 2000;
            if ((secolo + year) > adesso.getFullYear() ) {
                //Cambio secolo e metto il 1900
                secolo = 1900;
            }

            year = secolo + year;

        }

        //Sistemazione Day
        if (result) {
            if (day > 40 ) {
                day = day - 40;

                //SESSO
                this.sesso = Sesso.femmina;
            }
            else {

                //SESSO
                this.sesso = Sesso.maschio;
            }

            //DATA NASCITA
            this.dataNascita = new Date(year, month, day);
        }
        


        return result;
    }



    private getMonthFromLetter(letter: string): number {
        let arMesi = [];
        let index = -1;
        arMesi.push('A');
        arMesi.push('B');
        arMesi.push('C');
        arMesi.push('D');
        arMesi.push('E');
        arMesi.push('H');
        arMesi.push('L');
        arMesi.push('M');
        arMesi.push('P');
        arMesi.push('R');
        arMesi.push('S');
        arMesi.push('T');

        index = arMesi.findIndex(el => {
            return el == letter;
        });

        //Questo e' il numero del mese in javascript
        return index;        
    }

}