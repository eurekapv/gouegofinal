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
}