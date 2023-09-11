export class SupportFunc {
    /**
     * Un testo viene racchiuso tra i tag <p> e </p>
     * @param text Testo
     */
    static htmlParagraph(text: string): string {
        let htmlText: string = '';
        htmlText = `<p>${text}</p>`;
        return htmlText
    }

    /**
     * Formatta un valore numerico contabile
     * @param value 
     * @returns 
     */
    static formatNumeric(value: number): string {
        let valueStr: string = '';

        if (value != null && value != undefined) {
            valueStr = (value).toLocaleString('it-IT', {minimumFractionDigits: 2});
        }

        return valueStr;
    }
}