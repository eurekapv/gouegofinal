import { environment } from "src/environments/environment";

export class LogApp {

    /**
     * Visualizza in console i dati
     * @param data Dati da stampare in console
     */
    static consoleLog(data: any, type:'log'|'error'|'warn' = 'log') {
        let showDebug = false;

        switch (environment.options.debugMode) {
            case 'full':
            case 'minimal':
                showDebug = true;
                break;
            case 'off': 
                if (type == 'error') {
                    //gli errori li mostro sempre
                    showDebug = true;
                }
                break;
        
            default:
                break;
        }

        if (showDebug) {
            switch (type) {
                case 'log':
                    console.log(data);
                    break;

                case 'error':
                    console.error(data);
                    break;

                case 'warn':
                    console.warn(data);
                    break;
            
                default:
                    console.log(data);
                    break;
            }

        }
    }
}