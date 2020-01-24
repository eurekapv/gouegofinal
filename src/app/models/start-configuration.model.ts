import { Gruppo } from './gruppo.model';


export class StartConfiguration {
    private _ready: boolean; //Indica se la connessione con il server è avvenuta
    private _errorMessage: string; //Errore occorso

    private _appId: string;  //Identificatore connessione
    private _urlDomain: string; //Dominio o IP da contattare
    private _urlProtocol: string; //Protocollo usato http o https
    private _urlPort: number; //Porta utilizzata
    private _urlComponent: string; //Parte dell'URL relativa al componente
    private _urlBase: string; // Url di Base per effettuare la chiamata
    private _urlLogo: string; // Url Logo da visualizzare
    private _urlLogoMenu: string; // Url Logo da visualizzare nel menu
    private _companyName: string; //Nome Società
    private _titleApp: string; //Titolo Applicazione
    private _gruppo: Gruppo; //Gruppo Sportivo

    
    constructor(testingMode: boolean, secureProtocol: boolean) {

        this._urlComponent = 'COMPGOUEGO';
        this._ready = false;
        this._titleApp = 'Gouego';
        this._companyName = 'Gouego Sport';
        this._urlLogo = 'assets/img/logomini.png';
        this._urlLogoMenu = 'assets/img/logomini.png';
        this._appId = '00F15A91-5395-445C-B7F4-5BA594E55D2F'; 

        if (secureProtocol) {
            this._urlProtocol = 'https'
        }
        else {
            this._urlProtocol = 'http'
        }

        if (testingMode) {
            //Modalità in locale
            //Protocllo per forza http
            this._urlProtocol = 'http';
            this._urlDomain = 'localhost/gouegoapi'
        }
        else {
            //Modalità Server
            this._urlDomain = 'www.gouego.com/gouegoapi'
        }


    }

    // Utilizzato al termine di una chiamta di 
    // Autorizzazione
    setGruppoAuthorization(responseData: any) {
        // Inizializzo il Gruppo
        this._gruppo = new Gruppo();
        this._gruppo.setJSONProperty(responseData);

        if (this._gruppo.IMAGEBRAND) {
            this._urlLogo = this._gruppo.IMAGEBRAND;
        }

        if (this._gruppo.DENOMINAZIONE) {
            this._companyName = this._gruppo.DENOMINAZIONE;
        }

        this._ready = true;
    }

    get gruppo(): Gruppo {
        return this._gruppo;
    }

    set gruppo(value: Gruppo) {
        this._gruppo = value;
    }

    get urlLogoMenu() {
        return this._urlLogoMenu;
    }

    set urlLogoMenu(value: string) {
        this._urlLogoMenu = value;
    }

    get urlLogo() {
        return this._urlLogo;
    }

    set urlLogo(value: string) {
        this._urlLogo = value;
    }

    get errorMessage() {
        return this._errorMessage;
    }

    set errorMessage(value: string) {
        this._errorMessage = value;
    }

    get companyName() {
        return this._companyName;
    }

    set companyName(value: string) {
        this._companyName = value;
    }

    get titleApp() {
        return this._titleApp;
    }

    set titleApp(value: string) {
        this._titleApp = value;
    }    

    get ready(): boolean {
        return this._ready;
    }
    
    set ready(value: boolean) {
        this._ready = value;
    }

    // get set urlPort
    get urlPort() : number {
        return this.urlPort;
    }

    set urlPort(value: number) {
        this._urlPort = value;
    }

    // get set appId
    get appId() {
        return this._appId;
    }

    set appId(value: string) {
        this._appId = value;
    }


    get urlDomain():string {
        return this._urlDomain;
    }

    //Url di Base per effettuare la chiamata
    get urlBase():string {
        let myUrl = `${this._urlProtocol}://${this._urlDomain}`;
        if (this._urlPort) {
            myUrl = myUrl + ':' + this._urlPort
        }

        myUrl = myUrl + '/' + this._urlComponent;

        return myUrl;
    }

    


}