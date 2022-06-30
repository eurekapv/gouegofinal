import { environment } from "src/environments/environment";

export class LogApp {

    /**
     * Visualizza in console i dati
     * @param data Dati da stampare in console
     */
    static consoleLog(data: any) {
        let showDebug = false;

        switch (environment.options.debugMode) {
            case 'full':
            case 'minimal':
                showDebug = true;
                break;
        
            default:
                break;
        }

        if (showDebug) {

            console.log(data);
        }
    }
}