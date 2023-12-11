import { environment } from "src/environments/environment";

export class LogApp {

    /**
     * Visualizza in console i dati
     * @param data Dati da stampare in console
     */
    static consoleLog(data: any, 
                      type:'log'|'error'|'warn' = 'log',
                      traceOn:boolean = false
                      ) {
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
                    if (traceOn) {
                        console.trace();
                    }                    
                    break;

                case 'error':
                    console.error(data);
                    console.trace();
                    break;

                case 'warn':
                    console.warn(data);
                    if (traceOn) {
                        console.trace();
                    }                    
                    break;
            
                default:
                    console.log(data);
                    if (traceOn) {
                        console.trace();
                    }                    
                    break;
            }


            
        }
    }
}