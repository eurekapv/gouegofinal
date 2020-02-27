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
    //Immagini utilizzate come Icone (Altezza Max 50px)
    private _companyUrlIcon: string; // Icon Url company (Impostata in BackEnd)
    private _appUrlIcon: string;  // Icon Url App Gouego (Default)
    //Immagini utilizzate come Brand 
    private _companyUrlBrand: string; // Image Brand company (Impostata in BackEnd)
    private _appUrlBrand: string; // Image Brand App Gouego (Defualt)

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

        this._companyUrlIcon = 'assets/img/iconapp.png';
        this._appUrlIcon = 'assets/img/iconapp.png';

        this._companyUrlBrand = 'assets/img/brandapp.png';
        this._appUrlBrand = 'assets/img/brandapp.png';


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
            this._urlDomain = 'www.gouego.com/gouegoapi'
            this._urlFileServer = 'www.gouego.com/gouego'
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
                    case TipoPrivateImage.brand:
                        this._companyUrlBrand = `${this._urlProtocol}://${this._urlFileServer}/${elImage.FILENAMEESTENSIONE}`;
                        break;
                    case TipoPrivateImage.icon:
                        this._companyUrlIcon = `${this._urlProtocol}://${this._urlFileServer}/${elImage.FILENAMEESTENSIONE}`;
                        break;
                
                    default:
                        break;
                }
            }
            
        });

        if (this._gruppo.DENOMINAZIONE) {
            this._companyName = this._gruppo.DENOMINAZIONE;
        }

        console.log(this._gruppo);

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

    //#region Icon Height Max 50px
    get appUrlIcon() {
        return this._appUrlIcon;
    }

    set appUrlIcon(value: string) {
        this._appUrlIcon = value;
    }

    get companyUrlIcon() {
        return this._companyUrlIcon;
    }

    set companyUrlIcon(value: string) {
        this._companyUrlIcon = value;
    }
    //#endregion

    //#region Brand Logo Image
    get appUrlBrand() {
        return this._appUrlBrand;
    }

    set appUrlBrand(value: string) {
        this._appUrlBrand = value;
    }

    get companyUrlBrand() {
        return this._companyUrlBrand;
    }

    set companyUrlBrand(value: string) {
        this._companyUrlBrand = value;
    }    
    //#endregion

    /**
     * Ritorna una icona (Max Height: 50px):  quella Default o quella della Company
     */
    getUrlIcon() {
        return (this._companyUrlIcon ? this._companyUrlIcon : this._appUrlIcon)
    }

    /**
     * Ritorna una immagine di Brand: quella Default o quella della Company
     */
    getUrlBrand() {
        return (this._companyUrlBrand ? this._companyUrlBrand : this._appUrlBrand)
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