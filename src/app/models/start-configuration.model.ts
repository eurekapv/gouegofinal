import { Gruppo } from './gruppo.model';
import { TipoPrivateImage } from './valuelist.model';


export class StartConfiguration {
    private _ready: boolean; //Indica se la connessione con il server è avvenuta
    private _errorMessage: string; //Errore occorso

    private _appId: string;  //Identificatore connessione
    private _urlDomain: string; //Dominio o IP da contattare
    private _urlProtocol: string; //Protocollo usato http o https
    
    private _urlComponent: string; //Parte dell'URL relativa al componente
    private _urlBase: string; // Url di Base per effettuare la chiamata

    //Immagini rettangolari utilizzate come Logo
    private _companyUrlLogo: string; // Logo Url company (Impostata in BackEnd)
    private _appUrlLogo: string;  // Logo Url App Gouego (Statica di default)

    //Immagini utilizzate come Icona quadrata
    private _companyUrlIcon: string; // Icon company (Impostata in BackEnd)
    private _appUrlIcon: string; // Icon App Gouego (Statica di Default)

    private _companyName: string; //Nome Società
    private _titleApp: string; //Titolo Applicazione
    private _gruppo: Gruppo; //Gruppo Sportivo

    private _idAreaSelected: string; //IDArea Operativa Selezionata
    private _urlFileServer: string; //URL per il recupero di file dal server Gouego
    
    constructor(testingMode: boolean, secureProtocol: boolean) {

        this._urlComponent = 'COMPGOUEGO';
        this._ready = false;
        this._titleApp = 'Gouego';
        this._companyName = 'Gouego Sport';

        //Immagine Rettangolare

        //Questa è sempre una immagine statica
        this._appUrlLogo = 'assets/img/logoapp.png';
        //Questa è inizialmente come appUrlLogo ma il server puo' mandarcene un'altra
        this._companyUrlLogo = this._appUrlLogo ;


        //Immagine Quadrata come ICONA
        //Questa è sempre una immagine statica
        this._appUrlIcon = 'assets/img/iconapp.png';

        //Questa è inizialmente come appUrlIcon ma il server puo' mandarcene un'altra
        this._companyUrlIcon = this._appUrlIcon;


        this._appId = '00F15A91-5395-445C-B7F4-5BA594E55D2F'; 
        this._idAreaSelected = '';
        
        if (secureProtocol) {
            this._urlProtocol = 'https'
        }
        else {
            this._urlProtocol = 'http'
        }

        if (testingMode) {
            //Modalità in locale
            //Protocollo per forza http
            this._urlProtocol = 'http';
            this._urlDomain = 'localhost/gouegoapi';
            
            this._urlFileServer = 'localhost/gouego';
        }
        else {
            //Modalità Server
            this._urlDomain = 'www.gouego.com/gouegoapi';
            this._urlFileServer = 'www.gouego.com/gouego';
            
        }
        


    }

    // Utilizzato al termine di una chiamata di 
    // Autorizzazione
    setGruppoAuthorization(responseData: any) {
        // Inizializzo il Gruppo
        this._gruppo = new Gruppo();
        this._gruppo.setJSONProperty(responseData);

        //Ciclo sulle immagini ricevute (se presenti)
        this._gruppo.PRIVATEIMAGE.forEach(elImage => {

            if (elImage.FILENAMEESTENSIONE) {
                switch (elImage.TIPO) {
                    case TipoPrivateImage.icon:
                        this._companyUrlIcon = `${this._urlProtocol}://${this._urlFileServer}/${elImage.FILENAMEESTENSIONE}`;
                        break;
                    case TipoPrivateImage.logo:
                        this._companyUrlLogo = `${this._urlProtocol}://${this._urlFileServer}/${elImage.FILENAMEESTENSIONE}`;
                        break;
                
                    default:
                        break;
                }
            }
            
        });

        if (this._gruppo.DENOMINAZIONE) {
            this._companyName = this._gruppo.DENOMINAZIONE;
        }

        

    }

    get gruppo(): Gruppo {
        return this._gruppo;
    }

    set gruppo(value: Gruppo) {
        this._gruppo = value;
    }

    get idAreaSelected(): string {
        return this._idAreaSelected;
    }

    set idAreaSelected(value: string) {
        this._idAreaSelected = value;
    }

    /**
     * Ritorna il logo standard di Gouego
     */
    get appUrlLogo() {
        return this._appUrlLogo;
    }

    set appUrlLogo(value: string) {
        this._appUrlLogo = value;
    }

    /**
     * Ritorna il logo aziendale
     */
    get companyUrlLogo() {
        return this._companyUrlLogo;
    }

    set companyUrlLogo(value: string) {
        this._companyUrlLogo = value;
    }
    //#endregion

    //#region Brand Logo Image
    /**
     * Ritorna Icona Rettangolare Standard
     */
    get appUrlIcon() {
        return this._appUrlIcon;
    }

    set appUrlIcon(value: string) {
        this._appUrlIcon = value;
    }


    /**
     * Ritorna Icona Aziendale
     */
    get companyUrlIcon() {
        return this._companyUrlIcon;
    }

    set companyUrlIcon(value: string) {
        this._companyUrlIcon = value;
    }    
    //#endregion

    

    /**
     * Ritorna Logo rettangolare da utilizzare
     */
    getUrlLogo() {
        return (this._companyUrlLogo ? this._companyUrlLogo : this._appUrlLogo)
    }

    /**
     * Ritorna una Icona quadrata
     */
    getUrlIcon() {
        return (this._companyUrlIcon ? this._companyUrlIcon : this._appUrlIcon)
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

    get urlFileServer(): string {
        let myUrl = `${this._urlProtocol}://${this._urlFileServer}`;

        return myUrl
    }

    //Url di Base per effettuare la chiamata
    get urlBase():string {
        let myUrl = `${this._urlProtocol}://${this._urlDomain}`;


        myUrl = myUrl + '/' + this._urlComponent;

        return myUrl;
    }



    


}