export class LogApp {

    /**
     * Visualizza in console i dati
     * @param data Dati da stampare in console
     */
    static consoleLog(data: any) {
        let showDebug = false;

        if (showDebug) {
            console.log(data);
        }
    }
}