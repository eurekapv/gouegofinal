import { Gruppo } from './gruppo.model';
import { TipoPrivateImage } from './valuelist.model';
import { HttpHeaders } from '@angular/common/http';
import { ConnectionMode, environment } from 'src/environments/environment';

export class StartConfiguration {
    private _ready: boolean; //Indica se la connessione con il server è avvenuta
    private _errorMessage: string; //Errore occorso

    private _prefixDomain: string; //Eventuale Domain Prefix
    private _appId: string;  //Identificatore connessione
    private _urlDomain: string; //Dominio o IP da contattare
    private _urlProtocol: string; //Protocollo usato http o https
    
    private _urlComponent: string; //Parte dell'URL relativa al componente
    private _urlBase: string; // Url di Base per effettuare la chiamata (Non esiste il SET)

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

    private _authorizationAppCode: string; //Codice di autorizzazione da inviare
    private _authorizationUserCode: string; //Codice di autorizzazione utente quando loggato da inviare
    
    private _startAuthorization: StartAuthorization; //Autorizzazione ricevuta

    constructor() {

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

        //AppId gestito dagli eventi dello Start Service
        this._appId = '';
        this._idAreaSelected = '';
        

    }



    //#region PROPRIETA PUBBLICHE

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

    get appId() {
        return this._appId;
    }

    set appId(value: string) {
        this._appId = value;
    }

    // Prefix Domain
    public get prefixDomain() {
        return this._prefixDomain;
    }
    public set prefixDomain(value) {
        this._prefixDomain = value;
    }


    get urlDomain():string {
        return this._urlDomain;
    }

    get urlFileServer(): string {
        let myUrl = `${this._urlProtocol}://${this._urlFileServer}`;

        return myUrl
    }

    /**
     * Ritorna il percorso dello Storage 
     */
    get urlStorageGroup(): string {
        let myUrl = ``;

        if (this._urlProtocol && this._urlProtocol.length != 0 &&
            this._urlFileServer && this._urlFileServer.length != 0 &&
            this._appId && this._appId.length != 0) {
                myUrl = `${this._urlProtocol}://${this._urlFileServer}/storage/${this._appId}`;
            }

        return myUrl;
    }    

    //Url di Base per effettuare la chiamata
    get urlBase():string {
        let myUrl = `${this._urlProtocol}://${this._urlDomain}`;


        myUrl = myUrl + '/' + this._urlComponent;

        return myUrl;
    }

    /**
     * Codice autorizzazione Applicazione ottenuto nella fase di 
     * shaking iniziale da inviare come authcode ad ogni richiesta
     */
    get authorizationAppCode(): string {
        return this._authorizationAppCode;
    }

    set authorizationAppCode(value: string) {
        this._authorizationAppCode = value;
    }

    /**
     * Codice autorizzazione utente ottenuto nella fase di login
     * e da inviare se loggato
     */
    get authorizationUserCode(): string {
        return this._authorizationUserCode;
    }

    set authorizationUserCode(value: string) {
        this._authorizationUserCode = value;
    }

    
    public get startAuthorization() {
        return this._startAuthorization;
    }
    public set startAuthorization(value) {
        this._startAuthorization = value;
    }

    //#endregion



    //#region METODI PUBBLICI
    /**
     * 
     * @param prefixDomain Prefisso del dominio es (openbeach,demo, localhost)
     * @param testingMode 
     */
    setUrlLocation() {
        //Connessione Locale
        if (environment.connection.mode == ConnectionMode.local) {

            this._urlProtocol = environment.connection.urlLocation.local.urlProtocol;
            this._urlDomain = environment.connection.urlLocation.local.urlDomain;            
            this._urlFileServer = environment.connection.urlLocation.local.urlFileServer;
        }
        else {
            this._urlProtocol = environment.connection.urlLocation.production.urlProtocol;
            this._urlDomain = environment.connection.urlLocation.production.urlDomain;            
            this._urlFileServer = environment.connection.urlLocation.production.urlFileServer;
        }

    }
    
    // Utilizzato al termine di una chiamata di 
    // Autorizzazione
    /**
     * Preleva i dati dal documento this.startAuthorization
     * ed imposta altre proprietà del documento come
     * CompanyName - companyUrlIcon - companyUrlLogo
     */
    setFromAuthorizationGrant(): boolean {

        let flagResult: boolean = true;

        if (this.startAuthorization) {

            //Imposto il codice di Autorizzazione
            this.authorizationAppCode = this.startAuthorization.authcode;

            if (this.startAuthorization.GRUPPOSPORTIVO) {

                flagResult = true;

                //Imposto il documento del Gruppo
                this._gruppo = this.startAuthorization.GRUPPOSPORTIVO;

                //Imposto la companyName
                if (this._gruppo.DENOMINAZIONE && this._gruppo.DENOMINAZIONE.length != 0) {
                    this._companyName = this._gruppo.DENOMINAZIONE;
                }            

                //Imposto le immagini del Gruppo
                if (this._gruppo.PRIVATEIMAGE && this._gruppo.PRIVATEIMAGE.length != 0) {

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
                }
            }
            else {
                //Non ho i dati del Gruppo Sportivo
                flagResult = false;
            }


        }

        return flagResult;
    }

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
    

    /**
     * Ritorna l'headerHttp da applicare con l'impostazione 
     * @param contentType Eventuale content Type da applicare
     */
    getHttpHeaders(contentType?:string): HttpHeaders {
        let content = 'application/json';
        if (contentType && contentType.length != 0) {
            content = contentType;
        }

        let myHeaders = new HttpHeaders({'Content-type':content});
        
        //Se ho l'app-id lo imposto, 
        //altrimenti 
        if (this._appId && this._appId.length != 0) {

            myHeaders = myHeaders.append('appid',this._appId);
        }
        else {
            myHeaders = myHeaders.append('dashrequest','-1');
        }

        myHeaders = myHeaders.append('fromrequest','gouegoapp');

        //Devo inviare il codice di autorizzazione app
        if (this._authorizationAppCode && this._authorizationAppCode.length != 0) {
            myHeaders = myHeaders.append('authcode',this._authorizationAppCode);
            
        }

        //Devo inviare il codice di autorizazione utente
        if (this._authorizationUserCode && this._authorizationUserCode.length != 0) {
            myHeaders = myHeaders.append('authusercode',this._authorizationUserCode);
        }

        return myHeaders;
    }

    
    //#endregion

}

export class StartAuthorization {

    result: number;
    authcode: string;
    GRUPPOSPORTIVO: Gruppo;

    constructor() {
    }
}